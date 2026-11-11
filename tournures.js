/* ============================================================
   990 — LES TOURNURES : les cartes de production
   Se charge APRÈS ielts-cards.js, AVANT app.js.

   D'où ça vient (2026-11-11). Ces 576 cartes vivaient dans la
   salle d'examen (ielts.html), avec leur propre moteur et leur
   propre coin de mémoire. L'examen est passé, la salle est
   partie ; les cartes restent — c'est le meilleur matériel de
   l'app : recto en français, à toi de PRODUIRE l'anglais, et
   aucune forme fautive n'est jamais imprimée.

   La progression déjà acquise est récupérée une fois pour toutes
   (voir trnMigrer) : l'ancien moteur rangeait son état dans
   localStorage['ielts:cards'] sous la clé « paquet:expression ».
   On garde la même clé, donc rien ne se perd.

   État : S.tourn = { "paquet:en" -> {ease, interval, reps, lapses,
                      due(ms), introduced} }, S.tournDeck, S.tournNew
   ============================================================ */
'use strict';

const TRN_DECKS = (window.TOURNURES_DECKS || []);
const TRN_ALL = (window.TOURNURES || []).map(c => ({ id: c[0] + ':' + c[2], d: c[0], fr: c[1], en: c[2], ex: c[3] || '', n: c[4] || '' }));
const TRN_NAME = {}; TRN_DECKS.forEach(d => { TRN_NAME[d[0]] = d[1]; });
const TRN_DESC = {}; TRN_DECKS.forEach(d => { TRN_DESC[d[0]] = d[2]; });
const TRN_PERSO = new Set(TRN_DECKS.filter(d => d[3] === 'perso').map(d => d[0]));
const TRN_NEW_PER_DAY = 4;   // le quota a fondu avec la journée : 30 → 4 le 2026-11-11

/* ---------- état ---------- */
function trn() {
  if (!S.tourn || typeof S.tourn !== 'object') S.tourn = {};
  return S.tourn;
}
function trnEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function trnSt(id) {
  const t = trn();
  if (!t[id]) t[id] = { ease: 2.5, interval: 0, reps: 0, lapses: 0, due: 0, introduced: false };
  return t[id];
}
function trnDeck() { return S.tournDeck || 'all'; }
function trnSetDeck(d) { S.tournDeck = d; save(); renderTournHome(); }

/* ---------- la reprise de l'ancienne progression (une seule fois) ---------- */
function trnMigrer() {
  if (S.tournMigre) return 0;
  S.tournMigre = 1;
  let n = 0;
  try {
    const raw = JSON.parse(localStorage.getItem('ielts:cards') || '{}');
    const t = trn();
    Object.keys(raw || {}).forEach(id => {
      const o = raw[id];
      if (!o || t[id]) return;
      const iv = Math.max(0, Number(o.iv) || 0);
      let due = 0;
      if (typeof o.due === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(o.due)) {
        const [y, m, d] = o.due.split('-').map(Number);
        due = new Date(y, m - 1, d).getTime();
      }
      t[id] = {
        ease: Number(o.ef) || 2.5, interval: iv, reps: Number(o.reps) || 0,
        lapses: Number(o.lapses) || 0, due: due || Date.now(), introduced: true
      };
      n++;
    });
    if (n) save();
  } catch (e) {}
  return n;
}

/* ---------- SM-2, indépendant des autres decks ---------- */
function trnRate(id, rating) {
  const c = trnSt(id), now = Date.now();
  if (!c.introduced) { c.introduced = true; S.tournNew = (S.tournNew || 0) + 1; S.tournNewDate = todayStr(); }
  if (rating === 0) {
    c.reps = 0; c.lapses += 1; c.ease = Math.max(1.3, c.ease - 0.2); c.interval = 0; c.due = now + 60000;
  } else {
    if (c.interval < 1) c.interval = rating === 1 ? 1 : rating === 2 ? 2 : 4;
    else {
      const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3;
      c.interval = Math.round(c.interval * m);
    }
    if (rating === 1) c.ease = Math.max(1.3, c.ease - 0.15);
    if (rating === 3) c.ease += 0.15;
    c.reps += 1; c.due = now + Math.max(1, c.interval) * DAY;
  }
  addXp(rating === 0 ? 2 : 6);
  bumpDaily('cards');
  save();
}
function trnNextLabel(id, rating) {
  const c = trnSt(id);
  if (rating === 0) return '<1 min';
  let iv;
  if (c.interval < 1) iv = rating === 1 ? 1 : rating === 2 ? 2 : 4;
  else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; iv = Math.round(c.interval * m); }
  iv = Math.max(1, iv);
  return iv < 30 ? iv + ' j' : Math.round(iv / 30) + ' mois';
}
function trnNewToday() { return S.tournNewDate === todayStr() ? (S.tournNew || 0) : 0; }
function trnPool(deck) {
  const d = deck || trnDeck();
  return d === 'all' ? TRN_ALL.filter(c => !TRN_PERSO.has(c.d)) : TRN_ALL.filter(c => c.d === d);
}
function trnCounts(deck) {
  const now = Date.now(), pool = trnPool(deck), t = trn();
  let due = 0, fresh = 0, vues = 0, ancrees = 0;
  pool.forEach(c => {
    const s = t[c.id];
    if (!s || !s.introduced) fresh++;
    else { vues++; if (s.due <= now) due++; if (s.interval >= 21) ancrees++; }
  });
  return { due, fresh, vues, ancrees, total: pool.length };
}
function trnSeen() { let n = 0; const t = trn(); for (const k in t) if (t[k].introduced) n++; return n; }
function trnMastered() { let n = 0; const t = trn(); for (const k in t) if (t[k].interval >= 21) n++; return n; }
function trnDueCount() { return trnCounts('all').due + TRN_DECKS.filter(d => d[3] === 'perso').reduce((a, d) => a + trnCounts(d[0]).due, 0); }
function buildTrnQueue(deck) {
  const now = Date.now(), pool = trnPool(deck), t = trn();
  const due = [], news = [];
  pool.forEach(c => {
    const s = t[c.id];
    if (s && s.introduced) { if (s.due <= now) due.push(c); }
    else news.push(c);
  });
  shuffle(due); shuffle(news);
  /* Le plafond du jour s'applique au paquet général ; sur un paquet
     perso choisi à la main, c'est toi qui décides. */
  const cap = (deck && deck !== 'all') ? news.length : Math.max(0, TRN_NEW_PER_DAY - trnNewToday());
  return due.concat(news.slice(0, cap)).slice(0, 25);
}

