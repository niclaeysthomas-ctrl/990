/* ============================================================
   990 — L'ANGLAIS DE JANE EYRE : le style littéraire soutenu.
   Hub dédié : les tournures de la grande prose, un lexique choisi
   (audio UK), deux extraits de Charlotte Brontë glosés, un atelier
   de transformation « neutre → littéraire ».
   Se charge APRÈS elevate.js (pour speakVoice) et AVANT app.js.
   ============================================================ */

/* ---------- 1) LES TOURNURES ---------- */
window.LIT_FORMS = [
  { name: "L'inversion négative", rule: "Quand la phrase commence par un mot <b>négatif ou restrictif</b> (never, not until, no sooner, seldom, rarely, little, only then, hardly…), on <b>inverse comme dans une question</b> : auxiliaire avant le sujet. C'est la signature du style soutenu.",
    ex: [["Never once did I suspect the truth.", "Pas une seule fois je ne soupçonnai la vérité. (I never suspected → Never did I suspect)"],
      ["No sooner had she spoken than the door opened.", "À peine eut-elle parlé que la porte s'ouvrit."],
      ["Not until dawn did he return.", "Ce ne fut qu'à l'aube qu'il revint."],
      ["Seldom have I beheld such beauty.", "Rarement ai-je contemplé pareille beauté."],
      ["Little did they know what awaited them.", "Ils étaient loin de savoir ce qui les attendait."],
      ["Only then did I understand.", "C'est alors seulement que je compris."]] },
  { name: "La concession antéposée (as / though)", rule: "Pour <b>concéder avec élégance</b>, on met l'adjectif (ou l'adverbe) EN TÊTE, suivi de <b>as</b> ou <b>though</b> : « <i>Adjectif</i> + as/though + sujet + verbe ». Équivaut à « bien que… ». C'est exactement le « <i>concerned as I was…</i> ».",
    ex: [["Concerned as I was, I said nothing.", "Si inquiet que je fusse, je ne dis rien. (= Though I was concerned)"],
      ["Try as I might, I could not forget her.", "J'avais beau essayer, je ne pouvais l'oublier."],
      ["Cold though the night was, we pressed on.", "Si froide que fût la nuit, nous poursuivîmes."],
      ["Much as I admired him, I could not agree.", "Quelque admiration que j'eusse pour lui, je ne pouvais consentir."],
      ["Young as she was, she understood everything.", "Toute jeune qu'elle était, elle comprenait tout."]] },
  { name: "L'inversion conditionnelle (sans « if »)", rule: "Le conditionnel soutenu <b>supprime « if »</b> et inverse : <b>Had</b> I…, <b>Were</b> I to…, <b>Should</b> you… C'est plus formel et plus littéraire que « if ».",
    ex: [["Had I known, I would have stayed.", "L'eussé-je su, je serais resté. (= If I had known)"],
      ["Were I to leave, who would remain?", "Si je devais partir, qui resterait ?"],
      ["Should you need anything, do not hesitate.", "Si d'aventure vous aviez besoin de quoi que ce soit, n'hésitez pas."]] },
  { name: "L'emphase et le relief", rule: "Mettre en valeur : la <b>tournure clivée</b> (It was… that…), le <b>pseudo-clivage</b> (What… was…), <b>so/such… that…</b> avec inversion, et l'<b>antéposition</b> d'un complément de lieu (avec inversion du verbe).",
    ex: [["It was then that she understood.", "Ce fut alors qu'elle comprit. (clivage)"],
      ["What struck me was the silence.", "Ce qui me frappa, ce fut le silence. (pseudo-clivage)"],
      ["So great was her joy that she wept.", "Si grande était sa joie qu'elle en pleura."],
      ["Such was the silence that I could hear my heart.", "Tel était le silence que j'entendais mon cœur."],
      ["Down the lane came a solitary figure.", "Au bout du chemin s'avança une silhouette solitaire."],
      ["In the distance rose the dark towers of the house.", "Au loin se dressaient les sombres tours de la demeure."]] }
];

