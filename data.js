/* ============================================================
   990 — Données de contenu (grammaire Part 5 + vocabulaire TOEIC)
   ============================================================ */

/* --- LEÇONS DE GRAMMAIRE (style Part 5) ---
   Chaque leçon se débloque quand la précédente est réussie (≥ 70%).
   q = [énoncé, [options], indexBonne, explicationFR]
*/
window.LESSONS = [
  {
    id: "pos",
    title: "Parties du discours",
    tag: "Fondations",
    note: "En Part 5, un blanc précédé d'un article/adjectif ou suivi d'un verbe attend souvent un NOM ; entre l'article et le nom, un ADJECTIF ; pour modifier un verbe/adjectif, un ADVERBE (souvent en -ly). Repère la place du mot dans la phrase avant même de traduire.",
    q: [
      ["The company reported a significant ______ in quarterly sales.", ["grow", "grew", "growth", "growingly"], 2, "Après l'adjectif « significant » et l'article, on attend un NOM : growth (la croissance)."],
      ["All employees must work ______ to meet the deadline.", ["efficient", "efficiently", "efficiency", "efficiencies"], 1, "On modifie le verbe « work » → ADVERBE : efficiently."],
      ["The manager gave a very ______ presentation to the board.", ["persuade", "persuasion", "persuasive", "persuasively"], 2, "Entre « very » et le nom « presentation », il faut un ADJECTIF : persuasive."],
      ["The new policy will improve overall ______.", ["produce", "productive", "productively", "productivity"], 3, "Après l'adjectif « overall », un NOM : productivity."],
      ["Please respond ______ to the client's inquiry.", ["prompt", "promptly", "promptness", "prompted"], 1, "On modifie le verbe « respond » → ADVERBE : promptly."],
      ["Her ______ to detail impressed the recruiters.", ["attend", "attentive", "attention", "attentively"], 2, "Après le déterminant « Her », un NOM : attention (to detail)."],
      ["The instructions were surprisingly ______ to follow.", ["ease", "easy", "easily", "easiness"], 1, "Après « be + adverbe », il faut un ADJECTIF attribut : easy."],
      ["The firm operates ______ across three continents.", ["globe", "global", "globally", "globalize"], 2, "On modifie le verbe « operates » → ADVERBE : globally."]
    ]
  },
  {
    id: "svagr",
    title: "Accord sujet-verbe",
    tag: "Fondations",
    note: "Le verbe s'accorde avec le vrai sujet, pas avec le mot le plus proche. Attention aux groupes intercalés (of the...), aux sujets collectifs et à « each / every / everyone » qui sont SINGULIERS.",
    q: [
      ["The list of approved vendors ______ updated every quarter.", ["is", "are", "were", "have"], 0, "Sujet = « The list » (singulier). « of approved vendors » n'est qu'un complément → is."],
      ["Each of the candidates ______ required to submit a résumé.", ["are", "is", "were", "have"], 1, "« Each » est singulier → is."],
      ["Neither the CEO nor the directors ______ available today.", ["is", "was", "are", "has"], 2, "Avec « neither...nor », le verbe s'accorde au sujet le plus proche : « directors » (pluriel) → are."],
      ["The number of complaints ______ decreasing steadily.", ["are", "have", "is", "were"], 2, "« The number of » est singulier → is."],
      ["Everyone in the departments ______ to attend the briefing.", ["need", "needs", "are needing", "have"], 1, "« Everyone » est singulier → needs."],
      ["The data ______ been analyzed by the research team.", ["has", "have", "is", "are"], 0, "En anglais des affaires, « data » est traité comme singulier ici → has."],
      ["A range of options ______ available to new subscribers.", ["is", "are", "were", "have"], 0, "Sujet = « A range » (singulier) → is."],
      ["Both proposals ______ been reviewed by the committee.", ["has", "is", "have", "was"], 2, "« Both proposals » est pluriel → have."]
    ]
  },
  {
    id: "tenses",
    title: "Temps verbaux",
    tag: "Verbe",
    note: "Repère les marqueurs de temps : « next week / tomorrow » → futur ; « yesterday / last year » → prétérit ; « since / for + durée » → present perfect ; « currently / at the moment » → présent continu.",
    q: [
      ["The board ______ the merger proposal next Monday.", ["reviews", "reviewed", "will review", "has reviewed"], 2, "« next Monday » → futur : will review."],
      ["She ______ for this company since 2019.", ["works", "worked", "has worked", "is working"], 2, "« since 2019 » → present perfect : has worked."],
      ["We ______ the contract yesterday afternoon.", ["sign", "signed", "have signed", "will sign"], 1, "« yesterday » → prétérit : signed."],
      ["The technicians ______ the servers at the moment.", ["repair", "repaired", "are repairing", "will repair"], 2, "« at the moment » → présent continu : are repairing."],
      ["By the time you arrive, the meeting ______ already ______.", ["will / start", "has / started", "will have / started", "had / start"], 2, "« By the time... » projette un achèvement futur → futur antérieur : will have started."],
      ["Prices ______ steadily over the past six months.", ["rise", "rose", "have risen", "will rise"], 2, "« over the past six months » → present perfect : have risen."],
      ["When I called, the receptionist ______ another customer.", ["helps", "was helping", "has helped", "will help"], 1, "Action en cours dans le passé → passé continu : was helping."],
      ["The shipment ______ tomorrow morning as scheduled.", ["arrives", "arrived", "has arrived", "was arriving"], 0, "Horaire fixe planifié → présent simple à valeur future : arrives."]
    ]
  },
  {
    id: "prep",
    title: "Prépositions",
    tag: "Connexions",
    note: "Temps : in (mois/année) · on (jour/date) · at (heure). Lieu et expressions figées se mémorisent : « responsible FOR », « interested IN », « depend ON », « comply WITH ».",
    q: [
      ["The conference is scheduled ______ March 14th.", ["in", "at", "on", "by"], 2, "Date précise → on : on March 14th."],
      ["Please submit your report ______ Friday at the latest.", ["by", "until", "since", "for"], 0, "Échéance = « pas plus tard que » → by."],
      ["The team is responsible ______ customer retention.", ["of", "for", "to", "with"], 1, "Expression figée : responsible for."],
      ["All products must comply ______ safety regulations.", ["to", "on", "with", "for"], 2, "Expression figée : comply with."],
      ["The store opens ______ 9 a.m. on weekdays.", ["in", "on", "at", "by"], 2, "Heure précise → at : at 9 a.m."],
      ["Our success depends ______ customer feedback.", ["of", "on", "to", "in"], 1, "Expression figée : depend on."],
      ["The office will be closed ______ the holiday season.", ["since", "during", "while", "for"], 1, "« during + période nommée » : during the holiday season."],
      ["She has been with the firm ______ ten years.", ["since", "for", "during", "by"], 1, "« for + durée » : for ten years."]
    ]
  },
  {
    id: "pron",
    title: "Pronoms",
    tag: "Connexions",
    note: "Sujet (I/he/they) vs complément (me/him/them) vs possessif (my/his/their vs mine/his/theirs) vs réfléchi (himself). Après une préposition → forme complément. « its » (possessif) ≠ « it's » (= it is).",
    q: [
      ["The director praised the team for ______ hard work.", ["they", "their", "them", "theirs"], 1, "Possessif devant un nom : their."],
      ["Please forward the invoice to my colleague and ______.", ["I", "me", "my", "mine"], 1, "Après « to », forme complément : me."],
      ["The award was presented to the analysts ______.", ["them", "themself", "themselves", "they"], 2, "Réfléchi pluriel : themselves."],
      ["This laptop is ______; the other one is yours.", ["my", "me", "mine", "myself"], 2, "Possessif sans nom qui suit : mine."],
      ["The company updated ______ privacy policy last week.", ["it's", "its", "their", "it"], 1, "Possessif de « company » : its (jamais it's = it is)."],
      ["Nobody remembered to bring ______ badge.", ["their", "them", "theirs", "they"], 0, "« their » sert de possessif singulier neutre après « nobody »."],
      ["Between you and ______, the deal looks risky.", ["I", "me", "my", "mine"], 1, "Après la préposition « between », forme complément : me."],
      ["The employees organized the event ______.", ["theirself", "themselves", "themself", "they"], 1, "Réfléchi pluriel : themselves."]
    ]
  },
  {
    id: "conj",
    title: "Connecteurs & conjonctions",
    tag: "Connexions",
    note: "Distingue la relation logique : contraste (although, however, despite), cause (because, due to), but (so that, in order to), condition (unless). « despite/because of » + NOM ; « although/because » + PROPOSITION.",
    q: [
      ["______ the delay, the project was completed on budget.", ["Although", "Despite", "Because", "However"], 1, "Suivi d'un NOM (« the delay ») et sens de contraste → Despite."],
      ["We hired more staff ______ demand increased sharply.", ["despite", "because", "in spite of", "due to"], 1, "Suivi d'une PROPOSITION et sens de cause → because."],
      ["The launch was postponed; ______, customers were notified.", ["although", "despite", "however", "because"], 2, "Connecteur entre deux idées après point-virgule → however."],
      ["______ you confirm by noon, your seat will be released.", ["Unless", "Despite", "However", "Because of"], 0, "« Unless » = « sauf si » : condition négative."],
      ["The flight was cancelled ______ bad weather.", ["although", "because", "due to", "so that"], 2, "Suivi d'un NOM et sens de cause → due to."],
      ["He stayed late ______ finish the quarterly report.", ["so that", "in order to", "because", "despite"], 1, "But + verbe à l'infinitif → in order to."],
      ["______ it was raining, the outdoor event went ahead.", ["Despite", "Even though", "Because", "Due to"], 1, "Suivi d'une PROPOSITION + contraste → Even though."],
      ["Sales rose, ______ profits remained flat.", ["so", "yet", "because", "unless"], 1, "Coordination avec contraste → yet."]
    ]
  },
  {
    id: "gerinf",
    title: "Gérondif vs infinitif",
    tag: "Verbe",
    note: "Certains verbes appellent le gérondif (-ing) : enjoy, avoid, consider, recommend, finish, suggest. D'autres l'infinitif (to) : want, decide, plan, agree, offer, hope, refuse. Après une préposition → toujours -ing.",
    q: [
      ["The committee recommended ______ the deadline by a week.", ["to extend", "extending", "extend", "extended"], 1, "« recommend » + gérondif : extending."],
      ["We decided ______ the meeting until next month.", ["postponing", "to postpone", "postpone", "postponed"], 1, "« decide » + infinitif : to postpone."],
      ["Employees should avoid ______ confidential files.", ["to share", "sharing", "share", "shared"], 1, "« avoid » + gérondif : sharing."],
      ["The client is interested in ______ a long-term contract.", ["to sign", "signing", "sign", "signs"], 1, "Après la préposition « in » → gérondif : signing."],
      ["Management agreed ______ the new safety measures.", ["implementing", "to implement", "implement", "implemented"], 1, "« agree » + infinitif : to implement."],
      ["She finished ______ the audit ahead of schedule.", ["to complete", "completing", "complete", "completes"], 1, "« finish » + gérondif : completing."],
      ["They are considering ______ a new branch overseas.", ["to open", "opening", "open", "opens"], 1, "« consider » + gérondif : opening."],
      ["The supplier offered ______ the defective units.", ["replacing", "to replace", "replace", "replaced"], 1, "« offer » + infinitif : to replace."]
    ]
  },
  {
    id: "rel",
    title: "Propositions relatives",
    tag: "Structure",
    note: "who (personnes), which (choses), that (les deux, restrictif), where (lieu), whose (possession). Le relatif reprend le nom qui le précède immédiatement.",
    q: [
      ["The manager ______ approved the budget is on leave.", ["which", "who", "whose", "where"], 1, "Antécédent = personne, sujet du verbe → who."],
      ["The warehouse ______ we store inventory was relocated.", ["which", "who", "where", "whose"], 2, "Antécédent = lieu → where."],
      ["The proposal ______ was submitted late got rejected.", ["who", "whose", "which", "where"], 2, "Antécédent = chose → which."],
      ["We met the vendor ______ prices are the most competitive.", ["who", "whose", "which", "that"], 1, "Possession (« ses prix ») → whose."],
      ["The software ______ they installed keeps crashing.", ["who", "where", "that", "whose"], 2, "Antécédent = chose, restrictif → that."],
      ["Employees ______ complete the training will get a badge.", ["which", "who", "whose", "where"], 1, "Antécédent = personnes → who."],
      ["The city ______ the conference is held is easily accessible.", ["which", "who", "where", "whose"], 2, "Antécédent = lieu → where."],
      ["The report, ______ was 40 pages long, took a week.", ["who", "which", "where", "whose"], 1, "Relative non restrictive sur une chose → which."]
    ]
  },
  {
    id: "passive",
    title: "Voix passive",
    tag: "Structure",
    note: "Passif = be + participe passé. On l'emploie quand l'agent est inconnu, évident ou peu important. Repère le complément d'agent « by ». Attention à accorder « be » au bon temps.",
    q: [
      ["The annual report ______ by the finance team every year.", ["prepares", "is prepared", "preparing", "has prepare"], 1, "Passif présent : is prepared."],
      ["All applications ______ before the end of the month.", ["review", "will review", "will be reviewed", "reviewing"], 2, "Passif futur : will be reviewed."],
      ["The new headquarters ______ last year.", ["was built", "built", "is building", "has build"], 0, "Passif passé : was built."],
      ["The parcels ______ currently ______ at the depot.", ["is / sorted", "are / being sorted", "are / sorting", "be / sorted"], 1, "Passif présent continu : are being sorted."],
      ["Refunds ______ within five business days.", ["process", "are processed", "processing", "have process"], 1, "Passif présent : are processed."],
      ["The contract ______ already ______ by both parties.", ["has / signed", "is / signing", "has been / signed", "was / sign"], 2, "Passif present perfect : has been signed."],
      ["Visitors ______ to wear a badge at all times.", ["require", "are required", "requiring", "requires"], 1, "Passif présent : are required (to)."],
      ["The issue ______ by the support team tomorrow.", ["resolves", "will be resolved", "is resolving", "resolved"], 1, "Passif futur : will be resolved."]
    ]
  },
  {
    id: "cond",
    title: "Conditionnels & comparatifs",
    tag: "Avancé",
    note: "Type 1 (réel) : If + présent, will + base. Type 2 (hypothétique) : If + prétérit, would + base. Comparatif : -er / more... than ; superlatif : the -est / the most.",
    q: [
      ["If the shipment arrives on time, we ______ the deadline.", ["meet", "will meet", "would meet", "met"], 1, "Conditionnel type 1 : If + présent, will + base → will meet."],
      ["If we had a bigger budget, we ______ more staff.", ["will hire", "hire", "would hire", "hired"], 2, "Type 2 (hypothétique) : If + prétérit, would + base → would hire."],
      ["This quarter's results are ______ than last quarter's.", ["good", "better", "best", "the better"], 1, "Comparatif de « good » → better."],
      ["The Paris office is ______ location in the network.", ["profitable", "more profitable", "the most profitable", "most profitably"], 2, "Superlatif → the most profitable."],
      ["Unless prices drop, demand ______ weak.", ["remains", "will remain", "would remain", "remained"], 1, "« Unless » = type 1 : will remain."],
      ["The new model is far ______ than the previous one.", ["light", "lighter", "lightest", "more light"], 1, "Comparatif court → lighter (far renforce)."],
      ["If I ______ you, I would renegotiate the terms.", ["am", "was", "were", "will be"], 2, "Type 2 : au subjonctif on emploie « were » : If I were you."],
      ["Our response time is ______ than the industry average.", ["fast", "faster", "fastest", "the faster"], 1, "Comparatif → faster... than."]
    ]
  },
  {
    id: "inversion",
    title: "Inversion & emphase",
    tag: "C1-C2",
    note: "Pour insister, on place un adverbe négatif ou restrictif en tête, ce qui force l'inversion sujet-auxiliaire (comme dans une question) : « Never have I... », « Rarely does she... », « Not only did they... », « Hardly had I arrived when... », « Only after... did we... ». C'est un marqueur d'anglais soutenu.",
    q: [
      ["Never ______ such a poorly organized event.", ["I have seen", "have I seen", "I saw", "did I saw"], 1, "Adverbe négatif en tête → inversion : have I seen.", ],
      ["Not only ______ the deadline, but they also cut costs.", ["they met", "did they meet", "they did meet", "met they"], 1, "« Not only » en tête → inversion : did they meet."],
      ["Rarely ______ a candidate so well prepared.", ["we see", "we do see", "do we see", "see we"], 2, "« Rarely » (adverbe restrictif) → inversion : do we see."],
      ["Hardly had the meeting begun ______ the fire alarm rang.", ["than", "when", "that", "then"], 1, "Structure figée : Hardly had... when...", ],
      ["Only after the audit ______ the full extent of the fraud.", ["we understood", "did we understand", "we did understand", "understood we"], 1, "« Only after... » → inversion sur la principale : did we understand."],
      ["No sooner had she left ______ the phone rang.", ["when", "that", "than", "then"], 2, "Structure figée : No sooner had... than..."],
      ["Under no circumstances ______ share this password.", ["you should", "should you", "you do", "do should"], 1, "Locution négative en tête → inversion : should you."],
      ["So complex was the problem ______ no one could solve it.", ["than", "that", "as", "which"], 1, "Emphase avec « So + adj » en tête → ...that (conséquence)."]
    ]
  },
  {
    id: "subjunctive",
    title: "Subjonctif & irréel",
    tag: "C1-C2",
    note: "Après des verbes de recommandation/nécessité (suggest, recommend, insist, demand, essential that...), l'anglais emploie la BASE verbale, invariable : « I suggest that he BE informed », « It is essential that she ARRIVE on time ». Pour les regrets/souhaits : « I wish I HAD known », « If only I HADN'T said that ».",
    q: [
      ["The board insists that the report ______ submitted by Friday.", ["is", "be", "will be", "being"], 1, "Subjonctif après « insist that » → base : be.", ],
      ["It is essential that every employee ______ the training.", ["completes", "complete", "will complete", "completed"], 1, "Subjonctif après « essential that » → base invariable : complete."],
      ["I wish I ______ about the change earlier.", ["knew", "have known", "had known", "would know"], 2, "Regret sur le passé : wish + past perfect → had known."],
      ["The doctor recommended that he ______ more water.", ["drinks", "drink", "drank", "would drink"], 1, "Subjonctif après « recommend that » → base : drink."],
      ["If only I ______ that email — it caused so much trouble.", ["didn't send", "hadn't sent", "wouldn't send", "haven't sent"], 1, "Regret : If only + past perfect → hadn't sent."],
      ["She acts as though she ______ the owner of the company.", ["is", "was", "were", "be"], 2, "« as though » + irréel → were (subjonctif)."],
      ["It's high time we ______ this issue seriously.", ["take", "took", "have taken", "will take"], 1, "« It's high time » + prétérit à valeur de présent → took."],
      ["The committee demanded that the fee ______ waived.", ["is", "be", "was", "would be"], 1, "Subjonctif après « demand that » → base : be."]
    ]
  },
  {
    id: "modals",
    title: "Modaux de déduction & concession",
    tag: "C1-C2",
    note: "Déduction sur le passé : « must have + participe » (certitude : il a dû...), « can't have » (impossibilité : il n'a pas pu...), « might/may have » (possibilité), « needn't have » (inutile mais fait). Concession : « however/whatever/no matter how + adj », « may well » (fort possible).",
    q: [
      ["The lights are off; they ______ home already.", ["must go", "must have gone", "can't go", "should go"], 1, "Déduction certaine sur le passé : must have gone.", ],
      ["She ______ the message; she never even opened it.", ["must have read", "can't have read", "should read", "might read"], 1, "Impossibilité logique : can't have read."],
      ["You ______ so much food — nobody was hungry.", ["mustn't buy", "needn't have bought", "can't have bought", "shouldn't buy"], 1, "Action inutile mais accomplie : needn't have bought."],
      ["______ hard you try, some clients are never satisfied.", ["However", "Whatever", "No matter how", "Whichever"], 2, "Concession + adverbe : No matter how hard."],
      ["He didn't answer; he ______ been asleep.", ["must", "may have", "can't have", "should"], 1, "Possibilité sur le passé : may have been."],
      ["The proposal ______ well be rejected, so prepare a backup.", ["may", "must", "should", "can"], 0, "« may well » = c'est fort possible."],
      ["I ______ have locked the door — I honestly can't remember.", ["must", "might", "can't", "needn't"], 1, "Incertitude : might have locked."],
      ["______ the outcome, we will support your decision.", ["However", "Whatever", "No matter how", "Whenever"], 1, "Concession + nom : Whatever the outcome."]
    ]
  }
];

