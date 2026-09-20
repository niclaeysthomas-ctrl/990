/* ============================================================
   990 — LECTURE DU JOUR : textes bilingues (EN ⇄ FR)
   - Extraits littéraires du DOMAINE PUBLIC (traduction maison)
   - Essais et reportages originaux écrits pour l'app
   Charger APRÈS data.js, AVANT app.js.
   Utilise : app, S, save(), speak(), toast(), addXp(), markStudy(),
             setView(), recordMistake(), optLabel().

   Structure : { id, type, title, author, intro,
                 pairs:[[en,fr],...],   // un paragraphe par paire
                 gloss:[[en,fr],...],   // 8 à 10 expressions
                 q:[[question, [4 options], indexBonneRéponse, explicationFR],...] }

   LONGUEUR (2026-09-20) : les textes faisaient 71 mots de moyenne —
   une lecture de 25 secondes. Ils sont désormais calibrés sur les
   vraies épreuves : 280-450 mots pour les essais (format Part 7
   long / Cambridge), 180-320 mots pour les extraits littéraires.
   Les questions sont écrites en anglais, comme au test ; seule
   l'explication est en français.
   ============================================================ */
window.READINGS = [
  {
    id: "austen-pride",
    type: "Littérature",
    title: "Pride and Prejudice",
    author: "Jane Austen, 1813",
    intro: "L'ouverture la plus célèbre du roman anglais, puis le dialogue qui la suit : une ironie parfaite sur le mariage, l'argent et les convenances.",
    pairs: [
      ["It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
       "C'est une vérité universellement reconnue qu'un célibataire pourvu d'une belle fortune doit avoir besoin d'une épouse."],
      ["However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.",
       "Aussi peu que l'on connaisse les sentiments ou les vues d'un tel homme à son arrivée dans une région, cette vérité est si bien ancrée dans l'esprit des familles voisines qu'on le considère comme la propriété légitime de l'une ou l'autre de leurs filles."],
      ["“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”",
       "« Mon cher Monsieur Bennet, lui dit son épouse un jour, avez-vous entendu dire que Netherfield Park est enfin loué ? »"],
      ["Mr. Bennet replied that he had not. “But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.” Mr. Bennet made no answer.",
       "M. Bennet répondit que non. « Il l'est pourtant, reprit-elle ; car Mme Long sort d'ici, et elle m'a tout raconté. » M. Bennet ne répondit rien."],
      ["“Do you not want to know who has taken it?” cried his wife impatiently. “You want to tell me, and I have no objection to hearing it.” This was invitation enough.",
       "« Ne voulez-vous pas savoir qui l'a pris ? » s'écria sa femme avec impatience. « Vous voulez me le dire, et je n'ai aucune objection à l'entendre. » C'était une invitation suffisante."],
      ["“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately.”",
       "« Eh bien, mon cher, sachez que Mme Long dit que Netherfield a été pris par un jeune homme de grande fortune, venu du nord de l'Angleterre ; qu'il est descendu lundi en voiture à quatre chevaux pour voir la propriété, et qu'elle lui a tant plu qu'il s'est entendu sur-le-champ avec M. Morris. »"],
      ["“What is his name?” “Bingley.” “Is he married or single?” “Oh! single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!”",
       "« Comment s'appelle-t-il ? — Bingley. — Est-il marié ou célibataire ? — Oh ! célibataire, mon cher, à coup sûr ! Un célibataire de grande fortune ; quatre ou cinq mille livres par an. Quelle aubaine pour nos filles ! »"],
      ["“How so? How can it affect them?” “My dear Mr. Bennet,” replied his wife, “how can you be so tiresome! You must know that I am thinking of his marrying one of them.”",
       "« Comment cela ? En quoi cela les concerne-t-il ? — Mon cher Monsieur Bennet, répondit sa femme, comme vous êtes assommant ! Vous savez bien que je pense à son mariage avec l'une d'elles. »"]
    ],
    gloss: [["universally acknowledged", "universellement reconnu"], ["in possession of", "pourvu de / en possession de"], ["in want of", "ayant besoin de"], ["rightful", "légitime"], ["surrounding", "environnant / voisin"], ["to be let", "être loué (bien immobilier)"], ["to return (in dialogue)", "répliquer / rétorquer"], ["to have no objection to", "n'avoir rien contre"], ["to come down", "descendre (de Londres vers la province)"], ["tiresome", "assommant / lassant"]],
    q: [
      ["What does Mrs. Bennet want her husband to understand?", ["That Netherfield Park is too expensive to rent", "That Mr. Bingley might marry one of their daughters", "That Mrs. Long is not to be trusted", "That the family should move to the north of England"], 1, "Sa dernière réplique le dit : « I am thinking of his marrying one of them ». Tout le dialogue tourne autour de ça — elle ne parle de la location que pour y arriver."],
      ["In the opening sentence, “must be in want of a wife” means that the man", ["is certainly looking for a wife", "has recently lost his wife", "cannot afford a wife", "refuses to take a wife"], 0, "To be in want of = avoir besoin de, manquer de. Rien à voir avec « want » = vouloir seul, ni avec le français « manquer à »."],
      ["The tone of the first two paragraphs is best described as", ["sincere admiration", "open indignation", "gentle irony", "scientific detachment"], 2, "Austen énonce comme une loi universelle ce qui n'est qu'un calcul de familles voisines : c'est de l'ironie, et c'est le ton du roman entier."]
    ]
  },
  {
    id: "dickens-two-cities",
    type: "Littérature",
    title: "A Tale of Two Cities",
    author: "Charles Dickens, 1859",
    intro: "L'ouverture entière d'« Un conte de deux cités » : une cascade d'antithèses sur une époque de contrastes, à la veille de la Révolution française.",
    pairs: [
      ["It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity.",
       "C'était le meilleur des temps, c'était le pire des temps, c'était l'âge de la sagesse, c'était l'âge de la folie, c'était l'époque de la foi, c'était l'époque de l'incrédulité."],
      ["It was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us.",
       "C'était la saison de la Lumière, c'était la saison des Ténèbres, c'était le printemps de l'espérance, c'était l'hiver du désespoir, nous avions tout devant nous, nous n'avions rien devant nous."],
      ["We were all going direct to Heaven, we were all going direct the other way — in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
       "Nous allions tous droit au Ciel, nous allions tous droit dans l'autre sens — bref, l'époque ressemblait si fort à la nôtre que certaines de ses autorités les plus bruyantes exigeaient qu'on ne la jugeât, en bien comme en mal, qu'au degré superlatif."],
      ["There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France.",
       "Il y avait un roi à la forte mâchoire et une reine au visage quelconque sur le trône d'Angleterre ; il y avait un roi à la forte mâchoire et une reine au beau visage sur le trône de France."],
      ["In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.",
       "Dans les deux pays, il était plus clair que le cristal, pour les seigneurs qui se réservaient les pains et les poissons de l'État, que les choses en général étaient réglées pour toujours."],
      ["It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this.",
       "C'était l'an de grâce mille sept cent soixante-quinze. Des révélations spirituelles étaient accordées à l'Angleterre en cette époque privilégiée, comme en la nôtre."],
      ["France, less favoured on the whole as to matters spiritual than her sister of the shield and trident, rolled with exceeding smoothness down hill, making paper money and spending it.",
       "La France, dans l'ensemble moins favorisée que sa sœur au bouclier et au trident pour les affaires de l'esprit, dévalait la pente avec une aisance extrême, fabriquant du papier-monnaie et le dépensant."]
    ],
    gloss: [["wisdom", "la sagesse"], ["foolishness", "la folie"], ["belief", "la foi / la croyance"], ["incredulity", "l'incrédulité"], ["despair", "le désespoir"], ["in short", "bref / en somme"], ["jaw", "la mâchoire"], ["plain (face)", "quelconque / sans beauté"], ["to be settled for ever", "être réglé une fois pour toutes"], ["down hill", "en descendant la pente"]],
    q: [
      ["What is the main rhetorical device of the opening paragraphs?", ["Understatement", "Antithesis", "Rhetorical questions", "Direct address to the reader"], 1, "Chaque membre de phrase est immédiatement contredit par son contraire (best/worst, Light/Darkness) : c'est l'antithèse, filée sur tout le paragraphe."],
      ["The phrase “so far like the present period” suggests that Dickens", ["believes his own century is entirely different", "is drawing a parallel between 1775 and his own time", "cannot remember the exact date", "is quoting a historian"], 1, "So far like = « à ce point semblable à ». Dickens écrit en 1859 et dit que son époque ressemble à 1775 : c'est un parallèle, pas une opposition."],
      ["What is implied about France in the last paragraph?", ["It was heading for trouble while spending freely", "It was spiritually richer than England", "It had already abolished paper money", "It was at war with England"], 0, "« Rolled with exceeding smoothness down hill » = elle dévalait la pente sans s'en rendre compte, tout en imprimant et dépensant de la monnaie. L'ironie annonce la Révolution."]
    ]
  },
  {
    id: "melville-moby",
    type: "Littérature",
    title: "Moby-Dick",
    author: "Herman Melville, 1851",
    intro: "L'appel du large qui ouvre « Moby Dick » — et le paragraphe entier qui suit la phrase la plus célèbre de la littérature américaine.",
    pairs: [
      ["Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
       "Appelez-moi Ismaël. Il y a quelques années — peu importe combien exactement — n'ayant guère ou pas d'argent en poche, et rien de particulier pour me retenir à terre, je songeai à naviguer un peu et à voir la partie aquatique du monde."],
      ["It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet.",
       "C'est ma manière à moi de chasser le spleen et de régler la circulation. Chaque fois que je sens ma bouche se durcir ; chaque fois qu'il fait dans mon âme un novembre humide et bruineux ; chaque fois que je me surprends à m'arrêter malgré moi devant les magasins de cercueils, et à fermer la marche de chaque enterrement que je croise."],
      ["And especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off — then, I account it high time to get to sea as soon as I can.",
       "Et surtout chaque fois que mes humeurs noires prennent sur moi un tel ascendant qu'il me faut un solide principe moral pour m'empêcher de descendre délibérément dans la rue et de faire méthodiquement tomber les chapeaux des gens — alors, j'estime qu'il est grand temps de prendre la mer au plus vite."],
      ["This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this.",
       "C'est là mon substitut au pistolet et à la balle. Avec un geste philosophique, Caton se jette sur son épée ; moi, je m'embarque tranquillement. Il n'y a rien là de surprenant."],
      ["If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.",
       "S'ils le savaient seulement, presque tous les hommes, à leur mesure, nourrissent un jour ou l'autre à l'égard de l'océan des sentiments à peu près identiques aux miens."]
    ],
    gloss: [["never mind", "peu importe"], ["purse", "la bourse / le porte-monnaie"], ["on shore", "à terre"], ["to sail about", "naviguer (sans but précis)"], ["watery", "aquatique"], ["to drive off", "chasser / dissiper"], ["drizzly", "bruineux"], ["to bring up the rear", "fermer la marche"], ["to get the upper hand of", "prendre l'ascendant sur"], ["to take to (the ship)", "se mettre à / s'embarquer sur"]],
    q: [
      ["According to the narrator, why does he go to sea?", ["To make his fortune in trade", "To escape a crime he has committed", "To cure a deep and recurring gloom", "To search for a particular whale"], 2, "Il l'écrit noir sur blanc : « driving off the spleen », « a damp, drizzly November in my soul ». La mer est son remède contre la mélancolie."],
      ["“This is my substitute for pistol and ball” means that going to sea replaces", ["a duel he has been challenged to", "suicide", "hunting as a pastime", "military service"], 1, "La comparaison avec Caton, qui se jette sur son épée, ne laisse pas de doute : prendre la mer remplace le suicide."],
      ["What does the narrator claim in the final paragraph?", ["That sailors are a rare breed", "That most men secretly feel as he does about the ocean", "That the sea is more dangerous than people admit", "That he alone understands the ocean"], 1, "« Almost all men in their degree … cherish very nearly the same feelings » : il généralise son cas, il ne s'en distingue pas."]
    ]
  },
  {
    id: "forest-network",
    type: "Presse",
    title: "The hidden network beneath the forest",
    author: "Essai · sciences",
    intro: "Le « wood wide web » : comment les arbres communiquent sous terre — et pourquoi une partie des chercheurs trouve la métaphore trop belle. Remarque la charpente : thèse, preuve, objection, verdict nuancé.",
    pairs: [
      ["Beneath the forest floor lies a network as intricate as any city. Threads of fungi wrap around the roots of trees, linking them into a vast web that scientists sometimes call the “wood wide web”.",
       "Sous le sol de la forêt s'étend un réseau aussi complexe qu'une ville. Des filaments de champignons enlacent les racines des arbres et les relient en une immense toile que les scientifiques appellent parfois le « wood wide web »."],
      ["Through these fungal threads, trees exchange sugar, water and even chemical warnings. A tree under attack by insects can alert its neighbours, which then strengthen their defences before the danger arrives.",
       "À travers ces filaments, les arbres échangent du sucre, de l'eau et même des signaux d'alarme chimiques. Un arbre attaqué par des insectes peut prévenir ses voisins, qui renforcent alors leurs défenses avant même que le danger n'arrive."],
      ["The idea took hold in the 1990s, when Canadian researchers fed birch and fir trees with carbon that could be traced, and found the same carbon turning up in neighbouring trees days later. Something, clearly, was moving underground.",
       "L'idée s'est imposée dans les années 1990, lorsque des chercheurs canadiens ont nourri des bouleaux et des sapins avec du carbone traçable, et ont retrouvé ce même carbone dans les arbres voisins quelques jours plus tard. De toute évidence, quelque chose circulait sous terre."],
      ["Older trees, in particular, appear to act as hubs. Because their roots reach further and their canopies capture more light, they can afford to pass surplus sugar to the shaded seedlings below — including, in some experiments, seedlings that are not their own offspring.",
       "Les arbres âgés, en particulier, semblent jouer le rôle de nœuds du réseau. Parce que leurs racines s'étendent plus loin et que leur couronne capte davantage de lumière, ils peuvent se permettre de céder leur sucre excédentaire aux jeunes pousses à l'ombre, en contrebas — y compris, dans certaines expériences, à des pousses qui ne sont pas leur propre descendance."],
      ["It is a seductive picture, and that is precisely what makes a number of biologists uneasy. The fungi, after all, are not a charity: they take a substantial cut of the sugar they carry, and some species behave less like postmen than like landlords collecting rent.",
       "C'est une image séduisante, et c'est précisément ce qui met un certain nombre de biologistes mal à l'aise. Les champignons, après tout, ne sont pas une œuvre de bienfaisance : ils prélèvent une part substantielle du sucre qu'ils transportent, et certaines espèces se comportent moins en facteurs qu'en propriétaires qui encaissent un loyer."],
      ["Critics also point out that most of the striking results come from a handful of forests and a handful of species. To leap from a fir plantation in British Columbia to “trees talk to each other” is, they argue, a leap of faith rather than of evidence.",
       "Les critiques soulignent aussi que la plupart des résultats spectaculaires proviennent d'une poignée de forêts et d'une poignée d'espèces. Passer d'une plantation de sapins en Colombie-Britannique à « les arbres se parlent » relève, selon eux, d'un acte de foi plutôt que d'une preuve."],
      ["Where the two camps agree is on what the network is not: it is not a benevolent mind, and it is not a market of equals. It is an economy, with exchange, dependence, cost and the occasional cheat — which is, on reflection, a far more interesting thing than a fairy tale.",
       "Ce sur quoi les deux camps s'accordent, c'est sur ce que le réseau n'est pas : ce n'est ni un esprit bienveillant, ni un marché entre égaux. C'est une économie, avec des échanges, des dépendances, des coûts et, çà et là, un tricheur — ce qui est, à la réflexion, bien plus intéressant qu'un conte de fées."],
      ["The practical stakes are considerable. If a forest is a connected system rather than a crowd of individuals, then clear-cutting does not simply remove trees; it severs the network that helps the survivors recover. Foresters in several countries have begun leaving the oldest trees standing for exactly that reason.",
       "Les enjeux pratiques sont considérables. Si une forêt est un système connecté plutôt qu'une foule d'individus, alors la coupe rase ne se contente pas de retirer des arbres : elle sectionne le réseau qui aide les survivants à se rétablir. Des forestiers de plusieurs pays ont commencé à laisser debout les arbres les plus anciens précisément pour cette raison."],
      ["The discovery has quietly reshaped how we picture a forest. It is not a crowd of solitary individuals competing for light, but a community bound together underground — cooperative, self-interested, and startlingly alive.",
       "Cette découverte a discrètement bouleversé notre image de la forêt. Ce n'est pas une foule d'individus solitaires se disputant la lumière, mais une communauté liée sous terre — coopérative, intéressée, et étonnamment vivante."]
    ],
    gloss: [["intricate", "complexe / minutieux"], ["threads", "des filaments / des fils"], ["to wrap around", "enlacer / envelopper"], ["to take hold", "s'imposer / s'installer"], ["to turn up", "réapparaître / refaire surface"], ["canopy", "la couronne / la canopée"], ["to take a cut", "prélever une part / une commission"], ["a leap of faith", "un acte de foi"], ["to sever", "sectionner / trancher"], ["bound together", "liés ensemble"]],
    q: [
      ["What does the writer say about the fungi in the network?", ["They transport sugar without taking anything in return", "They charge a significant price for what they carry", "They are harmful to every tree they touch", "They have only been observed in Canada"], 1, "« They take a substantial cut of the sugar they carry » : ils prélèvent leur part. C'est l'argument qui abîme l'image du réseau altruiste."],
      ["In paragraph 6, “a leap of faith rather than of evidence” criticises scientists who", ["refuse to publish their data", "generalise from too few cases", "believe forests have no value", "work only with computer models"], 1, "La phrase précédente pose le reproche : les résultats viennent « d'une poignée de forêts et d'une poignée d'espèces », et on en tire une conclusion générale."],
      ["What is the writer's overall position?", ["The wood wide web is a myth that should be abandoned", "The network exists but is better described as an economy than as a friendship", "Trees are conscious beings that communicate deliberately", "Forestry practices should remain unchanged"], 1, "Le paragraphe 7 tranche : « It is an economy, with exchange, dependence, cost and the occasional cheat ». Il accepte le fait, il refuse la morale qu'on y plaque."]
    ]
  },
  {
    id: "attention-economy",
    type: "Presse",
    title: "The economy of attention",
    author: "Essai · société",
    intro: "La ressource la plus disputée de notre époque. Texte utile deux fois : pour l'anglais, et parce que c'est un sujet de dissertation qui tombe sans arrêt aux examens de langue.",
    pairs: [
      ["For most of history, information was scarce and attention was cheap. A medieval scholar might travel for weeks to consult a single manuscript; the limiting factor was supply. Today the balance has flipped: information is endless, and attention has become the rarest currency of all.",
       "Pendant l'essentiel de l'histoire, l'information était rare et l'attention bon marché. Un érudit médiéval pouvait voyager des semaines pour consulter un seul manuscrit ; le facteur limitant était l'offre. Aujourd'hui, l'équilibre s'est inversé : l'information est infinie, et l'attention est devenue la monnaie la plus rare qui soit."],
      ["The economist Herbert Simon saw this coming as early as 1971. A wealth of information, he wrote, creates a poverty of attention. What is abundant becomes cheap; what is scarce becomes valuable — and what was scarce, suddenly, was us.",
       "L'économiste Herbert Simon l'avait vu venir dès 1971. Une abondance d'information, écrivait-il, crée une pauvreté de l'attention. Ce qui est abondant devient bon marché ; ce qui est rare prend de la valeur — et ce qui était rare, soudain, c'était nous."],
      ["Whole industries now compete for a few seconds of your focus. Every notification, headline and autoplay is engineered to pull your eyes back to the screen, often against your better judgement. The business model is simple enough to state in one line: the product is free because you are not the customer.",
       "Des industries entières se disputent désormais quelques secondes de votre concentration. Chaque notification, chaque titre, chaque lecture automatique est conçu pour ramener vos yeux vers l'écran, souvent contre votre propre gré. Le modèle économique tient en une ligne : le produit est gratuit parce que vous n'êtes pas le client."],
      ["It would be convenient to blame the engineers alone, but the demand side deserves scrutiny too. Nobody forces anyone to refresh a feed at a red light. The platforms did not invent distraction; they industrialised a weakness that was already there, and made it frictionless.",
       "Il serait commode de n'accuser que les ingénieurs, mais la demande mérite elle aussi d'être examinée. Personne n'oblige quiconque à rafraîchir un fil d'actualité au feu rouge. Les plateformes n'ont pas inventé la distraction ; elles ont industrialisé une faiblesse déjà présente, et l'ont rendue sans effort."],
      ["The costs are easy to underestimate because they are never charged in a single sum. A fragmented hour is not an hour minus a few minutes: research on task-switching suggests that the mind needs time to settle back into deep work, so the real loss is several times the length of the interruption itself.",
       "Les coûts sont faciles à sous-estimer parce qu'ils ne sont jamais facturés d'un coup. Une heure fragmentée n'est pas une heure moins quelques minutes : les travaux sur le changement de tâche indiquent que l'esprit met du temps à se replonger dans un travail exigeant, de sorte que la perte réelle vaut plusieurs fois la durée de l'interruption elle-même."],
      ["Regulation has begun to catch up, from design rules for minors to transparency requirements for recommendation systems. Whether a law can meaningfully govern the shape of a scrolling feed remains, at best, an open question.",
       "La réglementation commence à rattraper son retard, des règles de conception visant les mineurs aux obligations de transparence sur les systèmes de recommandation. Qu'une loi puisse véritablement régir la forme d'un fil que l'on fait défiler reste, au mieux, une question ouverte."],
      ["The most valuable skill of the coming decades may therefore be an old-fashioned one: the ability to decide, calmly and deliberately, what deserves your attention — and what does not. It is not a matter of willpower so much as of design. The people who read a book a week are rarely those with the strongest character; they are those who left the phone in another room.",
       "La compétence la plus précieuse des décennies à venir sera peut-être, dès lors, l'une des plus anciennes : savoir décider, avec calme et discernement, ce qui mérite votre attention — et ce qui ne le mérite pas. Ce n'est pas tant affaire de volonté que d'aménagement. Ceux qui lisent un livre par semaine sont rarement ceux qui ont le caractère le plus fort ; ce sont ceux qui ont laissé le téléphone dans une autre pièce."]
    ],
    gloss: [["scarce", "rare / peu abondant"], ["to flip", "s'inverser / basculer"], ["currency", "la monnaie"], ["against your better judgement", "contre son propre gré / à contrecœur"], ["to deserve scrutiny", "mériter d'être examiné"], ["frictionless", "sans effort / sans friction"], ["to underestimate", "sous-estimer"], ["task-switching", "le changement de tâche"], ["to catch up", "rattraper son retard"], ["willpower", "la volonté"]],
    q: [
      ["What does Herbert Simon's remark mean?", ["Information should be made more expensive", "The more information there is, the scarcer attention becomes", "Attention and information are both abundant today", "Poverty prevents people from accessing information"], 1, "« A wealth of information creates a poverty of attention » : l'abondance de l'un crée la rareté de l'autre. C'est un renversement économique, pas un constat social."],
      ["In paragraph 4, the writer argues that", ["users share part of the responsibility", "engineers alone are to blame", "distraction is a recent invention", "platforms should be nationalised"], 0, "« The demand side deserves scrutiny too » et « Nobody forces anyone to refresh a feed at a red light » : c'est une concession, un geste que tu dois savoir faire en dissertation."],
      ["What is the writer's final recommendation?", ["Rely on stronger willpower", "Change your environment rather than your character", "Wait for regulation to solve the problem", "Give up reading on screens entirely"], 1, "« It is not a matter of willpower so much as of design » — et l'exemple du téléphone laissé dans une autre pièce le rend concret."]
    ]
  },
  {
    id: "praise-walking",
    type: "Presse",
    title: "In praise of walking",
    author: "Essai · culture",
    intro: "Un éloge de la marche comme compagne de la pensée, des péripatéticiens aux salles de réunion d'aujourd'hui.",
    pairs: [
      ["There is a particular kind of thinking that only happens on foot. Sit still and ideas stall; start walking, and they begin to move with you.",
       "Il existe une forme de pensée qui ne survient qu'en marchant. Restez immobile et les idées se figent ; mettez-vous en marche, et elles se mettent à avancer avec vous."],
      ["Philosophers have long known this. Aristotle taught while walking, and his school was named after the covered walkway where he paced. Centuries later, Rousseau claimed he could only meditate while moving, and Nietzsche went further still: all truly great thoughts, he insisted, are conceived while walking.",
       "Les philosophes le savent depuis longtemps. Aristote enseignait en marchant, et son école tire son nom de la galerie couverte qu'il arpentait. Des siècles plus tard, Rousseau affirmait ne pouvoir méditer qu'en mouvement, et Nietzsche allait plus loin encore : toutes les grandes pensées, soutenait-il, se conçoivent en marchant."],
      ["The explanation is not only poetic. Walking raises the flow of blood to the brain without demanding the concentration that, say, cycling through traffic requires. The body is busy enough to keep restlessness at bay, and free enough to leave the mind alone.",
       "L'explication n'est pas seulement poétique. La marche accroît l'afflux sanguin vers le cerveau sans exiger la concentration que réclame, disons, le vélo dans la circulation. Le corps est assez occupé pour tenir l'agitation à distance, et assez libre pour laisser l'esprit tranquille."],
      ["Experiments at Stanford found that people produced considerably more creative ideas while walking than while seated, and that the effect persisted for a short while after they sat down again. Notably, it made little difference whether they walked outdoors or on a treadmill facing a blank wall — the movement was doing the work, not the view.",
       "Des expériences menées à Stanford ont montré que les participants produisaient nettement plus d'idées créatives en marchant qu'assis, et que l'effet se prolongeait un moment après qu'ils se furent rassis. Fait notable, qu'ils marchent dehors ou sur un tapis de course face à un mur nu ne changeait presque rien — c'était le mouvement qui opérait, pas le paysage."],
      ["There is a caveat worth stating. Walking helps you generate options; it is markedly less useful when you need to verify a calculation or draft a precise clause. Divergent thinking benefits, convergent thinking does not.",
       "Une réserve mérite d'être formulée. La marche aide à produire des options ; elle est nettement moins utile lorsqu'il faut vérifier un calcul ou rédiger une clause précise. La pensée divergente y gagne, la pensée convergente non."],
      ["Offices have noticed. The walking meeting has become a minor fashion, sometimes for good reasons and sometimes because it is easier to move the furniture than to shorten the agenda.",
       "Les entreprises l'ont remarqué. La réunion en marchant est devenue une petite mode, parfois pour de bonnes raisons et parfois parce qu'il est plus facile de déplacer les meubles que de raccourcir l'ordre du jour."],
      ["Perhaps that is why a walk can untangle a problem that an hour at a desk could not. The body sets a pace, and the mind, freed from the screen, quietly catches up. The point is not to arrive anywhere in particular; it is that nothing is asking for your attention on the way.",
       "C'est peut-être pour cela qu'une promenade peut dénouer un problème qu'une heure au bureau n'a pu résoudre. Le corps donne le rythme, et l'esprit, libéré de l'écran, le rejoint sans bruit. Le but n'est pas d'arriver quelque part en particulier ; c'est que rien, en chemin, ne réclame votre attention."]
    ],
    gloss: [["to stall", "se figer / caler"], ["to pace", "arpenter"], ["to keep at bay", "tenir à distance"], ["restlessness", "l'agitation / la fébrilité"], ["a treadmill", "un tapis de course"], ["a caveat", "une réserve / une mise en garde"], ["markedly", "nettement / sensiblement"], ["to untangle", "démêler / dénouer"], ["to catch up", "rattraper / rejoindre"], ["the agenda", "l'ordre du jour (faux ami : ce n'est pas l'agenda-carnet)"]],
    q: [
      ["What did the Stanford experiments suggest?", ["Walking outdoors is far better than walking indoors", "The scenery matters more than the movement", "Movement itself, not the surroundings, produced the effect", "Creative ideas only appear while people are still walking"], 2, "Le texte le dit explicitement : marcher dehors ou face à un mur nu changeait peu de chose — « the movement was doing the work, not the view »."],
      ["The “caveat” in paragraph 5 is that walking", ["is unsafe in heavy traffic", "does not help with tasks requiring precision", "takes more time than sitting", "tires the body too quickly"], 1, "« Markedly less useful when you need to verify a calculation or draft a precise clause » : la marche sert à ouvrir, pas à vérifier."],
      ["What does the writer imply about walking meetings?", ["They are always more productive than seated ones", "They are sometimes a way of avoiding a real problem", "They were invented by Aristotle's school", "They should replace all office meetings"], 1, "« It is easier to move the furniture than to shorten the agenda » : l'ironie vise les réunions trop longues qu'on déplace au lieu de les réduire."]
    ]
  },
  {
    id: "cities-cool",
    type: "Presse",
    title: "When cities learn to breathe",
    author: "Reportage · environnement",
    intro: "Comment les villes tentent de se rafraîchir face aux étés de plus en plus brûlants — et ce que coûte la solution facile.",
    pairs: [
      ["As summers grow fiercer, cities are discovering that concrete and glass trap heat like an oven. A single street can be several degrees hotter than the park beside it, and the gap widens after dark, when stone and asphalt release the heat they stored all day.",
       "À mesure que les étés se font plus rudes, les villes découvrent que le béton et le verre emprisonnent la chaleur comme un four. Une simple rue peut être de plusieurs degrés plus chaude que le parc voisin, et l'écart se creuse après la tombée de la nuit, quand la pierre et le bitume restituent la chaleur accumulée tout le jour."],
      ["Climatologists call this the urban heat island, and it is not evenly shared. The hottest districts tend to be the ones with the fewest trees, the smallest gardens and the lowest incomes — which is why a heatwave is a public health problem long before it is an engineering one.",
       "Les climatologues parlent d'îlot de chaleur urbain, et il n'est pas également réparti. Les quartiers les plus chauds sont généralement ceux qui comptent le moins d'arbres, les plus petits jardins et les revenus les plus faibles — c'est pourquoi une canicule est un problème de santé publique bien avant d'être un problème d'ingénieur."],
      ["In response, planners are turning to old ideas dressed in new science: painting roofs white to bounce back sunlight, planting trees to cast shade, and reopening rivers long buried under asphalt. Seoul famously tore down an elevated motorway to uncover the stream running beneath it, and measured a drop of several degrees along the corridor.",
       "En réponse, les urbanistes se tournent vers de vieilles idées habillées de science nouvelle : peindre les toits en blanc pour renvoyer la lumière, planter des arbres pour faire de l'ombre, et rouvrir des rivières longtemps enfouies sous le bitume. Séoul a notamment démoli une autoroute urbaine pour dégager le cours d'eau qui coulait dessous, et mesuré une baisse de plusieurs degrés le long du corridor."],
      ["Trees remain the most reliable instrument, and the least fashionable, because they take twenty years to pay off and a single summer to plant. Their cooling comes from two sources at once: the shade they cast, and the water they release through their leaves.",
       "Les arbres demeurent l'instrument le plus fiable, et le moins spectaculaire, parce qu'il leur faut vingt ans pour être rentables et un seul été pour être plantés. Leur fraîcheur vient de deux sources à la fois : l'ombre qu'ils projettent, et l'eau qu'ils libèrent par leurs feuilles."],
      ["The tempting alternative is air conditioning, and here lies the trap. Every unit cools one flat by pumping heat into the street, so the more a city cools indoors, the hotter it becomes outdoors — and the more electricity it burns doing so.",
       "L'alternative tentante, c'est la climatisation, et c'est là qu'est le piège. Chaque appareil rafraîchit un logement en rejetant la chaleur dans la rue, de sorte que plus une ville se rafraîchit à l'intérieur, plus elle se réchauffe dehors — et plus elle consomme d'électricité pour y parvenir."],
      ["None of this is cheap, and cities rarely have the budget to do everything at once. The sequencing matters: shade where people queue and wait, water where children play, and insulation in the buildings that heat up fastest.",
       "Rien de tout cela n'est bon marché, et les villes ont rarement le budget pour tout mener de front. L'ordre des priorités compte : de l'ombre là où les gens font la queue et attendent, de l'eau là où les enfants jouent, et de l'isolation dans les bâtiments qui chauffent le plus vite."],
      ["The goal is a city that can breathe — one that cools itself naturally, so that the hottest days become bearable without an air conditioner humming in every window.",
       "Le but est une ville capable de respirer — qui se rafraîchit d'elle-même, pour que les jours les plus chauds deviennent supportables sans un climatiseur ronronnant à chaque fenêtre."]
    ],
    gloss: [["fiercer", "plus rudes / plus intenses"], ["to trap", "emprisonner / piéger"], ["to widen", "se creuser / s'élargir"], ["a heatwave", "une canicule"], ["to bounce back", "renvoyer / réfléchir"], ["to cast shade", "faire de l'ombre"], ["to tear down", "démolir (tore, torn)"], ["to pay off", "être rentable / porter ses fruits"], ["sequencing", "l'ordre des priorités / l'enchaînement"], ["bearable", "supportable"]],
    q: [
      ["Why does the writer call a heatwave “a public health problem long before it is an engineering one”?", ["Because engineers refuse to work in summer", "Because the hottest districts are also the poorest and least green", "Because hospitals are usually badly insulated", "Because heat only affects people who work outdoors"], 1, "La phrase précédente donne la raison : les quartiers les plus chauds cumulent le moins d'arbres et les revenus les plus faibles. L'inégalité vient avant la technique."],
      ["What is the “trap” of air conditioning?", ["It breaks down during heatwaves", "It cools flats by making the street hotter", "It is forbidden in most European cities", "It uses water that cities cannot spare"], 1, "« Every unit cools one flat by pumping heat into the street » — la chaleur n'est pas supprimée, elle est déplacée."],
      ["According to the text, why are trees described as “the least fashionable” solution?", ["They are difficult to plant in cities", "Their benefit arrives long after the political term that pays for them", "They need more water than cities can provide", "They block the light in narrow streets"], 1, "« They take twenty years to pay off and a single summer to plant » : le coût est immédiat, le bénéfice lointain — c'est ce qui les rend peu attractifs politiquement."]
    ]
  },
  {
    id: "deep-sea",
    type: "Presse",
    title: "The deep sea, our last frontier",
    author: "Essai · sciences",
    intro: "Les grands fonds : le plus vaste territoire encore inexploré de la planète — et déjà le prochain champ de bataille minier.",
    pairs: [
      ["We have mapped the surface of Mars in finer detail than the floor of our own oceans. Below a certain depth, sunlight vanishes and the water turns to perpetual night; below another, the pressure would crumple a steel drum like paper.",
       "Nous avons cartographié la surface de Mars avec plus de précision que le fond de nos propres océans. Sous une certaine profondeur, la lumière du Soleil disparaît et l'eau se change en nuit perpétuelle ; plus bas encore, la pression froisserait un fût d'acier comme du papier."],
      ["Yet this darkness is far from empty. Creatures glow with their own light, feed on chemicals seeping from the seabed, and survive pressures that would crush a submarine. Some live around volcanic vents where the water leaves the rock at temperatures well above boiling.",
       "Pourtant, cette obscurité est loin d'être vide. Des créatures brillent de leur propre lumière, se nourrissent de substances qui suintent du fond, et survivent à des pressions qui écraseraient un sous-marin. Certaines vivent autour de sources volcaniques où l'eau sort de la roche à des températures bien supérieures à l'ébullition."],
      ["Those vents overturned a basic assumption. Until the 1970s, biologists took it for granted that all life ultimately depends on sunlight. The communities found there depend on chemistry instead — which is why the discovery changed the odds of finding life elsewhere in the solar system.",
       "Ces sources ont renversé un postulat de base. Jusqu'aux années 1970, les biologistes tenaient pour acquis que toute vie dépend en dernier ressort de la lumière du Soleil. Les communautés que l'on y a trouvées dépendent de la chimie à la place — c'est pourquoi cette découverte a changé les probabilités de trouver la vie ailleurs dans le système solaire."],
      ["Each expedition brings back species no one has ever seen. A single dive can yield dozens of them, which tells you less about the skill of the crew than about how little has been looked at: perhaps a quarter of the seabed has been mapped at useful resolution.",
       "Chaque expédition rapporte des espèces que personne n'a jamais vues. Une seule plongée peut en livrer des dizaines, ce qui en dit moins sur le talent de l'équipage que sur le peu qu'on a regardé : un quart du fond marin, peut-être, a été cartographié à une résolution utile."],
      ["The deep is also, awkwardly, rich. The same plains hold nodules of cobalt, nickel and manganese — the metals that batteries are built from — lying loose on the sediment, waiting to be collected by machines the size of a house.",
       "Les grands fonds sont aussi, fâcheusement, riches. Ces mêmes plaines recèlent des nodules de cobalt, de nickel et de manganèse — les métaux dont on fait les batteries — posés librement sur le sédiment, attendant d'être ramassés par des machines de la taille d'une maison."],
      ["Mining companies argue that the sea floor is the least bad place to find them, since the alternative is open-pit mines that displace people. Marine scientists reply that we would be destroying an ecosystem we have not yet described, and that the sediment plumes stirred up by the machines would travel far beyond the licence area.",
       "Les compagnies minières soutiennent que le plancher océanique est le moins mauvais endroit où les chercher, puisque l'alternative consiste en des mines à ciel ouvert qui déplacent des populations. Les scientifiques marins répondent que l'on détruirait un écosystème que l'on n'a pas même décrit, et que les panaches de sédiments soulevés par les machines voyageraient bien au-delà de la zone concédée."],
      ["The deep sea remains, quite literally, the largest unexplored place on Earth — a frontier hidden not in the sky, but beneath our feet. Whether it is explored before it is exploited is now a question of timing, and the timing is not looking generous.",
       "Les grands fonds demeurent, au sens propre, le plus vaste lieu inexploré de la Terre — une frontière cachée non dans le ciel, mais sous nos pieds. Savoir s'ils seront explorés avant d'être exploités est désormais une question de calendrier, et le calendrier ne s'annonce pas généreux."]
    ],
    gloss: [["the floor (of the ocean)", "le fond (marin)"], ["to vanish", "disparaître"], ["to crumple", "froisser / écraser"], ["to glow", "briller / luire"], ["to seep", "suinter / s'infiltrer"], ["a vent", "une source / un évent (hydrothermal)"], ["to take for granted", "tenir pour acquis"], ["to yield", "livrer / produire"], ["loose", "libre / non fixé"], ["a plume", "un panache (de sédiments)"]],
    q: [
      ["Why did the discovery of volcanic vents matter beyond marine biology?", ["It proved that submarines can reach any depth", "It showed that life can exist without sunlight", "It revealed new sources of drinking water", "It explained the origin of the oceans"], 1, "Le texte relie explicitement les deux : la vie y dépend de la chimie et non du Soleil, ce qui change « the odds of finding life elsewhere in the solar system »."],
      ["What point does the writer make about new species being found on every dive?", ["The crews have become far more skilled", "It shows how little of the seabed has been examined", "Species are evolving faster than before", "Most of them had already been described"], 1, "« Which tells you less about the skill of the crew than about how little has been looked at » — la tournure less … than … déplace la cause."],
      ["The phrase “the timing is not looking generous” suggests that", ["exploration will probably come after exploitation begins", "mining licences will soon be cancelled", "the science will be finished within a decade", "companies have agreed to wait"], 0, "La phrase précédente pose la course : explorer avant d'exploiter. Dire que le calendrier n'est pas généreux, c'est dire qu'on risque de perdre cette course."]
    ]
  },
  {
    id: "empty-platform",
    type: "Littérature",
    title: "The empty platform",
    author: "Récit original",
    intro: "Une vignette littéraire écrite pour l'app : un instant suspendu sur un quai désert. Prête attention aux temps du récit — prétérit, plus-que-parfait, et une seule phrase au present perfect.",
    pairs: [
      ["The last train had gone. On the empty platform, a single lamp buzzed against the dark, and the cold came up through the soles of his shoes.",
       "Le dernier train était parti. Sur le quai désert, une unique lampe bourdonnait contre l'obscurité, et le froid remontait par la semelle de ses chaussures."],
      ["He had missed it by a minute — the kind of minute that decides nothing and everything. Somewhere down the line, the red lights shrank and were gone, and the silence closed in behind them like water.",
       "Il l'avait manqué d'une minute — le genre de minute qui ne décide rien et tout à la fois. Quelque part au bout de la voie, les feux rouges rétrécirent puis s'évanouirent, et le silence se referma derrière eux comme de l'eau."],
      ["For a while he did what people do. He checked the board, which had already forgotten the train and offered him nothing until 5:41. He checked his phone, which told him the same thing in a smaller font.",
       "Un moment, il fit ce que font les gens. Il consulta le panneau, qui avait déjà oublié le train et ne lui proposait rien avant 5 h 41. Il consulta son téléphone, qui lui dit la même chose dans une police plus petite."],
      ["Then he stopped, because there was nothing left to check, and the stopping was the strangest part. He had not stood still, properly still, in something like two years.",
       "Puis il s'arrêta, parce qu'il n'y avait plus rien à consulter, et cet arrêt fut le plus étrange. Il ne s'était pas tenu immobile, vraiment immobile, depuis quelque chose comme deux ans."],
      ["A cleaner came along the far platform, pushing a cart that squeaked at every third step. She looked across at him without curiosity, the way you look at weather, and went on.",
       "Une femme de ménage passa sur le quai d'en face, poussant un chariot qui grinçait un pas sur trois. Elle le regarda de l'autre côté sans curiosité, comme on regarde le temps qu'il fait, et poursuivit son chemin."],
      ["He thought about the meeting he would now miss, and found, testing the thought carefully like a tooth, that it did not hurt. He thought about the message he owed his father, and that one did.",
       "Il pensa à la réunion qu'il allait manquer et découvrit, en sondant prudemment l'idée comme on sonde une dent, qu'elle ne lui faisait pas mal. Il pensa au message qu'il devait à son père, et celui-là, si."],
      ["He sat down on the cold bench and, for the first time in months, felt no hurry at all. There was nowhere left to be. He almost smiled.",
       "Il s'assit sur le banc glacé et, pour la première fois depuis des mois, ne ressentit aucune hâte. Il n'y avait plus nulle part où être. Il faillit sourire."],
      ["It has been four hours, he thought, since I decided anything. The lamp buzzed. Far off, a goods train went through without stopping, and the platform trembled very slightly under his feet, and then was still again.",
       "Cela fait quatre heures, pensa-t-il, que je n'ai rien décidé. La lampe bourdonna. Au loin, un train de marchandises passa sans s'arrêter, le quai trembla très légèrement sous ses pieds, puis redevint immobile."]
    ],
    gloss: [["to buzz", "bourdonner / grésiller"], ["the soles", "les semelles"], ["to shrink", "rétrécir (shrank, shrunk)"], ["to close in", "se refermer / se resserrer"], ["the board", "le panneau d'affichage"], ["to squeak", "grincer / couiner"], ["to owe someone", "devoir (quelque chose) à quelqu'un"], ["hurry", "la hâte / la précipitation"], ["a goods train", "un train de marchandises (BrE)"], ["still", "immobile (adj.) / encore (adv.)"]],
    q: [
      ["What does the narrator suggest by “the stopping was the strangest part”?", ["The train stopped unexpectedly", "He was unused to being motionless", "He had trouble breathing", "The station was about to close"], 1, "La phrase suivante le confirme : « He had not stood still, properly still, in something like two years ». Ce qui l'étonne, c'est l'immobilité, pas le train."],
      ["Which two things does he compare in paragraph 6?", ["A meeting that no longer matters and a message that still does", "His father and his employer", "The cold bench and the warm train", "The cleaner's work and his own"], 0, "« It did not hurt » pour la réunion, « and that one did » pour le message à son père. Le test de la dent sert à mesurer laquelle des deux fait encore mal."],
      ["“There was nowhere left to be” implies that the character feels", ["trapped and anxious", "unexpectedly relieved", "angry with himself", "afraid of the dark"], 1, "Le contexte tranche : « felt no hurry at all », « He almost smiled ». La phrase dit la libération, pas l'enfermement."]
    ]
  },
  {
    id: "shelley-frankenstein",
    type: "Littérature",
    title: "Frankenstein",
    author: "Mary Shelley, 1818",
    intro: "La première page du roman : l'explorateur Walton écrit à sa sœur, porté par un enthousiasme que le récit viendra assombrir. Une leçon de registre épistolaire soutenu.",
    pairs: [
      ["You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings.",
       "Tu te réjouiras d'apprendre qu'aucun désastre n'a accompagné le commencement d'une entreprise que tu envisageais avec de si sombres pressentiments."],
      ["I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.",
       "Je suis arrivé ici hier, et ma première tâche est d'assurer ma chère sœur de mon bien-être et de ma confiance grandissante dans le succès de mon entreprise."],
      ["I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight.",
       "Je suis déjà loin au nord de Londres, et tandis que je marche dans les rues de Pétersbourg, je sens une froide brise du nord jouer sur mes joues, qui raffermit mes nerfs et me remplit de joie."],
      ["Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes.",
       "Comprends-tu ce sentiment ? Cette brise, qui a voyagé depuis les régions vers lesquelles j'avance, me donne un avant-goût de ces climats glacés."],
      ["Inspirited by this wind of promise, my daydreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight.",
       "Animé par ce vent de promesse, mes rêveries se font plus ferventes et plus vives. J'essaie en vain de me persuader que le pôle est le siège du gel et de la désolation ; il s'offre toujours à mon imagination comme la région de la beauté et du ravissement."],
      ["There, Margaret, the sun is for ever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There — for with your leave, my sister, I will put some trust in preceding navigators — there snow and frost are banished.",
       "Là-bas, Margaret, le soleil est à jamais visible, son large disque effleurant l'horizon et répandant une splendeur perpétuelle. Là-bas — car, avec ta permission, ma sœur, je veux accorder quelque crédit aux navigateurs qui m'ont précédé — là-bas, la neige et le gel sont bannis."]
    ],
    gloss: [["to rejoice", "se réjouir"], ["commencement", "le commencement / le début"], ["forebodings", "les (sombres) pressentiments"], ["welfare", "le bien-être"], ["undertaking", "l'entreprise / le projet"], ["to brace", "raffermir / tonifier"], ["a foretaste", "un avant-goût"], ["in vain", "en vain"], ["to skirt", "effleurer / longer"], ["with your leave", "avec ta permission (registre soutenu)"]],
    q: [
      ["What is Walton's main purpose in writing this letter?", ["To ask his sister for money", "To reassure her and share his enthusiasm", "To warn her of a coming disaster", "To describe a scientific discovery"], 1, "Il l'annonce lui-même : « my first task is to assure my dear sister of my welfare and increasing confidence »."],
      ["How does Walton picture the pole?", ["As a place of frost and desolation, as others describe it", "As a region of beauty, against the evidence", "As a commercial opportunity", "As too dangerous to reach"], 1, "« I try in vain to be persuaded that the pole is the seat of frost and desolation » : il connaît la version raisonnable et n'arrive pas à y croire."],
      ["“With your leave” in the last paragraph is a polite way of saying", ["if you are leaving", "if you will allow me", "when you are away", "unless you object later"], 1, "With your leave = avec votre permission. Le mot leave a ici son sens ancien de « permission », rien à voir avec le verbe partir."]
    ]
  },
  {
    id: "carroll-alice",
    type: "Littérature",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll, 1865",
    intro: "L'ouverture entière, jusqu'à la montre du lapin blanc. Note au passage le mot « actually » dans son vrai sens — celui que les francophones ratent une fois sur deux.",
    pairs: [
      ["Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it.",
       "Alice commençait à en avoir bien assez d'être assise auprès de sa sœur sur le talus, sans rien à faire : une ou deux fois, elle avait jeté un coup d'œil au livre que lisait sa sœur, mais il n'y avait ni images ni dialogues."],
      ["“And what is the use of a book,” thought Alice, “without pictures or conversation?”",
       "« Et à quoi sert un livre, songea Alice, sans images ni dialogues ? »"],
      ["So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
       "Elle était donc en train de se demander (du mieux qu'elle le pouvait, car la chaleur du jour la rendait somnolente et stupide) si le plaisir de tresser une guirlande de pâquerettes valait la peine de se lever et d'aller les cueillir, quand soudain un Lapin Blanc aux yeux roses passa en courant tout près d'elle."],
      ["There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!”",
       "Il n'y avait rien là de bien remarquable ; et Alice ne trouva pas non plus si extraordinaire d'entendre le Lapin se dire à lui-même : « Oh là là ! Oh là là ! Je vais être en retard ! »"],
      ["(When she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural.)",
       "(Lorsqu'elle y repensa plus tard, il lui vint à l'esprit qu'elle aurait dû s'en étonner, mais sur le moment tout cela lui parut parfaitement naturel.)"],
      ["But when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it.",
       "Mais lorsque le Lapin sortit véritablement une montre de la poche de son gilet, la regarda, puis pressa le pas, Alice se dressa d'un bond, car il lui traversa l'esprit qu'elle n'avait jamais vu auparavant un lapin muni d'une poche de gilet, ni d'une montre à en tirer."],
      ["Burning with curiosity, she ran across the field after it, and was just in time to see it pop down a large rabbit-hole under the hedge. In another moment down went Alice after it, never once considering how in the world she was to get out again.",
       "Brûlant de curiosité, elle traversa le champ en courant à sa poursuite, et arriva juste à temps pour le voir s'engouffrer dans un grand terrier sous la haie. L'instant d'après, Alice s'y jetait à son tour, sans se demander un seul instant comment diable elle en ressortirait."]
    ],
    gloss: [["to be tired of", "en avoir assez de"], ["the bank", "le talus / la rive"], ["to peep into", "jeter un coup d'œil dans"], ["what is the use of…?", "à quoi sert… ?"], ["out of the way", "extraordinaire / inhabituel"], ["actually", "véritablement / en fait (JAMAIS « actuellement »)"], ["a waistcoat", "un gilet"], ["to start to one's feet", "se dresser d'un bond"], ["to pop down", "s'engouffrer dans"], ["how in the world", "comment diable"]],
    q: [
      ["Why was Alice bored at the beginning?", ["Her sister refused to speak to her", "The book she looked at had no pictures or dialogue", "It was too cold to play outside", "She had lost her own book"], 1, "Elle le dit elle-même : « what is the use of a book without pictures or conversation? »"],
      ["What finally makes Alice jump to her feet?", ["The Rabbit speaks out loud", "The Rabbit has pink eyes", "The Rabbit takes a watch out of its waistcoat-pocket", "The Rabbit runs towards the hedge"], 2, "Le texte hiérarchise : entendre le lapin parler ne l'étonne pas ; c'est la montre sortie du gilet qui la fait bondir."],
      ["In “when the Rabbit actually took a watch”, the word “actually” means", ["currently", "in fact, really", "at that moment", "accidentally"], 1, "Piège classique : actually = en fait / vraiment. « Actuellement » se dit currently ou at present."]
    ]
  },
  {
    id: "doyle-scandal",
    type: "Littérature",
    title: "A Scandal in Bohemia",
    author: "Arthur Conan Doyle, 1891",
    intro: "Le portrait de Holmes par Watson, en ouverture de la nouvelle : pourquoi une machine à raisonner ne peut pas aimer. Un modèle de prose analytique — exactement le registre d'une bonne dissertation.",
    pairs: [
      ["To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex.",
       "Pour Sherlock Holmes, elle est toujours LA femme. Je l'ai rarement entendu la désigner sous un autre nom. À ses yeux, elle éclipse et surpasse tout le reste de son sexe."],
      ["It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.",
       "Ce n'est pas qu'il éprouvât pour Irene Adler une émotion apparentée à l'amour. Toutes les émotions, et celle-là en particulier, répugnaient à son esprit froid, précis, mais admirablement équilibré."],
      ["He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position.",
       "Il était, à mon sens, la plus parfaite machine à raisonner et à observer que le monde ait connue, mais en amoureux il se serait mis dans une position fausse."],
      ["He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer — excellent for drawing the veil from men's motives and actions.",
       "Il ne parlait jamais des passions tendres, sinon avec une raillerie et un ricanement. C'étaient d'admirables choses pour l'observateur — excellentes pour lever le voile sur les mobiles et les actes des hommes."],
      ["But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results.",
       "Mais pour le raisonneur entraîné, admettre de telles intrusions dans son tempérament délicat et finement réglé, c'était introduire un facteur de distraction susceptible de jeter le doute sur tous ses résultats intellectuels."],
      ["Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.",
       "Un grain de sable dans un instrument de précision, ou une fêlure dans l'une de ses lentilles les plus puissantes, n'aurait pas été plus perturbant qu'une émotion forte dans une nature comme la sienne. Et pourtant il n'y avait pour lui qu'une seule femme, et cette femme était feu Irene Adler, de mémoire douteuse et contestable."]
    ],
    gloss: [["seldom", "rarement"], ["to eclipse", "éclipser"], ["to predominate", "prédominer / l'emporter sur"], ["akin to", "apparenté à / proche de"], ["abhorrent", "répugnant / odieux"], ["I take it", "à mon sens / si je ne me trompe"], ["save with", "sinon avec / à l'exception de"], ["a gibe / a sneer", "une raillerie / un ricanement"], ["grit", "un grain de sable / du gravillon"], ["the late", "feu / défunt(e)"]],
    q: [
      ["Why is Irene Adler important to Holmes, according to Watson?", ["He was secretly in love with her", "She defeated him intellectually and so stands apart", "She was his only client", "She taught him how to reason"], 1, "Watson écarte explicitement l'amour (« It was not that he felt any emotion akin to love ») ; ce qui reste, c'est qu'elle occupe une place unique dans son esprit d'analyste."],
      ["What does the image of “grit in a sensitive instrument” convey?", ["That Holmes was physically fragile", "That emotion would disturb the accuracy of his reasoning", "That Holmes disliked working with tools", "That his equipment was often broken"], 1, "La comparaison sert le raisonnement : une émotion forte fausserait ses résultats comme un grain de sable fausse un instrument de précision."],
      ["“He never spoke of the softer passions, save with a gibe” means that he mentioned them", ["only in order to mock them", "only to his closest friends", "with great tenderness", "never at all"], 0, "Save with = sinon avec. Il en parlait uniquement sur le mode de la raillerie."]
    ]
  },
  {
    id: "bronte-wuthering",
    type: "Littérature",
    title: "Wuthering Heights",
    author: "Emily Brontë, 1847",
    intro: "La première entrée du journal de Lockwood : un citadin poli débarque dans la lande du Yorkshire et se trompe sur tout ce qu'il voit. L'ironie est dans l'écart entre ce qu'il décrit et ce qu'il comprend.",
    pairs: [
      ["1801. — I have just returned from a visit to my landlord — the solitary neighbour that I shall be troubled with. This is certainly a beautiful country!",
       "1801. — Je reviens à l'instant d'une visite à mon propriétaire — le seul voisin dont j'aurai à me soucier. Voilà, à coup sûr, une bien belle contrée !"],
      ["In all England, I do not believe that I could have fixed on a situation so completely removed from the stir of society. A perfect misanthropist's heaven: and Mr. Heathcliff and I are such a suitable pair to divide the desolation between us.",
       "Dans toute l'Angleterre, je ne crois pas que j'aurais pu arrêter mon choix sur un lieu aussi complètement à l'écart de l'agitation du monde. Un paradis de parfait misanthrope : et M. Heathcliff et moi formons un couple si bien assorti pour nous partager cette désolation."],
      ["A capital fellow! He little imagined how my heart warmed towards him when I beheld his black eyes withdraw so suspiciously under their brows, as I rode up.",
       "Un homme épatant ! Il était loin d'imaginer combien mon cœur s'échauffait pour lui lorsque je vis ses yeux noirs se retirer avec tant de méfiance sous leurs sourcils, tandis que j'arrivais à cheval."],
      ["And when his fingers sheltered themselves, with a jealous resolution, still further in his waistcoat, as I announced my name.",
       "Et lorsque ses doigts s'enfoncèrent, avec une résolution jalouse, plus avant encore dans son gilet, au moment où j'annonçais mon nom."],
      ["“Mr. Heathcliff?” I said. A nod was the answer. “Mr. Lockwood, your new tenant, sir. I do myself the honour of calling as soon as possible after my arrival, to express the hope that I have not inconvenienced you by my perseverance in soliciting the occupation of Thrushcross Grange.”",
       "« Monsieur Heathcliff ? » dis-je. Un hochement de tête fut la réponse. « Monsieur Lockwood, votre nouveau locataire, monsieur. Je me fais l'honneur de me présenter aussitôt que possible après mon arrivée, pour exprimer l'espoir de ne vous avoir pas importuné par mon insistance à solliciter la location de Thrushcross Grange. »"],
      ["“Thrushcross Grange is my own, sir,” he interrupted, wincing. “I should not allow any one to inconvenience me, if I could hinder it — walk in!” The “walk in” was uttered with closed teeth, and expressed the sentiment, “Go to the deuce!”",
       "« Thrushcross Grange m'appartient, monsieur », coupa-t-il avec une grimace. « Je ne laisserais personne m'importuner, si je pouvais l'en empêcher — entrez ! » L'« entrez » fut prononcé les dents serrées, et exprimait le sentiment : « Allez au diable ! »"]
    ],
    gloss: [["a landlord", "un propriétaire (bailleur)"], ["to be troubled with", "avoir affaire à / être importuné par"], ["to fix on", "arrêter son choix sur"], ["the stir of society", "l'agitation du monde"], ["a capital fellow", "un homme épatant (vieilli)"], ["to behold", "voir / contempler (beheld)"], ["a brow", "un sourcil / le front"], ["a tenant", "un locataire"], ["to wince", "grimacer / tressaillir"], ["with closed teeth", "les dents serrées"]],
    q: [
      ["What mistake does Lockwood make about Heathcliff?", ["He thinks Heathcliff is his tenant", "He takes signs of hostility for kinship of temperament", "He believes Heathcliff is deaf", "He assumes Heathcliff is wealthy"], 1, "Il décrit exactement les signes de rejet (yeux méfiants, doigts enfoncés dans le gilet) et y lit une âme sœur : « how my heart warmed towards him »."],
      ["How does the narrator interpret Heathcliff's “walk in”?", ["As a warm welcome", "As a formal invitation", "As the opposite of what the words say", "As a request to come back later"], 2, "Le texte le glose lui-même : prononcé les dents serrées, il exprime « Go to the deuce! ». C'est le sens pragmatique contre le sens littéral."],
      ["The register of Lockwood's own speech is best described as", ["blunt and rural", "elaborately polite", "angry and defensive", "childishly simple"], 1, "« I do myself the honour of calling… by my perseverance in soliciting the occupation of… » : une syntaxe de salon, comiquement déplacée dans la lande."]
    ]
  },
  {
    id: "fitzgerald-gatsby",
    type: "Littérature",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald, 1925",
    intro: "La fin, mythique, de « Gatsby le Magnifique » : une méditation sur l'espoir et le passé. Repère au passage les verbes irréguliers — beat, borne — et la place des adverbes.",
    pairs: [
      ["Most of the big shore places were closed now and there were hardly any lights except the shadowy, moving glow of a ferryboat across the Sound. And as the moon rose higher the inessential houses began to melt away until gradually I became aware of the old island here that flowered once for Dutch sailors' eyes.",
       "La plupart des grandes demeures du rivage étaient fermées désormais, et il n'y avait presque aucune lumière, hormis la lueur mouvante et confuse d'un bac traversant le détroit. Et tandis que la lune montait, les maisons inessentielles se mirent à fondre jusqu'à ce que je prenne peu à peu conscience de l'île ancienne qui fleurit jadis pour les yeux des marins hollandais."],
      ["For a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder.",
       "Pendant un instant enchanté et fugitif, l'homme dut retenir son souffle en présence de ce continent, contraint à une contemplation esthétique qu'il ne comprenait ni ne désirait, face à face pour la dernière fois dans l'histoire avec quelque chose d'égal à sa capacité d'émerveillement."],
      ["And as I sat there brooding on the old, unknown world, I thought of Gatsby's wonder when he first picked out the green light at the end of Daisy's dock. He had come a long way to this blue lawn, and his dream must have seemed so close that he could hardly fail to grasp it.",
       "Et tandis que j'étais assis là, ruminant sur ce monde ancien et inconnu, je songeai à l'émerveillement de Gatsby lorsqu'il distingua pour la première fois la lumière verte au bout du ponton de Daisy. Il était venu de loin jusqu'à cette pelouse bleue, et son rêve avait dû lui paraître si proche qu'il ne pouvait guère manquer de le saisir."],
      ["He did not know that it was already behind him, somewhere back in that vast obscurity beyond the city, where the dark fields of the republic rolled on under the night.",
       "Il ne savait pas qu'il était déjà derrière lui, quelque part dans cette vaste obscurité au-delà de la ville, là où les champs sombres de la république se déroulaient sous la nuit."],
      ["Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that's no matter — tomorrow we will run faster, stretch out our arms farther... And one fine morning —",
       "Gatsby croyait en la lumière verte, cet avenir extatique qui, année après année, recule devant nous. Il nous a échappé alors, mais qu'importe — demain nous courrons plus vite, nous tendrons les bras plus loin… Et un beau matin —"],
      ["So we beat on, boats against the current, borne back ceaselessly into the past.",
       "Ainsi nous luttons, barques à contre-courant, sans cesse ramenés vers le passé."]
    ],
    gloss: [["shore", "le rivage / la côte"], ["a glow", "une lueur"], ["to melt away", "se dissoudre / fondre"], ["transitory", "fugitif / passager"], ["commensurate to", "à la mesure de / proportionné à"], ["to brood on", "ruminer / se morfondre sur"], ["to pick out", "distinguer / repérer"], ["to recede", "reculer / refluer"], ["to elude", "échapper à"], ["borne back", "ramené en arrière (de to bear)"]],
    q: [
      ["What does the narrator imagine while looking at the island?", ["The parties Gatsby once gave there", "How the land appeared to the first sailors who saw it", "The price the houses would fetch today", "A storm approaching from the Sound"], 1, "« The old island here that flowered once for Dutch sailors' eyes » : il remonte au premier regard porté sur le continent."],
      ["What is the point of “He did not know that it was already behind him”?", ["Gatsby had forgotten where the green light was", "Gatsby's dream belonged to a past he could not return to", "Daisy had moved to another house", "Gatsby was being followed"], 1, "Le rêve est situé dans le passé — « somewhere back in that vast obscurity » — alors que Gatsby le croyait devant lui. C'est toute l'ironie de la fin."],
      ["The final sentence suggests that human effort is", ["always rewarded in the end", "constantly pulled back towards the past", "pointless and should be abandoned", "easier than it looks"], 1, "« Boats against the current, borne back ceaselessly into the past » : on rame, et le courant nous ramène. Ce n'est pas l'abandon, c'est la lutte perdue d'avance."]
    ]
  },
  {
    id: "thoreau-walden",
    type: "Littérature",
    title: "Walden",
    author: "Henry David Thoreau, 1854",
    intro: "La phrase-manifeste de Thoreau, et le paragraphe entier qui la porte : pourquoi il est parti vivre seul, deux ans, dans une cabane au bord d'un étang.",
    pairs: [
      ["I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
       "Je m'en allai dans les bois parce que je voulais vivre à dessein, n'affronter que les faits essentiels de la vie, et voir si je ne pourrais pas apprendre ce qu'elle avait à enseigner — et non pas, à l'heure de ma mort, découvrir que je n'avais pas vécu."],
      ["I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary.",
       "Je ne voulais pas vivre ce qui n'était pas la vie, tant vivre est précieux ; je ne souhaitais pas davantage pratiquer la résignation, à moins qu'elle ne fût tout à fait nécessaire."],
      ["I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms.",
       "Je voulais vivre profondément et sucer toute la moelle de la vie, vivre d'une manière si robuste et si spartiate que je mette en déroute tout ce qui n'était pas la vie, faucher large et raser au plus près, acculer la vie dans un coin et la réduire à sa plus simple expression."],
      ["Still we live meanly, like ants; though the fable tells us that we were long ago changed into men. Our life is frittered away by detail. Simplicity, simplicity, simplicity!",
       "Nous vivons pourtant mesquinement, comme des fourmis ; bien que la fable nous dise que nous fûmes, il y a longtemps, changés en hommes. Notre vie se dissipe en détails. Simplicité, simplicité, simplicité !"],
      ["I say, let your affairs be as two or three, and not a hundred or a thousand; instead of a million count half a dozen, and keep your accounts on your thumb-nail.",
       "Que vos affaires soient deux ou trois, dis-je, et non pas cent ou mille ; au lieu d'un million comptez-en une demi-douzaine, et tenez vos comptes sur l'ongle de votre pouce."],
      ["Simplify, simplify. Instead of three meals a day, if it be necessary eat but one; instead of a hundred dishes, five; and reduce other things in proportion.",
       "Simplifiez, simplifiez. Au lieu de trois repas par jour, n'en prenez qu'un s'il le faut ; au lieu de cent plats, cinq ; et réduisez le reste à proportion."]
    ],
    gloss: [["to live deliberately", "vivre à dessein / délibérément"], ["to front", "affronter / faire face à"], ["dear", "précieux / cher"], ["marrow", "la moelle"], ["sturdily", "robustement / solidement"], ["to put to rout", "mettre en déroute"], ["to drive into a corner", "acculer"], ["meanly", "mesquinement"], ["to fritter away", "dissiper / gaspiller"], ["but one", "un seul (but = seulement, registre soutenu)"]],
    q: [
      ["Why did Thoreau go to the woods?", ["To escape a debt he could not pay", "To confront life at its most essential", "To study the plants of the region", "To write a book about ants"], 1, "« To front only the essential facts of life » — et la crainte, en mourant, de découvrir qu'il n'avait pas vécu."],
      ["“Our life is frittered away by detail” means that life is", ["made richer by small pleasures", "wasted in small unimportant things", "too short to be planned", "recorded in too much detail"], 1, "To fritter away = dissiper, gaspiller peu à peu. La phrase suivante — « Simplicity, simplicity, simplicity! » — donne le remède."],
      ["What does “keep your accounts on your thumb-nail” illustrate?", ["The importance of written records", "How few affairs a life should contain", "A method of mental arithmetic", "The cost of living in the woods"], 1, "C'est une hyperbole au service de la thèse : si vos affaires tiennent sur l'ongle du pouce, c'est que vous en avez assez peu."]
    ]
  },
  {
    id: "stevenson-jekyll",
    type: "Littérature",
    title: "Dr Jekyll and Mr Hyde",
    author: "R. L. Stevenson, 1886",
    intro: "Le portrait qui ouvre « L'Étrange Cas du Dr Jekyll et de M. Hyde » : l'austère notaire Utterson, et la phrase qui annonce tout le roman.",
    pairs: [
      ["Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable.",
       "Maître Utterson, l'homme de loi, était un homme au visage rude que jamais un sourire n'éclairait ; froid, avare et emprunté dans ses propos ; peu porté au sentiment ; sec, long, terne, morose, et pourtant, d'une certaine façon, attachant."],
      ["At friendly meetings, and when the wine was to his taste, something eminently human beaconed from his eye; something indeed which never found its way into his talk, but which spoke not only in these silent symbols of the after-dinner face, but more often and loudly in the acts of his life.",
       "Dans les réunions amicales, et quand le vin était à son goût, quelque chose d'éminemment humain rayonnait de son regard ; quelque chose, en vérité, qui ne trouvait jamais le chemin de ses propos, mais qui parlait non seulement dans ces symboles muets du visage d'après-dîner, mais plus souvent et plus haut dans les actes de sa vie."],
      ["He was austere with himself; drank gin when he was alone, to mortify a taste for vintages; and though he enjoyed the theatre, had not crossed the doors of one for twenty years.",
       "Il était austère envers lui-même ; buvait du gin lorsqu'il était seul, pour mortifier son goût des grands crus ; et bien qu'il aimât le théâtre, il n'en avait pas franchi la porte depuis vingt ans."],
      ["But he had an approved tolerance for others; sometimes wondering, almost with envy, at the high pressure of spirits involved in their misdeeds; and in any extremity inclined to help rather than to reprove.",
       "Mais il avait envers autrui une tolérance éprouvée ; s'étonnant parfois, presque avec envie, de la haute pression d'esprits qu'exigeaient leurs méfaits ; et, dans toute situation extrême, plus enclin à secourir qu'à réprimander."],
      ["“I incline to Cain's heresy,” he used to say quaintly: “I let my brother go to the devil in his own way.” In this character, it was frequently his fortune to be the last reputable acquaintance and the last good influence in the lives of down-going men.",
       "« Je penche pour l'hérésie de Caïn », avait-il coutume de dire avec une drôlerie surannée : « Je laisse mon frère aller au diable à sa façon. » Avec un tel caractère, il lui échoyait souvent d'être la dernière fréquentation respectable et la dernière bonne influence dans la vie des hommes en train de sombrer."]
    ],
    gloss: [["countenance", "le visage / la mine"], ["rugged", "rude / rugueux"], ["scanty", "avare / maigre"], ["backward in sentiment", "peu porté au sentiment"], ["dreary", "morose / terne"], ["to beacon", "rayonner / luire (comme un phare)"], ["to mortify", "mortifier / brider"], ["a misdeed", "un méfait"], ["to reprove", "réprimander"], ["down-going", "en train de sombrer / de déchoir"]],
    q: [
      ["Which pair of qualities best describes Utterson?", ["Talkative but generous", "Outwardly severe but humane in action", "Cheerful but dishonest", "Wealthy but ungenerous"], 1, "Le texte oppose sa froideur de parole (« never lighted by a smile », « embarrassed in discourse ») et ce que disent ses actes : « more often and loudly in the acts of his life »."],
      ["Why does Utterson drink gin when alone?", ["Because he cannot afford good wine", "To deny himself a pleasure he values", "Because he dislikes the taste of wine", "To keep himself awake at work"], 1, "« To mortify a taste for vintages » : il se prive délibérément de ce qu'il aime. C'est de l'austérité, pas de la pauvreté."],
      ["What does “I let my brother go to the devil in his own way” reveal?", ["He judges other people harshly", "He refuses all contact with wrongdoers", "He does not moralise, which is why the fallen still trust him", "He believes everyone is beyond saving"], 2, "La phrase qui suit le confirme : il finit par être « the last reputable acquaintance » de ceux qui sombrent. Sa non-condamnation est précisément ce qui le rend fréquentable."]
    ]
  },
  {
    id: "market-crowd",
    type: "Presse",
    title: "What a market really is",
    author: "Essai · finance",
    intro: "Ce qu'est vraiment un marché : moins une affaire de chiffres qu'une foule qui parie sur l'avenir. Pour ton monde — et le vocabulaire y est directement réutilisable en entretien.",
    pairs: [
      ["A market is often pictured as a place of cold numbers, but at heart it is a crowd of people guessing what others will do next. Every price is a story the crowd tells itself about the future.",
       "On se représente souvent un marché comme un lieu de chiffres froids, mais au fond, c'est une foule de gens qui devinent ce que les autres vont faire ensuite. Chaque prix est une histoire que la foule se raconte à elle-même sur l'avenir."],
      ["When confidence is high, money flows in and prices climb; when fear takes over, the same assets are dumped at any price. Nothing about the companies has changed overnight — only the mood of the crowd.",
       "Quand la confiance est élevée, l'argent afflue et les prix grimpent ; quand la peur l'emporte, les mêmes actifs sont bradés à n'importe quel prix. Rien n'a changé dans les entreprises du jour au lendemain — seule l'humeur de la foule a changé."],
      ["This is not to say that prices are arbitrary. A market aggregates what thousands of people know, and it does so faster than any committee: news of a failed harvest reaches the price of wheat long before it reaches the newspapers.",
       "Cela ne revient pas à dire que les prix sont arbitraires. Un marché agrège ce que des milliers de gens savent, et il le fait plus vite que n'importe quel comité : la nouvelle d'une récolte manquée atteint le cours du blé bien avant d'atteindre les journaux."],
      ["The difficulty is that the same mechanism aggregates what people merely believe. If enough participants are convinced that a share will rise, their buying makes it rise, at least for a while — and a belief that proves itself is very hard to argue with.",
       "La difficulté, c'est que le même mécanisme agrège ce que les gens croient seulement. Si un nombre suffisant de participants sont convaincus qu'une action va monter, leurs achats la font monter, au moins un temps — et une croyance qui se vérifie elle-même est très difficile à contester."],
      ["Bubbles are built out of that logic, and they rarely look absurd from the inside. Tulips, railways, dot-coms: in each case the underlying idea was sound, and the mistake lay in the price rather than in the story.",
       "Les bulles se construisent sur cette logique, et elles semblent rarement absurdes vues de l'intérieur. Les tulipes, les chemins de fer, les start-up du Web : dans chaque cas l'idée de départ était juste, et l'erreur portait sur le prix, non sur le récit."],
      ["Professionals are not immune, for a reason that is structural rather than psychological. A fund manager who avoids a bubble is wrong alone; one who joins it is wrong in good company, and only the first gets fired.",
       "Les professionnels n'y échappent pas, pour une raison qui est structurelle plutôt que psychologique. Un gérant de fonds qui évite une bulle a tort tout seul ; celui qui y participe a tort en bonne compagnie, et seul le premier se fait licencier."],
      ["That is why the calmest investor often wins. To buy when others panic and to hold when others chase is less a matter of intelligence than of temperament — and temperament, unlike a spreadsheet, cannot be borrowed.",
       "C'est pourquoi l'investisseur le plus calme l'emporte souvent. Acheter quand les autres paniquent et conserver quand les autres courent après le marché relève moins de l'intelligence que du tempérament — et le tempérament, contrairement à un tableur, ne s'emprunte pas."]
    ],
    gloss: [["at heart", "au fond / essentiellement"], ["to climb", "grimper / monter"], ["to dump (assets)", "brader / se débarrasser de"], ["overnight", "du jour au lendemain"], ["to aggregate", "agréger / rassembler"], ["a share", "une action"], ["underlying", "sous-jacent"], ["to be immune", "être à l'abri / immunisé"], ["a fund manager", "un gérant de fonds"], ["to chase", "courir après / poursuivre"]],
    q: [
      ["What does the writer say a market does better than a committee?", ["It sets fair prices for everyone", "It gathers dispersed information very quickly", "It prevents bubbles from forming", "It protects small investors"], 1, "L'exemple de la récolte manquée illustre exactement ça : le prix intègre l'information avant la presse."],
      ["Why are bubbles hard to see from the inside?", ["The underlying idea is usually wrong", "Prices are kept secret", "The story is sound; only the price is wrong", "They last for a very short time"], 2, "« The underlying idea was sound, and the mistake lay in the price rather than in the story » — d'où la difficulté : on a raison sur le fond et tort sur le montant."],
      ["What is the structural reason professionals join bubbles?", ["They are paid more during bubbles", "Being wrong alone is punished, being wrong with everyone is not", "They have no access to research", "Regulation obliges them to follow the index"], 1, "La phrase est construite en miroir : « wrong alone » / « wrong in good company », « and only the first gets fired ». C'est une incitation, pas une erreur de jugement."]
    ]
  },
  {
    id: "ai-learns",
    type: "Presse",
    title: "The machines that learn",
    author: "Essai · technologie",
    intro: "Comment « apprennent » les intelligences artificielles d'aujourd'hui — et la vraie question qu'elles nous posent. Sujet de dissertation à haute probabilité.",
    pairs: [
      ["Modern artificial intelligence does not think the way we do. It has read a vast share of everything ever written, and from that ocean of text it has learned to guess, word by word, what tends to come next.",
       "L'intelligence artificielle moderne ne pense pas comme nous. Elle a lu une immense partie de tout ce qui a jamais été écrit, et de cet océan de textes elle a appris à deviner, mot après mot, ce qui a tendance à suivre."],
      ["Put like that, it sounds trivial. It is not. To predict the next word of a legal argument, a joke or a proof, a system has to encode something about how arguments, jokes and proofs are built — and that turns out to carry a surprising distance.",
       "Présenté ainsi, cela paraît dérisoire. Ça ne l'est pas. Pour prédire le mot suivant d'un raisonnement juridique, d'une plaisanterie ou d'une démonstration, un système doit encoder quelque chose de la manière dont se construisent les raisonnements, les plaisanteries et les démonstrations — et cela mène étonnamment loin."],
      ["The result can feel like understanding, and sometimes it comes remarkably close. Yet the machine has no memory of yesterday and no stake in tomorrow; it neither hopes nor fears, and it cannot tell you which of its sentences it would bet on.",
       "Le résultat peut donner l'impression d'une compréhension, et parfois il en est remarquablement proche. Pourtant, la machine n'a aucun souvenir d'hier ni aucun intérêt dans demain ; elle n'espère ni ne craint, et elle ne peut pas vous dire sur laquelle de ses phrases elle parierait."],
      ["That last point is the practical one. A system trained to produce plausible text will produce plausible text even when it has nothing to go on, which is why its most confident sentences and its most groundless ones look exactly alike.",
       "C'est ce dernier point qui compte en pratique. Un système entraîné à produire du texte plausible en produira même lorsqu'il n'a rien sur quoi s'appuyer, et c'est pourquoi ses phrases les plus fondées et les plus gratuites se ressemblent trait pour trait."],
      ["The labour market question is usually framed badly. Few jobs are a single task, so few disappear outright; what happens instead is that the balance of a job shifts, and the part that was hardest to learn is often the part that is automated first.",
       "La question de l'emploi est généralement mal posée. Peu de métiers se réduisent à une seule tâche, donc peu disparaissent purement et simplement ; ce qui se produit plutôt, c'est que l'équilibre du métier se déplace, et la partie la plus difficile à apprendre est souvent la première à être automatisée."],
      ["That inverts the usual reassurance. The junior analyst who spent two years formatting tables was learning the business while doing it; remove the formatting and the learning has to be organised deliberately, or it simply does not happen.",
       "Cela renverse la consolation habituelle. L'analyste débutant qui passait deux ans à mettre en forme des tableaux apprenait le métier en le faisant ; supprimez la mise en forme, et l'apprentissage doit être organisé à dessein, faute de quoi il n'a tout simplement pas lieu."],
      ["The real question is therefore no longer whether such tools are clever, but what we choose to hand over to them — and what we insist on keeping for ourselves, not out of pride, but because doing it is how we learn to judge it.",
       "La vraie question n'est donc plus de savoir si ces outils sont intelligents, mais ce que nous choisissons de leur confier — et ce que nous tenons à garder pour nous, non par orgueil, mais parce que c'est en le faisant que l'on apprend à en juger."]
    ],
    gloss: [["a vast share", "une immense partie"], ["word by word", "mot après mot"], ["to carry a distance", "mener loin / porter loin"], ["to have a stake in", "avoir un intérêt dans / être partie prenante"], ["to bet on", "parier sur"], ["to have nothing to go on", "n'avoir aucun élément / rien sur quoi s'appuyer"], ["groundless", "sans fondement / gratuit"], ["outright", "purement et simplement"], ["to hand over", "confier / remettre"], ["to insist on", "tenir à / exiger"]],
    q: [
      ["Why does the writer say predicting the next word is not trivial?", ["Because the systems are very expensive to build", "Because doing it well requires encoding how arguments are built", "Because words are chosen at random", "Because no system has managed it yet"], 1, "Le paragraphe 2 le démontre : prédire le mot suivant d'une démonstration suppose d'avoir encodé la structure des démonstrations."],
      ["What practical problem follows from a system being trained on plausibility?", ["It writes too slowly", "Its well-founded and its baseless sentences look the same", "It refuses to answer difficult questions", "It repeats the same sentences"], 1, "« Its most confident sentences and its most groundless ones look exactly alike » : le style ne signale pas la fiabilité."],
      ["What does the example of the junior analyst illustrate?", ["That formatting tables is a waste of time", "That automating the easy part protects training", "That the tasks being automated were also how people learned", "That junior staff should be replaced first"], 2, "« Was learning the business while doing it » : l'apprentissage était un produit dérivé de la tâche. L'automatiser supprime l'école en même temps que la corvée."]
    ]
  },
  {
    id: "why-sleep",
    type: "Presse",
    title: "Why we sleep",
    author: "Essai · sciences",
    intro: "Longtemps traité comme du temps perdu, le sommeil s'est révélé l'un des piliers de la santé — et la métaphore de la dette y est filée d'un bout à l'autre.",
    pairs: [
      ["For a long time, sleep was treated as wasted time — a nightly pause we could trim to get more done. Science has since turned that idea on its head.",
       "Pendant longtemps, le sommeil a été considéré comme du temps perdu — une pause nocturne que l'on pouvait rogner pour en faire plus. La science a depuis renversé cette idée."],
      ["While we sleep, the brain sorts the day's memories, flushes out waste and repairs the body. A single bad night dulls attention; months of poor sleep quietly erode health.",
       "Pendant que nous dormons, le cerveau trie les souvenirs de la journée, évacue les déchets et répare le corps. Une seule mauvaise nuit émousse l'attention ; des mois de sommeil médiocre érodent la santé à bas bruit."],
      ["The sorting is not passive storage. During deep sleep the brain appears to replay the day at speed, keeping what connects to something already known and discarding the rest — which is why a skill practised in the evening is often sharper the following morning than it was at the end of the session.",
       "Ce tri n'est pas un simple rangement passif. Pendant le sommeil profond, le cerveau semble rejouer la journée en accéléré, conservant ce qui se rattache à du déjà-connu et écartant le reste — c'est pourquoi une compétence travaillée le soir est souvent plus nette le lendemain matin qu'à la fin de la séance."],
      ["The most treacherous effect is that we are poor judges of our own state. In controlled studies, people restricted to six hours a night performed steadily worse while reporting that they felt fine; the impairment accumulated, the awareness of it did not.",
       "L'effet le plus traître, c'est que nous jugeons mal notre propre état. Dans des études contrôlées, des participants limités à six heures par nuit voyaient leurs performances décliner régulièrement tout en déclarant se sentir bien ; le déficit s'accumulait, la conscience du déficit non."],
      ["Caffeine complicates the picture rather than solving it. It does not supply energy; it blocks the signal that tells you how tired you are, and the signal is still there when the effect wears off, several hours later and often at bedtime.",
       "La caféine complique le tableau au lieu de le résoudre. Elle ne fournit pas d'énergie ; elle bloque le signal qui vous indique à quel point vous êtes fatigué, et ce signal est toujours là quand l'effet se dissipe, plusieurs heures plus tard et souvent à l'heure du coucher."],
      ["Weekend catch-up helps, but only partly: the sleepiness lifts while the metabolic and attentional costs do not fully clear. Sleep behaves less like a bank account than like a loan with an interest rate.",
       "Le rattrapage du week-end aide, mais en partie seulement : la somnolence se lève tandis que les coûts métaboliques et attentionnels ne s'effacent pas tout à fait. Le sommeil se comporte moins comme un compte en banque que comme un prêt assorti d'un taux d'intérêt."],
      ["The lesson is humbling: we cannot cheat sleep for long. Sooner or later, the debt falls due, and the body collects what it is owed.",
       "La leçon est humble : on ne peut pas tromper le sommeil bien longtemps. Tôt ou tard, la dette arrive à échéance, et le corps réclame son dû."]
    ],
    gloss: [["to trim", "rogner / réduire"], ["to turn on its head", "renverser (une idée)"], ["to flush out", "évacuer / éliminer"], ["to dull", "émousser"], ["to discard", "écarter / se défaire de"], ["treacherous", "traître / trompeur"], ["impairment", "le déficit / l'altération"], ["to wear off", "se dissiper / cesser d'agir"], ["to catch up (on sleep)", "rattraper (son sommeil)"], ["to fall due", "arriver à échéance"]],
    q: [
      ["What does the writer call “the most treacherous effect” of poor sleep?", ["It damages memory permanently", "People cannot accurately judge how impaired they are", "It makes caffeine less effective", "It shortens deep sleep only"], 1, "L'étude citée dit exactement cela : les performances baissent, le sentiment de forme reste. « The impairment accumulated, the awareness of it did not »."],
      ["According to the text, caffeine", ["supplies the body with extra energy", "hides tiredness that returns later", "improves deep sleep", "has no measurable effect"], 1, "« It does not supply energy; it blocks the signal » — et le signal revient quand l'effet se dissipe."],
      ["Why is sleep compared to “a loan with an interest rate” rather than a bank account?", ["Because sleep can be bought", "Because the debt costs more than the hours lost", "Because banks lend at night", "Because everyone starts with the same balance"], 1, "Un compte se solde à l'euro près ; un prêt coûte davantage que ce qu'on a emprunté. Le week-end lève la somnolence mais n'efface pas tout le coût."]
    ]
  },
  {
    id: "praise-boredom",
    type: "Presse",
    title: "In defence of boredom",
    author: "Essai · société",
    intro: "Petit éloge de l'ennui, ce terreau oublié de la curiosité. Note la charpente : concession franche au milieu du texte, puis retour à la thèse — le geste qui te manque en dissertation.",
    pairs: [
      ["We have grown so good at filling every spare moment that boredom has almost vanished from daily life. The queue, the wait, the empty afternoon — all are now swallowed by a glowing screen.",
       "Nous sommes devenus si doués pour remplir le moindre moment libre que l'ennui a presque disparu de la vie quotidienne. La file d'attente, l'attente, l'après-midi vide — tout est désormais englouti par un écran lumineux."],
      ["Yet boredom was never merely empty. It is the soil in which curiosity and imagination take root; children left with nothing to do eventually invent something.",
       "Pourtant, l'ennui n'a jamais été simplement vide. C'est le terreau où la curiosité et l'imagination prennent racine ; les enfants qu'on laisse sans rien à faire finissent par inventer quelque chose."],
      ["Psychologists distinguish two states that the same word covers. There is the restless, irritable kind, which is unpleasant and rarely productive; and there is the unfilled, drifting kind, in which the mind wanders without being asked to do anything. Only the second has anything to recommend it.",
       "Les psychologues distinguent deux états que recouvre le même mot. Il y a l'ennui fébrile et irritable, désagréable et rarement fécond ; et il y a l'ennui vacant, flottant, dans lequel l'esprit vagabonde sans qu'on lui demande rien. Seul le second a quelque chose pour lui."],
      ["It is worth conceding that the case can be overstated. Boredom is not a virtue, and a great deal of it is simply the symptom of a life with too little in it; telling a bored teenager that the emptiness is good for them is unlikely to convince anybody.",
       "Il faut concéder que l'argument peut être poussé trop loin. L'ennui n'est pas une vertu, et une bonne part de l'ennui n'est que le symptôme d'une vie trop vide ; dire à un adolescent qui s'ennuie que ce vide lui fait du bien a peu de chances de convaincre qui que ce soit."],
      ["The point is narrower, and stronger for being narrow: the mind does something useful when it is left unoccupied, and we have removed nearly every occasion for that to happen. The gap between two tasks has been abolished, not filled.",
       "L'argument est plus étroit, et plus solide de l'être : l'esprit fait quelque chose d'utile lorsqu'on le laisse inoccupé, et nous avons supprimé presque toutes les occasions que cela se produise. L'intervalle entre deux tâches n'a pas été rempli : il a été aboli."],
      ["To reclaim a little boredom, then, is not to waste time but to make room — for the wandering thoughts that no notification will ever bring.",
       "Retrouver un peu d'ennui, dès lors, ce n'est pas perdre son temps, mais faire de la place — pour ces pensées vagabondes qu'aucune notification n'apportera jamais."]
    ],
    gloss: [["a spare moment", "un moment libre"], ["to vanish", "disparaître"], ["to swallow", "engloutir / avaler"], ["to take root", "prendre racine"], ["restless", "fébrile / agité"], ["to drift", "flotter / dériver"], ["to concede", "concéder"], ["to overstate", "exagérer / forcer le trait"], ["to abolish", "abolir / supprimer"], ["to reclaim", "récupérer / se réapproprier"]],
    q: [
      ["Which kind of boredom does the writer defend?", ["The restless, irritable kind", "The drifting kind in which the mind wanders freely", "Both kinds equally", "Neither: boredom is presented as harmful"], 1, "Le paragraphe 3 sépare les deux et tranche : « Only the second has anything to recommend it »."],
      ["What is the purpose of paragraph 4?", ["To abandon the argument", "To concede a limit before narrowing the claim", "To attack psychologists", "To give statistical evidence"], 1, "« It is worth conceding that the case can be overstated » puis « The point is narrower, and stronger for being narrow » : concession, puis resserrement. C'est le geste à copier."],
      ["“The gap between two tasks has been abolished, not filled” implies that", ["people work longer hours than before", "the interval no longer exists at all", "tasks have become more interesting", "screens have made work faster"], 1, "Abolished ≠ filled : ce n'est pas qu'on occupe l'intervalle, c'est qu'il a disparu comme intervalle."]
    ]
  },
];

