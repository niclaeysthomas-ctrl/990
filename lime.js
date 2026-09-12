/* ============================================================
   990 — LA LIME
   Exercices quotidiens de production : enlever les tournures
   qui plafonnent la note, une par une.

   PRINCIPE (celui que Thomas a posé pour « Erreurs fréquentes ») :
   on ne montre JAMAIS la forme fautive comme stimulus. La carte
   demande de PRODUIRE la forme juste à partir du sens français
   ou d'une phrase anglaise plate. L'erreur n'est jamais imprimée.

   Trois sources d'exercices :
   1. le corpus ci-dessous (65 items, écrits sur ses vraies fautes) ;
   2. l'auto-alimentation : chaque correction importée dans LA PLUME
      devient un exercice (voir limeFromCorrections) ;
   3. l'import de nouvelles séries (boucle export → Claude → import).

   Format d'un item : [id, cat, type, front, target, alt[], why]
     type 'fr2en' = front en français  → produire l'anglais
     type 'lift'  = front anglais plat → produire la version notée
   ============================================================ */
'use strict';

const LIME_CATS = {
  faux:  { n: 'Faux amis & calques',      ic: '🪤', c: 'var(--bad)' },
  mot:   { n: 'Le mot qui n’existe pas',  ic: '🚫', c: 'var(--bad)' },
  reg:   { n: 'Monter d’un cran',         ic: '✨', c: 'var(--accent)' },
  pos:   { n: 'Prendre position',         ic: '⚖️', c: 'var(--blue)' },
  conc:  { n: 'Concéder sans se renier',  ic: '🤝', c: 'var(--blue)' },
  coll:  { n: 'Collocations du travail',  ic: '🔗', c: 'var(--good)' },
  charn: { n: 'Charnières de haut vol',   ic: '🪢', c: 'var(--purple)' },
  gram:  { n: 'Structures qui notent',    ic: '🏛️', c: 'var(--purple)' },
  mec:   { n: 'Mécanique anglaise',       ic: '⚙️', c: 'var(--muted)' },
  perso: { n: 'Tes propres corrections',  ic: '🩹', c: '#ff7ab6' }
};

