/* ============================================================
   990 — Banque d'items pour test de niveau & examens blancs
   (Part 5/6 grammaire, Part 7 lecture, Part 2 écoute)
   ============================================================ */

/* --- GRAMMAIRE / COMPLÉTION (Part 5 & 6) ---
   g = [énoncé, [options], indexBonne, explicationFR, difficulté(1-3)]
*/
window.EXAM_GRAMMAR = [
  ["Please make sure to ______ the attached document before the meeting.", ["review", "reviews", "reviewing", "reviewed"], 0, "Après « to » → base verbale : review.", 1],
  ["The shipment will be delivered ______ Thursday morning.", ["in", "at", "on", "by"], 2, "Jour précis → on.", 1],
  ["Ms. Tanaka is the manager ______ oversees the Asian market.", ["which", "who", "whose", "whom"], 1, "Sujet + personne → who.", 1],
  ["Sales have increased ______ the new campaign launched.", ["since", "during", "for", "by"], 0, "since + proposition = depuis que.", 2],
  ["The report must be submitted ______ later than Friday.", ["soon", "no", "more", "less"], 1, "Expression figée : no later than.", 2],
  ["Employees are encouraged to ______ their skills through training.", ["enhance", "enhancement", "enhancing", "enhanced"], 0, "Après to → base : enhance.", 1],
  ["______ the budget constraints, the team delivered excellent results.", ["Although", "Despite", "Because", "However"], 1, "Despite + nom, sens de contraste.", 2],
  ["The new software is far more efficient than the ______ version.", ["previous", "previously", "prevail", "preview"], 0, "Adjectif devant le nom : previous.", 1],
  ["Neither the director nor her assistants ______ aware of the change.", ["was", "were", "is", "has"], 1, "neither...nor → accord au sujet le plus proche (assistants) → were.", 3],
  ["We would appreciate it if you ______ us by the end of the week.", ["contact", "contacted", "will contact", "contacting"], 1, "« would appreciate if » + prétérit (souhait poli) → contacted.", 3],
  ["The committee has not yet ______ a final decision.", ["make", "made", "making", "makes"], 1, "present perfect : have + participe → made.", 1],
  ["All visitors are required to ______ in at the front desk.", ["check", "checking", "checked", "checks"], 0, "be required to + base : check.", 1],
  ["Our revenue this quarter is significantly higher ______ last year's.", ["than", "then", "that", "as"], 0, "Comparatif : higher than.", 1],
  ["The manager asked the team to work more ______.", ["collaborate", "collaborative", "collaboratively", "collaboration"], 2, "Modifie « work » → adverbe : collaboratively.", 2],
  ["______ receiving your payment, we will process the order immediately.", ["Upon", "During", "While", "Since"], 0, "Upon + -ing = dès (réception).", 3],
  ["The firm is looking for candidates ______ experience in logistics.", ["who", "with", "which", "whose"], 1, "with + nom = qui ont de l'expérience.", 2],
  ["Had we known about the delay, we ______ the client earlier.", ["would inform", "will inform", "would have informed", "informed"], 2, "3e conditionnel inversé (Had we known...) → would have informed.", 3],
  ["This offer is valid ______ the end of the month.", ["until", "by", "since", "during"], 0, "Validité continue jusqu'à → until.", 2],
  ["The technician will ______ the equipment tomorrow.", ["inspect", "inspection", "inspective", "inspecting"], 0, "will + base : inspect.", 1],
  ["A number of complaints ______ been filed recently.", ["has", "have", "is", "was"], 1, "« A number of » → pluriel : have.", 2],
  ["The proposal was rejected ______ its high cost.", ["because", "due to", "although", "so"], 1, "due to + nom = à cause de.", 2],
  ["Staff must ______ with the new security protocol.", ["comply", "complying", "complies", "compliance"], 0, "must + base ; comply with.", 1],
  ["The more you practice, the ______ you become.", ["confident", "more confident", "most confident", "confidently"], 1, "Structure « the more..., the more... » → more confident.", 3],
  ["She has worked here ______ over a decade.", ["since", "for", "during", "by"], 1, "for + durée : for over a decade.", 1],
  ["The results were ______ better than expected.", ["considerable", "considerably", "consider", "consideration"], 1, "Modifie l'adjectif « better » → adverbe : considerably.", 2],
  ["Not only ______ the deadline, but they also reduced costs.", ["they met", "did they meet", "they did meet", "met they"], 1, "Inversion après « Not only » : did they meet.", 3],
  ["Please ensure that all fields ______ completed correctly.", ["is", "are", "be", "being"], 1, "« all fields » (pluriel) : are.", 1],
  ["The company plans to expand ______ into emerging markets.", ["aggressive", "aggressively", "aggression", "aggressiveness"], 1, "Modifie « expand » → adverbe : aggressively.", 2],
  ["______ submitting the form, double-check your details.", ["Before", "During", "Since", "While"], 0, "Before + -ing = avant de.", 1],
  ["The manager, ______ office is on the third floor, is expecting you.", ["who", "whom", "whose", "which"], 2, "Possession : whose office.", 2],
  ["The seminar was so informative ______ everyone stayed until the end.", ["that", "than", "which", "as"], 0, "so + adj + that (conséquence).", 3],
  ["Our sales team consistently ______ its monthly targets.", ["exceed", "exceeds", "exceeding", "to exceed"], 1, "Sujet singulier « team » au présent → exceeds.", 2],
  ["Rarely ______ such a sharp rise in demand.", ["we have seen", "have we seen", "we saw", "did we saw"], 1, "Adverbe restrictif en tête → inversion : have we seen.", 3],
  ["The board insists that each proposal ______ reviewed independently.", ["is", "be", "will be", "being"], 1, "Subjonctif après « insist that » → base : be.", 3],
  ["No sooner had the CEO resigned ______ the share price fell.", ["when", "than", "that", "then"], 1, "Structure figée : No sooner had... than...", 3],
  ["They ______ have finished by now; the office is already empty.", ["must", "can", "need", "would"], 0, "Déduction certaine : must have finished.", 3],
  ["______ complex the negotiations became, she stayed composed.", ["Whatever", "However", "Whenever", "Whichever"], 1, "Concession + adjectif : However complex.", 3],
  ["It is imperative that the contract ______ signed before Friday.", ["is", "be", "was", "would be"], 1, "Subjonctif après « imperative that » → base : be.", 3],
  ["The figures ______ have been checked twice, yet an error slipped through.", ["should", "must", "can't", "need"], 0, "Reproche/attente : should have been checked.", 3],
  ["Not until the report was published ______ the scale of the problem.", ["we realized", "did we realize", "we did realize", "realized we"], 1, "« Not until... » → inversion sur la principale : did we realize.", 3],
  ["Were the company ______ to relocate, hundreds of jobs would be lost.", ["is", "was", "to be", "being"], 2, "Conditionnel inversé formel : Were the company to relocate...", 3],
  ["The supplier's terms are far less favourable than ______.", ["ours", "our", "us", "our's"], 0, "Pronom possessif : than ours.", 2]
];