/* ---------- 2) LE LEXIQUE CHOISI ---------- */
window.LIT_WORDS = [
  // Verbes
  ["to gaze", "contempler, fixer du regard", "She gazed out at the moor for a long while."],
  ["to behold", "contempler, voir (littéraire)", "He beheld a sight he would never forget."],
  ["to ponder", "méditer, réfléchir longuement à", "I pondered his strange words all night."],
  ["to muse", "songer, rêvasser", "She mused on the days gone by."],
  ["to yearn (for)", "aspirer ardemment à, languir après", "He yearned for a freedom he had never known."],
  ["to linger", "s'attarder, traîner", "The scent of roses lingered in the hall."],
  ["to dwell (on)", "s'appesantir sur, ressasser", "Do not dwell on what cannot be changed."],
  ["to discern", "discerner, distinguer", "I could just discern a figure in the mist."],
  ["to relish", "savourer, se délecter de", "She relished every moment of the journey."],
  ["to loathe", "abhorrer, détester profondément", "He loathed idleness above all things."],
  ["to endeavour", "s'efforcer de, s'employer à", "I shall endeavour to be worthy of your trust."],
  ["to summon", "rassembler (courage), convoquer", "She summoned all her courage and spoke."],
  ["to falter", "vaciller, hésiter, défaillir", "His voice faltered as he read the letter."],
  ["to conceal", "dissimuler, cacher", "She could not conceal her joy."],
  ["to cherish", "chérir, tenir précieusement à", "I cherish the memory of that summer."],
  ["to dread", "redouter, appréhender", "He dreaded the coming winter."],
  ["to wander", "errer, déambuler", "We wandered through the silent gardens."],
  // Adjectifs
  ["melancholy", "mélancolique", "A melancholy air hung over the old house."],
  ["serene", "serein, paisible", "Her face was perfectly serene."],
  ["resolute", "résolu, déterminé", "She was resolute in her decision."],
  ["austere", "austère, sévère", "The room was bare and austere."],
  ["wistful", "nostalgique, songeur", "He gave a wistful smile."],
  ["forlorn", "délaissé, désolé, abandonné", "A forlorn little figure stood at the gate."],
  ["luminous", "lumineux, rayonnant", "Her luminous eyes met mine."],
  ["sombre", "sombre, grave (GB)", "The sky grew sombre before the storm."],
  ["tender", "tendre, doux", "She spoke in a tender voice."],
  ["desolate", "désolé, dévasté", "The moor stretched out, vast and desolate."],
  ["weary", "las, épuisé", "Weary and cold, we reached the inn at last."],
  ["quaint", "pittoresque, charmant et désuet", "A quaint little village nestled in the valley."],
  ["formidable", "redoutable, imposant", "She was a formidable adversary."],
  ["radiant", "radieux, éclatant", "The bride looked radiant."],
  // Noms & atmosphère
  ["solitude", "la solitude", "He found a strange comfort in solitude."],
  ["reverie", "la rêverie", "A knock at the door broke my reverie."],
  ["twilight", "le crépuscule", "We walked home in the twilight."],
  ["tempest", "la tempête", "A tempest raged all through the night."],
  ["hearth", "l'âtre, le foyer", "We gathered around the hearth."],
  ["countenance", "le visage, la contenance", "A shadow crossed his countenance."],
  ["semblance", "le semblant, l'apparence", "She kept some semblance of calm."],
  ["gloom", "la pénombre, la morosité", "A deep gloom filled the empty house."],
  ["grief", "le chagrin, le deuil", "She bore her grief in silence."],
  ["rapture", "le ravissement, l'extase", "He listened in silent rapture."],
  ["stillness", "le calme absolu, l'immobilité", "The stillness of the night was complete."],
  ["threshold", "le seuil", "She paused on the threshold."],
  ["yearning", "l'aspiration, le désir ardent", "A deep yearning stirred within her."],
  // Connecteurs soutenus
  ["thus", "ainsi, de cette manière", "Thus began the strangest year of my life."],
  ["hence", "d'où, par conséquent", "He was a stranger; hence our caution."],
  ["whereupon", "sur quoi, après quoi", "She rose, whereupon everyone fell silent."],
  ["henceforth", "désormais, dorénavant", "Henceforth we shall never be parted."],
  ["notwithstanding", "nonobstant, malgré cela", "Notwithstanding the danger, she went on."],
  ["albeit", "quoique, bien que (+ adj.)", "It was a victory, albeit a costly one."],
  ["hitherto", "jusqu'ici, jusqu'alors", "A calm hitherto unknown settled over her."],
  ["nonetheless", "néanmoins, cependant", "It was late; nonetheless, she waited."]
];

