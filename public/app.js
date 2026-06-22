'use strict'

/* ── NBA teams ── */
const NBA_TEAMS = [
  // Eastern Conference
  { abbrev:'BOS', name:'Boston Celtics',           conf:'East', c1:'#007a33', c2:'#ffffff', espnId:2  },
  { abbrev:'BKN', name:'Brooklyn Nets',            conf:'East', c1:'#000000', c2:'#ffffff', espnId:17 },
  { abbrev:'NYK', name:'New York Knicks',          conf:'East', c1:'#f58426', c2:'#006bb6', espnId:18 },
  { abbrev:'PHI', name:'Philadelphia 76ers',       conf:'East', c1:'#006bb6', c2:'#ed174c', espnId:20 },
  { abbrev:'TOR', name:'Toronto Raptors',          conf:'East', c1:'#ce1141', c2:'#000000', espnId:28 },
  { abbrev:'CHI', name:'Chicago Bulls',            conf:'East', c1:'#ce1141', c2:'#000000', espnId:4  },
  { abbrev:'CLE', name:'Cleveland Cavaliers',      conf:'East', c1:'#860038', c2:'#fdbb30', espnId:5  },
  { abbrev:'DET', name:'Detroit Pistons',          conf:'East', c1:'#c8102e', c2:'#1d42ba', espnId:8  },
  { abbrev:'IND', name:'Indiana Pacers',           conf:'East', c1:'#002d62', c2:'#fdbb30', espnId:11 },
  { abbrev:'MIL', name:'Milwaukee Bucks',          conf:'East', c1:'#00471b', c2:'#eee1c6', espnId:15 },
  { abbrev:'ATL', name:'Atlanta Hawks',            conf:'East', c1:'#e03a3e', c2:'#c1d32f', espnId:1  },
  { abbrev:'CHA', name:'Charlotte Hornets',        conf:'East', c1:'#1d1160', c2:'#00788c', espnId:30 },
  { abbrev:'MIA', name:'Miami Heat',               conf:'East', c1:'#98002e', c2:'#f9a01b', espnId:14 },
  { abbrev:'ORL', name:'Orlando Magic',            conf:'East', c1:'#0077c0', c2:'#c4ced4', espnId:19 },
  { abbrev:'WAS', name:'Washington Wizards',       conf:'East', c1:'#002b5c', c2:'#e31837', espnId:27 },
  // Western Conference
  { abbrev:'DEN', name:'Denver Nuggets',           conf:'West', c1:'#0e2240', c2:'#fec524', espnId:7  },
  { abbrev:'MIN', name:'Minnesota Timberwolves',   conf:'West', c1:'#0c2340', c2:'#236192', espnId:16 },
  { abbrev:'OKC', name:'Oklahoma City Thunder',    conf:'West', c1:'#007ac1', c2:'#ef3b24', espnId:25 },
  { abbrev:'POR', name:'Portland Trail Blazers',   conf:'West', c1:'#e03a3e', c2:'#000000', espnId:22 },
  { abbrev:'UTA', name:'Utah Jazz',                conf:'West', c1:'#002b5c', c2:'#f9a01b', espnId:26 },
  { abbrev:'GSW', name:'Golden State Warriors',    conf:'West', c1:'#1d428a', c2:'#ffc72c', espnId:9  },
  { abbrev:'LAC', name:'LA Clippers',              conf:'West', c1:'#c8102e', c2:'#1d428a', espnId:12 },
  { abbrev:'LAL', name:'Los Angeles Lakers',       conf:'West', c1:'#552583', c2:'#fdb927', espnId:13 },
  { abbrev:'PHX', name:'Phoenix Suns',             conf:'West', c1:'#1d1160', c2:'#e56020', espnId:21 },
  { abbrev:'SAC', name:'Sacramento Kings',         conf:'West', c1:'#5a2d81', c2:'#63727a', espnId:23 },
  { abbrev:'DAL', name:'Dallas Mavericks',         conf:'West', c1:'#00538c', c2:'#002b5e', espnId:6  },
  { abbrev:'HOU', name:'Houston Rockets',          conf:'West', c1:'#ce1141', c2:'#c4cdd3', espnId:10 },
  { abbrev:'MEM', name:'Memphis Grizzlies',        conf:'West', c1:'#5d76a9', c2:'#12173f', espnId:29 },
  { abbrev:'NOP', name:'New Orleans Pelicans',     conf:'West', c1:'#0c2340', c2:'#c8a96e', espnId:3  },
  { abbrev:'SAS', name:'San Antonio Spurs',        conf:'West', c1:'#c4ced4', c2:'#000000', espnId:24 },
]

