/* ============================================================
   990 — Contenu AVANCÉ (C1-C2) pour viser la note parfaite (990)
   Ajoute des leçons de grammaire pointues, des items d'examen durs
   et des phrases de traduction de haut niveau.
   Doit se charger APRÈS data.js, exam-data.js, translations.js.
   ============================================================ */

/* ---------- Leçons de grammaire avancées ---------- */
window.LESSONS.push(
  {
    id: "verbpatterns",
    title: "Verbes à double sens",
    tag: "C2",
    note: "Certains verbes changent de SENS selon qu'ils sont suivis du gérondif (-ing) ou de l'infinitif (to). « stop DOING » = arrêter de faire ; « stop TO DO » = s'arrêter pour faire. « remember DOING » = se souvenir d'avoir fait ; « remember TO DO » = penser à faire. Idem forget, regret, try, mean, go on. Enfin, « need + -ing » a un sens passif (a besoin d'être fait).",
    q: [
      ["On the way home, we stopped ______ some petrol.", ["getting", "to get", "get", "got"], 1, "« stop TO do » = s'arrêter afin de faire : to get."],
      ["I distinctly remember ______ the door before we left.", ["to lock", "locking", "lock", "locked"], 1, "« remember DOING » = se souvenir d'avoir fait : locking."],
      ["Please remember ______ the report before Friday.", ["submitting", "to submit", "submit", "submitted"], 1, "« remember TO do » = penser à faire : to submit."],
      ["We regret ______ you that your application was unsuccessful.", ["informing", "to inform", "inform", "informed"], 1, "« regret TO inform » = avoir le regret de (annonce formelle) : to inform."],
      ["She deeply regrets ______ so rudely to her manager.", ["to speak", "speaking", "speak", "spoke"], 1, "« regret DOING » = regretter d'avoir fait : speaking."],
      ["The engine kept overheating, so we tried ______ more coolant.", ["to add", "adding", "add", "added"], 1, "« try DOING » = tester une solution (≠ try to do = faire l'effort) : adding."],
      ["He went on ______ long after everyone had left.", ["to talk", "talking", "talk", "talked"], 1, "« go on DOING » = continuer à faire : talking."],
      ["The report is full of errors; it really needs ______.", ["to rewrite", "rewriting", "rewrite", "rewrote"], 1, "« need + -ing » a un sens passif (= needs to be rewritten) : rewriting."]
    ]
  },
  {
    id: "reduced",
    title: "Relatives réduites & participiales",
    tag: "C2",
    note: "On allège une relative en supprimant le pronom + « be » : « the man WHO IS standing » → « the man standing » (participe présent, sens actif) ; « the report THAT WAS written » → « the report written » (participe passé, sens passif). En tête de phrase, « Having + participe » marque l'antériorité : « Having finished, he left. »",
    q: [
      ["The woman ______ over there is our new director.", ["stands", "standing", "stood", "to stand"], 1, "Relative réduite active (= who is standing) : standing."],
      ["All applications ______ after the deadline will be rejected.", ["receiving", "received", "receive", "to receive"], 1, "Sens passif (= that are received) → participe passé : received."],
      ["______ the instructions, she assembled the shelf in minutes.", ["Reading", "Having read", "Read", "To read"], 1, "Antériorité (action achevée avant) : Having read."],
      ["The parcels ______ in the depot belong to the new client.", ["storing", "stored", "store", "to store"], 1, "Sens passif (= that are stored) : stored."],
      ["Anyone ______ to volunteer should contact HR.", ["wished", "wishing", "wishes", "to wish"], 1, "Relative réduite active (= who wishes) : wishing."],
      ["______ by the storm, the old roof finally collapsed.", ["Damaging", "Damaged", "Damage", "To damage"], 1, "Participe passé, sens passif (= having been damaged) : Damaged."],
      ["The candidate ______ for the role has ten years of experience.", ["choosing", "chosen", "choose", "chose"], 1, "Sens passif (= who was chosen) : chosen."],
      ["There are several factors ______ the final decision.", ["influenced", "influencing", "influence", "to influence"], 1, "Sens actif (= that influence) : influencing."]
    ]
  },
  {
    id: "depprep",
    title: "Prépositions dépendantes",
    tag: "C2",
    note: "Beaucoup de verbes et d'adjectifs imposent une préposition précise, souvent différente du français — à mémoriser car très testée en Part 5 : depend ON, good AT, succeed IN, accuse OF, superior TO, comply WITH, result IN, committed TO, object TO, capable OF.",
    q: [
      ["The success of the launch depends largely ______ timing.", ["in", "on", "of", "at"], 1, "depend ON."],
      ["She's remarkably good ______ handling difficult clients.", ["in", "at", "on", "with"], 1, "good AT (+ -ing)."],
      ["After months of effort, they finally succeeded ______ cutting costs.", ["to", "in", "at", "on"], 1, "succeed IN (+ -ing)."],
      ["The former director was accused ______ falsifying the accounts.", ["for", "of", "with", "by"], 1, "accuse OF."],
      ["This model is clearly superior ______ the previous one.", ["than", "to", "from", "over"], 1, "superior TO (jamais « than »)."],
      ["All suppliers must comply ______ the new safety standards.", ["to", "with", "on", "for"], 1, "comply WITH."],
      ["The negotiations resulted ______ a long-term partnership.", ["from", "in", "to", "on"], 1, "result IN (aboutir à) ; « result from » = découler de."],
      ["The company is deeply committed ______ reducing its emissions.", ["to", "with", "on", "for"], 0, "committed TO (+ -ing)."]
    ]
  },
  {
    id: "quantifiers",
    title: "Quantifieurs & déterminants",
    tag: "C1-C2",
    note: "Distinctions fines : « little / few » (peu, sens négatif) vs « a little / a few » (quelques, positif) ; « each / every » + verbe singulier ; « either / neither » pour DEUX éléments (+ singulier) ; « fewer » (dénombrable) vs « less » (indénombrable) ; « the whole + nom » = tout le.",
    q: [
      ["______ progress has been made, which is very disappointing.", ["A little", "Little", "Few", "A few"], 1, "« Little » (indénombrable, sens négatif = peu)."],
      ["Don't rush — we still have ______ time before boarding.", ["little", "a little", "few", "many"], 1, "« a little » = un peu (positif)."],
      ["______ employee in the firm received a bonus this year.", ["Every", "All", "Both", "Most"], 0, "« Every » + nom + verbe singulier."],
      ["There were convincing arguments on ______ side of the debate.", ["either", "neither", "both", "any"], 0, "« either side » = chacun des deux côtés."],
      ["______ of the two proposals is truly convincing.", ["Either", "Neither", "None", "Both"], 1, "« Neither » (aucun des deux) + verbe singulier."],
      ["There are ______ mistakes in this draft than in the last one.", ["less", "fewer", "least", "little"], 1, "« fewer » avec un dénombrable pluriel (mistakes)."],
      ["We spent the ______ afternoon going over the contract.", ["all", "whole", "every", "each"], 1, "« the whole afternoon » = tout l'après-midi."],
      ["______ people showed up, so the event felt rather empty.", ["A few", "Few", "Little", "A little"], 1, "« Few » (dénombrable, sens négatif = peu de)."]
    ]
  },
  {
    id: "confusables",
    title: "Pièges : paires confuses",
    tag: "C2",
    note: "Des paires qui piègent même les excellents candidats : affect (verbe) / effect (nom) ; fewer (dénombrable) / less (indénombrable) ; lie (s'allonger, intransitif) / lay (poser, transitif) ; rise (intransitif) / raise (transitif) ; advice (nom) / advise (verbe) ; principle (principe) / principal (principal) ; than / then ; its / it's.",
    q: [
      ["The new policy will ______ every employee in the department.", ["affect", "effect", "effects", "affects"], 0, "« affect » = verbe (influencer) ; « effect » = nom : affect."],
      ["We received far ______ complaints after the update.", ["less", "fewer", "lesser", "few"], 1, "« complaints » est dénombrable → fewer (pas « less »)."],
      ["Please ______ the documents on the front desk.", ["lie", "lay", "lied", "lying"], 1, "« lay » (poser qqch, transitif) ; « lie » = s'allonger (intransitif) : lay."],
      ["Interest rates are expected to ______ again next quarter.", ["rise", "raise", "raises", "arise"], 0, "« rise » (monter, intransitif) ; « raise » = augmenter qqch : rise."],
      ["The consultant gave us some genuinely useful ______.", ["advice", "advise", "advices", "advising"], 0, "« advice » = nom (indénombrable) ; « advise » = verbe : advice."],
      ["Integrity is the guiding ______ of the firm.", ["principal", "principle", "principals", "principled"], 1, "« principle » = principe ; « principal » = principal/directeur : principle."],
      ["Their offer is far more generous ______ ours.", ["then", "than", "that", "as"], 1, "Comparaison → « than » (pas « then » = ensuite)."],
      ["The company increased ______ market share last year.", ["it's", "its", "its'", "it"], 1, "Possessif → « its » ; « it's » = it is : its."]
    ]
  }
);

