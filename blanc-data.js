/* ============================================================
   990 — LE BLANC · jeu d'examen n°1, au format officiel
   200 questions : Listening 100 (Parts 1-4) + Reading 100 (Parts 5-7).

   Règles de rédaction, à tenir si on ajoute un jeu n°2 :
   · registre « anglais de bureau » neutre : commandes, livraisons,
     factures, réunions, déplacements, RH, immobilier, maintenance ;
   · aucun nom propre réel d'entreprise, des prénoms variés (le vrai
     test brasse les origines) ;
   · les distracteurs ne sont JAMAIS absurdes : ils sont plausibles et
     se départagent sur un détail (temps, préposition, référent) ;
   · Part 7 : les questions d'implication dominent, et les documents
     croisés se répondent en combinant deux sources, jamais une seule.

   Format d'un item d'écoute :  { a: audio (ce qui est PRONONCÉ),
                                  o: options écrites, c: index correct,
                                  x: explication FR, p: le piège }
   ============================================================ */
'use strict';

window.BLANC = window.BLANC || {};

/* ============================================================
   PART 1 — PHOTOGRAPHIES (6 questions)

   ⚠️ Le vrai test montre une photo et diffuse quatre phrases : on
   choisit celle qui la décrit. Sans banque d'images, on garde le
   MÉCANISME et on remplace la photo par sa description française —
   c'est la seule partie du blanc qui n'est pas au format exact, et
   l'app le dit. Ce qui s'entraîne ici reste l'essentiel : repérer le
   verbe faux, le complément absent, le mot qui ressemble.
   ============================================================ */
window.BLANC.p1 = [
  {
    scene: "Un homme en bleu de travail est debout sur un escabeau ; il visse une ampoule dans un plafonnier. Une caisse à outils ouverte est posée au sol, à côté de l'escabeau.",
    o: [
      "A man is climbing down a ladder.",
      "A man is replacing a light fixture.",
      "A man is putting away his tools.",
      "A man is painting the ceiling."
    ],
    c: 1,
    x: "« replace a light fixture » couvre exactement le geste : visser une ampoule dans un plafonnier.",
    p: "Les trois autres décrivent un moment voisin — descendre, ranger, peindre — mais pas celui de l'image. Au Part 1, le piège n°1 est le verbe d'action juste avant ou juste après la scène."
  },
  {
    scene: "Des cartons empilés sur une palette, au bord d'un quai de chargement. Un camion est reculé contre le quai, hayon ouvert. Personne n'est visible.",
    o: [
      "Some boxes have been stacked on a pallet.",
      "Workers are loading boxes onto a truck.",
      "A truck is pulling away from the dock.",
      "Boxes are being unpacked."
    ],
    c: 0,
    x: "Passif d'état (« have been stacked ») : on décrit le résultat, pas une action en cours.",
    p: "Aucune personne n'est visible : toute option avec « workers are… » est éliminée d'office. Écoute le SUJET autant que le verbe."
  },
  {
    scene: "Une femme est assise à un comptoir d'accueil ; elle tend une carte magnétique à un homme debout de l'autre côté du comptoir. Un badge pend à son cou.",
    o: [
      "She is handing him a key card.",
      "They are shaking hands across the counter.",
      "He is signing a register.",
      "She is removing her badge."
    ],
    c: 0,
    x: "« hand somebody something » = tendre. Le geste central de l'image.",
    p: "« shaking hands » décrit deux mains qui se rejoignent — plausible à l'oreille si on n'écoute que « hands ». Le mot qui ressemble est l'autre grand piège du Part 1."
  },
  {
    scene: "Une salle de réunion vide. Huit chaises sont rangées autour d'une longue table. Un écran de projection est déroulé au fond, éteint. Des tasses sont posées sur un plateau.",
    o: [
      "A presentation is under way.",
      "The chairs have been arranged around a table.",
      "People are taking their seats.",
      "Someone is pouring coffee."
    ],
    c: 1,
    x: "Salle vide : seule une description d'état tient.",
    p: "Une salle de réunion appelle l'idée de réunion — c'est exactement sur ce réflexe que jouent les trois distracteurs. Décris ce que tu VOIS, pas ce que le lieu suggère."
  },
  {
    scene: "Deux techniciennes en gilet réfléchissant examinent un plan déplié sur le capot d'une camionnette. Derrière elles, une grue est à l'arrêt sur un chantier.",
    o: [
      "They are rolling up a blueprint.",
      "A crane is lifting a steel beam.",
      "They are looking at a document together.",
      "One of them is getting into the van."
    ],
    c: 2,
    x: "Formulation générique (« a document ») : au Part 1, la bonne réponse est souvent la plus vague, parce qu'elle reste vraie.",
    p: "La grue est à l'arrêt : « is lifting » la met en mouvement. Attention aux éléments d'arrière-plan qu'on anime."
  },
  {
    scene: "Un rayon de supermarché. Une employée place des boîtes de conserve sur une étagère à mi-hauteur ; un chariot de réapprovisionnement à moitié plein est à côté d'elle.",
    o: [
      "She is pushing a shopping cart down the aisle.",
      "The shelves have been completely emptied.",
      "She is stocking shelves with canned goods.",
      "Customers are waiting in line at a register."
    ],
    c: 2,
    x: "« to stock shelves » = achalander, réapprovisionner. Vocabulaire de commerce très fréquent au TOEIC.",
    p: "« shopping cart » (chariot de client) contre « restocking cart » (chariot de réassort) : le mot piège porte sur le type d'objet, pas sur l'action."
  }
];

/* ============================================================
   PART 2 — QUESTION / RÉPONSE (25 questions)
   L'énoncé et les trois réponses sont UNIQUEMENT audio au vrai test :
   l'app ne montre donc ni la question ni les options, seulement A/B/C.
   ============================================================ */