/* ── WNBA teams (abbrevs + espnIds from ESPN API) ── */
const WNBA_TEAMS = [
  // Eastern Conference
  { abbrev:'ATL',  name:'Atlanta Dream',           conf:'East', c1:'#c8102e', c2:'#041e42', espnId:20     },
  { abbrev:'CHI',  name:'Chicago Sky',             conf:'East', c1:'#418fde', c2:'#ffd520', espnId:19     },
  { abbrev:'CON',  name:'Connecticut Sun',         conf:'East', c1:'#e03a3e', c2:'#0c2340', espnId:18     },
  { abbrev:'IND',  name:'Indiana Fever',           conf:'East', c1:'#002d62', c2:'#bf5700', espnId:5      },
  { abbrev:'NY',   name:'New York Liberty',        conf:'East', c1:'#6eceb2', c2:'#000000', espnId:9      },
  { abbrev:'TOR',  name:'Toronto Tempo',           conf:'East', c1:'#ce1141', c2:'#000000', espnId:131935 },
  { abbrev:'WSH',  name:'Washington Mystics',      conf:'East', c1:'#e31837', c2:'#002b5c', espnId:16     },
  // Western Conference
  { abbrev:'DAL',  name:'Dallas Wings',            conf:'West', c1:'#c4d600', c2:'#002b5c', espnId:3      },
  { abbrev:'GS',   name:'Golden State Valkyries',  conf:'West', c1:'#1d428a', c2:'#ffc72c', espnId:129689 },
  { abbrev:'LA',   name:'Los Angeles Sparks',      conf:'West', c1:'#702f8a', c2:'#ffc72c', espnId:6      },
  { abbrev:'LV',   name:'Las Vegas Aces',          conf:'West', c1:'#000000', c2:'#c8102e', espnId:17     },
  { abbrev:'MIN',  name:'Minnesota Lynx',          conf:'West', c1:'#266092', c2:'#236192', espnId:8      },
  { abbrev:'PHX',  name:'Phoenix Mercury',         conf:'West', c1:'#201747', c2:'#e56020', espnId:11     },
  { abbrev:'POR',  name:'Portland Fire',           conf:'West', c1:'#e03a3e', c2:'#000000', espnId:132052 },
  { abbrev:'SEA',  name:'Seattle Storm',           conf:'West', c1:'#2c5234', c2:'#fef200', espnId:14     },
]

const POSITION_ORDER = ['PG','SG','SF','PF','C','G','F','G-F','F-C','F-G']

/* ── ESPN API abbreviation → internal abbreviation map (NBA only) ── */
const NBA_ABBREV_MAP = { 'GS':'GSW', 'NO':'NOP', 'NY':'NYK', 'SA':'SAS', 'UTAH':'UTA', 'WSH':'WAS' }
function normalizeAbbrev(abbrev) {
  if (!abbrev) return abbrev
  const up = abbrev.toUpperCase()
  return (prefs.sport !== 'wnba' ? NBA_ABBREV_MAP[up] : null) || abbrev
}

/* ── League context helpers ── */
function currentTeams()  { return prefs.sport === 'wnba' ? WNBA_TEAMS : NBA_TEAMS }
function espnBase()      { return `https://site.api.espn.com/apis/site/v2/sports/basketball/${prefs.sport || 'nba'}` }
function logoUrl(abbrev) {
  const league = prefs.sport === 'wnba' ? 'wnba' : 'nba'
  return `https://a.espncdn.com/i/teamlogos/${league}/500/${abbrev?.toLowerCase()}.png`
}
function teamByAbbrev(abbrev) {
  const norm = normalizeAbbrev(abbrev)
  return currentTeams().find(t => t.abbrev === norm?.toUpperCase()) || null
}
function teamConf(abbrevOrName) {
  const norm = normalizeAbbrev(abbrevOrName)
  const t = currentTeams().find(t =>
    t.abbrev === norm?.toUpperCase() ||
    t.name.toLowerCase() === abbrevOrName?.toLowerCase()
  )
  return t?.conf || null
}

/* ── State ── */
let allGames = [], archiveGames = [], generatedAt = null
const rosterPlayerCache = new Map()
const teamLogoCache     = new Map()

/* ── Prefs ── */
const PREF_KEY = 'nba-schedule-prefs'
const PREF_DEFAULTS = {
  sport: 'nba', view: 'schedule', conference: 'all', statusFilter: [],
  showScores: false, showVenue: true, showBroadcast: true,
  hideWatched: false, showArchive: false,
  myTeamNba: null, myTeamWnba: null,
  favTeamsNba: [], favTeamsWnba: [],
  favPlayers: [],
  savedGames: [], watchedGames: [], tz: 'auto',
}
let prefs = { ...PREF_DEFAULTS }

function loadPrefs() {
  try {
    const s = localStorage.getItem(PREF_KEY)
    if (s) {
      const saved = JSON.parse(s)
      Object.assign(prefs, saved)
      // one-time migration from old single myTeam/favTeams fields
      if (saved.myTeam != null && prefs.myTeamNba === null) prefs.myTeamNba = saved.myTeam
      if (Array.isArray(saved.favTeams) && saved.favTeams.length && !prefs.favTeamsNba.length) {
        prefs.favTeamsNba = [...saved.favTeams]
      }
    }
  } catch {}
}
function savePrefs() {
  try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)) } catch {}
}

/* ── Per-sport team helpers ── */
function getMyTeam()   { return prefs.sport === 'wnba' ? prefs.myTeamWnba : prefs.myTeamNba }
function setMyTeam(a)  { if (prefs.sport === 'wnba') prefs.myTeamWnba = a; else prefs.myTeamNba = a }
function getFavTeams() { return prefs.sport === 'wnba' ? prefs.favTeamsWnba : prefs.favTeamsNba }
function addFavTeam(a) { getFavTeams().push(a) }
function removeFavTeam(a) {
  if (prefs.sport === 'wnba') prefs.favTeamsWnba = prefs.favTeamsWnba.filter(x => x !== a)
  else prefs.favTeamsNba = prefs.favTeamsNba.filter(x => x !== a)
}

