/* ============================================================
   990 — LE BLANC · section Reading du jeu n°1 (100 questions)
   Part 5 : 30 · Part 6 : 16 · Part 7 : 54.

   ⚠️ Calibrage du Part 5 : le vrai test n'est PAS Le Scalpel. Il pèse
   à peu près moitié grammaire de base (forme du mot, temps, pronom,
   préposition, conjonction) et moitié vocabulaire en contexte, où les
   quatre options sont de la même classe grammaticale et se départagent
   sur le sens et la collocation. C'est ce dosage qui est reproduit ici.
   ============================================================ */
'use strict';

window.BLANC = window.BLANC || {};

/* ---------- PART 5 — PHRASES À COMPLÉTER (30) ---------- */
window.BLANC.p5 = [
/* forme du mot */
{ s:"All maintenance requests must be submitted ______ through the online portal.", o:["electronic","electronically","electronic ally","electronics"], c:1,
  x:"Un verbe se modifie par un adverbe : electronically.", p:"Repère la classe manquante avant de lire les options : ici, rien ne manque à la phrase sauf un adverbe." },
{ s:"The committee's ______ of the proposal surprised several department heads.", o:["approve","approved","approval","approvingly"], c:2,
  x:"Après un possessif et avant « of », il faut un NOM.", p:"« The committee's ______ of » : l'encadrement possessif + of impose le nom, sans qu'on ait à comprendre la phrase." },
{ s:"Ms. Okonjo found the vendor's explanation entirely ______.", o:["convince","convinced","convincing","convincingly"], c:2,
  x:"Adjectif en -ing : la chose produit l'effet. -ed décrirait celui qui l'éprouve.", p:"convincing/convinced est le couple le plus testé du Part 5 après interesting/interested." },
{ s:"Applicants are advised to keep their answers as ______ as possible.", o:["concise","concisely","conciseness","concision"], c:0,
  x:"« as … as » encadre un adjectif quand il qualifie « answers ».", p:"L'adverbe ne marcherait que si « as … as » portait sur un verbe." },
/* temps et voix */
{ s:"By the time the auditors arrive next Tuesday, the finance team ______ all supporting documents.", o:["compiles","will have compiled","compiled","is compiling"], c:1,
  x:"« By the time » + futur → futur antérieur.", p:"Le repère temporel est en tête : lis-le avant les options." },
{ s:"The revised safety procedures ______ to all staff last Friday.", o:["distributed","were distributed","have distributed","distributing"], c:1,
  x:"Les procédures ne distribuent pas : passif. Et « last Friday » impose le prétérit.", p:"Sujet inanimé + complément d'agent absent = passif, presque à coup sûr." },
{ s:"Ever since the new scheduling tool ______ introduced, overtime has fallen by a third.", o:["is","was","has been","being"], c:1,
  x:"« Ever since » + point de départ précis → prétérit dans la subordonnée, present perfect dans la principale.", p:"La principale est déjà au present perfect : ne double pas le temps." },
{ s:"Deliveries to the northern depot ______ every Thursday morning without exception.", o:["arrive","arrives","are arriving","arrived"], c:0,
  x:"Habitude + sujet pluriel.", p:"« depot » juste avant le blanc attire le singulier : le vrai sujet est « deliveries »." },
/* pronoms, déterminants, quantifieurs */
{ s:"Employees who cycle to work may store ______ bicycles in the covered rack.", o:["they","their","theirs","them"], c:1,
  x:"Déterminant possessif devant un nom.", p:"theirs est pronom (sans nom derrière) : la présence de « bicycles » tranche." },
{ s:"______ of the two candidates has the logistics background the role requires.", o:["Neither","None","No one","Not"], c:0,
  x:"Neither = aucun DES DEUX. None s'emploie à partir de trois.", p:"« of the two » est le déclencheur : neither, jamais none." },
{ s:"There has been ______ interest in the training than we expected.", o:["fewer","less","lesser","little"], c:1,
  x:"« interest » est indénombrable → less.", p:"fewer/less : compte ce que désigne le nom, pas ce que suggère la phrase." },
{ s:"The firm offers a relocation allowance to ______ who move more than fifty kilometres.", o:["this","those","them","which"], c:1,
  x:"« those who » = ceux qui.", p:"Tournure figée : after « to », only « those who » introduces a relative clause here." },
/* prépositions et conjonctions */
{ s:"The warehouse will remain open ______ the renovation of the loading bay.", o:["during","while","meanwhile","since"], c:0,
  x:"Devant un NOM : during. While introduirait une proposition.", p:"during/while est le couple préposition/conjonction le plus testé : regarde ce qui suit le blanc." },
{ s:"______ the supplier reduces its lead times, we will have to hold more stock.", o:["Despite","Unless","Whereas","In case of"], c:1,
  x:"Unless = à moins que. La logique de la phrase est conditionnelle négative.", p:"Teste ta réponse en la traduisant : « à moins que » fonctionne, « bien que » non." },
{ s:"The contract was signed ______ schedule, despite the delay in legal review.", o:["on","in","at","by"], c:0,
  x:"« on schedule » = dans les temps. Collocation figée.", p:"on time / on schedule / in advance / behind schedule : à apprendre en bloc." },
{ s:"Please forward the invoice ______ the accounts department by the end of the week.", o:["at","to","for","into"], c:1,
  x:"forward something TO somebody.", p:"Les verbes de transmission (send, forward, submit, refer) prennent TO." },
{ s:"______ its modest size, the Lille office generates a quarter of national revenue.", o:["Although","Because of","Despite","Even"], c:2,
  x:"Devant un groupe nominal, la concession se dit despite / in spite of.", p:"Although exigerait un sujet et un verbe : « Although it is modest in size »." },
/* vocabulaire en contexte — les quatre options sont de la même classe */
{ s:"The new packaging was designed to ______ damage during long-distance transport.", o:["reduce","shorten","decline","lower"], c:0,
  x:"reduce damage : la collocation juste. « lower » va avec des chiffres, « decline » est intransitif.", p:"La moitié des items du Part 5 se jouent sur la collocation, pas sur la grammaire." },
{ s:"All figures in the report are ______ and should not be quoted externally.", o:["confident","confidential","confiding","confidently"], c:1,
  x:"confidential = confidentiel. confident = sûr de soi.", p:"Faux ami doublé d'un piège de forme : les deux premières options sont des adjectifs plausibles." },
{ s:"The supervisor asked the team to ______ the delivery schedule to the new opening hours.", o:["adapt","adopt","adept","adjust to"], c:0,
  x:"adapt X to Y = adapter. adopt = adopter.", p:"adapt/adopt/adept : trio classique. « adjust to » ne peut pas prendre de complément d'objet direct ici." },
{ s:"Attendance at the quarterly briefing is ______ for all team leaders.", o:["mandatory","obligatory to","necessarily","required of"], c:0,
  x:"mandatory = obligatoire. Adjectif simple après « is ».", p:"Les options 2 et 4 ajoutent une préposition qui ne se construit pas ainsi." },
{ s:"Sales of the entry-level model have remained ______ despite the price increase.", o:["steady","stable to","steadily","stability"], c:0,
  x:"remain + adjectif (verbe d'état).", p:"Après remain/stay/become, adjectif et non adverbe — l'erreur la plus fréquente des francophones." },
{ s:"The technician will ______ the fault before ordering any replacement parts.", o:["diagnose","prescribe","forecast","estimate"], c:0,
  x:"diagnose a fault : identifier la panne.", p:"Les quatre verbes existent : seul le contexte technique tranche." },
{ s:"Please note that refunds are issued ______ within ten working days.", o:["typical","typically","typicality","type"], c:1,
  x:"Adverbe modifiant le verbe passif.", p:"" },
{ s:"The firm's growth over the last decade has been nothing short of ______.", o:["remarkable","remark","remarkably","remarked"], c:0,
  x:"« nothing short of » + adjectif ou nom : ici l'adjectif.", p:"« nothing short of » = rien de moins que. Tournure de registre soutenu qui tombe au Part 5." },
{ s:"Candidates should ______ any gaps in their employment history in the cover letter.", o:["account for","account to","count for","count on"], c:0,
  x:"account for = rendre compte de, expliquer.", p:"Quatre verbes à particule très proches : le sens de « expliquer » n'appartient qu'à account for." },
{ s:"The auditors praised the department for its ______ record-keeping.", o:["meticulous","meticulously","meticulousness","meticulous ly"], c:0,
  x:"Adjectif devant un nom composé (record-keeping).", p:"" },
{ s:"Shipments are held at the depot ______ payment has been confirmed.", o:["until","during","by","since"], c:0,
  x:"until + proposition : jusqu'à ce que.", p:"« by » exigerait un groupe nominal (by Friday), pas une proposition." },
{ s:"Ms. Delacroix has been with the company ______ it opened its first regional office.", o:["for","since","from","during"], c:1,
  x:"since + point de départ (ici une proposition au prétérit).", p:"for + durée, since + point de départ : l'un des tout premiers réflexes testés." },
{ s:"The updated manual is considerably ______ than the previous edition.", o:["more clear","clearer","clearest","the clearest"], c:1,
  x:"Comparatif d'un adjectif court.", p:"« more clear » existe mais « clearer » est attendu, et le superlatif est exclu par « than »." }
];

