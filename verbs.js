/* ============================================================
   990 — VERBES IRRÉGULIERS : système Anki à part (SM-2)
   Doit se charger AVANT app.js (les fonctions ne s'exécutent
   qu'après le boot, via les onclick / le rendu).
   État de révision : S.verbs  (index -> {ease, interval, reps, due, introduced})

   Schéma d'une entrée :
   [ base, prétérit, participe passé, français, note?, piège? ]
   - Les variantes valides sont séparées par « / » (ex. "learnt/learned").
     La 1re variante sert à l'audio et au classement par motif.
   - note   : explication courte (piège, prononciation, BrE/AmE…)
   - piège  : 1 si c'est un piège classique à l'oral (chip ⚠️ Pièges)
   ============================================================ */
window.IRREGULAR_VERBS = [

  /* ---- Le socle : les plus fréquents ---- */
  ["be", "was/were", "been", "être"],
  ["have", "had", "had", "avoir"],
  ["do", "did", "done", "faire"],
  ["say", "said", "said", "dire"],
  ["go", "went", "gone", "aller"],
  ["get", "got", "got/gotten", "obtenir · devenir", "Participe amér. « gotten » ; brit. « got ».", 1],
  ["make", "made", "made", "faire · fabriquer"],
  ["know", "knew", "known", "savoir · connaître"],
  ["think", "thought", "thought", "penser"],
  ["take", "took", "taken", "prendre"],
  ["see", "saw", "seen", "voir"],
  ["come", "came", "come", "venir"],
  ["give", "gave", "given", "donner"],
  ["find", "found", "found", "trouver", "≠ found / founded / founded = fonder (régulier).", 1],
  ["tell", "told", "told", "dire · raconter"],
  ["become", "became", "become", "devenir"],
  ["leave", "left", "left", "partir · laisser"],
  ["feel", "felt", "felt", "(res)sentir"],
  ["bring", "brought", "brought", "apporter"],
  ["begin", "began", "begun", "commencer"],
  ["keep", "kept", "kept", "garder"],
  ["hold", "held", "held", "tenir"],
  ["write", "wrote", "written", "écrire"],
  ["stand", "stood", "stood", "être debout · supporter"],
  ["hear", "heard", "heard", "entendre", "Se prononce /hɜːd/ (« heurd »)."],
  ["let", "let", "let", "laisser · permettre"],
  ["mean", "meant", "meant", "signifier · vouloir dire", "« meant » se prononce /ment/."],
  ["set", "set", "set", "poser · régler"],
  ["meet", "met", "met", "rencontrer"],
  ["run", "ran", "run", "courir"],

  /* ---- Très fréquents ---- */
  ["pay", "paid", "paid", "payer", "Orthographe : « paid », pas « payed »."],
  ["sit", "sat", "sat", "s'asseoir · être assis"],
  ["speak", "spoke", "spoken", "parler"],
  ["lead", "led", "led", "mener · conduire", "Prononciation : /liːd/ → /led/ (comme « red »).", 1],
  ["read", "read", "read", "lire", "Écriture identique, prononciation change : /riːd/ → /red/ → /red/.", 1],
  ["grow", "grew", "grown", "grandir · pousser"],
  ["lose", "lost", "lost", "perdre", "≠ « loose » (adjectif = lâche)."],
  ["fall", "fell", "fallen", "tomber"],
  ["send", "sent", "sent", "envoyer"],
  ["build", "built", "built", "construire"],
  ["understand", "understood", "understood", "comprendre"],
  ["draw", "drew", "drawn", "dessiner · tirer"],
  ["break", "broke", "broken", "casser · briser"],
  ["spend", "spent", "spent", "dépenser · passer (du temps)"],
  ["cut", "cut", "cut", "couper"],
  ["rise", "rose", "risen", "s'élever · se lever (astre)", "Intransitif. ≠ raise / raised = lever qqch (régulier, transitif).", 1],
  ["drive", "drove", "driven", "conduire (véhicule)"],
  ["buy", "bought", "bought", "acheter"],
  ["wear", "wore", "worn", "porter (un vêtement)"],
  ["choose", "chose", "chosen", "choisir", "≠ « chose » /tʃəʊz/ ; base « choose » /tʃuːz/."],
  ["seek", "sought", "sought", "chercher · rechercher"],
  ["throw", "threw", "thrown", "lancer · jeter"],
  ["catch", "caught", "caught", "attraper"],
  ["deal", "dealt", "dealt", "traiter · distribuer (cartes)", "« dealt » se prononce /delt/."],
  ["win", "won", "won", "gagner", "« won » se prononce /wʌn/ (comme « one »)."],
  ["forget", "forgot", "forgotten", "oublier"],
  ["lay", "laid", "laid", "poser · déposer", "Transitif (lay something). Piège avec « lie ».", 1],
  ["sell", "sold", "sold", "vendre"],
  ["fight", "fought", "fought", "combattre · se battre"],
  ["teach", "taught", "taught", "enseigner · apprendre à qqn"],

  /* ---- Voyelle qui change ---- */
  ["eat", "ate", "eaten", "manger", "« ate » : /et/ (brit.) ou /eɪt/ (amér.)."],
  ["bear", "bore", "borne", "supporter · porter", "Participe « borne » ; mais « born » = né (forme passive figée).", 1],
  ["lie", "lay", "lain", "être allongé · s'allonger", "Intransitif. Piège : lie/lay/lain. Mentir = lie/lied/lied (régulier).", 1],
  ["hang", "hung", "hung", "accrocher · suspendre", "« hanged » seulement pour pendre (exécuter) qqn.", 1],
  ["shake", "shook", "shaken", "secouer · trembler"],
  ["sing", "sang", "sung", "chanter"],
  ["drink", "drank", "drunk", "boire", "« drunk » aussi adjectif = ivre."],
  ["swim", "swam", "swum", "nager"],
  ["ring", "rang", "rung", "sonner · appeler"],
  ["sink", "sank", "sunk", "couler · sombrer"],
  ["spring", "sprang", "sprung", "bondir · jaillir"],
  ["shrink", "shrank", "shrunk", "rétrécir"],
  ["swing", "swung", "swung", "se balancer · osciller"],
  ["sting", "stung", "stung", "piquer (insecte)"],
  ["stink", "stank", "stunk", "puer · sentir mauvais"],
  ["cling", "clung", "clung", "s'accrocher · se cramponner"],
  ["fling", "flung", "flung", "jeter (violemment)"],
  ["wring", "wrung", "wrung", "tordre · essorer"],
  ["string", "strung", "strung", "enfiler · tendre (une corde)"],
  ["blow", "blew", "blown", "souffler"],
  ["fly", "flew", "flown", "voler (dans les airs)"],
  ["tear", "tore", "torn", "déchirer", "Base /teər/ ; ≠ « tear » /tɪər/ = larme."],
  ["swear", "swore", "sworn", "jurer"],
  ["freeze", "froze", "frozen", "geler · congeler"],
  ["steal", "stole", "stolen", "voler · dérober"],
  ["weave", "wove", "woven", "tisser"],
  ["wake", "woke", "woken", "(se) réveiller"],
  ["bite", "bit", "bitten", "mordre"],
  ["hide", "hid", "hidden", "(se) cacher"],
  ["ride", "rode", "ridden", "monter (à cheval, à vélo)"],

  /* ---- -ck / -g / -ide ---- */
  ["strike", "struck", "struck", "frapper · faire grève", "Participe adjectival parfois « stricken »."],
  ["dig", "dug", "dug", "creuser"],
  ["stick", "stuck", "stuck", "coller · coincer"],
  ["spin", "spun", "spun", "filer · tournoyer"],
  ["slide", "slid", "slid", "glisser"],
  ["shine", "shone", "shone", "briller", "« shined » quand c'est transitif = cirer / faire briller.", 1],
  ["shoot", "shot", "shot", "tirer (arme) · filmer"],
  ["feed", "fed", "fed", "nourrir"],
  ["flee", "fled", "fled", "fuir · s'enfuir"],
  ["breed", "bred", "bred", "élever · (se) reproduire"],
  ["bleed", "bled", "bled", "saigner"],
  ["speed", "sped", "sped", "filer · accélérer", "« speeded » pour « speed up » (accélérer un processus)."],
  ["lend", "lent", "lent", "prêter"],
  ["bend", "bent", "bent", "plier · courber"],

  /* ---- BrE -t / AmE -ed ---- */
  ["spell", "spelt/spelled", "spelt/spelled", "épeler · orthographier", "Brit. « spelt » · amér. « spelled »."],
  ["smell", "smelt/smelled", "smelt/smelled", "sentir (une odeur)", "Brit. « smelt » · amér. « smelled »."],
  ["spill", "spilt/spilled", "spilt/spilled", "renverser (un liquide)"],
  ["spoil", "spoilt/spoiled", "spoilt/spoiled", "gâcher · gâter"],
  ["burn", "burnt/burned", "burnt/burned", "brûler"],
  ["learn", "learnt/learned", "learnt/learned", "apprendre", "Brit. « learnt » · amér. « learned »."],
  ["dream", "dreamt/dreamed", "dreamt/dreamed", "rêver", "« dreamt » /dremt/."],
  ["lean", "leant/leaned", "leant/leaned", "s'appuyer · se pencher"],
  ["leap", "leapt/leaped", "leapt/leaped", "bondir · sauter"],
  ["kneel", "knelt/kneeled", "knelt/kneeled", "s'agenouiller"],
  ["dwell", "dwelt/dwelled", "dwelt/dwelled", "résider · s'attarder (sur)"],

  /* ---- -eep / -ep ---- */
  ["creep", "crept", "crept", "ramper · se faufiler"],
  ["sweep", "swept", "swept", "balayer"],
  ["weep", "wept", "wept", "pleurer (soutenu)"],
  ["sleep", "slept", "slept", "dormir"],
  ["beat", "beat", "beaten", "battre · vaincre", "Prétérit identique à la base ; participe « beaten ».", 1],

  /* ---- Invariables (formes identiques) ---- */
  ["hurt", "hurt", "hurt", "blesser · faire mal"],
  ["cost", "cost", "cost", "coûter"],
  ["cast", "cast", "cast", "lancer · distribuer (les rôles)"],
  ["burst", "burst", "burst", "éclater · exploser"],
  ["thrust", "thrust", "thrust", "enfoncer · pousser"],
  ["shut", "shut", "shut", "fermer"],
  ["split", "split", "split", "fendre · diviser · se séparer"],
  ["spread", "spread", "spread", "étaler · (se) répandre", "Tout se prononce /spred/."],
  ["quit", "quit", "quit", "quitter · arrêter", "« quitted » possible mais rare."],
  ["bet", "bet", "bet", "parier"],
  ["shed", "shed", "shed", "verser (larmes) · perdre (peau, feuilles)"],
  ["rid", "rid", "rid", "débarrasser", "« get rid of » = se débarrasser de."],
  ["hit", "hit", "hit", "frapper · heurter"],
  ["put", "put", "put", "mettre · poser"],
  ["upset", "upset", "upset", "contrarier · bouleverser"],
  ["offset", "offset", "offset", "compenser · contrebalancer"],
  ["bid", "bid", "bid", "enchérir · faire une offre", "Sens « ordonner / souhaiter » : bade / bidden (soutenu).", 1],
  ["wed", "wed", "wed", "épouser", "« wedded » aussi accepté."],
  ["knit", "knit", "knit", "tricoter", "« knitted » aussi (surtout au sens propre)."],
  ["slit", "slit", "slit", "fendre · inciser"],

  /* ---- -ind → -ound ---- */
  ["bind", "bound", "bound", "lier · relier"],
  ["wind", "wound", "wound", "enrouler · remonter (une montre)", "Prononciation : /waɪnd/ → /waʊnd/. ≠ wound /wuːnd/ = blessure.", 1],
  ["grind", "ground", "ground", "moudre · broyer"],

  /* ---- Participes en -n ---- */
  ["light", "lit", "lit", "allumer · éclairer", "« lighted » possible, surtout en adjectif."],
  ["sew", "sewed", "sewn", "coudre", "Prétérit régulier « sewed », participe « sewn »."],
  ["sow", "sowed", "sown", "semer"],
  ["mow", "mowed", "mown", "tondre · faucher"],
  ["saw", "sawed", "sawn", "scier"],
  ["show", "showed", "shown", "montrer", "Prétérit régulier « showed », participe « shown »."],
  ["prove", "proved", "proven", "prouver", "Participe « proven » ou « proved »."],

  /* ---- Avancé / composés ---- */
  ["arise", "arose", "arisen", "survenir · se présenter (problème)"],
  ["awake", "awoke", "awoken", "(s')éveiller"],
  ["swell", "swelled", "swollen", "enfler · gonfler"],
  ["tread", "trod", "trodden", "fouler · marcher sur"],
  ["forbid", "forbade", "forbidden", "interdire"],
  ["forgive", "forgave", "forgiven", "pardonner"],
  ["mistake", "mistook", "mistaken", "se méprendre · confondre"],
  ["misunderstand", "misunderstood", "misunderstood", "mal comprendre"],
  ["mislead", "misled", "misled", "induire en erreur · tromper"],
  ["mislay", "mislaid", "mislaid", "égarer"],
  ["overcome", "overcame", "overcome", "surmonter"],
  ["undergo", "underwent", "undergone", "subir"],
  ["undertake", "undertook", "undertaken", "entreprendre"],
  ["undo", "undid", "undone", "défaire · annuler"],
  ["withdraw", "withdrew", "withdrawn", "(se) retirer · retirer (argent)"],
  ["withhold", "withheld", "withheld", "retenir · refuser de donner"],
  ["withstand", "withstood", "withstood", "résister à · supporter"],
  ["foresee", "foresaw", "foreseen", "prévoir · anticiper"],
  ["foretell", "foretold", "foretold", "prédire"],
  ["overtake", "overtook", "overtaken", "dépasser · doubler"],
  ["oversee", "oversaw", "overseen", "superviser"],
  ["overhear", "overheard", "overheard", "surprendre (une conversation)"],
  ["oversleep", "overslept", "overslept", "se réveiller trop tard"],
  ["override", "overrode", "overridden", "passer outre · annuler"],
  ["overdo", "overdid", "overdone", "exagérer · trop cuire"],
  ["outdo", "outdid", "outdone", "surpasser"],
  ["outgrow", "outgrew", "outgrown", "devenir trop grand pour"],
  ["rebuild", "rebuilt", "rebuilt", "reconstruire"],
  ["repay", "repaid", "repaid", "rembourser"],
  ["rewrite", "rewrote", "rewritten", "réécrire"],
  ["redo", "redid", "redone", "refaire"],
  ["remake", "remade", "remade", "refaire (film, etc.)"],
  ["uphold", "upheld", "upheld", "maintenir · faire respecter"],
  ["forecast", "forecast", "forecast", "prévoir (météo, chiffres)"],
  ["broadcast", "broadcast", "broadcast", "diffuser (radio/TV)"],
  ["input", "input", "input", "saisir (des données)"],
  ["spit", "spat", "spat", "cracher", "Prétérit amér. souvent « spit »."],
  ["slay", "slew", "slain", "tuer · terrasser"],
  ["stride", "strode", "stridden", "marcher à grands pas"],
  ["behold", "beheld", "beheld", "contempler (soutenu)"],

  /* ---- Littéraire / soutenu ---- */
  ["forsake", "forsook", "forsaken", "abandonner · délaisser (soutenu)"],
  ["thrive", "thrived/throve", "thrived/thriven", "prospérer · s'épanouir"],
  ["dive", "dived", "dived", "plonger", "Prétérit amér. souvent « dove »."],
  ["shave", "shaved", "shaven/shaved", "(se) raser", "« shaven » surtout en adjectif (clean-shaven)."],
  ["strew", "strewed", "strewn", "joncher · éparpiller"],
  ["smite", "smote", "smitten", "frapper (soutenu)", "« smitten » = frappé d'amour, épris."],
  ["beseech", "besought", "besought", "implorer · supplier (soutenu)"],
  ["bereave", "bereft", "bereft", "priver (par un deuil)"],
  ["forgo", "forwent", "forgone", "renoncer à · se passer de"],
  ["partake", "partook", "partaken", "prendre part · consommer (soutenu)"]

];