/* --- LECTURE (Part 7) ---
   passage = { title, text, qs:[[question,[options],bonne,explFR]], diff }
*/
window.READING = [
  {
    title: "Courriel — Confirmation de commande",
    diff: 1,
    text:
`From: orders@brightsupplies.com
To: j.morris@company.com
Subject: Your recent order #4821

Dear Mr. Morris,

Thank you for your order placed on June 3. Your items have been shipped and should arrive within 3 to 5 business days. A tracking number will be sent to you in a separate email.

If you have any questions, please contact our customer service team at 1-800-555-0192.

Best regards,
Bright Supplies Team`,
    qs: [
      ["What is the main purpose of this email?", ["To request a payment", "To confirm a shipment", "To apologize for a delay", "To offer a discount"], 1, "Le courriel confirme que la commande a été expédiée."],
      ["How will Mr. Morris receive his tracking number?", ["By phone", "In a separate email", "On the website", "By text message"], 1, "« A tracking number will be sent to you in a separate email »."]
    ]
  },
  {
    title: "Avis — Maintenance des bureaux",
    diff: 2,
    text:
`NOTICE TO ALL EMPLOYEES

The building's air-conditioning system will undergo maintenance this Saturday, from 8:00 a.m. to 2:00 p.m. During this period, employees are advised to work remotely if possible. The system is expected to be fully operational by Monday.

We apologize for any inconvenience.
— Facilities Department`,
    qs: [
      ["When will the maintenance take place?", ["Friday afternoon", "Saturday morning to early afternoon", "Sunday all day", "Monday morning"], 1, "Samedi de 8h à 14h."],
      ["What are employees advised to do?", ["Take the day off", "Work from home if they can", "Use another building", "Arrive early"], 1, "« advised to work remotely if possible »."]
    ]
  },
  {
    title: "Annonce — Offre d'emploi",
    diff: 2,
    text:
`NOW HIRING: Marketing Coordinator

Greenline Media is seeking a full-time Marketing Coordinator to join our growing team. The ideal candidate has at least two years of experience in digital marketing and excellent communication skills. Responsibilities include managing social media accounts and coordinating advertising campaigns.

To apply, send your résumé to careers@greenline.com by July 31.`,
    qs: [
      ["What position is being advertised?", ["Social media intern", "Marketing Coordinator", "Sales Director", "Graphic Designer"], 1, "Le poste proposé est Marketing Coordinator."],
      ["What is a requirement for the job?", ["A marketing degree", "Two years of experience in digital marketing", "Fluency in three languages", "Willingness to travel"], 1, "« at least two years of experience in digital marketing »."],
      ["How should candidates apply?", ["By calling the office", "By sending a résumé by email", "By visiting in person", "By filling out an online form"], 1, "Envoyer le CV par courriel avant le 31 juillet."]
    ]
  },
  {
    title: "Messages — Échange de SMS",
    diff: 2,
    text:
`Sarah (9:12): Hi Tom, are the quarterly figures ready?
Tom (9:14): Almost. I just need to add the March data.
Sarah (9:15): Great. Can you send them before the 11 a.m. meeting?
Tom (9:16): Sure, I'll have them to you by 10:30.
Sarah (9:17): Perfect, thanks!`,
    qs: [
      ["Why does Sarah contact Tom?", ["To reschedule a meeting", "To ask about the quarterly figures", "To request time off", "To cancel a report"], 1, "Elle demande si les chiffres trimestriels sont prêts."],
      ["At 9:16, what does Tom mean by “I'll have them to you by 10:30”?", ["He will finish them by 10:30", "He will arrive at 10:30", "He needs until tomorrow", "He cannot complete the task"], 0, "Il enverra les chiffres avant 10h30."]
    ]
  },
  {
    title: "Article — Expansion d'entreprise",
    diff: 3,
    text:
`Denver-based tech firm Novacore announced on Tuesday that it will open a new office in Austin, Texas, creating an estimated 300 jobs over the next two years. The expansion comes after a record year in which the company's revenue grew by 24%. CEO Lena Ford said the move reflects strong demand for the company's cloud services and its commitment to long-term growth. Hiring for the new location is expected to begin in September.`,
    qs: [
      ["What did Novacore announce?", ["A merger with a rival", "The opening of a new office", "A drop in revenue", "A change of CEO"], 1, "L'ouverture d'un nouveau bureau à Austin."],
      ["How many jobs is the expansion expected to create?", ["24", "About 300", "Two", "Several thousand"], 1, "« an estimated 300 jobs »."],
      ["According to Lena Ford, what does the move reflect?", ["Falling costs", "Strong demand for cloud services", "Pressure from investors", "A new tax policy"], 1, "« strong demand for the company's cloud services »."]
    ]
  },
  {
    title: "Note de service — Mise à jour de politique",
    diff: 3,
    text:
`MEMO
To: All Sales Staff
From: Regional Director
Re: Updated expense policy

Effective August 1, all expense claims must be submitted through the new online portal within 14 days of the expense being incurred. Paper receipts will no longer be accepted; instead, please upload a clear photo of each receipt. Claims submitted after the 14-day window may be denied. Contact the finance team if you need access to the portal.`,
    qs: [
      ["What is the main change described in the memo?", ["A salary increase", "A new way to submit expense claims", "A change in travel destinations", "A new sales target"], 1, "Nouvelle procédure de notes de frais via un portail en ligne."],
      ["What must employees do with their receipts?", ["Mail them to finance", "Upload a clear photo", "Keep them for one year", "Bring them to a meeting"], 1, "« upload a clear photo of each receipt »."],
      ["What may happen to late claims?", ["They are automatically approved", "They may be denied", "They receive a bonus", "They are forwarded to HR"], 1, "« Claims submitted after the 14-day window may be denied »."]
    ]
  },
  {
    title: "Programme — Conférence",
    diff: 2,
    text:
`ANNUAL MARKETING SUMMIT — Day 1

9:00   Registration & coffee
9:30   Keynote: The Future of Digital Advertising (Main Hall)
11:00  Workshop A: Content Strategy (Room 201)
12:30  Lunch
14:00  Panel: Building a Global Brand (Main Hall)
16:00  Networking reception`,
    qs: [
      ["Where does the keynote take place?", ["Room 201", "The Main Hall", "The lobby", "Online"], 1, "La keynote se tient dans le Main Hall."],
      ["What is scheduled immediately after lunch?", ["Registration", "Workshop A", "A panel discussion", "The networking reception"], 2, "À 14h, le panel « Building a Global Brand »."]
    ]
  }
];