/* ---------- Items d'examen très difficiles (Part 5, diff 3) ---------- */
window.EXAM_GRAMMAR.push(
  ["The findings, ______ significant, were not enough to change the policy.", ["although", "however", "despite", "whereas"], 1, "« however + adjectif » = quelque... que : however significant.", 3],
  ["Rarely ______ such a bold strategy pay off so quickly.", ["do", "does", "has", "is"], 1, "Inversion après « Rarely » ; sujet singulier « strategy » → does.", 3],
  ["______ for the timely intervention, the whole project would have collapsed.", ["If not", "Were it not", "Had it not", "But"], 1, "Conditionnel inversé figé : « Were it not for... ».", 3],
  ["The two firms differ markedly ______ their approach to risk.", ["from", "in", "on", "with"], 1, "« differ IN + domaine » (differ from = être différent de).", 3],
  ["Not until every figure had been checked ______ the report released.", ["was", "were", "had", "did"], 0, "« Not until... » → inversion ; sujet singulier → was the report released.", 3],
  ["Scarcely had the merger been announced ______ the shares began to climb.", ["than", "when", "then", "that"], 1, "Structure figée : « Scarcely had... WHEN... ».", 3],
  ["The board is adamant that no exceptions ______ made.", ["are", "be", "were", "being"], 1, "Subjonctif après « adamant that » → base : be.", 3],
  ["So compelling ______ her argument that no one dared object.", ["was", "were", "did", "has"], 0, "Emphase « So + adj » en tête → inversion : was her argument.", 3],
  ["The bonus is contingent ______ meeting the quarterly targets.", ["on", "to", "with", "of"], 0, "« contingent ON » = subordonné à.", 3],
  ["He would sooner resign ______ compromise his principles.", ["than", "that", "then", "as"], 0, "« would sooner X than Y » = préférer.", 3],
  ["The new measures apply to all staff, ______ of seniority.", ["regardless", "despite", "in spite", "whatever"], 0, "« regardless OF » = indépendamment de.", 3],
  ["Little ______ they know that the deal had already fallen through.", ["do", "did", "have", "were"], 1, "Inversion emphatique après « Little » (passé) → did they know.", 3]
);

