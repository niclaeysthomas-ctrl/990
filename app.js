/* ============================================================
   990 — Logique application (locale-first, localStorage)
   ============================================================ */
'use strict';

const DAY = 86400000;
/* Nouvelles cartes de vocabulaire par jour.
   15 → 25 le 13/09/2026 (le volume rendu par l'oral était passé au vocabulaire),
   puis 25 → 6 le 2026-11-11. Raison : quatre decks introduisaient 71 items
   neufs chaque jour (25 vocab + 30 tournures + 12 verbes + 4 Lime), ce qui
   produit, en régime, plusieurs centaines de révisions quotidiennes. L'examen
   est passé ; la journée doit tenir en vingt minutes, parole comprise. */
const NEW_PER_DAY = 6;
const todayStr = () => new Date().toISOString().slice(0, 10);

/* ---------- État persistant ---------- */
const DEFAULT = {
  xp: 0,
  streak: 0,
  lastActive: null,
  lessons: {},          // id -> {best: %, done: bool}
  cards: {},            // index -> {ease, interval(jours), reps, due(ms), lapses, introduced}
  newToday: 0,
  newDate: todayStr(),
  reviewsDone: 0,       // total révisions cartes (stat)
  seenListen: 0,
  placementDone: false, // (hérité) test de niveau de l'ancien simulateur TOEIC
  estScore: null,       // (hérité) dernière estimation /990 — plus alimentée
  level: 2,             // bande de difficulté visée (1 facile · 2 std · 3 difficile)
  history: [],          // [{ts, date, total, L, R, kind, diff, mins}]
  trans: {},            // index -> état SRS-lite des traductions
  transDone: 0,         // total de phrases travaillées
  daily: { date: todayStr(), cards: 0, trans: 0, study: 0, speak: 0, credited: 0 }, // objectif du jour
  mistakes: {},         // erreurs à rejouer (clé -> {kind,q,opts,correct,expl,cat,audio,box})
  register: {},         // SRS-lite du module Anglais soutenu
  transDir: 'fr2en',    // sens de la traduction : fr2en ou en2fr
  badges: [],           // trophées débloqués (ids)
  longDone: 0,          // sessions d'écoute Part 3/4 terminées
  perfectDays: 0,       // jours où l'objectif du jour a été atteint
  slowAudio: false,     // vitesse d'écoute réduite
  verbs: {},            // deck Anki à part : verbes irréguliers (index -> état SM-2)
  mine: [],             // LA MOISSON : deck perso de tournures attrapées (voir moisson.js)
  mineDir: 'en2fr',     // sens des cartes de la moisson : reconnaître ou produire
  plume: { essays: [], draft: null, seen: {} }, // LA PLUME : atelier d'expression écrite (voir plume.js)
  lime: { srs: {}, extra: [], done: 0, newDate: todayStr(), newToday: 0 }, // LA LIME : exos quotidiens de production (voir lime.js)
  dia: { srs: {}, voice: 'us', lineDir: 'shadow', stats: {} }, // LE DIAPASON : accent & prononciation (voir diapason.js)
  audioSpeed: 'normal', // vitesse d'écoute : slow · normal · native
  micro: { sessions: [], iM: 0, iC: 0, iE: 0 },  // LE MICRO : prises de parole (voir micro.js)
  tourn: {},            // LES TOURNURES : SRS des 576 cartes de production (voir tournures.js)
  tournDeck: 'all',     // paquet de tournures sélectionné
  weekly: {},           // rendez-vous hebdomadaires cochés (ex. input: '2026-11-15')
  firstRun: true
};
/* ============================================================
   L'OBJECTIF DU JOUR — refondu le 2026-11-11
   Avant : 30 cartes + 5 traductions + « étudier ». La parole, quatrième
   pilier, avait été retirée le 13/09/2026 parce que l'examen visé ne
   notait pas l'oral, et son temps versé au vocabulaire.
   L'IELTS est obtenu (7.5, C1). Ce qui reste à gagner ne s'obtient pas
   en reconnaissant des mots : il faut parler. Donc trois piliers, dans
   cet ordre, et une journée qui tient en vingt minutes :
     1. LA SÉANCE   — Le Diapason, oreille puis bouche (~12 min)
     2. PARLER      — deux minutes enregistrées au Micro
     3. LES CARTES  — dix, tous paquets confondus (30 → 10)
   Les traductions, les essais, les lectures et les ateliers restent là,
   accessibles, mais ne commandent plus la journée.
   ============================================================ */
const GOAL_CARDS = 10, GOAL_PARLER = 120, GOAL_PARLER_MIN = 100, GOAL_TRANS = 5;
function resetDailyIfNeeded() {
  if (!S.daily || S.daily.date !== todayStr()) S.daily = { date: todayStr(), cards: 0, trans: 0, study: 0, seance: 0, parler: 0, speak: 0 };
}
function bumpDaily(field, n) { resetDailyIfNeeded(); S.daily[field] = (S.daily[field] || 0) + (n === undefined ? 1 : n); save(); checkDailyDone(); }
function markStudy() { resetDailyIfNeeded(); S.daily.study = 1; save(); checkDailyDone(); }
/* La séance du Diapason (et chacun de ses ateliers) valide le premier pilier. */
function markSeance() { resetDailyIfNeeded(); S.daily.seance = 1; S.daily.study = 1; save(); checkDailyDone(); }
function parleSecs() { resetDailyIfNeeded(); return (S.daily.parler || 0) + (S.daily.parleManuel === todayStr() ? GOAL_PARLER : 0); }
function dailyProgress() {
  resetDailyIfNeeded();
  const s = S.daily.seance ? 1 : 0;
  const p = Math.min(1, parleSecs() / GOAL_PARLER_MIN);
  const c = Math.min(1, S.daily.cards / GOAL_CARDS);
  return { s, p, c, pct: Math.round((s + p + c) / 3 * 100), done: (s >= 1 && p >= 1 && c >= 1) };
}
function checkDailyDone() {
  resetDailyIfNeeded();
  if (dailyProgress().done && !S.daily.credited) {
    S.daily.credited = 1; S.perfectDays = (S.perfectDays || 0) + 1; save();
    toast('🏆 Objectif du jour atteint !');
    checkAchievements();
  }
}
/* ---------- Le rendez-vous du dimanche : de l'anglais réel dans l'oreille ----------
   Tout l'audio de l'app est de la synthèse vocale : des voix qui articulent
   trop proprement et ne mangent rien. À C1 c'est un plafond. Une fois par
   semaine, quinze minutes d'écoute libre — podcast, série en version
   originale sans sous-titres français — et trois tournures rapportées. */
function semaineISO(d) {
  const t = new Date(d || Date.now());
  const j = (t.getDay() + 6) % 7;            // lundi = 0
  t.setDate(t.getDate() - j);
  return t.toISOString().slice(0, 10);       // le lundi de la semaine en cours
}
function inputFait() { if (!S.weekly) S.weekly = {}; return S.weekly.input === semaineISO(); }
function marquerInput() {
  if (!S.weekly) S.weekly = {};
  if (S.weekly.input !== semaineISO()) S.inputSemaines = (S.inputSemaines || 0) + 1;
  S.weekly.input = semaineISO();
  addXp(30); touchDay(); save();
  if (typeof checkAchievements === 'function') checkAchievements();
  toast('🎧 Écoute réelle de la semaine ✓');
  render();
}

/* Transfert de progression entre conteneurs de stockage (PWA installée vs Safari
   vs autre appareil : iOS isole le localStorage de chaque contexte — même URL,
   progression différente). ?restore=<base64> importe tout l'état puis nettoie l'URL. */
(function () { try {
  const p = new URLSearchParams(location.search).get('restore'); if (!p) return;
  let b = p.replace(/-/g, '+').replace(/_/g, '/'); while (b.length % 4) b += '=';
  const obj = JSON.parse(decodeURIComponent(escape(atob(b))));
  if (obj && typeof obj === 'object' && obj.cards !== undefined) {
    /* Un lien de transfert REMPLACE tout. Rouvrir un vieux lien (historique,
       favori, message qu'on s'est envoyé) effaçait la progression en silence.
       Filet + confirmation, comme Le Coffre du Pointage sait déjà le faire. */
    const actuel = localStorage.getItem('t990');
    const aDuContenu = actuel && actuel.length > 400;
    if (aDuContenu) {
      try { localStorage.setItem('t990_filet', actuel); } catch (e) {}
      const dEtat = (() => { try { const s = JSON.parse(actuel);
        return (s.cards ? Object.keys(s.cards).length : 0) + ' carte(s) travaillée(s), série de ' + (s.streak || 0) + ' jour(s)';
      } catch (e) { return 'une progression existante'; } })();
      const ok = confirm('Ce lien va REMPLACER ce qui est sur cet appareil (' + dEtat + ') par la progression du lien.\n\nUne copie de secours est gardée sous la clé t990_filet.\n\nRemplacer ?');
      if (!ok) { history.replaceState(null, '', location.pathname); return; }
    }
    localStorage.setItem('t990', JSON.stringify(obj));
  }
  history.replaceState(null, '', location.pathname);
} catch (e) {} })();
function transferLink() {
  const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(S)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const url = location.origin + location.pathname + '?restore=' + b64;
  const done = () => toast('📦 Lien copié — ouvre-le là où tu veux retrouver ta progression (Safari, PWA, autre appareil)');
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => prompt('Copie ce lien :', url));
  else prompt('Copie ce lien :', url);
}
let S = load();
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem('t990') || '{}');
    return Object.assign({}, DEFAULT, raw);
  } catch (e) { return Object.assign({}, DEFAULT); }
}
/* Une seule clé (t990), réécrite en entier à chaque appel — et une origine
   github.io partagée par la vingtaine d'apps. Si le quota est atteint ou si
   le navigateur refuse d'écrire, setItem LÈVE : sans ce filet l'exception
   interrompait la fonction appelante (séance figée sur la carte en cours,
   sans un mot). Vérifié au navigateur en forçant l'échec d'écriture. */
let SAVE_KO = 0;
function toggleCardMute() {
  S.cardMute = !S.cardMute; save();
  if (S.cardMute) { try { speechSynthesis.cancel(); } catch (e) {} }
  const b = document.querySelector('.cardmute'); if (b) b.textContent = S.cardMute ? '🔇 Son des cartes coupé · le réactiver' : '🔊 Son auto · le couper';
  toast(S.cardMute ? 'Cartes en silence : le 🔊 reste là si tu veux écouter' : 'Son des cartes réactivé');
}
function save() {
  try { localStorage.setItem('t990', JSON.stringify(S)); SAVE_KO = 0; if (window.AppsSync) AppsSync.soon(4000, ['t990']); return true; }
  catch (e) {
    SAVE_KO++;
    if (SAVE_KO === 1 || SAVE_KO % 25 === 0) {
      try { toast('⚠️ Sauvegarde impossible (stockage plein) — exporte avec Le Coffre'); } catch (_) {}
      try { console.warn('990 : écriture localStorage refusée', e && e.name); } catch (_) {}
    }
    return false;
  }
}
function saveHealthy() { return SAVE_KO === 0; }

/* Les tournures versées par une correction de copie entrent dans LA MOISSON
   au premier chargement qui suit la mise à jour. Idempotent : voir mineSeedOnce. */
try { if (typeof mineSeedOnce === 'function') mineSeedOnce(); } catch (e) {}

/* ---------- Gestion jour / streak ---------- */
function touchDay() {
  const t = todayStr();
  resetDailyIfNeeded();
  if (S.newDate !== t) { S.newDate = t; S.newToday = 0; }
  if (S.lastActive !== t) {
    const y = new Date(Date.now() - DAY).toISOString().slice(0, 10);
    if (S.lastActive === y) S.streak += 1;
    else if (S.lastActive !== t) S.streak = 1;
    S.lastActive = t;
    save();
  }
  if (typeof checkAchievements === 'function') checkAchievements();
}

/* ---------- XP / niveau ---------- */
function levelFromXp(xp) {           // paliers croissants
  let lv = 1, need = 100, acc = 0;
  while (xp >= acc + need) { acc += need; lv++; need = Math.round(need * 1.35); }
  return { lv, into: xp - acc, need, floor: acc };
}
function addXp(n) {
  const before = levelFromXp(S.xp).lv;
  S.xp += n; save();
  const after = levelFromXp(S.xp).lv;
  if (after > before) toast(`⭐ Niveau ${after} atteint !`);
}