/* ---------- 3) LES EXTRAITS (domaine public — Charlotte Brontë, 1847) ---------- */
window.LIT_TEXTS = [
  { title: "Un jour sans promenade", author: "Charlotte Brontë · Jane Eyre", src: "Chapitre I — l'ouverture du roman.",
    paras: [
      "There was no possibility of taking a walk that day.",
      "We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question."
    ],
    fr: [
      "Il n'était pas possible, ce jour-là, d'aller se promener.",
      "Nous avions bien erré une heure, le matin, dans le bosquet dénudé ; mais depuis le déjeuner, le froid vent d'hiver avait amené des nuages si sombres et une pluie si pénétrante que toute sortie était désormais hors de question."
    ],
    gloss: [["leafless", "dénudé, sans feuilles"], ["shrubbery", "le bosquet, les massifs d'arbustes"], ["sombre", "sombre"], ["penetrating", "pénétrant"], ["out-door exercise", "une sortie, de l'exercice en plein air"], ["out of the question", "hors de question, exclu"], ["so … that …", "si … que … (conséquence)"]] },
  { title: "Je ne suis pas un oiseau", author: "Charlotte Brontë · Jane Eyre", src: "Chapitre XXIII — la déclaration de Jane à Rochester.",
    paras: [
      "Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!",
      "I have as much soul as you — and full as much heart!",
      "I am no bird; and no net ensnares me: I am a free human being with an independent will."
    ],
    fr: [
      "Croyez-vous que, parce que je suis pauvre, obscure, quelconque et menue, je sois sans âme et sans cœur ? Vous vous trompez !",
      "J'ai autant d'âme que vous — et tout autant de cœur !",
      "Je ne suis pas un oiseau ; et nul filet ne me prend au piège : je suis un être humain libre, doté d'une volonté indépendante."
    ],
    gloss: [["obscure", "obscur, sans notoriété"], ["plain", "quelconque, sans beauté"], ["soulless", "sans âme"], ["full as much", "tout autant"], ["to ensnare", "prendre au piège, capturer"], ["net", "le filet"], ["an independent will", "une volonté indépendante"]] }
];

/* ---------- 4) L'ATELIER DE STYLE (transformation neutre → littéraire) ---------- */
window.LIT_DRILL = [
  ["I never suspected the truth.", ["Never did I suspect the truth.", "Never I suspected the truth.", "Never suspected I the truth."], 0, "Inversion négative : Never + <b>auxiliaire (did)</b> + sujet + verbe."],
  ["Although I was afraid, I went on.", ["Afraid though I was, I went on.", "Though afraid I was, I went on.", "Afraid as though I was, I went on."], 0, "Concession antéposée : adjectif + <b>though</b> + sujet + verbe."],
  ["If I had known, I would have come.", ["Had I known, I would have come.", "Would I have known, I had come.", "If had I known, I would have come."], 0, "Inversion conditionnelle : on supprime « if » et on met <b>Had</b> en tête."],
  ["As soon as she left, it began to rain.", ["No sooner had she left than it began to rain.", "No sooner she had left than it began to rain.", "No sooner did she leave when it began to rain."], 0, "« <b>No sooner had</b> + sujet + participe <b>than</b>… »."],
  ["She was so kind that everyone loved her.", ["So kind was she that everyone loved her.", "So kind she was that everyone loved her.", "Such kind was she that everyone loved her."], 0, "So + adjectif + <b>inversion</b> (was she) + that…"],
  ["I understood only then.", ["Only then did I understand.", "Only then I understood.", "Only then understood I."], 0, "Only then + <b>auxiliaire</b> + sujet + verbe."],
  ["The silence was such that I could hear my heart.", ["Such was the silence that I could hear my heart.", "So was the silence that I could hear my heart.", "Such the silence was that I could hear my heart."], 0, "<b>Such was</b> + le nom + that…"],
  ["They did not know what awaited them.", ["Little did they know what awaited them.", "Little they knew what awaited them.", "Little knew they what awaited them."], 0, "Little + <b>did</b> + sujet + verbe (litote soutenue)."],
  ["I have rarely seen such devotion.", ["Rarely have I seen such devotion.", "Rarely I have seen such devotion.", "Rarely seen have I such devotion."], 0, "Rarely + <b>auxiliaire (have)</b> + sujet + participe."],
  ["If you should need help, call me.", ["Should you need help, call me.", "Should you to need help, call me.", "If should you need help, call me."], 0, "Inversion conditionnelle avec <b>Should</b> (éventualité)."],
  ["However hard I tried, I could not forget her.", ["Try as I might, I could not forget her.", "As try I might, I could not forget her.", "Try though I might not, I could not forget her."], 0, "« <b>Try as I might</b> » = j'avais beau essayer."]
];

