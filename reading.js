/* ============================================================
   990 — LECTURE DU JOUR : textes bilingues (EN ⇄ FR)
   - Extraits littéraires du DOMAINE PUBLIC (traduction maison)
   - Textes journalistiques / essais originaux
   Charger APRÈS data.js, AVANT app.js.
   Utilise : app, S, save(), speak(), toast(), addXp(), markStudy(), setView().
   Structure : { id, type, title, author, intro, pairs:[[en,fr],...], gloss:[[en,fr],...] }
   ============================================================ */
window.READINGS = [
  {
    id: "austen-pride",
    type: "Littérature",
    title: "Pride and Prejudice",
    author: "Jane Austen, 1813",
    intro: "L'ouverture la plus célèbre du roman anglais : une phrase d'une ironie parfaite sur le mariage, l'argent et les convenances.",
    pairs: [
      ["It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
       "C'est une vérité universellement reconnue qu'un célibataire pourvu d'une belle fortune doit avoir besoin d'une épouse."],
      ["However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.",
       "Aussi peu que l'on connaisse les sentiments ou les vues d'un tel homme à son arrivée dans une région, cette vérité est si bien ancrée dans l'esprit des familles voisines qu'on le considère comme la propriété légitime de l'une ou l'autre de leurs filles."]
    ],
    gloss: [["universally acknowledged", "universellement reconnu"], ["in possession of", "pourvu de / en possession de"], ["in want of", "ayant besoin de"], ["rightful", "légitime"], ["surrounding", "environnant / voisin"]]
  },
  {
    id: "dickens-two-cities",
    type: "Littérature",
    title: "A Tale of Two Cities",
    author: "Charles Dickens, 1859",
    intro: "L'ouverture d'« Un conte de deux cités » : une cascade d'antithèses sur une époque de contrastes, à la veille de la Révolution française.",
    pairs: [
      ["It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity.",
       "C'était le meilleur des temps, c'était le pire des temps, c'était l'âge de la sagesse, c'était l'âge de la folie, c'était l'époque de la foi, c'était l'époque de l'incrédulité."],
      ["It was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
       "C'était la saison de la Lumière, c'était la saison des Ténèbres, c'était le printemps de l'espérance, c'était l'hiver du désespoir."]
    ],
    gloss: [["wisdom", "la sagesse"], ["foolishness", "la folie"], ["belief", "la foi / la croyance"], ["incredulity", "l'incrédulité"], ["despair", "le désespoir"]]
  },
  {
    id: "melville-moby",
    type: "Littérature",
    title: "Moby-Dick",
    author: "Herman Melville, 1851",
    intro: "L'une des premières phrases les plus célèbres de la littérature : l'appel du large qui ouvre « Moby Dick ».",
    pairs: [
      ["Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
       "Appelez-moi Ismaël. Il y a quelques années — peu importe combien exactement — n'ayant guère ou pas d'argent en poche, et rien de particulier pour me retenir à terre, je songeai à naviguer un peu et à voir la partie aquatique du monde."]
    ],
    gloss: [["never mind", "peu importe"], ["purse", "la bourse / le porte-monnaie"], ["on shore", "à terre"], ["sail about", "naviguer (sans but précis)"], ["watery", "aquatique"]]
  },
  {
    id: "forest-network",
    type: "Presse",
    title: "The hidden network beneath the forest",
    author: "Essai · sciences",
    intro: "Un texte de vulgarisation sur le « wood wide web » : comment les arbres communiquent sous terre.",
    pairs: [
      ["Beneath the forest floor lies a network as intricate as any city. Threads of fungi wrap around the roots of trees, linking them into a vast web that scientists sometimes call the 'wood wide web'.",
       "Sous le sol de la forêt s'étend un réseau aussi complexe qu'une ville. Des filaments de champignons enlacent les racines des arbres et les relient en une immense toile que les scientifiques appellent parfois le « wood wide web »."],
      ["Through these fungal threads, trees exchange sugar, water and even chemical warnings. A tree under attack by insects can alert its neighbours, which then strengthen their defences before the danger arrives.",
       "À travers ces filaments, les arbres échangent du sucre, de l'eau et même des signaux d'alarme chimiques. Un arbre attaqué par des insectes peut prévenir ses voisins, qui renforcent alors leurs défenses avant même que le danger n'arrive."],
      ["The discovery has quietly reshaped how we picture a forest. It is not a crowd of solitary individuals competing for light, but a community bound together underground — cooperative, patient and startlingly alive.",
       "Cette découverte a discrètement bouleversé notre image de la forêt. Ce n'est pas une foule d'individus solitaires se disputant la lumière, mais une communauté liée sous terre — coopérative, patiente et étonnamment vivante."]
    ],
    gloss: [["intricate", "complexe / minutieux"], ["threads", "des filaments / des fils"], ["wrap around", "enlacer / envelopper"], ["bound together", "liés ensemble"], ["startlingly", "étonnamment / de façon saisissante"]]
  },
  {
    id: "attention-economy",
    type: "Presse",
    title: "The economy of attention",
    author: "Essai · société",
    intro: "Une réflexion sur la ressource la plus disputée de notre époque : notre attention.",
    pairs: [
      ["For most of history, information was scarce and attention was cheap. Today the balance has flipped: information is endless, and attention has become the rarest currency of all.",
       "Pendant l'essentiel de l'histoire, l'information était rare et l'attention bon marché. Aujourd'hui, l'équilibre s'est inversé : l'information est infinie, et l'attention est devenue la monnaie la plus rare qui soit."],
      ["Whole industries now compete for a few seconds of your focus. Every notification, headline and autoplay is engineered to pull your eyes back to the screen, often against your better judgement.",
       "Des industries entières se disputent désormais quelques secondes de votre concentration. Chaque notification, chaque titre, chaque lecture automatique est conçu pour ramener vos yeux vers l'écran, souvent contre votre propre gré."],
      ["The most valuable skill of the coming decades may be an old-fashioned one: the ability to decide, calmly and deliberately, what deserves your attention — and what does not.",
       "La compétence la plus précieuse des décennies à venir sera peut-être l'une des plus anciennes : savoir décider, avec calme et discernement, ce qui mérite votre attention — et ce qui ne le mérite pas."]
    ],
    gloss: [["scarce", "rare / peu abondant"], ["flipped", "s'est inversé"], ["currency", "la monnaie"], ["against your better judgement", "contre votre propre gré / à contrecœur"], ["deliberately", "délibérément / à dessein"]]
  },
  {
    id: "praise-walking",
    type: "Presse",
    title: "In praise of walking",
    author: "Essai · culture",
    intro: "Un éloge de la marche comme compagne de la pensée.",
    pairs: [
      ["There is a particular kind of thinking that only happens on foot. Sit still and ideas stall; start walking, and they begin to move with you.",
       "Il existe une forme de pensée qui ne survient qu'en marchant. Restez immobile et les idées se figent ; mettez-vous en marche, et elles se mettent à avancer avec vous."],
      ["Philosophers have long known this. From the ancient Greeks pacing their gardens to writers wandering city streets at night, walking has been a companion to thought — steady, rhythmic, unhurried.",
       "Les philosophes le savent depuis longtemps. Des Grecs de l'Antiquité arpentant leurs jardins aux écrivains errant la nuit dans les rues, la marche a toujours accompagné la pensée — régulière, rythmée, sans hâte."],
      ["Perhaps that is why a walk can untangle a problem that an hour at a desk could not. The body sets a pace, and the mind, freed from the screen, quietly catches up.",
       "C'est peut-être pour cela qu'une promenade peut dénouer un problème qu'une heure au bureau n'a pu résoudre. Le corps donne le rythme, et l'esprit, libéré de l'écran, le rejoint sans bruit."]
    ],
    gloss: [["stall", "se figer / caler"], ["pacing", "arpentant"], ["unhurried", "sans hâte / posé"], ["untangle", "démêler / dénouer"], ["catches up", "rattrape / rejoint"]]
  },
  {
    id: "cities-cool",
    type: "Presse",
    title: "When cities learn to breathe",
    author: "Reportage · environnement",
    intro: "Comment les villes tentent de se rafraîchir face aux étés de plus en plus brûlants.",
    pairs: [
      ["As summers grow fiercer, cities are discovering that concrete and glass trap heat like an oven. A single street can be several degrees hotter than the park beside it.",
       "À mesure que les étés se font plus rudes, les villes découvrent que le béton et le verre emprisonnent la chaleur comme un four. Une simple rue peut être de plusieurs degrés plus chaude que le parc voisin."],
      ["In response, planners are turning to old ideas dressed in new science: painting roofs white to bounce back sunlight, planting trees to cast shade, and reopening rivers long buried under asphalt.",
       "En réponse, les urbanistes se tournent vers de vieilles idées habillées de science nouvelle : peindre les toits en blanc pour renvoyer la lumière, planter des arbres pour faire de l'ombre, et rouvrir des rivières longtemps enfouies sous le bitume."],
      ["The goal is a city that can breathe — one that cools itself naturally, so that the hottest days become bearable without an air conditioner humming in every window.",
       "Le but est une ville capable de respirer — qui se rafraîchit d'elle-même, pour que les jours les plus chauds deviennent supportables sans un climatiseur ronronnant à chaque fenêtre."]
    ],
    gloss: [["fiercer", "plus rudes / plus intenses"], ["trap", "emprisonner / piéger"], ["bounce back", "renvoyer / réfléchir"], ["cast shade", "faire de l'ombre"], ["bearable", "supportable"]]
  },
  {
    id: "deep-sea",
    type: "Presse",
    title: "The deep sea, our last frontier",
    author: "Essai · sciences",
    intro: "Les grands fonds : le plus vaste territoire encore inexploré de la planète.",
    pairs: [
      ["We have mapped the surface of Mars in finer detail than the floor of our own oceans. Below a certain depth, sunlight vanishes and the water turns to perpetual night.",
       "Nous avons cartographié la surface de Mars avec plus de précision que le fond de nos propres océans. Sous une certaine profondeur, la lumière du Soleil disparaît et l'eau se change en nuit perpétuelle."],
      ["Yet this darkness is far from empty. Creatures glow with their own light, feed on chemicals seeping from the seabed, and survive pressures that would crush a submarine.",
       "Pourtant, cette obscurité est loin d'être vide. Des créatures brillent de leur propre lumière, se nourrissent de substances qui suintent du fond, et survivent à des pressions qui écraseraient un sous-marin."],
      ["Each expedition brings back species no one has ever seen. The deep sea remains, quite literally, the largest unexplored place on Earth — a frontier hidden not in the sky, but beneath our feet.",
       "Chaque expédition rapporte des espèces que personne n'a jamais vues. Les grands fonds demeurent, au sens propre, le plus vaste lieu inexploré de la Terre — une frontière cachée non dans le ciel, mais sous nos pieds."]
    ],
    gloss: [["floor", "le fond (marin)"], ["vanishes", "disparaît"], ["glow", "briller / luire"], ["seeping", "qui suinte / s'infiltre"], ["crush", "écraser / broyer"]]
  },
  {
    id: "empty-platform",
    type: "Littérature",
    title: "The empty platform",
    author: "Récit original",
    intro: "Une courte vignette littéraire écrite pour l'app : un instant suspendu sur un quai désert.",
    pairs: [
      ["The last train had gone. On the empty platform, a single lamp buzzed against the dark, and the cold came up through the soles of his shoes.",
       "Le dernier train était parti. Sur le quai désert, une unique lampe bourdonnait contre l'obscurité, et le froid remontait par la semelle de ses chaussures."],
      ["He had missed it by a minute — the kind of minute that decides nothing and everything. Somewhere down the line, the red lights shrank and were gone, and the silence closed in behind them like water.",
       "Il l'avait manqué d'une minute — le genre de minute qui ne décide rien et tout à la fois. Quelque part au bout de la voie, les feux rouges rétrécirent puis s'évanouirent, et le silence se referma derrière eux comme de l'eau."],
      ["He sat down on the cold bench and, for the first time in months, felt no hurry at all. There was nowhere left to be. He almost smiled.",
       "Il s'assit sur le banc glacé et, pour la première fois depuis des mois, ne ressentit aucune hâte. Il n'y avait plus nulle part où être. Il faillit sourire."]
    ],
    gloss: [["buzzed", "bourdonnait / grésillait"], ["soles", "les semelles"], ["shrank", "rétrécirent (to shrink)"], ["closed in", "se referma / se resserra"], ["hurry", "la hâte / la précipitation"]]
  }
];