window.BLANC.p2 = [
  { a: "Where did you put the quarterly figures?", o: ["On your desk, under the blue folder.", "They were quite encouraging.", "Every quarter, usually."], c: 0,
    x: "Question en « Where » → un lieu.", p: "« quarterly / quarter » : la reprise du mot est presque toujours un piège." },
  { a: "When is the new branch supposed to open?", o: ["In the business district.", "Not until March, I'm afraid.", "Yes, it's brand new."], c: 1,
    x: "« When » → un moment. « Not until March » repousse l'échéance.", p: "« branch » attire « business district » : mot du même univers, mauvaise question." },
  { a: "Why don't we move the meeting to Thursday?", o: ["Because it was too long.", "That works for me.", "To the third floor."], c: 1,
    x: "« Why don't we… » n'est pas une question de cause : c'est une SUGGESTION.", p: "Répondre « Because… » à un « Why don't we » est l'erreur type." },
  { a: "Has the shipment cleared customs yet?", o: ["It should arrive by Friday.", "A shipping company.", "Yes, I cleaned it."], c: 0,
    x: "Réponse indirecte : elle n'annonce pas oui ou non mais renseigne quand même.", p: "« cleared » / « cleaned » : paronymes. Et au Part 2, la bonne réponse est souvent indirecte." },
  { a: "Who's in charge of scheduling the interviews?", o: ["In the conference room.", "Priya took that over last month.", "For the marketing position."], c: 1,
    x: "« Who » → une personne.", p: "Les deux distracteurs répondent à « Where » et à « What for » : le TOEIC teste ta capacité à retenir le MOT INTERROGATIF." },
  { a: "You've already submitted your expense report, haven't you?", o: ["No, I'll do it this afternoon.", "It costs about forty euros.", "Yes, he submitted it."], c: 0,
    x: "Question-tag : on répond au fond, pas au tag.", p: "« expense » appelle un montant — piège lexical. Et « he » ne renvoie à personne." },
  { a: "Would you mind covering the front desk during lunch?", o: ["I had lunch at noon.", "Not at all, what time?", "It's a nice cover."], c: 1,
    x: "« Would you mind…? » : accepter se dit « Not at all » / « Of course not ».", p: "Répondre « Yes » à « Would you mind » signifie REFUSER. C'est contre-intuitif en français." },
  { a: "Should I email the contract or print it out?", o: ["Email is fine.", "He signed it yesterday.", "About twenty pages."], c: 0,
    x: "Question alternative : on choisit une des deux branches.", p: "Aux questions en « or », ni « yes » ni « no » ne peuvent convenir." },
  { a: "How long does the training session usually run?", o: ["Twice a year.", "About three hours.", "In the main auditorium."], c: 1,
    x: "« How long » → une durée.", p: "« How long » / « How often » : « twice a year » répond à la fréquence, pas à la durée." },
  { a: "The printer on the second floor is jammed again.", o: ["I'll call maintenance.", "Second, please.", "A new jam recipe."], c: 0,
    x: "Ce n'est pas une question mais un CONSTAT : la bonne réponse propose une action.", p: "Un tiers des Part 2 sont des affirmations. « jam » = bourrage ET confiture." },
  { a: "Didn't we order more toner last week?", o: ["The order form is online.", "We did, but it hasn't shipped.", "No, I don't drink it."], c: 1,
    x: "Question négative : on confirme sur le fond (« We did ») puis on nuance.", p: "Ne te laisse pas troubler par la négation : réponds comme à une question normale." },
  { a: "What did you think of the candidate we saw this morning?", o: ["At nine thirty.", "She had impressive references.", "I think so too."], c: 1,
    x: "Opinion demandée → jugement donné.", p: "« I think so too » recycle « think » sans rien dire : classique." },
  { a: "Could you tell me where the supply closet is?", o: ["Down the hall, past the copier.", "We're out of envelopes.", "I supplied them yesterday."], c: 0,
    x: "Question indirecte polie = question de lieu.", p: "La forme « Could you tell me where… » déroute : c'est un « Where » déguisé." },
  { a: "Is this seat taken?", o: ["Go ahead.", "I took the train.", "It seats about fifty."], c: 0,
    x: "« Go ahead » = je vous en prie, c'est libre.", p: "Les réponses courtes et idiomatiques sont très souvent correctes." },
  { a: "I thought the deadline was the fifteenth.", o: ["They moved it up a week.", "Yes, I'm dead tired.", "The line is busy."], c: 0,
    x: "Correction apportée à une croyance erronée. « move up » = avancer.", p: "« move up » (avancer) et « push back » (repousser) sont des sens opposés — à connaître par cœur." },
  { a: "How did the client react to the revised proposal?", o: ["By courier.", "He asked for a few changes.", "About the budget."], c: 1,
    x: "« How » + réaction → la réaction elle-même.", p: "« How » n'appelle pas toujours un moyen : ici, une manière de réagir." },
  { a: "Where can I find the maintenance request forms?", o: ["They're on the intranet.", "Once a month.", "The elevator is out of service."], c: 0,
    x: "Lieu (ici numérique, ce qui est fréquent au TOEIC moderne).", p: "« maintenance » attire l'ascenseur en panne : même champ lexical, autre question." },
  { a: "Aren't the new laptops arriving today?", o: ["They're on backorder.", "In the supply room.", "Yes, it's very light."], c: 0,
    x: "Réponse indirecte : « en rupture, donc non ».", p: "« on backorder » = commandé mais non disponible. Vocabulaire logistique à connaître." },
  { a: "Do you want me to book a room for six or for eight?", o: ["Make it eight, just in case.", "At the Riverside Hotel.", "For two nights."], c: 0,
    x: "Choix entre deux options chiffrées.", p: "Les deux distracteurs répondent à « where » et « how long » : encore le mot interrogatif." },
  { a: "This report needs to go out before five.", o: ["I'm almost finished with it.", "It went out the door.", "Five reports, yes."], c: 0,
    x: "Consigne implicite → on rassure sur l'avancement.", p: "Une urgence attend une réponse sur la faisabilité, pas une répétition du chiffre." },
  { a: "Which supplier ended up getting the contract?", o: ["Last Thursday.", "The one from Lyon.", "It's a two-year contract."], c: 1,
    x: "« Which » → on identifie parmi un ensemble.", p: "« The one from… » est la tournure d'identification par excellence." },
  { a: "Haven't you met our regional director before?", o: ["Only over the phone.", "In the northern region.", "She directed the project."], c: 0,
    x: "Réponse nuancée : oui, mais pas en personne.", p: "« Only… » signale presque toujours une bonne réponse au Part 2 : elle restreint au lieu de nier." },
  { a: "Would you rather take the early flight or the connection through Munich?", o: ["I'd rather not fly at all.", "Munich is lovely.", "The flight was delayed."], c: 0,
    x: "Troisième voie : refuser les deux branches est une réponse valide.", p: "Aux questions alternatives, la bonne réponse échappe parfois aux deux options proposées." },
  { a: "The elevator's been out since Monday.", o: ["Have they said when it'll be fixed?", "On the ninth floor.", "I'll take the stairs, thanks."], c: 0,
    x: "Un constat appelle souvent une QUESTION en retour — très fréquent au vrai test.", p: "« I'll take the stairs » semble logique mais ne répond à personne : on ne t'a rien proposé." },
  { a: "How often does the committee review these policies?", o: ["Every two years.", "The revised version.", "In the boardroom."], c: 0,
    x: "« How often » → fréquence.", p: "« review » attire « revised version » : même racine, autre question." }
];

