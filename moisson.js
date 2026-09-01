/* ============================================================
   990 — LA MOISSON : le deck perso de tournures
   Doit se charger AVANT app.js.

   La boucle :
     1. tu attrapes une tournure dans la nature (série, article, conversation)
     2. tu l'exportes → tu colles à Claude → il l'explique au format « @@ »
     3. tu recolles sa réponse dans l'app → la carte devient révisable (SM-2)

   État : S.mine = [ {id, en, fr, note, ex, exfr, src, created, updated, k, srs} ]
     en    : la tournure (anglais) — seul champ obligatoire
     fr    : le sens court — tant qu'il est vide, la carte est « à expliquer »
     note  : la nuance (registre, piège, origine)
     ex/exfr : phrase d'exemple + traduction
     src   : où tu l'as attrapée
     k     : 1 si la carte a été enrichie par un import Claude
     srs   : {ease, interval, reps, due, introduced}
   ============================================================ */

/* ---------- helpers ---------- */
function mine() { if (!Array.isArray(S.mine)) S.mine = []; return S.mine; }
function mEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function mAttr(s) { return mEsc(s).replace(/"/g, '&quot;'); }
/* Normalisation pour rapprocher « To Get One's Ducks In A Row » et « get ones ducks in a row » */
function mNorm(s) {
  return String(s || '').toLowerCase()
    .replace(/[’`´]/g, "'")
    .replace(/^(to|the|a|an)\s+/, '')
    .replace(/[^a-z0-9' ]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function mById(id) { return mine().find(e => e.id === id); }
function mReady(e) { return !!(e.fr && e.fr.trim()); }
function minePending() { return mine().filter(e => !mReady(e)); }
function minePendingCount() { return minePending().length; }
/* Ancienneté de la plus vieille carte en attente, en jours */
function minePendingAge() {
  const p = minePending();
  if (!p.length) return 0;
  const oldest = Math.min(...p.map(e => e.created || Date.now()));
  return Math.floor((Date.now() - oldest) / DAY);
}
function mineMastered() { return mine().filter(e => e.srs && e.srs.interval >= 21).length; }
function mineSeen() { return mine().filter(e => e.srs && e.srs.introduced).length; }

/* ---------- SM-2 (indépendant des autres decks) ---------- */
function mSrs(e) {
  if (!e.srs) e.srs = { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false };
  return e.srs;
}
function mineDue() {
  const now = Date.now();
  return mine().filter(e => mReady(e) && e.srs && e.srs.introduced && e.srs.due <= now);
}
function mineFresh() { return mine().filter(e => mReady(e) && (!e.srs || !e.srs.introduced)); }
const MINE_SESSION = 25;
function buildMineQueue() {
  const due = shuffle(mineDue().map(e => e.id));
  const news = shuffle(mineFresh().map(e => e.id));
  return due.concat(news).slice(0, MINE_SESSION);
}
function mineQueueCount() { return Math.min(MINE_SESSION, mineDue().length + mineFresh().length); }
function rateMine(id, rating) {
  const e = mById(id); if (!e) return;
  const c = mSrs(e);
  c.introduced = true;
  const now = Date.now();
  if (rating === 0) { c.reps = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.interval = 0; c.due = now + 60 * 1000; }
  else {
    if (c.interval < 1) c.interval = rating === 3 ? 4 : 1;
    else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; c.interval = Math.round(c.interval * m); }
    if (rating === 1) c.ease = Math.max(1.3, c.ease - 0.15);
    if (rating === 3) c.ease += 0.15;
    c.reps += 1; c.due = now + Math.max(1, c.interval) * DAY;
  }
  addXp(rating === 0 ? 2 : 6); save();
}
function mineNextLabel(id, rating) {
  const e = mById(id); const c = mSrs(e);
  if (rating === 0) return '<1min';
  let iv;
  if (c.interval < 1) iv = rating === 3 ? 4 : 1;
  else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; iv = Math.round(c.interval * m); }
  iv = Math.max(1, iv);
  return iv < 30 ? iv + 'j' : (Math.round(iv / 30) + 'mois');
}

/* ============================================================
   ACCUEIL DU DECK
   ============================================================ */
let mineFilter = '';
function mineStatusTag(e) {
  if (!mReady(e)) return { cls: 'st-new', lab: '⏳ à expliquer' };
  if (e.srs && e.srs.interval >= 21) return { cls: 'st-mat', lab: 'ancrée' };
  if (e.srs && e.srs.introduced) return { cls: 'st-lrn', lab: 'en cours' };
  return { cls: 'st-lrn', lab: 'prête' };
}
function mineRows() {
  const q = mNorm(mineFilter);
  const list = [...mine()].sort((a, b) => (b.updated || 0) - (a.updated || 0))
    .filter(e => !q || mNorm(e.en).includes(q) || mNorm(e.fr).includes(q) || mNorm(e.src).includes(q));
  if (!list.length) return `<div class="sub center mt">Aucune tournure ${mineFilter ? 'ne correspond' : 'pour l’instant'}.</div>`;
  return list.map(e => {
    const t = mineStatusTag(e);
    return `<div class="vrow" style="align-items:flex-start">
      <button class="spk sm" onclick="speakMine(${e.id})" title="Écouter">🔊</button>
      <div class="vinfo" onclick="renderMineEdit(${e.id})" style="cursor:pointer">
        <div class="ven">${mEsc(e.en)}${e.k ? ' <span style="color:var(--accent)">✨</span>' : ''}</div>
        <div class="vfr">${e.fr ? mEsc(e.fr) : '<i style="color:var(--dim)">sens à écrire — ou à demander à Claude</i>'}</div>
        ${e.src ? `<div class="vfr" style="color:var(--dim);font-size:12px">📍 ${mEsc(e.src)}</div>` : ''}
      </div>
      <div class="vmeta"><span class="vst ${t.cls}">${t.lab}</span></div>
    </div>`;
  }).join('');
}
function filterMine() { mineFilter = (document.getElementById('msearch') || {}).value || ''; const el = document.getElementById('mlist'); if (el) el.innerHTML = mineRows(); }

function renderMoissonHome() {
  mine();
  const total = mine().length;
  const pend = minePendingCount();
  const q = mineQueueCount();
  const age = minePendingAge();
  const dir = S.mineDir === 'fr2en' ? 'fr2en' : 'en2fr';

  const nudge = pend > 0 ? `
    <div class="banner">
      <div class="t">📤 ${pend} tournure${pend > 1 ? 's' : ''} attend${pend > 1 ? 'ent' : ''} son explication</div>
      <div class="d">${age >= 3 ? `La plus ancienne dort ici depuis ${age} jours. ` : ''}Exporte-les, colle-les à Claude, recolle sa réponse : elles deviennent des cartes.</div>
      <button class="btn" onclick="renderMineExport(false)">Exporter pour Claude</button>
    </div>` : '';

  app.innerHTML = `
    ${nudge}
    <div class="card">
      <h2>🌾 La Moisson</h2>
      <div class="sub">Ton deck à toi. Les tournures que <b style="color:var(--txt)">tu</b> attrapes dans la nature — une série, un article, une réunion. Tu les notes en 5 secondes, Claude les explique, elles reviennent en révision espacée jusqu'à devenir les tiennes.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${total}</div><div class="sub">attrapées</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${mineMastered()}</div><div class="sub">ancrées (≥21j)</div></div>
      </div>
    </div>

    <button class="btn" onclick="renderMineEdit(0)">＋ Attraper une tournure</button>
    <button class="btn sec mt" onclick="startMine()" ${q === 0 ? 'disabled' : ''}>
      ${q === 0 ? (total === 0 ? 'Commence par en attraper une' : pend === total ? 'Aucune carte prête — fais-les expliquer' : 'Rien à réviser aujourd’hui 🎉') : `Réviser · ${q} carte(s)`}
    </button>

    <div class="row2 mt">
      <button class="btn sec" onclick="renderMineExport(false)" ${total === 0 ? 'disabled' : ''}>📤 Exporter</button>
      <button class="btn sec" onclick="renderMineImport()">📥 Importer</button>
    </div>

    <div class="card mt">
      <h2 style="font-size:15px">Sens de la carte</h2>
      <div class="sub" style="margin-bottom:8px">${dir === 'en2fr'
        ? 'Tu vois la tournure → tu dis ce qu’elle veut dire et quand on l’emploie.'
        : 'Tu vois le sens → tu dois <b style="color:var(--txt)">produire</b> la tournure. Plus dur, et c’est celui qui sert à parler.'}</div>
      <div class="segwrap">
        <button class="segchip ${dir === 'en2fr' ? 'on' : ''}" onclick="setMineDir('en2fr')">🇬🇧 → 🇫🇷 reconnaître</button>
        <button class="segchip ${dir === 'fr2en' ? 'on' : ''}" onclick="setMineDir('fr2en')">🇫🇷 → 🇬🇧 produire</button>
      </div>
    </div>

    <div class="card">
      <h2 style="font-size:15px">Comment ça marche</h2>
      <div class="sub" style="line-height:1.6">
        <b style="color:var(--txt)">1.</b> Tu tombes sur une tournure → «&nbsp;＋ Attraper&nbsp;». Le sens peut rester vide : c'est le but.<br>
        <b style="color:var(--txt)">2.</b> «&nbsp;📤 Exporter&nbsp;» copie tout dans ton presse-papier, <i>avec la consigne déjà écrite</i>. Tu colles ça à Claude.<br>
        <b style="color:var(--txt)">3.</b> Il répond en blocs «&nbsp;@@&nbsp;». Tu copies sa réponse, «&nbsp;📥 Importer&nbsp;», tu colles : tes cartes se remplissent toutes seules.
      </div>
    </div>

    ${total ? `<input id="msearch" class="transinput" style="min-height:0" placeholder="Rechercher dans mes tournures…" oninput="filterMine()" value="${mAttr(mineFilter)}">
    <div id="mlist">${mineRows()}</div>` : ''}

    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function setMineDir(d) { S.mineDir = d; save(); renderMoissonHome(); }

/* ============================================================
   CAPTURE / ÉDITION  (id = 0 → nouvelle)
   ============================================================ */
function renderMineEdit(id) {
  const e = id ? mById(id) : null;
  const isNew = !e;
  const v = e || { en: '', fr: '', note: '', ex: '', exfr: '', src: '' };
  app.innerHTML = `
    <div class="card">
      <h2>${isNew ? '🌾 Attraper une tournure' : 'Modifier'}</h2>
      <div class="sub">${isNew ? 'Note-la vite, tant qu’elle est fraîche. Seule la tournure est obligatoire — le reste, Claude le remplira.' : 'Tu peux corriger le sens, la nuance, l’exemple.'}</div>
      <div class="sub mt" style="font-weight:800;color:var(--accent)">La tournure (anglais) *</div>
      <input id="m_en" class="transinput" style="min-height:0;margin-top:6px" placeholder="ex. to get one's ducks in a row" value="${mAttr(v.en)}">
      <div class="sub" style="font-weight:800">Le sens (facultatif)</div>
      <input id="m_fr" class="transinput" style="min-height:0;margin-top:6px" placeholder="laisse vide si tu ne sais pas — c’est le principe" value="${mAttr(v.fr)}">
      <div class="sub" style="font-weight:800">Où tu l’as attrapée (facultatif)</div>
      <input id="m_src" class="transinput" style="min-height:0;margin-top:6px" placeholder="ex. Succession S2 · un mail de stage · The Economist" value="${mAttr(v.src)}">
      ${!isNew ? `
      <div class="sub" style="font-weight:800">La nuance</div>
      <textarea id="m_note" class="transinput" style="margin-top:6px" placeholder="registre, quand on l’emploie, le piège…">${mEsc(v.note)}</textarea>
      <div class="sub" style="font-weight:800">Exemple (EN)</div>
      <input id="m_ex" class="transinput" style="min-height:0;margin-top:6px" value="${mAttr(v.ex)}">
      <div class="sub" style="font-weight:800">Traduction de l’exemple</div>
      <input id="m_exfr" class="transinput" style="min-height:0;margin-top:6px" value="${mAttr(v.exfr)}">` : ''}
      <button class="btn mt" onclick="saveMine(${id || 0})">💾 ${isNew ? 'Attraper' : 'Enregistrer'}</button>
    </div>
    ${!isNew ? `<button class="btn ghost" onclick="delMine(${id})">Supprimer cette tournure</button>` : ''}
    <button class="btn ghost" onclick="renderMoissonHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
  const f = document.getElementById('m_en'); if (f && isNew) f.focus();
}
function _mval(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; }
function saveMine(id) {
  const en = _mval('m_en');
  if (!en) { toast('Écris au moins la tournure'); return; }
  const now = Date.now();
  if (id) {
    const e = mById(id); if (!e) return renderMoissonHome();
    e.en = en; e.fr = _mval('m_fr'); e.src = _mval('m_src');
    e.note = _mval('m_note'); e.ex = _mval('m_ex'); e.exfr = _mval('m_exfr');
    e.updated = now; save(); toast('Enregistré');
  } else {
    const dup = mine().find(x => mNorm(x.en) === mNorm(en));
    if (dup) { toast('Tu l’avais déjà attrapée 🌾'); renderMineEdit(dup.id); return; }
    mine().push({ id: now, en, fr: _mval('m_fr'), note: '', ex: '', exfr: '', src: _mval('m_src'),
      created: now, updated: now, k: 0, srs: { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false } });
    addXp(8); save(); touchDay();
    if (typeof checkAchievements === 'function') checkAchievements();
    toast('🌾 Attrapée ! +8 XP');
  }
  renderMoissonHome();
}
function delMine(id) {
  if (!confirm('Supprimer cette tournure ?')) return;
  S.mine = mine().filter(e => e.id !== id); save(); renderMoissonHome();
}

/* ============================================================
   EXPORT — le texte contient la consigne, donc il marche
   dans n'importe quelle conversation, même sans contexte.
   ============================================================ */
let MINE_EXPORT = null;
function mineExportText(all) {
  const list = all ? [...mine()] : minePending();
  const d = new Date().toLocaleDateString('fr-FR');
  let t = `# 🌾 LA MOISSON — ${list.length} tournure(s) à expliquer\n(export de mon app 990, le ${d})\n\n`;
  t += `Claude, voici des tournures anglaises que j'ai attrapées dans la nature. Explique-les-moi.\n\n`;
  t += `RÉPONDS EXACTEMENT DANS CE FORMAT — je recolle ta réponse dans l'app, qui la parse :\n\n`;
  t += `@@ the exact expression\n`;
  t += `= le sens en français : court, une ligne, ce qui doit tenir sur une carte\n`;
  t += `~ la nuance : registre (familier / neutre / soutenu / business), dans quelle situation on l'emploie et quand on l'évite, le piège de traduction depuis le français, l'origine si elle éclaire\n`;
  t += `ex an example sentence in natural English\n`;
  t += `fr sa traduction française\n\n`;
  t += `Règles :\n`;
  t += `· un bloc « @@ » par tournure, dans l'ordre ci-dessous ;\n`;
  t += `· garde la tournure telle que je l'ai écrite dans le « @@ » (c'est la clé qui retrouve ma carte) ;\n`;
  t += `· si ma tournure est bancale, mal entendue ou n'existe pas telle quelle : mets la forme correcte dans le « @@ » et dis-moi dans le « ~ » ce que j'avais écorché ;\n`;
  t += `· tu peux ajouter des blocs « @@ » en bonus — 2 ou 3 tournures voisines qui vont avec, celles qu'un natif emploierait dans le même contexte ;\n`;
  t += `· pas de blabla autour : je copie tout le bloc d'un coup.\n\n`;
  t += `════════ MES TOURNURES ════════\n\n`;
  list.forEach((e, i) => {
    t += `${i + 1}. @@ ${e.en}\n`;
    if (e.src) t += `   · attrapée dans : ${e.src}\n`;
    if (e.fr) t += `   · ce que j'en comprends : ${e.fr}${e.k ? '' : ' (à corriger si je me trompe)'}\n`;
    else t += `   · ce que j'en comprends : aucune idée, c'est pour ça que je te la donne\n`;
    t += `\n`;
  });
  if (!list.length) t += `(rien en attente)\n`;
  return t;
}
function renderMineExport(all) {
  MINE_EXPORT = mineExportText(all);
  const n = (all ? mine() : minePending()).length;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(MINE_EXPORT).then(() => toast('📋 Copié — colle-le à Claude'), () => {});
  }
  app.innerHTML = `
    <div class="card">
      <h2>📤 Export · ${n} tournure(s)</h2>
      <div class="sub">Copié dans ton presse-papier. Colle-le tel quel dans ta conversation avec Claude : la consigne est déjà dedans. Puis reviens ici avec «&nbsp;📥 Importer&nbsp;».</div>
    </div>
    <textarea class="transinput" style="min-height:320px;font-size:13px" readonly onclick="this.select()">${mEsc(MINE_EXPORT)}</textarea>
    <button class="btn" onclick="copyMineExport()">📋 Copier à nouveau</button>
    <button class="btn sec mt" onclick="renderMineImport()">📥 Coller la réponse de Claude</button>
    ${mine().length > minePendingCount() ? `<button class="btn ghost" onclick="renderMineExport(${all ? 'false' : 'true'})">${all ? `⏳ Seulement les ${minePendingCount()} en attente` : `Tout exporter (${mine().length})`}</button>` : ''}
    <button class="btn ghost" onclick="renderMoissonHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function copyMineExport() {
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(MINE_EXPORT).then(() => toast('📋 Copié'), () => toast('Sélectionne et copie à la main'));
  else toast('Sélectionne et copie à la main');
}

/* ============================================================
   IMPORT — parse les blocs « @@ » (tolérant : gras, puces,
   ```fences```, texte autour, champs manquants)
   ============================================================ */
function parseMoisson(raw) {
  const out = [];
  const lines = String(raw || '').replace(/\r/g, '').split('\n');
  let cur = null;
  /* ordre important : on retire le gras AVANT les puces, sinon « **@@ » perd une seule étoile */
  const clean = l => l.replace(/\*\*/g, '').replace(/__/g, '').replace(/^\s*[-*•·]\s*/, '').replace(/^\s*\d+[.)]\s*/, '').replace(/^#+\s*/, '').trim();
  const strip = s => s.replace(/^["“”'`]+|["“”'`]+$/g, '').trim();
  for (let raw2 of lines) {
    if (/^\s*```/.test(raw2)) continue;
    const l = clean(raw2);
    const mm = l.match(/^@@\s*(.+)$/);
    if (mm) { if (cur && cur.en) out.push(cur); cur = { en: strip(mm[1]), fr: '', note: '', ex: '', exfr: '' }; continue; }
    if (!cur) continue;
    let m;
    if ((m = l.match(/^=\s*(.+)$/))) { cur.fr = strip(m[1]); continue; }
    if ((m = l.match(/^~\s*(.+)$/))) { cur.note = cur.note ? cur.note + ' ' + m[1].trim() : m[1].trim(); continue; }
    if ((m = l.match(/^ex\s*[:.\-–]?\s+(.+)$/i))) { cur.ex = strip(m[1]); continue; }
    if ((m = l.match(/^fr\s*[:.\-–]?\s+(.+)$/i))) { cur.exfr = strip(m[1]); continue; }
    /* une ligne libre après un « ~ » prolonge la nuance */
    if (l && cur.note && !cur.ex) cur.note += ' ' + l;
  }
  if (cur && cur.en) out.push(cur);
  return out;
}
function renderMineImport(msg, keep, isErr) {
  app.innerHTML = `
    <div class="card">
      <h2>📥 Importer les explications</h2>
      <div class="sub">Copie toute la réponse de Claude et colle-la ici. L'app repère les blocs «&nbsp;@@&nbsp;», remplit tes cartes existantes et crée celles qu'il a ajoutées en bonus.</div>
    </div>
    ${msg ? `<div class="expl ${isErr ? 'no' : 'ok'} mb">${msg}</div>` : ''}
    <textarea id="m_paste" class="transinput" style="min-height:${msg && !isErr ? '120px' : '260px'};font-size:13px" placeholder="@@ to get one's ducks in a row&#10;= tout mettre au carré avant de se lancer&#10;~ familier mais très courant en réunion…&#10;ex Let me get my ducks in a row first.&#10;fr Laisse-moi d'abord tout mettre au carré.">${mEsc(keep || '')}</textarea>
    <button class="btn ${msg && !isErr ? 'sec' : ''}" onclick="runMineImport()">Importer</button>
    ${msg && !isErr && mineQueueCount() ? `<button class="btn mt" onclick="startMine()">Réviser maintenant · ${mineQueueCount()} carte(s)</button>` : ''}
    <button class="btn ghost mt" onclick="renderMoissonHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function runMineImport() {
  const raw = (document.getElementById('m_paste') || {}).value || '';
  const parsed = parseMoisson(raw);
  if (!parsed.length) {
    toast('Aucun bloc « @@ » trouvé');
    renderMineImport('Je n’ai trouvé aucun bloc «&nbsp;@@&nbsp;» là-dedans. Chaque tournure doit commencer par une ligne <b>@@ l’expression</b>, puis <b>=</b> le sens. Redemande à Claude de répondre au format de l’export.', raw, true);
    return;
  }
  let upd = 0, add = 0;
  const now = Date.now();
  parsed.forEach((p, idx) => {
    const key = mNorm(p.en);
    const e = mine().find(x => mNorm(x.en) === key);
    if (e) {
      if (p.fr) e.fr = p.fr;
      if (p.note) e.note = p.note;
      if (p.ex) e.ex = p.ex;
      if (p.exfr) e.exfr = p.exfr;
      e.en = p.en; e.k = 1; e.updated = now; upd++;
    } else {
      mine().push({ id: now + idx, en: p.en, fr: p.fr, note: p.note, ex: p.ex, exfr: p.exfr, src: 'ajoutée par Claude',
        created: now, updated: now, k: 1, srs: { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false } });
      add++;
    }
  });
  save(); touchDay();
  if (typeof checkAchievements === 'function') checkAchievements();
  addXp(3 * parsed.length);
  const bits = [];
  if (upd) bits.push(`<b>${upd}</b> carte(s) enrichie(s)`);
  if (add) bits.push(`<b>${add}</b> nouvelle(s) carte(s) en bonus`);
  toast('✨ Import réussi');
  renderMineImport(`✨ ${bits.join(' · ')}. Elles sont prêtes à réviser.`);
}

/* ============================================================
   RÉVISION
   ============================================================ */
let MN = null;
function startMine() {
  const queue = buildMineQueue();
  if (!queue.length) { toast('Rien à réviser ici pour le moment 🎉'); return; }
  MN = { queue, pos: 0, done: 0, shown: false };
  renderMineCard();
}
/* En mode « produire », on masque la tournure dans l'exemple */
function maskExpr(sentence, expr) {
  if (!sentence) return '';
  const core = String(expr).replace(/^(to|the|a|an)\s+/i, '').trim();
  const words = core.split(/\s+/).filter(w => w.length > 2);
  let s = mEsc(sentence);
  if (words.length) {
    const first = words[0].replace(/[^A-Za-z']/g, '');
    const last = words[words.length - 1].replace(/[^A-Za-z']/g, '');
    try {
      const re = new RegExp(first + '[\\s\\S]{0,40}?' + last, 'i');
      if (re.test(s)) s = s.replace(re, '<span style="color:var(--accent)">…………</span>');
    } catch (err) {}
  }
  return s;
}
function renderMineCard() {
  if (MN.pos >= MN.queue.length) return finishMine();
  const e = mById(MN.queue[MN.pos]);
  if (!e) { MN.pos++; return renderMineCard(); }
  const isNew = !e.srs || !e.srs.introduced;
  const dir = S.mineDir === 'fr2en' ? 'fr2en' : 'en2fr';
  MN.shown = false;
  const front = dir === 'en2fr' ? mEsc(e.en) : mEsc(e.fr);
  const fsize = front.length > 34 ? '21px' : front.length > 20 ? '25px' : '30px';
  const hint = dir === 'en2fr'
    ? 'Dis le sens <i>et</i> dans quelle situation on l’emploie · touche pour révéler ▽'
    : 'Produis la tournure anglaise · touche pour révéler ▽';
  const teaser = dir === 'fr2en' && e.ex ? `<div class="ex" style="margin-top:12px">« ${maskExpr(e.ex, e.en)} »</div>` : '';
  const back = dir === 'en2fr'
    ? `<div class="back" style="font-size:20px">${mEsc(e.fr)}</div>`
    : `<div class="back" style="font-size:24px">${mEsc(e.en)}</div>`;
  app.innerHTML = `
    <div class="qmeta"><span>${isNew ? '🆕 Nouvelle' : '🔁 Révision'} · 🌾 ma moisson</span><span>${MN.pos + 1} / ${MN.queue.length}</span></div>
    <div class="flash" onclick="flipMine()">
      <div class="theme">${e.src ? mEsc(e.src) : 'ta tournure'}</div>
      <div class="front" style="font-size:${fsize}">${front}</div>
      ${teaser}
      <div id="mback" class="hidden">
        ${back}
        ${e.note ? `<div class="ex" style="margin-top:12px;font-style:normal">💡 ${mEsc(e.note)}</div>` : ''}
        ${e.ex ? `<div class="ex" style="margin-top:10px">« ${mEsc(e.ex)} »${e.exfr ? `<br><span style="color:var(--dim);font-style:normal">${mEsc(e.exfr)}</span>` : ''}</div>` : ''}
      </div>
      <div id="mhint" class="tap">${hint}</div>
    </div>
    <button id="mspk" class="spk hidden" onclick="speakMine(${e.id});event.stopPropagation()" title="Écouter">🔊</button>
    <div id="mrate"></div>
    <button class="btn ghost mt" onclick="renderMineEdit(${e.id})">✏️ Corriger cette carte</button>
  `;
  window.scrollTo(0, 0);
}
function speakMine(id) { const e = mById(id); if (!e) return; speak(e.ex ? e.en + '. ' + e.ex : e.en); }
function flipMine() {
  if (MN.shown) return;
  MN.shown = true;
  document.getElementById('mback').classList.remove('hidden');
  document.getElementById('mhint').classList.add('hidden');
  const s = document.getElementById('mspk'); if (s) s.classList.remove('hidden');
  const id = MN.queue[MN.pos];
  speakMine(id);
  document.getElementById('mrate').innerHTML = `
    <div class="srsrow">
      <button class="again" onclick="doRateMine(0)">Raté<small>${mineNextLabel(id, 0)}</small></button>
      <button class="hard" onclick="doRateMine(1)">Dur<small>${mineNextLabel(id, 1)}</small></button>
      <button class="good" onclick="doRateMine(2)">Bien<small>${mineNextLabel(id, 2)}</small></button>
      <button class="easy" onclick="doRateMine(3)">Facile<small>${mineNextLabel(id, 3)}</small></button>
    </div>`;
}
function doRateMine(rating) {
  const id = MN.queue[MN.pos];
  rateMine(id, rating);
  MN.done++;
  if (typeof bumpDaily === 'function') bumpDaily('cards');
  if (rating === 0) MN.queue.splice(Math.min(MN.pos + 5, MN.queue.length), 0, id);
  MN.pos++;
  touchDay();
  renderMineCard();
}
function finishMine() {
  touchDay(); save();
  if (typeof checkAchievements === 'function') checkAchievements();
  app.innerHTML = `
    <div class="card big">
      <div class="em">🌾</div>
      <div class="score" style="color:var(--good)">+${MN.done}</div>
      <div class="lab">tournure(s) travaillée(s)</div>
      <div class="mt sub">Une tournure n'est à toi que le jour où elle sort toute seule. Place-en une aujourd'hui — à l'écrit, dans un message, n'importe où.</div>
    </div>
    <button class="btn" onclick="renderMoissonHome()">Terminé</button>
    ${mineQueueCount() ? `<button class="btn sec mt" onclick="startMine()">Continuer (${mineQueueCount()})</button>` : ''}
  `;
  window.scrollTo(0, 0);
}
