/* ============================================================
   990 — Grammaire du FUTUR & des prédictions (B2-C1)
   Pousse 2 leçons + items d'examen + traductions.
   Charger APRÈS data.js, exam-data.js, translations.js.
   ============================================================ */

window.LESSONS.push(
  {
    id: "futureforms", title: "Parler du futur", tag: "B2-C1 · Le futur",
    note: "Plusieurs façons d'exprimer l'avenir : « will » (prédiction, décision spontanée, promesse), « be going to » (intention ou prédiction fondée sur des indices), présent continu (arrangement planifié), présent simple (horaire fixe), « be about to » (sur le point de), « be on the verge/brink of » (au bord de). Futur antérieur « will have + participe » (aura fait) ; futur continu « will be + -ing » (sera en train de).",
    q: [
      ["By 2040, AI ______ many of today's jobs.", ["replaces", "will have replaced", "is replacing", "replaced"], 1, "Achèvement à une échéance future → future perfect : will have replaced."],
      ["Look at those clouds — it ______ rain.", ["will", "is going to", "rains", "would"], 1, "Prédiction fondée sur des indices → be going to."],
      ["I ______ the client at 3 p.m. tomorrow; it's in my calendar.", ["will meet", "am meeting", "meet", "would meet"], 1, "Arrangement planifié → présent continu : am meeting."],
      ["The train ______ at 9:15 sharp every morning.", ["will leave", "is leaving", "leaves", "left"], 2, "Horaire fixe → présent simple : leaves."],
      ["Hurry up — the film ______ start.", ["is about to", "will", "would", "is going"], 0, "Sur le point de → be about to."],
      ["Don't worry, I ______ help you with that.", ["am helping", "will help", "help", "would help"], 1, "Décision spontanée / promesse → will."],
      ["The company is on the ______ of a major breakthrough.", ["verge", "edge", "point", "side"], 0, "« on the verge of » = sur le point de / au bord de."],
      ["This time next year, we ______ in our new headquarters.", ["will work", "will be working", "work", "would work"], 1, "Action en cours à un moment futur → future continuous : will be working."]
    ]
  },
  {
    id: "forecasting", title: "Prédire & anticiper", tag: "C1 · Prévisions",
    note: "Pour parler de l'avenir avec nuance (rapports, presse, essais), l'anglais soutenu emploie : « is likely / unlikely to » (a des chances de), « is expected to » (devrait), « is set to » (prévu / sur le point de), « is bound to » (forcément), « is projected to » (selon les projections), « is poised to » (en position de), « may/might well » (fort possible).",
    q: [
      ["Global demand ______ expected to double by 2050.", ["is", "are", "will", "has"], 0, "Passif : demand (sing.) is expected to."],
      ["The firm ______ to launch the product next spring.", ["is set", "sets", "is setting", "set"], 0, "« is set to » = prévu / sur le point de."],
      ["Prices are ______ to rise if supply falls further.", ["like", "likely", "alike", "liking"], 1, "« are likely to » = ont des chances de."],
      ["With that much talent, she ______ to succeed.", ["is bound", "binds", "is binding", "bound"], 0, "« is bound to » = forcément."],
      ["The population is ______ to reach ten billion.", ["projected", "projecting", "projects", "project"], 0, "« is projected to » = selon les projections."],
      ["The company is ______ to become the market leader.", ["poised", "poise", "poising", "poises"], 0, "« is poised to » = en position de / prêt à."],
      ["It ______ well rain later, so take a coat.", ["may", "must", "shall", "would"], 0, "« may well » = c'est fort possible."],
      ["Renewable energy is ______ to overtake coal within a decade.", ["expect", "expected", "expecting", "expects"], 1, "« is expected to » = devrait."]
    ]
  }
);