/* --- VOCABULAIRE (cartes Anki intégrées) ---
   c = [recto EN, verso FR, exemple EN, thème]
*/
window.VOCAB = [
  // Bureau & administration
  ["to schedule", "planifier, programmer", "Let's schedule a call for Tuesday.", "Bureau"],
  ["deadline", "date limite, échéance", "The deadline is this Friday.", "Bureau"],
  ["agenda", "ordre du jour", "The first item on the agenda is the budget.", "Bureau"],
  ["to postpone", "reporter, ajourner", "We had to postpone the launch.", "Bureau"],
  ["staff", "personnel, effectif", "The store hired extra staff for the holidays.", "Bureau"],
  ["to attend", "assister à", "All managers must attend the briefing.", "Bureau"],
  ["headquarters", "siège social", "Their headquarters are in Berlin.", "Bureau"],
  ["appointment", "rendez-vous", "I have an appointment at 3 p.m.", "Bureau"],
  ["to fill out", "remplir (un formulaire)", "Please fill out this form.", "Bureau"],
  ["memo", "note de service", "She sent a memo to the whole team.", "Bureau"],
  ["workload", "charge de travail", "His workload has doubled this month.", "Bureau"],
  ["to delegate", "déléguer", "A good manager knows how to delegate.", "Bureau"],

  // Finance & comptabilité
  ["revenue", "chiffre d'affaires, recettes", "Annual revenue grew by 12%.", "Finance"],
  ["expense", "dépense, frais", "Travel expenses are reimbursed monthly.", "Finance"],
  ["invoice", "facture", "The invoice is due within 30 days.", "Finance"],
  ["budget", "budget", "The project went over budget.", "Finance"],
  ["profit", "bénéfice", "The company made a record profit.", "Finance"],
  ["loss", "perte", "They reported a loss last quarter.", "Finance"],
  ["refund", "remboursement", "You'll receive a full refund.", "Finance"],
  ["to reimburse", "rembourser (des frais)", "We'll reimburse you for the taxi.", "Finance"],
  ["shareholder", "actionnaire", "Shareholders approved the merger.", "Finance"],
  ["asset", "actif, bien", "The building is their main asset.", "Finance"],
  ["quarterly", "trimestriel", "The quarterly report is out.", "Finance"],
  ["to audit", "auditer, vérifier", "An external firm will audit the accounts.", "Finance"],
  ["turnover", "chiffre d'affaires ; rotation", "The firm has a high staff turnover.", "Finance"],
  ["overhead", "frais généraux", "We cut overhead by 15%.", "Finance"],

  // Réunions & communication
  ["to hold a meeting", "tenir une réunion", "We hold a meeting every Monday.", "Réunions"],
  ["minutes", "compte rendu (de réunion)", "Can you take the minutes?", "Réunions"],
  ["to reach a consensus", "parvenir à un consensus", "The board reached a consensus.", "Réunions"],
  ["feedback", "retour, avis", "Thanks for your feedback.", "Réunions"],
  ["to follow up", "assurer le suivi", "I'll follow up with the client tomorrow.", "Réunions"],
  ["to brief", "informer, briefer", "She briefed us on the new policy.", "Réunions"],
  ["handout", "document distribué", "Please take a handout on your way in.", "Réunions"],
  ["to postpone", "reporter", "The call was postponed to Thursday.", "Réunions"],
  ["on behalf of", "au nom de", "I'm calling on behalf of Mr. Lee.", "Réunions"],
  ["to clarify", "clarifier, préciser", "Could you clarify the last point?", "Réunions"],

  // RH & carrière
  ["to hire", "embaucher, recruter", "We plan to hire five engineers.", "RH"],
  ["to recruit", "recruter", "They recruit mainly from top schools.", "RH"],
  ["applicant", "candidat", "We received 200 applicants.", "RH"],
  ["résumé / CV", "CV", "Attach your résumé to the email.", "RH"],
  ["to promote", "promouvoir", "She was promoted to director.", "RH"],
  ["raise", "augmentation de salaire", "He asked for a raise.", "RH"],
  ["to resign", "démissionner", "The manager resigned last week.", "RH"],
  ["to lay off", "licencier (économique)", "The firm laid off 50 workers.", "RH"],
  ["performance review", "entretien d'évaluation", "My performance review is in June.", "RH"],
  ["benefits", "avantages (sociaux)", "The job offers great benefits.", "RH"],
  ["probation period", "période d'essai", "There is a three-month probation period.", "RH"],
  ["skilled", "qualifié, compétent", "We need skilled technicians.", "RH"],

  // Marketing & ventes
  ["to launch", "lancer", "They will launch the product in May.", "Marketing"],
  ["target audience", "public cible", "Teens are the target audience.", "Marketing"],
  ["brand", "marque", "It's a well-known brand.", "Marketing"],
  ["to advertise", "faire de la publicité", "They advertise on social media.", "Marketing"],
  ["survey", "enquête, sondage", "We ran a customer survey.", "Marketing"],
  ["to boost", "stimuler, doper", "The campaign boosted sales.", "Marketing"],
  ["retail", "vente au détail", "The retail sector is booming.", "Marketing"],
  ["wholesale", "vente en gros", "We buy at wholesale prices.", "Marketing"],
  ["discount", "remise, réduction", "Members get a 10% discount.", "Marketing"],
  ["to negotiate", "négocier", "They negotiated a better price.", "Marketing"],
  ["competitor", "concurrent", "Our main competitor lowered prices.", "Marketing"],
  ["market share", "part de marché", "We gained market share this year.", "Marketing"],

  // Contrats & juridique
  ["agreement", "accord, entente", "Both sides signed the agreement.", "Contrats"],
  ["clause", "clause", "Read clause 7 carefully.", "Contrats"],
  ["to comply with", "se conformer à", "You must comply with the rules.", "Contrats"],
  ["liability", "responsabilité (juridique)", "The company denied any liability.", "Contrats"],
  ["to terminate", "résilier, mettre fin à", "Either party can terminate the contract.", "Contrats"],
  ["breach", "violation, rupture", "That's a breach of contract.", "Contrats"],
  ["warranty", "garantie", "The product has a two-year warranty.", "Contrats"],
  ["to renew", "renouveler", "We renewed the lease.", "Contrats"],
  ["binding", "contraignant, ferme", "This is a legally binding document.", "Contrats"],
  ["terms and conditions", "conditions générales", "Please read the terms and conditions.", "Contrats"],

  // Logistique & production
  ["shipment", "envoi, expédition", "The shipment arrives Monday.", "Logistique"],
  ["warehouse", "entrepôt", "The goods are in the warehouse.", "Logistique"],
  ["inventory", "stock, inventaire", "We're running low on inventory.", "Logistique"],
  ["supplier", "fournisseur", "We changed suppliers last year.", "Logistique"],
  ["to deliver", "livrer", "They deliver within 48 hours.", "Logistique"],
  ["freight", "fret, marchandises", "Freight costs have risen.", "Logistique"],
  ["out of stock", "en rupture de stock", "That model is out of stock.", "Logistique"],
  ["to restock", "réapprovisionner", "We restock every Thursday.", "Logistique"],
  ["assembly line", "chaîne de montage", "The assembly line was upgraded.", "Logistique"],
  ["defective", "défectueux", "Return any defective items.", "Logistique"],

  // Voyage & déplacements
  ["itinerary", "itinéraire", "Here is your travel itinerary.", "Voyage"],
  ["boarding pass", "carte d'embarquement", "Have your boarding pass ready.", "Voyage"],
  ["to book", "réserver", "I booked a flight to Madrid.", "Voyage"],
  ["reservation", "réservation", "I have a dinner reservation.", "Voyage"],
  ["luggage", "bagages", "Your luggage exceeds the limit.", "Voyage"],
  ["delay", "retard", "The flight had a two-hour delay.", "Voyage"],
  ["to check in", "s'enregistrer", "You can check in online.", "Voyage"],
  ["round trip", "aller-retour", "A round-trip ticket is cheaper.", "Voyage"],
  ["accommodation", "hébergement", "Accommodation is included.", "Voyage"],
  ["expense report", "note de frais", "Submit your expense report by Friday.", "Voyage"],

  // Technologie & bureautique
  ["to install", "installer", "IT will install the update tonight.", "Tech"],
  ["to upgrade", "mettre à niveau", "We upgraded the servers.", "Tech"],
  ["backup", "sauvegarde", "Make a backup of your files.", "Tech"],
  ["to crash", "planter (système)", "The system crashed twice today.", "Tech"],
  ["troubleshoot", "dépanner, diagnostiquer", "IT will troubleshoot the network.", "Tech"],
  ["attachment", "pièce jointe", "See the attachment for details.", "Tech"],
  ["to log in", "se connecter", "Log in with your ID.", "Tech"],
  ["device", "appareil, dispositif", "Sync the device before use.", "Tech"],
  ["to enable", "activer", "Enable notifications in settings.", "Tech"],
  ["glitch", "bug, anomalie", "There's a glitch in the app.", "Tech"],

  // Verbes à particule fréquents (TOEIC)
  ["to carry out", "réaliser, effectuer", "We carried out a full inspection.", "Phrasal verbs"],
  ["to set up", "mettre en place, installer", "They set up a new branch.", "Phrasal verbs"],
  ["to call off", "annuler", "The event was called off.", "Phrasal verbs"],
  ["to look into", "examiner, enquêter sur", "We'll look into the complaint.", "Phrasal verbs"],
  ["to take over", "reprendre, racheter", "A rival firm took over the company.", "Phrasal verbs"],
  ["to hand in", "remettre, rendre", "Hand in the report by noon.", "Phrasal verbs"],
  ["to run out of", "être à court de", "We ran out of supplies.", "Phrasal verbs"],
  ["to put off", "reporter", "Don't put off the decision.", "Phrasal verbs"],
  ["to point out", "signaler, faire remarquer", "She pointed out an error.", "Phrasal verbs"],
  ["to cut down on", "réduire", "We need to cut down on costs.", "Phrasal verbs"],
  ["to figure out", "comprendre, résoudre", "We figured out the problem.", "Phrasal verbs"],
  ["to turn down", "refuser, rejeter", "He turned down the offer.", "Phrasal verbs"]
];