/* ---------- SRS (SM-2 simplifié, façon Anki) ---------- */
function cardState(i) {
  return S.cards[i] || { ease: 2.5, interval: 0, reps: 0, due: 0, lapses: 0, introduced: false };
}
// files du jour
function dueCards() {
  const now = Date.now();
  const rev = [];         // cartes déjà introduites et dues
  for (const i in S.cards) {
    const c = S.cards[i];
    if (c.introduced && c.due <= now) rev.push(+i);
  }
  return rev;
}
// Ordre d'introduction des cartes : mélange déterministe pour brasser les thèmes
// (quotidien, business, idiomes...) dès le premier jour, mais stable d'un chargement à l'autre.
function seededOrder(n, seed) {
  let s = seed >>> 0;
  const rnd = () => { s |= 0; s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const a = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const VOCAB_ORDER = seededOrder(VOCAB.length, 990);
function newAvailable(unlimited) {
  const cap = unlimited ? Infinity : Math.max(0, NEW_PER_DAY - S.newToday);
  const out = [];
  for (const i of VOCAB_ORDER) {
    if (out.length >= cap) break;
    if (!S.cards[i] || !S.cards[i].introduced) out.push(i);
  }
  return out;
}
function totalUnlearned() {
  let n = 0;
  for (const i of VOCAB_ORDER) if (!S.cards[i] || !S.cards[i].introduced) n++;
  return n;
}
/* Le plafond de séance, remis dans le bon sens le 2026-11-11.
   L'ancien code servait TOUTE la pile due d'un coup dès qu'on n'était pas
   en mode « vague » — exactement l'inverse de ce qu'il annonçait, et la
   raison pour laquelle une séance pouvait durer quarante minutes. Désormais
   aucune séance ne dépasse WAVE cartes, et on n'introduit de nouvelles
   cartes que si l'arriéré reste absorbable : une dette de cent cartes ne se
   rattrape pas en en ajoutant six. */
const WAVE = 20;
const ARRIERE_MAX = 40;
function buildQueue(unlimited) {
  const due = dueCards();
  if (unlimited) return due.concat(newAvailable(true)).slice(0, WAVE);
  const place = Math.max(0, WAVE - due.length);
  const news = due.length > ARRIERE_MAX ? [] : newAvailable(false).slice(0, place);
  return due.concat(news).slice(0, WAVE);
}
// File d'un thème précis (révisions dues + toutes les nouvelles du thème, sans plafond)
function buildThemeQueue(theme) {
  const now = Date.now();
  const due = [], news = [];
  for (let i = 0; i < VOCAB.length; i++) {
    if (VOCAB[i][3] !== theme) continue;
    const c = S.cards[i];
    if (c && c.introduced) { if (c.due <= now) due.push(i); }
    else news.push(i);
  }
  shuffle(due); shuffle(news);
  return due.concat(news);
}
// rating: 0 again, 1 hard, 2 good, 3 easy
function rateCard(i, rating) {
  const c = cardState(i);
  if (!c.introduced) { c.introduced = true; S.newToday += 1; }
  const now = Date.now();
  if (rating === 0) {                       // Again
    c.reps = 0; c.lapses += 1;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.interval = 0;
    c.due = now + 60 * 1000;                // revient dans la session (~1 min)
  } else {
    if (c.interval < 1) {                   // carte en apprentissage
      c.interval = rating === 1 ? 1 : rating === 2 ? 1 : 4;
    } else {
      const mult = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3;
      c.interval = Math.round(c.interval * mult);
    }
    if (rating === 1) c.ease = Math.max(1.3, c.ease - 0.15);
    if (rating === 3) c.ease = c.ease + 0.15;
    c.reps += 1;
    c.due = now + Math.max(1, c.interval) * DAY;
  }
  S.cards[i] = c;
  S.reviewsDone += 1;
  addXp(rating === 0 ? 1 : 3);
  save();
}
function nextDueLabel(i, rating) {          // aperçu sur les boutons
  const c = cardState(i);
  if (rating === 0) return '<1 j';
  let iv;
  if (c.interval < 1) iv = rating === 1 ? 1 : rating === 2 ? 1 : 4;
  else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; iv = Math.round(c.interval * m); }
  iv = Math.max(1, iv);
  return iv === 1 ? '1 j' : iv + ' j';
}

/* ---------- Vocabulaire appris (stat) ---------- */
function learnedCount() {
  let n = 0;
  for (const i in S.cards) if (S.cards[i].introduced) n++;
  return n;
}
function matureCount() {
  let n = 0;
  for (const i in S.cards) if (S.cards[i].interval >= 21) n++;
  return n;
}

/* ---------- Déblocage leçons ---------- */
function lessonUnlocked(idx) {
  if (idx === 0) return true;
  if (LESSONS[idx] && LESSONS[idx].always) return true;   // modules avancés (toujours accessibles)
  const prev = LESSONS[idx - 1];
  return S.lessons[prev.id] && S.lessons[prev.id].done;
}

/* ============================================================
   RENDU DES VUES
   ============================================================ */
const app = document.getElementById('app');
let view = 'home';

function setView(v) {
  view = v;
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
  render();
}
document.querySelectorAll('.nav button').forEach(b => b.addEventListener('click', () => setView(b.dataset.v)));

function refreshHeader() {
  document.getElementById('streak').textContent = S.streak;
  document.getElementById('hlevel').textContent = levelFromXp(S.xp).lv;
}

function render() {
  refreshHeader();
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('on', b.dataset.v === view));
  window.scrollTo(0, 0);
  if (view === 'home') return renderHome();
  if (view === 'parler') return renderParlerHome();
  if (view === 'cartes') return renderCartesHome();
  if (view === 'produire') return renderProduireHome();
  if (view === 'grammar') return renderGrammarList();
  if (view === 'anki') return renderAnkiHome();
  if (view === 'listen') return renderListenHome();
  if (view === 'traduire') return renderTransHome();
}

/* ============================================================
   TROPHÉES
   ============================================================ */
const ACHIEVEMENTS = [
  { id: 'parle1', ic: '🎙️', title: 'Première prise', desc: 'Parler deux minutes au Micro', test: () => typeof micDone === 'function' && micDone() >= 1 },
  { id: 'streak3', ic: '🔥', title: 'En rythme', desc: 'Série de 3 jours', test: () => S.streak >= 3 },
  { id: 'streak7', ic: '🔥', title: 'Une semaine !', desc: 'Série de 7 jours', test: () => S.streak >= 7 },
  { id: 'streak30', ic: '🔥', title: 'Machine', desc: 'Série de 30 jours', test: () => S.streak >= 30 },
  { id: 'perfect1', ic: '🌟', title: 'Journée parfaite', desc: 'Atteindre l\'objectif du jour', test: () => (S.perfectDays || 0) >= 1 },
  { id: 'perfect7', ic: '🌟', title: 'Semaine parfaite', desc: '7 objectifs du jour atteints', test: () => (S.perfectDays || 0) >= 7 },
  { id: 'voc50', ic: '📇', title: '50 mots', desc: '50 mots appris', test: () => learnedCount() >= 50 },
  { id: 'voc200', ic: '📚', title: '200 mots', desc: '200 mots appris', test: () => learnedCount() >= 200 },
  { id: 'voc500', ic: '📚', title: '500 mots', desc: '500 mots appris', test: () => learnedCount() >= 500 },
  { id: 'vocmat', ic: '🧠', title: 'Mémoire d\'acier', desc: '100 mots ancrés (≥21j)', test: () => matureCount() >= 100 },
  { id: 'trans25', ic: '✍️', title: 'Traducteur', desc: '25 phrases traduites', test: () => transSeen() >= 25 },
  { id: 'transmat', ic: '🖋️', title: 'Plume bilingue', desc: '25 traductions maîtrisées', test: () => transMastered() >= 25 },
  { id: 'gramall', ic: '📘', title: 'Grammairien', desc: 'Toutes les leçons validées', test: () => LESSONS.filter(l => !l.hard).every(l => S.lessons[l.id] && S.lessons[l.id].done) },
  { id: 'plume1', ic: '✒️', title: 'Premier jet', desc: 'Écrire un essai complet au chrono', test: () => typeof pEssays === 'function' && pEssays().filter(e => e.done).length >= 1 },
  { id: 'plume10', ic: '🖊️', title: 'Dix copies', desc: '10 essais écrits', test: () => typeof pEssays === 'function' && pEssays().filter(e => e.done).length >= 10 },
  { id: 'plumefmt', ic: '🎨', title: 'Tous les formats', desc: 'Un écrit dans chacun des 7 formats', test: () => typeof pEssays === 'function' && Object.keys(window.PLUME_FORMATS || {}).every(k => pEssays().some(e => e.fmt === k && e.done)) },
  { id: 'plumeclean', ic: '💎', title: 'Copie propre', desc: 'Un essai sans aucune faute détectée', test: () => typeof pEssays === 'function' && pEssays().some(e => e.relu && e.relu.score >= 90) },
  { id: 'scalpel', ic: '🔪', title: 'Au scalpel', desc: 'Les 10 leçons de haute précision validées', test: () => { const h = LESSONS.filter(l => l.hard); return h.length > 0 && h.every(l => S.lessons[l.id] && S.lessons[l.id].done); } },
  { id: 'listen5', ic: '🎧', title: 'Bonne oreille', desc: '5 conversations longues écoutées', test: () => (S.longDone || 0) >= 5 },
  { id: 'parle10', ic: '🗣️', title: 'Dix prises', desc: '10 prises de parole enregistrées', test: () => typeof micDone === 'function' && micDone() >= 10 },
  { id: 'parle30', ic: '🎚️', title: 'Trente prises', desc: '30 prises de parole · une heure de ta voix', test: () => typeof micDone === 'function' && micDone() >= 30 },
  { id: 'parledebit', ic: '🚀', title: 'Le débit y est', desc: '130 mots/minute de moyenne', test: () => typeof micWpmMoyen === 'function' && micWpmMoyen() >= 130 },
  { id: 'parlecorr', ic: '✂️', title: 'Parole corrigée', desc: '5 prises de parole relues et corrigées', test: () => typeof micCorrigees === 'function' && micCorrigees() >= 5 },
  { id: 'entretien', ic: '💼', title: "L'entretien en anglais", desc: 'Répondre à 8 questions de stage en anglais', test: () => typeof micSessions === 'function' && micSessions().filter(x => x.mode === 'entretien').length >= 8 },
  { id: 'trn100', ic: '🗂️', title: 'Cent tournures', desc: '100 tournures de production vues', test: () => typeof trnSeen === 'function' && trnSeen() >= 100 },
  { id: 'trnmat', ic: '💠', title: 'Elles sortent seules', desc: '100 tournures ancrées (≥21j)', test: () => typeof trnMastered === 'function' && trnMastered() >= 100 },
  { id: 'input4', ic: '🎧', title: 'Oreille au réel', desc: "4 semaines d'écoute d'anglais réel", test: () => (S.inputSemaines || 0) >= 4 },
  { id: 'xp1000', ic: '⭐', title: 'Mille XP', desc: '1000 XP cumulés', test: () => S.xp >= 1000 },
  { id: 'moisson10', ic: '🌾', title: 'Chineur', desc: '10 tournures attrapées dans la nature', test: () => (S.mine || []).length >= 10 },
  { id: 'moisson25', ic: '🧺', title: 'Belle moisson', desc: '25 tournures à toi', test: () => (S.mine || []).length >= 25 },
  { id: 'moissonmat', ic: '🪶', title: 'Elles sont tiennes', desc: '15 tournures perso ancrées (≥21j)', test: () => typeof mineMastered === 'function' && mineMastered() >= 15 },
  { id: 'lime30', ic: '🔧', title: 'Premier limage', desc: '30 exercices de production travaillés', test: () => !!(S.lime && (S.lime.done || 0) >= 30) },
  { id: 'limeperso', ic: '🩹', title: 'Tes fautes à toi', desc: '15 exos nés de tes propres corrections', test: () => typeof limePersoCount === 'function' && limePersoCount() >= 15 },
  { id: 'limemat', ic: '💠', title: 'Ça ne se voit plus', desc: '40 tournures ancrées dans La Lime', test: () => typeof limeMastered === 'function' && limeMastered() >= 40 },
  { id: 'diaear', ic: '👂', title: 'L\'oreille se règle', desc: '100 paires minimales entendues juste', test: () => typeof dGet === 'function' && dGet('pairOk') >= 100 },
  { id: 'diastress', ic: '🎼', title: 'Accent tonique', desc: '100 accents de mot trouvés à l\'oreille', test: () => typeof dGet === 'function' && dGet('stressOk') >= 100 },
  { id: 'diavoice', ic: '🎙️', title: 'Ta propre voix', desc: '30 productions enregistrées et réécoutées', test: () => typeof dGet === 'function' && dGet('spoken') >= 30 },
  { id: 'dialines', ic: '🗣️', title: 'Phrases natives', desc: '25 phrases bilingues ancrées (≥21j)', test: () => { if (typeof dia !== 'function') return false; const s = dia().srs; return Object.keys(s).filter(k => k.indexOf('l:') === 0 && s[k].interval >= 21).length >= 25; } }
];
function earnedIds() { const s = []; ACHIEVEMENTS.forEach(a => { try { if (a.test()) s.push(a.id); } catch (e) {} }); return s; }
function checkAchievements() {
  const earned = earnedIds();
  const fresh = earned.filter(id => !(S.badges || []).includes(id));
  if (fresh.length) {
    S.badges = Array.from(new Set([...(S.badges || []), ...earned]));
    save();
    const a = ACHIEVEMENTS.find(x => x.id === fresh[0]);
    toast(`🏆 Trophée : ${a.title}${fresh.length > 1 ? ` (+${fresh.length - 1})` : ''}`);
  }
}
function renderAchievements() {
  const earned = new Set(S.badges || []);
  const cards = ACHIEVEMENTS.map(a => {
    const got = earned.has(a.id);
    return `<div class="trophy ${got ? 'got' : ''}">
      <div class="tic">${got ? a.ic : '🔒'}</div>
      <div class="tt2">${a.title}</div>
      <div class="td">${a.desc}</div>
    </div>`;
  }).join('');
  app.innerHTML = `
    <div class="card">
      <h2>Trophées</h2>
      <div class="sub">${earned.size} / ${ACHIEVEMENTS.length} débloqués. Chaque palier récompense un vrai progrès vers le bilinguisme.</div>
    </div>
    <div class="trophygrid">${cards}</div>
    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* Anneau de progression (objectif du jour) */
function ringSvg(pct) {
  const r = 30, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return `<svg width="76" height="76" viewBox="0 0 76 76" style="flex:0 0 auto">
    <circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--bg2)" stroke-width="7"/>
    <circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--accent)" stroke-width="7" stroke-linecap="round"
      stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" transform="rotate(-90 38 38)"/>
    <text x="38" y="43" text-anchor="middle" fill="var(--txt)" font-size="18" font-weight="800">${pct}%</text>
  </svg>`;
}

/* Coach : recommandation du moment + point faible */
/* ============================================================
   LE COACH — une seule chose à faire, dans l'ordre qui compte
   La parole d'abord : c'est le seul exercice qui ne se rattrape pas
   en lisant. Les cartes ferment la journée, elles ne l'ouvrent pas.
   ============================================================ */
function coachAdvice() {
  const dp = dailyProgress();
  if (!dp.s) return { title: 'La séance du jour', msg: "Douze minutes : l'oreille se règle d'abord (accent, paires minimales, rythme), puis la bouche produit. C'est l'ordre qui marche — on ne prononce pas un contraste qu'on n'entend pas.", btn: '▶ Lancer la séance', action: 'dSeanceStart()' };
  if (dp.p < 1) {
    const s2 = parleSecs();
    return { title: s2 ? 'Encore un peu de parole' : 'Parler deux minutes', msg: s2
      ? `${Math.round(s2)} secondes enregistrées aujourd'hui. Il en faut cent pour valider : reprends le sujet, ou enchaîne sur une question d'entretien.`
      : "Un sujet imposé, une minute de notes, deux minutes de parole enregistrée. Personne pour te relancer : c'est exactement là que la fluidité se construit, et c'est le seul exercice que l'app ne pouvait pas te faire faire jusqu'à aujourd'hui.", btn: '🎙️ Au micro', action: "micStart('mono')" };
  }
  if (dp.c < 1) {
    const n = cartesDuesTotal();
    return { title: 'Les dix cartes', msg: n ? `${n} carte(s) t'attendent, tous paquets confondus. Dix suffisent à fermer la journée.` : "Rien n'est dû : tu peux prendre dix nouvelles tournures, ou t'arrêter là.", btn: '🗂️ Les cartes du jour', action: 'cartesDuJour()' };
  }
  if (!inputFait()) return { title: "De l'anglais réel dans l'oreille", msg: "Tout l'audio de l'app est de la synthèse vocale : des voix qui articulent trop proprement. Une fois par semaine, quinze minutes de vrai anglais — un podcast, un épisode en VO sans sous-titres français — et trois tournures rapportées dans La Moisson.", btn: '🎧 Le rendez-vous de la semaine', action: 'renderInput()' };
  if (typeof minePendingCount === 'function' && minePendingCount() >= 3)
    return { title: 'Tes tournures attendent', msg: `${minePendingCount()} tournure(s) que tu as attrapée(s) dorment sans explication. Exporte-les et fais-les expliquer : c'est le vocabulaire que tu as choisi toi-même, celui qui reste.`, btn: 'Exporter ma moisson', action: 'renderMineExport(false)' };
  if (typeof micSessions === 'function') {
    const nc = micSessions().filter(x => x.note == null && (x.texte || '').length > 80);
    if (nc.length) return { title: 'Une prise de parole attend sa correction', msg: "Tu l'as enregistrée, l'app a compté ton débit — mais ce qui te trahit à l'oral, il faut quelqu'un pour le nommer. Les corrections redescendent toutes seules dans La Lime.", btn: '📤 Faire corriger', action: `renderMicroExport(${nc[nc.length - 1].id})` };
  }
  if (typeof limePersoNew === 'function' && limePersoNew() >= 1)
    return { title: "Tes propres fautes t'attendent", msg: `${limePersoNew()} exercice(s) sont nés de tes dernières corrections. Ce ne sont pas des règles générales : ce sont les tournures que TU as ratées, à reproduire correctement jusqu'à ce qu'elles sortent seules.`, btn: 'Les limer', action: "startLime('perso')" };
  if (mistakeCount() >= 3) return { title: 'Corrige tes erreurs', msg: `Tu as ${mistakeCount()} question(s) déjà ratée(s) en attente. Les rejouer jusqu'à les maîtriser, c'est le plus direct vers le sans-faute.`, btn: 'Revoir mes erreurs', action: 'startMistakes()' };
  return { title: 'Journée bouclée 🏆', msg: "Parlé, écouté, révisé. Si tu veux pousser : une question d'entretien en anglais, ou un essai à La Plume — mais la journée est faite.", btn: "💼 Une question d'entretien", action: "micStart('entretien')" };
}

