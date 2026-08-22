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
  },

  {
    id: "shelley-frankenstein",
    type: "Littérature",
    title: "Frankenstein",
    author: "Mary Shelley, 1818",
    intro: "La toute première page du roman : l'explorateur Walton écrit à sa sœur, porté par un enthousiasme que le récit viendra assombrir.",
    pairs: [
      ["You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings.",
       "Tu te réjouiras d'apprendre qu'aucun désastre n'a accompagné le commencement d'une entreprise que tu envisageais avec de si sombres pressentiments."],
      ["I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.",
       "Je suis arrivé ici hier, et ma première tâche est d'assurer ma chère sœur de mon bien-être et de ma confiance grandissante dans le succès de mon entreprise."]
    ],
    gloss: [["to rejoice", "se réjouir"], ["commencement", "le commencement / le début"], ["forebodings", "les (sombres) pressentiments"], ["welfare", "le bien-être"], ["undertaking", "l'entreprise / le projet"]]
  },
  {
    id: "carroll-alice",
    type: "Littérature",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll, 1865",
    intro: "L'ouverture d'« Alice au pays des merveilles » : l'ennui d'un après-midi, juste avant que le lapin blanc ne passe en courant.",
    pairs: [
      ["Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it.",
       "Alice commençait à en avoir bien assez d'être assise auprès de sa sœur sur le talus, sans rien à faire : une ou deux fois, elle avait jeté un coup d'œil au livre que lisait sa sœur, mais il n'y avait ni images ni dialogues."],
      ["'And what is the use of a book,' thought Alice, 'without pictures or conversation?'",
       "« Et à quoi sert un livre, songea Alice, sans images ni dialogues ? »"]
    ],
    gloss: [["to be tired of", "en avoir assez de"], ["bank", "le talus / la rive"], ["to peep into", "jeter un coup d'œil dans"], ["what is the use of…?", "à quoi sert… ?"], ["conversation", "les dialogues / la conversation"]]
  },
  {
    id: "doyle-scandal",
    type: "Littérature",
    title: "A Scandal in Bohemia",
    author: "Arthur Conan Doyle, 1891",
    intro: "Les premières lignes de la nouvelle : comment Watson présente « LA femme », Irene Adler, la seule à avoir tenu tête à Sherlock Holmes.",
    pairs: [
      ["To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name.",
       "Pour Sherlock Holmes, elle est toujours LA femme. Je l'ai rarement entendu la désigner sous un autre nom."],
      ["In his eyes she eclipses and predominates the whole of her sex.",
       "À ses yeux, elle éclipse et surpasse tout le reste de son sexe."]
    ],
    gloss: [["always", "toujours"], ["seldom", "rarement"], ["to mention", "mentionner / évoquer"], ["to eclipse", "éclipser"], ["to predominate", "prédominer / l'emporter sur"]]
  },
  {
    id: "bronte-wuthering",
    type: "Littérature",
    title: "Wuthering Heights",
    author: "Emily Brontë, 1847",
    intro: "La première entrée du journal de Lockwood : l'arrivée d'un citadin dans la lande sauvage du Yorkshire.",
    pairs: [
      ["1801. — I have just returned from a visit to my landlord — the solitary neighbour that I shall be troubled with. This is certainly a beautiful country!",
       "1801. — Je reviens à l'instant d'une visite à mon propriétaire — le seul voisin dont j'aurai à me soucier. Voilà, à coup sûr, une bien belle contrée !"],
      ["In all England, I do not believe that I could have fixed on a situation so completely removed from the stir of society.",
       "Dans toute l'Angleterre, je ne crois pas que j'aurais pu arrêter mon choix sur un lieu aussi complètement à l'écart de l'agitation du monde."]
    ],
    gloss: [["landlord", "le propriétaire (bailleur)"], ["solitary", "solitaire / isolé"], ["to be troubled with", "avoir affaire à / être importuné par"], ["to fix on", "arrêter son choix sur"], ["the stir of society", "l'agitation du monde"]]
  },
  {
    id: "fitzgerald-gatsby",
    type: "Littérature",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald, 1925",
    intro: "La fin, mythique, de « Gatsby le Magnifique » : une méditation sur l'espoir et le passé. (Repère au passage les verbes irréguliers : beat, borne.)",
    pairs: [
      ["Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that's no matter — tomorrow we will run faster, stretch out our arms farther.",
       "Gatsby croyait en la lumière verte, cet avenir extatique qui, année après année, recule devant nous. Il nous a échappé alors, mais qu'importe — demain nous courrons plus vite, nous tendrons les bras plus loin."],
      ["And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.",
       "Et un beau matin — Ainsi nous luttons, barques à contre-courant, sans cesse ramenés vers le passé."]
    ],
    gloss: [["to recede", "reculer / refluer"], ["to elude", "échapper à"], ["that's no matter", "qu'importe / peu importe"], ["to stretch out", "tendre / étirer"], ["borne back", "ramené en arrière (de « to bear »)"]]
  },
  {
    id: "thoreau-walden",
    type: "Littérature",
    title: "Walden",
    author: "Henry David Thoreau, 1854",
    intro: "La phrase-manifeste de Thoreau : pourquoi il est parti vivre seul, deux ans, dans une cabane au bord d'un étang.",
    pairs: [
      ["I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach.",
       "Je m'en allai dans les bois parce que je voulais vivre à dessein, n'affronter que les faits essentiels de la vie, et voir si je ne pourrais pas apprendre ce qu'elle avait à enseigner."],
      ["And not, when I came to die, discover that I had not lived.",
       "Et non pas, à l'heure de ma mort, découvrir que je n'avais pas vécu."]
    ],
    gloss: [["to live deliberately", "vivre à dessein / délibérément"], ["to front", "affronter / faire face à"], ["essential facts", "les faits essentiels"], ["to teach", "enseigner"], ["when I came to die", "à l'heure de ma mort"]]
  },
  {
    id: "stevenson-jekyll",
    type: "Littérature",
    title: "Dr Jekyll and Mr Hyde",
    author: "R. L. Stevenson, 1886",
    intro: "Le portrait qui ouvre « L'Étrange Cas du Dr Jekyll et de M. Hyde » : l'austère notaire Utterson.",
    pairs: [
      ["Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment.",
       "Maître Utterson, l'homme de loi, était un homme au visage rude que jamais un sourire n'éclairait ; froid, avare et emprunté dans ses propos ; peu porté au sentiment."],
      ["Lean, long, dusty, dreary and yet somehow lovable.",
       "Sec, long, terne, morose, et pourtant, d'une certaine façon, attachant."]
    ],
    gloss: [["countenance", "le visage / la mine"], ["rugged", "rude / rugueux"], ["scanty", "avare / maigre"], ["backward in sentiment", "peu porté au sentiment"], ["lovable", "attachant"]]
  },

  {
    id: "market-crowd",
    type: "Presse",
    title: "What a market really is",
    author: "Essai · finance",
    intro: "Ce qu'est vraiment un marché : moins une affaire de chiffres qu'une foule qui parie sur l'avenir. (Pour ton monde de la finance.)",
    pairs: [
      ["A market is often pictured as a place of cold numbers, but at heart it is a crowd of people guessing what others will do next. Every price is a story the crowd tells itself about the future.",
       "On se représente souvent un marché comme un lieu de chiffres froids, mais au fond, c'est une foule de gens qui devinent ce que les autres vont faire ensuite. Chaque prix est une histoire que la foule se raconte à elle-même sur l'avenir."],
      ["When confidence is high, money flows in and prices climb; when fear takes over, the same assets are dumped at any price. Nothing about the companies has changed overnight — only the mood of the crowd.",
       "Quand la confiance est élevée, l'argent afflue et les prix grimpent ; quand la peur l'emporte, les mêmes actifs sont bradés à n'importe quel prix. Rien n'a changé dans les entreprises du jour au lendemain — seule l'humeur de la foule a changé."],
      ["That is why the calmest investor often wins. To buy when others panic and to hold when others chase is less a matter of intelligence than of temperament.",
       "C'est pourquoi l'investisseur le plus calme l'emporte souvent. Acheter quand les autres paniquent et conserver quand les autres courent après le marché relève moins de l'intelligence que du tempérament."]
    ],
    gloss: [["at heart", "au fond / essentiellement"], ["to climb", "grimper / monter"], ["to dump (assets)", "brader / se débarrasser de"], ["overnight", "du jour au lendemain"], ["to chase", "courir après / poursuivre"]]
  },
  {
    id: "ai-learns",
    type: "Presse",
    title: "The machines that learn",
    author: "Essai · technologie",
    intro: "Comment « apprennent » les intelligences artificielles d'aujourd'hui — et la vraie question qu'elles nous posent.",
    pairs: [
      ["Modern artificial intelligence does not think the way we do. It has read a vast share of everything ever written, and from that ocean of text it has learned to guess, word by word, what tends to come next.",
       "L'intelligence artificielle moderne ne pense pas comme nous. Elle a lu une immense partie de tout ce qui a jamais été écrit, et de cet océan de textes elle a appris à deviner, mot après mot, ce qui a tendance à suivre."],
      ["The result can feel like understanding, and sometimes it comes remarkably close. Yet the machine has no memory of yesterday and no stake in tomorrow; it neither hopes nor fears.",
       "Le résultat peut donner l'impression d'une compréhension, et parfois il en est remarquablement proche. Pourtant, la machine n'a aucun souvenir d'hier ni aucun intérêt dans demain ; elle n'espère ni ne craint."],
      ["The real question is no longer whether such tools are clever, but what we choose to hand over to them — and what we insist on keeping for ourselves.",
       "La vraie question n'est plus de savoir si ces outils sont intelligents, mais ce que nous choisissons de leur confier — et ce que nous tenons à garder pour nous."]
    ],
    gloss: [["a vast share", "une immense partie"], ["word by word", "mot après mot"], ["to have a stake in", "avoir un intérêt dans / être partie prenante"], ["to hand over", "confier / remettre"], ["to insist on", "tenir à / exiger"]]
  },
  {
    id: "why-sleep",
    type: "Presse",
    title: "Why we sleep",
    author: "Essai · sciences",
    intro: "Longtemps traité comme du temps perdu, le sommeil s'est révélé l'un des piliers de la santé.",
    pairs: [
      ["For a long time, sleep was treated as wasted time — a nightly pause we could trim to get more done. Science has since turned that idea on its head.",
       "Pendant longtemps, le sommeil a été considéré comme du temps perdu — une pause nocturne que l'on pouvait rogner pour en faire plus. La science a depuis renversé cette idée."],
      ["While we sleep, the brain sorts the day's memories, flushes out waste and repairs the body. A single bad night dulls attention; months of poor sleep quietly erode health.",
       "Pendant que nous dormons, le cerveau trie les souvenirs de la journée, évacue les déchets et répare le corps. Une seule mauvaise nuit émousse l'attention ; des mois de sommeil médiocre érodent la santé à bas bruit."],
      ["The lesson is humbling: we cannot cheat sleep for long. Sooner or later, the debt falls due, and the body collects what it is owed.",
       "La leçon est humble : on ne peut pas tromper le sommeil bien longtemps. Tôt ou tard, la dette arrive à échéance, et le corps réclame son dû."]
    ],
    gloss: [["to trim", "rogner / réduire"], ["to turn on its head", "renverser (une idée)"], ["to flush out", "évacuer / éliminer"], ["to dull", "émousser"], ["to fall due", "arriver à échéance"]]
  },
  {
    id: "praise-boredom",
    type: "Presse",
    title: "In defence of boredom",
    author: "Essai · société",
    intro: "Petit éloge de l'ennui, ce terreau oublié de la curiosité et de l'imagination.",
    pairs: [
      ["We have grown so good at filling every spare moment that boredom has almost vanished from daily life. The queue, the wait, the empty afternoon — all are now swallowed by a glowing screen.",
       "Nous sommes devenus si doués pour remplir le moindre moment libre que l'ennui a presque disparu de la vie quotidienne. La file d'attente, l'attente, l'après-midi vide — tout est désormais englouti par un écran lumineux."],
      ["Yet boredom was never merely empty. It is the soil in which curiosity and imagination take root; children left with nothing to do eventually invent something.",
       "Pourtant, l'ennui n'a jamais été simplement vide. C'est le terreau où la curiosité et l'imagination prennent racine ; les enfants qu'on laisse sans rien à faire finissent par inventer quelque chose."],
      ["To reclaim a little boredom, then, is not to waste time but to make room — for the wandering thoughts that no notification will ever bring.",
       "Retrouver un peu d'ennui, dès lors, ce n'est pas perdre son temps, mais faire de la place — pour ces pensées vagabondes qu'aucune notification n'apportera jamais."]
    ],
    gloss: [["spare moment", "moment libre"], ["to vanish", "disparaître"], ["to swallow", "engloutir / avaler"], ["to take root", "prendre racine"], ["to reclaim", "récupérer / se réapproprier"]]
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
