/* ============================================================
   990 — ANGLAIS SOUTENU : reformuler du neutre vers l'élégant (EN → EN)
   + 2 leçons de style. Doit se charger APRÈS data.js.
   r = { plain, elevated, alt:[...], cat, note, level }
   ============================================================ */
window.REGISTER = [

  /* --- Verbes & mots élevés --- */
  { plain: "We need to get more information before deciding.", elevated: "We need to obtain further information before deciding.", alt: ["We must gather additional information before reaching a decision."], cat: "Mots élevés", note: "get → obtain / gather ; more → further / additional. Le lexique latin (obtain, additional) élève immédiatement le registre.", level: "C1" },
  { plain: "The report shows that sales went up.", elevated: "The report demonstrates that sales rose.", alt: ["The report indicates a rise in sales."], cat: "Mots élevés", note: "show → demonstrate / indicate ; go up → rise. « Nominaliser » (a rise in sales) est encore plus soutenu.", level: "C1" },
  { plain: "They want to buy the smaller company.", elevated: "They intend to acquire the smaller company.", alt: ["They are seeking to acquire the smaller firm."], cat: "Mots élevés", note: "want → intend / seek ; buy → acquire ; company → firm. Registre des affaires soutenu.", level: "C1" },
  { plain: "This will help the whole process.", elevated: "This will facilitate the entire process.", alt: ["This will streamline the process."], cat: "Mots élevés", note: "help → facilitate ; whole → entire ; make simpler → streamline.", level: "B2" },
  { plain: "The plan didn't work.", elevated: "The plan proved unsuccessful.", alt: ["The plan failed to deliver.", "The plan came to nothing."], cat: "Mots élevés", note: "« didn't work » → « proved unsuccessful ». « prove + adjectif » = s'avérer, tournure élégante.", level: "B2" },
  { plain: "He said he was against the merger.", elevated: "He voiced his opposition to the merger.", alt: ["He expressed his opposition to the merger."], cat: "Mots élevés", note: "« be against » → « voice / express opposition to ». Nominalisation + verbe choisi.", level: "C1" },

  /* --- Quantité & degré --- */
  { plain: "There's a lot of interest in the product.", elevated: "There is a great deal of interest in the product.", alt: ["There is considerable interest in the product."], cat: "Quantité & degré", note: "« a lot of » (indénombrable) → « a great deal of » / « considerable ». Éviter « a lot of » à l'écrit soutenu.", level: "B2" },
  { plain: "Prices went up a lot last year.", elevated: "Prices rose considerably last year.", alt: ["Prices rose substantially last year."], cat: "Quantité & degré", note: "« a lot » (adverbe) → « considerably / substantially / markedly ».", level: "B2" },
  { plain: "Almost all the members agreed.", elevated: "The vast majority of members agreed.", alt: ["Members agreed almost unanimously."], cat: "Quantité & degré", note: "« almost all » → « the vast majority of ». Plus précis et plus soutenu.", level: "B2" },
  { plain: "It's a very big problem.", elevated: "It is a considerable problem.", alt: ["It is a significant / pressing problem."], cat: "Quantité & degré", note: "« very big » → « considerable / significant / substantial ». Bannir « very + adjectif banal ».", level: "B2" },
  { plain: "We have very little time.", elevated: "Time is in short supply.", alt: ["We have precious little time."], cat: "Quantité & degré", note: "« very little time » → « time is in short supply » / « precious little time » (tournure idiomatique soutenue).", level: "C1" },

  /* --- Connecteurs d'essai --- */
  { plain: "The plan is costly. Also, it is slow.", elevated: "The plan is costly. Moreover, it is slow.", alt: ["The plan is costly; furthermore, it is slow."], cat: "Connecteurs d'essai", note: "« also » (en tête) → « Moreover / Furthermore / In addition ». Marqueurs d'addition soutenus.", level: "B2" },
  { plain: "But the results were disappointing.", elevated: "The results, however, were disappointing.", alt: ["Nonetheless, the results were disappointing."], cat: "Connecteurs d'essai", note: "« but » → « however » (souvent en incise) / « nonetheless ». À l'écrit, on évite de commencer par « But ».", level: "B2" },
  { plain: "So we decided to postpone the launch.", elevated: "We therefore decided to postpone the launch.", alt: ["Consequently, the launch was postponed."], cat: "Connecteurs d'essai", note: "« so » → « therefore / consequently / accordingly ». Conséquence soutenue.", level: "B2" },
  { plain: "For example, sales dropped in the third quarter.", elevated: "A case in point is the drop in third-quarter sales.", alt: ["By way of illustration, sales dropped in Q3."], cat: "Connecteurs d'essai", note: "« for example » → « a case in point is… » / « by way of illustration ». Introduit un exemple avec élégance.", level: "C1" },
  { plain: "In the end, both sides agreed.", elevated: "Ultimately, the two sides reached an agreement.", alt: ["The two sides eventually came to terms."], cat: "Connecteurs d'essai", note: "« in the end » → « ultimately » ; « agreed » → « reached an agreement / came to terms » (nominalisation).", level: "B2" },

  /* --- Atténuation (hedging) --- */
  { plain: "This idea is wrong.", elevated: "This idea would appear to be mistaken.", alt: ["This idea is, arguably, mistaken."], cat: "Atténuation", note: "« is wrong » → « would appear to be mistaken » / « arguably mistaken ». On nuance au lieu d'affirmer brutalement — marqueur de sophistication.", level: "C1" },
  { plain: "I think the plan will fail.", elevated: "It seems likely that the plan will fail.", alt: ["One might argue that the plan is destined to fail."], cat: "Atténuation", note: "« I think » → « it seems likely that… » / « one might argue that… ». On efface le « I » et on module.", level: "C1" },
  { plain: "Everyone knows that the reforms failed.", elevated: "It is widely acknowledged that the reforms failed.", alt: ["It is generally accepted that the reforms failed."], cat: "Atténuation", note: "« everyone knows » → « it is widely acknowledged / generally accepted that… ». Tournure impersonnelle académique.", level: "C1" },
  { plain: "This will definitely help.", elevated: "This should, in all likelihood, help.", alt: ["This is likely to prove beneficial."], cat: "Atténuation", note: "« definitely » (trop catégorique) → « in all likelihood » / « is likely to ». On tempère la certitude.", level: "C1" },
  { plain: "The proposal has no merit.", elevated: "The proposal is not entirely without merit.", alt: ["The proposal is not without its merits."], cat: "Atténuation", note: "Litote soutenue : « not entirely without merit » nuance et adoucit — très C2.", level: "C2" },

  /* --- Insistance & emphase --- */
  { plain: "Safety is very important.", elevated: "Safety is of paramount importance.", alt: ["Safety is of the utmost importance."], cat: "Insistance", note: "« very important » → « of paramount / utmost importance ». Emphase élégante.", level: "C1" },
  { plain: "I really want to stress this point.", elevated: "I cannot stress this point strongly enough.", alt: ["I would be remiss not to emphasise this point."], cat: "Insistance", note: "« I really want to stress » → « I cannot stress … enough ». Insistance idiomatique et polie.", level: "C1" },
  { plain: "This is a very good example.", elevated: "This is a prime example.", alt: ["This is a textbook example."], cat: "Insistance", note: "« very good example » → « prime / textbook example ». Collocation soutenue.", level: "B2" },
  { plain: "There is no doubt about it.", elevated: "There can be no doubt whatsoever.", alt: ["It is beyond dispute."], cat: "Insistance", note: "« no doubt about it » → « no doubt whatsoever » / « beyond dispute ». Renforce avec emphase.", level: "C1" },

  /* --- Formules écrites (email / essai) --- */
  { plain: "I'm writing to ask about your services.", elevated: "I am writing to enquire about your services.", alt: ["I am writing to request information about your services."], cat: "Formules écrites", note: "« ask about » → « enquire about / request information about ». Registre épistolaire formel.", level: "B2" },
  { plain: "Sorry for the late reply.", elevated: "I apologise for the delay in responding.", alt: ["Please accept my apologies for the late response."], cat: "Formules écrites", note: "Formule d'excuse soignée. « sorry » → « apologise » ; « late reply » → « delay in responding ».", level: "B2" },
  { plain: "Let me know if you have any questions.", elevated: "Please do not hesitate to contact me should you have any questions.", alt: ["I would be happy to answer any questions you may have."], cat: "Formules écrites", note: "Clôture d'email formelle, avec « should you have… » (condition inversée soutenue).", level: "C1" },
  { plain: "To sum up, the project was a success.", elevated: "In conclusion, the project proved a resounding success.", alt: ["To conclude, the project was a marked success."], cat: "Formules écrites", note: "« to sum up » → « in conclusion / to conclude » ; « a success » → « a resounding / marked success ».", level: "B2" },
  { plain: "This essay will talk about climate policy.", elevated: "This essay will examine climate policy.", alt: ["This essay will explore climate policy."], cat: "Formules écrites", note: "« talk about » → « examine / explore / address ». Verbe académique pour une introduction.", level: "B2" },

  /* --- Nominalisation & concision --- */
  { plain: "They decided quickly, and it surprised everyone.", elevated: "Their swift decision surprised everyone.", alt: ["Their prompt decision took everyone by surprise."], cat: "Nominalisation", note: "Proposition → groupe nominal : « they decided quickly » → « their swift decision ». Condense et élève.", level: "C1" },
  { plain: "Because prices rose, demand fell.", elevated: "The rise in prices led to a fall in demand.", alt: ["The increase in prices brought about a decline in demand."], cat: "Nominalisation", note: "Cause verbale → nominalisation : « X rose → the rise in X ». Style académique.", level: "C1" },
  { plain: "After they arrived, the meeting began.", elevated: "Upon their arrival, the meeting began.", alt: ["Following their arrival, the meeting commenced."], cat: "Nominalisation", note: "« after they arrived » → « upon / following their arrival ». Préposition + nom.", level: "C1" },
  { plain: "The company grew, and this created jobs.", elevated: "The company's growth created jobs.", alt: ["The firm's expansion generated employment."], cat: "Nominalisation", note: "« the company grew » → « the company's growth ». Le possessif + nom d'action condense la phrase.", level: "C1" }

];