/* Toutes les cartes dues, tous paquets confondus. */
function cartesDuesTotal() {
  let n = dueCards().length;
  if (typeof trnCounts === 'function') n += trnCounts('all').due;
  if (typeof verbDueCount === 'function') n += verbDueCount();
  if (typeof mineDue === 'function') n += mineDue().length;
  return n;
}
/* Un seul geste : on ouvre le paquet le plus en retard. */
function cartesDuJour() {
  const opts = [];
  opts.push({ due: dueCards().length, go: () => startReview(false) });
  if (typeof trnCounts === 'function') opts.push({ due: trnCounts('all').due, go: () => { S.tournDeck = 'all'; save(); startTourn(); } });
  if (typeof verbDueCount === 'function') opts.push({ due: verbDueCount(), go: () => { if (typeof setVerbCat === 'function') verbCat = 'Tous'; startVerbs(); } });
  if (typeof mineDue === 'function') opts.push({ due: mineDue().length, go: () => startMine() });
  opts.sort((a, b) => b.due - a.due);
  if (opts[0] && opts[0].due > 0) return opts[0].go();
  if (buildQueue(false).length) return startReview(false);
  if (typeof buildTrnQueue === 'function' && buildTrnQueue('all').length) { S.tournDeck = 'all'; save(); return startTourn(); }
  setView('cartes');
}

/* ---------- ACCUEIL ---------- */
function renderHome() {
  const L = levelFromXp(S.xp);
  const pct = Math.round(L.into / L.need * 100);
  const dp = dailyProgress();
  const dim = new Date().getDay() === 0;
  const goalLine = (ok, txt, sub, action) =>
    `<div class="goal ${ok ? 'ok' : ''}" ${action ? `onclick="${action}" style="cursor:pointer"` : ''}><span class="gk">${ok ? '✅' : '⬜️'}</span><span class="gt">${txt}</span><span class="gs">${sub}</span></div>`;
  const sec = Math.round(parleSecs());
  const objectiveCard = `
    <div class="card" style="display:flex;gap:16px;align-items:center">
      ${ringSvg(dp.pct)}
      <div style="flex:1;min-width:0">
        <h2 style="font-size:16px;margin-bottom:6px">Objectif du jour ${dp.done ? '🏆' : ''}</h2>
        ${goalLine(dp.s >= 1, 'La séance · oreille, bouche', dp.s ? 'fait' : '12 min', 'dSeanceStart()')}
        ${goalLine(dp.p >= 1, 'Parler deux minutes', `${Math.min(sec, GOAL_PARLER)}/${GOAL_PARLER} s`, "micStart('mono')")}
        ${goalLine(dp.c >= 1, 'Dix cartes', `${Math.min(S.daily.cards, GOAL_CARDS)}/${GOAL_CARDS}`, 'cartesDuJour()')}
      </div>
    </div>`;

  const co = coachAdvice();
  const coachCard = `
    <div class="card coach">
      <div class="coach-h">🧭 Le coach</div>
      <div class="coach-t">${co.title}</div>
      <div class="sub mt">${co.msg}</div>
      <button class="btn mt" onclick="${co.action}">${co.btn}</button>
    </div>`;

  const inputCard = inputFait() ? '' : `
    <div class="banner" ${dim ? '' : 'style="opacity:.92"'}>
      <div class="t">🎧 ${dim ? 'Dimanche : de l\'anglais réel' : 'Cette semaine : de l\'anglais réel'}</div>
      <div class="d">Quinze minutes d'écoute libre, sans exercice : un podcast, un épisode en VO sans sous-titres français. Puis trois tournures attrapées, versées dans La Moisson. C'est le seul endroit où l'app ne parle pas avec une voix de synthèse.</div>
      <button class="btn" onclick="renderInput()">Voir les sources et cocher</button>
    </div>`;

  const nBadges = (S.badges || []).length;
  app.innerHTML = `
    ${objectiveCard}
    ${coachCard}
    ${dim || dp.done ? inputCard : ''}

    <button class="btn" onclick="dSeanceStart()">▶ La séance du jour · ~12 min</button>
    <div class="sub center mb" style="margin-top:6px">oreille → paires → rythme → bouche → phrases</div>
    <button class="btn sec" onclick="micStart('mono')">🎙️ Parler deux minutes${dp.p >= 1 ? ' ✓' : ''}</button>
    <button class="btn sec mt" onclick="cartesDuJour()">🗂️ Les cartes du jour${cartesDuesTotal() ? ` · ${cartesDuesTotal()} due(s)` : ''}</button>

    ${mistakeCount() > 0 ? `
    <button class="tile mt" onclick="startMistakes()" style="border-color:var(--bad)">
      <div class="ic" style="background:linear-gradient(135deg,#ff5c6c33,#ff5c6c11);color:var(--bad)">🎯</div>
      <div class="body"><div class="t">Revoir mes erreurs</div><div class="d">Rejoue les questions ratées jusqu'à les maîtriser</div></div>
      <div class="badge" style="background:var(--bad);color:#2a0509">${mistakeCount()}</div>
    </button>` : ''}

    <div class="xpwrap mt" onclick="renderAchievements()" style="cursor:pointer">
      <div class="lv"><b>Niveau ${L.lv}</b><span>${L.into} / ${L.need} XP</span></div>
      <div class="pbar mt"><i style="width:${pct}%"></i></div>
      <div class="sub mt" style="display:flex;justify-content:space-between">
        <span>🔥 Série : <b style="color:var(--txt)">${S.streak} j</b></span>
        <span>🏆 <b style="color:var(--txt)">${nBadges}/${ACHIEVEMENTS.length}</b> trophées ›</span>
      </div>
    </div>

    <details class="whyx mb">
      <summary>Tout le reste, quand tu veux</summary>
      <div style="padding:4px 0 0">
        <div class="sub mb" style="font-size:12px">Rien ici n'est obligatoire. La journée est faite avec les trois lignes du haut ; ce qui suit est du rab, à prendre les jours où tu en as envie.</div>
        <button class="tile" onclick="setView('parler')">
          <div class="ic a">🎙️</div><div class="body"><div class="t">Parler</div><div class="d">Le Diapason (accent, rythme) et Le Micro</div></div><div class="badge zero">›</div></button>
        <button class="tile" onclick="setView('cartes')">
          <div class="ic g">🗂️</div><div class="body"><div class="t">Les cartes</div><div class="d">Vocabulaire, tournures, verbes, ta moisson</div></div><div class="badge ${cartesDuesTotal() ? '' : 'zero'}">${cartesDuesTotal() || '✓'}</div></button>
        <button class="tile" onclick="setView('produire')">
          <div class="ic l">🔧</div><div class="body"><div class="t">Produire</div><div class="d">La Lime, traduire, écrire, monter le registre</div></div><div class="badge ${typeof limeQueueCount === 'function' && limeQueueCount('all') ? '' : 'zero'}">${typeof limeQueueCount === 'function' ? (limeQueueCount('all') || '✓') : '›'}</div></button>
        <button class="tile" onclick="setView('listen')">
          <div class="ic l">🎧</div><div class="body"><div class="t">Écouter & lire</div><div class="d">Conversations, exposés, lecture bilingue du jour</div></div><div class="badge zero">›</div></button>
        <button class="tile" onclick="setView('grammar')">
          <div class="ic g">📘</div><div class="body"><div class="t">Grammaire</div><div class="d">${LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length} / ${LESSONS.length} leçons · drills 0 faute, prépositions</div></div><div class="badge zero">›</div></button>
        <button class="btn ghost mt" onclick="renderInput()">🎧 L'écoute réelle de la semaine ${inputFait() ? '✓' : ''}</button>
        <button class="btn ghost" onclick="transferLink()">📦 Transférer ma progression</button>
      </div>
    </details>

    <div class="card">
      <h2>Ta progression</h2>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:26px">${typeof micDone === 'function' ? micDone() : 0}</div><div class="sub">prises de parole</div></div>
        <div><div class="logo" style="font-size:26px">${typeof micDaysSpoken === 'function' ? micDaysSpoken() : 0}</div><div class="sub">jours parlés</div></div>
      </div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:26px">${learnedCount()}</div><div class="sub">mots vus</div></div>
        <div><div class="logo" style="font-size:26px">${matureCount()}</div><div class="sub">mots ancrés (≥21j)</div></div>
      </div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:26px">${typeof trnSeen === 'function' ? trnSeen() : 0}</div><div class="sub">tournures vues</div></div>
        <div><div class="logo" style="font-size:26px">${S.perfectDays || 0}</div><div class="sub">journées pleines</div></div>
      </div>
    </div>
  `;
}

/* ============================================================
   PARLER — le pôle qui n'existait pas
   LE DIAPASON était écrit, chargé à chaque ouverture… et appelé
   par aucun bouton : renderDiapasonHome() n'avait aucun point
   d'entrée hors de son propre fichier. 175 Ko d'ateliers d'accent
   inaccessibles, et quatre trophées impossibles à décrocher.
   ============================================================ */
function renderParlerHome() {
  const dp = dailyProgress();
  const sec = Math.round(parleSecs());
  app.innerHTML = `
    <div class="card">
      <h2>🎙️ Parler</h2>
      <div class="sub">Deux outils, dans cet ordre. <b style="color:var(--txt)">Le Diapason</b> règle l'oreille puis la bouche : accent de mot, paires minimales, rythme, mots-pièges. <b style="color:var(--txt)">Le Micro</b> te fait parler pour de vrai, au chrono, et t'enregistre. Le premier te donne les moyens, le second te met en situation.</div>
      <div class="goal ${dp.s ? 'ok' : ''} mt"><span class="gk">${dp.s ? '✅' : '⬜️'}</span><span class="gt">La séance du jour</span><span class="gs">${dp.s ? 'fait' : '12 min'}</span></div>
      <div class="goal ${dp.p >= 1 ? 'ok' : ''}"><span class="gk">${dp.p >= 1 ? '✅' : '⬜️'}</span><span class="gt">Parler deux minutes</span><span class="gs">${Math.min(sec, GOAL_PARLER)}/${GOAL_PARLER} s</span></div>
    </div>

    <button class="btn" onclick="dSeanceStart()">▶ La séance du jour · ~12 min</button>
    <div class="sub center mb" style="margin-top:6px">oreille → paires → rythme → bouche → phrases</div>

    <button class="tile" onclick="renderMicroHome()">
      <div class="ic a">🎙️</div>
      <div class="body"><div class="t">Le Micro</div><div class="d">${typeof micTuileTexte === 'function' ? micTuileTexte() : 'Parler deux minutes, enregistré'}</div></div>
      <div class="badge ${dp.p >= 1 ? 'zero' : ''}">${dp.p >= 1 ? '✓' : '!'}</div>
    </button>

    <button class="tile" onclick="micStart('entretien')">
      <div class="ic" style="background:linear-gradient(135deg,#4d8dff33,#4d8dff11);color:var(--blue)">💼</div>
      <div class="body"><div class="t">L'entretien, en anglais</div><div class="d">${(window.MICRO && MICRO.entretien.length) || 0} questions de stage · « Walk me through a DCF »</div></div>
      <div class="badge">EN</div>
    </button>

    <button class="tile" onclick="renderDiapasonHome()">
      <div class="ic l">👂</div>
      <div class="body"><div class="t">Les ateliers du Diapason</div><div class="d">Accent, paires minimales, intonation, parole enchaînée, dictée multi-accents</div></div>
      <div class="badge zero">11</div>
    </button>

    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
}

/* ============================================================
   LES CARTES — quatre paquets, un seul compte du jour
   ============================================================ */
function renderCartesHome() {
  const t = typeof trnCounts === 'function' ? trnCounts('all') : { due: 0, total: 0 };
  const dp = dailyProgress();
  app.innerHTML = `
    <div class="card">
      <h2>🗂️ Les cartes</h2>
      <div class="sub">Quatre paquets, chacun avec sa propre mémoire espacée. Le compte du jour les additionne : <b style="color:var(--txt)">dix cartes suffisent</b>, d'où qu'elles viennent. Le plafond est volontaire — c'est en montant les quotas qu'on se retrouve avec deux cents cartes par jour et plus envie d'ouvrir l'app.</div>
      <div class="goal ${dp.c >= 1 ? 'ok' : ''} mt"><span class="gk">${dp.c >= 1 ? '✅' : '⬜️'}</span><span class="gt">Cartes du jour</span><span class="gs">${Math.min(S.daily.cards, GOAL_CARDS)}/${GOAL_CARDS}</span></div>
    </div>

    <button class="btn" onclick="cartesDuJour()">${cartesDuesTotal() ? `Commencer · le paquet le plus en retard` : 'Prendre quelques cartes'}</button>

    <button class="tile mt" onclick="renderTournHome()">
      <div class="ic a">🗂️</div>
      <div class="body"><div class="t">Les tournures</div><div class="d">${typeof trnTuileTexte === 'function' ? trnTuileTexte() : ''}</div></div>
      <div class="badge ${t.due ? '' : 'zero'}">${t.due || '✓'}</div>
    </button>

    <button class="tile" onclick="setView('anki')">
      <div class="ic g">🃏</div>
      <div class="body"><div class="t">Vocabulaire</div><div class="d">${dueCards().length} à réviser · ${learnedCount()} / ${VOCAB.length} mots vus</div></div>
      <div class="badge ${dueCards().length ? '' : 'zero'}">${dueCards().length || '✓'}</div>
    </button>

    <button class="tile" onclick="renderVerbsHome()">
      <div class="ic" style="background:linear-gradient(135deg,#ff5c6c33,#ffb02011);color:var(--bad)">⚡</div>
      <div class="body"><div class="t">Verbes irréguliers</div><div class="d">Prétérit + participe · l'oral ne pardonne pas</div></div>
      <div class="badge ${typeof verbDueCount === 'function' && verbDueCount() ? '' : 'zero'}">${typeof verbDueCount === 'function' ? (verbDueCount() || '✓') : '›'}</div>
    </button>

    <button class="tile" onclick="renderMoissonHome()">
      <div class="ic e">🌾</div>
      <div class="body"><div class="t">La Moisson</div><div class="d">${typeof mine === 'function' ? (mine().length === 0 ? 'Ton deck à toi : les tournures que tu attrapes' : `${mine().length} tournure(s)${typeof minePendingCount === 'function' && minePendingCount() ? ` · ${minePendingCount()} à faire expliquer` : ''}`) : ''}</div></div>
      <div class="badge ${typeof mineQueueCount === 'function' && mineQueueCount() ? '' : 'zero'}">${typeof minePendingCount === 'function' && minePendingCount() ? minePendingCount() : (typeof mineQueueCount === 'function' ? (mineQueueCount() || '✓') : '＋')}</div>
    </button>

    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
}