/* ============================================================
   PART 6 — TEXTES À COMPLÉTER (4 textes × 4 trous = 16)
   Type exclusif de cette partie : un des quatre trous par texte est
   une PHRASE ENTIÈRE à insérer — on n'y répond qu'en ayant suivi le
   fil du paragraphe, jamais avec la grammaire seule.
   Le texte porte des marqueurs [1]…[4] remplacés à l'affichage.
   ============================================================ */
window.BLANC.p6 = [
{ id:'x1', kind:"Courriel", head:"À : tout le personnel · De : Facilities · Objet : Fermeture du parking nord",
  t:"Dear colleagues,\n\nThe north car park will be closed from 6 May for resurfacing. The work [1] approximately three weeks, weather permitting.\n\nDuring this period, staff permits will be valid in the visitor car park on Rowan Street. [2] Please allow an extra ten minutes for the walk, particularly if you have an early meeting.\n\nWe recognise that this is [3] for those of you who car-share, and we have asked the contractor to keep one row open where possible. Any questions [4] be directed to the facilities helpdesk.\n\nThank you for your patience.",
  qs:[
  { q:"[1]", o:["is taking","will take","took","has taken"], c:1,
    x:"Événement futur annoncé : will take.", p:"Le present continuous serait possible pour un fait planifié, mais « approximately » et « weather permitting » marquent la prévision." },
  { q:"[2]", o:["Spaces there are limited, so arrive early if you can.","The resurfacing was originally scheduled for last year.","Visitor permits must be purchased at reception.","The north car park has two hundred spaces."], c:0,
    x:"Phrase à insérer : elle doit enchaîner sur le parking de report ET annoncer le conseil suivant (« allow an extra ten minutes »).", p:"Teste chaque candidate avec la phrase SUIVANTE, pas seulement la précédente : c'est ce qui élimine les trois autres, toutes vraies mais hors du fil." },
  { q:"[3]", o:["an inconvenience","inconvenient to","inconveniently","an inconvenient"], c:0,
    x:"Après « this is », un groupe nominal : an inconvenience.", p:"« an inconvenient » est un adjectif précédé d'un article : impossible." },
  { q:"[4]", o:["should","should to","are","would have"], c:0,
    x:"« Any questions should be directed to… » : passif modal, formule figée de l'anglais administratif.", p:"" }]},

{ id:'x2', kind:"Note de service", head:"Note interne · Politique de remboursement des frais",
  t:"Effective 1 July, all expense claims must be submitted through the new portal. Paper forms [1] after that date.\n\nThe portal requires a photograph of each receipt. Claims under fifteen euros no longer need one, a change we made [2] the volume of small paper submissions.\n\n[3] Managers will receive a weekly summary rather than individual alerts, which should shorten approval times.\n\nStaff who claim mileage should note that the rate has been [4] to reflect current fuel prices. The updated figure appears automatically in the portal.",
  qs:[
  { q:"[1]", o:["will no longer be accepted","have not accepted","are not accepting","will not accept"], c:0,
    x:"Les formulaires sont reçus, pas receveurs : passif futur.", p:"Trois options sur quatre sont actives — le réflexe passif est ce qui se teste ici." },
  { q:"[2]", o:["in order to reduce","for reducing","so that reduce","with the reduction"], c:0,
    x:"But : in order to + base verbale.", p:"« for + -ing » exprime la fonction d'un objet, pas le but d'une décision." },
  { q:"[3]", o:["Approvals have also been simplified.","Receipts must be kept for seven years.","The portal was developed by an external supplier.","Paper forms are available at reception."], c:0,
    x:"La phrase suivante parle de synthèse hebdomadaire et de délais d'approbation : il faut une transition sur les approbations.", p:"L'option « paper forms at reception » contredit frontalement le premier paragraphe. Vérifie toujours la cohérence avec TOUT le texte." },
  { q:"[4]", o:["revised","reviewed","reversed","revered"], c:0,
    x:"revise a rate = réviser un taux.", p:"revise/review/reverse : trois verbes proches, un seul se dit d'un barème qu'on ajuste." }]},

{ id:'x3', kind:"Avis aux clients", head:"Avis affiché en agence",
  t:"From Monday 3 March, our branch will open at 9.30 rather than 9.00 on weekdays. Closing time is [1].\n\nThe later opening allows our advisers to hold their team briefing before the doors open, [2] interruptions during customer appointments.\n\n[3] You can also book an appointment online at any time, including evenings and weekends.\n\nWe apologise for any inconvenience and thank you for your [4] understanding.",
  qs:[
  { q:"[1]", o:["unchanged","unchanging","not change","without change"], c:0,
    x:"Adjectif attribut après « is ».", p:"unchanged (état) ≠ unchanging (qui ne change jamais)." },
  { q:"[2]", o:["reducing","reduced","to reduction","reduce"], c:0,
    x:"Participiale de conséquence : « …, reducing interruptions ».", p:"La virgule + participe présent exprime le résultat. Structure très fréquente en anglais écrit." },
  { q:"[3]", o:["Cash services remain available from 9.00 at the machines in the lobby.","Our advisers are trained for six weeks before joining a branch.","The branch will close permanently in September.","Team briefings last approximately one hour."], c:0,
    x:"Le paragraphe rassure le client sur ce qui reste possible : la machine dès 9 h, puis la prise de rendez-vous en ligne.", p:"Le fil est « voici comment vous dépanner malgré l'horaire » : seule cette option le suit." },
  { q:"[4]", o:["continued","continual","continuously","continuation"], c:0,
    x:"« your continued understanding » : formule consacrée de la lettre commerciale.", p:"continued (qui se poursuit) ≠ continual (répété). La collocation prime sur la nuance ici." }]},

{ id:'x4', kind:"Lettre", head:"Lettre à un fournisseur",
  t:"Dear Mr Haddad,\n\nThank you for your letter of 12 April concerning the shortfall in our March order. Having reviewed our records, I can confirm that we received 340 units [1] the 400 invoiced.\n\n[2] We have been a customer for eleven years and have never had cause to raise such an issue before.\n\nI would be grateful if you could either dispatch the missing units by 30 April or issue a credit note for the [3].\n\nI look forward to hearing from you and trust this can be [4] without difficulty.",
  qs:[
  { q:"[1]", o:["rather than","instead","other than","in place"], c:0,
    x:"rather than = au lieu de, devant un groupe nominal.", p:"« instead » est adverbe et s'emploie seul en fin de phrase ; « instead of » aurait convenu." },
  { q:"[2]", o:["I raise this reluctantly, as your service has otherwise been excellent.","Our order for May will be placed next week.","The invoice was paid in full on 2 April.","We have changed our delivery address since January."], c:0,
    x:"La phrase suivante insiste sur onze ans de relation sans incident : il faut une transition qui ménage le fournisseur.", p:"Le ton de la lettre (« Thank you », « I would be grateful ») commande une phrase courtoise. Au Part 6, le REGISTRE est un critère de réponse." },
  { q:"[3]", o:["difference","different","differently","differ"], c:0,
    x:"Nom après l'article : « a credit note for the difference ».", p:"« the difference » = l'écart, ici entre 340 et 400." },
  { q:"[4]", o:["resolved","resolve","resolving","resolution"], c:0,
    x:"« can be + participe passé » : passif modal.", p:"" }]}
];

