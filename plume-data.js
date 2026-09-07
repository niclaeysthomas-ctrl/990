/* ============================================================
   LA PLUME — banque de sujets d'expression écrite
   Calibrage : le format le plus exigeant de chaque famille,
   grilles officielles (Cambridge C1/C2, IELTS band 9, TOEFL iBT).
   ============================================================ */

/* Les familles de tâches, avec leur cahier des charges officiel. */
window.PLUME_FORMATS = {
  essay: {
    nom: 'Essai argumenté',
    src: 'Cambridge C1 Advanced / C2 Proficiency · Writing Part 1',
    ic: '⚖️',
    mots: [220, 260],
    min: 45,
    couleur: 'var(--accent)',
    quoi: "Deux points imposés à traiter, plus une idée à toi. Registre neutre-formel, position claire, aucune fioriture.",
    criteres: ['Content', 'Communicative Achievement', 'Organisation', 'Language'],
    bareme: "Chaque critère sur 5. Un 5 en Language = « usage fluide d'un large répertoire, erreurs rares et sans gêne ».",
    charpente: [
      "§1 — Reformule l'enjeu en une phrase, annonce ta position (pas de « In this essay I will »).",
      "§2 — Point imposé n°1 : affirmation → raison → exemple précis → ce que ça implique.",
      "§3 — Point imposé n°2 : même charpente, plus une concession honnête retournée.",
      "§4 — Ton idée propre + conclusion qui tranche (pas un résumé)."
    ]
  },
  ielts2: {
    nom: 'IELTS Task 2',
    src: 'IELTS Academic · Writing Task 2 (le plus lourd : 2/3 de la note)',
    ic: '🎓',
    mots: [250, 320],
    min: 40,
    couleur: 'var(--blue)',
    quoi: "Une question à quatre formes possibles (opinion / discuter les deux vues / problème-solution / avantages-inconvénients). Répondre à TOUTES les parties de la question, sinon plafond band 6.",
    criteres: ['Task Response', 'Coherence & Cohesion', 'Lexical Resource', 'Grammatical Range'],
    bareme: "Bandes /9. Band 9 = « position pleinement développée, idées pertinentes et étendues », lexique naturel et sophistiqué, erreurs rarissimes.",
    charpente: [
      "§1 — Paraphrase la question (jamais recopier) + thèse explicite qui répond à tout ce qui est demandé.",
      "§2 — Idée principale 1, développée jusqu'au bout : pourquoi, comment, avec quel effet.",
      "§3 — Idée principale 2, développée pareil. Une idée par paragraphe, pas trois survolées.",
      "§4 — Conclusion : la réponse, reformulée autrement, sans idée neuve."
    ]
  },
  ielts1: {
    nom: 'Rapport de données',
    src: 'IELTS Academic · Writing Task 1',
    ic: '📊',
    mots: [150, 200],
    min: 20,
    couleur: 'var(--purple)',
    quoi: "Décrire des données sans les commenter ni les expliquer. Le piège : tout lister. Il faut sélectionner, comparer, hiérarchiser.",
    criteres: ['Task Achievement', 'Coherence & Cohesion', 'Lexical Resource', 'Grammatical Range'],
    bareme: "Bandes /9. Band 9 = « vue d'ensemble claire, traits saillants mis en évidence et illustrés ». Aucune opinion, aucune cause inventée.",
    charpente: [
      "§1 — Une phrase : ce que montrent les données (paraphrase, pas de chiffre).",
      "§2 — OVERVIEW : les 2 traits les plus saillants, sans chiffres. C'est le paragraphe qui décide de la bande.",
      "§3 — Détail groupe 1, avec chiffres choisis.",
      "§4 — Détail groupe 2, en comparant explicitement au groupe 1."
    ]
  },
  toefl: {
    nom: 'Discussion académique',
    src: 'TOEFL iBT · Writing for an Academic Discussion (10 min)',
    ic: '💬',
    mots: [100, 160],
    min: 10,
    couleur: 'var(--good)',
    quoi: "Un professeur pose une question, deux étudiants ont déjà répondu. Tu dois contribuer : prendre position ET dialoguer avec ce qu'ils ont dit. Court, donc chaque phrase doit porter.",
    criteres: ['Pertinence & élaboration', 'Variété syntaxique', 'Précision lexicale', 'Correction'],
    bareme: "Note /5. Un 5 = « contribution pertinente et bien étayée, usage de la langue constamment efficace, erreurs lexicales/grammaticales rares ».",
    charpente: [
      "Phrase 1 — Position nette, tout de suite (pas d'introduction, tu n'as pas la place).",
      "Phrases 2-3 — Rebondis nommément sur un des deux étudiants : d'accord en précisant, ou en désaccord en montrant ce qu'il rate.",
      "Phrases 4-5 — Ta raison propre + un exemple concret et vérifiable.",
      "Phrase 6 — Une nuance ou une conséquence, pas une conclusion scolaire."
    ]
  },
  report: {
    nom: 'Rapport / proposition',
    src: 'Cambridge C1 Advanced · Writing Part 2 (report, proposal)',
    ic: '📋',
    mots: [220, 260],
    min: 45,
    couleur: 'var(--accent2)',
    quoi: "Écrit à un destinataire précis (un directeur, un comité) dans un but précis. Titres de section attendus, ton impersonnel, recommandations fermes à la fin.",
    criteres: ['Content', 'Communicative Achievement', 'Organisation', 'Language'],
    bareme: "Chaque critère sur 5. Communicative Achievement = tenir le registre du genre de bout en bout : un rapport qui glisse vers l'essai perd le point.",
    charpente: [
      "Titre + « Introduction » : l'objet du rapport et sur quoi il s'appuie.",
      "Section 2 (titrée) : les constats, au passif et au factuel.",
      "Section 3 (titrée) : l'analyse — ce que les constats impliquent.",
      "« Recommendations » : 2 ou 3, formulées avec should / it is recommended that + subjonctif."
    ]
  },
  email: {
    nom: 'E-mail professionnel',
    src: 'TOEIC Writing tasks 6-7 · et la vraie vie de stage',
    ic: '✉️',
    mots: [120, 180],
    min: 15,
    couleur: '#4dd0c7',
    quoi: "Répondre à un mail en traitant TOUS les points demandés. Le registre est la note : ni familier, ni ampoulé. Le mail parfait est court, poli et sans ambiguïté sur ce qui va se passer ensuite.",
    criteres: ['Traitement complet', 'Registre & politesse', 'Organisation', 'Correction'],
    bareme: "Chaque point non traité = un point perdu, même si le reste est parfait. Compte les demandes avant d'écrire.",
    charpente: [
      "Ouverture : remercier ou accuser réception en une ligne, sans formule creuse.",
      "Corps : un paragraphe par demande, dans l'ordre du mail reçu.",
      "Ce que tu proposes / ce que tu t'engages à faire, daté.",
      "Clôture : une question ou une prochaine étape claire + formule adaptée au destinataire."
    ]
  },
  review: {
    nom: 'Critique',
    src: 'Cambridge C1 Advanced · Writing Part 2 (review)',
    ic: '🎭',
    mots: [220, 260],
    min: 45,
    couleur: '#ff7ab6',
    quoi: "Décrire ET évaluer, pour un lecteur qui décide s'il y va. Registre semi-formel vivant : c'est le seul format où le style personnel est noté positivement.",
    criteres: ['Content', 'Communicative Achievement', 'Organisation', 'Language'],
    bareme: "Chaque critère sur 5. Le piège : raconter au lieu d'évaluer. Il faut un jugement argumenté et une recommandation explicite.",
    charpente: [
      "Accroche qui situe l'objet en une phrase (pas « I want to review… »).",
      "Ce que c'est, brièvement — le minimum pour comprendre.",
      "Évaluation : ce qui marche, ce qui ne marche pas, avec un détail précis à chaque fois.",
      "Recommandation ciblée : pour qui, et pour qui pas."
    ]
  }
};

/* Connecteurs et tournures reconnus par le relecteur (variété = bande). */
window.PLUME_CONNECTEURS = {
  bas: ['and', 'but', 'so', 'because', 'also', 'then', 'first of all', 'secondly', 'finally', 'in conclusion', 'to sum up', 'moreover', 'furthermore', 'in addition'],
  haut: ['whereas', 'albeit', 'insofar as', 'to the extent that', 'granted that', 'admittedly', 'conversely', 'by contrast', 'that said', 'all the same', 'if anything', 'not least because', 'in which case', 'on the grounds that', 'for all its', 'far from', 'let alone', 'much as', 'were it not for', 'hence', 'thereby', 'whereby', 'accordingly', 'notwithstanding', 'paradoxically', 'crucially', 'tellingly', 'arguably']
};

/* ============================================================
   LES SUJETS
   `attendu` = ce qu'un correcteur cherche dans la copie ; l'app
   compte lesquels tu as réellement traités (kw = radicaux).
   `lexique` ne s'affiche QU'APRÈS l'écriture — sinon tu recopies
   au lieu de produire.
   ============================================================ */
