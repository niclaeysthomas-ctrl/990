/* ============================================================
   990 — « 0 FAUTES » : les points d'exactitude qui coûtent des points
   (a/an, article zéro, indénombrables, pièges de calque francophone).
   3 leçons (always:true) + ERR_DRILL, la banque du drill au réflexe.
   Se charge AVANT app.js.
   ============================================================ */
window.LESSONS.push(
  {
    id: "aan", title: "A / An : l'oreille, pas la lettre", tag: "0 fautes", always: true,
    note: "« a » ou « an » dépend du SON, pas de la lettre écrite. Son de VOYELLE → <b>an</b> (an hour, an MBA, an honest man — le h est muet). Son de CONSONNE → <b>a</b>, même devant une voyelle écrite : a university, a European, a one-way ticket (son « you / wu »). Pour un sigle, écoute la 1<sup>re</sup> lettre : an FBI agent (« ef »), a UFO (« you »).",
    q: [
      ["She's doing ______ MBA at a top school.", ["a", "an"], 1, "« MBA » se lit « em-bi-ei » → son de voyelle → an."],
      ["The flight takes ______ hour and a half.", ["a", "an"], 1, "« hour » : h muet, son de voyelle → an."],
      ["He's ______ European diplomat.", ["a", "an"], 0, "« European » se lit « you-ropéen » → son de consonne → a."],
      ["That was ______ honest mistake, don't worry.", ["a", "an"], 1, "« honest » : h muet → an."],
      ["It's ______ university with a great reputation.", ["a", "an"], 0, "« university » = « you-niversity » → a."],
      ["They spotted ______ UFO over the field.", ["a", "an"], 0, "« UFO » = « you-fo » → a."],
      ["She sent me ______ SMS this morning.", ["a", "an"], 1, "« SMS » = « es-em-es » → son de voyelle → an."],
      ["Just take ______ one-way ticket, it's cheaper.", ["a", "an"], 0, "« one » = « wun » → son de consonne → a."]
    ]
  },
  {
    id: "uncount", title: "Indénombrables : the news IS", tag: "0 fautes", always: true,
    note: "Beaucoup de noms sont INDÉNOMBRABLES en anglais : pas de pluriel, pas de « a », verbe au SINGULIER. <b>information, advice, news, furniture, luggage, knowledge, progress, research, equipment, traffic</b>. On dit « information » (jamais <i>informations</i>), « <b>a piece of</b> advice » (pas <i>an advice</i>), « <b>much</b> information » (pas <i>many</i>), et « the news <b>IS</b> », « the media <b>IS</b> » (traditionnellement pluriel, mais « is » est aujourd'hui la norme courante).",
    q: [
      ["I need more ______ before deciding.", ["information", "informations"], 0, "« information » est indénombrable : JAMAIS de pluriel."],
      ["The news ______ better than expected.", ["is", "are"], 0, "« news » = indénombrable singulier → is."],
      ["Let me give you ______ of advice.", ["a piece", "an"], 0, "advice est indénombrable → « a piece of advice » (jamais « an advice »)."],
      ["How ______ luggage are you taking?", ["much", "many"], 0, "luggage indénombrable → much (pas many)."],
      ["We bought new ______ for the office.", ["furniture", "furnitures"], 0, "furniture indénombrable : pas de pluriel."],
      ["The media ______ covering the story closely.", ["is", "are"], 0, "« the media is » = usage moderne courant (à l'origine « are »)."],
      ["She made great ______ this term.", ["progress", "progresses"], 0, "progress indénombrable : pas de pluriel."],
      ["There ______ a lot of traffic this morning.", ["is", "are"], 0, "traffic indénombrable → is."]
    ]
  },
  {
    id: "frtraps", title: "Fautes de francophone à éliminer", tag: "0 fautes", always: true,
    note: "Les calques les plus fréquents. On dit « I <b>AM</b> 20 » (pas <i>I have 20 years</i>), « I <b>am</b> afraid » (pas <i>I have fear</i>), « he <b>DOESN'T</b> » (pas <i>don't</i>), « <b>since</b> 2019 / <b>for</b> five years », « married <b>TO</b> », « depend <b>ON</b> », « good <b>AT</b> », « interested <b>IN</b> », « look forward <b>to + -ing</b> ». Et : <b>tell</b> someone / <b>say</b> something ; <b>make</b> a mistake / <b>do</b> your homework ; <b>discuss</b> the plan (pas <i>discuss about</i>).",
    q: [
      ["How old are you? — I ______ twenty.", ["am", "have"], 0, "L'âge : « I AM twenty » (jamais « I have 20 years »)."],
      ["He ______ agree with the decision.", ["doesn't", "don't"], 0, "3ᵉ personne du singulier → doesn't."],
      ["I've worked here ______ 2020.", ["since", "for"], 0, "Point de départ précis → since 2020 (for + durée)."],
      ["I look forward to ______ from you soon.", ["hearing", "hear"], 0, "« look forward TO » + verbe en -ing → hearing."],
      ["Success depends ______ hard work.", ["on", "of"], 0, "depend ON (jamais « of »)."],
      ["She ______ me the whole truth.", ["told", "said"], 0, "tell SOMEONE → told me (say SOMETHING → said)."],
      ["Let's discuss ______ budget after lunch.", ["the", "about the"], 0, "discuss QQCH directement : discuss the budget (pas « discuss about »)."],
      ["I'm really interested ______ marketing.", ["in", "for"], 0, "interested IN (pas « for »)."]
    ]
  }
);