/* ============================================================
   PART 7 — COMPRÉHENSION ÉCRITE (54 questions)
   · 10 passages simples → 29 questions
   · 2 doubles (5 q chacun) + 3 triples (5 q chacun) → 25 questions
   Le dosage du vrai test : les questions d'IMPLICATION dominent, une
   question par série porte sur le sens d'un mot, une autre sur une
   phrase à replacer, et dans les séries multiples au moins deux
   questions ne se répondent qu'en CROISANT deux documents (cross:1).
   ============================================================ */
window.BLANC.p7single = [

{ id:'s1', kind:"Offre d'emploi", t:
"HARBOURSIDE LOGISTICS — Night Shift Coordinator (Le Havre)\n\nHarbourside Logistics is seeking a Night Shift Coordinator for its Le Havre distribution hub. The successful applicant will oversee a team of twelve, allocate dock slots for incoming freight, and act as the site's first point of contact for carrier enquiries between 22:00 and 06:00.\n\nCandidates must hold a valid forklift certificate and have at least three years' experience in a warehouse environment, one of which in a supervisory capacity. Familiarity with warehouse management software is expected; training on our own system is provided during the first month.\n\nThis is a permanent position. The night premium is 22% above the base rate, and the role qualifies for the company's transport allowance, as public transport does not serve the site outside daytime hours.\n\nApplications should be sent to recruitment@harbourside.example with the reference NSC-0412. We regret that we cannot acknowledge every application; candidates selected for interview will be contacted within three weeks of the closing date, 30 September.",
  qs:[
  { q:"What is indicated about the position?", o:["It involves supervising other employees","It is a temporary contract","It requires frequent travel","It is based in an office"], c:0,
    x:"« oversee a team of twelve » et « one of which in a supervisory capacity ».", p:"« permanent position » élimine explicitement l'option 2 — le TOEIC place souvent le démenti d'un distracteur ailleurs dans le texte." },
  { q:"Why is a transport allowance offered?", o:["Because public transport does not run at night","Because the site has no car park","Because staff must use their own vehicles for deliveries","Because the site is far from the city centre"], c:0,
    x:"« as public transport does not serve the site outside daytime hours ».", p:"La cause est donnée par « as », pas par « because » : apprends à repérer toutes les conjonctions causales." },
  { q:"What are applicants told about the recruitment process?", o:["Only shortlisted candidates will hear back","Interviews will be held on site","A forklift test will be required","Applications must be posted"], c:0,
    x:"« we cannot acknowledge every application ; candidates selected for interview will be contacted ».", p:"Formulation détournée d'un fait simple : seuls les retenus auront une réponse." }]},

{ id:'s2', kind:"Messagerie instantanée", t:
"Nadia Ferrand  [10:42]  The projector in Cedar has just died — smoke, actually. I've unplugged it.\n\nTom Beaulieu  [10:43]  Smoke? Don't plug it back in. Is the room clear?\n\nNadia Ferrand  [10:44]  Nobody was in there yet. The client arrives at eleven.\n\nTom Beaulieu  [10:46]  I'll bring the portable unit up from the training room. It's older but it works. Can someone check whether Cedar's ceiling mount will take it?\n\nNadia Ferrand  [10:47]  Already measured. It won't. We'd be putting it on the table, which means the first row can't see.\n\nTom Beaulieu  [10:49]  Then move to Dogwood. It's free until two and the screen is bigger.\n\nNadia Ferrand  [10:50]  On it. I'll put a sign on Cedar's door and let reception know where to send them.",
  qs:[
  { q:"At 10:43, what does Mr. Beaulieu most likely mean when he writes, “Smoke?”", o:["He wants confirmation of something alarming","He is asking where the smoke came from","He thinks the room should be evacuated","He believes the projector can be repaired"], c:0,
    x:"Question d'intention : la reprise interrogative d'un seul mot marque la surprise et demande confirmation.", p:"Au Part 7, une question d'intention porte toujours sur une réplique courte : demande-toi ce qu'elle FAIT dans l'échange." },
  { q:"Why is the portable projector rejected?", o:["It cannot be attached to the ceiling mount","It is broken as well","It belongs to another department","It is too heavy to carry"], c:0,
    x:"« Cedar's ceiling mount… It won't [take it] ».", p:"La réponse tient dans deux mots (« It won't »), dont le complément est sous-entendu." },
  { q:"What will Ms. Ferrand do next?", o:["Inform reception of the room change","Order a replacement projector","Postpone the client meeting","Repair the ceiling mount"], c:0,
    x:"« let reception know where to send them ».", p:"" }]},

{ id:'s3', kind:"Article de presse", t:
"Rail freight operator Valmont has confirmed it will convert its Amiens depot into a combined rail-and-road transfer hub, a project it values at 34 million euros.\n\nThe depot currently handles bulk agricultural traffic and employs 61 people. Under the plan, announced Tuesday, it would also receive containerised goods trucked in from the A29 corridor, transferring them to rail for the final leg to Channel ports. Valmont says the conversion would take eighteen months and create roughly 90 jobs, most of them in loading and scheduling.\n\nNot everyone welcomes the plan. The Amiens Residents' Association has objected to the projected increase in night-time lorry movements, which it estimates at 120 per night. Valmont disputes that figure, saying its own modelling shows no more than 70, and has offered to fund noise barriers along the eastern approach.\n\nA public consultation opens on 14 October and runs for six weeks. Regional officials have indicated that a decision is unlikely before the spring, in part because the site sits within a protected water catchment area, which requires a separate environmental review.",
  qs:[
  { q:"What is the main purpose of the article?", o:["To report a proposed change to a facility","To announce the closure of a depot","To criticise a transport policy","To describe a completed construction project"], c:0,
    x:"Un projet annoncé, pas réalisé.", p:"« would take », « would create » : le conditionnel signale un projet. Ne le lis pas comme un fait acquis." },
  { q:"What is suggested about the number of lorry movements?", o:["The two sides do not agree on it","It will be limited by law","It has already increased","It was underestimated by residents"], c:0,
    x:"120 selon l'association, 70 selon Valmont : « Valmont disputes that figure ».", p:"Question d'implication : le texte ne dit jamais « ils ne sont pas d'accord », il le montre par deux chiffres opposés." },
  { q:"Why might the decision be delayed?", o:["An environmental review is required","The consultation has been postponed","Funding has not been secured","The residents have filed a lawsuit"], c:0,
    x:"« the site sits within a protected water catchment area, which requires a separate environmental review ».", p:"" },
  { q:"The word “leg” in paragraph 2 is closest in meaning to", o:["stage","support","distance","delay"], c:0,
    x:"« the final leg » = la dernière étape d'un trajet.", p:"Une question de vocabulaire par série : la réponse est toujours le sens EN CONTEXTE, jamais le sens premier." }]},

{ id:'s4', kind:"Avis", t:
"NOTICE TO TENANTS — Rowan Court\n\nThe lift serving floors 1 to 8 will undergo its statutory inspection on Wednesday 17 May between 08:00 and 13:00. During this time the lift will be out of service. The goods lift at the rear of the building will remain available and may be used by residents; please note that it opens onto the service corridor, not the main lobby.\n\nResidents who require assistance to reach their flat during the inspection window should contact the concierge before Monday 15 May so that arrangements can be made. We would particularly encourage anyone expecting a delivery to reschedule it outside these hours, as couriers will not be able to use either lift without a resident present.\n\nThe inspection is a legal requirement and cannot be moved. We apologise for the disruption.",
  qs:[
  { q:"What is the notice mainly about?", o:["A temporary loss of lift service","A change of concierge","A rise in service charges","A building evacuation drill"], c:0,
    x:"", p:"" },
  { q:"What are residents expecting deliveries advised to do?", o:["Arrange them for another time","Collect parcels from the concierge","Use the goods lift themselves","Notify the courier of the service corridor"], c:0,
    x:"« reschedule it outside these hours ».", p:"Les trois distracteurs recyclent des mots du texte (concierge, goods lift, service corridor) : le Part 7 punit la lecture par mots-clés." }]},

{ id:'s5', kind:"Courriel", t:
"From: c.varga@northfieldpress.example\nTo: authors@northfieldpress.example\nSubject: Proof deadlines — autumn list\n\nDear authors,\n\nWe are moving to a single proofing round for the autumn list. Until now, most of you have seen your text twice: once after copy-editing and once after typesetting. From September, you will receive one set of page proofs only.\n\nThis is not a cost decision. Two rounds worked when we printed in batches of three titles; with eleven titles scheduled between September and December, a second round would push several books past the Christmas trade deadline, which in practice means losing the season.\n\nWhat this changes for you: your corrections must be complete and final at the proof stage, and we can no longer accept rewriting at that point — only genuine errors. You will, however, get three weeks rather than ten days, and your editor will send you the copy-edited file informally beforehand so that nothing comes as a surprise.\n\nIf your contract specifies two rounds, please contact me directly; we will honour existing terms.\n\nCsilla Varga\nProduction Director",
  qs:[
  { q:"What change is being announced?", o:["Authors will review proofs once instead of twice","Deadlines will be extended for all titles","Copy-editing will be outsourced","Fewer titles will be published"], c:0,
    x:"« you will receive one set of page proofs only ».", p:"" },
  { q:"Why is the change being made?", o:["To keep books on schedule for the Christmas season","To reduce printing costs","To simplify contracts","Because fewer editors are available"], c:0,
    x:"« a second round would push several books past the Christmas trade deadline ».", p:"« This is not a cost decision » écarte explicitement le distracteur le plus tentant. Le TOEIC place ce genre de démenti exprès." },
  { q:"What is offered to compensate authors?", o:["A longer period to return corrections","A higher royalty rate","An additional proof on request","A meeting with the production team"], c:0,
    x:"« three weeks rather than ten days ».", p:"" }]},

{ id:'s6', kind:"Publicité", t:
"THE CARRINGTON — Meetings that don't feel like meetings\n\nSet in eleven acres of parkland forty minutes from Brussels, The Carrington offers six meeting rooms, a 120-seat auditorium and forty-eight bedrooms, all within one building.\n\nOur day delegate rate covers room hire, three servings of coffee, a two-course lunch and all standard equipment. Unlike many venues, we do not charge separately for screens, flip charts or wireless access — a policy our clients tell us is the single reason they return.\n\nBook before 31 January for any date in the following twelve months and we will include one complimentary evening reception for up to thirty guests.\n\nWe are not, however, the right venue for everyone. Groups of fewer than eight will find our rooms oversized, and we do not offer exclusive use of the house below forty bedrooms. If your event falls outside those limits, our sister property at Ghent may suit you better; we are happy to make the introduction.",
  qs:[
  { q:"What does the advertisement emphasise about the pricing?", o:["Equipment is included at no extra cost","Rooms are discounted in winter","Payment can be made in instalments","Meals are charged separately"], c:0,
    x:"« we do not charge separately for screens, flip charts or wireless access ».", p:"" },
  { q:"What is suggested about small groups?", o:["The venue may not suit them","They receive a reduced rate","They must book the whole house","They are directed to the auditorium"], c:0,
    x:"« Groups of fewer than eight will find our rooms oversized ».", p:"Implication : le texte ne dit pas « nous les refusons », il dit que les salles seront trop grandes." }]},

{ id:'s7', kind:"Lettre", t:
"Dear Ms. Adeyemi,\n\nThank you for taking the time to meet our team on 4 June. After careful consideration, we have offered the senior analyst position to another candidate whose experience in insurance pricing was closer to the immediate needs of the role.\n\nI want to be candid, because I think it would be useful to you: the panel's reservation was not about your technical work, which was the strongest we saw. It was that in the case study you presented the conclusion before the method, and two panel members felt they could not follow how you had reached it. In a client-facing role that is a real risk, and it is also an easy thing to change.\n\nWe expect to open a second analyst post in the autumn, in portfolio rather than pricing. I would encourage you to apply, and I am happy to speak to you before you do.\n\nWith best wishes,\n\nHelena Brandt\nHead of Analytics",
  qs:[
  { q:"What is the main purpose of the letter?", o:["To decline an application while encouraging a future one","To offer a position","To request additional references","To arrange a second interview"], c:0,
    x:"Refus assorti d'une invitation à repostuler.", p:"Ne t'arrête pas au premier paragraphe : le TOEIC construit ces lettres en deux temps." },
  { q:"What criticism does the writer make?", o:["The presentation's reasoning was hard to follow","The technical analysis contained errors","The candidate arrived late","The answers were too brief"], c:0,
    x:"« the conclusion before the method… could not follow how you had reached it ».", p:"« not about your technical work, which was the strongest we saw » : le texte écarte lui-même un distracteur." },
  { q:"What does Ms. Brandt suggest Ms. Adeyemi do?", o:["Apply for an upcoming vacancy","Take a course in pricing","Contact another firm","Resubmit her case study"], c:0,
    x:"« I would encourage you to apply ».", p:"" }]},

{ id:'s8', kind:"Mode d'emploi", t:
"BEFORE FIRST USE — Modèle HR-9\n\nRemove all packaging from inside the drum, including the cardboard spacer at the rear. Failure to remove the spacer is the most common cause of the vibration reported to our service line in the first week of ownership.\n\nThe machine must be level. Use the adjustable feet at the front; the rear feet are fixed and are not designed to be turned. A machine that rocks under load will move across the floor during the spin cycle.\n\nRun one empty cycle at 60°C with no detergent. This flushes residues from factory testing. Do not add laundry to this first cycle.\n\nIf the display shows E3 at any point during installation, the water inlet hose is not fully seated. Turn off the tap, disconnect and reconnect the hose, then restart. E3 is not a fault requiring service, and a call-out for E3 within the warranty period is chargeable.",
  qs:[
  { q:"What causes most early complaints?", o:["A packing part left in place","Incorrect detergent","A faulty inlet hose","Overloading the drum"], c:0,
    x:"« Failure to remove the spacer is the most common cause of the vibration reported ».", p:"" },
  { q:"What is indicated about error E3?", o:["The owner can resolve it without help","It requires a technician","It voids the warranty","It appears only after several uses"], c:0,
    x:"« not a fault requiring service » + la marche à suivre donnée.", p:"Et l'avertissement final (« chargeable ») confirme par la sanction : c'est une implication, pas une phrase directe." },
  { q:"What should NOT be done during the first cycle?", o:["Putting clothes in the machine","Closing the door","Using cold water","Levelling the machine"], c:0,
    x:"« Do not add laundry to this first cycle ».", p:"Les questions « NOT » sont fréquentes : il faut valider les trois autres options avant de conclure." }]},

{ id:'s9', kind:"Critique", t:
"Restaurant review — Le Petit Comptoir, rue Sainte-Catherine\n\nThere is a moment, about twenty minutes into a meal at Le Petit Comptoir, when you realise the kitchen has decided what you are eating and is simply better at it than you would have been. The menu runs to nine dishes. It changed twice during the three weeks I visited.\n\nThe cooking is precise without being fussy. A plate of sardines, grilled hard and served with nothing but lemon and a slick of oil, was the best thing I ate this month. A veal dish was less successful — under-seasoned, and the accompanying beans had been cooked well in advance, which showed.\n\nService is where the restaurant will divide opinion. There is one server for twenty-four covers. She is excellent, and she cannot be everywhere; expect to wait for the bill. The room is loud by eight, and there is no soft furnishing anywhere to absorb it.\n\nAt thirty-four euros for three courses, none of this feels like a complaint. It feels like a restaurant that knows precisely what it is, and has spent its money on the plate rather than the curtains.",
  qs:[
  { q:"What is the reviewer's overall opinion?", o:["Favourable despite some shortcomings","Enthusiastic without reservation","Largely negative","Undecided"], c:0,
    x:"Des réserves nettes (veau, service, bruit) mais une conclusion positive.", p:"La dernière phrase porte le verdict. Aux critiques, lis toujours le dernier paragraphe en premier." },
  { q:"What criticism is made of the food?", o:["One dish was bland and pre-cooked","The portions were small","The menu never changes","The fish was overcooked"], c:0,
    x:"« under-seasoned, and the accompanying beans had been cooked well in advance ».", p:"« grilled hard » décrit une cuisson voulue, pas un défaut : ne confonds pas description et reproche." },
  { q:"What does the reviewer suggest about the noise?", o:["The room's furnishings do nothing to reduce it","It stops after eight o'clock","It comes from the kitchen","Management plans to address it"], c:0,
    x:"« no soft furnishing anywhere to absorb it ».", p:"" }]},

{ id:'s10', kind:"Courriel", t:
"From: memberships@atlasclimb.example\nTo: r.dubois@example.com\nSubject: Your membership is due for renewal\n\nDear Rémi,\n\nYour annual membership at Atlas Climbing expires on 28 February. Renewing before that date keeps your current rate of 39 euros a month; from 1 March, new and lapsed memberships move to 45 euros.\n\nYou attended 71 sessions last year, which puts you in the top ten percent of our members and, incidentally, means your membership cost you about 6.60 euros a visit.\n\nTwo things you may not have used: your membership includes one free guest pass a month, which does not roll over, and you are entitled to two coaching sessions a year at no charge. Our records show you have taken neither since 2024.\n\nTo renew, reply to this email or speak to anyone at the desk. If you would rather pause your membership — for travel or injury — we can freeze it for up to three months at 8 euros a month, which we would rather do than lose you.",
  qs:[
  { q:"Why was the email sent?", o:["To prompt a membership renewal","To confirm a payment","To announce new opening hours","To invite the member to an event"], c:0,
    x:"", p:"" },
  { q:"What is indicated about the guest pass?", o:["It cannot be accumulated from month to month","It costs an additional fee","It is limited to two per year","It expires at the end of February"], c:0,
    x:"« which does not roll over » = non reportable.", p:"« roll over » est le point de la question : un verbe à particule porte souvent toute l'information." },
  { q:"What alternative is offered to the member?", o:["Suspending the membership temporarily","Switching to a weekly rate","Transferring the membership to a friend","Paying annually in advance"], c:0,
    x:"« we can freeze it for up to three months ».", p:"" }]}
];