window.PLUME_SUJETS = [

/* ---------- ESSAI ARGUMENTÉ (Cambridge C1/C2 Part 1) ---------- */
{
  id: 'e1', fmt: 'essay', th: 'Travail', diff: 3,
  titre: "Le télétravail a-t-il coûté plus qu'il n'a rapporté ?",
  ctx: "Your class has watched a documentary on the long-term effects of remote work. You have made the notes below.",
  prompt: "Write an essay discussing **two** of the effects in your notes. You should explain **which effect matters more for the future of work**, giving reasons in support of your answer.\n\nEffects of remote work:\n· career progression\n· company culture\n· where people can afford to live\n\nSome opinions expressed in the documentary:\n\"You cannot mentor someone through a screen.\"\n\"I bought a house I could never have afforded near the office.\"\n\"Promotion now goes to whoever is visible, not whoever is good.\"",
  attendu: [
    { q: "Traiter exactement DEUX des trois points (pas trois, pas un)", kw: ['career', 'culture', 'live', 'afford', 'mentor', 'promotion'] },
    { q: "Trancher explicitement lequel compte le plus", kw: ['more important', 'matters more', 'outweigh', 'decisive', 'above all', 'first and foremost', 'weighs more'] },
    { q: "Un mécanisme, pas une impression : POURQUOI la visibilité déplace la promotion", kw: ['visib', 'proximity', 'bias', 'informal', 'sponsor', 'network'] },
    { q: "Une concession retournée (reconnaître le contre-argument puis le désamorcer)", kw: ['admittedly', 'granted', 'while it is true', 'although', 'critics', 'to be fair', 'it could be argued'] },
    { q: "Un exemple précis et vérifiable, pas « many companies »", kw: ['for instance', 'for example', 'such as', 'in 20', 'survey', 'study'] }
  ],
  lexique: [
    ['to be passed over for promotion', "être écarté d'une promotion"],
    ['proximity bias', "le biais de proximité (on promeut qui on voit)"],
    ['the tacit knowledge that circulates in an office', "le savoir tacite qui circule au bureau"],
    ['to erode something incrementally', "éroder quelque chose par petites touches"],
    ['a trade-off worth making', "un arbitrage qui vaut la peine"],
    ['on balance', "tout bien pesé"]
  ]
},
{
  id: 'e2', fmt: 'essay', th: 'Société', diff: 3,
  titre: "Faut-il interdire les smartphones aux moins de 16 ans ?",
  ctx: "Your class has debated a proposed law banning social media for under-16s. You have made the notes below.",
  prompt: "Write an essay discussing **two** of the points in your notes. You should explain **whether such a ban would work**, giving reasons in support of your answer.\n\nPoints to consider:\n· mental health evidence\n· enforcement in practice\n· who should decide — parents or the state\n\nSome opinions expressed in the debate:\n\"The correlation is there, but nobody has shown the causation.\"\n\"Any teenager can borrow an adult's ID in thirty seconds.\"\n\"We don't let parents opt out of seatbelts either.\"",
  attendu: [
    { q: "Traiter exactement deux points", kw: ['mental health', 'enforce', 'parent', 'state', 'evidence'] },
    { q: "Distinguer corrélation et causalité (le débat se joue là)", kw: ['correlation', 'causation', 'causal', 'cause'] },
    { q: "Répondre à la question posée : est-ce que ça MARCHERAIT", kw: ['would work', 'effective', 'unworkable', 'in practice', 'circumvent', 'workable'] },
    { q: "L'analogie ceinture de sécurité, acceptée ou démontée", kw: ['seatbelt', 'analogy', 'comparison', 'paternalis'] },
    { q: "Position claire dès l'introduction", kw: ['i would argue', 'in my view', 'this essay', 'should', 'ought'] }
  ],
  lexique: [
    ['to legislate against something', "légiférer contre quelque chose"],
    ['the evidence is suggestive rather than conclusive', "les preuves suggèrent sans trancher"],
    ['a blunt instrument', "un outil grossier, mal calibré"],
    ['to drive a behaviour underground', "pousser un comportement dans la clandestinité"],
    ['duty of care', "devoir de protection"],
    ['a well-intentioned but toothless measure', "une mesure bien intentionnée mais sans mordant"]
  ]
},
{
  id: 'e3', fmt: 'essay', th: 'Économie', diff: 4,
  titre: "Les entreprises doivent-elles répondre d'autre chose que de leurs profits ?",
  ctx: "Your class has attended a lecture on corporate responsibility. You have made the notes below.",
  prompt: "Write an essay discussing **two** of the areas in your notes. You should explain **whom a company ultimately answers to**, giving reasons in support of your answer.\n\nAreas of responsibility:\n· shareholders' returns\n· employees' security\n· environmental cost\n\nSome opinions expressed in the lecture:\n\"A company that pleases everyone is accountable to no one.\"\n\"Ownership is a claim, not a licence.\"\n\"Externalities are simply costs nobody has been made to pay yet.\"",
  attendu: [
    { q: "Traiter deux domaines et les faire dialoguer, pas les juxtaposer", kw: ['shareholder', 'employe', 'environment', 'externalit'] },
    { q: "Répondre à « à qui rend-elle des comptes » — nommer le destinataire", kw: ['accountab', 'answer to', 'responsib', 'owe'] },
    { q: "Le problème d'agence : plusieurs maîtres = aucun maître", kw: ['no one', 'everyone', 'diluted', 'conflict', 'trade-off', 'compet'] },
    { q: "La notion d'externalité employée correctement", kw: ['externalit', 'cost', 'bear', 'pass on', 'society pays'] },
    { q: "Une conclusion qui tranche au lieu de ménager les deux camps", kw: ['ultimately', 'in the final analysis', 'the answer', 'therefore'] }
  ],
  lexique: [
    ['to answer to shareholders', "rendre des comptes aux actionnaires"],
    ['fiduciary duty', "obligation fiduciaire"],
    ['to internalise a cost', "internaliser un coût"],
    ['stakeholder capitalism', "le capitalisme des parties prenantes"],
    ['a licence to operate', "une licence d'exploitation (au sens social)"],
    ['to hold a board to account', "demander des comptes à un conseil d'administration"]
  ]
},
{
  id: 'e4', fmt: 'essay', th: 'Éducation', diff: 3,
  titre: "L'école doit-elle encore enseigner ce qu'une IA fait mieux ?",
  ctx: "Your class has discussed what schools should teach now that AI can write, calculate and translate. You have made the notes below.",
  prompt: "Write an essay discussing **two** of the skills in your notes. You should explain **which is least worth teaching now**, giving reasons in support of your answer.\n\nSkills under discussion:\n· writing essays by hand\n· mental arithmetic\n· learning a foreign language\n\nSome opinions expressed in the discussion:\n\"You cannot judge a translation you could not have written.\"\n\"We stopped teaching log tables and nobody mourns them.\"\n\"Struggling with a sentence is how you learn to think.\"",
  attendu: [
    { q: "Choisir clairement laquelle est la MOINS utile — la question est comparative", kw: ['least', 'worth', 'rather than', 'more than', 'compared'] },
    { q: "L'argument du jugement : évaluer une sortie d'IA exige de savoir faire", kw: ['judge', 'evaluat', 'verify', 'assess', 'spot'] },
    { q: "Le précédent des tables de logarithmes, accepté ou distingué", kw: ['log table', 'calculator', 'precedent', 'analogy', 'obsolete'] },
    { q: "Distinguer le produit (le texte) du processus (penser)", kw: ['process', 'product', 'think', 'struggl', 'effort', 'cognitive'] },
    { q: "Deux compétences seulement, développées à fond", kw: ['arithmetic', 'language', 'writing', 'essay'] }
  ],
  lexique: [
    ['to outsource a skill', "déléguer une compétence à l'extérieur"],
    ['desirable difficulty', "la difficulté désirable (celle qui fait apprendre)"],
    ['a redundant skill', "une compétence devenue superflue"],
    ['to atrophy through disuse', "s'atrophier faute d'usage"],
    ['the ability to sanity-check an answer', "la capacité de vérifier qu'une réponse tient debout"],
    ['scaffolding', "l'étayage (le soutien provisoire de l'apprentissage)"]
  ]
},
{
  id: 'e5', fmt: 'essay', th: 'Ville', diff: 3,
  titre: "Une ville doit-elle chasser la voiture ?",
  ctx: "Your class has studied a city that removed 60% of its parking spaces. You have made the notes below.",
  prompt: "Write an essay discussing **two** of the consequences in your notes. You should explain **whether the policy was justified**, giving reasons in support of your answer.\n\nConsequences observed:\n· air quality\n· access for people who cannot cycle\n· the survival of small shops\n\nSome opinions expressed in the seminar:\n\"The measurable win went to people who were already healthy.\"\n\"Shopkeepers predicted ruin; footfall rose 17%.\"\n\"A policy that only works for the able-bodied is not a public policy.\"",
  attendu: [
    { q: "Traiter deux conséquences, dont au moins une qui gêne ta thèse", kw: ['air', 'access', 'shop', 'disab', 'elderly', 'footfall'] },
    { q: "Trancher : la politique était-elle justifiée", kw: ['justified', 'defensible', 'right', 'wrong', 'warranted'] },
    { q: "Utiliser le chiffre fourni (17%) plutôt que de l'ignorer", kw: ['17', 'footfall', 'rose', 'increase'] },
    { q: "La question de la distribution : qui gagne, qui perd", kw: ['who', 'distribut', 'benefit', 'burden', 'unequal', 'fall on'] },
    { q: "Une objection anticipée et traitée", kw: ['admittedly', 'granted', 'objection', 'critics', 'however', 'that said'] }
  ],
  lexique: [
    ['to pedestrianise a street', "piétonniser une rue"],
    ['the burden falls disproportionately on', "la charge pèse de façon disproportionnée sur"],
    ['a counter-intuitive finding', "un résultat contre-intuitif"],
    ['modal shift', "le report modal (changement de mode de transport)"],
    ['to be priced out of the centre', "être chassé du centre par les prix"],
    ['the fears proved unfounded', "les craintes se sont révélées infondées"]
  ]
},
{
  id: 'e6', fmt: 'essay', th: 'Culture', diff: 4,
  titre: "Faut-il juger une œuvre indépendamment de son auteur ?",
  ctx: "Your class has debated whether an artist's conduct should affect how their work is taught. You have made the notes below.",
  prompt: "Write an essay discussing **two** of the positions in your notes. You should explain **what a university should do in practice**, giving reasons in support of your answer.\n\nPositions defended:\n· the work stands alone\n· teaching is an endorsement\n· context should be taught alongside\n\nSome opinions expressed in the debate:\n\"Nobody asks whether the bridge-builder was a good husband.\"\n\"A syllabus is a finite space; every inclusion is a choice.\"\n\"Erasure teaches students less than confrontation does.\"",
  attendu: [
    { q: "Traiter deux positions et arbitrer entre elles", kw: ['stand alone', 'endorse', 'context', 'syllabus'] },
    { q: "Répondre au « en pratique » : une recommandation concrète", kw: ['should', 'in practice', 'recommend', 'univers', 'teach', 'curricul'] },
    { q: "L'argument de la rareté : un programme est un espace fini", kw: ['finite', 'limited', 'space', 'choice', 'zero-sum', 'crowd out'] },
    { q: "L'analogie du pont, examinée (art vs artefact technique)", kw: ['bridge', 'engineer', 'analogy', 'differ', 'unlike'] },
    { q: "Registre soutenu tenu du début à la fin", kw: ['moreover', 'nevertheless', 'insofar', 'whereas', 'thereby', 'arguably'] }
  ],
  lexique: [
    ['to separate the art from the artist', "séparer l'œuvre de l'artiste"],
    ['tacit endorsement', "une caution tacite"],
    ['to relegate something to a footnote', "reléguer quelque chose en note de bas de page"],
    ['moral licensing', "le permis moral (se croire quitte)"],
    ['a finite syllabus', "un programme forcément limité"],
    ['to grapple with an uncomfortable legacy', "affronter un héritage dérangeant"]
  ]
},

/* ---------- IELTS TASK 2 ---------- */
{
  id: 'i1', fmt: 'ielts2', th: 'Travail', diff: 4,
  titre: "Le salaire doit-il refléter l'utilité sociale ?",
  prompt: "Some people believe that salaries should reflect the value of a job to society, so that nurses and teachers would earn more than bankers and footballers.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
  attendu: [
    { q: "Prendre position sur le DEGRÉ (« to what extent » n'est pas oui/non)", kw: ['largely', 'to some extent', 'partly', 'entirely', 'broadly', 'strongly', 'on balance', 'up to a point', 'in principle', 'i agree with', 'only insofar', 'narrower claim', 'qualified'] },
    { q: "Expliquer comment un salaire se forme réellement (rareté, pas mérite)", kw: ['scarc', 'supply', 'demand', 'market', 'replace', 'rare'] },
    { q: "Nommer qui déciderait de la « valeur sociale » — le point faible de la thèse", kw: ['who would decide', 'who decides', 'measure', 'define', 'committee', 'subjective', 'judgement', 'judgment', 'arbiter', 'body', 'authority', 'no one has', 'nobody has'] },
    { q: "Une contre-proposition concrète (impôt, subvention, pas seulement « il faudrait »)", kw: ['tax', 'subsid', 'public sector', 'fund', 'polic', 'redistribut'] },
    { q: "Conclusion qui reformule la position sans idée neuve", kw: ['in conclusion', 'to conclude', 'overall', 'on balance'] }
  ],
  lexique: [
    ['to command a high salary', "obtenir un salaire élevé (par la position, pas par le mérite)"],
    ['scarcity rather than worth', "la rareté plutôt que la valeur"],
    ['to be undervalued by the market', "être sous-valorisé par le marché"],
    ['a proxy for something', "un indicateur indirect de quelque chose"],
    ['there is no obvious mechanism for', "il n'existe aucun mécanisme évident pour"],
    ['this is easier to assert than to implement', "c'est plus facile à affirmer qu'à mettre en œuvre"]
  ]
},
{
  id: 'i2', fmt: 'ielts2', th: 'Environnement', diff: 3,
  titre: "Individus ou gouvernements : qui doit agir sur le climat ?",
  prompt: "Some argue that individuals should change their lifestyles to address climate change. Others believe that only government regulation can make a real difference.\n\nDiscuss both views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
  attendu: [
    { q: "Traiter les DEUX vues — un paragraphe chacune, équilibrés", kw: ['individual', 'government', 'regulat', 'lifestyle'] },
    { q: "Donner TA position, distinctement des deux vues", kw: ['my view', 'i believe', 'i would argue', 'personally', 'in my opinion'] },
    { q: "L'argument d'échelle : ordre de grandeur des émissions", kw: ['scale', 'proportion', 'percent', 'emission', 'industr', 'marginal'] },
    { q: "Le lien entre les deux : le comportement individuel comme condition politique", kw: ['mandate', 'vote', 'accept', 'legitim', 'norm', 'pressure'] },
    { q: "Éviter le faux équilibre : trancher à la fin", kw: ['ultimately', 'however', 'the decisive', 'primarily', 'more effective'] }
  ],
  lexique: [
    ['to move the needle', "faire bouger les choses de façon mesurable"],
    ['a drop in the ocean', "une goutte d'eau"],
    ['to shift the burden onto consumers', "faire porter la charge aux consommateurs"],
    ['regulatory certainty', "la sécurité réglementaire (ce qui décide les investissements)"],
    ['behavioural change alone will not suffice', "le changement de comportement seul ne suffira pas"],
    ['to build the political constituency for', "construire la base politique nécessaire à"]
  ]
},
{
  id: 'i3', fmt: 'ielts2', th: 'Technologie', diff: 4,
  titre: "L'IA au travail : problème et solutions",
  prompt: "In many countries, artificial intelligence is expected to replace a significant number of jobs within the next decade.\n\nWhat problems will this cause, and what measures could be taken to address them?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
  attendu: [
    { q: "Répondre aux DEUX parties : problèmes ET mesures (sinon plafond band 6)", kw: ['problem', 'measure', 'solution', 'address', 'tackle'] },
    { q: "Un problème qui n'est pas juste « le chômage » (inégalité, transition, statut)", kw: ['inequal', 'transition', 'retrain', 'region', 'status', 'wage'] },
    { q: "Des mesures qui répondent aux problèmes que TU as posés", kw: ['retrain', 'education', 'tax', 'income', 'regulat', 'subsid'] },
    { q: "Nommer qui paie la mesure proposée", kw: ['funded', 'cost', 'pay for', 'budget', 'taxpayer'] },
    { q: "Chaque paragraphe une idée, développée jusqu'au bout", kw: ['for instance', 'for example', 'this means', 'as a result', 'consequently'] }
  ],
  lexique: [
    ['job displacement rather than job destruction', "le déplacement de l'emploi plutôt que sa destruction"],
    ['to reskill the workforce', "requalifier la main-d'œuvre"],
    ['the transition costs fall on', "les coûts de transition retombent sur"],
    ['a safety net worthy of the name', "un filet de sécurité digne de ce nom"],
    ['hollowing out of middle-income work', "l'évidement des emplois intermédiaires"],
    ['to lag behind the pace of change', "être à la traîne du rythme du changement"]
  ]
},
{
  id: 'i4', fmt: 'ielts2', th: 'Éducation', diff: 3,
  titre: "Les études supérieures devraient-elles être gratuites ?",
  prompt: "Some people think that university education should be free for all students. Others believe that students should pay for their own studies.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
  attendu: [
    { q: "Les deux vues traitées, chacune sous son meilleur jour", kw: ['free', 'pay', 'fee', 'tuition'] },
    { q: "Qui paie réellement quand c'est « gratuit »", kw: ['taxpayer', 'public', 'fund', 'cost', 'someone'] },
    { q: "L'argument redistributif : qui va à l'université", kw: ['regressive', 'wealth', 'background', 'access', 'inequal', 'better-off'] },
    { q: "Une position propre, pas un résumé des deux camps", kw: ['i believe', 'my view', 'i would', 'i favour', 'i support'] },
    { q: "Un exemple national concret", kw: ['germany', 'scotland', 'denmark', 'france', 'england', 'in 20'] }
  ],
  lexique: [
    ['tuition fees', "les frais de scolarité"],
    ['a regressive transfer', "un transfert régressif (des pauvres vers les aisés)"],
    ['means-tested support', "une aide sous conditions de ressources"],
    ['to graduate saddled with debt', "sortir diplômé et lesté de dettes"],
    ['free at the point of use', "gratuit au moment de l'usage"],
    ['the opportunity cost of three years', "le coût d'opportunité de trois années"]
  ]
},
{
  id: 'i5', fmt: 'ielts2', th: 'Société', diff: 4,
  titre: "Le tourisme détruit-il ce qu'il vient voir ?",
  prompt: "International tourism brings money to a region, but many argue that it destroys the culture and environment it depends on.\n\nDo the advantages outweigh the disadvantages?\n\nWrite at least 250 words.",
  attendu: [
    { q: "Peser explicitement : « outweigh » demande une balance, pas une liste", kw: ['outweigh', 'balance', 'on balance', 'greater', 'exceed'] },
    { q: "Le paradoxe central : le tourisme détruit sa propre ressource", kw: ['destroy', 'depend', 'own resource', 'self-defeating', 'kill', 'undermin'] },
    { q: "Distinguer les types de tourisme au lieu de généraliser", kw: ['mass tourism', 'depend', 'scale', 'seasonal', 'type', 'volume'] },
    { q: "Qui capte l'argent (fuite des revenus hors du territoire)", kw: ['leak', 'foreign', 'local', 'profit', 'chain', 'stay in'] },
    { q: "Une condition sous laquelle ta réponse changerait", kw: ['provided', 'as long as', 'depend', 'if', 'unless', 'condition'] }
  ],
  lexique: [
    ['to price locals out of their own city', "chasser les habitants de leur propre ville par les prix"],
    ['revenue leakage', "la fuite des revenus (hors de l'économie locale)"],
    ['carrying capacity', "la capacité de charge (ce qu'un lieu peut absorber)"],
    ['a commodified version of a culture', "une version marchandisée d'une culture"],
    ['seasonal precarity', "la précarité saisonnière"],
    ['the goose that lays the golden egg', "la poule aux œufs d'or"]
  ]
},
{
  id: 'i6', fmt: 'ielts2', th: 'Santé', diff: 3,
  titre: "Prévention ou traitement : où mettre l'argent public ?",
  prompt: "Some governments spend most of their health budget on treating illness. Others argue that money would be better spent on preventing it.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
  attendu: [
    { q: "Les deux vues, avec leur meilleure raison chacune", kw: ['treat', 'prevent', 'budget', 'spend'] },
    { q: "Le problème politique de la prévention : les bénéfices arrivent trop tard", kw: ['long term', 'invisible', 'electoral', 'term of office', 'delay', 'future'] },
    { q: "Un chiffre ou un ordre de grandeur pour ancrer", kw: ['percent', '%', 'billion', 'per capita', 'cost of'] },
    { q: "Ta position, avec un critère d'arbitrage explicite", kw: ['criterion', 'i would', 'my view', 'priority', 'allocate'] },
    { q: "L'objection éthique : on ne refuse pas un soin à qui est malade", kw: ['refuse', 'deny', 'already ill', 'duty', 'ethic', 'obligation'] }
  ],
  lexique: [
    ['an ounce of prevention', "mieux vaut prévenir que guérir"],
    ['to bear fruit only decades later', "ne porter ses fruits que des décennies plus tard"],
    ['the identifiable victim effect', "l'effet de la victime identifiable"],
    ['upstream intervention', "l'intervention en amont"],
    ['to ration care', "rationner les soins"],
    ['a false dichotomy', "une fausse alternative"]
  ]
},
{
  id: 'i7', fmt: 'ielts2', th: 'Ville', diff: 3,
  titre: "Faut-il construire du logement ou protéger le paysage ?",
  prompt: "Many countries face a housing shortage. Some believe new homes should be built wherever they are needed, even on protected land. Others argue that countryside must be preserved at all costs.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
  attendu: [
    { q: "Les deux vues traitées sérieusement", kw: ['build', 'preserve', 'countryside', 'housing', 'protect'] },
    { q: "Qui subit la pénurie de logement (générationnel, géographique)", kw: ['young', 'generation', 'renter', 'afford', 'priced out'] },
    { q: "L'alternative que les deux camps ignorent : densifier l'existant", kw: ['densi', 'brownfield', 'existing', 'vacant', 'convert', 'infill'] },
    { q: "Un critère de décision plutôt qu'un compromis mou", kw: ['criterion', 'test', 'where', 'only if', 'provided'] },
    { q: "Position tranchée en conclusion", kw: ['in conclusion', 'overall', 'i would', 'ultimately'] }
  ],
  lexique: [
    ['green belt', "la ceinture verte (terrain protégé autour d'une ville)"],
    ['brownfield sites', "les friches industrielles"],
    ['to be priced out of the market', "être exclu du marché par les prix"],
    ['NIMBY opposition', "l'opposition « pas dans mon jardin »"],
    ['urban sprawl', "l'étalement urbain"],
    ['a generational injustice', "une injustice entre générations"]
  ]
},
{
  id: 'i8', fmt: 'ielts2', th: 'Médias', diff: 4,
  titre: "Faut-il rendre les réseaux sociaux responsables de ce qu'ils hébergent ?",
  prompt: "Social media companies argue that they are platforms, not publishers, and cannot be held responsible for what users post.\n\nTo what extent do you agree that they should be legally liable for the content they host?\n\nWrite at least 250 words.",
  attendu: [
    { q: "Répondre au degré, pas en tout-ou-rien", kw: ['to some extent', 'largely', 'partly', 'in certain', 'qualified', 'depends'] },
    { q: "La distinction plateforme / éditeur, et pourquoi l'algorithme la brouille", kw: ['platform', 'publisher', 'algorithm', 'recommend', 'amplif', 'curat'] },
    { q: "L'effet pervers de la responsabilité totale : la sur-censure", kw: ['over-remov', 'censor', 'chilling', 'err on the side', 'delete', 'risk-averse'] },
    { q: "Un régime concret (seuils, délais, transparence)", kw: ['notice', 'within', 'hours', 'transparen', 'audit', 'threshold', 'size'] },
    { q: "Un exemple de législation réelle", kw: ['dsa', 'digital services', 'section 230', 'eu ', 'germany', 'law'] }
  ],
  lexique: [
    ['to be held liable for', "être tenu responsable de"],
    ['a chilling effect on speech', "un effet dissuasif sur la parole"],
    ['algorithmic amplification', "l'amplification algorithmique"],
    ['safe harbour provisions', "les clauses d'exonération de responsabilité"],
    ['to err on the side of removal', "pencher par prudence vers la suppression"],
    ['the distinction no longer holds', "la distinction ne tient plus"]
  ]
},

/* ---------- RAPPORT DE DONNÉES (IELTS Task 1) ----------
   Les données sont fournies en tableau texte : c'est la même
   épreuve, sans image à charger. Le piège reste le même —
   décrire sans expliquer, et sélectionner au lieu de tout lister. */
{
  id: 'd1', fmt: 'ielts1', th: 'Économie', diff: 3,
  titre: "Où va l'argent des ménages (4 pays)",
  prompt: "The table below shows the percentage of household spending devoted to four categories in four countries in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.\n\n                 Housing  Food  Transport  Leisure\nFrance             27%    16%     14%        9%\nJapan              24%    23%     11%        7%\nBrazil             19%    28%     16%        5%\nNorway             31%    12%     13%       12%",
  attendu: [
    { q: "Un OVERVIEW en 2e position, SANS chiffres — c'est lui qui décide la bande", kw: ['overall', 'in general', 'broadly', 'the most striking', 'it is clear'] },
    { q: "Le trait saillant : logement et alimentation varient en sens inverse", kw: ['while', 'whereas', 'inverse', 'opposite', 'conversely', 'by contrast'] },
    { q: "Comparer explicitement (pas quatre paragraphes juxtaposés)", kw: ['than', 'compared', 'twice', 'more than', 'less than', 'highest', 'lowest'] },
    { q: "AUCUNE explication ni cause inventée (« because incomes are lower » = hors sujet)", kw: [] },
    { q: "Chiffres choisis, pas tous recopiés", kw: ['%', 'percent'] }
  ],
  lexique: [
    ['to account for a quarter of', "représenter un quart de"],
    ['the figure stood at 27%', "le chiffre s'établissait à 27 %"],
    ['at the other end of the scale', "à l'autre extrémité"],
    ['roughly twice as much as', "environ deux fois plus que"],
    ['the pattern is reversed in Brazil', "la tendance s'inverse au Brésil"],
    ['a comparable proportion', "une proportion comparable"]
  ]
},
{
  id: 'd2', fmt: 'ielts1', th: 'Environnement', diff: 4,
  titre: "Deux sources d'électricité, vingt ans",
  prompt: "The chart below shows the share of electricity generated from coal and from wind in one country between 2005 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.\n\nYear    Coal    Wind\n2005    41%      1%\n2010    38%      4%\n2015    23%     11%\n2020     6%     24%\n2025     2%     31%",
  attendu: [
    { q: "Overview : le croisement des deux courbes est LE fait à annoncer", kw: ['overtook', 'overtake', 'crossed', 'reversal', 'swapped', 'exceeded', 'surpass'] },
    { q: "Situer le croisement (entre 2015 et 2020)", kw: ['2015', '2020', 'between', 'by 20'] },
    { q: "Décrire le RYTHME, pas seulement les niveaux", kw: ['sharply', 'steadily', 'gradual', 'rapid', 'slow', 'accelerat', 'plateau'] },
    { q: "Temps du passé tenus (prétérit, pas de présent)", kw: ['fell', 'rose', 'increased', 'declined', 'dropped', 'grew'] },
    { q: "Aucune cause avancée (pas de « thanks to government policy »)", kw: [] }
  ],
  lexique: [
    ['to fall steadily over the period', "reculer régulièrement sur la période"],
    ['a sharp decline', "une chute nette"],
    ['wind overtook coal', "l'éolien a dépassé le charbon"],
    ['to level off', "se stabiliser"],
    ['a fifteenfold increase', "une multiplication par quinze"],
    ['by the end of the period', "à la fin de la période"]
  ]
},
{
  id: 'd3', fmt: 'ielts1', th: 'Société', diff: 3,
  titre: "Qui vit seul, et à quel âge",
  prompt: "The table below shows the percentage of people living alone by age group in one country, in 1995 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.\n\nAge group    1995    2025\n18-29         8%      21%\n30-44        11%      19%\n45-64        14%      17%\n65+          34%      31%",
  attendu: [
    { q: "Overview : tout monte sauf les 65+, qui reculent légèrement", kw: ['except', 'apart from', 'all age', 'with the exception', 'only group'] },
    { q: "La hausse la plus forte est chez les jeunes (presque triplé)", kw: ['18-29', 'young', 'tripl', 'nearly three', 'sharpest', 'largest increase'] },
    { q: "Comparer les deux dates, pas les décrire l'une après l'autre", kw: ['compared with', 'over the period', 'by 2025', 'in 1995', 'whereas'] },
    { q: "Points de pourcentage et pourcentages distingués", kw: ['percentage point', 'points', 'from', 'to'] },
    { q: "Aucune explication sociologique", kw: [] }
  ],
  lexique: [
    ['to live alone', "vivre seul"],
    ['a rise of thirteen percentage points', "une hausse de treize points de pourcentage"],
    ['the sole age group to record a fall', "le seul groupe d'âge à enregistrer une baisse"],
    ['the gap narrowed considerably', "l'écart s'est nettement resserré"],
    ['marginally lower', "légèrement inférieur"],
    ['in both years surveyed', "lors des deux années observées"]
  ]
},
{
  id: 'd4', fmt: 'ielts1', th: 'Éducation', diff: 4,
  titre: "Un processus : comment un article scientifique est publié",
  prompt: "The diagram below describes the process by which a scientific article is published.\n\nSummarise the information by selecting and reporting the main features.\n\nWrite at least 150 words.\n\nStages:\n1. Authors submit manuscript to a journal\n2. Editor screens it — about 40% are rejected here without review\n3. Surviving manuscripts are sent to 2 or 3 external reviewers\n4. Reviewers recommend: accept / revise / reject\n5. If revision is required, authors resubmit (this loop may occur two or three times)\n6. Accepted articles are copy-edited, then published online\n7. Rejected authors usually submit to a different journal, returning to stage 1",
  attendu: [
    { q: "Overview : le processus est cyclique, pas linéaire", kw: ['cycl', 'loop', 'repeat', 'return', 'not linear', 'iterative', 'stages'] },
    { q: "Passif employé tout du long (c'est le temps du process)", kw: ['is sent', 'are sent', 'is submitted', 'are rejected', 'is reviewed', 'are published'] },
    { q: "Marqueurs de séquence variés (pas « then… then… then »)", kw: ['subsequently', 'once', 'at this stage', 'following', 'thereafter', 'prior to'] },
    { q: "Les deux points de sortie du circuit signalés", kw: ['reject', 'accept', 'either', 'exit', 'leave'] },
    { q: "Le chiffre fourni (40%) utilisé", kw: ['40', 'forty'] }
  ],
  lexique: [
    ['the manuscript is submitted to', "le manuscrit est soumis à"],
    ['at this point', "à ce stade"],
    ['a further round of revision', "un nouveau cycle de révision"],
    ['the cycle begins again', "le cycle recommence"],
    ['once approval has been granted', "une fois l'accord obtenu"],
    ['the final stage involves', "la dernière étape consiste à"]
  ]
},
{
  id: 'd5', fmt: 'ielts1', th: 'Travail', diff: 3,
  titre: "Trois secteurs, deux générations",
  prompt: "The chart below shows the proportion of the workforce employed in three sectors in one country in 1970, 1995 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.\n\n              1970    1995    2025\nAgriculture    12%      5%      2%\nIndustry       39%     27%     15%\nServices       49%     68%     83%",
  attendu: [
    { q: "Overview : bascule complète vers les services, les deux autres s'effondrent", kw: ['shift', 'dominat', 'declin', 'all three', 'overall', 'transformation'] },
    { q: "L'industrie perd plus en valeur absolue, l'agriculture plus en proportion", kw: ['proportion', 'relative', 'absolute', 'points', 'sixfold', 'by contrast'] },
    { q: "Comparaisons entre secteurs, pas trois descriptions séparées", kw: ['whereas', 'while', 'than', 'compared'] },
    { q: "Vocabulaire de tendance varié", kw: ['rose', 'fell', 'declined', 'climbed', 'shrank', 'contracted', 'expanded'] },
    { q: "Aucune cause invoquée", kw: [] }
  ],
  lexique: [
    ['the workforce shifted decisively towards', "la main-d'œuvre a basculé nettement vers"],
    ['to shrink by more than half', "se réduire de plus de moitié"],
    ['services came to dominate', "les services en sont venus à dominer"],
    ['a sixfold decrease', "une division par six"],
    ['the trend was consistent across the period', "la tendance est restée constante sur la période"],
    ['accounted for four in five workers', "représentait quatre travailleurs sur cinq"]
  ]
},

/* ---------- DISCUSSION ACADÉMIQUE (TOEFL iBT) ----------
   10 minutes, 100+ mots. Format court : parfait pour les jours
   où tu n'as pas 45 minutes. La difficulté est de dialoguer
   vraiment avec les deux étudiants, pas de les ignorer. */
{
  id: 't1', fmt: 'toefl', th: 'Économie', diff: 3,
  titre: "Les entreprises doivent-elles publier tous les salaires ?",
  prompt: "**Professor Hayes:** This week we are looking at pay transparency. Some countries now require firms to publish salary ranges in job adverts, and a few companies publish every individual salary. Supporters say secrecy protects unfairness; critics say transparency flattens pay and drives away talent. Before Thursday, tell me: should firms be required to publish individual salaries? Why or why not?\n\n**Marcus:** Absolutely they should. Pay gaps survive because nobody can see them. The moment my company published its bands, three of my colleagues discovered they were underpaid and it was fixed within a month.\n\n**Priya:** I'd stop at ranges. Full transparency turns every salary into a public verdict on your worth. People compare obsessively, morale collapses, and managers end up paying for peace rather than for performance.",
  attendu: [
    { q: "Position dès la première phrase (10 min : pas d'introduction)", kw: ['i think', 'i believe', 'i side', 'i agree', 'i disagree', 'in my view'] },
    { q: "Rebondir nommément sur Marcus ou Priya", kw: ['marcus', 'priya'] },
    { q: "Apporter quelque chose que ni l'un ni l'autre n'a dit", kw: ['however', 'but', 'what neither', 'a further', 'moreover', 'in addition'] },
    { q: "Un exemple ou un mécanisme concret", kw: ['for instance', 'for example', 'in practice', 'when', 'my own'] },
    { q: "Distinguer fourchettes et salaires individuels (le vrai clivage)", kw: ['range', 'band', 'individual', 'distinction', 'difference between'] }
  ],
  lexique: [
    ['I would qualify Priya\'s point', "je nuancerais ce que dit Priya"],
    ['salary bands', "les fourchettes de salaire"],
    ['to pay for peace rather than performance', "payer pour avoir la paix plutôt que la performance"],
    ['the distinction Marcus glosses over', "la distinction que Marcus escamote"],
    ['transparency without context invites resentment', "la transparence sans contexte nourrit le ressentiment"],
    ['where I part company with', "là où je me sépare de"]
  ]
},
{
  id: 't2', fmt: 'toefl', th: 'Éducation', diff: 3,
  titre: "Faut-il noter la participation en cours ?",
  prompt: "**Professor Alvarez:** Many of my colleagues award up to 20% of the final grade for class participation. They argue it rewards engagement; others say it simply rewards confidence. For Thursday: should participation be graded? If so, how would you grade it fairly?\n\n**Deniz:** Grade it. University is training for professional life, where saying nothing in a meeting has consequences. If we don't grade it, quiet students never learn to speak.\n\n**Hannah:** It punishes personality. I take detailed notes, I read everything, and I contribute far more in writing than the three people who talk over everyone else. Grading participation just grades extroversion.",
  attendu: [
    { q: "Prendre position immédiatement", kw: ['i think', 'i believe', 'should', 'should not', 'i agree', 'i disagree'] },
    { q: "Répondre à la seconde question : COMMENT noter équitablement", kw: ['how', 'criteri', 'rubric', 'measure', 'define', 'count', 'written'] },
    { q: "Traiter l'objection d'Hannah (extraversion ≠ compétence)", kw: ['hannah', 'extrovert', 'introvert', 'personality', 'quiet', 'shy'] },
    { q: "Redéfinir la participation plutôt que de la défendre ou l'attaquer en bloc", kw: ['redefine', 'broaden', 'includ', 'forum', 'written', 'question', 'preparation'] },
    { q: "Syntaxe variée malgré la longueur courte", kw: ['whereas', 'although', 'rather than', 'not only', 'if'] }
  ],
  lexique: [
    ['to reward confidence rather than competence', "récompenser l'assurance plutôt que la compétence"],
    ['Hannah has a point, but it applies only if', "Hannah a raison, mais seulement si"],
    ['a defensible rubric', "une grille défendable"],
    ['to conflate two different things', "confondre deux choses différentes"],
    ['participation, properly defined, includes', "la participation, bien définie, inclut"],
    ['this is a design problem, not a reason to abandon the idea', "c'est un problème de conception, pas une raison d'abandonner"]
  ]
},
{
  id: 't3', fmt: 'toefl', th: 'Technologie', diff: 4,
  titre: "Les villes doivent-elles utiliser la reconnaissance faciale ?",
  prompt: "**Professor Okafor:** Several cities have installed facial recognition in public spaces; others have banned it outright. The trade-off is usually framed as security against privacy, but I suspect that framing is too simple. For Thursday: should a city be permitted to use facial recognition in public spaces, and under what conditions?\n\n**Léa:** No, and the conditions don't matter. Surveillance infrastructure outlives the government that installs it. You cannot consent on behalf of every future citizen who will be watched by a system you approved for one purpose.\n\n**Sam:** That's an argument against all infrastructure. Cameras already exist. Facial recognition just makes them useful. If it finds a missing child in an hour instead of three days, the privacy cost is worth paying.",
  attendu: [
    { q: "Répondre aux DEUX parties : oui/non ET sous quelles conditions", kw: ['condition', 'provided', 'only if', 'as long as', 'subject to', 'unless'] },
    { q: "Attaquer le cadrage sécurité/vie privée, comme le professeur y invite", kw: ['framing', 'too simple', 'not just', 'third', 'reframe', 'beyond'] },
    { q: "Traiter l'argument de Léa sur la permanence de l'infrastructure", kw: ['léa', 'lea', 'outlive', 'permanent', 'future', 'irreversible', 'ratchet'] },
    { q: "Répondre au cas de l'enfant disparu sans l'esquiver", kw: ['sam', 'child', 'missing', 'emergency', 'narrow', 'exception'] },
    { q: "Une condition opérationnelle, pas un principe vague", kw: ['warrant', 'judge', 'audit', 'delete', 'time limit', 'oversight', 'sunset'] }
  ],
  lexique: [
    ['a ratchet effect', "un effet de cliquet (ça ne revient jamais en arrière)"],
    ['function creep', "la dérive d'usage (l'outil sert bientôt à autre chose)"],
    ['Sam\'s example proves less than it seems', "l'exemple de Sam prouve moins qu'il n'y paraît"],
    ['subject to judicial authorisation', "sous réserve d'une autorisation judiciaire"],
    ['a sunset clause', "une clause d'extinction automatique"],
    ['the burden of proof should sit with the city', "la charge de la preuve devrait peser sur la ville"]
  ]
},
{
  id: 't4', fmt: 'toefl', th: 'Travail', diff: 3,
  titre: "La semaine de quatre jours",
  prompt: "**Professor Lindqvist:** Trials of the four-day week report unchanged output and happier staff. Sceptics reply that trials attract firms already suited to the change. For Thursday: would a four-day week work across an economy, or only in certain sectors?\n\n**Tomas:** Only in certain sectors. A consultancy can compress its week. A hospital cannot. The trials we celebrate are almost all knowledge work, where output was never measured in hours anyway.\n\n**Nadia:** That's exactly why it should spread. If knowledge workers can do it, the burden of proof shifts to everyone else. Most \"we can't\" claims turn out to mean \"we haven't tried\".",
  attendu: [
    { q: "Répondre à la question comparative (partout ou seulement certains secteurs)", kw: ['sector', 'across', 'economy', 'some', 'certain', 'all'] },
    { q: "Le biais de sélection des essais — le point que le prof souligne", kw: ['selection', 'bias', 'self-select', 'already suited', 'sample', 'volunteer'] },
    { q: "Traiter le cas des secteurs à effectif contraint (hôpital, usine)", kw: ['hospital', 'nurse', 'factory', 'shift', 'staff', 'headcount', 'cover'] },
    { q: "Répondre à Nadia sur la charge de la preuve", kw: ['nadia', 'burden of proof', 'haven\'t tried', 'shift'] },
    { q: "Une distinction opératoire (temps mesuré vs résultat mesuré)", kw: ['output', 'hours', 'measur', 'presence', 'result', 'productivity'] }
  ],
  lexique: [
    ['output rather than hours', "le résultat plutôt que les heures"],
    ['a self-selecting sample', "un échantillon auto-sélectionné"],
    ['headcount-constrained services', "les services contraints par les effectifs"],
    ['Nadia overstates the case', "Nadia force le trait"],
    ['what generalises and what does not', "ce qui se généralise et ce qui ne se généralise pas"],
    ['the evidence is promising but thin', "les données sont prometteuses mais minces"]
  ]
},
{
  id: 't5', fmt: 'toefl', th: 'Environnement', diff: 3,
  titre: "Taxer la viande ?",
  prompt: "**Professor Ruiz:** Livestock accounts for a substantial share of agricultural emissions. Some economists propose taxing meat as we tax tobacco. For Thursday: is a meat tax justified, and if so, how should it be designed to avoid hitting the poorest hardest?\n\n**Yusuf:** It's justified but badly aimed. A flat tax on meat is regressive: the family buying cheap mince pays the same rate as the person buying dry-aged steak. Tax the emissions, not the product.\n\n**Elena:** Regressivity is a design problem, not an objection. Return the revenue as a per-person rebate and the poorest end up better off in cash terms while eating less meat.",
  attendu: [
    { q: "Répondre aux deux parties : justifié ? et comment le concevoir ?", kw: ['justified', 'design', 'how', 'should be'] },
    { q: "Le mécanisme de redistribution (rebate / dividende)", kw: ['rebate', 'dividend', 'return the revenue', 'redistribut', 'refund', 'lump sum'] },
    { q: "Taxer l'émission plutôt que le produit — la distinction de Yusuf", kw: ['yusuf', 'emission', 'product', 'per kilo', 'carbon content', 'differentiat'] },
    { q: "Un contre-effet possible (substitution, frontière, transformés)", kw: ['substitut', 'import', 'cross-border', 'processed', 'unintended'] },
    { q: "Position nette malgré la complexité", kw: ['i would', 'i support', 'i oppose', 'on balance', 'my view'] }
  ],
  lexique: [
    ['a Pigouvian tax', "une taxe pigouvienne (qui internalise le coût)"],
    ['revenue-neutral by design', "conçue pour être neutre budgétairement"],
    ['a regressive burden', "une charge régressive"],
    ['to tax the externality, not the product', "taxer l'externalité, pas le produit"],
    ['Elena\'s rebate answers the objection only if', "le remboursement d'Elena ne répond à l'objection que si"],
    ['administratively demanding', "lourd à administrer"]
  ]
},
{
  id: 't6', fmt: 'toefl', th: 'Société', diff: 4,
  titre: "Le vote devrait-il être obligatoire ?",
  prompt: "**Professor Bennett:** Around two dozen countries make voting compulsory. Turnout rises sharply; whether the quality of the outcome rises is contested. For Thursday: should voting be compulsory in a democracy?\n\n**Rafael:** Yes. Voluntary voting doesn't measure the will of the people, it measures who had a free Tuesday. Compulsory voting removes the whole machinery of voter suppression at a stroke.\n\n**Ingrid:** Forcing an uninformed citizen to the ballot box doesn't produce a better decision, it produces a random one. And a right you can be fined for not exercising is not a right.",
  attendu: [
    { q: "Position claire sur une question de principe", kw: ['should', 'i believe', 'i think', 'yes', 'no', 'in my view'] },
    { q: "L'argument d'Ingrid sur le droit / l'obligation, traité de front", kw: ['ingrid', 'right', 'obligation', 'duty', 'fine', 'coerc', 'freedom'] },
    { q: "Distinguer participation et qualité de la décision", kw: ['turnout', 'quality', 'informed', 'random', 'better decision', 'outcome'] },
    { q: "Un fait empirique (Australie, Belgique…) plutôt qu'une intuition", kw: ['australia', 'belgium', 'brazil', 'evidence', 'studies', 'turnout rose'] },
    { q: "Une position nuancée mais tranchée (ex. obligation de se présenter, pas de voter)", kw: ['blank', 'abstain', 'attend', 'turn up', 'option', 'none of the above'] }
  ],
  lexique: [
    ['compulsory voting', "le vote obligatoire"],
    ['voter suppression', "l'entrave à l'accès au vote"],
    ['Ingrid\'s objection assumes that', "l'objection d'Ingrid suppose que"],
    ['a duty rather than a right', "un devoir plutôt qu'un droit"],
    ['the right to spoil a ballot', "le droit de voter blanc ou nul"],
    ['turnout is a means, not an end', "la participation est un moyen, pas une fin"]
  ]
},
{
  id: 't7', fmt: 'toefl', th: 'Finance', diff: 4,
  titre: "Faut-il apprendre la finance à l'école ?",
  prompt: "**Professor Whitfield:** Financial literacy programmes are politically popular and, in the trials we have, unusually ineffective: the effect on behaviour decays within months. For Thursday: given that evidence, should schools still teach personal finance?\n\n**Chidi:** Yes, but not as a subject you sit through at fifteen and forget. Teach it at the moment of decision — when someone takes a first loan, signs a first lease. Timing is the whole intervention.\n\n**Mira:** The decay finding tells us something harsher. People don't make bad financial decisions because they lack information; they make them because they lack money. Education is being asked to fix a distributional problem.",
  attendu: [
    { q: "Partir de la donnée fournie (l'effet s'estompe) au lieu de l'ignorer", kw: ['decay', 'evidence', 'ineffective', 'fade', 'months', 'trials'] },
    { q: "L'argument du moment d'enseignement (just-in-time)", kw: ['chidi', 'timing', 'moment', 'just-in-time', 'when they', 'decision'] },
    { q: "L'objection distributive de Mira, prise au sérieux", kw: ['mira', 'money', 'distribution', 'poverty', 'income', 'structural'] },
    { q: "Ne pas conclure « il faut les deux » sans arbitrer", kw: ['however', 'but', 'primarily', 'rather', 'more'] },
    { q: "Une proposition testable", kw: ['trial', 'test', 'measure', 'pilot', 'evaluate', 'would show'] }
  ],
  lexique: [
    ['financial literacy', "l'éducation financière"],
    ['the effect decays within months', "l'effet s'estompe en quelques mois"],
    ['just-in-time education', "l'enseignement au moment utile"],
    ['Mira\'s point cuts deeper', "le point de Mira porte plus loin"],
    ['to ask education to fix a structural problem', "demander à l'école de régler un problème structurel"],
    ['a testable claim', "une affirmation testable"]
  ]
},

/* ---------- RAPPORT / PROPOSITION (Cambridge C1 Part 2) ---------- */
{
  id: 'r1', fmt: 'report', th: 'Travail', diff: 3,
  titre: "Rapport : pourquoi les stagiaires partent",
  prompt: "You work for a company where 40% of interns leave before the end of their placement. The Head of Human Resources has asked you to write a report describing the reasons for this, assessing their relative importance, and recommending what the company should do.\n\nWrite your report (220-260 words). Use section headings.",
  attendu: [
    { q: "Titres de section — l'absence de titres coûte le point d'Organisation", kw: ['introduction', 'findings', 'recommendation', 'conclusion', 'background', 'reasons'] },
    { q: "Dire sur quoi le rapport s'appuie (entretiens, données, observation)", kw: ['interview', 'survey', 'data', 'based on', 'consulted', 'spoke to'] },
    { q: "Hiérarchiser les causes (« assessing their relative importance »)", kw: ['most', 'principal', 'chief', 'above all', 'less significant', 'primary', 'foremost'] },
    { q: "Recommandations à l'impersonnel formel", kw: ['it is recommended', 'should be', 'we recommend', 'ought to be', 'would be advisable'] },
    { q: "Registre impersonnel tenu : pas de « I think », pas de contractions", kw: [] }
  ],
  lexique: [
    ['This report sets out to', "Ce rapport a pour objet de"],
    ['The findings are based on interviews with', "Les constats reposent sur des entretiens avec"],
    ['By far the most frequently cited reason was', "La raison de loin la plus souvent citée était"],
    ['It is recommended that the company review', "Il est recommandé que l'entreprise révise"],
    ['a marginal factor by comparison', "un facteur marginal en comparaison"],
    ['Should these measures be adopted', "Si ces mesures étaient adoptées"]
  ]
},
{
  id: 'r2', fmt: 'report', th: 'Éducation', diff: 3,
  titre: "Proposition : à quoi servira la salle vide",
  prompt: "Your student association has been given a large empty room and a small budget. The committee has asked you to write a proposal explaining what the space should be used for, why that use meets students' needs better than the alternatives, and what the money should be spent on.\n\nWrite your proposal (220-260 words). Use section headings.",
  attendu: [
    { q: "Titres de section adaptés à une proposition", kw: ['introduction', 'purpose', 'proposal', 'benefits', 'costs', 'recommendation', 'background'] },
    { q: "Tourné vers le FUTUR (une proposition, pas un rapport de constat)", kw: ['would', 'will', 'could', 'propose', 'suggest', 'plan'] },
    { q: "Comparer explicitement aux alternatives écartées", kw: ['alternative', 'rather than', 'instead of', 'other option', 'was considered', 'compared'] },
    { q: "Chiffrer la dépense au lieu de dire « spend wisely »", kw: ['budget', 'cost', '€', '£', 'euro', 'approximately', 'allocat'] },
    { q: "Bénéfice mesurable annoncé", kw: ['would allow', 'benefit', 'students would', 'result in', 'enable'] }
  ],
  lexique: [
    ['The purpose of this proposal is to', "L'objet de cette proposition est de"],
    ['The chief advantage of this option is that', "Le principal avantage de cette option est que"],
    ['Were the room used as a study space', "Si la salle servait d'espace de travail"],
    ['a modest outlay', "une dépense modeste"],
    ['This would address a need that is currently unmet', "Cela répondrait à un besoin aujourd'hui non couvert"],
    ['I would therefore urge the committee to', "J'invite donc le comité à"]
  ]
},
{
  id: 'r3', fmt: 'report', th: 'Ville', diff: 4,
  titre: "Rapport : la navette du campus est vide",
  prompt: "The shuttle bus between your campus and the town centre runs half-empty and the university is considering cancelling it. You have been asked to write a report explaining why usage is low, evaluating whether cancellation is the right response, and recommending an alternative.\n\nWrite your report (220-260 words). Use section headings.",
  attendu: [
    { q: "Sections titrées et distinctes", kw: ['introduction', 'findings', 'analysis', 'recommendation', 'conclusion'] },
    { q: "Séparer le constat (pourquoi peu d'usagers) de l'évaluation (faut-il supprimer)", kw: ['however', 'nevertheless', 'while', 'although', 'that said'] },
    { q: "Une cause non évidente (horaires, information, arrêt mal placé)", kw: ['timetable', 'frequency', 'stop', 'aware', 'information', 'timing', 'schedule'] },
    { q: "Évaluer qui perdrait le service (les usagers captifs)", kw: ['rely', 'depend', 'no alternative', 'evening', 'disab', 'without a car'] },
    { q: "Une alternative précise et chiffrable", kw: ['reduce', 'reroute', 'on demand', 'combine', 'trial', 'peak', 'instead'] }
  ],
  lexique: [
    ['Usage has fallen steadily since', "La fréquentation baisse régulièrement depuis"],
    ['A number of students reported that', "Plusieurs étudiants ont indiqué que"],
    ['Cancellation would disproportionately affect', "La suppression pénaliserait de façon disproportionnée"],
    ['a demand-responsive service', "un service à la demande"],
    ['It would be premature to withdraw the service before', "Il serait prématuré de supprimer le service avant de"],
    ['on a trial basis for one term', "à titre expérimental pendant un semestre"]
  ]
},
{
  id: 'r4', fmt: 'report', th: 'Économie', diff: 4,
  titre: "Rapport : faut-il ouvrir le samedi ?",
  prompt: "You work for a retailer considering opening its stores on Sundays. The board has asked you to write a report setting out the likely effects on revenue and on staff, and recommending whether to proceed.\n\nWrite your report (220-260 words). Use section headings.",
  attendu: [
    { q: "Sections titrées, dont une consacrée au personnel", kw: ['staff', 'revenue', 'introduction', 'recommendation', 'implications', 'findings'] },
    { q: "Distinguer chiffre d'affaires supplémentaire et chiffre d'affaires DÉPLACÉ", kw: ['additional', 'displaced', 'shifted', 'cannibalis', 'net', 'redistribut', 'rather than new'] },
    { q: "Coûts du personnel : majoration, recrutement, rotation", kw: ['premium', 'overtime', 'recruit', 'turnover', 'wage', 'cost'] },
    { q: "Une recommandation ferme, assortie d'une condition", kw: ['recommend', 'provided', 'only if', 'subject to', 'conditional'] },
    { q: "Registre de rapport tenu : impersonnel, aucune contraction", kw: [] }
  ],
  lexique: [
    ['Sunday trading', "l'ouverture dominicale"],
    ['much of this would be displaced rather than additional revenue', "l'essentiel serait du chiffre déplacé, non du chiffre supplémentaire"],
    ['a premium rate for weekend hours', "une majoration pour les heures de week-end"],
    ['staff turnover would be likely to rise', "la rotation du personnel augmenterait probablement"],
    ['The board is advised to proceed only if', "Il est conseillé au conseil de ne procéder que si"],
    ['the margin would be thinner than headline figures suggest', "la marge serait plus mince que ne le laissent croire les chiffres bruts"]
  ]
},

/* ---------- E-MAIL PROFESSIONNEL ----------
   Le barème est impitoyable : chaque demande non traitée
   coûte un point, même si l'anglais est parfait. */
{
  id: 'm1', fmt: 'email', th: 'Stage', diff: 3,
  titre: "Répondre à une offre de stage : trois questions",
  prompt: "You applied for a summer internship. You receive this email. Reply to it (120-180 words), answering **every** point raised.\n\n---\nFrom: Rachel Doyle, Talent Manager\nSubject: Your application — next steps\n\nDear Thomas,\n\nThank you for your application. The team was impressed by your profile and we would like to move forward.\n\nBefore we schedule an interview, could you confirm three things? First, your availability — we need someone from 2 June for a minimum of ten weeks, and I gather your term ends in mid-June. Second, whether you would be able to work from our Lyon office two days a week; the rest is remote. Third, you mention a data project in your application but do not say what your own contribution was — could you clarify?\n\nI look forward to hearing from you.\n\nBest regards,\nRachel",
  attendu: [
    { q: "Traiter les TROIS demandes (dates, Lyon, ta contribution) — une oubliée = point perdu", kw: ['june', 'availab', 'lyon', 'office', 'project', 'contribut'] },
    { q: "Régler franchement le conflit de dates au lieu de l'éluder", kw: ['however', 'unfortunately', 'would be able', 'from', 'propose', 'alternativ', 'mid-june'] },
    { q: "Dire précisément ce que TU as fait sur le projet", kw: ['i built', 'i wrote', 'i designed', 'i was responsible', 'my role', 'i handled'] },
    { q: "Registre professionnel : ni familier, ni ampoulé", kw: ['dear', 'best regards', 'kind regards', 'thank you'] },
    { q: "Une prochaine étape claire", kw: ['available', 'happy to', 'let me know', 'would suit', 'look forward'] }
  ],
  lexique: [
    ['I am available from 18 June at the earliest', "je suis disponible à partir du 18 juin au plus tôt"],
    ['Would it be possible to start a fortnight later?', "serait-il possible de commencer quinze jours plus tard ?"],
    ['I would be glad to be in the Lyon office on', "je serais ravi d'être au bureau de Lyon les"],
    ['My own contribution was to', "ma contribution propre a consisté à"],
    ['Please do let me know if that poses a difficulty', "n'hésitez pas à me dire si cela pose une difficulté"],
    ['I would be happy to talk this through', "je serais heureux d'en discuter"]
  ]
},
{
  id: 'm2', fmt: 'email', th: 'Travail', diff: 4,
  titre: "Annoncer un retard sans se défausser",
  prompt: "You are two days from a deadline and the work will be late. Write an email (120-180 words) to the client, Mr Okonjo, explaining the situation, proposing a solution, and preserving the relationship.\n\nYou must: say clearly that it will be late, give a real reason without blaming a colleague by name, say exactly what he will receive and when, and offer something that reduces the impact on him.",
  attendu: [
    { q: "Dire que c'est en retard dès le début — pas au troisième paragraphe", kw: ['delay', 'late', 'will not be ready', 'unable to deliver', 'behind schedule'] },
    { q: "Une raison réelle sans désigner un coupable", kw: ['because', 'due to', 'the data', 'a supplier', 'an issue', 'we discovered'] },
    { q: "Une date précise, pas « as soon as possible »", kw: ['by ', 'on friday', 'monday', 'tuesday', 'wednesday', 'thursday', 'no later than', 'june', 'july'] },
    { q: "Une mesure qui réduit VRAIMENT l'impact (livraison partielle, priorisation)", kw: ['partial', 'in the meantime', 'first', 'priorit', 'draft', 'interim', 'section'] },
    { q: "Excuse mesurée : une fois, sans se répandre", kw: ['apolog', 'sorry', 'regret'] }
  ],
  lexique: [
    ['I am writing to let you know that', "je vous écris pour vous informer que"],
    ['the report will not be ready by Friday as agreed', "le rapport ne sera pas prêt vendredi comme convenu"],
    ['I would rather tell you now than let the date pass', "je préfère vous le dire maintenant plutôt que laisser passer la date"],
    ['In the meantime, I can send you', "dans l'intervalle, je peux vous envoyer"],
    ['I appreciate that this is inconvenient', "je mesure la gêne que cela occasionne"],
    ['You will have the full document by Tuesday midday', "vous aurez le document complet mardi à midi"]
  ]
},
{
  id: 'm3', fmt: 'email', th: 'Travail', diff: 3,
  titre: "Dire non à son manager, proprement",
  prompt: "Your manager, Sofia, has asked you to take on a third project this month. You are already at capacity and taking it would mean the other two slip. Write an email (120-180 words) declining, without simply refusing.\n\nYou must: show you understand why it matters, set out your current load factually, say what you would have to drop to take it, and offer a genuine alternative.",
  attendu: [
    { q: "Montrer que tu as compris l'enjeu avant de refuser", kw: ['understand', 'i can see', 'important', 'appreciate', 'aware'] },
    { q: "Une charge de travail factuelle, pas « je suis débordé »", kw: ['currently', 'two projects', 'deadline', 'until', 'hours', 'due on'] },
    { q: "Poser l'arbitrage : si je prends ça, je lâche quoi", kw: ['would mean', 'at the expense', 'slip', 'delay', 'trade-off', 'either'] },
    { q: "Une vraie alternative (plus tard, quelqu'un d'autre, un périmètre réduit)", kw: ['alternativ', 'could take', 'after', 'from ', 'part of', 'smaller', 'someone'] },
    { q: "Ferme sans être raide : registre courtois maintenu", kw: ['happy to', 'glad to', 'would be able', 'let me know', 'if you'] }
  ],
  lexique: [
    ['I can see why this one matters', "je comprends pourquoi celui-ci compte"],
    ['As things stand, I am committed to', "en l'état, je suis engagé sur"],
    ['Taking it on would mean X slipping to', "l'accepter ferait glisser X à"],
    ['I would rather flag that now than discover it in three weeks', "je préfère le signaler maintenant que le découvrir dans trois semaines"],
    ['If it can wait until the 14th, I could take it in full', "si cela peut attendre le 14, je peux le prendre entièrement"],
    ['Which of the three would you like me to protect?', "lequel des trois souhaitez-vous que je préserve ?"]
  ]
},
{
  id: 'm4', fmt: 'email', th: 'Stage', diff: 4,
  titre: "Relancer sans supplier",
  prompt: "Three weeks ago you had a final-round interview and were told you would hear back within ten days. You have heard nothing. Write an email (120-180 words) to the recruiter, Daniel Feld.\n\nYou must: remind him who you are without sounding wounded, ask for a decision or a date, mention one genuinely new and relevant piece of information, and leave the door open whatever the answer.",
  attendu: [
    { q: "Rappeler qui tu es en une ligne, sans reproche", kw: ['following', 'we spoke', 'interview', 'on the', 'further to'] },
    { q: "Demander une décision OU une date — une demande claire", kw: ['when', 'a decision', 'timeline', 'update', 'let me know', 'by when'] },
    { q: "Une information nouvelle qui justifie le mail", kw: ['since', 'i have', 'completed', 'received', 'another offer', 'now'] },
    { q: "Aucune plainte, aucune supplication", kw: [] },
    { q: "Porte laissée ouverte, quel que soit le verdict", kw: ['either way', 'whatever', 'in any case', 'should', 'if the answer'] }
  ],
  lexique: [
    ['Further to our conversation on 12 May', "suite à notre échange du 12 mai"],
    ['I wanted to check where things stand', "je souhaitais savoir où en sont les choses"],
    ['Since we spoke, I have', "depuis notre échange, j'ai"],
    ['I have been given a deadline on another offer', "j'ai reçu une échéance sur une autre proposition"],
    ['A date would be as useful to me as a decision', "une date me serait aussi utile qu'une décision"],
    ['Either way, thank you for the time you gave me', "dans tous les cas, merci du temps que vous m'avez accordé"]
  ]
},

/* ---------- CRITIQUE (Cambridge C1 Part 2) ---------- */
{
  id: 'c1', fmt: 'review', th: 'Culture', diff: 3,
  titre: "Critique : une app qui a changé ta façon de travailler",
  prompt: "An international student magazine is running a feature called \"The tool I would not give up\". Write a review of an application or a piece of software you use, describing what it does, evaluating what it does well and badly, and saying who should and should not bother with it.\n\nWrite your review (220-260 words).",
  attendu: [
    { q: "Une accroche qui situe l'objet, sans « I am going to review »", kw: [] },
    { q: "Évaluer, pas seulement décrire : un jugement argumenté", kw: ['works', 'fails', 'strength', 'weakness', 'best', 'worst', 'disappoint', 'impress'] },
    { q: "Au moins un défaut réel — une critique tout élogieuse ne convainc pas", kw: ['however', 'the drawback', 'less successful', 'my only', 'falls short', 'frustrat'] },
    { q: "Un détail précis et concret plutôt que des adjectifs", kw: ['for instance', 'for example', 'when i', 'takes', 'seconds', 'the moment'] },
    { q: "Recommandation ciblée : pour qui, et pour qui pas", kw: ['if you', 'anyone who', 'not for', 'would suit', 'avoid it if', 'recommend'] }
  ],
  lexique: [
    ['what sets it apart is', "ce qui la distingue, c'est"],
    ['it does one thing, and does it exceptionally well', "elle fait une chose, et la fait remarquablement bien"],
    ['my one reservation concerns', "ma seule réserve porte sur"],
    ['it repays the effort of learning it', "elle récompense l'effort qu'on met à l'apprendre"],
    ['anyone expecting X will be disappointed', "quiconque en attend X sera déçu"],
    ['worth every minute of the setup', "elle vaut chaque minute de configuration"]
  ]
},
{
  id: 'c2', fmt: 'review', th: 'Culture', diff: 4,
  titre: "Critique : un livre qui t'a fait changer d'avis",
  prompt: "A website is compiling reviews under the title \"The book that changed my mind\". Write a review of a book that made you revise an opinion you held, explaining what you thought before, how the book argued against it, and whether you would recommend it to someone who currently disagrees.\n\nWrite your review (220-260 words).",
  attendu: [
    { q: "Dire ce que tu pensais AVANT — sans ça, le sujet n'est pas traité", kw: ['i used to', 'before', 'i had assumed', 'i believed', 'previously', 'i thought'] },
    { q: "Comment le livre argumente (le mécanisme, pas juste la conclusion)", kw: ['argues', 'shows', 'demonstrat', 'evidence', 'case', 'chapter', 'by '] },
    { q: "Dire si le changement d'avis a tenu — l'honnêteté est notée ici", kw: ['still', 'since', 'has held', 'i now', 'remains', 'partly'] },
    { q: "S'adresser au lecteur qui n'est PAS d'accord", kw: ['if you disagree', 'sceptic', 'unconvinced', 'opponent', 'even if you'] },
    { q: "Style personnel assumé — c'est le format qui l'autorise", kw: [] }
  ],
  lexique: [
    ['I came to it convinced that', "je l'ai abordé convaincu que"],
    ['the argument crept up on me', "l'argument m'a gagné insensiblement"],
    ['it does not bully the reader into agreement', "il ne force pas le lecteur à céder"],
    ['what changed my mind was not X but Y', "ce qui m'a fait changer d'avis, ce n'est pas X mais Y"],
    ['the case is made patiently, chapter by chapter', "la démonstration se construit patiemment, chapitre après chapitre"],
    ['read it precisely if you expect to disagree', "lisez-le justement si vous comptez être en désaccord"]
  ]
},
{
  id: 'c3', fmt: 'review', th: 'Ville', diff: 3,
  titre: "Critique : un lieu que les guides recommandent à tort",
  prompt: "A travel site is running a series called \"Skip it\". Write a review of a well-known place that you think is overrated, describing what visitors are promised, what they actually get, and what they should do instead.\n\nWrite your review (220-260 words).",
  attendu: [
    { q: "L'écart entre la promesse et la réalité — c'est l'axe du sujet", kw: ['promised', 'expect', 'in reality', 'what you get', 'instead', 'billed as'] },
    { q: "Être juste : reconnaître ce qui mérite quand même le détour", kw: ['to be fair', 'admittedly', 'does have', 'credit', 'genuinely', 'one thing'] },
    { q: "Une alternative concrète et nommée", kw: ['instead', 'go to', 'try ', 'a few streets', 'nearby', 'better'] },
    { q: "Des détails sensoriels, pas des adjectifs génériques", kw: ['queue', 'minute', 'euro', 'crowd', 'smell', 'noise', 'wait'] },
    { q: "Registre vivant sans tomber dans le familier", kw: [] }
  ],
  lexique: [
    ['it is billed as', "on le présente comme"],
    ['the reality is more modest', "la réalité est plus modeste"],
    ['you queue for forty minutes to spend eight', "on fait quarante minutes de queue pour huit minutes sur place"],
    ['to be fair to the place', "pour être juste avec l'endroit"],
    ['a hundred metres away and nobody goes there', "à cent mètres, et personne n'y va"],
    ['save your morning for', "gardez votre matinée pour"]
  ]
}
];