/* ── My Team theming ── */
function applyTheme() {
  const t = teamByAbbrev(getMyTeam())
  const r = document.documentElement
  const defaultAccent = prefs.sport === 'wnba' ? '#c8102e' : '#f76b1c'
  const defaultAccent2 = prefs.sport === 'wnba' ? '#a00e28' : '#e05a0e'
  if (t) {
    r.style.setProperty('--t1', t.c1)
    r.style.setProperty('--t2', t.c2)
    r.style.setProperty('--accent', t.c1)
    r.style.setProperty('--accent2', shadeColor(t.c1, -20))
  } else {
    r.style.setProperty('--t1', defaultAccent)
    r.style.setProperty('--t2', '#1a1d24')
    r.style.setProperty('--accent', defaultAccent)
    r.style.setProperty('--accent2', defaultAccent2)
  }
  const hdr   = document.getElementById('my-team-header')
  const crest = document.getElementById('my-team-crest')
  const label = document.getElementById('my-team-label')
  if (t) { crest.src = logoUrl(t.abbrev); label.textContent = t.name; hdr.style.display = 'flex' }
  else    { hdr.style.display = 'none' }
}
function shadeColor(hex, pct) {
  const num = parseInt(hex.replace('#',''), 16)
  const r = Math.min(255, Math.max(0, (num >> 16) + pct))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + pct))
  const b = Math.min(255, Math.max(0, (num & 0xff) + pct))
  return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('')
}

