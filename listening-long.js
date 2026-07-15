/* ============================================================
   990 — Écoute Part 3 (conversations) & Part 4 (exposés)
   p = { type:'conv'|'talk', title, level, lines:[{spk:'M'|'W'|'N', text}], qs:[[question,[options],bonne]] }
   Joué par synthèse vocale (voix différenciées homme/femme).
   ============================================================ */
window.CONVERSATIONS = [

  /* ---------- Part 3 : conversations (2 locuteurs) ---------- */
  {
    type: "conv", title: "Au bureau — rapport de ventes", level: "B2",
    lines: [
      { spk: "M", text: "Hi Sarah, have you finished the sales report for the Tokyo branch?" },
      { spk: "W", text: "Almost. I'm just waiting for the final numbers from the finance team. They said they'd send them by three." },
      { spk: "M", text: "Okay. We really need it before tomorrow's board meeting." },
      { spk: "W", text: "Don't worry, I'll email it to you as soon as it's ready." }
    ],
    qs: [
      ["What are the speakers mainly discussing?", ["A sales report", "A job interview", "A holiday plan", "A software update"], 0],
      ["What is the woman waiting for?", ["A phone call", "The final numbers from finance", "A delivery", "Her manager"], 1],
      ["When is the board meeting?", ["This afternoon", "Tonight", "Tomorrow", "Next week"], 2]
    ]
  },
  {
    type: "conv", title: "Au restaurant — réservation", level: "B1",
    lines: [
      { spk: "W", text: "Good evening. I'd like to book a table for four this Friday." },
      { spk: "M", text: "Certainly. What time would you like?" },
      { spk: "W", text: "Around eight, if possible. And could we have a table by the window?" },
      { spk: "M", text: "Eight is fully booked, I'm afraid, but I can offer you seven thirty." },
      { spk: "W", text: "That works. Thank you." }
    ],
    qs: [
      ["Where is this conversation taking place?", ["At a hotel", "At a restaurant", "At a travel agency", "At a bank"], 1],
      ["What does the woman request?", ["A quiet room", "A table by the window", "A vegetarian menu", "A later date"], 1],
      ["What time does the man offer?", ["Seven o'clock", "Seven thirty", "Eight o'clock", "Eight thirty"], 1]
    ]
  },
  {
    type: "conv", title: "À l'aéroport — changement de porte", level: "B2",
    lines: [
      { spk: "M", text: "Excuse me, is this the gate for the flight to Boston?" },
      { spk: "W", text: "It was, but the gate has been changed to B12. Didn't you hear the announcement?" },
      { spk: "M", text: "No, I just arrived. Is the flight still on time?" },
      { spk: "W", text: "There's a short delay — about twenty minutes." }
    ],
    qs: [
      ["What is the man looking for?", ["His luggage", "The check-in desk", "His departure gate", "A taxi"], 2],
      ["What has changed?", ["The gate number", "The destination", "The ticket price", "The airline"], 0],
      ["What does the woman say about the flight?", ["It was cancelled", "It's slightly delayed", "It's boarding now", "It's overbooked"], 1]
    ]
  },
  {
    type: "conv", title: "Au travail — problème informatique", level: "B2",
    lines: [
      { spk: "W", text: "My computer keeps freezing every time I open the design software." },
      { spk: "M", text: "Have you tried restarting it? Sometimes that clears the memory." },
      { spk: "W", text: "Twice. It didn't help at all." },
      { spk: "M", text: "Then I'll send someone from IT up this afternoon to take a look." }
    ],
    qs: [
      ["What is the woman's problem?", ["Her computer keeps freezing", "She lost a file", "The printer is broken", "She forgot her password"], 0],
      ["What has the woman already tried?", ["Calling IT", "Restarting the computer", "Buying new software", "Changing her desk"], 1],
      ["What will the man do?", ["Fix it himself", "Send someone from IT", "Order a new computer", "Cancel the meeting"], 1]
    ]
  },
  {
    type: "conv", title: "En magasin — retour d'article", level: "B1",
    lines: [
      { spk: "M", text: "Hi, I'd like to return this jacket. It's the wrong size." },
      { spk: "W", text: "Do you have the receipt with you?" },
      { spk: "M", text: "Yes, here it is. I bought it last Tuesday." },
      { spk: "W", text: "No problem. Would you like a refund or an exchange?" },
      { spk: "M", text: "An exchange, please — a medium instead of a small." }
    ],
    qs: [
      ["Why is the man at the store?", ["To buy a gift", "To return a jacket", "To apply for a job", "To complain about staff"], 1],
      ["What does the woman ask for?", ["His ID", "The receipt", "His phone number", "A signature"], 1],
      ["What does the man decide to do?", ["Get a refund", "Exchange the item", "Keep the jacket", "Speak to a manager"], 1]
    ]
  },
  {
    type: "conv", title: "Organiser une réunion", level: "B2",
    lines: [
      { spk: "W", text: "Are you free to meet on Thursday to go over the marketing plan?" },
      { spk: "M", text: "Thursday's tricky — I have client calls all morning. How about Friday afternoon?" },
      { spk: "W", text: "Friday works. Shall we say two o'clock in the small conference room?" },
      { spk: "M", text: "Perfect. I'll bring the printouts." }
    ],
    qs: [
      ["What do the speakers want to discuss?", ["The budget cuts", "The marketing plan", "A new hire", "Their holidays"], 1],
      ["Why can't they meet on Thursday morning?", ["The man is on holiday", "The man has client calls", "The room is booked", "The woman is away"], 1],
      ["What will the man bring?", ["His laptop", "The printouts", "Coffee", "A guest"], 1]
    ]
  },

  /* ---------- Part 4 : exposés / annonces (1 locuteur) ---------- */
  {
    type: "talk", title: "Annonce en magasin", level: "B1",
    lines: [
      { spk: "N", text: "Attention shoppers. The store will be closing in fifteen minutes. Please bring your final purchases to the checkout counters on the ground floor. Our customer service desk will remain open until nine for returns and exchanges. Thank you for shopping with us, and have a pleasant evening." }
    ],
    qs: [
      ["Where is the announcement being made?", ["In a library", "In a store", "At an airport", "In a school"], 1],
      ["What should shoppers do?", ["Leave immediately", "Go to the checkout counters", "Form a queue outside", "Call customer service"], 1],
      ["Until what time is the customer service desk open?", ["Eight", "Eight thirty", "Nine", "Ten"], 2]
    ]
  },
  {
    type: "talk", title: "Message vocal — cabinet dentaire", level: "B2",
    lines: [
      { spk: "N", text: "Hi, this is Mark from Greenfield Dental, calling to confirm your appointment on Wednesday at ten a.m. If you need to reschedule, please call us back at least twenty-four hours in advance. Remember to bring your insurance card. We look forward to seeing you." }
    ],
    qs: [
      ["Why is Mark calling?", ["To cancel an appointment", "To confirm an appointment", "To sell a product", "To offer a discount"], 1],
      ["What should the listener bring?", ["A form of payment", "An insurance card", "A referral letter", "A photo ID"], 1],
      ["When should you call to reschedule?", ["The same day", "At least 24 hours in advance", "One week before", "Anytime"], 1]
    ]
  },
  {
    type: "talk", title: "Info trafic", level: "B2",
    lines: [
      { spk: "N", text: "Good morning, commuters. Here's your traffic update. There's heavy congestion on Route 9 heading downtown, due to roadwork near the bridge. Drivers are advised to take Elm Street as an alternative. Expect delays of up to thirty minutes. We'll have another update in fifteen minutes." }
    ],
    qs: [
      ["What kind of report is this?", ["A weather report", "A traffic report", "A news bulletin", "A sports update"], 1],
      ["What is causing the congestion?", ["An accident", "Roadwork near the bridge", "A public event", "Bad weather"], 1],
      ["What are drivers advised to do?", ["Leave later", "Take Elm Street instead", "Use public transport", "Turn back"], 1]
    ]
  },
  {
    type: "talk", title: "Guide touristique", level: "B2",
    lines: [
      { spk: "N", text: "Welcome aboard, everyone. Our city tour will last approximately two hours. Our first stop will be the old cathedral, where you'll have twenty minutes to explore. Please keep your ticket with you, as you'll need to show it when you reboard the bus. Photography is welcome, but please stay with the group at all times." }
    ],
    qs: [
      ["Who is most likely speaking?", ["A museum curator", "A tour guide", "A flight attendant", "A teacher"], 1],
      ["How long will the tour last?", ["One hour", "About two hours", "Half a day", "Twenty minutes"], 1],
      ["What should listeners keep with them?", ["Their passport", "Their ticket", "A map", "A camera only"], 1]
    ]
  },
  {
    type: "talk", title: "Ouverture de réunion", level: "C1",
    lines: [
      { spk: "N", text: "Thank you all for coming in early. As you know, we're launching the new mobile app next month, and today's meeting is about the marketing budget. I'll first present last quarter's results, then Julia will walk us through the proposed campaign. Please hold your questions until the end of each section." }
    ],
    qs: [
      ["What is the main purpose of the meeting?", ["To hire new staff", "To discuss the marketing budget", "To launch the app today", "To review salaries"], 1],
      ["What will happen after the speaker's presentation?", ["A coffee break", "Julia will present the campaign", "The meeting will end", "A vote will be held"], 1],
      ["What are listeners asked to do?", ["Take notes", "Hold questions until the end", "Leave early", "Introduce themselves"], 1]
    ]
  }

];