/* ============================================================
   PRODUIRE — écrire et traduire, sans commander la journée
   ============================================================ */
function renderProduireHome() {
  app.innerHTML = `
    <div class="card">
      <h2>🔧 Produire</h2>
      <div class="sub">Depuis le 2026-11-11, la production principale est <b style="color:var(--txt)">orale</b> : c'est Le Micro qui remplace l'essai quotidien. Ce qui est ici reste ouvert, sans rythme imposé — un essai le dimanche vaut mieux qu'un essai tous les deux jours abandonné au bout d'une semaine.</div>
    </div>

    <button class="tile" onclick="renderLimeHome()"${typeof limePersoNew === 'function' && limePersoNew() ? ' style="border-color:#ff7ab6"' : ''}>
      <div class="ic" style="background:linear-gradient(135deg,#9d7bff33,#4d8dff11);color:var(--purple)">🔧</div>
      <div class="body"><div class="t">La Lime</div><div class="d">${typeof limeTuileTexte === 'function' ? limeTuileTexte() : 'Exercices de production'}</div></div>
      <div class="badge ${typeof limeQueueCount === 'function' && limeQueueCount('all') ? '' : 'zero'}">${typeof limeQueueCount === 'function' ? (limeQueueCount('all') || '✓') : '›'}</div>
    </button>

    <button class="tile" onclick="setView('traduire')">
      <div class="ic e">✍️</div>
      <div class="body"><div class="t">Traduire (FR ⇄ EN)</div><div class="d">Phrases + correction idiomatique & grammaire</div></div>
      <div class="badge zero">${TRANSLATIONS.length}</div>
    </button>

    <button class="tile" onclick="renderPlumeHome()">
      <div class="ic" style="background:linear-gradient(135deg,#ff7ab633,#9d7bff11);color:#ff7ab6">✒️</div>
      <div class="body"><div class="t">La Plume</div><div class="d">${typeof plumeTuileTexte === 'function' ? plumeTuileTexte() : "Expression écrite au chrono"}</div></div>
      <div class="badge zero">›</div>
    </button>

    <button class="tile" onclick="renderRegisterHome()">
      <div class="ic a">✨</div>
      <div class="body"><div class="t">Anglais soutenu</div><div class="d">Élever le registre : du neutre vers l'élégant</div></div>
      <div class="badge zero">${REGISTER.length}</div>
    </button>

    <button class="tile" onclick="renderLitHome()">
      <div class="ic l">✒️</div>
      <div class="body"><div class="t">L'anglais de Jane Eyre</div><div class="d">Le style littéraire : inversions, mots choisis, Brontë</div></div>
      <div class="badge zero">›</div>
    </button>

    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
}

/* ============================================================
   L'ÉCOUTE RÉELLE — le rendez-vous hebdomadaire
   Pas un exercice : une permission. Quinze minutes d'anglais que
   personne n'a écrit pour un apprenant.
   ============================================================ */
const INPUT_SOURCES = [
  ['BBC · 6 Minute English', "Six minutes, deux voix, une transcription. Le plus court chemin pour reprendre l'oreille un jour de flemme.", 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'],
  ['FT News Briefing', "Dix minutes de marchés chaque matin, débit de pro. C'est exactement l'anglais de tes entretiens de stage.", 'https://www.ft.com/news-briefing'],
  ['The Economist · podcasts', "Money Talks, The Intelligence : de l'analyse économique à vitesse native, accents britanniques variés.", 'https://www.economist.com/podcasts'],
  ['Odd Lots (Bloomberg)', "Deux journalistes et un invité qui parlent finance sans script. L'anglais spontané, hésitations comprises.", 'https://www.bloomberg.com/oddlots'],
  ['Darknet Diaries', "Des histoires vraies racontées lentement et clairement. Idéal quand tu veux écouter sans effort de concentration.", 'https://darknetdiaries.com/'],
  ['Une série en VO', "Sans sous-titres français — anglais ou rien. Un épisode compte. Succession pour l'anglais des affaires, Peaky Blinders pour l'accent du nord.", '']
];
function renderInput() {
  const fait = inputFait();
  app.innerHTML = `
    <div class="card">
      <h2>🎧 L'anglais réel de la semaine</h2>
      <div class="sub">Tout le reste de l'app parle avec une voix de synthèse : utile pour isoler un son, inutile pour s'habituer aux gens. À ton niveau, c'est le plafond qui compte. Quinze minutes par semaine d'anglais que personne n'a écrit pour un apprenant, et <b style="color:var(--txt)">trois tournures rapportées</b> — c'est tout ce qui est demandé.</div>
      <div class="goal ${fait ? 'ok' : ''} mt"><span class="gk">${fait ? '✅' : '⬜️'}</span><span class="gt">Semaine du ${new Date(semaineISO()).toLocaleDateString('fr-FR')}</span><span class="gs">${fait ? 'fait' : '15 min'}</span></div>
    </div>

    ${INPUT_SOURCES.map(([n, d, u]) => `
      <div class="card" style="padding:14px">
        <div style="font-weight:800;font-size:15px">${n}</div>
        <div class="sub" style="margin-top:4px">${d}</div>
        ${u ? `<a class="btn sec mt" style="display:block;text-decoration:none" href="${u}" target="_blank" rel="noopener">Ouvrir</a>` : ''}
      </div>`).join('')}

    <div class="card" style="border-color:var(--accent)">
      <h2 style="font-size:15px">La règle des trois tournures</h2>
      <div class="sub">Pendant l'écoute, note trois expressions que tu n'aurais pas produites toi-même. Pas des mots inconnus : des tournures que tu comprends et que tu n'emploies jamais. Elles vont dans La Moisson, et c'est La Moisson qui finit par changer ta façon de parler.</div>
      <button class="btn mt sec" onclick="renderMineEdit(0)">🌾 Attraper une tournure</button>
    </div>

    ${fait
      ? `<div class="expl ok">C'est coché pour cette semaine. Rien ne t'empêche d'en écouter plus — mais tu as fait ce qui était demandé.</div>`
      : `<button class="btn" onclick="marquerInput()">✓ J'ai écouté quinze minutes</button>`}
    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ---------- GRAMMAIRE : liste ---------- */
/* ---------- DRILL « 0 FAUTES » AU RÉFLEXE (a/an, indénombrables, pièges) ---------- */
let ERD=null;
const ERD_LABEL={all:'0 fautes · mix', 'a/an':'A / An', 'indénombrables':'Indénombrables', 'pièges':'Pièges de calque'};
function errPool(cat){
  const all=(typeof ERR_DRILL!=='undefined')?ERR_DRILL:[];
  const src=cat==='all'?all:all.filter(it=>it[4]===cat);
  return src.map(it=>({stem:it[0],opts:[it[1],it[2]],correct:0,expl:it[3],cat:it[4]}));
}
function startErr(cat){
  const pool=errPool(cat);
  if(!pool.length){ toast('Rien ici 🙂'); return; }
  ERD={cat,pool,bag:[],n:0,ok:0,streak:0,best:0,answered:false,live:true};
  renderErr();
}
function renderErr(){
  window.scrollTo(0,0);
  if(!ERD.bag.length) ERD.bag=shuffle(ERD.pool.slice());
  const it=ERD.cur=ERD.bag.pop(); ERD.answered=false;
  let opts=it.opts, correct=it.correct;
  if(Math.random()<0.5){ opts=[it.opts[1],it.opts[0]]; correct=1; }
  ERD.dispOpts=opts; ERD.dispCorrect=correct;
  const stemHtml=it.stem.replace('______','<span class="blank">______</span>');
  const acc=ERD.n?Math.round(100*ERD.ok/ERD.n):0;
  app.innerHTML=`
    <div class="qmeta"><span>${ERD_LABEL[ERD.cat]} · réflexe</span><span>🔥 ${ERD.streak}${ERD.best>ERD.streak?' · rec '+ERD.best:''}</span></div>
    <div class="pbar mb"><i style="width:${acc}%"></i></div>
    <div class="sub" style="margin-bottom:10px">${ERD.n?acc+'% · '+ERD.n+' faites — vite, au feeling':'Choisis vite : c\'est le réflexe qu\'on installe, pas la réflexion.'}</div>
    <div class="stem">${stemHtml}</div>
    <div class="row2" id="erdopts">
      ${opts.map((o,k)=>`<button class="opt" style="text-align:center;font-size:19px;font-weight:800;padding:16px" onclick="errAnswer(${k})">${o}</button>`).join('')}
    </div>
    <div id="erdafter"></div>
    <button class="btn ghost mt" onclick="finishErr()">■ Stop &amp; bilan</button>
  `;
}
function errAnswer(k){
  if(!ERD||ERD.answered) return; ERD.answered=true;
  const it=ERD.cur, correct=ERD.dispCorrect, ok=(k===correct);
  document.querySelectorAll('#erdopts .opt').forEach((b,idx)=>{ b.setAttribute('disabled',''); if(idx===correct)b.classList.add('good'); else if(idx===k)b.classList.add('bad'); else b.classList.add('dim'); });
  ERD.n++;
  if(ok){ ERD.ok++; ERD.streak++; if(ERD.streak>ERD.best)ERD.best=ERD.streak; }
  else { ERD.streak=0; recordMistake({kind:'gram',q:it.stem,opts:it.opts,correct:it.correct,expl:it.expl,cat:'0 fautes · '+it.cat}); }
  document.getElementById('erdafter').innerHTML=`<div class="expl ${ok?'ok':'no'}" style="margin-top:10px">${ok?'✓ ':'✗ '+ERD.dispOpts[correct]+'. '}${it.expl}</div>`;
  setTimeout(()=>{ if(ERD&&ERD.live&&ERD.answered) renderErr(); }, ok?600:1900);
}
function finishErr(){
  if(!ERD) return; ERD.live=false;
  const acc=ERD.n?Math.round(100*ERD.ok/ERD.n):0, xp=Math.min(80,ERD.ok*2);
  markStudy(); if(xp) addXp(xp); save(); if(typeof checkAchievements==='function') checkAchievements();
  const msg=ERD.n>=25?'Ça, c\'est du volume — c\'est là que les fautes disparaissent.':ERD.n>=10?'Bien. La répétition rend le bon choix automatique : reviens-y.':'Court — enchaîne beaucoup, souvent : c\'est comme ça qu\'on vise le 0 faute.';
  app.innerHTML=`
    <div class="card big"><div class="em">${acc>=85?'🎉':acc>=60?'💪':'📚'}</div>
      <div class="score" style="color:${acc>=70?'var(--good)':'var(--accent)'}">${acc}%</div>
      <div class="lab">${ERD.ok}/${ERD.n} · meilleure série ${ERD.best}</div>
      <div class="mt sub">${msg} +${xp} XP</div></div>
    <button class="btn" onclick="startErr('${ERD.cat}')">↻ Encore</button>
    <button class="btn ghost mt" onclick="setView('grammar')">← Grammaire</button>`;
}
/* ---------- DRILL PRÉPOSITIONS AU RÉFLEXE (N options : in/on/at, +prép, phrasal) ---------- */
let PRP=null;
const PRP_LABEL={all:'Prépositions · mix', temps:'Temps (in/on/at)', lieu:'Lieu (in/on/at)', verbes:'Verbes + prép.', phrasal:'Phrasal verbs'};
function prepPool(cat){
  const all=(typeof PREP_DRILL!=='undefined')?PREP_DRILL:[];
  const src=cat==='all'?all:all.filter(it=>it[4]===cat);
  return src.map(it=>({stem:it[0],opts:it[1],correct:it[2],expl:it[3],cat:it[4]}));
}
function startPrep(cat){
  const pool=prepPool(cat);
  if(!pool.length){ toast('Rien ici 🙂'); return; }
  PRP={cat,pool,bag:[],n:0,ok:0,streak:0,best:0,answered:false,live:true};
  renderPrep();
}
function renderPrep(){
  window.scrollTo(0,0);
  if(!PRP.bag.length) PRP.bag=shuffle(PRP.pool.slice());
  const it=PRP.cur=PRP.bag.pop(); PRP.answered=false;
  const order=shuffle(it.opts.map((o,i)=>i));
  PRP.dispOpts=order.map(i=>it.opts[i]);
  PRP.dispCorrect=order.indexOf(it.correct);
  const stemHtml=it.stem.replace('______','<span class="blank">______</span>');
  const acc=PRP.n?Math.round(100*PRP.ok/PRP.n):0;
  app.innerHTML=`
    <div class="qmeta"><span>${PRP_LABEL[PRP.cat]} · réflexe</span><span>🔥 ${PRP.streak}${PRP.best>PRP.streak?' · rec '+PRP.best:''}</span></div>
    <div class="pbar mb"><i style="width:${acc}%"></i></div>
    <div class="sub" style="margin-bottom:10px">${PRP.n?acc+'% · '+PRP.n+' faites — vite, au feeling':'Choisis vite : c\'est le réflexe qu\'on installe.'}</div>
    <div class="stem">${stemHtml}</div>
    <div id="prpopts" style="display:flex;gap:10px;flex-wrap:wrap">
      ${PRP.dispOpts.map((o,k)=>`<button class="opt" style="flex:1 1 30%;min-width:88px;text-align:center;font-size:19px;font-weight:800;padding:16px;margin-bottom:0" onclick="prepAnswer(${k})">${o}</button>`).join('')}
    </div>
    <div id="prpafter"></div>
    <button class="btn ghost mt" onclick="finishPrep()">■ Stop &amp; bilan</button>
  `;
}
function prepAnswer(k){
  if(!PRP||PRP.answered) return; PRP.answered=true;
  const it=PRP.cur, correct=PRP.dispCorrect, ok=(k===correct);
  document.querySelectorAll('#prpopts .opt').forEach((b,idx)=>{ b.setAttribute('disabled',''); if(idx===correct)b.classList.add('good'); else if(idx===k)b.classList.add('bad'); else b.classList.add('dim'); });
  PRP.n++;
  if(ok){ PRP.ok++; PRP.streak++; if(PRP.streak>PRP.best)PRP.best=PRP.streak; }
  else { PRP.streak=0; recordMistake({kind:'gram',q:it.stem,opts:it.opts,correct:it.correct,expl:it.expl,cat:'Prépositions · '+it.cat}); }
  document.getElementById('prpafter').innerHTML=`<div class="expl ${ok?'ok':'no'}" style="margin-top:10px">${ok?'✓ ':'✗ '+PRP.dispOpts[correct]+'. '}${it.expl}</div>`;
  setTimeout(()=>{ if(PRP&&PRP.live&&PRP.answered) renderPrep(); }, ok?600:1900);
}
function finishPrep(){
  if(!PRP) return; PRP.live=false;
  const acc=PRP.n?Math.round(100*PRP.ok/PRP.n):0, xp=Math.min(80,PRP.ok*2);
  markStudy(); if(xp) addXp(xp); save(); if(typeof checkAchievements==='function') checkAchievements();
  const msg=PRP.n>=25?'Les prépositions rentrent par l\'usage — et tu viens d\'en enchaîner un paquet.':PRP.n>=10?'Bien. Reviens-y : c\'est la répétition qui grave la bonne préposition.':'Court — enchaîne beaucoup, souvent : la préposition juste vient au feeling, pas par la règle.';
  app.innerHTML=`
    <div class="card big"><div class="em">${acc>=85?'🎉':acc>=60?'💪':'📚'}</div>
      <div class="score" style="color:${acc>=70?'var(--good)':'var(--accent)'}">${acc}%</div>
      <div class="lab">${PRP.ok}/${PRP.n} · meilleure série ${PRP.best}</div>
      <div class="mt sub">${msg} +${xp} XP</div></div>
    <button class="btn" onclick="startPrep('${PRP.cat}')">↻ Encore</button>
    <button class="btn ghost mt" onclick="setView('grammar')">← Grammaire</button>`;
}
function renderGrammarList() {
  const rows = LESSONS.map((l, idx) => {
    if (l.hard) return '';
    const st = S.lessons[l.id];
    const unlocked = lessonUnlocked(idx);
    const done = st && st.done;
    const best = st ? st.best : null;
    return `
      <div class="lrow ${done ? 'done' : ''} ${unlocked ? '' : 'locked'}" ${unlocked ? `onclick="startLesson(${idx})"` : ''}>
        <div class="n">${done ? '✓' : unlocked ? (idx + 1) : '🔒'}</div>
        <div class="info"><div class="tt">${l.title}</div><div class="tg">${l.tag} · ${l.q.length} questions</div></div>
        <div class="sc ${best >= 70 ? 'pass' : ''}">${best != null ? best + '%' : ''}</div>
      </div>`;
  }).join('');
  app.innerHTML = `
    <div class="card">
      <h2>Grammaire</h2>
      <div class="sub">Valide une leçon (≥ 70 %) pour débloquer la suivante. Chaque bonne réponse rapporte de l'XP.</div>
    </div>
    <div class="card" style="border-color:var(--good)">
      <h2 style="font-size:16px">⚡ Drill « 0 fautes » · au réflexe</h2>
      <div class="sub">Pour ne plus jamais trébucher sur les petits pièges : <b style="color:var(--txt)">a/an</b>, <b style="color:var(--txt)">indénombrables</b> (the news is), articles, calques du français. 2 boutons, correction immédiate, en boucle.</div>
      <button class="btn mt" onclick="startErr('all')">Tout mélanger</button>
      <div class="row2 mt">
        <button class="btn sec" onclick="startErr('a/an')">A / An</button>
        <button class="btn sec" onclick="startErr('indénombrables')">Indénombrables</button>
      </div>
      <button class="btn sec mt" onclick="startErr('pièges')">Pièges de calque</button>
    </div>
    <div class="card" style="border-color:var(--blue)">
      <h2 style="font-size:16px">🧭 Prépositions · au réflexe</h2>
      <div class="sub">Le cauchemar des francophones, transformé en réflexe : <b style="color:var(--txt)">in/on/at</b> (temps &amp; lieu), <b style="color:var(--txt)">verbes + préposition</b> (good at, depend on…) et <b style="color:var(--txt)">phrasal verbs</b> (turn off, look after…).</div>
      <button class="btn mt" onclick="startPrep('all')">Tout mélanger</button>
      <div class="row2 mt">
        <button class="btn sec" onclick="startPrep('temps')">Temps</button>
        <button class="btn sec" onclick="startPrep('lieu')">Lieu</button>
      </div>
      <div class="row2 mt">
        <button class="btn sec" onclick="startPrep('verbes')">Verbes + prép.</button>
        <button class="btn sec" onclick="startPrep('phrasal')">Phrasal verbs</button>
      </div>
    </div>
    ${scalpelCard()}
    ${rows}
  `;
}

/* Carte du palier « haute précision » : leçons hard:true, hors parcours séquentiel. */
function scalpelCard() {
  const items = LESSONS.map((l, idx) => ({ l, idx })).filter(x => x.l.hard);
  if (!items.length) return '';
  const done = items.filter(x => S.lessons[x.l.id] && S.lessons[x.l.id].done).length;
  const rows = items.map(({ l, idx }) => {
    const st = S.lessons[l.id];
    const ok = st && st.done;
    return `<div class="lrow ${ok ? 'done' : ''}" onclick="startLesson(${idx})">
      <div class="n">${ok ? '✓' : '🔪'}</div>
      <div class="info"><div class="tt">${l.title}</div><div class="tg">${l.q.length} questions · autopsie des distracteurs</div></div>
      <div class="sc ${st && st.best >= 70 ? 'pass' : ''}">${st && st.best != null ? st.best + '%' : ''}</div>
    </div>`;
  }).join('');
  return `<div class="card" style="border-color:var(--bad)">
      <h2 style="font-size:16px">🔪 LE SCALPEL · grammaire de haute précision</h2>
      <div class="sub">Le cran au-dessus des leçons de base. Ici le <b style="color:var(--txt)">déclencheur est enfoui</b> dans la phrase, les <b style="color:var(--txt)">quatre options sont toutes de l'anglais correct</b> ailleurs, et chaque correction ouvre l'<b style="color:var(--txt)">autopsie des trois mauvaises réponses</b>. Pas de déblocage : attaque dans l'ordre que tu veux.</div>
      <div class="pill warn mt">${done} / ${items.length} validées · +6 XP par bonne réponse</div>
      <div class="mt">${rows}</div>
    </div>`;
}

/* ---------- GRAMMAIRE : quiz ---------- */
let Q = null;
function startLesson(idx) {
  const l = LESSONS[idx];
  Q = { idx, l, i: 0, correct: 0, answered: false, order: shuffle([...Array(l.q.length).keys()]) };
  renderLessonIntro();
}
function renderLessonIntro() {
  const l = Q.l;
  app.innerHTML = `
    <div class="card">
      <div class="pill warn">${l.tag}</div>
      <h2 class="mt">${l.title}</h2>
      <div class="expl mt" style="border-color:var(--blue)">${l.note}</div>
    </div>
    <button class="btn" onclick="renderQuestion()">Commencer · ${l.q.length} questions</button>
    <button class="btn ghost mt" onclick="setView('grammar')">Retour</button>
  `;
}
function renderQuestion() {
  const l = Q.l;
  const qi = Q.order[Q.i];
  const [stem, opts, correct, expl] = l.q[qi];
  Q.answered = false;
  const stemHtml = stem.replace('______', '<span class="blank">______</span>');
  const optHtml = opts.map((o, k) => `
    <button class="opt" data-k="${k}" onclick="answer(${k},${correct})">
      <span class="lab">${'ABCD'[k]}</span>${o}
    </button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>${l.title}</span><span>${Q.i + 1} / ${l.q.length}</span></div>
    <div class="pbar mb"><i style="width:${(Q.i) / l.q.length * 100}%"></i></div>
    <div class="stem">${stemHtml}</div>
    <div id="opts">${optHtml}</div>
    <div id="after"></div>
  `;
}
/* Autopsie des distracteurs : « pourquoi les trois autres sont fausses ».
   Repliée par défaut pour ne pas noyer la correction. */
function whyBlock(why) {
  if (!why) return '';
  const txt = why.replace(/ ✗ /g, '<br>✗ ');   // une fausse réponse par ligne
  return `<details class="whyx"><summary>🔬 Pourquoi les autres sont fausses</summary><div>${txt}</div></details>`;
}
function answer(k, correct) {
  if (Q.answered) return;
  Q.answered = true;
  const [stem, opts, , expl, why] = Q.l.q[Q.order[Q.i]];
  const btns = document.querySelectorAll('#opts .opt');
  btns.forEach((b, idx) => {
    b.setAttribute('disabled', '');
    if (idx === correct) b.classList.add('good');
    else if (idx === k) b.classList.add('bad');
    else b.classList.add('dim');
  });
  const ok = k === correct;
  if (ok) { Q.correct++; addXp(Q.l.hard ? 6 : 4); }
  else recordMistake({ kind: 'gram', q: stem, opts, correct, expl, why, cat: 'Grammaire · ' + Q.l.title });
  const last = Q.i === Q.l.q.length - 1;
  document.getElementById('after').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'}">${ok ? '✅ Correct. ' : '❌ Réponse : ' + 'ABCD'[correct] + '. '}${expl}</div>
    ${whyBlock(why)}
    <button class="btn mt" onclick="${last ? 'finishLesson()' : 'nextQuestion()'}">${last ? 'Voir le résultat' : 'Suivant'}</button>
  `;
  document.getElementById('after').scrollIntoView({ behavior: 'smooth', block: 'end' });
}
function nextQuestion() { Q.i++; renderQuestion(); }
function finishLesson() {
  const total = Q.l.q.length;
  const pct = Math.round(Q.correct / total * 100);
  const pass = pct >= 70;
  const prev = S.lessons[Q.l.id] || { best: 0, done: false };
  const st = { best: Math.max(prev.best, pct), done: prev.done || pass };
  S.lessons[Q.l.id] = st;
  if (pass && !prev.done) addXp(25);   // bonus déblocage
  markStudy(); touchDay(); save();
  const justUnlocked = pass && Q.idx + 1 < LESSONS.length && !prev.done;
  app.innerHTML = `
    <div class="card big">
      <div class="em">${pass ? '🎉' : '💪'}</div>
      <div class="score" style="color:${pass ? 'var(--good)' : 'var(--accent)'}">${pct}%</div>
      <div class="lab">${Q.correct} / ${total} bonnes réponses</div>
      <div class="mt sub">${pass ? 'Leçon validée !' : 'Il te faut 70 % pour valider. Réessaie.'}</div>
      ${justUnlocked ? `<div class="pill warn mt">🔓 Leçon suivante débloquée</div>` : ''}
    </div>
    <button class="btn" onclick="startLesson(${Q.idx})">Refaire</button>
    ${pass && Q.idx + 1 < LESSONS.length ? `<button class="btn sec mt" onclick="startLesson(${Q.idx + 1})">Leçon suivante →</button>` : ''}
    <button class="btn ghost mt" onclick="setView('grammar')">Retour aux leçons</button>
  `;
}

/* ---------- ANKI : accueil session ---------- */
function renderAnkiHome() {
  const due = dueCards().length;
  const news = newAvailable(false).length;         // nouvelles dispo aujourd'hui (plafonné)
  const total = due + news;
  const jour = buildQueue(false).length;
  const remaining = totalUnlearned();              // toutes les cartes encore jamais vues
  const unlimitedTotal = due + remaining;
  // répartition par thème
  const themes = {};
  VOCAB.forEach(v => { themes[v[3]] = (themes[v[3]] || 0) + 1; });
  const themeHtml = Object.entries(themes).map(([t, n]) =>
    `<button class="segchip" onclick="startThemeReview('${t}')">${t} <span class="cnt">${n}</span></button>`).join('');
  app.innerHTML = `
    <div class="card">
      <h2>Cartes de vocabulaire</h2>
      <div class="sub">Répétition espacée SM‑2, sens tiré <b style="color:var(--txt)">au hasard</b> 🇬🇧→🇫🇷 ou 🇫🇷→🇬🇧 : tu dois savoir <i>produire</i> le mot, pas juste le reconnaître. Objectif : maîtrise C2, du quotidien aux idiomes.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${due}</div><div class="sub">à réviser</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--accent)">${learnedCount()}<span style="font-size:15px;color:var(--muted)"> / ${VOCAB.length}</span></div><div class="sub">mots appris</div></div>
      </div>
    </div>

    <div class="card">
      <h2 style="font-size:16px">Session du jour</h2>
      <div class="sub">Révisions dues + ${NEW_PER_DAY} nouvelles au plus, et <b style="color:var(--txt)">${WAVE} cartes maximum</b> par séance : au-delà on ne retient plus, on subit.${due > ARRIERE_MAX ? ` Tu as ${due} cartes en retard : aucune nouvelle ne rentre tant que la pile n'est pas redescendue sous ${ARRIERE_MAX}.` : ''}</div>
      <button class="btn mt" onclick="startReview(false)" ${jour === 0 ? 'disabled' : ''}>
        ${jour === 0 ? 'Rien à réviser pour aujourd’hui 🎉' : `Démarrer · ${jour} carte(s)`}
      </button>
    </div>

    <div class="card" style="border-color:var(--accent)">
      <h2 style="font-size:16px">🌊 Par vagues de ${WAVE}</h2>
      <div class="sub">Sans plafond quotidien, mais par vagues digestes : ${WAVE} cartes, tu souffles, tu enchaînes si tu veux. Une carte ratée revient quelques cartes plus loin, dans la même vague, jusqu'à ce qu'elle tienne.</div>
      <button class="btn mt sec" style="border-color:var(--accent);color:var(--accent)" onclick="startReview(true)" ${unlimitedTotal === 0 ? 'disabled' : ''}>
        ${unlimitedTotal === 0 ? 'Tout est appris 🏆' : `Lancer une vague · ${Math.min(WAVE, unlimitedTotal)} carte(s) sur ${unlimitedTotal}`}
      </button>
      <div class="sub center mt">${remaining} mot(s) encore jamais vus</div>
    </div>

    <button class="btn sec" onclick="renderVocabBrowser('')">🔍 Parcourir / rechercher les ${VOCAB.length} mots</button>

    <div class="card mt">
      <h2 style="font-size:15px">Thèmes (${Object.keys(themes).length}) · touche pour réviser</h2>
      <div class="segwrap mt">${themeHtml}</div>
    </div>
    <button class="btn ghost" onclick="transferLink()">📦 Transférer ma progression (lien à ouvrir ailleurs)</button>
    ${learnedCount() > 0 ? `<button class="btn ghost" onclick="resetCardsConfirm()">Réinitialiser la progression des cartes</button>` : ''}
  `;
}

/* ---------- Parcourir / rechercher le vocabulaire ---------- */
function vocabStatus(i) {
  const c = S.cards[i];
  if (!c || !c.introduced) return { cls: 'st-new', lab: 'nouveau' };
  if (c.interval >= 21) return { cls: 'st-mat', lab: 'ancré' };
  return { cls: 'st-lrn', lab: 'en cours' };
}
function vocabRows(query) {
  const q = (query || '').trim().toLowerCase();
  const matches = [];
  for (let i = 0; i < VOCAB.length; i++) {
    const [en, fr, ex, theme] = VOCAB[i];
    if (!q || en.toLowerCase().includes(q) || fr.toLowerCase().includes(q) || theme.toLowerCase().includes(q)) {
      matches.push(i);
      if (matches.length >= 120) break;
    }
  }
  if (!matches.length) return `<div class="sub center mt">Aucun mot trouvé.</div>`;
  return matches.map(i => {
    const [en, fr] = VOCAB[i];
    const theme = VOCAB[i][3];
    const st = vocabStatus(i);
    const enEsc = en.replace(/'/g, "\\'");
    return `<div class="vrow">
      <button class="spk sm" onclick="speak('${enEsc}')" title="Écouter">🔊</button>
      <div class="vinfo"><div class="ven">${en}</div><div class="vfr">${fr}</div></div>
      <div class="vmeta"><span class="pill">${theme}</span><span class="vst ${st.cls}">${st.lab}</span></div>
    </div>`;
  }).join('');
}
function renderVocabBrowser(query) {
  app.innerHTML = `
    <div class="card">
      <h2>Dictionnaire — ${VOCAB.length} mots</h2>
      <div class="sub">Cherche en français ou en anglais (ou par thème). Touche 🔊 pour écouter la prononciation.</div>
      <input id="vocab-search" class="transinput mt" style="min-height:0" placeholder="Rechercher… (ex. grue, crane, animaux)" oninput="filterVocab(this.value)" value="${(query || '').replace(/"/g, '&quot;')}">
    </div>
    <div id="vocab-results">${vocabRows(query)}</div>
    <button class="btn ghost mt" onclick="setView('anki')">Retour</button>
  `;
  const inp = document.getElementById('vocab-search');
  if (inp && query) { inp.focus(); inp.setSelectionRange(query.length, query.length); }
}
function filterVocab(q) {
  const el = document.getElementById('vocab-results');
  if (el) el.innerHTML = vocabRows(q);
}

/* ---------- ANKI : session de révision ---------- */
let R = null;
function startReview(unlimited) {
  const queue = buildQueue(unlimited);
  if (queue.length === 0) { setView('anki'); toast('Aucune carte à réviser pour le moment 🎉'); return; }
  R = { queue, pos: 0, shown: false, reviewed: 0, unlimited: !!unlimited, theme: null };
  renderCard();
}
function startThemeReview(theme) {
  const queue = buildThemeQueue(theme);
  if (queue.length === 0) { toast('Ce thème est déjà à jour 🎉'); return; }
  R = { queue, pos: 0, shown: false, reviewed: 0, unlimited: true, theme };
  renderCard();
}
function renderCard() {
  if (R.pos >= R.queue.length) return finishReview();
  const i = R.queue[R.pos];
  const en = VOCAB[i][0], fr = VOCAB[i][1], ex = VOCAB[i][2], theme = VOCAB[i][3];
  const isNew = !S.cards[i] || !S.cards[i].introduced;
  // Sens tiré au hasard : produire l'anglais OU le français
  R.dir = Math.random() < 0.5 ? 'en2fr' : 'fr2en';
  const prompt = R.dir === 'en2fr' ? en : fr;
  const answer = R.dir === 'en2fr' ? fr : en;
  const dirBadge = R.dir === 'en2fr' ? '🇬🇧 → 🇫🇷' : '🇫🇷 → 🇬🇧';
  const psize = prompt.length > 30 ? '19px' : prompt.length > 18 ? '24px' : '30px';
  const enEsc = en.replace(/'/g, "\\'");
  R.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>${isNew ? '🆕 Nouvelle' : '🔁 Révision'}</span><span>${R.pos + 1} / ${R.queue.length}</span></div>
    <div class="flash" onclick="flip()">
      <div class="theme">${theme} · <span style="color:var(--accent)">${dirBadge}</span></div>
      <div class="front" style="font-size:${psize}">${prompt}</div>
      <div id="cardback" class="hidden">
        <div class="back">${answer}</div>
        <div class="ex">“${ex}”</div>
      </div>
      <div id="taphint" class="tap">${R.dir === 'en2fr' ? 'Traduis en français' : 'Traduis en anglais'} · touche pour révéler ▽</div>
    </div>
    <button id="spk" class="spk ${R.dir === 'fr2en' ? 'hidden' : ''}" onclick="speak('${enEsc}');event.stopPropagation()" title="Écouter l'anglais">🔊</button>
    <button class="cardmute" onclick="toggleCardMute();event.stopPropagation()">${S.cardMute ? '🔇 Son des cartes coupé · le réactiver' : '🔊 Son auto · le couper'}</button>
    <div id="ratebar"></div>
  `;
}
function flip() {
  if (R.shown) return;
  R.shown = true;
  document.getElementById('cardback').classList.remove('hidden');
  document.getElementById('taphint').classList.add('hidden');
  const i = R.queue[R.pos];
  if (R.dir === 'fr2en') {                 // l'anglais était caché : on le révèle et on le prononce
    const s = document.getElementById('spk'); if (s) s.classList.remove('hidden');
    if (!S.cardMute) speak(VOCAB[i][0]);
  }
  document.getElementById('ratebar').innerHTML = `
    <div class="srsrow">
      <button class="again" onclick="doRate(0)">Encore<small>${nextDueLabel(i,0)}</small></button>
      <button class="hard" onclick="doRate(1)">Difficile<small>${nextDueLabel(i,1)}</small></button>
      <button class="good" onclick="doRate(2)">Bien<small>${nextDueLabel(i,2)}</small></button>
      <button class="easy" onclick="doRate(3)">Facile<small>${nextDueLabel(i,3)}</small></button>
    </div>`;
}
function doRate(rating) {
  const i = R.queue[R.pos];
  const before = cardState(i);
  rateCard(i, rating);
  R.reviewed++;
  bumpDaily('cards');
  // "Encore" : la carte revient 4 positions plus loin — pas en fin de file,
  // où elle mettrait une heure à repasser dans une grosse session
  if (rating === 0) R.queue.splice(Math.min(R.pos + 5, R.queue.length), 0, i);
  R.pos++;
  touchDay();
  renderCard();
}
function finishReview() {
  touchDay(); save();
  app.innerHTML = `
    <div class="card big">
      <div class="em">🧠</div>
      <div class="score" style="color:var(--good)">+${R.reviewed}</div>
      <div class="lab">carte(s) travaillée(s)</div>
      <div class="mt sub">Reviens demain : les cartes réapparaîtront au moment optimal.</div>
    </div>
    <button class="btn" onclick="setView('anki')">Terminé</button>
    ${R.theme
      ? (buildThemeQueue(R.theme).length ? `<button class="btn sec mt" onclick="startThemeReview('${R.theme}')">Continuer « ${R.theme} » (${buildThemeQueue(R.theme).length})</button>` : '')
      : R.unlimited
      ? ((dueCards().length + totalUnlearned()) ? `<button class="btn sec mt" onclick="startReview(true)">🌊 Vague suivante · ${dueCards().length + totalUnlearned()} restante(s)</button>` : '')
      : (buildQueue(false).length ? `<button class="btn sec mt" onclick="startReview(false)">Continuer (${buildQueue(false).length})</button>` : '')}
  `;
}
function resetCardsConfirm() {
  if (confirm('Réinitialiser toute la progression des cartes ? (les stats de grammaire et XP sont conservées)')) {
    S.cards = {}; S.newToday = 0; save(); toast('Cartes réinitialisées'); renderAnkiHome();
  }
}