/* ── Time/date ── */
function getTz() { return prefs.tz === 'auto' ? undefined : prefs.tz }
function fmtTime(iso) { return new Date(iso).toLocaleTimeString([], { hour:'numeric', minute:'2-digit', timeZone: getTz() }) }
function fmtDate(iso) { return new Date(iso).toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', timeZone: getTz() }) }
function dayKey(iso)  { return new Date(iso).toLocaleDateString('en-US', { year:'numeric', month:'2-digit', day:'2-digit', timeZone: getTz() }) }

/* ── Fetch ── */
async function fetchSchedule() {
  const isWnba = prefs.sport === 'wnba'
  const schedPath  = isWnba ? '/data/wnba-schedule.json' : '/data/schedule.json'
  const archPath   = isWnba ? '/data/wnba-archive.json'  : '/data/archive.json'

  const [sched, arch] = await Promise.all([
    fetch(schedPath).then(r => r.json()).catch(() => ({ games: [] })),
    fetch(archPath).then(r => r.json()).catch(() => ({ games: [] })),
  ])
  allGames     = sched.games    || []
  archiveGames = arch.games     || []
  generatedAt  = sched.generatedAt

  teamLogoCache.clear()
  for (const g of allGames) {
    for (const side of [g.home, g.away]) {
      if (side?.abbrev && !teamLogoCache.has(side.abbrev)) {
        teamLogoCache.set(side.abbrev, { logo: side.logo, id: side.id })
      }
    }
  }

  const el = document.getElementById('updated')
  if (el) el.textContent = generatedAt
    ? 'Updated ' + new Date(generatedAt).toLocaleTimeString([], { hour:'numeric', minute:'2-digit' })
    : 'No data'
}

/* ── Filter ── */
function filteredGames() {
  let games = prefs.showArchive ? [...archiveGames, ...allGames] : [...allGames]

  if (prefs.conference !== 'all') {
    games = games.filter(g => {
      const hc = teamConf(g.home?.abbrev) || teamConf(g.home?.name)
      const ac = teamConf(g.away?.abbrev) || teamConf(g.away?.name)
      return hc === prefs.conference || ac === prefs.conference
    })
  }
  if (prefs.statusFilter.length) {
    games = games.filter(g => prefs.statusFilter.includes(g.status))
  }
  const q = document.getElementById('search')?.value?.toLowerCase()
  if (q) {
    games = games.filter(g =>
      g.home?.name?.toLowerCase().includes(q) || g.away?.name?.toLowerCase().includes(q)
    )
  }
  if (prefs.savedOnly)    games = games.filter(g => prefs.savedGames.includes(g.id))
  if (prefs.hideWatched)  games = games.filter(g => !prefs.watchedGames.includes(g.id))
  return games
}

/* ── Render ── */
function render() {
  if (prefs.view === 'teams') { renderTeams(); return }

  const games = filteredGames()
  const list  = document.getElementById('list')

  if (!games.length) {
    const isWnba = prefs.sport === 'wnba'
    const isEmpty = allGames.length === 0 && archiveGames.length === 0
    list.innerHTML = isEmpty
      ? `<div class="empty">${isWnba ? 'WNBA season data loading — click Refresh.' : 'No games in range. Try Show archive.'}</div>`
      : '<div class="empty">No games match your filters.</div>'
    return
  }

  const byDay = new Map()
  for (const g of games) {
    const k = dayKey(g.date)
    if (!byDay.has(k)) byDay.set(k, [])
    byDay.get(k).push(g)
  }

  const isFavTeam = abbrev => getFavTeams().includes(normalizeAbbrev(abbrev))
  const isMyTeam  = abbrev => normalizeAbbrev(abbrev) === getMyTeam()

  let html = ''
  for (const [, dayGames] of byDay) {
    html += `<div class="date-group">`
    html += `<div class="date-heading">${fmtDate(dayGames[0].date)}</div>`
    for (const g of dayGames) html += renderGameCard(g, isFavTeam, isMyTeam)
    html += `</div>`
  }
  list.innerHTML = html
  rebindCards()
}

function renderGameCard(g, isFavTeam, isMyTeam) {
  const isLive      = g.status === 'in-progress'
  const isCompleted = g.status === 'completed'
  const isSaved     = prefs.savedGames.includes(g.id)
  const isWatched   = prefs.watchedGames.includes(g.id)
  const myTeamGame  = isMyTeam(g.home?.abbrev) || isMyTeam(g.away?.abbrev)

  let cardClass = 'game-card'
  if (myTeamGame) cardClass += ' my-team-game'
  else if (isLive) cardClass += ' live'
  if (isWatched) cardClass += ' watched'

  let timeLabel = fmtTime(g.date), timeLabelClass = 'game-time-label', timeSub = ''
  if (isLive) { timeLabel = g.statusDetail || 'LIVE'; timeLabelClass += ' live-label' }
  else if (isCompleted) {
    timeLabel = 'Final'; timeLabelClass += ' final-label'
    if (g.statusDetail && g.statusDetail !== 'Final') timeSub = g.statusDetail
  }

  const showScore = prefs.showScores && (isLive || isCompleted)
  const homeScore = showScore && g.home?.score != null
    ? `<span class="team-score${g.home?.winner ? ' winner' : ''}">${g.home.score}</span>`
    : `<span class="team-score score-hidden">-</span>`
  const awayScore = showScore && g.away?.score != null
    ? `<span class="team-score${g.away?.winner ? ' winner' : ''}">${g.away.score}</span>`
    : `<span class="team-score score-hidden">-</span>`

  const hLogo   = g.home?.logo || logoUrl(g.home?.abbrev)
  const aLogo   = g.away?.logo || logoUrl(g.away?.abbrev)
  const hTeamId = teamLogoCache.get(g.home?.abbrev)?.id || g.home?.id || null
  const aTeamId = teamLogoCache.get(g.away?.abbrev)?.id || g.away?.id || null

  const hRosterBtn = hTeamId ? `<button class="roster-pill" data-team-id="${hTeamId}" data-team-abbrev="${g.home?.abbrev||''}" data-team-name="${g.home?.name||''}">Roster</button>` : ''
  const aRosterBtn = aTeamId ? `<button class="roster-pill" data-team-id="${aTeamId}" data-team-abbrev="${g.away?.abbrev||''}" data-team-name="${g.away?.name||''}">Roster</button>` : ''

  const hRecord = g.home?.record ? `<span class="team-record">(${g.home.record})</span>` : ''
  const aRecord = g.away?.record ? `<span class="team-record">(${g.away.record})</span>` : ''
  const hFav = isFavTeam(g.home?.abbrev) ? ' ★' : ''
  const aFav = isFavTeam(g.away?.abbrev) ? ' ★' : ''

  const metaParts = []
  if (prefs.showBroadcast && g.broadcast) metaParts.push(`<span class="broadcast-tag">${g.broadcast}</span>`)
  if (prefs.showVenue && g.venue) metaParts.push(`<span class="venue-tag">${g.venue}</span>`)

  return `
<div class="${cardClass}" data-game-id="${g.id}">
  <div class="game-time">
    <div class="${timeLabelClass}">${timeLabel}</div>
    ${timeSub ? `<div class="game-time-sub">${timeSub}</div>` : ''}
  </div>
  <div class="game-teams">
    <div class="game-team-row">
      <img class="team-logo" src="${aLogo}" alt="" onerror="this.style.display='none'" />
      <span class="team-name">${g.away?.name||'Away'}${aFav}</span>
      ${aRecord}${awayScore}${aRosterBtn}
    </div>
    <div class="game-team-row">
      <img class="team-logo" src="${hLogo}" alt="" onerror="this.style.display='none'" />
      <span class="team-name">${g.home?.name||'Home'}${hFav}</span>
      ${hRecord}${homeScore}${hRosterBtn}
    </div>
    ${g.note ? `<div class="game-note">${g.note}</div>` : ''}
  </div>
  <div class="game-meta">
    <button class="star-btn${isSaved?' active':''}" data-id="${g.id}" title="Save game">★</button>
    ${isCompleted ? `<button class="watch-btn${isWatched?' watched':''}" data-id="${g.id}">${isWatched?'✓':'○'}</button>` : ''}
    ${metaParts.join('')}
  </div>
</div>`
}

function rebindCards() {
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const id = btn.dataset.id
      if (prefs.savedGames.includes(id)) prefs.savedGames = prefs.savedGames.filter(x => x !== id)
      else prefs.savedGames.push(id)
      savePrefs(); btn.classList.toggle('active', prefs.savedGames.includes(id))
    })
  })
  document.querySelectorAll('.watch-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const id = btn.dataset.id
      if (prefs.watchedGames.includes(id)) prefs.watchedGames = prefs.watchedGames.filter(x => x !== id)
      else prefs.watchedGames.push(id)
      savePrefs(); render()
    })
  })
  document.querySelectorAll('.roster-pill').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      openTeamRoster(btn.dataset.teamId, btn.dataset.teamAbbrev, btn.dataset.teamName)
    })
  })
}

