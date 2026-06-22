import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR        = join(__dirname, 'data')
const OUT_FILE        = join(DATA_DIR, 'schedule.json')
const ARCHIVE_FILE    = join(DATA_DIR, 'archive.json')
const CHANGES_FILE    = join(DATA_DIR, 'changes.json')
const WNBA_FILE       = join(DATA_DIR, 'wnba-schedule.json')
const WNBA_ARCHIVE    = join(DATA_DIR, 'wnba-archive.json')
const CHANGES_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000

const DAYS_BACK    = 90
const DAYS_FORWARD = 21

function ymd(date) { return date.toISOString().slice(0, 10).replace(/-/g, '') }

function dateRange() {
  const from = new Date(); from.setDate(from.getDate() - DAYS_BACK)
  const to   = new Date(); to.setDate(to.getDate() + DAYS_FORWARD)
  return { from: ymd(from), to: ymd(to) }
}

function statusOf(comp) {
  const t = comp.status?.type || {}
  if (t.state === 'post' || t.completed) return 'completed'
  if (t.state === 'in')  return 'in-progress'
  if (t.name === 'STATUS_POSTPONED' || t.name === 'STATUS_CANCELED') return 'postponed'
  return 'scheduled'
}

function teamInfo(c) {
  return {
    name:   c.team?.displayName || c.team?.name || 'Unknown',
    abbrev: c.team?.abbreviation || '',
    logo:   c.team?.logo || null,
    id:     c.team?.id || null,
    score:  c.score ?? null,
    record: c.records?.find(r => r.type === 'total')?.summary || null,
    winner: c.winner === true,
  }
}

async function loadJson(file, fallback) {
  try { return JSON.parse(await readFile(file, 'utf-8')) } catch { return fallback }
}

function updateChanges(prevGames, newGames, existingChanges) {
  const prevById    = new Map(prevGames.map(g => [g.id, g]))
  const newById     = new Map(newGames.map(g => [g.id, g]))
  const changesById = new Map(existingChanges.map(c => [c.gameId, c]))
  const now         = new Date().toISOString()

  for (const g of newGames) {
    const prev = prevById.get(g.id)
    if (!prev || prev.status === 'completed') continue
    const dateChanged   = prev.date !== g.date
    const statusChanged = prev.status !== g.status &&
      (g.status === 'postponed' || prev.status === 'postponed')
    if (!dateChanged && !statusChanged) continue

    const existing      = changesById.get(g.id)
    const baselineDate  = existing ? existing.oldDate   : prev.date
    const baselineStatus= existing ? existing.oldStatus : prev.status
    if (baselineDate === g.date && baselineStatus === g.status) { changesById.delete(g.id); continue }

    changesById.set(g.id, {
      gameId: g.id, league: g.league, leagueName: g.leagueName,
      home: g.home?.name || '', away: g.away?.name || '',
      oldDate: baselineDate, newDate: g.date,
      oldStatus: baselineStatus, newStatus: g.status,
      firstDetectedAt: existing ? existing.firstDetectedAt : now, detectedAt: now,
    })
  }

  for (const [id] of changesById) {
    const cur = newById.get(id)
    if (!cur || cur.status === 'completed') changesById.delete(id)
  }
  const cutoff = Date.now() - CHANGES_MAX_AGE_MS
  for (const [id, c] of changesById) {
    if (new Date(c.firstDetectedAt).getTime() < cutoff) changesById.delete(id)
  }
  return [...changesById.values()].sort((a, b) => new Date(a.newDate) - new Date(b.newDate))
}