window.LIME = [

/* ---------- FAUX AMIS & CALQUES ---------- */
['fx01','faux','fr2en',"La concurrence entre les entreprises fait baisser les salaires.",
 "Competition between firms drives wages down",
 ["Competition among firms drives wages down","Competition between companies pushes wages down"],
 "« concurrence » ne se traduit jamais par concurrence (mot rare qui veut dire concomitance) : competition. Et le verbe qui va avec les salaires est drive / push … down."],

['fx02','faux','fr2en',"En fait, l’exemple donné dans le sujet prouve le contraire.",
 "In fact, the example given in the prompt proves the opposite",
 ["In reality, the example in the question proves the opposite"],
 "« in facts » n’existe pas : in fact est invariable. Et actually ne veut pas dire « actuellement » mais « en réalité »."],

['fx03','faux','fr2en',"Actuellement, une infirmière gagne moins qu’un analyste débutant.",
 "At present, a nurse earns less than a junior analyst",
 ["Currently, nurses earn less than entry-level analysts"],
 "« actuellement » = currently / at present. actually = « en fait ». C’est le calque le plus fréquent chez les francophones, et il se voit."],

['fx04','faux','fr2en',"Une réforme pourrait éventuellement corriger ces écarts.",
 "Reform could conceivably narrow these gaps",
 ["A reform might possibly correct these gaps"],
 "« éventuellement » = possibly / conceivably / if need be. eventually veut dire « finalement, à terme » — sens opposé."],

['fx05','faux','fr2en',"On peut corriger ce système par la réglementation.",
 "This system can be corrected through regulation",
 ["Regulation can correct this system"],
 "« reglementation » n’existe pas en anglais. Au sens général, regulation est indénombrable : pas de -s."],

['fx06','faux','fr2en',"Le contexte économique ne justifie pas tout.",
 "The economic context does not justify everything",
 ["Economic circumstances do not justify everything"],
 "economic = relatif à l’économie ; economical = économe, peu coûteux. Une voiture est economical, une politique est economic."],

['fx07','faux','fr2en',"Les responsabilités qu’il assume justifient son salaire.",
 "The responsibilities he takes on justify his salary",
 ["The responsibilities he shoulders justify his pay"],
 "responsibility s’écrit avec un i (le français pousse au a). Et « assumer » = take on / shoulder / bear, jamais to assume qui veut dire supposer."],

['fx08','faux','fr2en',"Personne ne veut assumer ce risque-là.",
 "No one wants to shoulder that risk",
 ["No one is willing to bear that risk","Nobody wants to take on that risk"],
 "to assume = présumer. Assumer une charge, un risque, un coût : shoulder, bear, take on."],

['fx09','faux','fr2en',"Ce métier demande des années de formation.",
 "This job requires years of training",
 ["The profession requires years of training"],
 "formation en anglais = la formation d’une chose (the formation of a government). L’apprentissage d’un métier, c’est training."],

['fx10','faux','fr2en',"Il cherche un stage en fusions-acquisitions.",
 "He is looking for an internship in M&A",
 ["He is looking for a placement in mergers and acquisitions"],
 "a stage = une étape, ou une scène de théâtre. Le stage français = an internship (US) / a placement (UK)."],

['fx11','faux','fr2en',"La différence est sensible d’un secteur à l’autre.",
 "The difference is noticeable from one sector to another",
 ["The gap is significant across sectors"],
 "sensible en anglais = raisonnable, sensé. « sensible » au sens français = noticeable, appreciable, significant."],

['fx12','faux','fr2en',"Le délai est trop court pour réformer les salaires.",
 "The time frame is too short to reform pay",
 ["The deadline is too tight to reform salaries"],
 "a delay = un retard, jamais un délai imparti. Délai = time frame, deadline, ou lead time."],

['fx13','faux','fr2en',"Un nombre important d’infirmières quittent le métier.",
 "A substantial number of nurses are leaving the profession",
 ["A considerable number of nurses leave the profession"],
 "important en anglais ne dit que l’importance, jamais la quantité. Pour « important » = nombreux : substantial, considerable, significant."],

['fx14','faux','fr2en',"Selon moi, la rareté explique mieux les salaires que l’utilité.",
 "In my view, scarcity explains pay better than usefulness",
 ["To my mind, scarcity is a better explanation of pay than social value"],
 "« according to me » est une faute lourde : according to ne s’emploie que pour autrui (according to the OECD). Pour soi : in my view, to my mind, I would argue."],

['fx15','faux','fr2en',"Les patrons fixent les salaires en fonction du marché.",
 "Employers set pay according to the market",
 ["Employers set wages in line with the market"],
 "a patron = un client d’un établissement, ou un mécène. Le patron = the boss ; l’employeur = the employer."],

['fx16','faux','fr2en',"Il faut préciser ce qu’on entend par « utilité ».",
 "We need to specify what is meant by 'utility'",
 ["We should spell out what we mean by 'utility'"],
 "to precise n’existe pas comme verbe : specify, spell out, make clear. Et on met les guillemets simples autour d’un terme qu’on questionne."],

['fx17','faux','fr2en',"Nous manquons d’informations sur les vrais écarts de salaires.",
 "We lack information on the real pay gaps",
 ["We do not have enough information about actual pay gaps"],
 "information, advice, research, evidence, knowledge : indénombrables, jamais de -s. « une information » = a piece of information."],

['fx18','faux','fr2en',"Le salaire dépend surtout de la rareté de la compétence.",
 "Pay depends above all on how scarce the skill is",
 ["Pay depends primarily on the scarcity of the skill"],
 "depend ON, jamais depend of. Même famille de pièges : rely on, insist on, comment on, focus on."],

['fx19','faux','fr2en',"Je ne suis d’accord qu’en partie avec cette idée.",
 "I only partly agree with this view",
 ["I agree only up to a point","I agree only to a limited extent"],
 "agree est un verbe : I agree, I disagree. « I am agree » est la faute qui signale un francophone à la première ligne."],

['fx20','faux','fr2en',"Les salaires des infirmières stagnent depuis vingt ans.",
 "Nurses' pay has stagnated for twenty years",
 ["Nurses' salaries have been stagnant for twenty years"],
 "for + durée, since + point de départ. Et le present perfect est obligatoire : has stagnated, jamais stagnates since."],

/* ---------- LE MOT QUI N’EXISTE PAS ---------- */
['mo01','mot','fr2en',"La capacité à prendre des risques se paie très cher.",
 "The ability to take risks commands a very high price",
 ["The willingness to take risks is richly rewarded"],
 "pricable n’existe pas. Ce qui se paie cher commands a high price / a premium ; ce qui est bien payé is richly rewarded, handsomely paid."],

['mo02','mot','fr2en',"Ce sont les corrections les plus rentables.",
 "These are the corrections that pay off most",
 ["These are the most worthwhile corrections"],
 "rentable = profitable quand il s’agit d’argent ; pour un effort, c’est worthwhile, ou le verbe to pay off."],

['mo03','mot','fr2en',"Ce raisonnement est bancal.",
 "This reasoning does not hold up",
 ["This line of reasoning is flawed","The argument does not stand up to scrutiny"],
 "Pas de traduction mot à mot pour « bancal ». Les trois formules à avoir : it does not hold up, it is flawed, it does not stand up to scrutiny."],

['mo04','mot','fr2en',"Ça ne change rien au fond du problème.",
 "That does not address the underlying problem",
 ["It leaves the underlying problem untouched"],
 "« le fond du problème » = the underlying problem / the root of the problem, jamais the bottom of the problem."],

/* ---------- MONTER D’UN CRAN ---------- */
['rg01','reg','lift',"It is important that salaries reflect the value of a job.",
 "It is crucial that salaries reflect the value of a job",
 ["It is imperative that salaries reflect the value of a job","It is essential that salaries reflect the value of a job"],
 "Monte l’adjectif : crucial, imperative, essential, vital. Bonus gratuit : après ces adjectifs, le subjonctif mandatif — that salaries REFLECT, jamais reflects."],

['rg02','reg','lift',"I think that scarcity explains wages.",
 "I would argue that scarcity explains wages",
 ["To my mind, scarcity is what explains wages","It seems to me that scarcity explains wages"],
 "I think est plat et se répète. I would argue pose une thèse et t’engage : c’est exactement ce que la grille récompense sous « position »."],

['rg03','reg','lift',"A lot of people believe this.",
 "A great many people believe this",
 ["This is a widely held belief","Many would subscribe to this view"],
 "a lot of appartient à l’oral. À l’écrit noté : a great many, a substantial number, ou la nominalisation a widely held belief."],

['rg04','reg','lift',"This is a very big problem.",
 "This is a profound problem",
 ["This is an acute problem","The problem runs deep"],
 "very + adjectif banal plafonne la note. Cherche l’adjectif qui porte déjà l’intensité : profound, acute, pressing, severe."],

['rg05','reg','lift',"At the end of the day, this system works.",
 "Ultimately, this system works",
 ["In the final analysis, the system works"],
 "« at the end of the day » est une formule orale. À l’écrit : ultimately, in the final analysis, on balance."],

['rg06','reg','lift',"We could change this through regulation or whatever.",
 "We could change this through regulation or some comparable mechanism",
 ["This could be changed through regulation or similar measures"],
 "« or whatever » sonne désinvolte et coûte cher en registre : or some comparable mechanism, or similar measures."],

['rg07','reg','lift',"Big CEOs earn a lot of money.",
 "Senior executives command vast sums",
 ["Top executives are paid enormous sums"],
 "big CEO n’est pas idiomatique : senior executives, top executives. Et to command + somme = toucher parce qu’on le vaut sur le marché."],

['rg08','reg','lift',"This system is bad but it works.",
 "Flawed though this system is, it works",
 ["Rotten though it may be, the system works","For all its flaws, the system works"],
 "La concessive inversée — adjectif + though + sujet + verbe — est un marqueur C1/C2. La forme est « Flawed though it is », jamais « for flawed as it can be »."],

['rg09','reg','lift',"We must analyse this more before deciding.",
 "This warrants closer analysis before any decision is taken",
 ["A deeper analysis is called for before any decision is made"],
 "warrant / call for évitent le must scolaire et nominalisent — c’est ce que la grille appelle un lexique sophistiqué."],

['rg10','reg','lift',"Nurses do not earn enough money.",
 "Nurses are chronically underpaid",
 ["Nurses are poorly remunerated"],
 "Un adjectif précis remplace une périphrase entière, et chronically ajoute la durée sans coûter une phrase."],

['rg11','reg','lift',"This shows that the market decides everything.",
 "This suggests that the market is the decisive factor",
 ["This points to the market as the decisive factor"],
 "show / prove sur-affirment ; suggest, indicate, point to laissent la place au doute. Le hedging est explicitement noté dans les grilles."],

['rg12','reg','lift',"There are many people who think the opposite.",
 "Many take the opposite view",
 ["A great many hold the opposite view"],
 "« There are many people who… » gâche six mots. Le sujet direct + verbe fort : Many take / hold / reject."],

/* ---------- PRENDRE POSITION ---------- */
['po01','pos','fr2en',"Je suis largement d’accord, mais avec une réserve importante.",
 "I largely agree, though with one important caveat",
 ["I broadly agree, with one significant reservation"],
 "La phrase qui rapporte des points : elle annonce l’accord ET la nuance. caveat / reservation = la réserve. À placer dès l’introduction."],

['po02','pos','fr2en',"Dans une large mesure, je partage cette analyse.",
 "To a large extent, I share this analysis",
 ["I agree to a large extent"],
 "La question dit « To what extent do you agree ? » : réponds avec le mot de la question — to a large extent, only to a limited extent, hardly at all."],

['po03','pos','fr2en',"L’idée est juste sur le principe, mais inapplicable en pratique.",
 "The principle is sound; in practice it is unworkable",
 ["The ideal is defensible in principle but unworkable in practice"],
 "in principle / in practice : le couple qui structure toute une nuance en une phrase. sound = solide, defensible = défendable."],

['po04','pos','fr2en',"Ceux qui défendent cette idée négligent un point décisif.",
 "Those who advocate this view overlook one decisive point",
 ["Proponents of this view overlook a decisive objection"],
 "advocate, proponent : le vocabulaire du débat. overlook = négliger sans le vouloir (plus élégant que forget)."],

['po05','pos','fr2en',"Il faut distinguer ce qui devrait être de ce qui est.",
 "We must distinguish what ought to be from what is",
 ["A distinction must be drawn between what ought to be and what is"],
 "distinguish X from Y, ou draw a distinction between X and Y. C’est la phrase qui sauve un sujet normatif quand tu es tenté de décrire le réel."],

['po06','pos','fr2en',"Cela ne veut pas dire pour autant qu’il faille tout laisser au marché.",
 "That is not to say that everything should be left to the market",
 ["This does not mean, however, that everything should be left to the market"],
 "« That is not to say that… » écarte une objection avant qu’on te la fasse. Très rentable en avant-dernière phrase."],

['po07','pos','fr2en',"Sur ce point précis, la thèse du sujet me paraît juste.",
 "On this particular point, the claim seems to me to be right",
 ["On this specific point, the statement is, I think, correct"],
 "the claim / the statement pour désigner la thèse du sujet : c’est le mot du correcteur, et il prouve que tu réponds à la question posée."],

['po08','pos','fr2en',"Ma position tient en une phrase : oui pour le principe, non pour la méthode.",
 "My position is simple: yes to the principle, no to the method",
 ["In short: the principle, yes; the method, no"],
 "Une position doit être formulable en une phrase. Si tu n’y arrives pas, c’est que tu n’en as pas — et le correcteur le verra avant toi."],

/* ---------- CONCÉDER SANS SE RENIER ---------- */
['cc01','conc','fr2en',"Certes, certains financiers créent de la valeur réelle.",
 "Admittedly, some financiers do create real value",
 ["Granted, some financiers create genuine value"],
 "Admittedly / Granted = « certes ». Le do emphatique concède pour de bon : they DO create."],

['cc02','conc','fr2en',"Cela dit, la rareté n’explique pas tout.",
 "That said, scarcity does not explain everything",
 ["Having said that, scarcity is not the whole story"],
 "That said = cela dit. Une syllabe de plus que however, et nettement mieux noté."],

['cc03','conc','fr2en',"Même si c’était vrai, cela ne changerait rien à l’argument.",
 "Even if that were true, it would not affect the argument",
 ["Even were that true, it would not alter the argument"],
 "Even if + prétérit modal (were) : concession hypothétique. Tu désamorces l’objection sans la concéder."],

['cc04','conc','fr2en',"Et c’est d’autant plus vrai dans les métiers du soin.",
 "This is all the more true in the caring professions",
 ["The point holds all the more in caring work"],
 "all the more + adjectif = « d’autant plus ». Le calque à fuir : so much more true."],

['cc05','conc','fr2en',"Loin de corriger le problème, une telle mesure l’aggraverait.",
 "Far from correcting the problem, such a measure would make it worse",
 ["Far from solving the problem, such a measure would aggravate it"],
 "Far from + -ing en tête de phrase : la concession renversée. Structure très notée, et impossible à improviser si tu ne l’as pas drillée."],

['cc06','conc','fr2en',"Peu de gens accepteraient ce risque, et encore moins de le porter seuls.",
 "Few people would accept that risk, let alone bear it alone",
 ["Few would take on that risk, let alone carry it alone"],
 "let alone = « et encore moins ». Toujours après une négation ou une restriction (few, hardly, no one)."],

/* ---------- COLLOCATIONS DU TRAVAIL ET DE L’ARGENT ---------- */
['co01','coll','fr2en',"Les salaires devraient être proportionnés à l’utilité sociale.",
 "Pay should be commensurate with social value",
 ["Salaries ought to be commensurate with the value of the work"],
 "be commensurate WITH = être proportionné à. C’est littéralement le mot du sujet (« reflect the value ») en registre C1."],

['co02','coll','fr2en',"Une compétence rare se paie plus cher que la moyenne.",
 "A scarce skill commands a premium",
 ["Rare skills command a premium"],
 "command a premium = se payer au-dessus du marché. Ici premium n’a rien à voir avec une prime d’assurance."],

['co03','coll','fr2en',"Ce sont les forces du marché qui fixent les salaires.",
 "It is market forces that set wages",
 ["Wages are set by market forces"],
 "market forces toujours au pluriel. Et la mise en relief « It is … that » est un point de grammaire offert."],

['co04','coll','fr2en',"L’écart entre les deux secteurs se creuse.",
 "The gap between the two sectors is widening",
 ["The gulf between the two sectors continues to widen"],
 "Un écart widens ou narrows ; on le closes ou on le bridges. Jamais the gap augments."],

['co05','coll','fr2en',"Il porte le risque, et il est payé en conséquence.",
 "He bears the risk, and is paid accordingly",
 ["They shoulder the risk and are rewarded accordingly"],
 "bear / carry the risk. Et accordingly remplace à lui seul toute une subordonnée de conséquence."],

['co06','coll','fr2en',"Ce métier est sous-payé par rapport à son utilité.",
 "This job is underpaid relative to its usefulness",
 ["The work is underpaid given its value to society"],
 "relative to / given = « par rapport à, compte tenu de ». compared to appelle une comparaison explicite, ce n’est pas la même chose."],

['co07','coll','fr2en',"On ne peut pas faire pression sur les salaires quand la main-d’œuvre est rare.",
 "Employers cannot squeeze wages when labour is scarce",
 ["Wages cannot be driven down when labour is in short supply"],
 "squeeze / drive down wages. labour est indénombrable, et « rare » pour une offre se dit in short supply."],

['co08','coll','fr2en',"L’offre et la demande expliquent l’essentiel du phénomène.",
 "Supply and demand account for most of it",
 ["Supply and demand explain most of the picture"],
 "account for = expliquer une part de. Ordre figé : supply and demand, jamais l’inverse."],

/* ---------- CHARNIÈRES DE HAUT VOL ---------- */
['ch01','charn','fr2en',"Si tant est que cela change quelque chose, cela aggrave le problème.",
 "If anything, it makes the problem worse",
 ["If anything, the problem is made worse"],
 "If anything = « si quelque chose, c’est plutôt… ». Trois mots pour retourner une objection."],

['ch02','charn','fr2en',"Par le même raisonnement, les pompiers devraient gagner davantage.",
 "By the same token, firefighters should earn more",
 ["By the same logic, firefighters ought to earn more"],
 "by the same token = en appliquant la même logique. Bien plus fort qu’un also de plus."],

['ch03','charn','fr2en',"Dans la mesure où le travail est rare, il se paie cher.",
 "Insofar as the work is scarce, it commands a high price",
 ["To the extent that the work is scarce, it is well paid"],
 "insofar as / to the extent that = dans la mesure où. Le calque à fuir : in the measure where."],

['ch04','charn','fr2en',"Autrement dit, l’utilité sociale n’entre pas dans l’équation.",
 "In other words, social usefulness does not enter into it",
 ["Put differently, social value plays no part"],
 "Put differently / to put it another way : la reformulation qui montre que tu maîtrises ton idée, pas que tu la répètes."],

['ch05','charn','fr2en',"Ce qui compte ici, ce n’est pas le principe mais ses effets.",
 "What matters here is not the principle but its effects",
 ["The issue here is not the principle but its consequences"],
 "La clivée « What matters is… » met en relief sans utiliser le mot important. Le verbe reste au singulier : What matters IS."],

['ch06','charn','fr2en',"À l’inverse, un métier utile et abondant reste mal payé.",
 "Conversely, work that is useful but plentiful remains poorly paid",
 ["By contrast, useful but plentiful work remains badly paid"],
 "Conversely = à l’inverse, quand la relation logique est symétrique. On the contrary sert à contredire, ce n’est pas le même usage."],

/* ---------- STRUCTURES QUI FONT LA BANDE ---------- */
['gr01','gram','fr2en',"L’État exige que les salaires soient publiés.",
 "The state requires that salaries be published",
 ["The government demands that salaries be published"],
 "Après require, demand, insist, suggest, recommend + that : base verbale (be, reflect, pay), sans -s et sans should. C’est le subjonctif mandatif, marqueur C1 immédiat."],

['gr02','gram','fr2en',"S’il n’y avait pas la rareté, tous les salaires se ressembleraient.",
 "Were it not for scarcity, all wages would look alike",
 ["Without scarcity, wages would all look alike"],
 "Were it not for (présent irréel) / Had it not been for (passé irréel) : l’inversion sans if. Ne mélange pas les deux temps."],

['gr03','gram','fr2en',"Ce qui explique vraiment les salaires, c’est la rareté.",
 "What really explains wages is scarcity",
 ["It is scarcity that really explains wages"],
 "La clivée What … is. Le verbe reste au singulier même si la suite est au pluriel : What explains wages IS scarcity."],

['gr04','gram','fr2en',"Un certain nombre d’infirmières quittent le métier chaque année.",
 "A number of nurses leave the profession every year",
 ["A number of nurses are leaving the profession each year"],
 "a number of + verbe au pluriel (leave) ; the number of + verbe au SINGULIER (the number of nurses is falling). Ce contraste est un classique de l’examen."],

['gr05','gram','fr2en',"Les salaires étant fixés par le marché, la morale n’y peut pas grand-chose.",
 "Wages being set by the market, morality has little purchase",
 ["Since wages are set by the market, morality counts for little"],
 "La proposition absolue (sujet propre + participe). Attention au participe pendant : si tu n’écris pas le sujet, il doit être celui de la principale."],

['gr06','gram','fr2en',"Jamais nous n’avons vu un dirigeant prendre plus de risques et être moins payé.",
 "Never have we seen a leader take greater risks and be paid less",
 ["Never have we seen an executive take on more risk and earn less"],
 "Après l’inversion négative, les verbes doivent rester parallèles : take … and BE paid. Et « moins payé » = paid less, jamais lesser."],

['gr07','gram','fr2en',"Plus la responsabilité est grande, plus le salaire est élevé.",
 "The greater the responsibility, the higher the salary",
 ["The greater the responsibility, the higher the pay"],
 "Structure corrélée : The + comparatif …, the + comparatif …. Pas besoin de verbe, et surtout pas de more … more."],

['gr08','gram','fr2en',"C’est un système qui, malgré ses défauts, tient toujours debout.",
 "It is a system which, for all its flaws, is still standing",
 ["This is a system that, whatever its faults, still stands"],
 "Le groupe intercalé entre le relatif et son verbe : c’est exactement ce que Le Scalpel drille. Les deux virgules sont obligatoires, jamais une seule."],

/* ---------- MÉCANIQUE ANGLAISE ---------- */
['me01','mec','fr2en',"Écris cette question en anglais, ponctuation comprise : Qu’est-ce qui détermine vraiment un salaire ?",
 "What actually determines a person's salary?",
 ["What really determines someone's pay?"],
 "Aucun espace avant ? ! : ; en anglais. Le réflexe français se voit à chaque ligne et se paie en note de mécanique."],

['me02','mec','fr2en',"Enchaîne après deux-points : La raison est simple : la rareté décide.",
 "The reason is simple: scarcity decides",
 ["The explanation is simple: scarcity is what decides"],
 "Espace après le deux-points, jamais avant. Et ce qui suit commence par une minuscule."],

['me03','mec','fr2en',"Les guillemets : il parle d’« utilité » au sens économique.",
 "He is talking about 'utility' in the economic sense",
 ["He uses 'utility' in its economic sense"],
 "Pas de « » en anglais : guillemets droits, collés au mot, sans espace. Et la ponctuation reste à l’intérieur en américain."],

['me04','mec','fr2en',"Un essai de 280 mots écrit en dix-neuf minutes.",
 "A 280-word essay written in nineteen minutes",
 ["A 280-word essay produced in nineteen minutes"],
 "L’adjectif composé chiffré prend un trait d’union et reste au singulier : a 280-word essay, a five-year plan, a ten-minute break."]

];