/* ── Teams view ── */
function renderTeams() {
  const list  = document.getElementById('list')
  const conf  = prefs.conference
  const teams = currentTeams().filter(t => conf === 'all' || t.conf === conf)
  const byConf = {}
  for (const t of teams) {
    if (!byConf[t.conf]) byConf[t.conf] = []
    byConf[t.conf].push(t)
  }

  let html = ''
  for (const [confName, confTeams] of Object.entries(byConf)) {
    html += `<div class="teams-section"><div class="teams-section-heading">${confName}ern Conference</div><div class="teams-grid">`
    for (const t of confTeams) {
      const cached = teamLogoCache.get(t.abbrev)
      const teamId = cached?.id || t.espnId
      const logo   = cached?.logo || logoUrl(t.abbrev)
      html += `<div class="team-card" data-team-id="${teamId||''}" data-team-abbrev="${t.abbrev}" data-team-name="${t.name}">
        <img class="team-card-crest" src="${logo}" alt="${t.name}" onerror="this.style.display='none'" />
        <div class="team-card-name">${t.name}</div>
      </div>`
    }
    html += `</div></div>`
  }
  list.innerHTML = html

  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      openTeamRoster(card.dataset.teamId, card.dataset.teamAbbrev, card.dataset.teamName)
    })
  })
}

/* ── Roster modal ── */
function showModal(html) {
  let backdrop = document.getElementById('modal-backdrop')
  if (!backdrop) {
    backdrop = document.createElement('div')
    backdrop.id = 'modal-backdrop'; backdrop.className = 'modal-backdrop'
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal() })
    document.body.appendChild(backdrop)
  }
  backdrop.innerHTML = html
  backdrop.classList.remove('hidden')
  backdrop.querySelector('.modal-close')?.addEventListener('click', closeModal)
  document.addEventListener('keydown', escClose)
}
function closeModal() { document.getElementById('modal-backdrop')?.classList.add('hidden'); document.removeEventListener('keydown', escClose) }
function escClose(e) { if (e.key === 'Escape') closeModal() }

async function openTeamRoster(teamId, abbrev, name) {
  if (!teamId) return
  showModal(`<div class="modal"><div class="modal-header">
    <img class="modal-logo" src="${logoUrl(abbrev)}" alt="" onerror="this.style.display='none'" />
    <span class="modal-title">${name}</span>
    <button class="modal-close">✕</button>
  </div><div class="modal-body"><div class="empty">Loading roster…</div></div></div>`)

  const base = espnBase()
  const year = new Date().getFullYear()
  let athletes = []
  for (const y of [year, year - 1]) {
    try {
      const res  = await fetch(`${base}/teams/${teamId}/roster?season=${y}`)
      const data = await res.json()
      athletes   = data.athletes || []
      if (athletes.length) break
    } catch {}
  }

  for (const p of athletes) {
    if (p.id) rosterPlayerCache.set(String(p.id), { ...p, _teamId: teamId, _teamAbbrev: abbrev, _teamName: name, _sport: prefs.sport })
  }

  const groups = {}
  for (const p of athletes) {
    const pos = p.position?.abbreviation || p.position?.displayName || 'Other'
    if (!groups[pos]) groups[pos] = []
    groups[pos].push(p)
  }
  const orderedPos = POSITION_ORDER.filter(p => groups[p])
  const remaining  = Object.keys(groups).filter(p => !POSITION_ORDER.includes(p))

  const upcoming = allGames
    .filter(g => g.status === 'scheduled' &&
      (g.home?.id === teamId || g.away?.id === teamId ||
       g.home?.abbrev === abbrev || g.away?.abbrev === abbrev))
    .slice(0, 4)

  let upcomingHtml = ''
  if (upcoming.length) {
    upcomingHtml = `<div class="prf-upcoming">
      <div class="prf-section-label">Upcoming games</div>
      ${upcoming.map(g => {
        const opp = g.home?.abbrev === abbrev ? g.away : g.home
        const ha  = g.home?.abbrev === abbrev ? 'vs' : '@'
        return `<div class="prf-upcoming-row">
          <span class="prf-upcoming-date">${fmtDate(g.date).split(',')[0]} ${fmtTime(g.date)}</span>
          <span class="prf-upcoming-match">${ha} ${opp?.name||''}</span>
          ${g.broadcast ? `<span class="prf-upcoming-tv">${g.broadcast}</span>` : ''}
        </div>`
      }).join('')}
    </div>`
  }

  let rosterHtml = ''
  if (!athletes.length) {
    rosterHtml = '<div class="empty">Roster not available.</div>'
  } else {
    for (const pos of [...orderedPos, ...remaining]) {
      rosterHtml += `<div class="position-group"><div class="position-label">${pos}</div>`
      for (const p of groups[pos]) {
        const isSaved = prefs.favPlayers.some(fp => fp.id === String(p.id))
        const photo   = p.headshot?.href || ''
        rosterHtml += `<div class="player-row" data-player-id="${p.id}">
          <img class="player-avatar" src="${photo}" alt="" onerror="this.style.display='none'" />
          <span class="player-jersey">#${p.jersey||'—'}</span>
          <span class="player-name">${p.displayName||p.fullName||'Unknown'}</span>
          <span class="player-nat">${p.citizenship||p.birthPlace?.country||''}</span>
          <button class="player-save-btn${isSaved?' saved':''}" data-player-id="${p.id}" title="${isSaved?'Unsave':'Save player'}">★</button>
        </div>`
      }
      rosterHtml += '</div>'
    }
  }

  const modal = document.querySelector('#modal-backdrop .modal')
  if (!modal) return
  modal.querySelector('.modal-body').innerHTML = upcomingHtml + rosterHtml

  modal.querySelectorAll('.player-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.classList.contains('player-save-btn')) return
      openPlayerProfile(row.dataset.playerId, abbrev, name)
    })
  })
  modal.querySelectorAll('.player-save-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleSavePlayer(btn.dataset.playerId, btn) })
  })
}