async function fetchLeague(leagueCode, leagueName, from, to) {
  const path = `basketball/${leagueCode}`
  const url  = `https://site.api.espn.com/apis/site/v2/sports/${path}/scoreboard?dates=${from}-${to}&limit=500`
  const res  = await fetch(url, { headers: { 'User-Agent': 'basketball-schedule-app/1.0 (personal use)' } })
  if (!res.ok) throw new Error(`${leagueName}: HTTP ${res.status}`)
  const data = await res.json()

  return (data.events || []).map(ev => {
    const comp = ev.competitions?.[0] || {}
    const home = comp.competitors?.find(c => c.homeAway === 'home')
    const away = comp.competitors?.find(c => c.homeAway === 'away')
    const broadcasts = (comp.broadcasts || []).flatMap(b => b.names || []).filter(Boolean)
    const series = comp.series?.summary || ev.seriesSummary?.description || null

    return {
      id:           ev.id,
      league:       leagueCode,
      leagueName,
      date:         ev.date,
      status:       statusOf(comp),
      statusDetail: comp.status?.type?.shortDetail || comp.status?.type?.description || '',
      note:         comp.altGameNote || comp.notes?.[0]?.headline || series || '',
      venue:        comp.venue
                      ? [comp.venue.fullName, comp.venue.address?.city].filter(Boolean).join(', ')
                      : '',
      broadcast:    broadcasts.length ? broadcasts.join(', ') : null,
      home:         home ? teamInfo(home) : null,
      away:         away ? teamInfo(away) : null,
      url:          (ev.links || []).find(l => l.rel?.includes('summary'))?.href || null,
    }
  })
}

async function writeLeague({ games, outFile, archiveFile, changesFile, leagueName, errors }) {
  const previous = await loadJson(outFile, null)
  if (games.length === 0 && previous?.games?.length > 0) {
    console.error(`${leagueName} fetch failed (${errors.join('; ')}) — keeping previous data.`)
    return
  }

  const cutoff    = new Date(); cutoff.setDate(cutoff.getDate() - DAYS_BACK)
  const currentIds = new Set(games.map(g => g.id))
  const agedOut   = (previous?.games || []).filter(g => !currentIds.has(g.id) && new Date(g.date) < cutoff)

  if (agedOut.length) {
    const archive    = await loadJson(archiveFile, { games: [] })
    const archiveById = new Map((archive.games || []).map(g => [g.id, g]))
    for (const g of agedOut) archiveById.set(g.id, g)
    const archiveGames = [...archiveById.values()].sort((a, b) => new Date(b.date) - new Date(a.date))
    await writeFile(archiveFile, JSON.stringify({ games: archiveGames }, null, 2))
    console.log(`${leagueName}: archived ${agedOut.length} game(s) (${archiveGames.length} total)`)
  }

  let changesCount = 0
  if (changesFile) {
    const previousChanges = await loadJson(changesFile, { changes: [] })
    const changes = updateChanges(previous?.games || [], games, previousChanges.changes || [])
    changesCount = changes.length
    await writeFile(changesFile, JSON.stringify({ generatedAt: new Date().toISOString(), changes }, null, 2))
  }

  const { from, to } = dateRange()
  await writeFile(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), range: { from, to }, errors, games }, null, 2))
  console.log(`${leagueName}: wrote ${games.length} games${errors.length ? ` (errors: ${errors.join('; ')})` : ''}${changesFile ? ` · ${changesCount} schedule-change alert(s)` : ''}`)
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true })
  const { from, to } = dateRange()

  const [nbaResult, wnbaResult] = await Promise.allSettled([
    fetchLeague('nba', 'NBA', from, to),
    fetchLeague('wnba', 'WNBA', from, to),
  ])

  const nbaGames   = nbaResult.status  === 'fulfilled' ? nbaResult.value  : []
  const wnbaGames  = wnbaResult.status === 'fulfilled' ? wnbaResult.value : []
  const nbaErrors  = nbaResult.status  === 'rejected'  ? [nbaResult.reason.message]  : []
  const wnbaErrors = wnbaResult.status === 'rejected'  ? [wnbaResult.reason.message] : []

  nbaGames.sort((a, b) => new Date(a.date) - new Date(b.date))
  wnbaGames.sort((a, b) => new Date(a.date) - new Date(b.date))

  await Promise.all([
    writeLeague({ games: nbaGames,  outFile: OUT_FILE,  archiveFile: ARCHIVE_FILE, changesFile: CHANGES_FILE, leagueName: 'NBA',  errors: nbaErrors }),
    writeLeague({ games: wnbaGames, outFile: WNBA_FILE, archiveFile: WNBA_ARCHIVE, changesFile: null,         leagueName: 'WNBA', errors: wnbaErrors }),
  ])
}

main().catch(err => { console.error('Scrape failed:', err); process.exit(1) })