/* ============================================================
   ÉTAT
   ============================================================ */
function limeState() {
  if (!S.lime || typeof S.lime !== 'object' || Array.isArray(S.lime)) S.lime = { srs: {}, extra: [], done: 0, newDate: todayStr(), newToday: 0 };
  if (!S.lime.srs) S.lime.srs = {};
  if (!Array.isArray(S.lime.extra)) S.lime.extra = [];
  if (typeof S.lime.done !== 'number') S.lime.done = 0;
  if (S.lime.newDate !== todayStr()) { S.lime.newDate = todayStr(); S.lime.newToday = 0; }
  return S.lime;
}
function lEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function lAttr(s) { return lEsc(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }

/* Un item, qu'il vienne du corpus ou de ses propres corrections */
function limeItem(a) {
  if (!Array.isArray(a)) return a;                 // items perso : déjà des objets
  return { id: a[0], cat: a[1], type: a[2], front: a[3], target: a[4], alt: a[5] || [], why: a[6] || '' };
}
function limeAll() {
  limeState();
  return (window.LIME || []).map(limeItem).concat(S.lime.extra.map(limeItem));
}
function limeById(id) { return limeAll().find(i => i.id === id); }
function limeCat(id) { return LIME_CATS[id] || { n: id, ic: '•', c: 'var(--muted)' }; }

/* ---------- SM-2, indépendant des autres decks ---------- */
const LIME_SESSION = 8;     // longueur d'une séance
const LIME_NEW = 4;         // nouveaux exercices introduits par jour
function lSrs(id) {
  const st = limeState();
  if (!st.srs[id]) st.srs[id] = { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false, lapses: 0 };
  return st.srs[id];
}
function limeDue() {
  const now = Date.now(), st = limeState();
  return limeAll().filter(i => { const c = st.srs[i.id]; return c && c.introduced && c.due <= now; });
}
function limeFresh() {
  const st = limeState();
  return limeAll().filter(i => !st.srs[i.id] || !st.srs[i.id].introduced);
}
/* Les exercices nés de ses propres corrections passent devant : ce sont ses fautes à lui. */
function limeFreshSorted() {
  const f = limeFresh();
  return f.filter(i => i.cat === 'perso').concat(shuffle(f.filter(i => i.cat !== 'perso')));
}
function limeNewLeft() { const st = limeState(); return Math.max(0, LIME_NEW - (st.newToday || 0)); }
function buildLimeQueue(cat, illimite) {
  const keep = i => !cat || cat === 'all' || i.cat === cat;
  const due = shuffle(limeDue().filter(keep).map(i => i.id));
  const fresh = limeFreshSorted().filter(keep);
  /* Ses propres corrections ne sont pas de la matière neuve à doser : ce sont
     ses fautes, il vient de les faire. Elles ignorent le quota quotidien —
     sinon le coach annonce 12 exercices et le bouton ne lance rien. */
  const perso = fresh.filter(i => i.cat === 'perso').map(i => i.id);
  const autres = fresh.filter(i => i.cat !== 'perso').map(i => i.id);
  const news = illimite ? perso.concat(autres) : perso.concat(autres.slice(0, limeNewLeft()));
  const q = due.concat(news);
  return illimite ? q : q.slice(0, LIME_SESSION);
}
function limeQueueCount(cat) { return buildLimeQueue(cat, false).length; }
function limeMastered() { const st = limeState(); return Object.keys(st.srs).filter(k => st.srs[k].interval >= 21).length; }
function limePersoCount() { return limeState().extra.length; }
function limePersoNew() { return limeFresh().filter(i => i.cat === 'perso').length; }

function rateLime(id, rating) {
  const st = limeState();
  const c = lSrs(id), now = Date.now();
  if (!c.introduced) {
    c.introduced = true;
    const it = limeById(id);                       // un exo perso ne consomme pas le quota
    if (!it || it.cat !== 'perso') st.newToday = (st.newToday || 0) + 1;
  }
  if (rating === 0) {
    c.reps = 0; c.lapses = (c.lapses || 0) + 1;
    c.ease = Math.max(1.3, c.ease - 0.2); c.interval = 0; c.due = now + 60 * 1000;
  } else {
    if (c.interval < 1) c.interval = rating === 3 ? 4 : 1;
    else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; c.interval = Math.round(c.interval * m); }
    if (rating === 1) c.ease = Math.max(1.3, c.ease - 0.15);
    if (rating === 3) c.ease += 0.15;
    c.reps += 1; c.due = now + Math.max(1, c.interval) * DAY;
  }
  st.done = (st.done || 0) + 1;
  addXp(rating === 0 ? 2 : 6); save();
}
function limeNextLabel(id, rating) {
  const c = lSrs(id);
  if (rating === 0) return '<1min';
  let iv;
  if (c.interval < 1) iv = rating === 3 ? 4 : 1;
  else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; iv = Math.round(c.interval * m); }
  iv = Math.max(1, iv);
  return iv < 30 ? iv + 'j' : (Math.round(iv / 30) + 'mois');
}