/* ---------------- rendu ---------------- */
let _readMode = 'bi';               // 'bi' = bilingue ; 'en' = anglais (traduction cachée)
function _readingOfDay(){ return READINGS[Math.floor(Date.now()/864e5) % READINGS.length]; }
function _readDone(id){ return !!(S.readings && S.readings[id]); }
function _typeColor(t){ return t === 'Littérature' ? 'var(--purple)' : 'var(--blue)'; }

function renderReadingHome(){
  view = 'reading';
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('on'));
  window.scrollTo(0,0);
  const feat = _readingOfDay();
  const totalRead = READINGS.filter(r => _readDone(r.id)).length;
  const list = READINGS.map(r => `
    <button class="lrow ${_readDone(r.id)?'done':''}" onclick="openReading('${r.id}')">
      <div class="n">${_readDone(r.id)?'✓':'📖'}</div>
      <div class="info"><div class="tt">${r.title}</div><div class="tg"><span style="color:${_typeColor(r.type)};font-weight:700">${r.type}</span> · ${r.author}</div></div>
    </button>`).join('');
  app.innerHTML = `
    <button class="btn ghost" style="width:auto;padding:8px 14px;margin-bottom:12px" onclick="setView('home')">‹ Accueil</button>
    <div class="card" style="background:linear-gradient(135deg,#9d7bff18,var(--card));border-color:#9d7bff55">
      <div class="coach-h" style="color:var(--purple)">📖 Lecture du jour</div>
      <h2 class="mt" style="font-size:20px">${feat.title}</h2>
      <div class="sub" style="margin-top:2px"><span style="color:${_typeColor(feat.type)};font-weight:700">${feat.type}</span> · ${feat.author}</div>
      <div class="sub mt">${feat.intro}</div>
      <button class="btn mt" onclick="openReading('${feat.id}')">${_readDone(feat.id)?'Relire':'Lire maintenant'}</button>
    </div>
    <div class="sub mb" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">
      Toutes les lectures · ${totalRead}/${READINGS.length} lues
    </div>
    ${list}
    <div class="card mt"><div class="sub">Chaque lecture t'apporte du vocabulaire en contexte, un extrait audio, et valide l'objectif « étudier » du jour. Un nouveau texte est mis en avant chaque jour.</div></div>
  `;
}

