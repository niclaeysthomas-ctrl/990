/* ============================================================
   990 — LE MICRO : la matière à dire à voix haute
   Se charge AVANT micro.js et app.js.

   Trois registres, trois longueurs :
     · monologue  — un sujet, deux minutes, après une minute de notes.
     · courtes    — une question, deux à quatre phrases. L'échauffement.
     · entretien  — les questions d'un entretien de stage, EN ANGLAIS.
                    Celles-là ne sont pas un exercice de langue :
                    c'est le stage de janvier qui se joue dessus.

   Format d'un monologue : { t, b:[trois points à couvrir], e, suite:[relances] }
   Format d'une courte   : { th: thème, qs:[questions] }
   Format d'un entretien : { q, aide (FR), dire:[tournures EN à placer] }
   ============================================================ */
'use strict';

window.MICRO = {};

/* ---------- MONOLOGUES : un sujet, deux minutes ----------
   Tenir deux minutes seul sur un sujet imposé est l'exercice qui
   fabrique la fluidité : plus personne pour te relancer, donc il
   faut structurer en parlant. Les relances (`suite`) servent à
   enchaîner quand tu veux pousser la séance plus loin. */
window.MICRO.monologue = [
  { t: "Describe a skill you learned that took a long time to master.",
    b: ["what the skill was", "when and how you learned it", "what difficulties you had"],
    e: "and explain why it took you so long to master it.",
    suite: ["What skills do you think young people should learn at school that they currently don't?",
            "Is it better to learn a skill from a teacher or on your own, using online resources?",
            "Why do some people give up when they're learning something difficult?",
            "How might the skills that employers value change over the next twenty years?"] },

  { t: "Describe a time when you changed your mind about something important.",
    b: ["what the subject was", "what your original opinion was", "what made you change your mind"],
    e: "and explain how you felt about changing your mind.",
    suite: ["Why do people find it difficult to change their opinions?",
            "Does social media make people more open-minded or less?",
            "Should politicians be praised or criticised for changing their minds?",
            "Are older people generally more set in their ways than younger people?"] },

  { t: "Describe a place in your country that you would recommend to visitors.",
    b: ["where it is", "how you know about it", "what people can do there"],
    e: "and explain why you would recommend it.",
    suite: ["What are the benefits and drawbacks of tourism for local communities?",
            "Should popular sites limit the number of visitors they allow?",
            "How has the way people travel changed in recent decades?",
            "Is it worth preserving historic buildings even when they are expensive to maintain?"] },

  { t: "Describe a piece of advice you received that turned out to be useful.",
    b: ["who gave you the advice", "what the advice was", "when you received it"],
    e: "and explain why it turned out to be useful.",
    suite: ["Who do young people in your country usually turn to for advice?",
            "Is advice from professionals always more valuable than advice from friends?",
            "Why do some people refuse to take advice?",
            "Has the internet made it easier or harder to find good advice?"] },

  { t: "Describe a decision that was made by a group you belonged to.",
    b: ["what the group was", "what the decision was", "how the decision was made"],
    e: "and explain whether you agreed with the decision.",
    suite: ["What makes someone a good leader within a group?",
            "Are decisions made by groups usually better than those made by individuals?",
            "Should employees have a say in major company decisions?",
            "How might cultural differences affect the way groups make decisions?"] },

  { t: "Describe a time when you had to wait for something for a long time.",
    b: ["what you were waiting for", "how long you had to wait", "what you did while you were waiting"],
    e: "and explain how you felt when the wait was over.",
    suite: ["Why are people today less patient than in the past, if indeed they are?",
            "Are there situations in which waiting is actually beneficial?",
            "How do businesses try to reduce the frustration of waiting?",
            "Should children be taught to delay gratification? How?"] },

  { t: "Describe a website or app that you find particularly useful.",
    b: ["what it is", "how you found out about it", "what you use it for"],
    e: "and explain why you find it so useful.",
    suite: ["How has technology changed the way people learn?",
            "Should governments regulate what large technology companies do with personal data?",
            "Do people rely too much on their phones?",
            "What are the risks of getting most of our news online?"] },

  { t: "Describe a person you know who is good at their job.",
    b: ["who this person is", "what their job is", "how you know them"],
    e: "and explain what makes them good at their job.",
    suite: ["Is job satisfaction more important than a high salary?",
            "What qualities do employers value most today?",
            "Should people stay in one career for their whole working life?",
            "How might artificial intelligence change the jobs that people value?"] },

  /* --- Ajoutés le 2026-11-11 : les sujets où ta matière à toi sert --- */
  { t: "Describe a company you find impressive.",
    b: ["what it does", "how it actually makes money", "how you came across it"],
    e: "and explain what you find impressive about it.",
    suite: ["Is a company that grows fast necessarily a well-run one?",
            "Should profitable companies be expected to serve the public interest?",
            "Why do some well-known companies disappear within a decade?",
            "How would you tell a genuinely strong business from a fashionable one?"] },

  { t: "Describe a news story you followed closely this year.",
    b: ["what the story was about", "how you followed it", "what people around you said about it"],
    e: "and explain why it held your attention.",
    suite: ["Do people follow the news too closely, or not closely enough?",
            "Is it possible to stay informed without becoming anxious?",
            "Who decides what counts as important news?",
            "Will people still pay for journalism in twenty years?"] },

  { t: "Describe a time you had to explain something complicated to someone.",
    b: ["what you had to explain", "who you were explaining it to", "how you went about it"],
    e: "and explain whether they understood in the end.",
    suite: ["Why are experts often bad at explaining their own field?",
            "Is a simple explanation always a less accurate one?",
            "Should schools teach people how to explain things?",
            "How do you know when someone has genuinely understood you?"] },

  { t: "Describe a long-term goal you are working towards.",
    b: ["what the goal is", "when you set it", "what you do about it week to week"],
    e: "and explain what would make you consider it achieved.",
    suite: ["Why do most people abandon their long-term goals?",
            "Is it better to tell people about your goals or keep them to yourself?",
            "Can ambition be taught?",
            "How should someone decide between two goals that both matter to them?"] }
];