/* ============================================================
   Logique Anki (SM-2 simplifié, indépendant des autres decks)
   ============================================================ */
function verbFirst(s) { return String(s).split('/')[0].trim(); }

/* Motif des trois formes (sur la 1re variante, en minuscules) */
function verbPat(v) {
  const a = verbFirst(v[0]).toLowerCase(), b = verbFirst(v[1]).toLowerCase(), c = verbFirst(v[2]).toLowerCase();
  if (a === b && b === c) return 'AAA';
  if (a === b) return 'AAB';
  if (a === c) return 'ABA';
  if (b === c) return 'ABB';
  return 'ABC';
}
const VERB_PAT_ORDER = ['ABC', 'ABB', 'ABA', 'AAB', 'AAA'];
const VERB_PAT_LABEL = {
  ABC: '3 formes différentes', ABB: 'Prétérit = participe',
  ABA: 'Base = participe', AAB: 'Base = prétérit', AAA: 'Formes identiques'
};

function vState(i) { return S.verbs[i] || { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false }; }
function rateVerb(i, rating) {
  const c = vState(i);
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
  S.verbs[i] = c; addXp(rating === 0 ? 2 : 6); save();
}
function verbSeen() { let n = 0; for (const i in S.verbs) if (S.verbs[i].introduced) n++; return n; }
function verbMastered() { let n = 0; for (const i in S.verbs) if (S.verbs[i].interval >= 21) n++; return n; }
function verbDueCount() {
  const now = Date.now(); let n = 0;
  for (const i in S.verbs) { const c = S.verbs[i]; if (c.introduced && c.due <= now) n++; }
  return n;
}
/* Files du jour : cap identique à l'esprit des autres decks */
const VERB_NEW_PER_DAY = 12;
function buildVerbQueue(cat) {
  const now = Date.now();
  const due = [], news = [];
  IRREGULAR_VERBS.forEach((v, i) => {
    if (cat && cat !== 'Tous') {
      if (cat === 'PIEGE') { if (!v[5]) return; }
      else if (verbPat(v) !== cat) return;
    }
    const st = S.verbs[i];
    if (st && st.introduced) { if (st.due <= now) due.push(i); }
    else news.push(i);
  });
  shuffle(due); shuffle(news);
  const cap = (cat && cat !== 'Tous') ? news.length : VERB_NEW_PER_DAY;
  return due.concat(news.slice(0, cap));
}
function verbCatsPresent() {
  const present = new Set(IRREGULAR_VERBS.map(verbPat));
  return VERB_PAT_ORDER.filter(p => present.has(p));
}
function verbHasTraps() { return IRREGULAR_VERBS.some(v => v[5]); }