function toggleSavePlayer(playerId, btn) {
  const p = rosterPlayerCache.get(String(playerId))
  if (!p) return
  const exists = prefs.favPlayers.some(fp => fp.id === String(playerId))
  if (exists) {
    prefs.favPlayers = prefs.favPlayers.filter(fp => fp.id !== String(playerId))
    btn?.classList.remove('saved')
  } else {
    prefs.favPlayers.push({ id: String(playerId), name: p.displayName||p.fullName, team: p._teamName, abbrev: p._teamAbbrev, teamId: p._teamId, photo: p.headshot?.href||'', sport: p._sport||prefs.sport })
    btn?.classList.add('saved')
  }
  savePrefs(); buildPlayersPanel()
}

/* ── Player stats ── */
async function fetchPlayerGameStats(playerId, teamId) {
  const base = espnBase()
  const teamGames = [...allGames, ...archiveGames]
    .filter(g => g.status === 'completed' &&
      (String(g.home?.id) === String(teamId) || String(g.away?.id) === String(teamId)))
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  for (const game of teamGames.slice(0, 3)) {
    try {
      const res  = await fetch(`${base}/summary?event=${game.id}`)
      const data = await res.json()
      const labels = data.boxscore?.players?.[0]?.statistics?.[0]?.labels || []
      for (const team of (data.boxscore?.players || [])) {
        for (const block of (team.statistics || [])) {
          const athlete = (block.athletes || []).find(a => String(a.athlete?.id) === String(playerId))
          if (athlete?.stats?.length) {
            const opp  = String(game.home?.id) === String(teamId) ? game.away : game.home
            const date = new Date(game.date).toLocaleDateString('en-US', { month:'short', day:'numeric' })
            return { labels, stats: athlete.stats, gameLabel: `${date} vs ${opp?.name||''}` }
          }
        }
      }
    } catch {}
  }
  return null
}

async function openPlayerProfile(playerId, teamAbbrev, teamName) {
  const p = rosterPlayerCache.get(String(playerId))
  if (!p) return
  const photo   = p.headshot?.href || ''
  const pos     = p.position?.abbreviation || p.position?.displayName || ''
  const jersey  = p.jersey ? `#${p.jersey}` : ''
  const age     = p.age ? `Age ${p.age}` : ''
  const ht      = p.displayHeight || ''
  const wt      = p.displayWeight || ''
  const meta    = [ht, wt, age, p.birthPlace?.city ? `${p.birthPlace.city}, ${p.birthPlace?.country||''}` : ''].filter(Boolean).join(' · ')
  const isSaved = prefs.favPlayers.some(fp => fp.id === String(playerId))
  const abbrev  = teamAbbrev || p._teamAbbrev || ''

  const cardBase = (statsContent) => `
<div class="modal" style="max-width:440px">
  <div class="modal-header">
    <button class="btn-outline" onclick="openTeamRoster('${p._teamId}','${abbrev}','${teamName||p._teamName}')">← Roster</button>
    <span class="modal-title" style="font-size:15px">${teamName||p._teamName||''}</span>
    <button class="modal-close">✕</button>
  </div>
  <div class="player-card" style="margin:0;border:none;border-radius:0 0 14px 14px">
    <div class="pc-header">
      ${photo ? `<img class="pc-photo" src="${photo}" alt="" onerror="this.style.display='none'" />` : `<div class="pc-photo"></div>`}
      <div>
        <div class="pc-jersey">${jersey}</div>
        ${pos ? `<div class="pc-pos-badge">${pos}</div>` : ''}
      </div>
    </div>
    <div class="pc-body">
      <div class="pc-name">${p.displayName||p.fullName||'Unknown'}</div>
      ${meta ? `<div class="pc-meta">${meta}</div>` : ''}
      <div id="pc-stats-area">${statsContent}</div>
      <div class="pc-actions">
        <button class="btn-outline" id="pc-save-btn" data-player-id="${playerId}">
          ${isSaved ? '★ Saved' : '☆ Save player'}
        </button>
      </div>
    </div>
  </div>
</div>`

  showModal(cardBase('<div class="pc-meta" style="color:var(--muted)">Loading stats…</div>'))
  document.getElementById('pc-save-btn')?.addEventListener('click', function() {
    toggleSavePlayer(playerId, null)
    this.textContent = prefs.favPlayers.some(fp => fp.id === String(playerId)) ? '★ Saved' : '☆ Save player'
  })

  const SHOW = ['PTS','REB','AST','STL','BLK','MIN','+/-','FG','3PT','FT']
  const gameStats = await fetchPlayerGameStats(playerId, p._teamId)
  const statsArea = document.getElementById('pc-stats-area')
  if (!statsArea) return

  if (gameStats) {
    const statPills = gameStats.labels
      .map((lbl, i) => ({ lbl, val: gameStats.stats[i] }))
      .filter(s => SHOW.includes(s.lbl) && s.val && s.val !== '0' && s.val !== '--')
      .map(s => `<div class="pc-stat"><div class="pc-stat-val">${s.val}</div><div class="pc-stat-lbl">${s.lbl}</div></div>`)
      .join('')
    statsArea.innerHTML = statPills
      ? `<div class="pc-stats">${statPills}</div><div class="pc-meta" style="margin-top:4px">Last game · ${gameStats.gameLabel}</div>`
      : '<div class="pc-meta">Did not play in last game.</div>'
  } else {
    statsArea.innerHTML = '<div class="pc-meta">No recent game stats available.</div>'
  }
}