/* Les catégories où il se rate le plus — sert au coach et à l'export */
function limeWeakCats(n) {
  const st = limeState(), tally = {};
  limeAll().forEach(i => {
    const c = st.srs[i.id];
    if (c && c.lapses) tally[i.cat] = (tally[i.cat] || 0) + c.lapses;
  });
  return Object.keys(tally).sort((a, b) => tally[b] - tally[a]).slice(0, n || 3);
}

/* ---------- Comparaison de sa réponse au modèle ---------- */
function lNorm(s) {
  return String(s || '').toLowerCase()
    .replace(/[’‘]/g, "'").replace(/[“”]/g, '"')
    .replace(/[.,;:!?()"«»–—]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function limeCheck(rep, it) {
  const r = lNorm(rep);
  if (!r) return null;
  if (r === lNorm(it.target)) return { cls: 'ok', txt: '✅ Mot pour mot le modèle.' };
  if ((it.alt || []).some(a => lNorm(a) === r)) return { cls: 'ok', txt: '✅ Une des variantes acceptées.' };
  const cible = lNorm(it.target).split(' ').filter(w => w.length > 3);
  const communs = cible.filter(w => r.indexOf(w) >= 0).length;
  if (cible.length && communs / cible.length >= 0.6) return { cls: '', txt: '≈ Tu y es presque — compare mot à mot, la note se joue là.' };
  return { cls: 'no', txt: 'Compare avec le modèle : ce n’est pas la même phrase.' };
}
/* Masque la forme visée si elle apparaît dans la consigne (exos nés de ses corrections).
   D'abord le groupe entier ; à défaut mot à mot, sinon l'explication donne la réponse. */
const LIME_STOP = " the a an to of in on at it is be and or that this for with not ";
function limeMask(texte, cible) {
  if (!texte) return '';
  let s = lEsc(texte);
  const ell = '<span style="color:var(--accent)">…………</span>';
  const core = String(cible || '').replace(/^(to|the|a|an)\s+/i, '').trim();
  const mots = core.toLowerCase().replace(/[^a-z'\s]/g, ' ').split(/\s+/)
    .filter(w => w.length > 3 && LIME_STOP.indexOf(' ' + w + ' ') < 0);
  if (!mots.length) return s;
  try {
    const re = new RegExp(mots[0] + '[\\s\\S]{0,40}?' + mots[mots.length - 1], 'i');
    if (re.test(s)) return s.replace(re, ell);
  } catch (e) {}
  mots.forEach(w => {
    try { s = s.replace(new RegExp('\\b' + w + '[a-z]*', 'gi'), ell); } catch (e) {}
  });
  return s.replace(/(<span style="color:var\(--accent\)">…………<\/span>[\s,;:]*){2,}/g, ell);
}

/* ============================================================
   AUTO-ALIMENTATION DEPUIS LA PLUME
   Chaque ligne « avant :: après :: pourquoi » d'une correction
   devient un exercice de production. La forme fautive n'est
   jamais reproduite : seule la bonne forme est à écrire.
   ============================================================ */
function limeFromCorrections(corrections, src) {
  if (!Array.isArray(corrections) || !corrections.length) return 0;
  const st = limeState(), now = Date.now();
  let n = 0;
  corrections.forEach((c, i) => {
    const cible = String(c.apres || '').trim();
    if (!cible || cible.length < 2) return;
    const cle = lNorm(cible);
    if (st.extra.some(e => lNorm(e.target) === cle)) return;
    if (limeAll().some(e => lNorm(e.target) === cle)) return;
    const consigne = String(c.pourquoi || '').trim();
    st.extra.push({
      id: 'p' + now + '-' + i,
      cat: 'perso',
      type: 'fix',
      front: consigne || 'Réécris cette tournure comme il fallait l’écrire.',
      target: cible,
      alt: [],
      why: consigne,
      src: src || 'La Plume',
      created: now
    });
    n++;
  });
  if (n) save();
  return n;
}

/* ============================================================
   ACCUEIL DU MODULE
   ============================================================ */
function renderLimeHome() {
  limeState();
  const q = limeQueueCount('all');
  const tot = limeAll().length;
  const persoNew = limePersoNew();
  const st = limeState();

  const cats = Object.keys(LIME_CATS).map(k => {
    const items = limeAll().filter(i => i.cat === k);
    if (!items.length) return '';
    const c = LIME_CATS[k];
    const anc = items.filter(i => st.srs[i.id] && st.srs[i.id].interval >= 21).length;
    const dus = limeQueueCount(k);
    return `<button class="tile" onclick="startLime('${k}')">
      <div class="ic" style="background:linear-gradient(135deg,${c.c}33,${c.c}11);color:${c.c}">${c.ic}</div>
      <div class="body"><div class="t">${c.n}</div><div class="d">${items.length} exo(s) · ${anc} ancré(s)</div></div>
      <div class="badge ${dus ? '' : 'zero'}">${dus || '✓'}</div>
    </button>`;
  }).join('');

  const nudge = persoNew > 0 ? `
    <div class="banner" style="border-color:#ff7ab6">
      <div class="t" style="color:#ff7ab6">🩹 ${persoNew} exercice(s) tiré(s) de tes propres corrections</div>
      <div class="d">Ce sont les fautes que tu as réellement faites dans tes essais, transformées en exercices de production. Ce sont les plus rentables du deck : personne d'autre ne les a.</div>
      <button class="btn" onclick="startLime('perso')">Attaquer les miennes</button>
    </div>` : '';

  app.innerHTML = `
    ${nudge}
    <div class="card">
      <h2>🔧 La Lime</h2>
      <div class="sub">Le travail de fond : enlever une à une les tournures qui plafonnent ta note. On ne t'y montre <b style="color:var(--txt)">jamais</b> la forme fautive — tu produis la bonne, tous les jours, jusqu'à ce qu'elle sorte toute seule.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${st.done || 0}</div><div class="sub">exos travaillés</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${limeMastered()}</div><div class="sub">ancrés (≥21j)</div></div>
      </div>
    </div>

    <button class="btn" onclick="startLime('all')" ${q === 0 ? 'disabled' : ''}>
      ${q === 0 ? 'Tout est à jour pour aujourd’hui 🎉' : `La séance du jour · ${q} exo(s)`}
    </button>
    <button class="btn sec mt" onclick="startLime('all',true)">Séance illimitée (bûcher un max)</button>

    <div class="row2 mt">
      <button class="btn sec" onclick="renderLimeExport()">📤 Demander une série</button>
      <button class="btn sec" onclick="renderLimeImport()">📥 Importer</button>
    </div>

    <div class="sub mb mt" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">Par chantier · ${tot} exercices</div>
    ${cats}
    <button class="btn ghost mt" onclick="setView('home')">Retour à l'accueil</button>
  `;
  window.scrollTo(0, 0);
}

/* ============================================================
   LA SÉANCE
   ============================================================ */
let LM = null;
function startLime(cat, illimite) {
  const queue = buildLimeQueue(cat, illimite);
  if (!queue.length) { toast('Rien à travailler ici aujourd’hui 🎉'); return; }
  LM = { queue, pos: 0, done: 0, shown: false, cat: cat || 'all' };
  renderLimeCard();
}
function renderLimeCard() {
  if (!LM || LM.pos >= LM.queue.length) return finishLime();
  const it = limeById(LM.queue[LM.pos]);
  if (!it) { LM.pos++; return renderLimeCard(); }
  const c = limeCat(it.cat);
  const neuf = !limeState().srs[it.id] || !limeState().srs[it.id].introduced;
  LM.shown = false;

  const consigne = it.type === 'lift'
    ? 'Réécris cette phrase au niveau du haut du barème'
    : it.type === 'fix'
      ? 'Écris la forme juste'
      : 'Écris-la en anglais';
  const front = it.type === 'fix' ? limeMask(it.front, it.target) : lEsc(it.front);
  const styleFront = it.type === 'lift'
    ? 'font-size:19px;font-weight:600;font-style:italic;color:var(--muted)'
    : 'font-size:20px;font-weight:700';

  app.innerHTML = `
    <div class="qmeta"><span>${neuf ? '🆕 Nouveau' : '🔁 Révision'} · ${c.ic} ${lEsc(c.n)}</span><span>${LM.pos + 1} / ${LM.queue.length}</span></div>
    <div class="card">
      <div class="sub" style="text-transform:uppercase;letter-spacing:.05em;font-size:11px;font-weight:800;color:${c.c}">${consigne}</div>
      <div class="mt" style="${styleFront}">${it.type === 'lift' ? '« ' + front + ' »' : front}</div>
    </div>
    <textarea id="lm_in" class="transinput" placeholder="Ta version…" autocapitalize="sentences" autocorrect="off" spellcheck="false"></textarea>
    <button class="btn" onclick="revealLime()">Voir le modèle</button>
    <div id="lm_out"></div>
    <button class="btn ghost mt" onclick="quitLime()">Arrêter la séance</button>
  `;
  window.scrollTo(0, 0);
}
function revealLime() {
  if (!LM || LM.shown) return;
  LM.shown = true;
  const it = limeById(LM.queue[LM.pos]);
  const rep = (document.getElementById('lm_in') || {}).value || '';
  const verdict = limeCheck(rep, it);
  const id = LM.queue[LM.pos];

  document.getElementById('lm_out').innerHTML = `
    ${verdict ? `<div class="expl ${verdict.cls} mt">${verdict.txt}</div>` : ''}
    <div class="trans-model mt">
      <div class="lbl">Le modèle <button class="spk sm" onclick="speakLimeTarget()" title="Écouter">🔊</button></div>
      <div class="en">${lEsc(it.target)}</div>
      ${(it.alt || []).length ? `<div class="trans-alt">Aussi juste : ${it.alt.map(a => lEsc(a)).join(' · ')}</div>` : ''}
    </div>
    ${it.why ? `<div class="expl mt">💡 ${lEsc(it.why)}</div>` : ''}
    <div class="sub mt mb" style="text-align:center">Sois honnête : c'est toi qui notes.</div>
    <div class="srsrow">
      <button class="again" onclick="doRateLime(0)">Raté<small>${limeNextLabel(id, 0)}</small></button>
      <button class="hard" onclick="doRateLime(1)">Dur<small>${limeNextLabel(id, 1)}</small></button>
      <button class="good" onclick="doRateLime(2)">Bien<small>${limeNextLabel(id, 2)}</small></button>
      <button class="easy" onclick="doRateLime(3)">Facile<small>${limeNextLabel(id, 3)}</small></button>
    </div>`;
  const el = document.getElementById('lm_out');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
/* On lit la cible depuis l'état, jamais depuis l'attribut HTML : une apostrophe
   dans le texte casserait le onclick (leçon de L'ARÈNE). */
function speakLimeTarget() {
  if (!LM) return;
  const it = limeById(LM.queue[LM.pos]);
  if (it && typeof speak === 'function') speak(it.target);
}
function doRateLime(rating) {
  const id = LM.queue[LM.pos];
  rateLime(id, rating);
  LM.done++;
  if (typeof bumpDaily === 'function') bumpDaily('trans');
  if (rating === 0) LM.queue.splice(Math.min(LM.pos + 4, LM.queue.length), 0, id);
  LM.pos++;
  touchDay();
  renderLimeCard();
}
function quitLime() { LM = null; renderLimeHome(); }
function finishLime() {
  touchDay(); save();
  if (typeof checkAchievements === 'function') checkAchievements();
  const n = LM ? LM.done : 0;
  app.innerHTML = `
    <div class="card big">
      <div class="em">🔧</div>
      <div class="score" style="color:var(--good)">+${n}</div>
      <div class="lab">tournure(s) limée(s)</div>
      <div class="mt sub">Une tournure n'est enlevée que le jour où la bonne sort sans y penser, sous chrono. Replace-en une aujourd'hui, dans un mail ou un essai.</div>
    </div>
    <button class="btn" onclick="renderLimeHome()">Terminé</button>
    ${limeQueueCount('all') ? `<button class="btn sec mt" onclick="startLime('all')">Continuer (${limeQueueCount('all')})</button>` : ''}
  `;
  window.scrollTo(0, 0);
}

/* ============================================================
   BOUCLE EXPORT → CLAUDE → IMPORT (nouvelles séries)
   ============================================================ */
function limeExportText() {
  const faibles = limeWeakCats(3).map(k => limeCat(k).n);
  const st = limeState();
  const dejaVues = limeAll().filter(i => st.srs[i.id] && st.srs[i.id].introduced).slice(-40).map(i => '- ' + i.target).join('\n');
  return `# 🔧 LA LIME — nouvelle série d'exercices
(export de mon app 990, ${new Date().toLocaleDateString('fr-FR')})

Claude, écris-moi une nouvelle série d'exercices de production pour enlever mes tournures de francophone.

## MON ÉTAT
· ${limeAll().length} exercices dans le deck, ${st.done || 0} travaillés, ${limeMastered()} ancrés.
${faibles.length ? `· Là où je me rate le plus : ${faibles.join(', ')}.` : '· Pas encore assez de données pour dire où je me rate.'}
· Je prépare une certification d'anglais et je vise le haut du barème à l'écrit.

## LA RÈGLE ABSOLUE
Ne montre **jamais** la forme fautive comme stimulus. La consigne donne le sens (en français) ou une phrase anglaise plate ; c'est à moi de **produire** la bonne forme. L'erreur ne doit jamais s'imprimer.

## CE QUE JE TRAVAILLE DÉJÀ (ne le refais pas)
${dejaVues || '- (rien encore)'}

════════════════════════════════════════
RÉPONDS EXACTEMENT DANS CE FORMAT — je recolle le bloc dans l'app, qui le parse.
Une ligne par exercice, avec DEUX doubles-deux-points :

## EXOS
- la consigne (français à traduire, OU phrase anglaise plate à relever) :: la forme juste en anglais :: pourquoi, en une ligne — le piège, le registre, quand on l'emploie

12 à 18 exercices. Priorité à ce qui coûte des points, puis à ce qui fait passer de « correct » à « natif ».
Pas de blabla autour : je copie le bloc d'un coup.`;
}
function renderLimeExport() {
  app.innerHTML = `
    <div class="card">
      <h2>📤 Demander une série</h2>
      <div class="sub">Le texte ci-dessous porte déjà toute la consigne : colle-le tel quel dans une conversation avec Claude, puis recolle sa réponse dans « Importer ». Il sait déjà ce que tu travailles et où tu te rates.</div>
    </div>
    <textarea id="lm_exp" class="transinput" style="min-height:240px;font-size:12px" readonly>${lEsc(limeExportText())}</textarea>
    <button class="btn" onclick="copyLimeExport()">📋 Copier</button>
    <button class="btn ghost mt" onclick="renderLimeHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function copyLimeExport() {
  const t = limeExportText();
  const ok = () => toast('📋 Copié — colle-le à Claude');
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, () => {
    const el = document.getElementById('lm_exp'); if (el) { el.select(); document.execCommand('copy'); ok(); }
  });
  else { const el = document.getElementById('lm_exp'); if (el) { el.select(); document.execCommand('copy'); ok(); } }
}

function parseLime(raw) {
  const out = [];
  String(raw || '').replace(/\r/g, '').split('\n').forEach(brut => {
    if (/^\s*```/.test(brut)) return;
    const l = brut.replace(/\*\*/g, '').replace(/__/g, '').replace(/^\s*[-*•·]\s*/, '').trim();
    if (!l || /^#/.test(l)) return;
    const p = l.split(/\s*::\s*/);
    if (p.length < 2) return;
    const front = p[0].trim(), target = p[1].trim(), why = (p[2] || '').trim();
    if (!front || !target) return;
    out.push({ front, target, why });
  });
  return out;
}
function renderLimeImport(msg, keep, isErr) {
  app.innerHTML = `
    <div class="card">
      <h2>📥 Importer une série</h2>
      <div class="sub">Colle la réponse de Claude. Chaque ligne devient un exercice de production, en révision espacée.</div>
    </div>
    ${msg ? `<div class="expl ${isErr ? 'no' : 'ok'} mb">${msg}</div>` : ''}
    <textarea id="lm_paste" class="transinput" style="min-height:${msg && !isErr ? '120px' : '240px'};font-size:13px" placeholder="## EXOS&#10;- La concurrence fait baisser les salaires. :: Competition drives wages down :: « concurrence » ne se dit jamais concurrence.">${lEsc(keep || '')}</textarea>
    <button class="btn ${msg && !isErr ? 'sec' : ''}" onclick="runLimeImport()">Importer</button>
    ${msg && !isErr ? `<button class="btn mt" onclick="startLime('all')">Commencer tout de suite</button>` : ''}
    <button class="btn ghost mt" onclick="renderLimeHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function runLimeImport() {
  const raw = (document.getElementById('lm_paste') || {}).value || '';
  const lignes = parseLime(raw);
  if (!lignes.length) {
    renderLimeImport("Je n'ai trouvé aucune ligne au format <b>consigne :: forme juste :: pourquoi</b>. Redemande à Claude de répondre au format de l'export.", raw, true);
    return;
  }
  const st = limeState(), now = Date.now();
  let n = 0, doublons = 0;
  lignes.forEach((l, i) => {
    const cle = lNorm(l.target);
    if (limeAll().some(e => lNorm(e.target) === cle)) { doublons++; return; }
    const anglais = /^[\x00-\x7F\s'’.,;:!?()-]+$/.test(l.front) && !/[àâçéèêëîïôùûü]/i.test(l.front);
    st.extra.push({
      id: 'i' + now + '-' + i, cat: 'perso', type: anglais ? 'lift' : 'fr2en',
      front: l.front, target: l.target, alt: [], why: l.why, src: 'Série importée', created: now
    });
    n++;
  });
  save(); touchDay(); addXp(10);
  if (typeof checkAchievements === 'function') checkAchievements();
  toast(`🔧 ${n} exercice(s) ajouté(s)`);
  renderLimeImport(`✨ <b>${n}</b> exercice(s) ajouté(s)${doublons ? ` · ${doublons} déjà présent(s)` : ''}.`);
}

/* Texte de la tuile d'accueil */
function limeTuileTexte() {
  const persoNew = limePersoNew();
  if (persoNew) return `🩹 ${persoNew} exo(s) tiré(s) de tes propres fautes`;
  const q = limeQueueCount('all');
  if (!q) return 'Tout est à jour — reviens demain';
  return `${q} exo(s) aujourd'hui · produire la forme juste`;
}