/* Audio : enchaîne les trois formes, « go, went, gone » */
function speakVerbForms(v) {
  speak(verbFirst(v[0]) + ', ' + verbFirst(v[1]) + ', ' + verbFirst(v[2]));
}

/* ============================================================
   UI
   ============================================================ */
let verbCat = 'Tous';
function setVerbCat(c) { verbCat = c; renderVerbsHome(); }

function renderVerbsHome() {
  if (!S.verbs) S.verbs = {};
  const total = IRREGULAR_VERBS.length;
  const chips = ['Tous'].concat(verbCatsPresent());
  const chipHtml = chips.map(c => {
    const n = c === 'Tous' ? total : IRREGULAR_VERBS.filter(v => verbPat(v) === c).length;
    return `<button class="segchip ${verbCat === c ? 'on' : ''}" onclick="setVerbCat('${c}')">${c === 'Tous' ? 'Tous' : VERB_PAT_LABEL[c]} <span class="cnt">${n}</span></button>`;
  }).join('');
  const trapChip = verbHasTraps()
    ? `<button class="segchip ${verbCat === 'PIEGE' ? 'on' : ''}" onclick="setVerbCat('PIEGE')" style="border-color:var(--bad)">⚠️ Pièges <span class="cnt">${IRREGULAR_VERBS.filter(v => v[5]).length}</span></button>`
    : '';
  const qlen = buildVerbQueue(verbCat).length;
  const due = verbDueCount();

  app.innerHTML = `
    <div class="card">
      <h2>⚡ Verbes irréguliers</h2>
      <div class="sub">Le deck qui « ne pardonne pas » à l'oral. On te donne la <b style="color:var(--txt)">base</b> (+ le sens) : récite le <b style="color:var(--txt)">prétérit</b> et le <b style="color:var(--txt)">participe passé</b>, puis écoute-les enchaînés. Révisions espacées façon Anki, indépendantes des autres cartes.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${verbSeen()}<span style="font-size:15px;color:var(--muted)"> / ${total}</span></div><div class="sub">verbes vus</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${verbMastered()}</div><div class="sub">ancrés (≥21j)</div></div>
      </div>
    </div>

    <div class="card">
      <h2 style="font-size:15px">Cible un motif de conjugaison</h2>
      <div class="sub" style="margin-bottom:8px">Les verbes se mémorisent par famille : mêmes changements de voyelle, prétérit = participe, formes identiques…</div>
      <div class="segwrap">${chipHtml}${trapChip}</div>
    </div>

    <button class="btn" onclick="startVerbs()" ${qlen === 0 ? 'disabled' : ''}>
      ${qlen === 0 ? 'Tout est à jour ici 🎉' : `Réviser · ${qlen} verbe(s)${due ? ` · ${due} dû(s)` : ''}`}
    </button>
    <button class="btn sec mt" onclick="renderVerbTable()">📋 Voir la liste complète (${total})</button>
    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ---- Session de révision ---- */
let VB = null;
function startVerbs() {
  const queue = buildVerbQueue(verbCat);
  if (!queue.length) { toast('Rien à réviser ici pour le moment 🎉'); return; }
  VB = { queue, pos: 0, done: 0, shown: false };
  renderVerbCard();
}
function renderVerbCard() {
  if (VB.pos >= VB.queue.length) return finishVerbs();
  const i = VB.queue[VB.pos];
  const v = IRREGULAR_VERBS[i];
  const isNew = !S.verbs[i] || !S.verbs[i].introduced;
  const base = v[0], fr = v[3];
  const psize = base.length > 12 ? '24px' : '32px';
  VB.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>${isNew ? '🆕 Nouveau' : '🔁 Révision'}${v[5] ? ' · <span style="color:var(--bad)">⚠️ piège</span>' : ''}</span><span>${VB.pos + 1} / ${VB.queue.length}</span></div>
    <div class="flash" onclick="flipVerb()">
      <div class="theme">Base · ${VERB_PAT_LABEL[verbPat(v)]}</div>
      <div class="front" style="font-size:${psize}">${base}</div>
      <div class="ex" style="margin-top:6px;font-style:normal;color:var(--muted)">${fr}</div>
      <div id="vback" class="hidden">
        <div class="back" style="font-size:20px;line-height:1.5">
          <span style="color:var(--muted);font-size:13px">prétérit</span> ${v[1]}<br>
          <span style="color:var(--muted);font-size:13px">participe</span> ${v[2]}
        </div>
        ${v[4] ? `<div class="ex" style="margin-top:12px">💡 ${v[4]}</div>` : ''}
      </div>
      <div id="vhint" class="tap">Récite prétérit + participe · touche pour révéler ▽</div>
    </div>
    <button id="vspk" class="spk hidden" onclick="speakVerbForms(IRREGULAR_VERBS[${i}]);event.stopPropagation()" title="Écouter les trois formes">🔊</button>
    <div id="vrate"></div>
  `;
}
function flipVerb() {
  if (VB.shown) return;
  VB.shown = true;
  document.getElementById('vback').classList.remove('hidden');
  document.getElementById('vhint').classList.add('hidden');
  const s = document.getElementById('vspk'); if (s) s.classList.remove('hidden');
  const i = VB.queue[VB.pos];
  speakVerbForms(IRREGULAR_VERBS[i]);
  document.getElementById('vrate').innerHTML = `
    <div class="srsrow">
      <button class="again" onclick="doRateVerb(0)">Raté<small>${verbNextLabel(i, 0)}</small></button>
      <button class="hard" onclick="doRateVerb(1)">Dur<small>${verbNextLabel(i, 1)}</small></button>
      <button class="good" onclick="doRateVerb(2)">Bien<small>${verbNextLabel(i, 2)}</small></button>
      <button class="easy" onclick="doRateVerb(3)">Facile<small>${verbNextLabel(i, 3)}</small></button>
    </div>`;
}
/* Aperçu du prochain intervalle (miroir de la logique de rateVerb) */
function verbNextLabel(i, rating) {
  const c = vState(i);
  if (rating === 0) return '<1min';
  let iv;
  if (c.interval < 1) iv = rating === 3 ? 4 : 1;
  else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; iv = Math.round(c.interval * m); }
  iv = Math.max(1, iv);
  return iv < 30 ? iv + 'j' : (Math.round(iv / 30) + 'mois');
}
function doRateVerb(rating) {
  const i = VB.queue[VB.pos];
  rateVerb(i, rating);
  VB.done++;
  if (typeof bumpDaily === 'function') bumpDaily('cards');
  if (rating === 0) VB.queue.splice(Math.min(VB.pos + 5, VB.queue.length), 0, i);
  VB.pos++;
  touchDay();
  renderVerbCard();
}
function finishVerbs() {
  touchDay(); save();
  app.innerHTML = `
    <div class="card big">
      <div class="em">⚡</div>
      <div class="score" style="color:var(--good)">+${VB.done}</div>
      <div class="lab">verbe(s) travaillé(s)</div>
      <div class="mt sub">Dis-les à voix haute, en boucle : « go, went, gone ». C'est l'oral qui scelle la mémoire.</div>
    </div>
    <button class="btn" onclick="renderVerbsHome()">Terminé</button>
    ${buildVerbQueue(verbCat).length ? `<button class="btn sec mt" onclick="startVerbs()">Continuer (${buildVerbQueue(verbCat).length})</button>` : ''}
  `;
  window.scrollTo(0, 0);
}

