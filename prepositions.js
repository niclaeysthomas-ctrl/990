/* ============================================================
   990 — PRÉPOSITIONS « 0 fautes » : in/on/at (temps & lieu),
   verbes+préposition, phrasal verbs. 2 leçons (always:true) +
   PREP_DRILL, la banque du drill au réflexe (N options par item).
   Se charge AVANT app.js.
   ============================================================ */
window.LESSONS.push(
  {
    id: "prepwhen", title: "Prépositions de temps : in / on / at", tag: "0 fautes", always: true,
    note: "Règle des trois niveaux (du plus large au plus précis) : <b>IN</b> pour les grandes tranches — mois, années, saisons, moments de la journée (in May, in 2020, in winter, in the morning). <b>ON</b> pour un jour ou une date précise (on Monday, on May 5th, on my birthday). <b>AT</b> pour un point d'horloge et quelques expressions figées (at 6 p.m., at noon, <b>at night</b>, at the weekend). ⚠️ « in the morning/afternoon/evening » MAIS « <b>at</b> night ».",
    q: [
      ["The meeting starts ______ 9 a.m.", ["in", "on", "at"], 2, "Heure précise → at."],
      ["I'll see you ______ Monday.", ["in", "on", "at"], 1, "Un jour → on."],
      ["She was born ______ 1999.", ["in", "on", "at"], 0, "Une année → in."],
      ["It gets very cold ______ winter.", ["in", "on", "at"], 0, "Une saison → in."],
      ["The city is quiet ______ night.", ["in", "on", "at"], 2, "Exception figée : at night."],
      ["His birthday is ______ July 3rd.", ["in", "on", "at"], 1, "Une date → on."],
      ["I always feel tired ______ the afternoon.", ["in", "on", "at"], 0, "Moment de la journée → in the afternoon."],
      ["We usually travel ______ August.", ["in", "on", "at"], 0, "Un mois → in."]
    ]
  },
  {
    id: "prepwhere", title: "Prépositions de lieu : in / on / at", tag: "0 fautes", always: true,
    note: "<b>IN</b> = à l'intérieur d'un volume ou d'une zone (in the box, in London, in the car, in bed). <b>ON</b> = sur une surface ou une ligne (on the table, on the wall, on the second floor, on the bus). <b>AT</b> = à un point précis / une activité (at the bus stop, at the door, at work, at school, at home). ⚠️ pièges : <b>on</b> an island, <b>in</b> the newspaper, <b>on</b> the bus mais <b>in</b> the car.",
    q: [
      ["Your keys are ______ the kitchen table.", ["in", "on", "at"], 1, "Sur une surface → on."],
      ["She has lived ______ Madrid for years.", ["in", "on", "at"], 0, "Une ville → in."],
      ["I'll wait for you ______ the bus stop.", ["in", "on", "at"], 2, "Un point précis → at."],
      ["There's a poster ______ the wall.", ["in", "on", "at"], 1, "Sur une surface verticale → on."],
      ["He's not home; he's ______ work.", ["in", "on", "at"], 2, "Activité/lieu → at work."],
      ["The milk is ______ the fridge.", ["in", "on", "at"], 0, "À l'intérieur → in."],
      ["Our office is ______ the third floor.", ["in", "on", "at"], 1, "Un étage → on the … floor."],
      ["They spent a week ______ a small island.", ["in", "on", "at"], 1, "Piège : on an island."]
    ]
  }
);