/* ---------------- rendu ---------------- */
let _readMode = 'bi';               // 'bi' = bilingue ; 'en' = anglais (traduction cachée)
let _readFilter = 'tous';           // 'tous' · 'Presse' · 'Littérature'
function _readingOfDay(){ return READINGS[Math.floor(Date.now()/864e5) % READINGS.length]; }
function _readDone(id){ return !!(S.readings && S.readings[id]); }
function _typeColor(t){ return t === 'Littérature' ? 'var(--purple)' : 'var(--blue)'; }
function _rEsc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* Longueur : les textes vont de ~200 à ~380 mots. 120 mots/min = le rythme
   d'un lecteur C1 sur un texte qu'il travaille (pas d'une lecture de loisir). */
function _readWords(r){ return r.pairs.reduce((n,p) => n + p[0].trim().split(/\s+/).length, 0); }
function _readMins(r){ return Math.max(1, Math.round(_readWords(r)/120)); }

/* Questions de compréhension : état par texte, meilleur score gardé. */
function _readQState(){ if(!S.readq || typeof S.readq !== 'object') S.readq = {}; return S.readq; }
function _readQBest(id){ const q = _readQState()[id]; return q ? q.best : null; }
function _readQBadge(r){
  const b = _readQBest(r.id);
  if(b === null) return '';
  const total = (r.q||[]).length;
  const parfait = b === total;
  return `<span style="color:${parfait?'var(--good)':'var(--muted)'};font-weight:800">${parfait?'★ ':''}${b}/${total}</span>`;
}

function renderReadingHome(){
  view = 'reading';
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('on'));
  window.scrollTo(0,0);
  const feat = _readingOfDay();
  const totalRead = READINGS.filter(r => _readDone(r.id)).length;
  const vus = READINGS.filter(r => _readFilter === 'tous' || r.type === _readFilter);
  const list = vus.map(r => `
    <button class="lrow ${_readDone(r.id)?'done':''}" onclick="openReading('${r.id}')">
      <div class="n">${_readDone(r.id)?'✓':'📖'}</div>
      <div class="info">
        <div class="tt">${r.title}</div>
        <div class="tg"><span style="color:${_typeColor(r.type)};font-weight:700">${r.type}</span> · ${r.author}</div>
        <div class="tg" style="margin-top:2px">${_readWords(r)} mots · ≈ ${_readMins(r)} min · ${(r.q||[]).length} questions ${_readQBadge(r)}</div>
      </div>
    </button>`).join('');
  const chip = (k,n) => `<button class="segchip ${_readFilter===k?'on':''}" onclick="setReadFilter('${k}')">${n}</button>`;
  app.innerHTML = `
    <button class="btn ghost" style="width:auto;padding:8px 14px;margin-bottom:12px" onclick="setView('home')">‹ Accueil</button>
    <div class="card" style="background:linear-gradient(135deg,#9d7bff18,var(--card));border-color:#9d7bff55">
      <div class="coach-h" style="color:var(--purple)">📖 Lecture du jour</div>
      <h2 class="mt" style="font-size:20px">${feat.title}</h2>
      <div class="sub" style="margin-top:2px"><span style="color:${_typeColor(feat.type)};font-weight:700">${feat.type}</span> · ${feat.author} · ${_readWords(feat)} mots · ≈ ${_readMins(feat)} min</div>
      <div class="sub mt">${feat.intro}</div>
      <button class="btn mt" onclick="openReading('${feat.id}')">${_readDone(feat.id)?'Relire':'Lire maintenant'}</button>
    </div>
    <div class="segwrap mb">${chip('tous','Tous')}${chip('Presse','Presse & essais')}${chip('Littérature','Littérature')}</div>
    <div class="sub mb" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">
      ${vus.length} texte(s) · ${totalRead}/${READINGS.length} lus
    </div>
    ${list}
    <div class="card mt"><div class="sub">Chaque lecture t'apporte du vocabulaire en contexte, un extrait audio et <b>trois questions de compréhension au format du test</b> — énoncés en anglais, explication en français. Un nouveau texte est mis en avant chaque jour.</div></div>
  `;
}
function setReadFilter(k){ _readFilter = k; renderReadingHome(); }

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
  const nq = (r.q || []).length;
  const best = _readQBest(id);
  const qCard = nq ? `
    <div class="card mt" style="border-color:#5aa9ff55">
      <h2 style="font-size:16px;margin-bottom:6px">🔍 Comprendre le texte</h2>
      <div class="sub">${nq} questions au format du test : énoncé et options en anglais, explication en français.${best !== null ? ` <b>Meilleur score : ${best}/${nq}.</b>` : ''}</div>
      <button class="btn mt" onclick="startReadQuiz('${id}')">${best === null ? 'Répondre aux questions' : 'Refaire les questions'}</button>
    </div>` : '';
  app.innerHTML = `
    <button class="btn ghost" style="width:auto;padding:8px 14px;margin-bottom:12px" onclick="renderReadingHome()">‹ Lectures</button>
    <h2 style="font-size:22px">${r.title}</h2>
    <div class="sub" style="margin-top:2px;margin-bottom:12px"><span style="color:${_typeColor(r.type)};font-weight:700">${r.type}</span> · ${r.author} · ${_readWords(r)} mots · ≈ ${_readMins(r)} min</div>
    <div class="segwrap mb">
      <button class="segchip ${_readMode==='bi'?'on':''}" onclick="setReadMode('bi','${id}')">Bilingue</button>
      <button class="segchip ${_readMode==='en'?'on':''}" onclick="setReadMode('en','${id}')">Anglais seul</button>
      <button class="segchip" onclick="speakAll('${id}')">🔊 Écouter tout</button>
    </div>
    <div class="reading">${paras}</div>
    <div class="card mt"><h2 style="font-size:16px;margin-bottom:8px">Mots & expressions à retenir</h2>${gloss}</div>
    ${qCard}
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

/* ============================================================
   LES QUESTIONS — compréhension au format du test
   Énoncés et options en anglais, explication en français.
   Le texte reste consultable pendant la série (en anglais seul :
   revenir à la traduction pendant l'épreuve n'apprend rien).
   Les erreurs partent dans « Mes erreurs » comme celles de l'examen.
   ============================================================ */
let RQ = null;
function startReadQuiz(id){
  const r = READINGS.find(x => x.id === id);
  if(!r || !(r.q||[]).length){ toast('Pas de questions sur ce texte'); return; }
  RQ = { id, i: 0, ok: 0, answered: false };
  renderReadQuiz();
}
function renderReadQuiz(){
  if(!RQ) return;
  const r = READINGS.find(x => x.id === RQ.id); if(!r) return;
  const it = r.q[RQ.i];
  window.scrollTo(0,0);
  const texte = r.pairs.map(p => `<p style="margin:0 0 10px">${_rEsc(p[0])}</p>`).join('');
  const opts = it[1].map((o,k) =>
    `<button class="opt" data-k="${k}" onclick="answerReadQ(${k})"><span class="lab">${optLabel(k)}</span>${_rEsc(o)}</button>`).join('');
  app.innerHTML = `
    <button class="btn ghost" style="width:auto;padding:8px 14px;margin-bottom:12px" onclick="quitReadQuiz()">‹ Le texte</button>
    <div class="sub mb" style="font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">
      🔍 ${r.title} · question ${RQ.i+1}/${r.q.length}
    </div>
    <details class="whyx" style="margin-bottom:12px">
      <summary>Revoir le texte (anglais)</summary>
      <div style="line-height:1.65">${texte}</div>
    </details>
    <div class="card"><h2 style="font-size:17px;line-height:1.4">${_rEsc(it[0])}</h2></div>
    <div id="rqopts" class="mt">${opts}</div>
    <div id="rqafter"></div>
  `;
}
function answerReadQ(k){
  if(!RQ || RQ.answered) return;
  RQ.answered = true;
  const r = READINGS.find(x => x.id === RQ.id); if(!r) return;
  const it = r.q[RQ.i], correct = it[2], ok = k === correct;
  document.querySelectorAll('#rqopts .opt').forEach(b => {
    const bk = +b.dataset.k;
    b.setAttribute('disabled','');
    if(bk === correct) b.classList.add('good');
    else if(bk === k) b.classList.add('bad');
    else b.classList.add('dim');
  });
  if(ok){ RQ.ok++; addXp(5); }
  else recordMistake({ kind:'gram', q: it[0], opts: it[1], correct, expl: it[3], cat: 'Lecture · ' + r.title });
  const last = RQ.i === r.q.length - 1;
  document.getElementById('rqafter').innerHTML = `
    <div class="expl ${ok?'ok':'no'}">${ok ? '✅ Correct. ' : '❌ Réponse : ' + optLabel(correct) + '. '}${_rEsc(it[3])}</div>
    <button class="btn mt" onclick="nextReadQ()">${last ? 'Voir le résultat' : 'Question suivante'}</button>
  `;
}
function nextReadQ(){
  if(!RQ) return;
  const r = READINGS.find(x => x.id === RQ.id); if(!r) return;
  if(RQ.i < r.q.length - 1){ RQ.i++; RQ.answered = false; renderReadQuiz(); return; }
  finishReadQuiz();
}
function finishReadQuiz(){
  const r = READINGS.find(x => x.id === RQ.id); if(!r) return;
  const total = r.q.length, score = RQ.ok, parfait = score === total;
  const st = _readQState();
  const avant = st[r.id] ? st[r.id].best : -1;
  st[r.id] = { best: Math.max(avant, score), total, date: todayStr(), last: score };
  if(parfait) addXp(5);
  /* lire + répondre = une vraie session d'étude */
  if(!S.readings) S.readings = {};
  const dejaLu = _readDone(r.id);
  S.readings[r.id] = todayStr();
  markStudy();
  if(!dejaLu) addXp(15);
  save();
  if(typeof checkAchievements === 'function') checkAchievements();
  const msg = parfait ? 'Sans faute — c’est le score qui compte au test.'
    : score >= total - 1 ? 'Presque. Relis le paragraphe visé : la bonne réponse y est toujours écrite.'
    : 'À reprendre. Les questions ratées sont parties dans « Mes erreurs ».';
  window.scrollTo(0,0);
  app.innerHTML = `
    <div class="card" style="text-align:center;border-color:${parfait?'var(--good)':'var(--line)'}">
      <div style="font-size:42px">${parfait?'★':'🔍'}</div>
      <h2 style="font-size:24px;margin-top:6px">${score}/${total}</h2>
      <div class="sub mt">${msg}</div>
      <div class="sub mt">+${score*5 + (parfait?5:0) + (dejaLu?0:15)} XP</div>
    </div>
    <button class="btn mt" onclick="startReadQuiz('${r.id}')">Refaire la série</button>
    <button class="btn ghost mt" onclick="openReading('${r.id}')">Revenir au texte</button>
    <button class="btn ghost mt" onclick="renderReadingHome()">Toutes les lectures</button>
  `;
  RQ = null;
}
function quitReadQuiz(){ const id = RQ ? RQ.id : null; RQ = null; if(id) openReading(id); else renderReadingHome(); }