async function ensureRosterCached(teamId, abbrev, teamName) {
  const base = espnBase()
  const year = new Date().getFullYear()
  for (const y of [year, year - 1]) {
    try {
      const res  = await fetch(`${base}/teams/${teamId}/roster?season=${y}`)
      const data = await res.json()
      const athletes = data.athletes || []
      if (!athletes.length) continue
      for (const p of athletes) {
        if (p.id) rosterPlayerCache.set(String(p.id), { ...p, _teamId: teamId, _teamAbbrev: abbrev, _teamName: teamName, _sport: prefs.sport })
      }
      return
    } catch {}
  }
}

/* ── Players panel ── */
function buildPlayersPanel() {
  const panel = document.getElementById('players-panel')
  if (!panel) return
  if (!prefs.favPlayers.length) {
    panel.innerHTML = '<div class="fav-players-empty">No saved players yet. Tap a player in any roster to save them.</div>'
    return
  }
  panel.innerHTML = prefs.favPlayers.map(fp => `
    <div class="fav-player-row" data-player-id="${fp.id}" data-team-id="${fp.teamId}" data-team-abbrev="${fp.abbrev}" data-team-name="${fp.team}" data-sport="${fp.sport||'nba'}">
      <img class="fav-player-avatar" src="${fp.photo}" alt="" onerror="this.style.display='none'" />
      <div class="fav-player-info">
        <div class="fav-player-name">${fp.name}</div>
        <div class="fav-player-team">${fp.team}</div>
      </div>
      <button class="fav-player-remove" data-player-id="${fp.id}" title="Remove">✕</button>
    </div>
  `).join('')

  panel.querySelectorAll('.fav-player-row').forEach(row => {
    row.addEventListener('click', async e => {
      if (e.target.classList.contains('fav-player-remove')) return
      const pid = row.dataset.playerId
      if (!rosterPlayerCache.has(pid)) await ensureRosterCached(row.dataset.teamId, row.dataset.teamAbbrev, row.dataset.teamName)
      openPlayerProfile(pid, row.dataset.teamAbbrev, row.dataset.teamName)
    })
  })
  panel.querySelectorAll('.fav-player-remove').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      prefs.favPlayers = prefs.favPlayers.filter(fp => fp.id !== btn.dataset.playerId)
      savePrefs(); buildPlayersPanel()
    })
  })
}

/* ── Favorites panel ── */
function buildFavoritesPanel() {
  const panel = document.getElementById('favorites-panel')
  if (!panel) return
  panel.innerHTML = currentTeams().map(t => {
    const isFav = getFavTeams().includes(t.abbrev)
    const isMyT = getMyTeam() === t.abbrev
    const logo  = teamLogoCache.get(t.abbrev)?.logo || logoUrl(t.abbrev)
    return `<div class="fav-team-row">
      <img class="fav-team-logo" src="${logo}" alt="" onerror="this.style.display='none'" />
      <span class="fav-team-name">${t.name}</span>
      <button class="my-team-btn${isMyT?' active':''}" data-abbrev="${t.abbrev}">${isMyT?'★ My Team':'☆ My Team'}</button>
      <button class="fav-team-star" data-abbrev="${t.abbrev}" title="${isFav?'Unfavorite':'Favorite'}" style="${isFav?'':'color:var(--border)'}">★</button>
    </div>`
  }).join('')

  panel.querySelectorAll('.fav-team-star').forEach(btn => {
    btn.addEventListener('click', () => {
      const abbrev = btn.dataset.abbrev
      if (getFavTeams().includes(abbrev)) removeFavTeam(abbrev)
      else addFavTeam(abbrev)
      savePrefs(); buildFavoritesPanel(); render()
    })
  })
  panel.querySelectorAll('.my-team-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setMyTeam(getMyTeam() === btn.dataset.abbrev ? null : btn.dataset.abbrev)
      savePrefs(); applyTheme(); buildFavoritesPanel(); render()
    })
  })
}