/* ============================================================
   PART 7 · SÉRIES DE DOCUMENTS (2 doubles + 3 triples = 25 questions)
   cross:1 marque les questions qui n'ont AUCUNE réponse dans un seul
   document — il faut en combiner deux. C'est le cœur de ce qui
   manquait à l'app, et ce qui distingue un Part 7 réussi d'un autre.
   ============================================================ */
window.BLANC.p7multi = [

{ id:'m1', type:'double', docs:[
 { label:"Courriel", t:
"From: t.okada@brenner-vallois.example\nTo: training@cadretech.example\nSubject: Autumn open courses\n\nHello,\n\nI am looking to book three of our project managers onto a course in negotiation this autumn. Two constraints, I'm afraid: none of them can travel, so it would need to be one of your remote sessions, and they cannot be away from the office on a Monday or a Tuesday, which are our delivery days.\n\nWe would also need invoicing to a purchase order rather than by card. Is that possible?\n\nBest regards,\nTomoko Okada" },
 { label:"Extrait du catalogue", t:
"CADRETECH — Open courses, autumn\n\nNegotiation Essentials\n· 14 October — Lyon, in person — 2 days (Mon–Tue)\n· 6 November — remote — 2 days (Thu–Fri)\n· 19 November — Paris, in person — 1 day (Wed)\n· 2 December — remote — 1 day (Mon)\n\nAll open courses: 480 € per participant. Groups of three or more booked together receive a 15% reduction. Payment by card at booking, or by invoice against a purchase order where an account has been opened with us in advance (allow five working days).\n\nRemote sessions are capped at twelve participants and are not recorded." }],
  qs:[
  { q:"Why did Ms. Okada write the email?", o:["To enquire about booking a course","To cancel a registration","To request a refund","To propose a new course"], c:0,
    x:"« I am looking to book three of our project managers ».", p:"" },
  { q:"Which session meets both of Ms. Okada's constraints?", cross:1, o:["14 October","6 November","19 November","2 December"], c:1,
    x:"À distance ET hors lundi/mardi : seule la session du 6 novembre (remote, jeudi-vendredi) convient.", p:"Question croisée : les contraintes sont dans le courriel, les dates dans le catalogue. Aucun des deux documents ne suffit — c'est le mécanisme central du Part 7." },
  { q:"How much will Ms. Okada's company pay in total, before tax?", cross:1, o:["1 224 €","1 440 €","480 €","1 020 €"], c:0,
    x:"Trois participants × 480 € = 1 440 €, moins 15 % pour un groupe de trois = 1 224 €.", p:"Le nombre vient du courriel, le tarif et la remise du catalogue. Le calcul en deux temps est classique." },
  { q:"What is indicated about payment by invoice?", o:["An account must be opened beforehand","It is not available for open courses","It requires a deposit","It costs more than card payment"], c:0,
    x:"« where an account has been opened with us in advance ».", p:"La réponse à la question posée dans le courriel se trouve dans l'autre document : c'est le schéma du Part 7 en double." },
  { q:"What is stated about the remote sessions?", o:["Places are limited","They are shorter than in-person courses","They include a recording","They are discounted"], c:0,
    x:"« capped at twelve participants ».", p:"« not recorded » élimine l'option 3 : le texte dément lui-même le distracteur." }]},

{ id:'m2', type:'double', docs:[
 { label:"Avis", t:
"WESTGATE BUSINESS PARK — Notice to occupiers\n\nFrom 1 September, waste collection at Westgate will change. General waste will be collected on Mondays and Thursdays; recycling on Wednesdays only. Cardboard must be flattened and placed in the blue containers at the rear of each block — not left beside them, as uncollected cardboard blocks the fire access route.\n\nUnits producing more than four bins of general waste a week must arrange a private contract; the site licence does not cover volumes above that level. The management office can recommend three approved contractors.\n\nFood waste from on-site catering must be stored in the sealed grey bins and cannot be placed in general waste under any circumstances." },
 { label:"Courriel", t:
"From: h.mensah@unit14.example\nTo: office@westgatepark.example\nSubject: Waste arrangements — Unit 14\n\nDear management office,\n\nWe read the notice with some concern. Our unit runs a staff canteen serving around 200 meals a day, and we currently fill six bins of general waste each week — a figure that has not changed in three years, so I assume we have been over the limit for some time without either of us noticing.\n\nCould you send the list of contractors you mention? We would also like to confirm whether the canteen's waste is counted within the four-bin figure or separately.\n\nRegards,\nHenry Mensah" }],
  qs:[
  { q:"What is the main purpose of the notice?", o:["To announce changes to waste collection","To increase service charges","To close a fire exit","To introduce a recycling competition"], c:0,
    x:"", p:"" },
  { q:"Why must cardboard be placed inside the containers?", o:["To keep the fire access route clear","To prevent it becoming wet","Because it is collected by a different contractor","To reduce the number of bins"], c:0,
    x:"« uncollected cardboard blocks the fire access route ».", p:"" },
  { q:"What can be concluded about Unit 14?", cross:1, o:["It will need a private waste contract","It recycles more than other units","It has recently expanded its canteen","It is exempt from the new rules"], c:0,
    x:"Six bacs par semaine (courriel) dépasse la limite de quatre (avis) : contrat privé obligatoire.", p:"Le mot « conclude » annonce une question croisée : ni l'avis ni le courriel ne le disent, leur rapprochement le démontre." },
  { q:"What does Mr. Mensah request?", o:["A list of approved contractors","A reduction in collection frequency","Additional grey bins","A meeting with the management office"], c:0,
    x:"« Could you send the list of contractors you mention? ».", p:"" },
  { q:"What does the notice indicate about the canteen's food waste?", cross:1, o:["It must be kept in sealed grey bins","It counts towards the four-bin limit","It is collected on Wednesdays","It requires a separate licence"], c:0,
    x:"L'avis impose les bacs gris scellés pour les déchets alimentaires de la restauration sur site — et la cantine de l'unité 14 en relève.", p:"Il faut d'abord établir que « on-site catering » désigne la cantine du courriel, puis appliquer la règle de l'avis." }]},

{ id:'m3', type:'triple', docs:[
 { label:"Annonce", t:
"CALL FOR SPEAKERS — Northern Supply Chain Forum, 8–9 March\n\nWe invite proposals for 25-minute talks in three streams: automation on the warehouse floor, last-mile delivery, and workforce retention.\n\nProposals must include a title, a 150-word abstract and a short biography, and must be submitted by 10 January. Speakers are not paid, but receive a full pass (value 340 €), two nights' accommodation and reimbursement of standard-class rail travel.\n\nWe particularly encourage proposals from practitioners rather than consultants; a talk based on a case you have personally run will be favoured over a survey of the field. Please note that presentations from suppliers that amount to product demonstrations are not accepted in any stream." },
 { label:"Proposition", t:
"Title: What we got wrong automating our returns line\nStream: automation on the warehouse floor\n\nAbstract: In 2024 our site automated its returns processing, expecting a 40% reduction in handling time. We achieved 11%. This talk covers what the business case missed: the variability of returned packaging, the rework created by mis-scanned items, and the fact that our slowest step turned out to be a human decision we had never measured. I will show the original model, the actual figures, and the three changes that eventually got us to 29%.\n\nBiography: Ingrid Sawicka has managed the Gdańsk distribution centre for Petrel Retail since 2019. She is not a consultant and has nothing to sell.\n\nSubmitted: 7 January" },
 { label:"Courriel", t:
"From: programme@nsforum.example\nTo: i.sawicka@petrelretail.example\nSubject: Your proposal — accepted, with one request\n\nDear Ms. Sawicka,\n\nThe committee has accepted your talk for the 8 March morning session. It was, for what it is worth, the only proposal this year that reported a result below its target, which is precisely why we want it.\n\nOne request: could you extend to 40 minutes? We would like to run your talk as the stream's opening session, with time for questions. This would not change the arrangements set out in the call, which stand as published.\n\nWe will need your slides by 24 February. Please also confirm your rail itinerary so we can process the reimbursement in advance rather than after the event.\n\nKind regards,\nBenoît Charrier\nProgramme Committee" }],
  qs:[
  { q:"What is stated about speakers at the forum?", o:["They do not receive a fee","They must be consultants","They pay a reduced registration fee","They may present two talks"], c:0,
    x:"« Speakers are not paid ».", p:"Le distracteur « reduced fee » contredit « receive a full pass » : gratuit, pas réduit." },
  { q:"Why does the committee find the proposal unusual?", o:["It reports a result short of its goal","It comes from outside the region","It was submitted late","It covers two streams"], c:0,
    x:"« the only proposal this year that reported a result below its target ».", p:"" },
  { q:"What can be inferred about Ms. Sawicka's proposal?", cross:1, o:["It met the organisers' preference for practitioners","It was rejected for being a product demonstration","It missed the submission deadline","It was written by a consultant"], c:0,
    x:"L'annonce privilégie les praticiens ; la biographie précise « She is not a consultant and has nothing to sell ».", p:"Le rapprochement est explicite dans un sens : la proposition répond point par point au critère de l'annonce. Repère ces échos, ils portent les questions croisées." },
  { q:"How long will Ms. Sawicka's talk now last?", cross:1, o:["40 minutes","25 minutes","20 minutes","An hour"], c:0,
    x:"L'annonce prévoit 25 minutes ; le courriel demande d'étendre à 40.", p:"Une information est donnée puis MODIFIÉE dans un document ultérieur. C'est le piège le plus fréquent des séries triples : la dernière version l'emporte." },
  { q:"What is Ms. Sawicka asked to do before the event?", o:["Send her slides and travel details","Pay for her accommodation","Shorten her abstract","Nominate a second speaker"], c:0,
    x:"« We will need your slides by 24 February. Please also confirm your rail itinerary ».", p:"" }]},

{ id:'m4', type:'triple', docs:[
 { label:"Facture", t:
"MERIDIAN OFFICE SUPPLIES — Invoice 88-2291\nBill to: Calder & Wren, 4 Bridge Row\nDate: 3 April · Terms: 30 days\n\n· 12 × ergonomic chair, model EC-4 ............ 2 388,00 €\n· 4 × height-adjustable desk ................... 1 960,00 €\n· 1 × delivery and assembly .................... 240,00 €\n· 6 × monitor arm, model MA-2 .................. 414,00 €\n\nSubtotal ....................................... 5 002,00 €\nEarly settlement discount (2% if paid within 10 days)\n\nAssembly is included for desks only. Chair assembly, where requested, is charged at 8 € per unit." },
 { label:"Courriel", t:
"From: accounts@calderwren.example\nTo: billing@meridianoffice.example\nSubject: Invoice 88-2291 — two queries\n\nDear colleagues,\n\nTwo points before we schedule payment.\n\nFirst, we ordered five height-adjustable desks, not four. The fifth was delivered — it is in our meeting room — so I think this is an invoicing omission rather than a short delivery.\n\nSecond, your engineer assembled the chairs as well as the desks, at our request on the day. I cannot see that charge on the invoice, and I would rather settle everything at once than receive a second invoice next month.\n\nWe intend to pay on 11 April, which I believe still falls within your early settlement terms.\n\nRegards,\nPriya Raghunathan" },
 { label:"Réponse", t:
"From: billing@meridianoffice.example\nTo: accounts@calderwren.example\nSubject: RE: Invoice 88-2291 — two queries\n\nDear Ms. Raghunathan,\n\nThank you for both corrections — it is not often we are told we have undercharged.\n\nA revised invoice is attached. It adds the fifth desk at 490,00 € and the chair assembly for twelve units. The delivery and assembly line is unchanged.\n\nOn your third point: our terms run from the invoice date, so the discount window closed on 13 April. Your intended payment date falls inside it, and we will honour the discount on the revised total.\n\nWith thanks,\nMeridian Billing" }],
  qs:[
  { q:"What is the purpose of Ms. Raghunathan's email?", o:["To report items missing from an invoice","To dispute a delivery charge","To request a refund","To cancel part of an order"], c:0,
    x:"Deux omissions signalées, toutes deux en faveur du fournisseur.", p:"Attention au sens de la réclamation : elle signale qu'on l'a SOUS-facturée." },
  { q:"How much will be added for chair assembly?", cross:1, o:["96,00 €","24,00 €","240,00 €","8,00 €"], c:0,
    x:"12 chaises (facture) × 8 € l'unité (facture) = 96 €, la quantité étant confirmée par la réponse.", p:"Le tarif unitaire est en petits caractères sous la facture, la quantité dans la ligne d'articles." },
  { q:"What is the revised subtotal before discount?", cross:1, o:["5 588,00 €","5 492,00 €","5 002,00 €","5 498,00 €"], c:0,
    x:"5 002 + 490 (cinquième bureau) + 96 (montage des chaises) = 5 588 €.", p:"Trois documents, trois chiffres. Le TOEIC n'exige jamais de calcul difficile — seulement de trouver les bons nombres." },
  { q:"What does Meridian confirm about the discount?", o:["It still applies to the payment date given","It has been withdrawn","It has been increased to 3%","It applies only to the original invoice"], c:0,
    x:"« Your intended payment date falls inside it, and we will honour the discount on the revised total ».", p:"" },
  { q:"What is implied about the fifth desk?", cross:1, o:["It was delivered but not billed","It was returned to the supplier","It was damaged on arrival","It was ordered separately"], c:0,
    x:"« The fifth was delivered — it is in our meeting room » ; la facture n'en porte que quatre.", p:"L'implication naît de l'écart entre deux documents : livré d'un côté, absent de l'autre." }]},

{ id:'m5', type:'triple', docs:[
 { label:"Page web", t:
"HÔTEL DU PARC — Conference guests\n\nRooms from 118 € (single) and 139 € (double), including breakfast served 06:30–10:00.\n\nGuests attending an event at the Congress Centre qualify for our delegate rate — 15% off the published price — when booking with the event code. The shuttle to the Congress Centre runs every 20 minutes from 07:00, and the walk takes eleven minutes.\n\nCheck-in from 15:00; luggage may be left with reception from 09:00. Late check-out until 14:00 is available at 25 €, subject to availability, and is complimentary for stays of three nights or more." },
 { label:"Courriel", t:
"From: r.iwu@example.com\nTo: reservations@hotelduparc.example\nSubject: Booking — 8 to 11 March\n\nHello,\n\nI would like a single room for three nights, 8 to 11 March, using the delegate code NSF-MARCH for the Northern Supply Chain Forum.\n\nMy train home on the 11th is not until the afternoon, so I would like to keep the room as long as possible that day. I am also speaking on the morning of the 9th and will need to be at the Congress Centre by 08:15 — I would rather walk than rely on a shuttle, so I mainly need to know that the route is straightforward.\n\nThank you,\nRotimi Iwu" },
 { label:"Confirmation", t:
"HÔTEL DU PARC — Booking confirmation RI-4471\n\nGuest: R. Iwu · Single room · 8–11 March (3 nights)\nRate applied: delegate rate, event code NSF-MARCH\nRoom total: 300,90 €\nBreakfast: included\nCheck-out: 14:00 — no charge\n\nA map of the pedestrian route to the Congress Centre is attached. Please note that the direct footpath through the park is closed for resurfacing until 20 March; the signposted diversion adds approximately seven minutes." }],
  qs:[
  { q:"What rate did Mr. Iwu receive per night?", cross:1, o:["100,30 €","118,00 €","139,00 €","103,00 €"], c:0,
    x:"118 € moins 15 % = 100,30 €, ce que confirme le total de 300,90 € pour trois nuits.", p:"Deux chemins mènent à la réponse : la remise appliquée au tarif affiché, ou la division du total. Vérifie par l'autre." },
  { q:"Why was Mr. Iwu not charged for the late check-out?", cross:1, o:["His stay was long enough to include it","He is a conference speaker","He booked directly with the hotel","He asked for it in advance"], c:0,
    x:"« complimentary for stays of three nights or more » (page web) et son séjour fait trois nuits (courriel et confirmation).", p:"La règle est dans un document, la durée dans deux autres. Le TOEIC appelle ça une question d'inférence multi-documents." },
  { q:"What problem will affect Mr. Iwu's plan?", cross:1, o:["The footpath he intended to use is closed","The shuttle does not run early enough","Breakfast starts after he must leave","His room will not be ready on arrival"], c:0,
    x:"Il veut marcher (courriel) ; la confirmation annonce la fermeture du chemin direct, avec sept minutes de détour.", p:"Le problème n'est nommé nulle part : il naît du croisement entre une préférence et une information de dernière minute." },
  { q:"What time does breakfast begin?", o:["06:30","07:00","08:15","09:00"], c:0,
    x:"Page web : « breakfast served 06:30–10:00 ».", p:"Quatre horaires circulent dans la série : ne prends pas le premier venu." },
  { q:"What is indicated about luggage?", o:["It can be left before check-in","It must be collected by 14:00","It is stored for a fee","It cannot be left after check-out"], c:0,
    x:"« luggage may be left with reception from 09:00 », soit avant l'arrivée en chambre à 15 h.", p:"" }]}
];