function openReading(id){
  const r = READINGS.find(x => x.id === id); if(!r) return;
  view = 'reading';
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('on'));
  window.scrollTo(0,0);
  const paras = r.pairs.map((p, i) => {
    const fr = _readMode === 'bi'
      ? `<div class="rfr">${p[1]}</div>`
      : `<button class="btnrev" onclick="revealFr(this)">Voir la traduction</button><div class="rfr hidden">${p[1]}</div>`;
    return `<div class="rpar">
        <div class="ren">${p[0]} <button class="rspk" onclick="speakPara('${id}',${i})">🔊</button></div>
        ${fr}
      </div>`;
  }).join('');
  const gloss = r.gloss.map(g => `<div class="vrow"><div class="vinfo"><div class="ven">${g[0]}</div><div class="vfr">${g[1]}</div></div></div>`).join('');
  app.innerHTML = `
    <button class="btn ghost" style="width:auto;padding:8px 14px;margin-bottom:12px" onclick="renderReadingHome()">‹ Lectures</button>
    <h2 style="font-size:22px">${r.title}</h2>
    <div class="sub" style="margin-top:2px;margin-bottom:12px"><span style="color:${_typeColor(r.type)};font-weight:700">${r.type}</span> · ${r.author}</div>
    <div class="segwrap mb">
      <button class="segchip ${_readMode==='bi'?'on':''}" onclick="setReadMode('bi','${id}')">Bilingue</button>
      <button class="segchip ${_readMode==='en'?'on':''}" onclick="setReadMode('en','${id}')">Anglais seul</button>
      <button class="segchip" onclick="speakAll('${id}')">🔊 Écouter tout</button>
    </div>
    <div class="reading">${paras}</div>
    <div class="card mt"><h2 style="font-size:16px;margin-bottom:8px">Mots & expressions à retenir</h2>${gloss}</div>
    <button class="btn mt" onclick="markReadingDone('${id}')">${_readDone(id)?'✓ Déjà lu — revalider l’objectif':'Marquer comme lu (+15 XP)'}</button>
  `;
}

function setReadMode(m, id){ _readMode = m; openReading(id); }
function revealFr(btn){ const fr = btn.nextElementSibling; fr.classList.toggle('hidden');
  btn.textContent = fr.classList.contains('hidden') ? 'Voir la traduction' : 'Masquer la traduction'; }
function speakPara(id, i){ const r = READINGS.find(x => x.id === id); if(r) speak(r.pairs[i][0]); }
function speakAll(id){ const r = READINGS.find(x => x.id === id); if(r) speak(r.pairs.map(p => p[0]).join(' ')); }
function markReadingDone(id){
  if(!S.readings) S.readings = {};
  const already = _readDone(id);
  S.readings[id] = todayStr();
  markStudy();                 // valide l'objectif « étudier » du jour
  if(!already){ addXp(15); toast('Lu ✓ · +15 XP · objectif « étudier » validé'); }
  else { save(); toast('Objectif « étudier » validé ✓'); }
  renderReadingHome();
}