/* ---- Liste complète consultable ---- */
function verbStatusTag(i) {
  const st = S.verbs[i];
  if (!st || !st.introduced) return { cls: 'st-new', lab: 'nouveau' };
  if (st.interval >= 21) return { cls: 'st-mat', lab: 'ancré' };
  return { cls: 'st-lrn', lab: 'en cours' };
}
function verbTableRows(filter) {
  const q = (filter || '').trim().toLowerCase();
  return IRREGULAR_VERBS.map((v, i) => ({ v, i }))
    .filter(({ v }) => !q || v[0].toLowerCase().includes(q) || v[3].toLowerCase().includes(q)
      || v[1].toLowerCase().includes(q) || v[2].toLowerCase().includes(q))
    .map(({ v, i }) => {
      const t = verbStatusTag(i);
      return `<div class="vrow">
        <button class="spk sm" onclick="speakVerbForms(IRREGULAR_VERBS[${i}])" title="Écouter">🔊</button>
        <div class="vinfo">
          <div class="ven">${v[0]} · <span style="color:var(--accent)">${v[1]}</span> · <span style="color:var(--purple)">${v[2]}</span>${v[5] ? ' <span style="color:var(--bad)">⚠️</span>' : ''}</div>
          <div class="vfr">${v[3]}${v[4] ? ` — <span style="color:var(--dim)">${v[4]}</span>` : ''}</div>
        </div>
        <div class="vmeta"><span class="vst ${t.cls}">${t.lab}</span></div>
      </div>`;
    }).join('');
}
function filterVerbTable() {
  const el = document.getElementById('vtable');
  if (el) el.innerHTML = verbTableRows((document.getElementById('vsearch') || {}).value || '');
}
function renderVerbTable() {
  app.innerHTML = `
    <div class="card">
      <h2>📋 Les ${IRREGULAR_VERBS.length} verbes</h2>
      <div class="sub">base · <span style="color:var(--accent)">prétérit</span> · <span style="color:var(--purple)">participe</span>. Touche 🔊 pour entendre les trois formes.</div>
    </div>
    <input id="vsearch" class="transinput" style="min-height:0" placeholder="Rechercher (go, aller, went…)" oninput="filterVerbTable()">
    <div id="vtable">${verbTableRows('')}</div>
    <button class="btn ghost mt" onclick="renderVerbsHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}