/* ---------- COURTES : l'échauffement, deux à quatre phrases ----------
   La faute de débutant ici est de répondre par un mot. La règle :
   réponse, raison, petit exemple, et on s'arrête. */
window.MICRO.courtes = [
  { th: "Hometown", qs: ["Where is your hometown?", "What do you like most about it?", "Has it changed much since you were a child?", "Would you like to live there in the future? Why or why not?"] },
  { th: "Work or studies", qs: ["Do you work, or are you a student?", "Why did you choose that subject?", "What is the most challenging part of your studies?", "What would you like to do once you've finished?"] },
  { th: "Reading", qs: ["Do you enjoy reading?", "What kinds of things do you usually read?", "Did you read a lot when you were a child?", "Do you prefer paper books or e-books? Why?"] },
  { th: "Sleep", qs: ["How many hours do you usually sleep?", "Do you ever take naps during the day?", "What do you do when you can't get to sleep?", "Has your sleep pattern changed in recent years?"] },
  { th: "Mornings", qs: ["Are you a morning person?", "What's the first thing you do after you wake up?", "Have your mornings changed over the years?", "What would your ideal morning look like?"] },
  { th: "Neighbours", qs: ["Do you know your neighbours well?", "How often do you see them?", "What makes someone a good neighbour?", "Is it common for neighbours to help each other where you live?"] },
  { th: "Photographs", qs: ["Do you like taking photographs?", "What do you usually take photos of?", "Do you prefer taking photos or being in them?", "Do you ever print your photos?"] },
  { th: "Public transport", qs: ["How do you usually get around your city?", "What do you think of public transport where you live?", "Did you use public transport much as a child?", "What would make you use it more?"] },
  { th: "Weather", qs: ["What's the weather usually like where you live?", "Does the weather affect your mood?", "What kind of weather do you like best?", "Has the climate in your region changed since you were young?"] },
  { th: "Music", qs: ["What kind of music do you listen to?", "Do you play an instrument?", "Has your taste in music changed over the years?", "Do you prefer listening alone or with other people?"] },
  { th: "Food", qs: ["Do you cook for yourself?", "What's a dish you'd serve to someone visiting France?", "Do you eat out often?", "Have your eating habits changed in the last few years?"] },
  { th: "Money", qs: ["Do you keep track of what you spend?", "Were you taught about money at school?", "Do you prefer to save or to spend?", "What's the best thing you've bought recently?"] }
];