/* ---------- ÉCOUTE : menu ---------- */
let LST = null;
function renderListenHome() {
  const nConv = CONVERSATIONS.filter(c => c.type === 'conv').length;
  const nTalk = CONVERSATIONS.filter(c => c.type === 'talk').length;
  app.innerHTML = `
    <div class="card">
      <h2>Compréhension orale</h2>
      <div class="sub">Toutes les voix sont générées par le navigateur (rien à télécharger). 🔈 Vérifie que le son est activé.</div>
    </div>
    <button class="tile" onclick="startListen()">
      <div class="ic l">🗣️</div>
      <div class="body"><div class="t">Question → réponse</div><div class="d">Questions courtes, 3 réponses au choix</div></div>
      <div class="badge zero">${EXAM_LISTEN.length}</div>
    </button>
    <button class="tile" onclick="startLong()">
      <div class="ic l">💬</div>
      <div class="body"><div class="t">Conversations & exposés</div><div class="d">Dialogues joués, puis questions de compréhension</div></div>
      <div class="badge zero">${nConv + nTalk}</div>
    </button>
    <button class="tile" onclick="dDictStart()">
      <div class="ic l">✍️</div>
      <div class="body"><div class="t">Dictée multi-accents</div><div class="d">Phrases natives à vitesse réelle · US, UK, Irlande, Australie…</div></div>
      <div class="badge zero">${typeof DIA !== 'undefined' ? DIA.lines.length : 0}</div>
    </button>
    <button class="tile" onclick="dPairHome()">
      <div class="ic l">👂</div>
      <div class="body"><div class="t">Paires minimales · l'oreille</div><div class="d">ship/sheep, work/walk, want/won't — entendre la différence avant de la rater en question</div></div>
      <div class="badge zero">${typeof DIA !== 'undefined' ? DIA.pairs.length : 0}</div>
    </button>
    <div class="seg mt">
      <button class="${audioSpeed() === 'slow' ? 'on' : ''}" onclick="setSpeed('slow')">🐢 Lente<small>déchiffrer</small></button>
      <button class="${audioSpeed() === 'normal' ? 'on' : ''}" onclick="setSpeed('normal')">Normale<small>par défaut</small></button>
      <button class="${audioSpeed() === 'native' ? 'on' : ''}" onclick="setSpeed('native')">⚡ Native<small>vrai débit</small></button>
    </div>
    <div class="sub center mt">Les conversations longues sont ce qui ressemble le plus à une vraie réunion. La vitesse « native » est ce qui te sépare d'une vraie conversation.</div>
  `;
}
function setSpeed(v) { S.audioSpeed = v; S.slowAudio = (v === 'slow'); save(); renderListenHome(); toast(v === 'slow' ? 'Écoute ralentie 🐢' : v === 'native' ? 'Débit natif ⚡' : 'Vitesse normale'); }
function toggleSlow() { setSpeed(audioSpeed() === 'slow' ? 'normal' : 'slow'); }
function startListen() {
  LST = { order: shuffle([...Array(EXAM_LISTEN.length).keys()]), i: 0, correct: 0, answered: false };
  renderListen();
}
function renderListen() {
  const idx = LST.order[LST.i];
  const [q, opts, correct] = EXAM_LISTEN[idx];
  LST.answered = false;
  const optHtml = opts.map((o, k) =>
    `<button class="opt" onclick="answerListen(${k},${correct})"><span class="lab">${'ABC'[k]}</span>${o}</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>Question → réponse</span><span>${LST.i + 1} / ${EXAM_LISTEN.length}</span></div>
    <div class="pbar mb"><i style="width:${LST.i / EXAM_LISTEN.length * 100}%"></i></div>
    <button class="spk" onclick="speak('${q.replace(/'/g, "\\'")}')" style="width:88px;height:88px;font-size:34px">🔊</button>
    <div class="center sub mb">Touche pour (ré)écouter la question</div>
    <div id="opts">${optHtml}</div>
    <div id="after"></div>
  `;
  setTimeout(() => speak(q), 350);
}
function answerListen(k, correct) {
  if (LST.answered) return;
  LST.answered = true;
  const idx = LST.order[LST.i];
  const [q, opts] = EXAM_LISTEN[idx];
  document.querySelectorAll('#opts .opt').forEach((b, i2) => {
    b.setAttribute('disabled', '');
    if (i2 === correct) b.classList.add('good');
    else if (i2 === k) b.classList.add('bad');
    else b.classList.add('dim');
  });
  const ok = k === correct;
  if (ok) { LST.correct++; addXp(3); }
  else recordMistake({ kind: 'listen', q, opts, correct, cat: 'Écoute · question → réponse', audio: q });
  const last = LST.i === EXAM_LISTEN.length - 1;
  document.getElementById('after').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'}">${ok ? '✅ Correct !' : '❌ Bonne réponse : ' + 'ABC'[correct]}<br><span class="sub">Question : « ${q} »</span></div>
    <button class="btn mt" onclick="${last ? 'finishListen()' : 'nextListen()'}">${last ? 'Résultat' : 'Suivant'}</button>
  `;
}
function nextListen() { LST.i++; renderListen(); }
function finishListen() {
  const pct = Math.round(LST.correct / EXAM_LISTEN.length * 100);
  S.seenListen += 1; markStudy(); touchDay(); save();
  app.innerHTML = `
    <div class="card big">
      <div class="em">🎧</div>
      <div class="score">${pct}%</div>
      <div class="lab">${LST.correct} / ${EXAM_LISTEN.length}</div>
    </div>
    <button class="btn" onclick="startListen()">Refaire</button>
    <button class="btn ghost mt" onclick="setView('listen')">Retour</button>
  `;
}

/* ---------- ÉCOUTE Part 3/4 : conversations & exposés ---------- */
let LG = null;
function startLong() {
  LG = { order: shuffle([...Array(CONVERSATIONS.length).keys()]), pi: 0, qi: 0, correct: 0, total: 0, answered: false };
  renderLong();
}
function playLong() { const p = CONVERSATIONS[LG.order[LG.pi]]; speakLines(p.lines, 0); }
function renderLong() {
  const p = CONVERSATIONS[LG.order[LG.pi]];
  const nq = p.qs.length;
  const [q, opts, correct] = p.qs[LG.qi];
  LG.answered = false;
  const typeLabel = p.type === 'conv' ? '💬 Conversation (Part 3)' : '📢 Exposé (Part 4)';
  const optHtml = opts.map((o, k) =>
    `<button class="opt" onclick="answerLong(${k},${correct})"><span class="lab">${'ABCD'[k]}</span>${o}</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>${typeLabel} · <span style="color:var(--accent)">${p.level}</span></span><span>Passage ${LG.pi + 1}/${CONVERSATIONS.length}</span></div>
    <button class="spk" onclick="playLong()" style="width:84px;height:84px;font-size:32px">🔊</button>
    <div class="center sub mb">Touche pour (ré)écouter · question ${LG.qi + 1}/${nq}</div>
    <div class="stem" style="font-size:17px">${q}</div>
    <div id="opts">${optHtml}</div>
    <div id="after"></div>
  `;
  if (LG.qi === 0) setTimeout(playLong, 350);   // joue le dialogue en arrivant sur le passage
}
function answerLong(k, correct) {
  if (LG.answered) return;
  LG.answered = true;
  const p = CONVERSATIONS[LG.order[LG.pi]];
  const [qText, qOpts] = p.qs[LG.qi];
  document.querySelectorAll('#opts .opt').forEach((b, i2) => {
    b.setAttribute('disabled', '');
    if (i2 === correct) b.classList.add('good');
    else if (i2 === k) b.classList.add('bad');
    else b.classList.add('dim');
  });
  const ok = k === correct;
  LG.total++;
  if (ok) { LG.correct++; addXp(3); }
  else recordMistake({ kind: 'long', q: qText, opts: qOpts, correct, cat: (p.type === 'conv' ? 'Écoute · conversation' : 'Écoute · exposé') });
  const lastQ = LG.qi === p.qs.length - 1;
  const lastP = LG.pi === CONVERSATIONS.length - 1;
  const script = p.lines.map(l => {
    const who = l.spk === 'W' ? '👩 ' : l.spk === 'M' ? '👨 ' : '🔊 ';
    return `<div style="margin-bottom:4px">${who}${l.text}</div>`;
  }).join('');
  document.getElementById('after').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'}">${ok ? '✅ Correct !' : '❌ Bonne réponse : ' + 'ABCD'[correct]}</div>
    <details class="script mt"><summary>Voir la transcription</summary><div class="mt">${script}</div></details>
    <button class="btn mt" onclick="${(lastQ && lastP) ? 'finishLong()' : 'nextLong()'}">${(lastQ && lastP) ? 'Résultat' : (lastQ ? 'Passage suivant' : 'Question suivante')}</button>
  `;
  document.getElementById('after').scrollIntoView({ behavior: 'smooth', block: 'end' });
}
function nextLong() {
  const p = CONVERSATIONS[LG.order[LG.pi]];
  if (LG.qi < p.qs.length - 1) { LG.qi++; }
  else { LG.pi++; LG.qi = 0; }
  renderLong();
  window.scrollTo(0, 0);
}
function finishLong() {
  const pct = Math.round(LG.correct / LG.total * 100);
  S.longDone = (S.longDone || 0) + 1;
  markStudy(); touchDay(); save();
  app.innerHTML = `
    <div class="card big">
      <div class="em">🎧</div>
      <div class="score">${pct}%</div>
      <div class="lab">${LG.correct} / ${LG.total} bonnes réponses</div>
    </div>
    <button class="btn" onclick="startLong()">Refaire (nouvel ordre)</button>
    <button class="btn ghost mt" onclick="setView('listen')">Retour</button>
  `;
}

/* ---------- Synthèse vocale ---------- */
let voiceEN = null, voiceW = null, voiceM = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices();
  const en = vs.filter(v => /^en/i.test(v.lang));
  voiceEN = en.find(v => /en-US/i.test(v.lang) && /female|Samantha|Zira|Google US/i.test(v.name))
         || en.find(v => /en-US/i.test(v.lang)) || en[0] || null;
  voiceW = en.find(v => /female|Samantha|Victoria|Karen|Zira|Susan|Fiona|Moira/i.test(v.name)) || voiceEN;
  voiceM = en.find(v => /male|Daniel|Alex|Fred|David|Aaron|Oliver|Arthur/i.test(v.name)) || voiceEN;
}
if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
/* Trois vitesses : lente (déchiffrage), normale, et « native » — celle à laquelle
   les gens parlent vraiment, et la seule qui prépare à une vraie conversation. */