/* ============================================================
   PART 3 — CONVERSATIONS (13 × 3 = 39 questions)
   Le vrai test impose trois types qu'on retrouve ici :
   · des conversations à TROIS locuteurs (c4, c9) ;
   · des questions sur un document joint — « Look at the graphic »
     (c3, c7, c12) : la réponse ne s'entend pas, elle se croise ;
   · des questions d'INTENTION sur une réplique (c5, c11) : ce que le
     locuteur veut dire, pas ce qu'il dit.
   lines : [locuteur, réplique]. M = homme, W = femme, M2/W2 = tiers.
   ============================================================ */
window.BLANC.p3 = [
{ id:'c1', lines:[
  ['W',"Marc, did the caterer confirm for the retirement party on the twenty-second?"],
  ['M',"They did, but they need a final head count by Friday. Right now I have forty-one."],
  ['W',"Add six more — the regional team is driving up after all."],
  ['M',"Forty-seven, then. I'll send the update tonight and ask about the vegetarian option while I'm at it."]],
  qs:[
  { q:"What are the speakers mainly discussing?", o:["A retirement party","A regional sales meeting","A restaurant opening","A driving route"], c:0,
    x:"Le sujet est annoncé dès la première réplique.", p:"« regional team » et « driving » sont des détails : la première question du Part 3 porte presque toujours sur le sujet global." },
  { q:"What does the man say he needs?", o:["A final number of guests","A new caterer","Directions to the venue","An updated budget"], c:0,
    x:"« they need a final head count » — head count = nombre de participants.", p:"« head count » est du vocabulaire de bureau courant ; ne le confonds pas avec un décompte financier." },
  { q:"What will the man most likely do next?", o:["Contact the caterer","Drive to the regional office","Cancel the reservation","Print the invitations"], c:0,
    x:"« I'll send the update tonight » : la dernière réplique annonce l'action suivante.", p:"La 3e question du Part 3 est très souvent « What will X do next » — et la réponse est dans les dix derniers mots." }]},

{ id:'c2', lines:[
  ['M',"I'm calling about invoice 4417 — we were billed twice for the same delivery."],
  ['W',"I'm sorry about that. Let me pull it up… I see it. The system duplicated the entry when the driver rescanned the parcel."],
  ['M',"So will the second charge be reversed?"],
  ['W',"It will, though it takes two billing cycles to appear on your statement. I'll email you a credit note today so you have it in writing."]],
  qs:[
  { q:"Why is the man calling?", o:["To report a billing error","To change a delivery address","To place a new order","To complain about a late parcel"], c:0,
    x:"« we were billed twice » : la raison de l'appel.", p:"Un retard de livraison est évoqué indirectement (le colis rescanné) mais ce n'est pas l'objet de l'appel." },
  { q:"What caused the problem?", o:["A duplicate scan of a parcel","A change of supplier","An incorrect address","A late payment"], c:0,
    x:"« the system duplicated the entry when the driver rescanned ».", p:"La cause est donnée en une subordonnée rapide : c'est là que le Part 3 se joue." },
  { q:"What does the woman offer to send?", o:["A credit note","A replacement parcel","A new invoice","A payment reminder"], c:0,
    x:"« I'll email you a credit note today ».", p:"credit note = avoir. À ne pas confondre avec « invoice » (facture)." }]},

{ id:'c3', graphic:{ title:"Meeting rooms — Tuesday", head:["Room","Capacity","Screen"], rows:[["Alder","6","No"],["Birch","12","Yes"],["Cedar","20","Yes"],["Dogwood","30","No"]] },
  lines:[
  ['W',"How many people are coming to the vendor presentation on Tuesday?"],
  ['M',"Fourteen, maybe fifteen with the interns."],
  ['W',"And they're presenting slides, aren't they? Then Birch won't do."],
  ['M',"No. Book the next one up — we need the screen."]],
  qs:[
  { q:"Look at the graphic. Which room will the speakers most likely reserve?", o:["Alder","Birch","Cedar","Dogwood"], c:2,
    x:"Quinze personnes + un écran : Birch est trop petite, Dogwood n'a pas d'écran. Reste Cedar.", p:"La réponse n'est jamais prononcée : elle se déduit en croisant deux contraintes avec le tableau. C'est exactement ce que le vrai test demande." },
  { q:"What event are the speakers preparing for?", o:["A vendor presentation","A training workshop","A job interview","A board election"], c:0,
    x:"Annoncé dans la première réplique.", p:"" },
  { q:"Who might also attend?", o:["Interns","Board members","Clients from abroad","Maintenance staff"], c:0,
    x:"« maybe fifteen with the interns ».", p:"Le conditionnel « maybe » de l'audio devient « might » dans la question." }]},

{ id:'c4', lines:[
  ['W',"Thanks for coming in early, both of you. The floor plan for the new office is due to the architect Monday."],
  ['M',"My only concern is the open layout. Half my team takes calls all day."],
  ['W2',"We could put the sales pod near the windows and glass in two phone booths by the kitchen."],
  ['M',"That would work. Would the booths eat into the budget?"],
  ['W2',"About four thousand, but we'd save it back on the partitions we'd no longer need."]],
  qs:[
  { q:"What is the main topic of the conversation?", o:["An office floor plan","A phone system upgrade","A kitchen renovation","A hiring plan"], c:0,
    x:"« The floor plan for the new office is due Monday ».", p:"Conversation à trois : repère qui porte le problème (l'homme) et qui propose (la seconde femme)." },
  { q:"What concern does the man raise?", o:["Noise in an open layout","The cost of the move","The Monday deadline","A shortage of desks"], c:0,
    x:"« half my team takes calls all day » : le bruit est implicite, jamais nommé.", p:"Le TOEIC nomme rarement le problème : il le décrit. Traduis toi-même « prend des appels toute la journée » en « bruit »." },
  { q:"According to the second woman, why would the booths be affordable?", o:["Fewer partitions would be needed","The architect offered a discount","The budget was recently increased","The windows are already installed"], c:0,
    x:"« we'd save it back on the partitions we'd no longer need ».", p:"« save it back on » = récupérer la dépense sur autre chose." }]},

{ id:'c5', lines:[
  ['M',"Did you get a chance to look at the draft I left on your desk?"],
  ['W',"I've been in back-to-back meetings since eight."],
  ['M',"Understood. If you can get to it before three, I can still make the mailing."],
  ['W',"Leave it with me — I'll skip lunch."]],
  qs:[
  { q:"What does the woman imply when she says, “I've been in back-to-back meetings since eight”?", o:["She has not read the draft yet","She enjoys her schedule","She wants to reschedule a meeting","She arrived late this morning"], c:0,
    x:"Elle ne répond pas non : elle donne la raison qui vaut non.", p:"Question d'intention : la bonne réponse est ce que la phrase ACCOMPLIT, pas ce qu'elle décrit." },
  { q:"What is the man preparing?", o:["A mailing","A budget review","A staff meeting","A travel itinerary"], c:0,
    x:"« I can still make the mailing ».", p:"« make the mailing » = être à temps pour l'envoi." },
  { q:"What does the woman offer to do?", o:["Work through her lunch break","Delegate the task","Postpone the mailing","Ask for an extension"], c:0,
    x:"« I'll skip lunch ».", p:"" }]},

{ id:'c6', lines:[
  ['W',"Reception — how can I help?"],
  ['M',"Hi, this is Dan Okafor. I'm supposed to start the audit at your Lyon site tomorrow, but my badge request hasn't come through."],
  ['W',"Let me check… I have your visit logged, but security needs a copy of your ID before they issue anything."],
  ['M',"I sent my passport scan a week ago."],
  ['W',"It may have gone to the old address. Send it to me directly and I'll walk it over to the security desk myself."]],
  qs:[
  { q:"Why is the man calling?", o:["His site badge has not been issued","He wants to reschedule an audit","He has lost his passport","He cannot find the Lyon office"], c:0,
    x:"« my badge request hasn't come through ».", p:"« come through » = aboutir." },
  { q:"What does the woman say about the man's document?", o:["It may have been sent to an outdated address","It was rejected by security","It expired last week","It was never required"], c:0,
    x:"« It may have gone to the old address ».", p:"Modal de probabilité « may have » : l'app te fait travailler ça au Scalpel — ici il porte la bonne réponse." },
  { q:"What does the woman offer to do?", o:["Deliver the document in person","Issue the badge herself","Call the auditor's manager","Cancel the visit"], c:0,
    x:"« I'll walk it over to the security desk myself ».", p:"« walk something over » = porter à la main jusqu'à." }]},

{ id:'c7', graphic:{ title:"Workshop registrations", head:["Session","Registered"], rows:[["Spreadsheets","9"],["Public speaking","24"],["Project tools","17"],["Data privacy","31"]] },
  lines:[
  ['M',"We may have to cancel one of the four workshops — anything under ten registrations loses money."],
  ['W',"Only one is below that line, and it's the one HR insisted on."],
  ['M',"Then let's keep it but move it to the small room and charge the difference to their budget."]],
  qs:[
  { q:"Look at the graphic. Which session were the speakers considering cancelling?", o:["Spreadsheets","Public speaking","Project tools","Data privacy"], c:0,
    x:"Seule « Spreadsheets » est sous la barre des dix inscrits.", p:"Le seuil est donné à l'oral (« under ten »), le chiffre au tableau. Aucune des deux sources ne suffit seule." },
  { q:"What does the man suggest doing?", o:["Holding the session in a smaller room","Refunding the participants","Merging two sessions","Postponing until next quarter"], c:0,
    x:"« move it to the small room ».", p:"" },
  { q:"Whose budget will cover the difference?", o:["Human Resources","Marketing","Facilities","Finance"], c:0,
    x:"« the one HR insisted on » puis « charge the difference to their budget ».", p:"Le référent « their » renvoie à HR, mentionné une réplique plus tôt. Le TOEIC adore ces chaînes de pronoms." }]},

{ id:'c8', lines:[
  ['W',"Your résumé says you managed a distribution centre in Rotterdam for six years."],
  ['M',"That's right. I oversaw about eighty staff across three shifts."],
  ['W',"What made you apply for a role here, on the planning side rather than operations?"],
  ['M',"Honestly, the part of the job I was best at was forecasting, and I did it in the margins. I'd rather do it full time."]],
  qs:[
  { q:"Where does the conversation most likely take place?", o:["At a job interview","At a warehouse inspection","At a training session","At a client meeting"], c:0,
    x:"« Your résumé says… », « what made you apply » : contexte d'entretien.", p:"Le lieu n'est jamais nommé : il se déduit du vocabulaire." },
  { q:"What did the man do in his previous position?", o:["He supervised a large team","He designed software","He audited suppliers","He trained new drivers"], c:0,
    x:"« I oversaw about eighty staff ».", p:"« oversee » = superviser. Ne pas confondre avec « overlook » (négliger)." },
  { q:"Why does the man want to change roles?", o:["To focus on forecasting","To earn a higher salary","To relocate closer to family","To work fewer hours"], c:0,
    x:"« I'd rather do it full time » à propos de la prévision.", p:"« in the margins » = en marge, à côté du reste. Belle expression à retenir." }]},

{ id:'c9', lines:[
  ['M',"The translation vendor missed the deadline again — the manual was due to the printer yesterday."],
  ['W',"That's the third time this year."],
  ['M2',"I've drafted a letter putting them on notice. If it slips once more, we move to the agency in Bordeaux."],
  ['W',"Before we do, can we check whether our own briefs are getting to them late? I have a feeling we're part of this."],
  ['M2',"Fair. I'll pull the send dates for the last six jobs."]],
  qs:[
  { q:"What problem are the speakers discussing?", o:["A vendor's repeated delays","A printing error in a manual","A rise in translation costs","A shortage of staff"], c:0,
    x:"« missed the deadline again ».", p:"" },
  { q:"What does the woman suggest?", o:["Reviewing their own turnaround times","Hiring the Bordeaux agency immediately","Cancelling the contract","Reprinting the manual"], c:0,
    x:"« can we check whether our own briefs are getting to them late ».", p:"La nuance compte : elle ne défend pas le prestataire, elle demande une vérification avant de trancher." },
  { q:"What will the second man do?", o:["Look up when the last jobs were sent","Send the warning letter today","Call the Bordeaux agency","Meet the printer"], c:0,
    x:"« I'll pull the send dates for the last six jobs ».", p:"« pull » = sortir, extraire (des données). Usage de bureau très fréquent." }]},

{ id:'c10', lines:[
  ['W',"I'd like to return this desk chair. The hydraulic keeps sinking."],
  ['M',"Do you have the receipt? Without it I can offer store credit at the current price."],
  ['W',"I paid by card, if that helps."],
  ['M',"It does — I can look it up. Give me a moment… Found it, purchased in March. That's within the two-year warranty, so this is a straight replacement, not a credit."]],
  qs:[
  { q:"What is wrong with the chair?", o:["It will not stay raised","A wheel is broken","The fabric is torn","It was the wrong colour"], c:0,
    x:"« the hydraulic keeps sinking » = le vérin s'affaisse.", p:"Le défaut est décrit techniquement ; la réponse le reformule en langage courant." },
  { q:"How is the man able to find the purchase?", o:["Through the card payment record","By the serial number","With a loyalty card","From the warranty booklet"], c:0,
    x:"« I paid by card » → « I can look it up ».", p:"" },
  { q:"What will the woman receive?", o:["A replacement chair","Store credit","A partial refund","A repair appointment"], c:0,
    x:"« a straight replacement, not a credit » : la dernière phrase corrige ce qui précède.", p:"Le Part 3 finit souvent par un renversement. Ne réponds jamais avant la dernière réplique." }]},

{ id:'c11', lines:[
  ['M',"Are you taking the train to the conference or driving down?"],
  ['W',"Have you seen the parking rates at the venue?"],
  ['M',"Say no more. Want to share a taxi from the station?"],
  ['W',"Please. My session is at nine, so I'll be on the seven-fifteen."]],
  qs:[
  { q:"What does the woman mean when she says, “Have you seen the parking rates at the venue?”", o:["She has decided not to drive","She needs directions to the car park","She wants him to pay for parking","She is surprised the venue has parking"], c:0,
    x:"Question rhétorique qui vaut refus : trop cher, donc le train.", p:"Une question qui répond à une question est, au TOEIC, presque toujours une prise de position déguisée." },
  { q:"What do the speakers agree to do?", o:["Share a taxi","Travel by car together","Change hotels","Postpone their sessions"], c:0,
    x:"« Want to share a taxi » → « Please ».", p:"« Please » seul = acceptation enthousiaste." },
  { q:"What time will the woman travel?", o:["At 7:15","At 9:00","At 7:50","At 9:15"], c:0,
    x:"« I'll be on the seven-fifteen » ; neuf heures est l'heure de sa session.", p:"Deux horaires dans une réplique : le TOEIC te fait choisir lequel répond à la question posée." }]},

{ id:'c12', graphic:{ title:"Flight KM-208 — status board", head:["Time","Gate","Status"], rows:[["09:40","B12","On time"],["11:05","B12","Delayed"],["13:20","C4","On time"],["16:45","C7","Cancelled"]] },
  lines:[
  ['W',"Our flight was the eleven-oh-five, wasn't it?"],
  ['M',"It was. The board says we're not going anywhere on time."],
  ['W',"Then let's ask about the one after it — same afternoon, different terminal."],
  ['M',"Worth a try. If they can move us, we'd still make the client dinner."]],
  qs:[
  { q:"Look at the graphic. Which flight are the speakers hoping to be moved to?", o:["09:40","11:05","13:20","16:45"], c:2,
    x:"« the one after it » = le suivant, à 13h20, et il est bien dans un autre terminal (porte C4).", p:"« the one after it » ne donne aucun horaire : c'est le tableau qui le fournit — et le vol de 16h45 est annulé, donc exclu." },
  { q:"What is the problem?", o:["Their flight is delayed","Their flight is cancelled","They are at the wrong gate","They have lost a boarding pass"], c:0,
    x:"Le tableau donne « Delayed » pour 11:05.", p:"Distinguer « delayed » de « cancelled » : les deux figurent au tableau." },
  { q:"What are the speakers trying to avoid missing?", o:["A dinner with a client","A connecting train","A hotel check-in","A morning presentation"], c:0,
    x:"« we'd still make the client dinner ».", p:"« make » = arriver à temps pour." }]},

{ id:'c13', lines:[
  ['M',"The building manager says the water will be shut off Thursday between nine and two."],
  ['W',"That's the day the food safety inspector comes."],
  ['M',"Can we move the inspection?"],
  ['W',"Not easily — they book six weeks out. I'd rather ask the manager to push the work to Friday. Thursday afternoon we're only prepping, so even a late start would hurt less."]],
  qs:[
  { q:"What will happen on Thursday morning?", o:["The water supply will be cut","A delivery will arrive","The kitchen will close permanently","New equipment will be installed"], c:0,
    x:"« the water will be shut off Thursday between nine and two ».", p:"" },
  { q:"Why can the inspection not be moved easily?", o:["Inspectors are booked weeks in advance","It has already been postponed once","The inspector is on holiday","A fine would be charged"], c:0,
    x:"« they book six weeks out ».", p:"« book six weeks out » = être réservé six semaines à l'avance." },
  { q:"What does the woman propose?", o:["Rescheduling the maintenance work","Closing the kitchen all day","Hiring a temporary contractor","Cancelling Friday's deliveries"], c:0,
    x:"« ask the manager to push the work to Friday ».", p:"« push to » = repousser à — opposé de « move up »." }]}
];