/* --- ÉCOUTE (Part 2 léger : question orale → 3 réponses) ---
   Généré par synthèse vocale. l = [question, [réponses], indexBonne]
*/
window.LISTENING = [
  ["Where is the sales meeting being held?", ["In conference room B.", "At two o'clock.", "By the sales manager."], 0],
  ["When will the shipment arrive?", ["From our supplier.", "Sometime next week.", "Yes, it did."], 1],
  ["Who is responsible for the new project?", ["In the marketing team.", "Ms. Alvarez is.", "Because it's urgent."], 1],
  ["How did the presentation go?", ["It went really well.", "In the main hall.", "At noon."], 0],
  ["Would you like some coffee before the meeting?", ["No, the meeting is over.", "Yes, that would be great.", "It's on the third floor."], 1],
  ["Why was the flight delayed?", ["To London.", "Because of bad weather.", "At gate 12."], 1],
  ["Could you send me the report by Friday?", ["Sure, I'll email it today.", "It was a long report.", "No, she couldn't."], 0],
  ["What time does the store open?", ["On Main Street.", "At nine o'clock.", "Yes, it's open."], 1],
  ["Have you finished the quarterly budget?", ["Almost, just a few more numbers.", "It's a big budget.", "In the finance office."], 0],
  ["Whose laptop is this on the desk?", ["I think it's Daniel's.", "On the desk.", "Yes, it is."], 0],
  ["How many attendees are expected?", ["In the auditorium.", "About fifty people.", "They attended yesterday."], 1],
  ["Should we take the train or drive?", ["The train would be faster.", "Yes, we should.", "It's a long trip."], 0]
];