/* ---------- PREP_DRILL : [phrase(avec ___), [options], indexBon, expl, catégorie] ---------- */
window.PREP_DRILL = [
  // ===== TEMPS =====
  ["The train leaves ______ 6 o'clock.", ["in","on","at"], 2, "Heure → at.", "temps"],
  ["Let's meet ______ Tuesday.", ["in","on","at"], 1, "Un jour → on.", "temps"],
  ["The company was founded ______ 2011.", ["in","on","at"], 0, "Année → in.", "temps"],
  ["We go skiing ______ winter.", ["in","on","at"], 0, "Saison → in.", "temps"],
  ["I don't sleep well ______ night.", ["in","on","at"], 2, "Figé : at night.", "temps"],
  ["The exam is ______ June 12th.", ["in","on","at"], 1, "Date → on.", "temps"],
  ["She called me ______ the morning.", ["in","on","at"], 0, "Moment de la journée → in.", "temps"],
  ["The store closes ______ noon on Sundays.", ["in","on","at"], 2, "noon → at.", "temps"],
  ["My flight is ______ March.", ["in","on","at"], 0, "Mois → in.", "temps"],
  ["We'll finish the report ______ Friday afternoon.", ["in","on","at"], 1, "Jour précis → on Friday afternoon.", "temps"],
  ["He's very busy ______ the moment.", ["in","on","at"], 2, "Figé : at the moment.", "temps"],
  ["The concert is ______ New Year's Eve.", ["in","on","at"], 1, "Jour précis → on.", "temps"],
  // ===== LIEU =====
  ["The documents are ______ my desk.", ["in","on","at"], 1, "Surface → on.", "lieu"],
  ["He grew up ______ a small village.", ["in","on","at"], 0, "Zone → in.", "lieu"],
  ["Someone is ______ the door.", ["in","on","at"], 2, "Point précis → at the door.", "lieu"],
  ["Write your name ______ the whiteboard.", ["in","on","at"], 1, "Surface → on.", "lieu"],
  ["The kids are still ______ school.", ["in","on","at"], 2, "Activité → at school.", "lieu"],
  ["I read about it ______ the newspaper.", ["in","on","at"], 0, "Piège : in the newspaper.", "lieu"],
  ["All the passengers are already ______ the bus.", ["in","on","at"], 1, "Bus/train → on the bus.", "lieu"],
  ["She's waiting ______ the car outside.", ["in","on","at"], 0, "Voiture → in the car.", "lieu"],
  ["The gym is ______ the ground floor.", ["in","on","at"], 1, "Étage → on the … floor.", "lieu"],
  ["Turn left; it's ______ your right.", ["in","on","at"], 1, "Côté → on the right.", "lieu"],
  ["He's not up yet; he's still ______ bed.", ["in","on","at"], 0, "Figé : in bed.", "lieu"],
  ["We stayed ______ a nice hotel.", ["in","on","at"], 2, "Hôtel (lieu ponctuel) → at a hotel.", "lieu"],
  // ===== VERBES / ADJECTIFS + PRÉPOSITION =====
  ["She's really good ______ negotiating.", ["at","in","on"], 0, "good AT.", "verbes"],
  ["I'm very interested ______ the position.", ["in","for","at"], 0, "interested IN.", "verbes"],
  ["It all depends ______ the budget.", ["on","of","from"], 0, "depend ON.", "verbes"],
  ["He's married ______ a colleague of mine.", ["to","with","of"], 0, "married TO.", "verbes"],
  ["Congratulations ______ your new job!", ["on","for","to"], 0, "congratulations ON.", "verbes"],
  ["She apologized ______ arriving late.", ["for","of","about"], 0, "apologize FOR.", "verbes"],
  ["We're all looking forward ______ the trip.", ["to","for","at"], 0, "look forward TO.", "verbes"],
  ["He's afraid ______ making mistakes.", ["of","from","to"], 0, "afraid OF.", "verbes"],
  ["This laptop belongs ______ the company.", ["to","at","of"], 0, "belong TO.", "verbes"],
  ["You're responsible ______ the whole team.", ["for","of","to"], 0, "responsible FOR.", "verbes"],
  ["We rely ______ our suppliers.", ["on","of","in"], 0, "rely ON.", "verbes"],
  ["The report consists ______ four sections.", ["of","in","on"], 0, "consist OF.", "verbes"],
  ["Thank you so much ______ your help.", ["for","of","about"], 0, "thank FOR.", "verbes"],
  ["I'm not used ______ working nights.", ["to","of","with"], 0, "be used TO.", "verbes"],
  ["This model is quite similar ______ the last one.", ["to","with","than"], 0, "similar TO.", "verbes"],
  ["He's capable ______ much more.", ["of","to","for"], 0, "capable OF.", "verbes"],
  // ===== PHRASAL VERBS (la particule) =====
  ["Please turn ______ the lights when you leave.", ["off","on","up"], 0, "turn off = éteindre.", "phrasal"],
  ["I can't figure ______ this problem.", ["out","off","in"], 0, "figure out = comprendre/résoudre.", "phrasal"],
  ["They had to call ______ the meeting.", ["off","out","up"], 0, "call off = annuler.", "phrasal"],
  ["She looks ______ her younger brother.", ["after","for","up"], 0, "look after = s'occuper de.", "phrasal"],
  ["He finally gave ______ smoking.", ["up","off","in"], 0, "give up = arrêter.", "phrasal"],
  ["Let's carry ______ with the plan.", ["on","out","up"], 0, "carry on = continuer.", "phrasal"],
  ["The plane took ______ right on time.", ["off","up","out"], 0, "take off = décoller.", "phrasal"],
  ["I ran ______ an old friend downtown.", ["into","out","over"], 0, "run into = croiser par hasard.", "phrasal"],
  ["The factory laid ______ 200 workers.", ["off","out","up"], 0, "lay off = licencier.", "phrasal"],
  ["We had to put ______ the launch.", ["off","up","out"], 0, "put off = reporter.", "phrasal"],
  ["The police are trying to find ______ the truth.", ["out","off","up"], 0, "find out = découvrir.", "phrasal"],
  ["My car broke ______ on the motorway.", ["down","off","up"], 0, "break down = tomber en panne.", "phrasal"]
];