/* ============================================================
   PART 4 — EXPOSÉS (10 × 3 = 30 questions)
   Les dix formats que le vrai test recycle : message vocal, annonce
   en magasin, publicité, briefing, visite guidée, bulletin, lancement
   de produit, serveur vocal, allocution, consignes de formation.
   t : le texte prononcé (monologue). w : 'M' ou 'W' pour la voix.
   ============================================================ */
window.BLANC.p4 = [
{ id:'t1', w:'W', kind:"Message vocal",
  t:"Hi Daniel, it's Aurélie from Meridian Fittings. I'm following up on the quote we sent Tuesday for the lobby refit. I know you said the board wouldn't decide before the end of the month, but our supplier has just announced a price increase from the first, so anything signed this week holds the old rate. That's about eleven percent on the brass work alone. I don't want to rush you — I'd just hate for you to lose that on a technicality. If it helps, I can put the figures side by side in a one-page summary. Give me a ring either way.",
  qs:[
  { q:"What is the main purpose of the message?", o:["To warn about an upcoming price increase","To confirm a delivery date","To apologise for a delay","To request a signed contract by today"], c:0,
    x:"Tout le message tourne autour de l'augmentation au 1er du mois.", p:"« To request a signed contract by today » est trop fort : elle dit explicitement « I don't want to rush you »." },
  { q:"What does the speaker offer to provide?", o:["A one-page comparison","A discount on brass","A site visit","A replacement quote"], c:0,
    x:"« put the figures side by side in a one-page summary ».", p:"" },
  { q:"What had the listener said previously?", o:["The board would decide at month's end","He preferred another supplier","The lobby refit was cancelled","He needed a lower price"], c:0,
    x:"« you said the board wouldn't decide before the end of the month ».", p:"Discours rapporté au passé : le TOEIC teste souvent ce qui a été dit AVANT le message." }]},

{ id:'t2', w:'M', kind:"Annonce en magasin",
  t:"Attention shoppers: the store will be closing in fifteen minutes. Please bring your final selections to the registers at the front. A reminder that our garden centre stays open an additional hour on Thursdays and Fridays, and that the loading bay on the east side is available for large items until closing. Customers with home delivery scheduled for tomorrow morning, please check in with the service desk before you leave so we can confirm your window. Thank you for shopping with us.",
  qs:[
  { q:"Where is the announcement being made?", o:["At a home improvement store","At an airport","At a public library","At a train station"], c:0,
    x:"Jardinerie, quai de chargement, livraison d'articles volumineux : magasin de bricolage.", p:"Le lieu se déduit d'un faisceau d'indices, jamais d'un mot unique." },
  { q:"What is mentioned about the garden centre?", o:["It closes later on certain days","It is being renovated","It has moved to the east side","It is open to members only"], c:0,
    x:"« stays open an additional hour on Thursdays and Fridays ».", p:"" },
  { q:"What are some customers asked to do?", o:["Confirm a delivery time at the service desk","Move their cars from the loading bay","Return to the registers tomorrow","Sign up for a membership"], c:0,
    x:"« please check in with the service desk ».", p:"La consigne ne vise qu'un sous-groupe (« customers with home delivery scheduled ») : le TOEIC adore ces restrictions." }]},

{ id:'t3', w:'W', kind:"Publicité radio",
  t:"Tired of chasing invoices? Ledgerline turns your unpaid bills into a single dashboard — one screen, every client, every deadline. Businesses that switched last year got paid, on average, eleven days sooner. And because Ledgerline reads the terms directly from your contracts, the reminders go out in your wording, not ours. Try it free for sixty days; no card required, and you can export everything if you decide it isn't for you. Visit ledgerline dot example to start. Ledgerline — the polite way to get paid.",
  qs:[
  { q:"What type of product is being advertised?", o:["Invoice tracking software","An accounting course","A payment card","A courier service"], c:0,
    x:"« turns your unpaid bills into a single dashboard ».", p:"" },
  { q:"According to the advertisement, what is the main benefit?", o:["Faster payment","Lower banking fees","Fewer staff needed","Better tax reporting"], c:0,
    x:"« got paid, on average, eleven days sooner ».", p:"Un chiffre prononcé dans une publicité est presque toujours porteur de la bonne réponse." },
  { q:"What is offered to new users?", o:["A trial period of two months","A free consultation","A discount for one year","A printed manual"], c:0,
    x:"« free for sixty days » = deux mois : la question reformule l'unité.", p:"Convertir les unités à la volée (soixante jours → deux mois) est une compétence testée." }]},

{ id:'t4', w:'M', kind:"Briefing d'équipe",
  t:"Before we start the shift, two things. First, the new scanners arrive Monday. They're lighter, but the trigger is in a different place, so I'd rather you spend ten minutes with one on Monday morning than fight with it all week. Second — and this matters more — we've had two near misses at the crossing by bay four. Nobody was hurt, but in both cases a forklift came through while someone was walking the painted lane. Until the mirrors go up, forklifts stop at the line. Not slow down. Stop. I'd rather we lose a few minutes than have this conversation for real.",
  qs:[
  { q:"Where does the talk most likely take place?", o:["At a warehouse","At a car dealership","At a hospital","At a construction college"], c:0,
    x:"Chariots élévateurs, quais, scanners : entrepôt.", p:"" },
  { q:"What does the speaker say about the new equipment?", o:["Staff should practise with it before using it","It will be delayed until next month","It is heavier than the old model","It requires a password"], c:0,
    x:"« spend ten minutes with one on Monday morning ».", p:"« lighter » : l'option « heavier » inverse l'information entendue — piège très fréquent." },
  { q:"Why does the speaker say, “Not slow down. Stop.”?", o:["To insist that the rule allows no exception","To explain how the scanners work","To apologise for a delay","To announce a change of shift"], c:0,
    x:"Question d'intention : la répétition sert à couper court à toute interprétation souple.", p:"Quand un locuteur se reprend en deux mots, c'est de l'insistance — jamais une information nouvelle." }]},

{ id:'t5', w:'W', kind:"Visite guidée",
  t:"Welcome to the Hartwell Mill. What you're standing in was the carding room, and the floor you can feel vibrating is original — the looms two storeys below still run twice a day for demonstrations. We'll go down at eleven and again at two. Photography is fine throughout, but please keep bags on your front when we're on the gantry; the walkway narrows to less than a metre. Our café is in the old dye house and, unlike the mill itself, it's fully accessible by lift. The gift shop closes thirty minutes before the site does.",
  qs:[
  { q:"What can visitors see at eleven o'clock?", o:["A demonstration of the looms","A film about the mill","A guided walk outdoors","A craft workshop"], c:0,
    x:"« the looms still run twice a day for demonstrations. We'll go down at eleven ».", p:"L'horaire et l'activité sont dans deux phrases différentes : il faut les relier." },
  { q:"What are visitors asked to do on the gantry?", o:["Carry their bags in front of them","Refrain from taking photographs","Stay with the group","Speak quietly"], c:0,
    x:"« keep bags on your front when we're on the gantry ».", p:"La photographie est autorisée : l'option la plus plausible est celle qu'on vient d'écarter." },
  { q:"What is implied about the mill building?", o:["It is not fully wheelchair accessible","It is closed in winter","It was recently rebuilt","It is privately owned"], c:0,
    x:"« unlike the mill itself, [the café] is fully accessible by lift » : l'implication porte sur le moulin.", p:"« unlike X » dit quelque chose de X sans le formuler. C'est une question d'implication, la plus rentable du Part 4." }]},

{ id:'t6', w:'M', kind:"Bulletin de circulation",
  t:"And now your drive-time update. The northbound ring road is down to one lane between junctions six and seven after an earlier breakdown; recovery is on scene and we're expecting both lanes back within the hour. Delays of around twenty-five minutes if you're heading that way. Rail services are running normally apart from the airport shuttle, which is on a reduced timetable because of overnight engineering — that's every twenty minutes rather than every ten, until midday. If you're flying this morning, leave yourself the extra. More at half past.",
  qs:[
  { q:"What has caused the delay on the ring road?", o:["A vehicle breakdown","Roadworks","Bad weather","An accident at a junction"], c:0,
    x:"« after an earlier breakdown ».", p:"« breakdown » (panne) ≠ « accident ». Le TOEIC distingue toujours les deux." },
  { q:"What is mentioned about the airport shuttle?", o:["It is running less frequently","It has been cancelled","It is free until midday","It departs from a new platform"], c:0,
    x:"« every twenty minutes rather than every ten ».", p:"" },
  { q:"What does the speaker advise listeners to do?", o:["Allow extra travel time","Take an alternative route","Avoid the airport entirely","Check online before leaving"], c:0,
    x:"« leave yourself the extra ».", p:"« leave yourself the extra » est elliptique : sous-entendu « extra time »." }]},

{ id:'t7', w:'W', kind:"Lancement de produit",
  graphic:{ title:"Warranty coverage", head:["Plan","Years","Parts","Labour"], rows:[["Basic","1","Yes","No"],["Standard","2","Yes","Yes"],["Extended","5","Yes","Yes"]] },
  t:"…and that brings me to the part everyone asks about before the price: the warranty. We've simplified it to three plans. The one I'd point most of you toward is the middle option — it's the shortest plan that still covers labour, which is where the real cost sits when a unit fails in year two. The top plan makes sense if you're running the machine more than one shift a day. Details are in your folder; the table is on page four.",
  qs:[
  { q:"Look at the graphic. Which plan does the speaker recommend for most listeners?", o:["Basic","Standard","Extended","None of them"], c:1,
    x:"« the shortest plan that still covers labour » : Basic ne couvre pas la main-d'œuvre, donc c'est Standard.", p:"Le nom du plan n'est jamais prononcé. Deux critères croisés avec le tableau : la définition même de la question « graphic »." },
  { q:"When does the speaker say the extended plan is worth it?", o:["When the machine runs more than one shift daily","When the buyer has no technician","When the warranty is bought online","When several units are ordered"], c:0,
    x:"« if you're running the machine more than one shift a day ».", p:"" },
  { q:"Where can listeners find more information?", o:["In a folder they were given","On the company website","By calling a service line","In an email sent yesterday"], c:0,
    x:"« Details are in your folder ».", p:"" }]},

{ id:'t8', w:'M', kind:"Serveur vocal",
  t:"Thank you for calling Brentmoor Property Management. Please note our office hours have changed: we're now open Monday to Thursday, eight to six, and Friday until four. For a repair that poses an immediate risk — flooding, no heating in winter, a door that won't lock — press one at any time, including out of hours, and you'll reach the duty officer. For rent statements, press two. For all other enquiries, press three and leave a message; we return calls within one business day. Please don't email repairs to the general address, as that inbox isn't monitored in the evenings.",
  qs:[
  { q:"What has recently changed?", o:["The office opening hours","The office address","The rent payment method","The emergency number"], c:0,
    x:"« Please note our office hours have changed ».", p:"" },
  { q:"Which situation justifies pressing one?", o:["A lock that no longer works","A question about a rent statement","A request for a viewing","A complaint about a neighbour"], c:0,
    x:"« a door that won't lock » figure dans la liste des urgences.", p:"Trois exemples sont donnés à l'oral ; la question en reformule un seul." },
  { q:"What are callers told not to do?", o:["Report repairs to the general email address","Call after six in the evening","Leave more than one message","Contact the duty officer directly"], c:0,
    x:"« Please don't email repairs to the general address ».", p:"La consigne négative arrive en dernier : ne décroche pas avant la fin de l'exposé." }]},

{ id:'t9', w:'W', kind:"Allocution",
  t:"Before we eat, I want to say a word about Ravi. Most of you know him as the person who answers the phone at seven in the morning. What you may not know is that the training programme half of this room went through — the one everyone assumes has always existed — he wrote it, on his own time, in his first eighteen months here. He has never once mentioned it in a performance review. Ravi, we've taken the liberty of naming it after you, which I'm aware you'll hate. Please, everyone, join me.",
  qs:[
  { q:"What is the purpose of the talk?", o:["To honour a colleague","To open a training session","To announce a retirement","To introduce a new manager"], c:0,
    x:"Discours d'hommage.", p:"« retirement » est plausible dans ce type de discours : rien ici ne l'indique. Ne comble pas les blancs." },
  { q:"What did Ravi create?", o:["A training programme","A phone system","A performance review process","A company newsletter"], c:0,
    x:"« he wrote it, on his own time ».", p:"" },
  { q:"What does the speaker imply about Ravi?", o:["He is modest about his contribution","He is leaving the company","He wrote the programme recently","He was asked to write it"], c:0,
    x:"« He has never once mentioned it » + « which I'm aware you'll hate ».", p:"Deux indices concordants : l'implication se construit sur l'accumulation, pas sur une phrase." }]},

{ id:'t10', w:'M', kind:"Consignes de formation",
  t:"Right — badges. Three rules and we're done. One: the badge stays visible above the waist. If it's in your pocket, security will treat you as a visitor, and that's an escort back to reception, not a warning. Two: the badge opens the doors you need and only those. If a door you're supposed to use turns red, that's a permissions issue, not a broken badge, so come to us rather than borrowing a colleague's. Three, and this is the one people get wrong: never hold a door for someone without a badge, however senior they look. It feels rude. Do it anyway.",
  qs:[
  { q:"Who is the talk most likely intended for?", o:["New employees","Visiting clients","Security guards","Maintenance contractors"], c:0,
    x:"Consignes de base données à l'arrivée.", p:"" },
  { q:"What should listeners do if a door does not open?", o:["Report it to the speaker's team","Try a colleague's badge","Wait for security to arrive","Use the main entrance instead"], c:0,
    x:"« come to us rather than borrowing a colleague's ».", p:"L'option « try a colleague's badge » est explicitement écartée : le distracteur reprend les mots de l'interdiction." },
  { q:"Why does the speaker say, “It feels rude. Do it anyway.”?", o:["To stress that the rule outweighs politeness","To apologise for a strict policy","To describe a common complaint","To introduce an exception"], c:0,
    x:"Intention : il anticipe la gêne sociale et tranche.", p:"« Do it anyway » = fais-le quand même : c'est l'ordre qui compte, pas la concession qui précède." }]}
];