/* ---------- ENTRETIEN : les vraies questions, en anglais ----------
   Un entretien en anglais pour un stage en M&A ou en transaction
   services n'est pas un test de vocabulaire : on te demande de
   raconter ta logique à voix haute, vite, sans jargon approximatif.
   `aide` dit ce qu'une bonne réponse contient (en français, parce
   que c'est de la méthode, pas de la langue) ; `dire` donne les
   tournures à placer — uniquement des formes justes. */
window.MICRO.entretien = [
  { q: "Tell me about yourself.",
    aide: "Quatre-vingt-dix secondes, trois temps, pas un CV récité : d'où tu viens (la formation, en une phrase), ce qui t'a amené à la finance d'entreprise (un déclic concret, pas « j'ai toujours aimé les chiffres »), et pourquoi ce poste-là maintenant. Termine sur le poste : c'est la phrase qu'ils retiennent.",
    dire: ["I'm currently finishing a master's at ESCP, with a focus on corporate finance.",
           "What got me into this was…",
           "That's what led me to apply here specifically.",
           "I'd rather be the person who builds the model than the one who comments on it."] },

  { q: "Why M&A, and why transaction services rather than, say, audit?",
    aide: "Oppose les deux métiers sans dénigrer l'audit : l'audit certifie un passé, la due diligence et le M&A servent une décision à venir. Dis ce que ça change pour toi — le rythme, le fait que ton chiffre est lu par quelqu'un qui va signer.",
    dire: ["Audit certifies what has already happened; diligence informs a decision that hasn't been made yet.",
           "I want my numbers to be read by someone who is about to sign something.",
           "The pace is part of the appeal, not something I'm prepared to put up with."] },

  { q: "Walk me through a deal you've followed recently.",
    aide: "Cible, acheteur, prix, multiple, logique industrielle, financement, et ton avis. Dans cet ordre, en deux minutes. L'erreur fatale : raconter l'article de presse sans jamais donner le multiple ni dire si tu trouves le prix justifié.",
    dire: ["The buyer paid around 12 times EBITDA, which is a full price for that sector.",
           "The industrial logic was straightforward: …",
           "What I'd question is whether the synergies they announced are deliverable.",
           "It was financed with a mix of cash on hand and a new term loan."] },

  { q: "Walk me through a DCF.",
    aide: "En anglais, lentement, dans l'ordre : prévoir les flux de trésorerie disponibles, les actualiser au coût moyen pondéré du capital, calculer la valeur terminale, sommer pour obtenir la valeur d'entreprise, puis le pont vers la valeur des capitaux propres. Dis à voix haute les mots anglais des postes : c'est là que ça coince, pas sur la méthode.",
    dire: ["You start by projecting unlevered free cash flow, usually over five years.",
           "You discount those cash flows at the weighted average cost of capital.",
           "Then you add a terminal value, either a perpetuity growth or an exit multiple.",
           "That gives you enterprise value; you bridge to equity value by subtracting net debt."] },

  { q: "What are the main ways to value a company, and when would you use each?",
    aide: "Trois familles : les comparables boursiers, les transactions comparables, le DCF. Dis pour chacune ce qu'elle suppose et quand elle ment — les comparables boursiers supposent un marché qui a raison aujourd'hui, les transactions comparables portent une prime de contrôle, le DCF est aussi solide que ses hypothèses.",
    dire: ["Trading comparables tell you what the market pays today for similar businesses.",
           "Precedent transactions include a control premium, so they usually come out higher.",
           "A DCF is only as good as its assumptions, but it's the only method that forces you to state them.",
           "In practice you triangulate: no one buys on a single number."] },

  { q: "A company reports strong EBITDA but its cash flow is negative. What's going on?",
    aide: "Question technique déguisée en conversation. Déroule les candidats : besoin en fonds de roulement qui explose, investissements lourds, charges d'intérêts, impôts, éléments non récurrents retirés de l'EBITDA mais bien payés en cash. Et conclus par ce que tu irais vérifier en premier.",
    dire: ["EBITDA sits above working capital, capex, interest and tax — all of which are real cash.",
           "The first thing I'd look at is the working capital swing, especially receivables.",
           "Add-backs are worth checking too: some of those costs do get paid in cash.",
           "A business can be profitable on paper and still run out of money."] },

  { q: "Why us rather than a bulge-bracket bank?",
    aide: "Deux arguments honnêtes : la taille des équipes (tu touches au deal entier, pas à une slide) et le segment de marché qui t'intéresse. Nomme quelque chose de vérifiable sur eux — un deal, un secteur, une pratique. Sans ce détail, la réponse est interchangeable, et ils le savent.",
    dire: ["On a team that size, an intern sees the whole process rather than one slide of it.",
           "Your mid-market focus is where I think the interesting work is right now.",
           "I'd rather be useful early than well-branded."] },

  { q: "Tell me about a time something you were responsible for went wrong.",
    aide: "Situation, ce que tu as fait, ce que ça a coûté, ce que tu as changé depuis. Une vraie erreur, assumée, pas un faux aveu. La dernière phrase est celle qui compte : ce que tu fais différemment maintenant.",
    dire: ["I misread the brief and built the wrong thing, which cost us two days.",
           "I owned it with the team the same morning rather than hoping it would go unnoticed.",
           "Since then I write back one line confirming what I think has been asked."] },

  { q: "What's your greatest weakness?",
    aide: "Une vraie, avec le correctif en place. Pas « je suis perfectionniste ». Le test n'est pas la faiblesse : c'est si tu es capable de te regarder sans te raconter d'histoire.",
    dire: ["I tend to go deep on a task before checking it's the right task.",
           "What I've put in place is a one-line check-back before I start.",
           "It's better than it was, but it's not solved."] },

  { q: "How do you keep up with the markets?",
    aide: "Deux ou trois sources précises et ce que tu en fais. Citer le Financial Times ne vaut rien si tu ne peux pas dire ce que tu as lu cette semaine. Prépare un exemple de la semaine en cours.",
    dire: ["I read the FT's news briefing most mornings and listen to it when I'm walking.",
           "This week what caught my attention was…",
           "I keep a note of the multiples I come across, so I have a feel for what's normal in a sector."] },

  { q: "Where do you see yourself in five years?",
    aide: "Ambition crédible, pas de plan de carrière récité. Dis le métier, pas le titre, et accepte l'incertitude — un candidat qui prétend connaître son poste dans cinq ans sonne faux.",
    dire: ["I'd like to be the person a client calls because they trust my numbers.",
           "Whether that's in advisory or on the investment side, I'd rather decide once I've seen both.",
           "What I do know is that I want to stay close to live transactions."] },

  { q: "Do you have any questions for us?",
    aide: "Toujours deux, préparées, qui ne se trouvent pas sur le site : à quoi ressemble la semaine d'un stagiaire, quel type de mandat tourne en ce moment, comment on y apprend. Jamais le salaire en premier entretien.",
    dire: ["What does a typical week look like for an intern on your team?",
           "What kind of mandates are you running at the moment?",
           "How do juniors here get feedback — is it structured, or on the job?"] }
];