/* --- Items d'examen (futur, B2-C1) --- */
window.EXAM_GRAMMAR.push(
  ["By the time you read this, I ______ already left the country.", ["will", "will have", "am", "would"], 1, "Future perfect : will have (already) left.", 2],
  ["The summit ______ to take place in Geneva next year.", ["is set", "sets", "setting", "set"], 0, "« is set to ».", 2],
  ["Emissions ______ expected to peak within a decade.", ["is", "are", "was", "be"], 1, "« are expected to » (emissions, pluriel).", 2],
  ["This time tomorrow, they ______ the results.", ["announce", "will be announcing", "announced", "will announced"], 1, "Future continuous : will be announcing.", 3],
  ["Renewable energy is ______ to overtake coal by 2030.", ["likely", "like", "liking", "alike"], 0, "« is likely to ».", 2],
  ["Several startups are on the ______ of a breakthrough.", ["verge", "edge", "point", "top"], 0, "« on the verge of ».", 3],
  ["Prices ______ to rise unless supply improves.", ["are bound", "bound", "is bound", "bind"], 0, "« are bound to ».", 3],
  ["The app ______ next month, according to the CEO.", ["launches", "will have launched", "is launching", "launch"], 2, "Arrangement planifié → présent continu : is launching.", 2],
  ["AI is ______ to transform healthcare in the coming years.", ["poised", "poises", "poising", "poise"], 0, "« is poised to ».", 3],
  ["The world's population ______ to have doubled by 2100.", ["is projected", "projects", "is projecting", "projected"], 0, "« is projected to have doubled ».", 3]
);

/* --- Traductions (Le futur) --- */
window.TRANSLATIONS.push(
  { fr:"D'ici 2050, l'IA aura transformé la plupart des métiers.", en:"By 2050, AI will have transformed most jobs.", alt:[], cat:"Le futur", point:"future perfect", note:"« d'ici + date » (échéance) → future perfect : will have transformed.", level:"C1" },
  { fr:"Les prix vont probablement augmenter.", en:"Prices are likely to rise.", alt:["Prices will probably rise."], cat:"Le futur", point:"« be likely to »", note:"Prédiction nuancée → « be likely to ». Plus soutenu que « will probably ».", level:"B2" },
  { fr:"L'entreprise est sur le point d'être rachetée.", en:"The company is about to be taken over.", alt:["The company is on the verge of being taken over."], cat:"Le futur", point:"« be about to / on the verge of »", note:"Sur le point de → « be about to » (+ passif) ou « on the verge of + -ing ».", level:"C1" },
  { fr:"Cette technologie est vouée à disparaître.", en:"This technology is bound to disappear.", alt:["This technology is destined to become obsolete."], cat:"Le futur", point:"« be bound to »", note:"« voué à » → « be bound to » / « be destined to ». « obsolete » = obsolète.", level:"C1" },
  { fr:"Le sommet doit se tenir à Paris l'an prochain.", en:"The summit is set to take place in Paris next year.", alt:[], cat:"Le futur", point:"« be set to »", note:"« doit / est prévu » → « is set to ». « to take place » = avoir lieu.", level:"B2" },
  { fr:"Demain à cette heure-ci, nous serons en train de voler vers Tokyo.", en:"This time tomorrow, we'll be flying to Tokyo.", alt:[], cat:"Le futur", point:"future continuous", note:"Action en cours à un moment futur → « will be + -ing ».", level:"B2" },
  { fr:"Les émissions devraient atteindre un pic d'ici dix ans.", en:"Emissions are expected to peak within a decade.", alt:[], cat:"Le futur", point:"« be expected to »", note:"Prévision → « are expected to » ; « to peak » = culminer.", level:"C1" },
  { fr:"Si rien ne change, la crise va s'aggraver.", en:"If nothing changes, the crisis will worsen.", alt:["Unless things change, the crisis will get worse."], cat:"Le futur", point:"1er conditionnel (prédiction)", note:"Prédiction conditionnelle → « if + présent, will + base ». « to worsen » = s'aggraver.", level:"B2" },
  { fr:"L'énergie renouvelable est en passe de dépasser le charbon.", en:"Renewable energy is poised to overtake coal.", alt:["Renewable energy is on track to overtake coal."], cat:"Le futur", point:"« be poised to »", note:"« en passe de » → « be poised to » / « be on track to ». « to overtake » = dépasser.", level:"C1" },
  { fr:"Il se pourrait bien que le télétravail devienne la norme.", en:"Remote work may well become the norm.", alt:["Remote work could well become standard."], cat:"Le futur", point:"« may well »", note:"Forte probabilité → « may well + base ». « the norm » = la norme.", level:"C1" }
);