/* ============================================================
   L'ACCUEIL DU PAQUET
   ============================================================ */
function renderTournHome() {
  trnMigrer();
  const d = trnDeck(), c = trnCounts(d), q = buildTrnQueue(d).length;
  const chip = id => {
    const k = trnCounts(id), n = k.due + Math.min(k.fresh, 99);
    return `<button class="segchip ${d === id ? 'on' : ''}" onclick="trnSetDeck('${id}')">${trnEsc(TRN_NAME[id])} <span class="cnt">${k.due ? k.due + ' dus' : k.total}</span></button>`;
  };
  const generaux = TRN_DECKS.filter(x => x[3] !== 'perso').map(x => chip(x[0])).join('');
  const persos = TRN_DECKS.filter(x => x[3] === 'perso').map(x => chip(x[0])).join('');
  const all = trnCounts('all');
  app.innerHTML = `
    <div class="card">
      <h2>🗂️ Les tournures</h2>
      <div class="sub">Le recto est en <b style="color:var(--txt)">français</b> : tu dois produire l'anglais, <b style="color:var(--txt)">à voix haute</b>, avant de retourner la carte. Une tournure qu'on reconnaît sans pouvoir la dire ne sert à rien le jour où il faut la dire.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${trnSeen()}<span style="font-size:15px;color:var(--muted)"> / ${TRN_ALL.length}</span></div><div class="sub">cartes vues</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${trnMastered()}</div><div class="sub">ancrées (≥21j)</div></div>
      </div>
    </div>

    <button class="btn" onclick="startTourn()" ${q === 0 ? 'disabled' : ''}>
      ${q === 0 ? 'Rien à faire ici aujourd\'hui 🎉' : `Réviser · ${q} carte(s)${c.due ? ` · ${c.due} due(s)` : ''}`}
    </button>
    <div class="sub center mb" style="margin-top:6px">${trnEsc(d === 'all' ? 'Tous les paquets généraux, mélangés' : TRN_DESC[d] || '')}</div>

    <div class="card">
      <h2 style="font-size:15px">Les paquets</h2>
      <div class="segwrap mt">
        <button class="segchip ${d === 'all' ? 'on' : ''}" onclick="trnSetDeck('all')">Tous <span class="cnt">${all.due ? all.due + ' dus' : all.total}</span></button>
        ${generaux}
      </div>
      <div class="sub mt" style="font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.05em">Tes paquets à toi</div>
      <div class="segwrap mt">${persos}</div>
      <div class="sub mt" style="font-size:12px">Les paquets perso sont à part du compte du jour : ils ne t'imposent rien, tu les ouvres quand tu veux.</div>
    </div>

    <button class="btn sec" onclick="renderTournListe()">📋 Parcourir le paquet (${c.total})</button>
    <button class="btn ghost mt" onclick="setView('cartes')">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ---------- la liste, pour relire en bloc ---------- */
function renderTournListe() {
  const now = Date.now(), pool = trnPool(), t = trn();
  const rows = pool.map(c => {
    const s = t[c.id];
    const et = !s || !s.introduced ? ['st-new', 'nouvelle'] : s.interval >= 21 ? ['st-mat', 'ancrée'] : s.due <= now ? ['st-lrn', 'à revoir'] : ['st-lrn', 'dans ' + Math.max(1, Math.round((s.due - now) / DAY)) + ' j'];
    return `<div class="vrow">
      <div class="vinfo"><div class="ven">${trnEsc(c.en)}</div><div class="vfr">${trnEsc(c.fr)}</div></div>
      <div class="vmeta"><span class="vst ${et[0]}">${et[1]}</span><button class="spk sm" onclick="speak(${JSON.stringify(c.en).replace(/"/g, '&quot;')})">🔊</button></div>
    </div>`;
  }).join('');
  app.innerHTML = `
    <div class="card"><h2 style="font-size:16px">${trnEsc(trnDeck() === 'all' ? 'Tous les paquets généraux' : TRN_NAME[trnDeck()])}</h2>
      <div class="sub">${pool.length} cartes. Les notes de chaque carte n'apparaissent que dans la séance.</div></div>
    ${rows}
    <button class="btn ghost mt" onclick="renderTournHome()">← Les tournures</button>
  `;
  window.scrollTo(0, 0);
}

/* ============================================================
   LA SÉANCE
   ============================================================ */
let TRQ = null;
function startTourn() {
  const queue = buildTrnQueue(trnDeck());
  if (!queue.length) { toast('Rien à réviser ici 🎉'); return; }
  TRQ = { queue, pos: 0, done: 0, again: 0, shown: false };
  renderTournCard();
}
function renderTournCard() {
  if (!TRQ || TRQ.pos >= TRQ.queue.length) return finishTourn();
  const c = TRQ.queue[TRQ.pos], s = trn()[c.id];
  const isNew = !s || !s.introduced;
  TRQ.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>${isNew ? '🆕 Nouvelle' : '🔁 Révision'} · ${trnEsc(TRN_NAME[c.d] || '')}</span><span>${TRQ.pos + 1} / ${TRQ.queue.length}</span></div>
    <div class="pbar mb"><i style="width:${TRQ.pos / TRQ.queue.length * 100}%"></i></div>
    <div class="flash" onclick="flipTourn()">
      <div class="theme">dis-le en anglais</div>
      <div class="front" style="font-size:${c.fr.length > 40 ? '20px' : '26px'};line-height:1.35">${trnEsc(c.fr)}</div>
      <div id="trback" class="hidden">
        <div class="back" style="font-size:${c.en.length > 40 ? '17px' : '21px'};line-height:1.4">${trnEsc(c.en)}</div>
        ${c.ex ? `<div class="ex">${trnEsc(c.ex)}</div>` : ''}
        ${c.n ? `<div class="ex" style="font-style:normal;margin-top:10px">💡 ${trnEsc(c.n)}</div>` : ''}
      </div>
      <div id="trhint" class="tap">Dis-la à voix haute · touche pour vérifier ▽</div>
    </div>
    <div id="trrate"></div>
  `;
  window.scrollTo(0, 0);
}
function flipTourn() {
  if (!TRQ || TRQ.shown) return;
  TRQ.shown = true;
  const c = TRQ.queue[TRQ.pos];
  document.getElementById('trback').classList.remove('hidden');
  document.getElementById('trhint').classList.add('hidden');
  if (!S.cardMute) speak(c.en);
  document.getElementById('trrate').innerHTML = `
    <div class="srsrow">
      <button class="again" onclick="doRateTourn(0)">À revoir<small>${trnNextLabel(c.id, 0)}</small></button>
      <button class="hard" onclick="doRateTourn(1)">Dur<small>${trnNextLabel(c.id, 1)}</small></button>
      <button class="good" onclick="doRateTourn(2)">Bien<small>${trnNextLabel(c.id, 2)}</small></button>
      <button class="easy" onclick="doRateTourn(3)">Facile<small>${trnNextLabel(c.id, 3)}</small></button>
    </div>
    <button class="spk" onclick="speak(${JSON.stringify(c.en).replace(/"/g, '&quot;')});event.stopPropagation()">🔊</button>
    <button class="btn ghost mt" onclick="TRQ=null;renderTournHome()">Arrêter la séance</button>`;
}
function doRateTourn(rating) {
  const c = TRQ.queue[TRQ.pos];
  trnRate(c.id, rating);
  if (rating === 0) { TRQ.again++; TRQ.queue.splice(Math.min(TRQ.queue.length, TRQ.pos + 4), 0, c); }
  else TRQ.done++;
  TRQ.pos++;
  renderTournCard();
}
function finishTourn() {
  const n = TRQ ? TRQ.done : 0, again = TRQ ? TRQ.again : 0;
  TRQ = null; touchDay(); save();
  if (typeof checkAchievements === 'function') checkAchievements();
  app.innerHTML = `
    <div class="card big">
      <div class="em">🗂️</div>
      <div class="score" style="color:var(--good)">${n}</div>
      <div class="lab">carte(s) passée(s)${again ? ` · ${again} à revoir` : ''}</div>
      <div class="mt sub">Celles que tu as dites sans hésiter sont à toi. Les autres reviendront : c'est le principe, pas un échec.</div>
    </div>
    <button class="btn" onclick="renderTournHome()">Terminé</button>
  `;
  window.scrollTo(0, 0);
}
function trnTuileTexte() {
  const c = trnCounts('all');
  if (c.due) return `${c.due} tournure(s) à redire · ${trnSeen()} vues sur ${TRN_ALL.length}`;
  return `${trnSeen()} vues sur ${TRN_ALL.length} · ${trnMastered()} ancrées`;
}