/* ---------- Traductions de haut niveau (Nuances C2) ---------- */
window.TRANSLATIONS.push(
  { fr:"Il n'est pas exclu qu'elle ait déjà signé.", en:"She may well have already signed.", alt:["It's not out of the question that she has already signed."], cat:"Nuances C2", point:"Probabilité soutenue + present perfect", note:"« may well have + participe » exprime une forte probabilité sur le passé. Tournure alternative : « It's not out of the question that... ».", level:"C2" },
  { fr:"Aussi surprenant que cela puisse paraître, il a refusé.", en:"Surprising as it may seem, he refused.", alt:["However surprising it may seem, he refused."], cat:"Nuances C2", point:"Concession inversée « as it may seem »", note:"« Adjectif + as + sujet + may + verbe » = aussi... que. Registre très soutenu, marqueur de C2.", level:"C2" },
  { fr:"Ce n'est pas tant le prix que le principe qui me dérange.", en:"It's not so much the price as the principle that bothers me.", alt:["It isn't so much the cost as the principle that troubles me."], cat:"Nuances C2", point:"Structure « not so much X as Y »", note:"« not so much X as Y » = moins X que Y. Nuance idiomatique difficile à calquer.", level:"C2" },
  { fr:"Quitte à tout recommencer, autant bien faire les choses.", en:"If we're going to start over, we might as well do it properly.", alt:["Since we're starting again, we may as well do it right."], cat:"Nuances C2", point:"« might as well »", note:"« might/may as well » = autant (faire). Exprime la résignation raisonnée. « properly » = comme il faut.", level:"C2" },
  { fr:"Il a beau essayer, il n'y parvient pas.", en:"However hard he tries, he can't manage it.", alt:["No matter how hard he tries, he can't do it.","Try as he might, he can't do it."], cat:"Nuances C2", point:"« avoir beau » → however hard / try as he might", note:"« avoir beau + inf. » n'a pas d'équivalent mot à mot : « However hard he tries » ou la tournure littéraire « Try as he might ».", level:"C2" },
  { fr:"Je ne saurais trop insister sur ce point.", en:"I cannot stress this point enough.", alt:["I couldn't emphasize this point more."], cat:"Nuances C2", point:"« cannot ... enough » + conditionnel de politesse", note:"« I cannot stress ... enough » = je ne saurais trop insister. « saurais » (conditionnel) rend une atténuation soutenue.", level:"C2" },
  { fr:"Force est de constater que le plan a échoué.", en:"There is no denying that the plan has failed.", alt:["One cannot but admit that the plan has failed."], cat:"Nuances C2", point:"Tournure impersonnelle soutenue", note:"« Force est de constater » → « There is no denying that... » ou « One cannot but admit that... » (très formel).", level:"C2" },
  { fr:"Il se peut fort bien que nous ayons sous-estimé les risques.", en:"It may well be that we have underestimated the risks.", alt:["We may well have underestimated the risks."], cat:"Nuances C2", point:"« may well be that » + present perfect", note:"« It may well be that + present perfect » exprime une hypothèse forte. « to underestimate » = sous-estimer.", level:"C2" },
  { fr:"Loin de me décourager, cet échec m'a galvanisé.", en:"Far from discouraging me, that failure spurred me on.", alt:["Far from putting me off, that failure motivated me."], cat:"Nuances C2", point:"« Far from + -ing » en tête", note:"« Far from + -ing » = loin de. « to spur somebody on » = galvaniser/aiguillonner qqn.", level:"C2" },
  { fr:"Mieux vaut prévenir que guérir.", en:"Prevention is better than cure.", alt:["Better safe than sorry."], cat:"Nuances C2", point:"Proverbe (non littéral)", note:"Proverbe figé : « Prevention is better than cure » (ou « Better safe than sorry »). Ne pas traduire mot à mot.", level:"C1" },
  { fr:"Ce dont il retourne, c'est d'une simple erreur de calcul.", en:"What it comes down to is a simple miscalculation.", alt:["It all boils down to a simple miscalculation."], cat:"Nuances C2", point:"« ce dont il retourne » → what it comes down to", note:"Pseudo-clivée idiomatique : « What it comes down to is... » / « It boils down to... » = tout se ramène à.", level:"C2" },
  { fr:"À supposer même que ce soit vrai, cela ne change rien.", en:"Even assuming that's true, it changes nothing.", alt:["Even granting that it's true, it makes no difference."], cat:"Nuances C2", point:"Hypothèse concessive « even assuming »", note:"« À supposer que » → « (Even) assuming (that)... » / « granting that... ». Concession hypothétique soutenue.", level:"C2" }
);