const SPEEDS = { slow: 0.78, normal: 1, native: 1.18 };
function audioSpeed() { return S.audioSpeed || (S.slowAudio ? 'slow' : 'normal'); }
function audioRate(base) { return base * (SPEEDS[audioSpeed()] || 1); }
function speak(text) {
  if (!('speechSynthesis' in window)) { toast('Synthèse vocale indisponible'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = audioRate(0.95); u.pitch = 1;
  if (voiceEN) u.voice = voiceEN;
  speechSynthesis.speak(u);
}
// Joue un dialogue ligne par ligne, en différenciant les locuteurs (voix + hauteur).
function speakLines(lines, i, onDone) {
  if (!('speechSynthesis' in window)) { toast('Synthèse vocale indisponible'); return; }
  if (i === 0) speechSynthesis.cancel();
  if (i >= lines.length) { if (onDone) onDone(); return; }
  const ln = lines[i];
  const u = new SpeechSynthesisUtterance(ln.text);
  u.lang = 'en-US';
  if (ln.spk === 'W') { u.pitch = 1.3; u.rate = audioRate(0.95); if (voiceW) u.voice = voiceW; }
  else if (ln.spk === 'M') { u.pitch = 0.7; u.rate = audioRate(0.92); if (voiceM) u.voice = voiceM; }
  else { u.pitch = 1; u.rate = audioRate(0.95); if (voiceEN) u.voice = voiceEN; }
  u.onend = () => speakLines(lines, i + 1, onDone);
  speechSynthesis.speak(u);
}

/* ---------- Utilitaires ---------- */
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
let toastT;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ============================================================
   L'EXAMEN BLANC TOEIC a été retiré le 2026-11-11.
   L'app s'appelle 990 — le score maximum du TOEIC — mais Thomas n'a
   jamais passé le TOEIC : il a passé l'IELTS, le 2026-10-24, et l'a
   obtenu (7.5, C1). Un simulateur noté sur 990, un test de niveau et
   une courbe de score estimé n'avaient donc plus d'objet. Le code et
   la banque d'items restent dans l'historique git (commit 8c50ee2)
   si un examen revient un jour.
   EXAM_LISTEN, lui, sert toujours : c'est la matière du module d'écoute.
   ============================================================ */

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ============================================================
   MES ERREURS — rejoue les questions ratées jusqu'à les maîtriser
   (méthode Leitner : 2 bonnes réponses d'affilée = acquise)
   ============================================================ */
function qkey(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return 'm' + (h >>> 0); }
/* Étiquette d'option : les questions du Diapason (« quelle syllabe ? ») peuvent
   dépasser 4 choix — « ABCD »[4] rendait « undefined » à l'écran. */
function optLabel(i) { return 'ABCDEFGH'[i] || String(i + 1); }
function recordMistake(m) {
  if (!S.mistakes) S.mistakes = {};
  const k = qkey((m.q || '') + '|' + m.kind);
  S.mistakes[k] = { kind: m.kind, q: m.q, opts: m.opts, correct: m.correct, expl: m.expl || '', why: m.why || '', cat: m.cat || '', audio: m.audio || null, box: 0, ts: Date.now() };
  save();
}
function mistakeCount() { return Object.keys(S.mistakes || {}).length; }

let MR = null;
function startMistakes() {
  const keys = Object.keys(S.mistakes || {});
  if (!keys.length) { toast('Aucune erreur à revoir 🎉'); setView('home'); return; }
  keys.sort((a, b) => (S.mistakes[a].box - S.mistakes[b].box) || (S.mistakes[a].ts - S.mistakes[b].ts));
  MR = { keys, pos: 0, done: 0, answered: false };
  renderMistake();
}
function renderMistake() {
  if (MR.pos >= MR.keys.length) return finishMistakes();
  const key = MR.keys[MR.pos];
  const m = S.mistakes[key];
  if (!m) { MR.pos++; return renderMistake(); }
  MR.answered = false;
  const audioBtn = m.audio
    ? `<button class="spk" onclick="speak('${(m.audio).replace(/'/g, "\\'")}')" style="width:74px;height:74px;font-size:29px">🔊</button><div class="center sub mb">Touche pour (ré)écouter</div>` : '';
  const stemHtml = m.audio
    ? `<div class="stem" style="font-size:17px">${m.q}</div>`
    : `<div class="stem">${(m.q || '').replace('______', '<span class="blank">______</span>')}</div>`;
  const optHtml = m.opts.map((o, idx) =>
    `<button class="opt" onclick="answerMistake(${idx})"><span class="lab">${optLabel(idx)}</span>${o}</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>🎯 Erreur · ${m.cat || ''}</span><span>${MR.pos + 1}/${MR.keys.length}</span></div>
    <div class="pbar mb"><i style="width:${MR.pos / MR.keys.length * 100}%"></i></div>
    ${audioBtn}
    ${stemHtml}
    <div id="opts">${optHtml}</div>
    <div id="after"></div>
    <div class="mt"><button class="btn ghost" onclick="setView('home')">Quitter</button></div>
  `;
  if (m.audio) setTimeout(() => speak(m.audio), 300);
}
function answerMistake(k) {
  if (MR.answered) return;
  MR.answered = true;
  const key = MR.keys[MR.pos];
  const m = S.mistakes[key];
  document.querySelectorAll('#opts .opt').forEach((b, idx) => {
    b.setAttribute('disabled', '');
    if (idx === m.correct) b.classList.add('good');
    else if (idx === k) b.classList.add('bad');
    else b.classList.add('dim');
  });
  const ok = k === m.correct;
  if (ok) { m.box = (m.box || 0) + 1; addXp(2); if (m.box >= 2) delete S.mistakes[key]; }
  else { m.box = 0; }
  save();
  MR.done++;
  const graduated = ok && !S.mistakes[key];
  const last = MR.pos === MR.keys.length - 1;
  document.getElementById('after').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'}">${ok ? (graduated ? '✅ Maîtrisée ! Elle sort de ta liste d\'erreurs.' : '✅ Correct — encore une bonne réponse et elle est acquise.') : '❌ Bonne réponse : ' + optLabel(m.correct) + '.'} ${m.expl || ''}</div>
    ${whyBlock(m.why)}
    <button class="btn mt" onclick="${last ? 'finishMistakes()' : 'nextMistake()'}">${last ? 'Terminé' : 'Suivant'}</button>
  `;
  document.getElementById('after').scrollIntoView({ behavior: 'smooth', block: 'end' });
}
function nextMistake() { MR.pos++; renderMistake(); window.scrollTo(0, 0); }
function finishMistakes() {
  touchDay(); save();
  const left = mistakeCount();
  app.innerHTML = `
    <div class="card big">
      <div class="em">${left ? '🎯' : '🎉'}</div>
      <div class="score" style="color:var(--good)">${left}</div>
      <div class="lab">erreur(s) restantes</div>
      <div class="mt sub">${left ? 'Reviens jusqu\'à ce que la liste soit vide : c\'est le chemin le plus court vers le sans-faute.' : 'Plus aucune erreur en attente. Impeccable !'}</div>
    </div>
    <button class="btn" onclick="setView('home')">Accueil</button>
    ${left ? `<button class="btn sec mt" onclick="startMistakes()">Continuer (${left})</button>` : ''}
  `;
}

/* ============================================================
   TRADUIRE — version FR ⇄ EN, correction idiomatique + grammaire
   ============================================================ */
function transState(i) { return S.trans[i] || { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false }; }
function rateTrans(i, rating) {
  const c = transState(i);
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
  S.trans[i] = c; S.transDone = (S.transDone || 0) + 1;
  addXp(rating === 0 ? 2 : 6); save();
}
function transCats() { const s = []; TRANSLATIONS.forEach(t => { if (!s.includes(t.cat)) s.push(t.cat); }); return s; }
function transMastered() { let n = 0; for (const i in S.trans) if (S.trans[i].interval >= 21) n++; return n; }
function transSeen() { let n = 0; for (const i in S.trans) if (S.trans[i].introduced) n++; return n; }
function buildTransQueue(cat) {
  const now = Date.now();
  const due = [], news = [];
  TRANSLATIONS.forEach((t, i) => {
    if (cat !== 'Tous' && t.cat !== cat) return;
    const st = S.trans[i];
    if (st && st.introduced) { if (st.due <= now) due.push(i); }
    else news.push(i);
  });
  shuffle(due); shuffle(news);
  const items = due.concat(news);
  const cap = cat === 'Tous' ? 12 : items.length;   // catégorie ciblée = tout ; « Tous » = lot de 12
  return items.slice(0, Math.max(due.length, cap));
}

let transCat = 'Tous';
function setTransCat(c) { transCat = c; renderTransHome(); }
function setTransDir(d) { S.transDir = d; save(); renderTransHome(); }
function renderTransHome() {
  const cats = ['Tous'].concat(transCats());
  const chips = cats.map(c => {
    const n = c === 'Tous' ? TRANSLATIONS.length : TRANSLATIONS.filter(t => t.cat === c).length;
    return `<button class="segchip ${transCat === c ? 'on' : ''}" onclick="setTransCat('${c}')">${c} <span class="cnt">${n}</span></button>`;
  }).join('');
  const qlen = buildTransQueue(transCat).length;
  const dir = S.transDir === 'en2fr' ? 'EN → FR' : 'FR → EN';
  app.innerHTML = `
    <div class="card">
      <h2>Traduire · version ${dir}</h2>
      <div class="sub">Traduis la phrase (dans ta tête ou en l'écrivant), puis compare à une <b style="color:var(--txt)">correction idiomatique</b>. Chaque phrase entraîne un point précis : subjonctif, inversion, conditionnels mixtes, discours indirect… et du bon vocabulaire.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${transSeen()}<span style="font-size:15px;color:var(--muted)"> / ${TRANSLATIONS.length}</span></div><div class="sub">phrases vues</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${transMastered()}</div><div class="sub">maîtrisées (≥21j)</div></div>
      </div>
    </div>
    <div class="seg">
      <button class="${S.transDir === 'fr2en' ? 'on' : ''}" onclick="setTransDir('fr2en')">🇫🇷 → 🇬🇧<small>thème</small></button>
      <button class="${S.transDir === 'en2fr' ? 'on' : ''}" onclick="setTransDir('en2fr')">🇬🇧 → 🇫🇷<small>version</small></button>
    </div>
    <div class="card">
      <h2 style="font-size:15px">Cible un point de grammaire</h2>
      <div class="segwrap mt">${chips}</div>
    </div>
    <button class="btn" onclick="startTrans()" ${qlen === 0 ? 'disabled' : ''}>
      ${qlen === 0 ? 'Tout est à jour ici 🎉' : `Démarrer · ${qlen} phrase(s)`}
    </button>
  `;
}

let TR = null;
function startTrans() {
  const queue = buildTransQueue(transCat);
  if (!queue.length) { toast('Rien à traduire ici pour le moment 🎉'); return; }
  TR = { queue, pos: 0, done: 0, shown: false };
  renderTransCard();
}
function renderTransCard() {
  if (TR.pos >= TR.queue.length) return finishTrans();
  const t = TRANSLATIONS[TR.queue[TR.pos]];
  const en2fr = S.transDir === 'en2fr';
  const prompt = en2fr ? t.en : t.fr;
  TR.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>${t.cat} · <span style="color:var(--accent)">${t.level}</span></span><span>${TR.pos + 1} / ${TR.queue.length}</span></div>
    <div class="pbar mb"><i style="width:${TR.pos / TR.queue.length * 100}%"></i></div>
    <div class="transfr">${prompt}${en2fr ? ` <button class="spk sm" onclick="speak('${t.en.replace(/'/g, "\\'")}')" title="Écouter">🔊</button>` : ''}</div>
    <textarea id="trans-in" class="transinput" rows="2" placeholder="${en2fr ? 'Écris ta traduction en français' : 'Écris ta traduction en anglais'} (facultatif)…"></textarea>
    <button class="btn" onclick="revealTrans()">Voir la correction</button>
    <div class="mt"><button class="btn ghost" onclick="setView('traduire')">Quitter</button></div>
  `;
}
function revealTrans() {
  if (TR.shown) return;
  TR.shown = true;
  const t = TRANSLATIONS[TR.queue[TR.pos]];
  const en2fr = S.transDir === 'en2fr';
  const prompt = en2fr ? t.en : t.fr;
  const model = en2fr ? t.fr : t.en;
  const mine = (document.getElementById('trans-in') || {}).value || '';
  const mineHtml = mine.trim()
    ? `<div class="trans-mine"><div class="lbl">Ta réponse</div>${escapeHtml(mine.trim())}</div>` : '';
  const altHtml = (!en2fr && t.alt && t.alt.length)
    ? `<div class="trans-alt">Aussi correct : ${t.alt.map(a => '« ' + escapeHtml(a) + ' »').join(' · ')}</div>` : '';
  const enEsc = t.en.replace(/'/g, "\\'");
  app.innerHTML = `
    <div class="qmeta"><span>${t.cat} · <span style="color:var(--accent)">${t.level}</span></span><span>${TR.pos + 1} / ${TR.queue.length}</span></div>
    <div class="transfr small">${prompt}</div>
    ${mineHtml}
    <div class="trans-model">
      <div class="lbl">Correction idiomatique <button class="spk sm" onclick="speak('${enEsc}')" title="Écouter l'anglais">🔊</button></div>
      <div class="en">${model}</div>
      ${altHtml}
    </div>
    <div class="expl" style="border-color:var(--purple)"><b>${t.point}</b><br>${t.note}</div>
    <div class="sub center mt mb">Sans regarder, ta traduction était…</div>
    <div class="srsrow">
      <button class="again" onclick="doRateTrans(0)">À revoir</button>
      <button class="hard" onclick="doRateTrans(1)">Approximative</button>
      <button class="good" onclick="doRateTrans(2)">Correcte</button>
      <button class="easy" onclick="doRateTrans(3)">Parfaite</button>
    </div>
  `;
  window.scrollTo(0, 0);
}
function doRateTrans(rating) {
  const i = TR.queue[TR.pos];
  rateTrans(i, rating);
  TR.done++;
  bumpDaily('trans');
  if (rating === 0) TR.queue.push(i);
  TR.pos++;
  touchDay();
  renderTransCard();
}
function finishTrans() {
  touchDay(); save();
  app.innerHTML = `
    <div class="card big">
      <div class="em">✍️</div>
      <div class="score" style="color:var(--good)">+${TR.done}</div>
      <div class="lab">phrase(s) traduite(s)</div>
      <div class="mt sub">La traduction, c'est là que la grammaire et le vocabulaire deviennent actifs. Reviens régulièrement.</div>
    </div>
    <button class="btn" onclick="setView('traduire')">Terminé</button>
    ${buildTransQueue(transCat).length ? `<button class="btn sec mt" onclick="startTrans()">Continuer (${buildTransQueue(transCat).length})</button>` : ''}
  `;
}

/* ============================================================
   ANGLAIS SOUTENU — reformuler du neutre vers l'élégant (EN → EN)
   ============================================================ */
function regState(i) { return S.register[i] || { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false }; }
function rateRegister(i, rating) {
  const c = regState(i);
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
  S.register[i] = c; addXp(rating === 0 ? 2 : 6); save();
}
function regCats() { const s = []; REGISTER.forEach(t => { if (!s.includes(t.cat)) s.push(t.cat); }); return s; }
function regSeen() { let n = 0; for (const i in S.register) if (S.register[i].introduced) n++; return n; }
function regMastered() { let n = 0; for (const i in S.register) if (S.register[i].interval >= 21) n++; return n; }
function buildRegQueue(cat) {
  const now = Date.now();
  const due = [], news = [];
  REGISTER.forEach((t, i) => {
    if (cat !== 'Tous' && t.cat !== cat) return;
    const st = S.register[i];
    if (st && st.introduced) { if (st.due <= now) due.push(i); }
    else news.push(i);
  });
  shuffle(due); shuffle(news);
  const items = due.concat(news);
  const cap = cat === 'Tous' ? 12 : items.length;
  return items.slice(0, Math.max(due.length, cap));
}
let regCat = 'Tous';
function setRegCat(c) { regCat = c; renderRegisterHome(); }
function renderRegisterHome() {
  const cats = ['Tous'].concat(regCats());
  const chips = cats.map(c => {
    const n = c === 'Tous' ? REGISTER.length : REGISTER.filter(t => t.cat === c).length;
    return `<button class="segchip ${regCat === c ? 'on' : ''}" onclick="setRegCat('${c}')">${c} <span class="cnt">${n}</span></button>`;
  }).join('');
  const qlen = buildRegQueue(regCat).length;
  app.innerHTML = `
    <div class="card">
      <h2>✨ Anglais soutenu</h2>
      <div class="sub">On passe du correct à l'<b style="color:var(--txt)">élégant</b>. Une phrase neutre s'affiche : reformule-la dans un registre soutenu, puis compare à une version raffinée avec l'explication du procédé (mot choisi, nominalisation, atténuation…).</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${regSeen()}<span style="font-size:15px;color:var(--muted)"> / ${REGISTER.length}</span></div><div class="sub">tournures vues</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${regMastered()}</div><div class="sub">maîtrisées (≥21j)</div></div>
      </div>
    </div>
    <div class="card">
      <h2 style="font-size:15px">Cible un procédé de style</h2>
      <div class="segwrap mt">${chips}</div>
    </div>
    <button class="btn" onclick="startReg()" ${qlen === 0 ? 'disabled' : ''}>
      ${qlen === 0 ? 'Tout est à jour ici 🎉' : `Démarrer · ${qlen} tournure(s)`}
    </button>
    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
}
let RG = null;
function startReg() {
  const queue = buildRegQueue(regCat);
  if (!queue.length) { toast('Rien à travailler ici pour le moment 🎉'); return; }
  RG = { queue, pos: 0, done: 0, shown: false };
  renderRegCard();
}
function renderRegCard() {
  if (RG.pos >= RG.queue.length) return finishReg();
  const t = REGISTER[RG.queue[RG.pos]];
  RG.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>${t.cat} · <span style="color:var(--accent)">${t.level}</span></span><span>${RG.pos + 1} / ${RG.queue.length}</span></div>
    <div class="pbar mb"><i style="width:${RG.pos / RG.queue.length * 100}%"></i></div>
    <div class="trans-mine"><div class="lbl">Version neutre</div>${t.plain}</div>
    <textarea id="reg-in" class="transinput" rows="2" placeholder="Reformule dans un registre soutenu (facultatif)…"></textarea>
    <button class="btn" onclick="revealReg()">Voir la version soutenue</button>
    <div class="mt"><button class="btn ghost" onclick="renderRegisterHome()">Quitter</button></div>
  `;
}
function revealReg() {
  if (RG.shown) return;
  RG.shown = true;
  const t = REGISTER[RG.queue[RG.pos]];
  const mine = (document.getElementById('reg-in') || {}).value || '';
  const mineHtml = mine.trim() ? `<div class="trans-mine"><div class="lbl">Ta reformulation</div>${escapeHtml(mine.trim())}</div>` : '';
  const altHtml = (t.alt && t.alt.length) ? `<div class="trans-alt">Autres tournures : ${t.alt.map(a => '« ' + escapeHtml(a) + ' »').join(' · ')}</div>` : '';
  const enEsc = t.elevated.replace(/'/g, "\\'");
  app.innerHTML = `
    <div class="qmeta"><span>${t.cat} · <span style="color:var(--accent)">${t.level}</span></span><span>${RG.pos + 1} / ${RG.queue.length}</span></div>
    <div class="trans-mine"><div class="lbl">Version neutre</div>${t.plain}</div>
    ${mineHtml}
    <div class="trans-model">
      <div class="lbl">Version soutenue <button class="spk sm" onclick="speak('${enEsc}')" title="Écouter">🔊</button></div>
      <div class="en">${t.elevated}</div>
      ${altHtml}
    </div>
    <div class="expl" style="border-color:var(--purple)">${t.note}</div>
    <div class="sub center mt mb">Ta version était…</div>
    <div class="srsrow">
      <button class="again" onclick="doRateReg(0)">À revoir</button>
      <button class="hard" onclick="doRateReg(1)">Timide</button>
      <button class="good" onclick="doRateReg(2)">Soignée</button>
      <button class="easy" onclick="doRateReg(3)">Élégante</button>
    </div>
  `;
  window.scrollTo(0, 0);
}
function doRateReg(rating) {
  const i = RG.queue[RG.pos];
  rateRegister(i, rating);
  RG.done++;
  bumpDaily('trans');
  if (rating === 0) RG.queue.push(i);
  RG.pos++;
  touchDay();
  renderRegCard();
}
function finishReg() {
  touchDay(); save();
  app.innerHTML = `
    <div class="card big">
      <div class="em">✨</div>
      <div class="score" style="color:var(--good)">+${RG.done}</div>
      <div class="lab">tournure(s) travaillée(s)</div>
      <div class="mt sub">Un registre soutenu se construit tournure par tournure. C'est la marque d'un anglais vraiment maîtrisé.</div>
    </div>
    <button class="btn" onclick="renderRegisterHome()">Terminé</button>
    ${buildRegQueue(regCat).length ? `<button class="btn sec mt" onclick="startReg()">Continuer (${buildRegQueue(regCat).length})</button>` : ''}
  `;
}

/* ---------- Boot ---------- */
if (!S.badges) S.badges = [];
if (!S.verbs) S.verbs = {};   // deck verbes irréguliers (ancienne progression sans cette clé)
if (!S.plume || typeof S.plume !== 'object') S.plume = { essays: [], draft: null, seen: {} }; // atelier d'écriture
if (!S.dia || typeof S.dia !== 'object') S.dia = { srs: {}, voice: 'us', lineDir: 'shadow', stats: {} }; // prononciation
if (!S.audioSpeed) S.audioSpeed = S.slowAudio ? 'slow' : 'normal';
// Migration silencieuse : si des trophées sont déjà mérités mais jamais enregistrés, on les scelle sans notifier.
if (S.badges.length === 0) { const pre = earnedIds(); if (pre.length) { S.badges = pre; save(); } }
touchDay();
/* Première ouverture : on atterrit sur la parole, pas sur un test de niveau. */
if (S.firstRun) { S.firstRun = false; save(); view = 'parler'; }
render();

/* ---------- Service worker ---------- */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

/* ── synchro téléphone ↔ ordi (même coffre privé que Le Pointage) ──
   À l'ouverture et au retour sur l'app : on récupère ce que l'autre appareil
   a fait. En quittant l'app, et 4 s après chaque changement : on envoie. */
if (window.AppsSync) {
  AppsSync.onChange(l => { if (l.indexOf('t990') < 0) return;
    S = load(); try { if (view === 'home') render(); else refreshHeader(); } catch (e) {} });
  const appsGo = () => { if (AppsSync.enabled()) AppsSync.run(['t990']); };
  appsGo();
  document.addEventListener('visibilitychange', () => { if (!AppsSync.enabled()) return;
    if (document.visibilityState === 'visible') appsGo(); else AppsSync.soon(0, ['t990']); });
}