/* ---------- NIVEAU AVANCÉ (« let's go further ») ---------- */
window.LIT_FORMS_ADV = [
  { name: "Only / Not only + inversion", rule: "Après « <b>Only</b> + complément » ou « <b>Not only</b>… », la principale s'<b>inverse</b> (auxiliaire avant le sujet). « Not only… but also… » peut inverser des deux côtés.",
    ex: [["Only after much thought did I decide.", "Ce n'est qu'après mûre réflexion que je me décidai."],
      ["Only when the door closed did she weep.", "Ce ne fut qu'une fois la porte fermée qu'elle pleura."],
      ["Not only did he refuse, but he also mocked me.", "Non seulement il refusa, mais il se moqua de moi."],
      ["Not only was she brilliant; she was also kind.", "Non seulement elle était brillante ; elle était aussi bonne."]] },
  { name: "Hardly / Scarcely / No sooner… (le soudain)", rule: "Pour « à peine… que… » : <b>Hardly/Scarcely had</b> + sujet + participe <b>when</b>… ; <b>No sooner had</b> + … <b>than</b>… ⚠️ <i>when</i> avec hardly/scarcely, <i>than</i> avec no sooner.",
    ex: [["Scarcely had we arrived when it began to pour.", "À peine étions-nous arrivés qu'il se mit à pleuvoir des cordes."],
      ["Hardly had she spoken when he rose to leave.", "À peine avait-elle parlé qu'il se leva pour partir."],
      ["No sooner had the sun set than the wind rose.", "À peine le soleil se fut-il couché que le vent se leva."]] },
  { name: "Participiales & propositions absolues", rule: "La signature de la prose du XIX<sup>e</sup>. Un <b>participe en tête</b> (Turning…, Having spoken…) ou une <b>proposition absolue</b> (sujet + participe : « The night being cold… », « Her task completed… ») condense deux idées en une phrase élégante.",
    ex: [["Turning, she beheld a stranger at the door.", "Se retournant, elle aperçut un inconnu à la porte."],
      ["Having spoken, he left without a word.", "Ayant parlé, il partit sans un mot."],
      ["The night being cold, we hastened home.", "La nuit étant froide, nous nous hâtâmes de rentrer. (= comme il faisait froid)"],
      ["Her task completed, she rose from the desk.", "Sa tâche achevée, elle se leva du bureau."],
      ["There being no alternative, we complied.", "N'ayant pas d'autre choix, nous nous soumîmes."]] },
  { name: "Subjonctif & tournures formelles", rule: "Le registre le plus soutenu : <b>Were it not for…</b> (= si ce n'était), <b>lest</b> + subjonctif (= de peur que ; verbe nu), <b>come what may</b> (advienne que pourra), <b>be that as it may</b> (quoi qu'il en soit), <b>would that…</b> (« si seulement… », littéraire).",
    ex: [["Were it not for your help, I would have failed.", "Sans votre aide, j'aurais échoué."],
      ["She spoke softly, lest she wake the child.", "Elle parla tout bas, de peur de réveiller l'enfant. (lest + verbe nu : wake)"],
      ["Come what may, I shall not yield.", "Advienne que pourra, je ne céderai pas."],
      ["Be that as it may, we must proceed.", "Quoi qu'il en soit, nous devons continuer."],
      ["Would that I had known sooner!", "Si seulement j'avais su plus tôt !"]] },
  { name: "Relatifs & liens soutenus", rule: "Les connecteurs de la haute prose : <b>whereby</b> (par lequel, grâce à quoi), <b>wherein</b> (dans lequel/quoi), <b>whence</b> (d'où), <b>such… as</b> (tel… que), <b>no less… than</b>.",
    ex: [["It is a method whereby errors are avoided.", "C'est une méthode par laquelle on évite les erreurs."],
      ["He returned to the town whence he had come.", "Il retourna à la ville d'où il était venu."],
      ["She showed such courage as few possess.", "Elle montra un courage tel que peu en possèdent."],
      ["He was no less determined than his father.", "Il n'était pas moins déterminé que son père."]] }
];
window.LIT_DRILL_ADV = [
  ["I only understood when she explained.", ["Only when she explained did I understand.", "Only when she explained I understood.", "Only did I understand when she explained."], 0, "Only when + proposition → <b>inversion</b> dans la principale (did I understand)."],
  ["He refused, and he also mocked me.", ["Not only did he refuse, but he also mocked me.", "Not only he refused, but he also mocked me.", "Not only refused he, but he also mocked me."], 0, "Not only + <b>inversion</b> (did he refuse)."],
  ["We had scarcely arrived when it started to rain.", ["Scarcely had we arrived when it started to rain.", "Scarcely we had arrived when it started to rain.", "Scarcely had we arrived than it started to rain."], 0, "Scarcely had + sujet + participe + <b>when</b> (than = no sooner)."],
  ["Because the night was cold, we hurried home.", ["The night being cold, we hurried home.", "Being the night cold, we hurried home.", "The night was cold, we hurried home."], 0, "Proposition <b>absolue</b> : sujet + participe (The night being cold)."],
  ["After she had finished her task, she rose.", ["Her task completed, she rose.", "Her task was completed, she rose.", "Completed her task, she rose."], 0, "Absolue au participe passé : « Her task completed »."],
  ["If it were not for your support, I would fail.", ["Were it not for your support, I would fail.", "Was it not for your support, I would fail.", "Were not it for your support, I would fail."], 0, "Inversion : <b>Were it not for</b>…"],
  ["She whispered so as not to wake the child.", ["She whispered lest she wake the child.", "She whispered lest she wakes the child.", "She whispered lest to wake the child."], 0, "<b>lest</b> + sujet + verbe au subjonctif (base : wake, sans -s)."],
  ["As soon as he had spoken, he left.", ["Having spoken, he left.", "Speaking, he left.", "Spoken, he left."], 0, "Participe parfait : <b>Having spoken</b> (action antérieure)."],
  ["Whatever happens, I will not give up.", ["Come what may, I will not give up.", "Come what may happen, I will not give up.", "Whatever come may, I will not give up."], 0, "Idiome subjonctif figé : <b>Come what may</b>."],
  ["There was no other choice, so we accepted.", ["There being no other choice, we accepted.", "There was no other choice being, we accepted.", "Being no other choice, we accepted."], 0, "Absolue avec « there » : <b>There being</b> no other choice."],
  ["It is a system that reduces waste.", ["It is a system whereby waste is reduced.", "It is a system wherein waste is reduced.", "It is a system whence waste is reduced."], 0, "<b>whereby</b> = par lequel / grâce auquel (le moyen)."],
  ["He turned and saw the sea.", ["Turning, he saw the sea.", "Turned, he saw the sea.", "To turn, he saw the sea."], 0, "Participe présent en tête : <b>Turning</b>, he saw…"]
];
window.LIT_WORDS = window.LIT_WORDS.concat([
  ["to beseech", "implorer, supplier", "She beseeched him to stay."],
  ["to relent", "fléchir, s'adoucir", "At last his heart relented."],
  ["to brood (over)", "ruminer sombrement", "He brooded over the loss for weeks."],
  ["to forsake", "abandonner, délaisser", "He would never forsake his friends."],
  ["to lament", "se lamenter, déplorer", "She lamented the passing of the years."],
  ["ineffable", "indicible, ineffable", "An ineffable sadness filled the room."],
  ["inexorable", "implacable, inexorable", "Time is inexorable."],
  ["pensive", "pensif, songeur", "He fell into a pensive silence."],
  ["plaintive", "plaintif", "A plaintive cry rose from the moor."],
  ["ardent", "ardent, fervent", "She was an ardent admirer of his work."],
  ["languid", "languide, alangui", "A languid afternoon by the fire."],
  ["ethereal", "éthéré, aérien", "Her voice had an ethereal quality."],
  ["fraught (with)", "chargé de, lourd de", "The journey was fraught with danger."],
  ["solace", "le réconfort, la consolation", "She found solace in old books."],
  ["fervour", "la ferveur (GB)", "He spoke with unusual fervour."],
  ["disquiet", "l'inquiétude sourde", "A vague disquiet troubled her."]
]);
window.LIT_TEXTS = window.LIT_TEXTS.concat([
  { title: "La dernière phrase de Middlemarch", author: "George Eliot · Middlemarch", src: "Pour aller plus loin : une phrase-monde, dense et subordonnée (1872).",
    paras: [
      "But the effect of her being on those around her was incalculably diffusive:",
      "for the growing good of the world is partly dependent on unhistoric acts; and that things are not so ill with you and me as they might have been, is half owing to the number who lived faithfully a hidden life, and rest in unvisited tombs."
    ],
    fr: [
      "Mais l'effet de son existence sur ceux qui l'entouraient fut incalculablement diffus :",
      "car le bien croissant du monde dépend en partie d'actes sans éclat ; et si les choses ne vont pas plus mal pour vous et moi qu'elles n'auraient pu, nous le devons pour moitié à tous ceux qui vécurent fidèlement une vie cachée, et reposent dans des tombes que nul ne visite."
    ],
    gloss: [["diffusive", "diffus, qui se répand"], ["unhistoric acts", "des actes sans éclat (que l'Histoire ne retient pas)"], ["not so ill … as", "pas aussi mal … que"], ["owing to", "dû à, grâce à"], ["faithfully", "fidèlement"], ["a hidden life", "une vie cachée / obscure"], ["unvisited tombs", "des tombes que nul ne visite"]] }
]);