/* ---------- Leçons de style soutenu ---------- */
window.LESSONS.push(
  {
    id: "nominalisation",
    title: "Nominalisation & concision",
    tag: "Style C2",
    note: "L'anglais soutenu (écrit, académique) préfère souvent le NOM à la proposition verbale : « They decided quickly » → « their swift decision ». On condense et on élève. Repère les noms d'action : decision, arrival, growth, refusal, implementation, rise, completion.",
    q: [
      ["The committee will announce ______ of the new policy next week.", ["implement", "implementing", "the implementation", "implemented"], 2, "Nominalisation : « the implementation of » (nom d'action) plutôt que le verbe."],
      ["______ of the CEO caused the share price to fall.", ["Resigning", "The resignation", "Resigned", "Resign"], 1, "Sujet nominalisé : « The resignation of the CEO »."],
      ["Upon ______, please proceed directly to gate 12.", ["you arrive", "arriving", "arrival", "arrived"], 2, "« Upon arrival » (préposition + nom) = registre soutenu."],
      ["The report calls for a thorough ______ of current procedures.", ["review", "to review", "reviewing", "reviewed"], 0, "Article + adjectif + NOM : « a thorough review »."],
      ["There has been a marked ______ in productivity this quarter.", ["improve", "improving", "improvement", "improved"], 2, "Nom d'action : « a marked improvement »."],
      ["The sudden ______ in demand caught suppliers off guard.", ["rise", "rising", "rose", "risen"], 0, "« the sudden rise in demand » (nom) plutôt que « demand suddenly rose »."],
      ["Her ______ to comment was widely noted.", ["refuse", "refusing", "refusal", "refused"], 2, "Nom : « her refusal to comment »."],
      ["The ______ of the merger is expected by June.", ["complete", "completing", "completion", "completed"], 2, "Nom d'action : « the completion of the merger »."]
    ]
  },
  {
    id: "hedging",
    title: "Atténuation & modalisation",
    tag: "Style C2",
    note: "L'anglais soutenu nuance ses affirmations (hedging) au lieu d'asséner : « This is wrong » → « This would appear to be mistaken ». Outils : « arguably », « it seems / would appear that », « to a certain extent », « one might argue », « in all likelihood », et la litote « not entirely without… ». Marqueur de diplomatie et de sophistication.",
    q: [
      ["The evidence ______ to suggest a link, though more study is needed.", ["appears", "appear", "is appearing", "appeared"], 0, "« The evidence appears to suggest… » : hedging + accord singulier."],
      ["______, the policy has done more harm than good.", ["Arguably", "Argue", "Argued", "Arguing"], 0, "Adverbe de modalisation en tête : « Arguably, … »."],
      ["It is widely ______ that the reforms fell short.", ["acknowledge", "acknowledged", "acknowledging", "acknowledges"], 1, "Tournure impersonnelle : « It is widely acknowledged that… »."],
      ["The plan will, ______ all likelihood, be approved.", ["in", "on", "at", "by"], 0, "Locution figée : « in all likelihood » = selon toute probabilité."],
      ["This approach works only ______ a certain extent.", ["in", "to", "at", "by"], 1, "« to a certain extent » = dans une certaine mesure."],
      ["One ______ argue that the risks outweigh the benefits.", ["might", "must", "will", "shall"], 0, "Modalisation prudente : « One might argue that… »."],
      ["The results, it would ______, contradict the theory.", ["seem", "seems", "seeming", "seemed"], 0, "« it would seem » (incise atténuative) : seem."],
      ["The proposal is ______ without merit, though it needs work.", ["not entirely", "entirely not", "no entirely", "not entire"], 0, "Litote soutenue : « not entirely without merit »."]
    ]
  }
);