/* --- ÉCOUTE ÉTENDUE (Part 2) ---
   l = [question, [réponses], bonne, difficulté(1-3)]
*/
window.EXAM_LISTEN = [
  ["Where is the sales meeting being held?", ["In conference room B.", "At two o'clock.", "By the sales manager."], 0, 1],
  ["When will the shipment arrive?", ["From our supplier.", "Sometime next week.", "Yes, it did."], 1, 1],
  ["Who is responsible for the new project?", ["In the marketing team.", "Ms. Alvarez is.", "Because it's urgent."], 1, 1],
  ["How did the presentation go?", ["It went really well.", "In the main hall.", "At noon."], 0, 1],
  ["Would you like some coffee before the meeting?", ["No, the meeting is over.", "Yes, that would be great.", "It's on the third floor."], 1, 1],
  ["Why was the flight delayed?", ["To London.", "Because of bad weather.", "At gate 12."], 1, 2],
  ["Could you send me the report by Friday?", ["Sure, I'll email it today.", "It was a long report.", "No, she couldn't."], 0, 2],
  ["What time does the store open?", ["On Main Street.", "At nine o'clock.", "Yes, it's open."], 1, 1],
  ["Have you finished the quarterly budget?", ["Almost, just a few more numbers.", "It's a big budget.", "In the finance office."], 0, 2],
  ["Whose laptop is this on the desk?", ["I think it's Daniel's.", "On the desk.", "Yes, it is."], 0, 2],
  ["How many attendees are expected?", ["In the auditorium.", "About fifty people.", "They attended yesterday."], 1, 1],
  ["Should we take the train or drive?", ["The train would be faster.", "Yes, we should.", "It's a long trip."], 0, 2],
  ["Where can I find the printer?", ["It's down the hall on the left.", "Around three o'clock.", "Because it's broken."], 0, 1],
  ["Isn't the deadline next Monday?", ["No, it was moved to Wednesday.", "On the calendar.", "She met the deadline."], 0, 3],
  ["Do you prefer the morning or the afternoon session?", ["The afternoon works better for me.", "Yes, I do.", "In the conference room."], 0, 2],
  ["Why don't we postpone the call until tomorrow?", ["That sounds good to me.", "He called yesterday.", "On the phone."], 0, 2],
  ["The new intern started today, didn't he?", ["Yes, this morning.", "In the HR department.", "He's very tall."], 0, 3],
  ["What should I do with these old files?", ["You can shred them.", "They were quite old.", "In the cabinet."], 0, 2],
  ["Has the client approved the design yet?", ["Not yet, they're still reviewing it.", "The design is blue.", "Yes, a good client."], 0, 2],
  ["How was your business trip to Tokyo?", ["It was very productive.", "By plane.", "Next month."], 0, 1],
  ["Would you rather meet in person or online?", ["Online is fine with me.", "Yes, let's meet.", "At the office."], 0, 2],
  ["I can't seem to open this attachment.", ["Try downloading it again.", "It was a useful file.", "Yes, you can."], 0, 3],
  ["Who's covering the front desk this afternoon?", ["I think Maria is.", "At the front desk.", "This afternoon."], 0, 2],
  ["When is the invoice due?", ["Within thirty days.", "To the accountant.", "It's a large invoice."], 0, 1]
];
