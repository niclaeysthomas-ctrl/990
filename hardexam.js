/* ============================================================
   990 — Vivier « Défi C2 » : items les plus durs (difficulté 3).
   Alimente le mode Défi (inversions, subjonctif, prépositions fines,
   accords pièges, concession soutenue) + 2 passages d'inférence.
   Se charge APRÈS exam-data.js et advanced.js.
   ============================================================ */
window.EXAM_GRAMMAR.push(
  ["Rarely ______ a proposal so thoroughly researched.", ["we have seen", "have we seen", "we saw", "seeing"], 1, "Adverbe négatif « Rarely » en tête → inversion : have we seen.", 3],
  ["The board insisted that the CEO ______ present at the vote.", ["is", "was", "be", "were"], 2, "Subjonctif après « insist that » : forme base « be ».", 3],
  ["______ the merger succeed, thousands of jobs would be secured.", ["Should", "If", "Were", "Had"], 0, "Conditionnel inversé : « Should the merger succeed » = « If the merger should succeed ».", 3],
  ["Not until the audit was complete ______ the discrepancy.", ["they noticed", "did they notice", "they had noticed", "noticing"], 1, "« Not until… » en tête → inversion : did they notice.", 3],
  ["The findings are consistent ______ our earlier hypothesis.", ["to", "with", "of", "for"], 1, "Préposition dépendante : « consistent WITH ».", 3],
  ["He is one of those managers who ______ never satisfied.", ["is", "are", "was", "has"], 1, "« one of those … who » → relative au pluriel (managers) : are.", 3],
  ["The project, ______ complexity had been underestimated, ran over budget.", ["which", "whose", "that", "who"], 1, "Possessif relatif pour une chose : « whose complexity ».", 3],
  ["Little ______ how much the decision would cost them.", ["they realised", "did they realise", "they had realised", "realising"], 1, "« Little » (sens négatif) en tête → inversion : did they realise.", 3],
  ["I'd rather you ______ the client before responding.", ["consult", "consulted", "to consult", "consulting"], 1, "« I'd rather you + prétérit » (préférence portant sur autrui) : consulted.", 3],
  ["No sooner had the results been announced ______ the shares surged.", ["when", "than", "then", "that"], 1, "Structure figée : « No sooner … THAN … ».", 3],
  ["The committee recommended that the policy ______ without delay.", ["is implemented", "be implemented", "was implemented", "implements"], 1, "Subjonctif après « recommend that » : be implemented.", 3],
  ["Such ______ the demand that the servers crashed within minutes.", ["was", "were", "is", "did"], 0, "« Such + inversion + that » ; sujet « demand » (singulier) : « Such was the demand that… ».", 3],
  ["Seldom ______ a candidate so overqualified for the role.", ["we interview", "do we interview", "we interviewed", "interviewing"], 1, "« Seldom » en tête → inversion : do we interview.", 3],
  ["The negotiations broke down, ______ was regrettable but not unexpected.", ["that", "which", "what", "it"], 1, "Relative de commentaire sur toute la proposition : « , which was ».", 3],
  ["Only after signing ______ that the terms were unfavourable.", ["she realised", "did she realise", "she had realised", "realising"], 1, "« Only after… » en tête → inversion : did she realise.", 3],
  ["The new hire is more competent than ______ of her predecessors.", ["any", "either", "none", "both"], 0, "Comparatif au sein d'un groupe : « more competent than ANY of… ».", 3],
  ["Were it not ______ the delay, the launch would have been flawless.", ["for", "of", "to", "with"], 0, "Locution figée : « Were it not FOR… » = sans, n'était.", 3],
  ["The manager, along with her entire team, ______ attending the summit.", ["are", "is", "were", "have"], 1, "« along with … » ne modifie pas l'accord → sujet singulier « the manager » : is.", 3],
  ["Scarcely had we begun ______ the power went out.", ["than", "when", "then", "that"], 1, "« Scarcely … WHEN … » (à ne pas confondre avec « no sooner … than »).", 3],
  ["Under no circumstances ______ confidential files be shared externally.", ["should", "should to", "that should", "must to"], 0, "« Under no circumstances » en tête → inversion avec modal : should … be shared.", 3],
  ["It is imperative that every applicant ______ a valid ID.", ["provides", "provide", "provided", "is providing"], 1, "Subjonctif après « it is imperative that » : provide (base).", 3],
  ["The strategy proved effective, ______ costly to implement.", ["albeit", "despite", "however", "whereas"], 0, "« albeit » = quoique / bien que (concession soutenue + adjectif).", 3],
  ["Hardly ______ the door when the phone rang.", ["I had closed", "had I closed", "I closed", "closing"], 1, "« Hardly had I closed … when … » (antériorité soutenue).", 3],
  ["The more one delegates, ______ one is able to focus on strategy.", ["more", "the more", "most", "the most"], 1, "Comparatif progressif corrélé : « The more…, THE MORE… ».", 3]
);

window.READING.push(
  {
    title: "Note interne — consolidation des bureaux",
    diff: 3,
    text: "Following the board's review, we will be consolidating our regional offices into two hubs over the coming year. While no immediate redundancies are anticipated, affected staff will be offered relocation packages or, where relocation proves impractical, a voluntary severance scheme. Managers are asked to communicate these changes with sensitivity. The transition, though disruptive in the short term, is expected to yield significant operational efficiencies by the next fiscal year. Further details will follow once consultations with employee representatives have concluded.",
    qs: [
      ["What does the memo imply about job losses?", ["They are certain and immediate", "None will ever occur", "They are not expected now, but are not entirely ruled out", "Every employee will be dismissed"], 2, "« no immediate redundancies are anticipated » + l'option « voluntary severance » : ni certain, ni exclu. C'est une implicature, pas une affirmation directe.", 3],
      ["The word « impractical » is closest in meaning to:", ["unpopular", "not feasible", "expensive", "temporary"], 1, "« impractical » = non réalisable dans les faits (ici, déménager n'est pas envisageable).", 3],
      ["The overall tone of the memo is best described as:", ["alarmed", "cautiously reassuring", "celebratory", "indifferent"], 1, "La note reconnaît la perturbation (« disruptive ») tout en rassurant (« with sensitivity », « efficiencies ») → prudemment rassurant.", 3]
    ]
  },
  {
    title: "Éditorial — l'économie de l'attention",
    diff: 3,
    text: "For all the talk of an information age, the true scarcity of our era is not information but attention. Platforms that appear to give away their services for nothing are, in fact, monetising the one resource their users cannot replenish. The more seamlessly an application weaves itself into daily life, the more effectively it harvests the very focus its users imagine they are exercising freely. To call this a fair exchange is to overlook how asymmetrically its terms have been set.",
    qs: [
      ["According to the passage, what is genuinely scarce today?", ["Information", "Money", "Attention", "Technology"], 2, "« the true scarcity of our era is not information but attention ».", 3],
      ["The word « replenish » most nearly means:", ["restore or refill", "spend quickly", "measure precisely", "protect carefully"], 0, "replenish = reconstituer, refaire le plein (d'une ressource épuisée).", 3],
      ["The author's attitude toward these platforms is best described as:", ["approving", "critical", "neutral", "confused"], 1, "« overlook how asymmetrically its terms have been set » : l'auteur dénonce le déséquilibre de l'échange dit « équitable ».", 3]
    ]
  }
);