/* ============================================================
   RENDU — le hub et ses écrans (app.innerHTML, style de l'app)
   ============================================================ */
function litSay(text){ if(window.speakVoice) speakVoice(text, 'gb'); }
function litSayForm(fi, ei){ litSay(LIT_FORMS[fi].ex[ei][0]); }
function litSayFormAdv(fi, ei){ litSay(LIT_FORMS_ADV[fi].ex[ei][0]); }
function litSpeakText(i){ litSay(LIT_TEXTS[i].paras.join(' ')); }

function renderLitHome(){
  window.scrollTo(0,0);
  app.innerHTML = `
    <div class="card">
      <h2>✒️ L'anglais de Jane Eyre</h2>
      <div class="sub">Le style de la grande prose anglaise : inversions (« never once did I… »), concessions élégantes (« concerned as I was… »), mots choisis. Comprends-le, lis-le, puis écris-le.</div>
    </div>
    <button class="tile" onclick="renderLitForms()"><div class="ic g">🏛️</div><div class="body"><div class="t">Les tournures de la grande prose</div><div class="d">Inversion, concession, absolues, subjonctif — socle + 🔥 avancé</div></div></button>
    <button class="tile" onclick="renderLitWords()"><div class="ic a">📜</div><div class="body"><div class="t">Le lexique choisi</div><div class="d">${LIT_WORDS.length} mots élégants · audio britannique</div></div></button>
    <button class="tile" onclick="renderLitRead(0)"><div class="ic l">📖</div><div class="body"><div class="t">Lire Jane Eyre</div><div class="d">Brontë (×2) + George Eliot — extraits glosés</div></div></button>
    <button class="tile" onclick="renderLitDrillPick()"><div class="ic e">🖋️</div><div class="body"><div class="t">Atelier de style</div><div class="d">Transforme du neutre en littéraire · socle + 🔥 Expert</div></div></button>
    <button class="btn ghost mt" onclick="setView('home')">← Accueil</button>
  `;
}
function litFormCards(arr, sayFn){
  return arr.map((f,fi)=>`
    <div class="card">
      <h2 style="font-size:16px">${f.name}</h2>
      <div class="expl mt" style="border-color:var(--blue)">${f.rule}</div>
      ${f.ex.map(([en,fr],ei)=>`<div style="display:flex;flex-direction:column;padding:9px 0;border-bottom:1px solid var(--line)">
        <span style="font-weight:600;font-size:15px">${en} <button class="spk sm" onclick="${sayFn}(${fi},${ei})">🔊 UK</button></span>
        <span class="sub" style="margin-top:2px">${fr}</span></div>`).join('')}
    </div>`).join('');
}
function renderLitForms(){
  window.scrollTo(0,0);
  const adv = (typeof LIT_FORMS_ADV!=='undefined' && LIT_FORMS_ADV.length)
    ? `<div class="card" style="border-color:var(--accent)"><h2 style="font-size:16px">🔥 Niveau avancé</h2><div class="sub">Participiales, absolues, subjonctif formel, only/not only & scarcely + inversion. Le registre des maîtres.</div></div>${litFormCards(LIT_FORMS_ADV,'litSayFormAdv')}` : '';
  app.innerHTML = `<div class="card"><h2>🏛️ Les tournures de la grande prose</h2><div class="sub">La grammaire du style. Lis à voix haute, écoute l'accent, imite.</div></div>${litFormCards(LIT_FORMS,'litSayForm')}${adv}<button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
}
function renderLitWords(){
  window.scrollTo(0,0);
  app.innerHTML = `
    <div class="card"><h2>📜 Le lexique choisi</h2><div class="sub">Les mots qui font le style. Touche 🔊 pour l'accent britannique.</div></div>
    <input id="litq" placeholder="Chercher un mot…" style="width:100%;padding:11px 14px;border-radius:12px;background:var(--bg2);border:1px solid var(--line);color:var(--txt);font-size:15px;margin-bottom:10px">
    <div class="card" id="litlist"></div>
    <button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
  const inp=document.getElementById('litq'), list=document.getElementById('litlist');
  const draw=fRaw=>{ const fq=(fRaw||'').toLowerCase();
    const rows=LIT_WORDS.filter(w=>!fq||w[0].toLowerCase().includes(fq)||w[1].toLowerCase().includes(fq));
    list.innerHTML = rows.length ? rows.map(w=>`
      <div style="padding:10px 2px;border-bottom:1px solid var(--line)">
        <div style="display:flex;align-items:center;gap:8px"><b style="color:var(--accent);font-size:15px">${w[0]}</b><button class="spk sm" onclick="litSay('${w[0].replace(/'/g,"\\'")}')">🔊 UK</button></div>
        <div class="sub" style="margin-top:2px">${w[1]}</div>
        ${w[2]?`<div style="color:#c9cde0;font-size:13px;font-style:italic;margin-top:3px">${w[2]}</div>`:''}
      </div>`).join('') : '<div class="sub">Rien trouvé.</div>'; };
  inp.oninput=()=>draw(inp.value); draw('');
}
function renderLitRead(i){
  window.scrollTo(0,0); i=i||0; const t=LIT_TEXTS[i];
  const paras=t.paras.map(p=>`<p style="font-size:16.5px;line-height:1.72;margin-bottom:12px;color:var(--txt)">${p}</p>`).join('');
  const fr=t.fr.map(p=>`<p style="font-size:14px;line-height:1.6;margin-bottom:8px;color:var(--muted)">${p}</p>`).join('');
  const gloss=t.gloss.map(([en,f])=>`<div class="glrow"><b>${en}</b><span>${f}</span></div>`).join('');
  const nav=LIT_TEXTS.map((x,k)=>`<button class="btn ${k===i?'':'sec'}" style="flex:1;margin-top:0" onclick="renderLitRead(${k})">${k+1}. ${x.title}</button>`).join('');
  app.innerHTML = `
    <div class="card"><div class="pill warn">${t.author}</div><h2 class="mt">${t.title}</h2><div class="sub">${t.src}</div>
      <button class="btn mt" onclick="litSpeakText(${i})">🔊 Écouter le passage (UK)</button></div>
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">${nav}</div>
    <div class="card">${paras}</div>
    <details class="card"><summary style="cursor:pointer;font-weight:700;color:var(--accent)">Voir la traduction</summary><div class="mt">${fr}</div></details>
    <div class="card"><h2 style="font-size:15px">Mots à savourer</h2>${gloss}</div>
    <button class="btn" onclick="litReadDone()">J'ai lu ✓ (+12 XP)</button>
    <button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
}
function litReadDone(){ if(window.markStudy) markStudy(); if(window.addXp) addXp(12); if(window.save) save(); if(window.toast) toast('📖 +12 XP · lecture soutenue'); }

let LITQ=null;
function renderLitDrillPick(){
  window.scrollTo(0,0);
  app.innerHTML=`
    <div class="card"><h2>🖋️ Atelier de style</h2><div class="sub">Transforme une phrase neutre en version littéraire. Choisis ton niveau.</div></div>
    <button class="btn" onclick="startLitDrill('socle')">Le socle · ${LIT_DRILL.length} phrases</button>
    <button class="btn mt" onclick="startLitDrill('adv')" style="background:linear-gradient(120deg,var(--accent),var(--bad))">🔥 Expert · ${LIT_DRILL_ADV.length} phrases</button>
    <div class="sub mt" style="text-align:center">L'Expert : participiales, absolues, subjonctif, only/scarcely… Pour aller plus loin.</div>
    <button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
}
function startLitDrill(level){
  level = level || 'socle';
  const bank = level==='adv' ? LIT_DRILL_ADV : LIT_DRILL;
  LITQ={ level, bank, i:0, ok:0, order:shuffle([...Array(bank.length).keys()]), answered:false };
  renderLitQ();
}
function renderLitQ(){
  window.scrollTo(0,0);
  const it=LITQ.bank[LITQ.order[LITQ.i]]; LITQ.answered=false;
  const plain=it[0], opts=it[1];
  const order=shuffle(opts.map((o,k)=>k)); LITQ.dispCorrect=order.indexOf(it[2]);
  const optHtml=order.map((oi,k)=>`<button class="opt" onclick="litAnswer(${k})">${opts[oi]}</button>`).join('');
  app.innerHTML=`
    <div class="qmeta"><span>🖋️ Atelier${LITQ.level==='adv'?' · Expert 🔥':''}</span><span>${LITQ.i+1} / ${LITQ.bank.length}</span></div>
    <div class="pbar mb"><i style="width:${LITQ.i/LITQ.bank.length*100}%"></i></div>
    <div class="sub" style="margin-bottom:6px">Mets cette phrase au style <b style="color:var(--txt)">littéraire</b> :</div>
    <div class="stem" style="font-size:17px">${plain}</div>
    <div id="litopts">${optHtml}</div>
    <div id="litafter"></div>`;
}
function litAnswer(k){
  if(LITQ.answered) return; LITQ.answered=true;
  const it=LITQ.bank[LITQ.order[LITQ.i]], correct=LITQ.dispCorrect, ok=(k===correct);
  document.querySelectorAll('#litopts .opt').forEach((b,idx)=>{ b.setAttribute('disabled',''); if(idx===correct)b.classList.add('good'); else if(idx===k)b.classList.add('bad'); else b.classList.add('dim'); });
  if(ok){ LITQ.ok++; addXp(4); } else recordMistake({kind:'gram',q:it[0],opts:it[1],correct:it[2],expl:it[3],cat:'Style littéraire'});
  const last=LITQ.i===LITQ.bank.length-1;
  document.getElementById('litafter').innerHTML=`<div class="expl ${ok?'ok':'no'}" style="margin-top:8px">${ok?'✅ ':'❌ '}${it[3]}</div><button class="btn mt" onclick="${last?'finishLitDrill()':'nextLitQ()'}">${last?'Voir le résultat':'Suivant →'}</button>`;
  document.getElementById('litafter').scrollIntoView({behavior:'smooth',block:'end'});
}
function nextLitQ(){ LITQ.i++; renderLitQ(); }
function finishLitDrill(){
  const pct=Math.round(LITQ.ok/LITQ.bank.length*100), perfect=LITQ.ok===LITQ.bank.length;
  markStudy(); addXp(10); save(); if(typeof checkAchievements==='function') checkAchievements();
  const msg = (perfect && LITQ.level==='adv') ? 'Sans-faute à l\'Expert. Là, tu écris vraiment comme Brontë.'
    : perfect ? 'Sans-faute — passe donc à l\'Expert 🔥'
    : 'Le style s\'apprend par l\'imitation. Relis un extrait, puis recommence.';
  app.innerHTML=`
    <div class="card big"><div class="em">${perfect?'🏆':pct>=70?'🖋️':'📚'}</div>
      <div class="score" style="color:${pct>=70?'var(--good)':'var(--accent)'}">${pct}%</div>
      <div class="lab">${LITQ.ok}/${LITQ.bank.length} au style juste</div>
      <div class="mt sub">${msg}</div></div>
    ${LITQ.level!=='adv'?`<button class="btn" onclick="startLitDrill('adv')" style="background:linear-gradient(120deg,var(--accent),var(--bad))">🔥 Passer à l'Expert</button>`:''}
    <button class="btn ${LITQ.level!=='adv'?'sec':''} mt" onclick="startLitDrill('${LITQ.level}')">↻ Recommencer</button>
    <button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
}