/* ---------- ERR_DRILL : banque du drill « 0 fautes » ----------
   [phrase(avec ___), forme JUSTE, forme FAUSSE, explication, catégorie] */
window.ERR_DRILL = [
  // ===== A / AN (le son) =====
  ["She earned ______ MBA last year.", "an", "a", "MBA = « em-bi-ei » → an.", "a/an"],
  ["We waited half ______ hour.", "an", "a", "hour : h muet → an.", "a/an"],
  ["He gave ______ honest answer.", "an", "a", "honest : h muet → an.", "a/an"],
  ["It's ______ European company.", "a", "an", "European = « you… » → a.", "a/an"],
  ["I need ______ umbrella.", "an", "a", "umbrella : son de voyelle → an.", "a/an"],
  ["That's ______ university degree.", "a", "an", "university = « you… » → a.", "a/an"],
  ["He works for ______ NGO.", "an", "a", "NGO = « en-gee-oh » → an.", "a/an"],
  ["Take ______ one-way street here.", "a", "an", "one = « wun » → a.", "a/an"],
  ["She's ______ heir to the fortune.", "an", "a", "heir : h muet, « air » → an.", "a/an"],
  ["It costs ______ euro.", "a", "an", "euro = « you-ro » → a.", "a/an"],
  ["He's ______ MP in London.", "an", "a", "MP = « em-pee » → an.", "a/an"],
  ["What ______ useful tip!", "a", "an", "useful = « you… » → a.", "a/an"],
  ["They took ______ X-ray of his arm.", "an", "a", "X-ray = « eks… » → an.", "a/an"],
  ["He wore ______ uniform.", "a", "an", "uniform = « you… » → a.", "a/an"],
  ["She's ______ EU citizen.", "an", "a", "EU = « ee-you » → an.", "a/an"],
  ["Give me ______ hour to finish.", "an", "a", "hour : h muet → an.", "a/an"],
  ["It was ______ once-in-a-lifetime chance.", "a", "an", "once = « wunce » → a.", "a/an"],
  ["Type ______ URL in the bar.", "a", "an", "URL = « you-are-el » → a.", "a/an"],
  ["He made ______ unusual request.", "an", "a", "unusual = « un… » son de voyelle → an.", "a/an"],
  ["She's ______ honest and reliable worker.", "an", "a", "honest : h muet → an.", "a/an"],
  // ===== INDÉNOMBRABLES & accord =====
  ["The news ______ good today.", "is", "are", "news = indénombrable singulier → is.", "indénombrables"],
  ["This information ______ very useful.", "is", "are", "information indénombrable → is.", "indénombrables"],
  ["Her advice ______ always helpful.", "is", "are", "advice indénombrable → is.", "indénombrables"],
  ["Your luggage ______ over the limit.", "is", "are", "luggage indénombrable → is.", "indénombrables"],
  ["I need more ______ about the role.", "information", "informations", "Pas de pluriel : information.", "indénombrables"],
  ["Thanks for your ______.", "advice", "advices", "Pas de pluriel : advice.", "indénombrables"],
  ["We ordered new ______ for the lobby.", "furniture", "furnitures", "Pas de pluriel : furniture.", "indénombrables"],
  ["He has a lot of ______.", "knowledge", "knowledges", "Pas de pluriel : knowledge.", "indénombrables"],
  ["How ______ advice did she give?", "much", "many", "advice indénombrable → much.", "indénombrables"],
  ["Let me give you ______ advice.", "some", "an", "advice indénombrable : some (jamais « an advice »).", "indénombrables"],
  ["The media ______ powerful today.", "is", "are", "« the media is » : usage moderne courant.", "indénombrables"],
  ["Physics ______ his favorite subject.", "is", "are", "Matières en -ics = singulier → is.", "indénombrables"],
  ["The scissors ______ in the drawer.", "are", "is", "scissors = pluriel → are.", "indénombrables"],
  ["The police ______ investigating.", "are", "is", "police = pluriel → are.", "indénombrables"],
  ["Ten euros ______ not a lot.", "is", "are", "Une somme vue comme un tout → is.", "indénombrables"],
  ["There ______ heavy traffic downtown.", "is", "are", "traffic indénombrable → is.", "indénombrables"],
  ["She's making good ______.", "progress", "progresses", "Pas de pluriel : progress.", "indénombrables"],
  ["Each of the reports ______ ready.", "is", "are", "« each » = singulier → is.", "indénombrables"],
  ["The equipment ______ expensive.", "is", "are", "equipment indénombrable → is.", "indénombrables"],
  ["Everybody ______ already here.", "is", "are", "everybody = singulier → is.", "indénombrables"],
  // ===== PIÈGES de calque =====
  ["I ______ twenty years old.", "am", "have", "L'âge : I AM twenty (pas « I have 20 years »).", "pièges"],
  ["She ______ afraid of spiders.", "is", "has", "be afraid : she IS afraid.", "pièges"],
  ["He ______ speak French.", "doesn't", "don't", "3ᵉ pers. sing. → doesn't.", "pièges"],
  ["I've known her ______ 2018.", "since", "for", "Point de départ → since.", "pièges"],
  ["I've known her ______ six years.", "for", "since", "Durée → for.", "pièges"],
  ["I look forward to ______ you.", "meeting", "meet", "look forward TO + -ing.", "pièges"],
  ["She's used to ______ up early.", "getting", "get", "be used TO + -ing.", "pièges"],
  ["It depends ______ the weather.", "on", "of", "depend ON.", "pièges"],
  ["She's married ______ an engineer.", "to", "with", "married TO.", "pièges"],
  ["He's very good ______ his job.", "at", "in", "good AT.", "pièges"],
  ["This one is different ______ the other.", "from", "than", "different FROM (standard).", "pièges"],
  ["Can you explain it ______ me?", "to", "-", "explain something TO someone.", "pièges"],
  ["He ______ me he was leaving.", "told", "said", "tell someone → told me.", "pièges"],
  ["She ______ she was tired.", "said", "told", "say something → said.", "pièges"],
  ["Let's discuss ______ report now.", "the", "about the", "discuss QQCH : discuss the report.", "pièges"],
  ["Don't ______ the same mistake twice.", "make", "do", "make a mistake.", "pièges"],
  ["Did you ______ your homework?", "do", "make", "do your homework.", "pièges"],
  ["I ______ my keys yesterday.", "lost", "losed", "lose est irrégulier → lost.", "pièges"],
  ["There ______ a lot of people outside.", "were", "was", "people = pluriel → were.", "pièges"],
  ["I'm interested ______ the position.", "in", "for", "interested IN.", "pièges"]
];