/* ── View slider ── */
function moveSliderTrack() {
  const active = document.querySelector('.view-opt.active')
  const track  = document.querySelector('.view-slider-track')
  if (active && track) {
    track.style.transform = `translateX(${active.offsetLeft - 3}px)`
    track.style.width     = `${active.offsetWidth}px`
  }
}
function initViewToggle() {
  document.querySelectorAll('.view-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-opt').forEach(b => b.classList.remove('active'))
      btn.classList.add('active'); prefs.view = btn.dataset.view
      savePrefs(); moveSliderTrack(); render()
    })
    btn.classList.toggle('active', btn.dataset.view === prefs.view)
  })
  requestAnimationFrame(() => requestAnimationFrame(moveSliderTrack))
}

/* ── TZ select ── */
function initTzSelect() {
  const sel = document.getElementById('tz-select')
  if (!sel) return
  Intl.supportedValuesOf('timeZone').forEach(tz => {
    const opt = document.createElement('option'); opt.value = tz; opt.textContent = tz
    document.getElementById('tz-all').appendChild(opt)
  })
  sel.value = prefs.tz || 'auto'
  sel.addEventListener('change', () => { prefs.tz = sel.value; savePrefs(); render() })
}

/* ── Controls ── */
function initControls() {
  // Sport toggle
  document.querySelectorAll('[data-sport]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sport === prefs.sport)
    btn.addEventListener('click', async () => {
      document.querySelectorAll('[data-sport]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      prefs.sport = btn.dataset.sport
      prefs.conference = 'all'
      // reset conference button UI to match
      document.querySelectorAll('[data-conf]').forEach(b => b.classList.toggle('active', b.dataset.conf === 'all'))
      savePrefs(); applyTheme()
      document.getElementById('updated').textContent = 'Loading…'
      await fetchSchedule(); render()
    })
  })

  document.querySelectorAll('[data-conf]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.conf === prefs.conference)
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-conf]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active'); prefs.conference = btn.dataset.conf; savePrefs(); render()
    })
  })

  document.querySelectorAll('[data-status]').forEach(btn => {
    btn.classList.toggle('active', prefs.statusFilter.includes(btn.dataset.status))
    btn.addEventListener('click', () => {
      const s = btn.dataset.status
      if (prefs.statusFilter.includes(s)) prefs.statusFilter = prefs.statusFilter.filter(x => x !== s)
      else prefs.statusFilter.push(s)
      btn.classList.toggle('active', prefs.statusFilter.includes(s)); savePrefs(); render()
    })
  })

  const toggleMap = {
    'toggle-scores':       ['showScores',    () => render()],
    'toggle-venue':        ['showVenue',      () => render()],
    'toggle-broadcast':    ['showBroadcast',  () => render()],
    'toggle-hide-watched': ['hideWatched',    () => render()],
    'toggle-archive':      ['showArchive',    () => render()],
  }
  for (const [id, [key, cb]] of Object.entries(toggleMap)) {
    const el = document.getElementById(id)
    if (!el) continue
    el.checked = !!prefs[key]
    el.addEventListener('change', () => { prefs[key] = el.checked; savePrefs(); cb() })
  }

  document.getElementById('search')?.addEventListener('input', render)
  document.getElementById('refresh-btn')?.addEventListener('click', async () => {
    document.getElementById('updated').textContent = 'Refreshing…'
    await fetch('/api/refresh', { method: 'POST' })
    await fetchSchedule(); render()
  })
  document.getElementById('filters-toggle')?.addEventListener('click', () => {
    document.getElementById('controls-secondary')?.classList.toggle('open')
  })

  const favToggle = document.getElementById('favorites-toggle')
  const favPanel  = document.getElementById('favorites-panel')
  favToggle?.addEventListener('click', () => {
    favPanel?.classList.toggle('hidden')
    if (!favPanel?.classList.contains('hidden')) buildFavoritesPanel()
  })

  const playersToggle = document.getElementById('players-toggle')
  const playersPanel  = document.getElementById('players-panel')
  playersToggle?.addEventListener('click', () => {
    playersPanel?.classList.toggle('hidden')
    if (!playersPanel?.classList.contains('hidden')) buildPlayersPanel()
  })

  document.getElementById('saved-toggle')?.addEventListener('click', () => {
    prefs.savedOnly = !prefs.savedOnly; savePrefs(); render()
  })
}

/* ── Boot ── */
async function init() {
  loadPrefs(); applyTheme(); initControls(); initViewToggle(); initTzSelect()
  await fetchSchedule(); render()
  if (allGames.length === 0 && !generatedAt) {
    const el = document.getElementById('updated')
    if (el) el.textContent = 'Warming up…'
    let retries = 0
    const poll = setInterval(async () => {
      await fetchSchedule()
      if (allGames.length > 0 || ++retries >= 8) { clearInterval(poll); render() }
    }, 5000)
  }
}
init()
