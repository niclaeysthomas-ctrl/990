/* ============================================================
   LA PLUME — atelier d'expression écrite
   ------------------------------------------------------------
   1. tu écris au chrono, dans le format et la longueur officiels
   2. LE RELECTEUR passe le texte au crible, tout de suite,
      hors ligne : fautes de francophone, registre, plafond de bande
   3. tu exportes vers Claude, qui note à la grille officielle
   4. tu réimportes : la note entre dans ta courbe, les tournures
      partent dans La Moisson
   ============================================================ */

/* ---------- ÉTAT ---------- */
function plume() {
  if (!S.plume || typeof S.plume !== 'object') S.plume = { essays: [], draft: null, seen: {} };
  if (!Array.isArray(S.plume.essays)) S.plume.essays = [];
  if (!S.plume.seen || typeof S.plume.seen !== 'object') S.plume.seen = {};
  return S.plume;
}
function pEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pAttr(s) { return pEsc(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
function pSujet(id) { return (window.PLUME_SUJETS || []).find(s => s.id === id); }
function pFmt(k) { return (window.PLUME_FORMATS || {})[k]; }
function pEssays() { return plume().essays; }
function pById(id) { return pEssays().find(e => e.id === id); }
function pNoted() { return pEssays().filter(e => e.note && typeof e.note.total === 'number'); }

/* Le rythme demandé : un essai tous les 2-3 jours. */
function pLastDate() {
  const l = pEssays().filter(e => e.done).map(e => e.done).sort((a, b) => b - a)[0];
  return l || null;
}
function pDaysSince() {
  const l = pLastDate();
  if (!l) return 99;
  return Math.floor((Date.now() - l) / 86400000);
}
function pDue() { return pDaysSince() >= 2; }

/* ============================================================
   LE RELECTEUR — l'app lit ce que tu écris
   ------------------------------------------------------------
   sev : 'faute'   = c'est faux, un correcteur le compte
         'calque'  = anglais possible mais réflexe de francophone
         'registre'= correct à l'oral, hors registre à l'écrit noté
         'pauvre'  = correct mais ça plafonne ta bande
   ============================================================ */
window.PLUME_REGLES = [
  /* --- fautes dures, très fréquentes chez un francophone --- */
  { id: 'agree', sev: 'faute', re: /\bI\s+(?:am|'m)\s+agree\b/gi, t: '« I am agree »', d: "« agree » est un VERBE, pas un adjectif : <b>I agree</b> / I do not agree. Le calque de « je suis d'accord » est la faute n°1 des candidats français." },
  { id: 'dependof', sev: 'faute', re: /\bdepend(?:s|ed|ing)?\s+of\b/gi, t: '« depend of »', d: "<b>depend ON</b>. La préposition ne se traduit pas : « dépendre de » → depend on." },
  { id: 'respof', sev: 'faute', re: /\bresponsible\s+of\b/gi, t: '« responsible of »', d: "<b>responsible FOR</b> something. (Mais : in charge OF.)" },
  { id: 'discussabout', sev: 'faute', re: /\bdiscuss(?:es|ed|ing)?\s+about\b/gi, t: '« discuss about »', d: "<b>discuss something</b>, sans préposition. « about » va avec talk : talk about." },
  { id: 'explainme', sev: 'faute', re: /\bexplain\s+(?:me|him|her|us|them)\b/gi, t: '« explain me »', d: "<b>explain something TO someone</b>. Idem : describe to me, suggest to me." },
  { id: 'informations', sev: 'faute', re: /\binformations\b/gi, t: '« informations »', d: "<b>information</b> est indénombrable : jamais de -s, jamais « an information ». Pour compter : <b>a piece of information</b>." },
  { id: 'advices', sev: 'faute', re: /\badvices\b/gi, t: '« advices »', d: "<b>advice</b> est indénombrable. Un conseil = <b>a piece of advice</b>." },
  { id: 'indenombrables', sev: 'faute', re: /\b(?:equipments|knowledges|furnitures|luggages|homeworks|evidences|softwares|staffs|feedbacks)\b/gi, t: 'Pluriel impossible', d: "Ces noms sont indénombrables en anglais : equipment, knowledge, furniture, luggage, homework, evidence, software, staff, feedback — jamais de -s." },
  { id: 'peoples', sev: 'faute', re: /\bpeoples\b/gi, t: '« peoples »', d: "<b>people</b> est déjà un pluriel (people ARE). « peoples » n'existe qu'au sens « les peuples du monde » — presque jamais ce que tu veux dire." },
  { id: 'newsare', sev: 'faute', re: /\bnews\s+(?:are|were)\b/gi, t: '« news are »', d: "<b>news IS</b> — singulier malgré le -s. Idem : mathematics is, economics is, politics is." },
  { id: 'sametime', sev: 'faute', re: /\bin\s+the\s+same\s+time\b/gi, t: '« in the same time »', d: "<b>AT the same time</b>. (« in the same time » ne se dit que pour une durée égale : he did it in the same time as me.)" },
  { id: 'onehand', sev: 'faute', re: /\bin\s+(?:the\s+)?one\s+hand\b|\bin\s+the\s+other\s+hand\b/gi, t: '« in the one/other hand »', d: "<b>ON the one hand … ON the other hand</b>. Avec ON, toujours." },
  { id: 'atcontrary', sev: 'faute', re: /\bat\s+the\s+contrary\b/gi, t: '« at the contrary »', d: "<b>ON the contrary</b>." },
  { id: 'sincedur', sev: 'faute', re: /\bsince\s+\d+\s+(?:year|month|week|day|hour)s?\b/gi, t: '« since + durée »', d: "<b>FOR</b> + durée (for three years), <b>SINCE</b> + point de départ (since 2022, since I arrived)." },
  { id: 'haveyears', sev: 'faute', re: /\b(?:I|he|she|we|they)\s+(?:have|has)\s+\d+\s+years?\b/gi, t: '« I have 21 years »', d: "<b>I am 21</b> (years old). L'âge se dit avec BE, pas avec HAVE." },
  { id: 'assistto', sev: 'faute', re: /\bassist(?:ed|ing|s)?\s+to\b/gi, t: '« assist to »', d: "Assister à une réunion = <b>attend</b> a meeting. « assist » veut dire aider." },
  { id: 'forto', sev: 'faute', re: /\bfor\s+to\s+\w+/gi, t: '« for to + verbe »', d: "Le but se dit <b>to + verbe</b> ou <b>in order to</b>, jamais « for to »." },
  { id: 'modalto', sev: 'faute', re: /\b(?:must|should|can|could|might|may|will|would)\s+to\s+\w+/gi, t: 'Modal + to', d: "Après must, should, can, could, may, might, will, would : <b>verbe nu</b>, sans « to ». (Exceptions : ought to, have to, be able to.)" },
  { id: 'canbeable', sev: 'faute', re: /\bcan\s+be\s+able\s+to\b/gi, t: '« can be able to »', d: "Redondance : <b>can</b> ou <b>will be able to</b>, pas les deux." },
  { id: 'moremore', sev: 'faute', re: /\bmore\s+(?:better|easier|worse|higher|larger|greater|simpler)\b/gi, t: 'Double comparatif', d: "Soit <b>more + adjectif long</b>, soit <b>adjectif court + -er</b>. Jamais les deux : « more better » n'existe pas." },
  { id: 'domistake', sev: 'faute', re: /\b(?:do|does|did|doing)\s+(?:a|the|some|many|several)?\s*mistakes?\b/gi, t: '« do a mistake »', d: "<b>MAKE</b> a mistake. (make a decision, make progress, make an effort — mais DO research, DO business.)" },
  { id: 'sayme', sev: 'faute', re: /\bsay\s+(?:me|him|her|us|them)\b/gi, t: '« say me »', d: "<b>TELL</b> someone something / <b>SAY</b> something TO someone." },
  { id: 'willclause', sev: 'faute', re: /\b(?:when|as soon as|once|until|after|before|by the time)\s+(?:\w+\s+){0,3}?will\b/gi, t: 'will après when/until/once…', d: "Après une conjonction de temps, <b>présent</b> pour parler du futur : « when he <b>arrives</b> », jamais « when he will arrive »." },
  { id: 'thisplural', sev: 'faute', re: /\bthis\s+(?:arguments|reasons|factors|points|issues|people|measures|policies|companies|students|countries)\b/gi, t: 'this + pluriel', d: "<b>these</b> + pluriel, <b>this</b> + singulier. (« this people » = faute ; people est pluriel.)" },
  { id: 'thesesing', sev: 'faute', re: /\bthese\s+(?:argument|reason|factor|point|issue|measure|policy|company|student|country|solution)\b(?!s)/gi, t: 'these + singulier', d: "<b>this</b> + singulier, <b>these</b> + pluriel." },
  { id: 'thereissome', sev: 'faute', re: /\bthere\s+is\s+(?:\w+\s+){0,2}?(?:people|reasons|factors|arguments|problems|solutions|advantages|many)\b/gi, t: 'there is + pluriel', d: "<b>there ARE</b> + pluriel. Vérifie toujours ce qui suit, pas ce qui précède." },
  { id: 'everyoneare', sev: 'faute', re: /\b(?:everyone|everybody|someone|somebody|nobody|each)\s+(?:are|were|have\b)/gi, t: 'everyone + pluriel', d: "<b>everyone IS / HAS</b> — ces mots sont grammaticalement singuliers, même s'ils désignent plusieurs personnes." },
  { id: 'enterin', sev: 'faute', re: /\benter\s+(?:in|into)\s+the\s+(?:room|building|market|university|school)\b/gi, t: '« enter in »', d: "<b>enter</b> a place, sans préposition. (« enter into » existe, mais pour un accord : enter into an agreement.)" },
  { id: 'copeup', sev: 'faute', re: /\bcope\s+up\s+with\b/gi, t: '« cope up with »', d: "<b>cope WITH</b>, sans « up ». (Confusion avec « put up with ».)" },
  { id: 'marrywith', sev: 'faute', re: /\bmarr(?:y|ied)\s+with\b/gi, t: '« marry with »', d: "<b>marry someone</b> / <b>be married TO someone</b>." },
  { id: 'possibilityto', sev: 'faute', re: /\bpossibility\s+to\s+\w+/gi, t: '« possibility to + verbe »', d: "<b>the possibility OF + -ing</b>, ou mieux : <b>the opportunity TO</b> + verbe." },

  /* --- calques : c'est de l'anglais, mais c'est un réflexe français --- */
  { id: 'accordingme', sev: 'calque', re: /\baccording\s+to\s+(?:me|my\s+opinion)\b/gi, t: '« according to me »', d: "Ne se dit pas d'un locuteur pour lui-même. Écris <b>in my view</b>, <b>to my mind</b>, <b>I would argue that</b>." },
  { id: 'importantnb', sev: 'calque', re: /\b(?:an?\s+)?important\s+(?:number|amount|quantity|part|proportion|increase|share)\b/gi, t: '« important » = « nombreux » ?', d: "« important » en anglais = <i>qui compte</i>, jamais <i>grand</i>. Dis <b>a large number</b>, <b>a significant increase</b>, <b>a substantial share</b>." },
  { id: 'thesociety', sev: 'calque', re: /\bthe\s+society\s+(?:is|has|must|should|would|does)\b/gi, t: '« the society »', d: "Au sens général : <b>society</b> sans article (society expects…). « The society » = une association précise." },
  { id: 'actually', sev: 'calque', re: /\bactually\b/gi, t: 'faux ami « actually »', d: "<b>actually</b> = en réalité, en fait. « Actuellement » se dit <b>currently</b> / <b>at present</b>. Vérifie lequel tu voulais." },
  { id: 'eventually', sev: 'calque', re: /\beventually\b/gi, t: 'faux ami « eventually »', d: "<b>eventually</b> = finalement, au bout du compte. « Éventuellement » se dit <b>possibly</b> / <b>if need be</b>." },
  { id: 'sensible', sev: 'calque', re: /\bsensible\b/gi, t: 'faux ami « sensible »', d: "<b>sensible</b> = raisonnable, sensé. « Sensible » (émotif) se dit <b>sensitive</b>." },
  { id: 'delay', sev: 'calque', re: /\bdelays?\b/gi, t: 'faux ami « delay »', d: "<b>delay</b> = un retard. « Un délai » (le temps accordé) se dit <b>a deadline</b> ou <b>a time frame</b>." },
  { id: 'economical', sev: 'calque', re: /\beconomical\b/gi, t: '« economical »', d: "<b>economical</b> = peu coûteux. Pour « économique » (relatif à l'économie) : <b>economic</b> (economic growth, economic policy)." },
  { id: 'formation', sev: 'calque', re: /\bformations?\b/gi, t: 'faux ami « formation »', d: "<b>formation</b> = la formation d'un objet (rock formation). Une formation professionnelle = <b>training</b> / <b>a course</b>." },
  { id: 'stage', sev: 'calque', re: /\b(?:a|my|the|his|her)\s+stages?\b/gi, t: 'faux ami « stage »', d: "<b>stage</b> = une étape, ou une scène de théâtre. Un stage en entreprise = <b>an internship</b> / <b>a placement</b>." },
  { id: 'globally', sev: 'calque', re: /\bglobally\b/gi, t: '« globally »', d: "<b>globally</b> = à l'échelle mondiale. « Globalement » (dans l'ensemble) se dit <b>overall</b> / <b>on the whole</b>." },
  { id: 'preciser', sev: 'calque', re: /\bto\s+precise\b/gi, t: '« to precise »', d: "« precise » n'est pas un verbe : <b>to specify</b>, <b>to clarify</b>, <b>to point out</b>." },
  { id: 'permitto', sev: 'calque', re: /\bpermit(?:s|ted)?\s+(?:to|me|us|him|her|them)\s+to\b/gi, t: '« permit to »', d: "Préfère <b>allow someone to</b> / <b>enable someone to</b>. « permit » est administratif et lourd." },
  { id: 'allworld', sev: 'calque', re: /\ball\s+the\s+world\b/gi, t: '« all the world »', d: "« tout le monde » = <b>everyone</b> / <b>everybody</b>. « all the world » ne se dit pas." },
  { id: 'firsttime', sev: 'calque', re: /\bin\s+a\s+first\s+time\b/gi, t: '« in a first time »', d: "Calque de « dans un premier temps » : <b>initially</b>, <b>to begin with</b>, <b>at first</b>." },
  { id: 'preoccupied', sev: 'calque', re: /\bpreoccupied\b/gi, t: '« preoccupied »', d: "<b>preoccupied</b> = absorbé par ses pensées. Inquiet se dit <b>concerned</b> / <b>worried</b>." },
  { id: 'nowadays', sev: 'calque', re: /\bnowadays\b/gi, t: '« nowadays »', d: "Correct, mais c'est le mot-signature de la copie scolaire. Préfère <b>today</b>, <b>in recent years</b>, ou rien du tout." },
  { id: 'mediais', sev: 'calque', re: /\bmedia\s+is\b/gi, t: '« media is »', d: "En registre soutenu, <b>the media ARE</b> (pluriel de medium). Toléré au singulier à l'oral, sanctionné à l'écrit formel." },

  /* --- registre : correct à l'oral, hors sujet dans une copie notée --- */
  { id: 'contractions', sev: 'registre', re: /\b(?:don't|doesn't|didn't|isn't|aren't|wasn't|weren't|can't|won't|wouldn't|couldn't|shouldn't|hasn't|haven't|hadn't|it's|I'm|we're|they're|you're|that's|there's|let's|I've|we've|I'd|I'll|we'll)\b/gi, t: 'Contractions', d: "Dans un essai, un rapport ou une copie d'examen : <b>formes pleines</b> (do not, it is, cannot). Les contractions sont admises dans un mail informel et dans une critique." },
  { id: 'etc', sev: 'registre', re: /\betc\.?|\band\s+so\s+on\b/gi, t: '« etc. » / « and so on »', d: "Signale au correcteur que tu n'as plus d'idée. Nomme le troisième élément, ou arrête-toi à deux." },
  { id: 'exclam', sev: 'registre', re: /!/g, t: "Point d'exclamation", d: "Hors de propos dans un écrit noté (sauf critique très vivante). L'emphase se fait par la syntaxe, pas par la ponctuation." },
  { id: 'familier', sev: 'registre', re: /\b(?:kids|stuff|guys|a bit|huge|awesome|okay|ok|gonna|wanna|nowdays|pretty\s+\w+)\b/gi, t: 'Mot familier', d: "Registre parlé. Écris children, material/aspects, considerable, somewhat." },
  { id: 'startand', sev: 'registre', re: /(?:^|[.!?]\s+)(?:And|But|So)\s+/g, t: 'Phrase qui commence par And/But/So', d: "Toléré en anglais moderne, mais dans une copie notée à haut niveau, préfère <b>Moreover</b>, <b>However</b>, <b>Consequently</b> — ou fusionne les deux phrases." },
  { id: 'ithink', sev: 'registre', re: /\bI\s+think\s+that\b/gi, t: '« I think that »', d: "Affaiblit chaque phrase où il apparaît. Une fois suffit ; ailleurs, affirme directement, ou varie : <b>I would argue</b>, <b>it seems clear that</b>, <b>arguably</b>." },
  { id: 'personalop', sev: 'registre', re: /\bin\s+my\s+personal\s+opinion\b|\bpersonally\s*,?\s*I\s+think\b/gi, t: 'Pléonasme', d: "Une opinion est forcément personnelle. <b>In my view</b> suffit." },

  /* --- plafond de bande : correct, mais ça t'empêche de monter --- */
  { id: 'verylot', sev: 'pauvre', re: /\b(?:very|really|a\s+lot\s+of|lots\s+of|totally|completely\s+\w+ly)\b/gi, t: 'Intensifieur pauvre', d: "« very important » → <b>crucial</b>, « a lot of » → <b>a great deal of</b>, <b>numerous</b>, <b>considerable</b>. Un adjectif précis vaut mieux qu'un adverbe d'intensité." },
  { id: 'motspauvres', sev: 'pauvre', re: /\b(?:things?|good|bad|big|nice|get|got|make\s+better|very\s+much)\b/gi, t: 'Mot passe-partout', d: "thing → <b>factor, aspect, issue, feature</b> ; good → <b>beneficial, sound, compelling</b> ; bad → <b>detrimental, damaging</b> ; big → <b>substantial, considerable</b> ; get → <b>obtain, acquire, become</b>." },
  { id: 'peoplethink', sev: 'pauvre', re: /\b(?:people|everyone|everybody)\s+(?:think|thinks|say|says|believe|believes)\b/gi, t: '« people think »', d: "Généralisation invérifiable. Dis <b>qui</b> : critics argue, economists have found, supporters of the measure claim." },
  { id: 'inconclusion', sev: 'pauvre', re: /\b(?:in\s+conclusion|to\s+sum\s+up|to\s+conclude|in\s+a\s+nutshell)\b/gi, t: 'Conclusion étiquetée', d: "Correct et attendu en IELTS. Mais à haut niveau, une conclusion se reconnaît sans étiquette : <b>The case for X therefore rests on…</b>" },
  { id: 'firstsecond', sev: 'pauvre', re: /\b(?:first\s+of\s+all|firstly|secondly|thirdly|last\s+but\s+not\s+least)\b/gi, t: 'Numérotation scolaire', d: "Signale une liste, pas un raisonnement. Articule par le SENS : <b>The more serious objection is…</b>, <b>A further difficulty arises when…</b>" },

  /* --- issues de sa copie C1 du 12/09/2026 : l'essai « remote work ».
         Ces quatorze règles sont exactement ce que le relecteur avait
         laissé passer — il n'avait vu que la longueur. Pas de lookbehind. --- */

  /* fautes */
  { id: 'espacepunct', sev: 'faute', re: /[ \u00A0]+[?!;:]/g, t: 'Espace avant ? ! ; :', d: "Réflexe typographique français. En anglais la ponctuation est <b>collée</b> au mot : <i>does it?</i>, <i>simple: scarcity decides</i>. Ça se voit à chaque ligne d'une copie." },
  { id: 'guilfr', sev: 'faute', re: /[«»]/g, t: 'Guillemets français « »', d: "Les chevrons n'existent pas en anglais : <b>guillemets droits</b> collés au mot (\"remote\" ou 'remote'), sans espace intérieur." },
  { id: 'forconcess', sev: 'faute', re: /\bfor\s+\w+\s+as\s+(?:it|they|this|that|he|she)\s+(?:may|might|can|could|does|do)\s+(?:sound|seem|appear|be|look)\b/gi, t: 'Concession : « For X as it may… »', d: "La concession par inversion ne prend <b>jamais</b> « for » : <b>Worrying as it may sound</b>, <b>Hard as it may be</b>, ou <b>As worrying as it may sound</b>. C'est une structure qui note — autant la poser juste." },
  { id: 'gofaras', sev: 'faute', re: /\bgo(?:es|ing)?\s+as\s+far\s+as\s+(?:to\s+)?(?:say|saying|argue|arguing|claim|claiming|suggest|suggesting)\b/gi, t: '« go as far as saying »', d: "Idiome figé : <b>go SO far AS TO + infinitif</b> — <i>I would go so far as to say that…</i>. « as far as » sert à la distance ou à la délimitation (<i>as far as I know</i>)." },
  { id: 'understatex', sev: 'faute', re: /\bunderstat(?:e|es|ing|ed)\s+(?:the\s+)?(?:possibility|risk|danger|likelihood|threat|scale|severity|extent)\b/gi, t: 'understate / underestimate', d: "On <b>understate</b> un fait (on le présente comme moindre en le disant) ; on <b>underestimate</b> un risque, une probabilité, une ampleur (on se trompe en l'évaluant). Devant possibility / risk / threat : <b>underestimate</b>." },
  { id: 'ruledagainst', sev: 'faute', re: /\b(?:should|must|ought\s+to|needs?\s+to|has\s+to|have\s+to)\s+be\s+ruled\s+against\b/gi, t: '« should be ruled against »', d: "<b>rule against</b> = trancher contre, au tribunal ou en arbitrage. Pour un risque qu'il faut empêcher : <b>must be guarded against</b>, <b>resisted</b>, <b>headed off</b>." },
  { id: 'sneakin', sev: 'faute', re: /\bsneak(?:s|ing|ed)?\s+in(?:to)?\s+(?:[\w'’-]+\s+){0,3}?(?:lives|life|privacy|space|affairs|business)\b/gi, t: '« sneak in someone’s life »', d: "<b>sneak something in</b> = l'introduire en fraude : tu dis l'inverse de ce que tu veux dire. Pour empiéter : <b>intrude into</b> / <b>encroach on</b> / <b>pry into</b> someone's private life." },
  { id: 'alterto', sev: 'faute', re: /\balter(?:s|ing|ed)?\s+(?:it|them|this|that|its\s+\w+|the\s+\w+)\s+to\s+(?:a|an|the|more|something)\b/gi, t: '« alter it to a … form »', d: "« alter X to Y » n'est pas un schéma anglais. On <b>adapts X into</b> / <b>recasts X in</b> / <b>turns X into</b> a more digital form." },

  /* calques */
  { id: 'nothingbut', sev: 'calque', re: /\bis\s+nothing\s+but\s+(?:the\s+)?truth\b/gi, t: '« is nothing but the truth »', d: "« the truth, the whole truth and nothing but the truth » est la formule du <b>serment judiciaire</b>. Pour dire qu'un constat est exact : <b>rings true</b>, <b>is undeniably the case</b>, <b>is hard to deny</b>." },
  { id: 'personalspace', sev: 'calque', re: /\bpersonal\s+space\b/gi, t: '« personal space »', d: "<b>personal space</b> = la distance physique qu'on garde autour de soi. La vie privée, le domaine qu'un employeur ne doit pas envahir, c'est <b>privacy</b> / <b>someone's private life</b>. Vérifie lequel tu voulais." },

  /* registre */
  { id: 'endofday', sev: 'registre', re: /\bat\s+the\s+end\s+of\s+the\s+day\s*,/gi, t: '« at the end of the day, … »', d: "Formule orale quand elle articule un raisonnement (le sens littéral — <i>they go home at the end of the day</i> — reste correct, et c'est pour ça que la règle n'attrape que la version suivie d'une virgule). Dans une conclusion notée : <b>Ultimately</b>, <b>On balance</b>, <b>In the final analysis</b>." },
  { id: 'deemit', sev: 'registre', re: /\bI\s+deem\s+(?:it|this|that)\b/gi, t: '« I deem it… »', d: "<b>deem</b> appartient au juridique et au bureaucratique ; dans un essai il sonne emprunté, surtout à côté d'une formule orale. Écris <b>it is crucial that</b>, <b>it would be a mistake to</b>, <b>I would argue that</b>." },
  { id: 'rhetag', sev: 'registre', re: /,\s*(?:does|is|are|do|did|will|would|can|could|has|have|should)\s+(?:it|he|she|they|we|you|I)\s+not\s*\?/gi, t: 'Tag rhétorique « …, does it not ? »', d: "Le question tag est un procédé <b>oral</b> : dans un essai il prend le correcteur à témoin au lieu d'argumenter. Et vérifie la polarité : après un sujet quasi-négatif (<i>little</i>, <i>few</i>, <i>hardly</i>) le tag reste <b>positif</b> — <i>little changes, does it?</i>" },
  { id: 'yougen', sev: 'registre', re: /\byou\s+(?:can|cannot|can't|must|have\s+to|need\s+to|should|will\s+never|won't)\b/gi, t: '« you » générique', d: "Le <i>you</i> impersonnel est parlé. À l'écrit noté : <b>one cannot</b>, un passif (<i>it cannot be assumed that…</i>), ou un sujet nommé (<i>employers cannot…</i>). Admis dans un mail et sur un forum." }
];

/* Analyse d'un texte : renvoie {mots, phrases, paras, drapeaux[], mesures{}, score} */
function plumeRelire(texte, sujet) {
  const t = String(texte || '');
  const fmt = sujet ? pFmt(sujet.fmt) : null;
  const mots = (t.trim().match(/\S+/g) || []);
  const nMots = mots.length;
  const paras = t.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
  /* Découpage en phrases sans lookbehind : Safari < 16.4 le refuse. */
  const phrases = (t.match(/[^.!?\n]+[.!?]*/g) || []).map(p => p.trim()).filter(p => (p.match(/\S+/g) || []).length > 2);
  const drapeaux = [];

  /* règles textuelles */
  const informel = sujet && (sujet.fmt === 'email' || sujet.fmt === 'review');
  window.PLUME_REGLES.forEach(r => {
    if (r.id === 'contractions' && informel) return;   /* admises dans un mail ou une critique */
    /* le « you » impersonnel : parlé dans une copie, normal dans un mail
       ou dans un post de forum (TOEFL Academic Discussion). */
    if (r.id === 'yougen' && (informel || (sujet && sujet.fmt === 'toefl'))) return;
    if (r.id === 'exclam' && sujet && sujet.fmt === 'review') return;
    r.re.lastIndex = 0;
    const hits = t.match(r.re);
    if (hits && hits.length) {
      const uniq = [...new Set(hits.map(h => h.trim()))].slice(0, 4);
      drapeaux.push({ id: r.id, sev: r.sev, t: r.t, d: r.d, n: hits.length, ex: uniq });
    }
  });

  /* mesures structurelles */
  const lg = phrases.map(p => (p.match(/\S+/g) || []).length);
  const moy = lg.length ? lg.reduce((a, b) => a + b, 0) / lg.length : 0;
  const longue = lg.length ? Math.max(...lg) : 0;
  const bas = window.PLUME_CONNECTEURS.bas.filter(c => new RegExp('\\b' + c + '\\b', 'i').test(t)).length;
  const haut = window.PLUME_CONNECTEURS.haut.filter(c => new RegExp('\\b' + c + '\\b', 'i').test(t)).length;
  /* Subordination réelle : liste large, sinon on crie au loup sur du bon anglais
     qui subordonne avec that / where / because plutôt qu'avec which. */
  const subord = (t.match(/\b(?:which|whose|whom|who|that|where|when|although|though|whereas|while|despite|unless|whether|insofar|because|since|provided|so that|even if)\b/gi) || []).length;
  const passif = (t.match(/\b(?:is|are|was|were|been|being|be)\s+(?:\w+ly\s+)?\w+(?:ed|en)\b/gi) || []).length;

  /* répétitions : mot de contenu répété 4 fois ou plus */
  const stop = new Set(('the a an and or but of to in on for with that this these those it its is are was were be been being as at by from have has had not no if then than which who whom whose what when where why how their there they them he she we you i our your his her my more most other such can could will would should may might must do does did also only very much many some any all both each every into about over under between during however therefore because so while although though').split(' '));
  const freq = {};
  mots.forEach(m => {
    const w = m.toLowerCase().replace(/[^a-zéèêàçùïôû'-]/g, '');
    if (w.length >= 5 && !stop.has(w)) freq[w] = (freq[w] || 0) + 1;
  });
  const repetes = Object.keys(freq).filter(w => freq[w] >= 4).sort((a, b) => freq[b] - freq[a]).slice(0, 5);

  const mesures = { nMots, nParas: paras.length, nPhrases: phrases.length, moy: Math.round(moy * 10) / 10, longue, bas, haut, subord, passif, repetes };

  /* drapeaux structurels */
  if (fmt) {
    const [min, max] = fmt.mots;
    if (nMots < min) drapeaux.push({ id: 'court', sev: 'tache', t: `Trop court : ${nMots} mots`, d: `Le format demande au minimum <b>${min} mots</b>. Sous la barre, la note est plafonnée d'office, quelle que soit la qualité : c'est mécanique.`, n: 1, ex: [] });
    else if (nMots > max * 1.25) drapeaux.push({ id: 'long', sev: 'tache', t: `Trop long : ${nMots} mots`, d: `La fourchette est <b>${min}-${max}</b>. Au-delà, tu ne gagnes rien et tu multiplies les occasions de faute — les correcteurs Cambridge pénalisent le hors-format.`, n: 1, ex: [] });
    if (paras.length < 3 && sujet.fmt !== 'toefl') drapeaux.push({ id: 'paras', sev: 'tache', t: `${paras.length} paragraphe(s)`, d: "Un écrit noté se lit à sa structure avant de se lire à sa langue. Sépare tes paragraphes par une <b>ligne vide</b> : au minimum introduction, corps, conclusion.", n: 1, ex: [] });
  }
  if (moy > 0 && moy < 13) drapeaux.push({ id: 'plat', sev: 'pauvre', t: `Phrases courtes (${mesures.moy} mots en moyenne)`, d: "Une syntaxe uniformément simple plafonne le critère « Grammatical Range ». Il faut de la <b>variété</b> : subordonnées, participiales, une relative, une phrase de 30 mots à côté d'une de 8.", n: 1, ex: [] });
  if (longue > 0 && longue < 24) drapeaux.push({ id: 'nocomplex', sev: 'pauvre', t: 'Aucune phrase complexe', d: "Ta plus longue phrase fait " + longue + " mots. À ce niveau on attend au moins une phrase ample et maîtrisée, avec subordination — c'est ce qui distingue un C1 d'un B2.", n: 1, ex: [] });
  if (longue > 48) drapeaux.push({ id: 'troplong', sev: 'pauvre', t: `Une phrase de ${longue} mots`, d: "Au-delà de ~45 mots, le risque d'accord bancal ou de sujet perdu devient réel, et le correcteur y voit un décrochage plutôt qu'une prouesse. Coupe-la.", n: 1, ex: [] });
  if (subord === 0 && nMots > 80) drapeaux.push({ id: 'nosub', sev: 'pauvre', t: 'Aucune subordination', d: "Ni relative (which, whose), ni concession (although, whereas, despite). Ce sont exactement les structures que la grille « Grammatical Range » cherche.", n: 1, ex: [] });
  if (haut === 0 && nMots > 100) drapeaux.push({ id: 'noconn', sev: 'pauvre', t: 'Articulation basique', d: "Tu n'emploies que des connecteurs de base. Un seul <b>whereas</b>, <b>conversely</b>, <b>that said</b> ou <b>if anything</b> bien placé déplace la copie d'une bande.", n: 1, ex: [] });
  if (repetes.length) drapeaux.push({ id: 'repet', sev: 'pauvre', t: 'Répétitions', d: "Répété 4 fois ou plus : <b>" + repetes.join('</b>, <b>') + "</b>. Le critère « Lexical Resource » note précisément la capacité à reformuler plutôt qu'à recycler.", n: repetes.length, ex: repetes });
  if (passif === 0 && sujet && (sujet.fmt === 'report' || sujet.fmt === 'ielts1')) drapeaux.push({ id: 'nopassive', sev: 'pauvre', t: 'Aucun passif', d: "Un rapport et une description de données vivent au passif (<i>the data were collected</i>, <i>the manuscript is sent to reviewers</i>). Son absence trahit le registre.", n: 1, ex: [] });

  /* les idées attendues, retrouvées ou non */
  const bas2 = t.toLowerCase();
  const attendus = (sujet && sujet.attendu || []).map(a => ({
    q: a.q,
    ok: a.kw.length === 0 ? null : a.kw.some(k => bas2.includes(k.toLowerCase()))
  }));

  /* score d'atelier : ce que l'app peut mesurer seule (pas une note d'examen) */
  const poids = { faute: 7, calque: 3, registre: 2.5, pauvre: 2, tache: 8 };
  let perte = 0;
  drapeaux.forEach(d => { perte += poids[d.sev] * Math.min(d.n, 3); });
  const score = Math.max(0, Math.min(100, Math.round(100 - perte)));

  return { mesures, drapeaux, attendus, score, paras, phrases };
}

/* ============================================================
   ACCUEIL DU MODULE
   ============================================================ */
function plumeBandeau() {
  const d = pDaysSince(), n = pEssays().filter(e => e.done).length;
  if (!n) return { t: "Ton premier essai t'attend", d: "Choisis un format, écris au chrono, et l'app te relit avant même que je te corrige.", c: 'var(--accent)' };
  if (d === 0) return { t: "Écrit aujourd'hui ✅", d: `${n} essai(s) au compteur. Reviens dans deux jours — c'est le rythme qui construit la main, pas les séances marathon.`, c: 'var(--good)' };
  if (d === 1) return { t: 'Écrit hier', d: "Repos mérité. Le prochain tombe demain.", c: 'var(--good)' };
  if (d <= 3) return { t: `À écrire aujourd'hui`, d: `Dernier essai il y a ${d} jours. C'est le moment exact où l'entraînement paie.`, c: 'var(--accent)' };
  return { t: `${d} jours sans écrire`, d: "L'expression écrite est la seule compétence qui recule vite. Un format court de 10 minutes suffit à relancer la machine.", c: 'var(--bad)' };
}

function renderPlumeHome() {
  plume();
  const b = plumeBandeau();
  const notes = pNoted();
  const derniere = notes.length ? notes[notes.length - 1] : null;
  const brouillon = plume().draft;
  const enAttente = pEssays().filter(e => e.done && !e.note);

  const cartesFmt = Object.keys(window.PLUME_FORMATS).map(k => {
    const f = window.PLUME_FORMATS[k];
    const faits = pEssays().filter(e => e.fmt === k && e.done).length;
    const dispo = (window.PLUME_SUJETS || []).filter(s => s.fmt === k).length;
    return `<button class="tile" onclick="renderPlumeChoix('${k}')">
      <div class="ic" style="background:linear-gradient(135deg,${f.couleur}33,${f.couleur}11);color:${f.couleur}">${f.ic}</div>
      <div class="body">
        <div class="t">${f.nom}</div>
        <div class="d">${f.mots[0]}-${f.mots[1]} mots · ${f.min} min · ${dispo} sujet(s)</div>
      </div>
      <div class="badge ${faits ? '' : 'zero'}">${faits}</div>
    </button>`;
  }).join('');

  app.innerHTML = `
    <div class="card" style="border-color:${b.c}">
      <h2>✒️ La Plume</h2>
      <div class="sub">L'atelier d'expression écrite : tu écris au chrono, l'app te relit, puis je te note à la grille officielle.</div>
      <div class="mt" style="font-weight:800;color:${b.c}">${b.t}</div>
      <div class="sub">${b.d}</div>
      <button class="btn mt" onclick="renderPlumeChoix()">${brouillon ? '📄 Reprendre mon brouillon' : "✍️ Écrire maintenant"}</button>
      ${brouillon ? `<button class="btn ghost mt" onclick="plumeJeter()">Jeter le brouillon et repartir d'un sujet neuf</button>` : ''}
    </div>

    ${enAttente.length ? `
    <div class="banner">
      <div class="t">📤 ${enAttente.length} essai(s) écrit(s), pas encore noté(s)</div>
      <div class="d">L'app t'a déjà signalé les fautes mécaniques. Ce qu'elle ne peut pas juger — la force des idées, la justesse du ton, la vraie bande — c'est ce que la correction apporte.</div>
      <button class="btn" onclick="renderPlumeExport(${enAttente[enAttente.length - 1].id})">Faire corriger le dernier</button>
    </div>` : ''}

    ${notes.length ? `
    <div class="card">
      <h2 style="font-size:16px">📈 Ta courbe</h2>
      <div class="sub">${notes.length} essai(s) noté(s) · dernière note : <b style="color:var(--accent)">${derniere.note.affiche || (derniere.note.total + '/100')}</b></div>
      ${plumeCourbe()}
      <button class="btn sec mt" onclick="renderPlumeHisto()">Tous mes essais</button>
    </div>` : ''}

    <div class="sub mb" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">Les formats</div>
    ${cartesFmt}
    <button class="btn ghost mt" onclick="setView('home')">Retour à l'accueil</button>
  `;
  window.scrollTo(0, 0);
}

function plumeJeter() {
  if (!confirm('Jeter le brouillon en cours ?')) return;
  plume().draft = null; save(); renderPlumeChoix();
}

/* Courbe des notes, normalisées en % pour comparer les formats entre eux. */
function plumeCourbe() {
  const n = pNoted();
  if (n.length < 2) return `<div class="sub mt">La courbe apparaît au deuxième essai noté.</div>`;
  const W = 300, H = 110, pad = 8;
  const pts = n.map((e, i) => {
    const x = pad + (i / (n.length - 1)) * (W - 2 * pad);
    const y = H - pad - (e.note.total / 100) * (H - 2 * pad);
    return [x, y, e];
  });
  const path = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const cible = H - pad - 0.85 * (H - 2 * pad);
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;margin-top:10px">
    <line x1="${pad}" y1="${cible}" x2="${W - pad}" y2="${cible}" stroke="var(--good)" stroke-dasharray="4 4" stroke-width="1" opacity=".6"/>
    <text x="${W - pad}" y="${cible - 4}" fill="var(--good)" font-size="9" text-anchor="end">très bon niveau</text>
    <path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${pts.map(p => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.5" fill="var(--accent)"/>`).join('')}
  </svg>`;
}

/* ============================================================
   CHOIX DU SUJET
   ============================================================ */
function plumeSujetsDispo(fmt) {
  const seen = plume().seen || {};
  let l = (window.PLUME_SUJETS || []).filter(s => !fmt || s.fmt === fmt);
  /* jamais faits d'abord, puis les plus anciens */
  l.sort((a, b) => (seen[a.id] || 0) - (seen[b.id] || 0));
  return l;
}
function renderPlumeChoix(fmt) {
  const brouillon = plume().draft;
  if (brouillon && !fmt) {
    const s = pSujet(brouillon.sujet);
    if (s) return startPlume(s.id, true);
  }
  const seen = plume().seen || {};
  const liste = plumeSujetsDispo(fmt);
  const f = fmt ? pFmt(fmt) : null;

  const chips = ['<button class="segchip' + (fmt ? '' : ' on') + '" onclick="renderPlumeChoix()">Tous</button>']
    .concat(Object.keys(window.PLUME_FORMATS).map(k =>
      `<button class="segchip${fmt === k ? ' on' : ''}" onclick="renderPlumeChoix('${k}')">${window.PLUME_FORMATS[k].ic} ${window.PLUME_FORMATS[k].nom}</button>`)).join('');

  const rows = liste.map(s => {
    const ff = pFmt(s.fmt);
    const fait = seen[s.id];
    return `<button class="lrow" onclick="startPlume('${s.id}')" style="width:100%;text-align:left">
      <div class="n" style="background:${ff.couleur}22;color:${ff.couleur}">${ff.ic}</div>
      <div class="info">
        <div class="tt">${pEsc(s.titre)}</div>
        <div class="tg">${ff.nom} · ${s.th} · ${'●'.repeat(s.diff)}${'○'.repeat(5 - s.diff)}${fait ? ' · déjà écrit' : ''}</div>
      </div>
      <div class="sc">${ff.min}′</div>
    </button>`;
  }).join('');

  app.innerHTML = `
    <div class="card">
      <h2>Choisis ton sujet</h2>
      <div class="sub">Les sujets jamais traités remontent en haut. Tu peux refaire un sujet : c'est même le meilleur moyen de mesurer les progrès.</div>
    </div>
    <div class="segwrap mb">${chips}</div>
    ${f ? `<div class="expl mb"><b>${f.ic} ${f.nom}</b> — ${f.src}<br><br>${f.quoi}<br><br><b>Grille :</b> ${f.criteres.join(' · ')}<br><span class="sub">${f.bareme}</span></div>` : ''}
    ${rows}
    <button class="btn ghost mt" onclick="renderPlumeHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ============================================================
   L'ATELIER — chrono officiel, éditeur, compteur vivant
   ============================================================ */
let PL = null;
function startPlume(id, reprise) {
  const s = pSujet(id);
  if (!s) return renderPlumeChoix();
  const f = pFmt(s.fmt);
  const d = plume().draft;
  const texte = (reprise && d && d.sujet === id) ? d.texte : '';
  const ecoule = (reprise && d && d.sujet === id) ? (d.ecoule || 0) : 0;
  PL = { sujet: id, debut: Date.now(), ecoule, limite: f.min * 60, fini: false };

  app.innerHTML = `
    <div class="exbar">
      <span class="sec" style="color:${f.couleur}">${f.ic} ${f.nom}</span>
      <span class="timer" id="pl_timer">⏱ ${plumeMMSS(f.min * 60 - ecoule)}</span>
    </div>
    <div class="card" style="border-color:${f.couleur}">
      <div class="sub" style="font-weight:700;color:${f.couleur}">${pEsc(s.titre)}</div>
      ${s.ctx ? `<div class="sub mt" style="font-style:italic">${pEsc(s.ctx)}</div>` : ''}
      <div class="mt" style="white-space:pre-wrap;font-size:15px;line-height:1.55">${plumeGras(s.prompt)}</div>
    </div>
    <div class="qmeta">
      <span>Cible : ${f.mots[0]}-${f.mots[1]} mots</span>
      <span id="pl_count">0 mot</span>
    </div>
    <textarea id="pl_txt" class="transinput" style="min-height:340px;font-size:15px;line-height:1.6"
      placeholder="Écris ici. Sépare tes paragraphes par une ligne vide — la structure se voit avant la langue."
      oninput="plumeTick()">${pEsc(texte)}</textarea>
    <button class="btn" onclick="finishPlume()">✅ J'ai fini — relis-moi</button>
    <button class="btn ghost mt" onclick="plumeQuitter()">Garder comme brouillon et sortir</button>
  `;
  window.scrollTo(0, 0);
  plumeTick();
  plumeChrono();
}
function plumeMMSS(s) {
  s = Math.max(0, Math.round(s));
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}
function plumeChrono() {
  if (window._plTimer) clearInterval(window._plTimer);
  window._plTimer = setInterval(() => {
    const el = document.getElementById('pl_timer');
    if (!el || !PL || PL.fini) { clearInterval(window._plTimer); window._plTimer = null; return; }
    const passe = PL.ecoule + (Date.now() - PL.debut) / 1000;
    const reste = PL.limite - passe;
    el.textContent = (reste >= 0 ? '⏱ ' : '⏱ +') + plumeMMSS(Math.abs(reste));
    el.style.color = reste < 0 ? 'var(--bad)' : (reste < 120 ? 'var(--accent)' : '');
  }, 1000);
}
function plumeTick() {
  const ta = document.getElementById('pl_txt');
  const c = document.getElementById('pl_count');
  if (!ta || !c || !PL) return;
  const s = pSujet(PL.sujet), f = pFmt(s.fmt);
  const n = (ta.value.trim().match(/\S+/g) || []).length;
  c.textContent = n + ' mot' + (n > 1 ? 's' : '');
  c.style.color = n < f.mots[0] ? 'var(--muted)' : (n > f.mots[1] * 1.25 ? 'var(--bad)' : 'var(--good)');
  c.style.fontWeight = '800';
  /* sauvegarde continue : rien ne se perd si l'app se ferme */
  clearTimeout(window._plSave);
  window._plSave = setTimeout(() => {
    if (!PL) return;
    plume().draft = { sujet: PL.sujet, texte: ta.value, ecoule: PL.ecoule + (Date.now() - PL.debut) / 1000 };
    save();
  }, 700);
}
function plumeQuitter() {
  const ta = document.getElementById('pl_txt');
  if (ta && PL) {
    plume().draft = { sujet: PL.sujet, texte: ta.value, ecoule: PL.ecoule + (Date.now() - PL.debut) / 1000 };
    save(); toast('📄 Brouillon gardé');
  }
  if (window._plTimer) { clearInterval(window._plTimer); window._plTimer = null; }
  PL = null;
  renderPlumeHome();
}
/* **gras** du prompt → <b> (les consignes officielles soulignent les mots qui piègent) */
function plumeGras(s) {
  return pEsc(s).replace(/\*\*([^*]+)\*\*/g, '<b style="color:var(--accent)">$1</b>');
}

/* ============================================================
   LA RELECTURE — ce que l'app peut juger seule, tout de suite
   ============================================================ */
const PLUME_SEV = {
  faute:    { ic: '❌', nom: 'Fautes',            c: 'var(--bad)',    d: "Un correcteur les compte. Chacune coûte." },
  tache:    { ic: '📐', nom: 'Consigne',          c: 'var(--accent2)',d: "Le format avant la langue : c'est ce qui plafonne une note." },
  calque:   { ic: '🇫🇷', nom: 'Réflexes français', c: 'var(--accent)', d: "C'est peut-être juste — vérifie que c'est bien le mot que tu voulais." },
  registre: { ic: '🎩', nom: 'Registre',          c: 'var(--purple)', d: "Correct à l'oral, hors registre dans une copie notée." },
  pauvre:   { ic: '📉', nom: 'Plafond de bande',  c: 'var(--blue)',   d: "Rien de faux — mais c'est ce qui t'empêche de monter." }
};

function finishPlume() {
  const ta = document.getElementById('pl_txt');
  if (!PL || !ta) return renderPlumeHome();
  const texte = ta.value;
  if ((texte.trim().match(/\S+/g) || []).length < 20) { toast('Écris un peu plus avant de me le donner'); return; }
  if (window._plTimer) { clearInterval(window._plTimer); window._plTimer = null; }
  PL.fini = true;
  const mins = Math.round((PL.ecoule + (Date.now() - PL.debut) / 1000) / 60);
  const s = pSujet(PL.sujet);
  const id = Date.now();
  pEssays().push({ id, sujet: PL.sujet, fmt: s.fmt, texte, mins, done: id, note: null });
  plume().seen[PL.sujet] = id;
  plume().draft = null;
  addXp(25); save(); touchDay(); markStudy();
  if (typeof checkAchievements === 'function') checkAchievements();
  renderPlumeRelecture(id);
}

function renderPlumeRelecture(id) {
  const e = pById(id);
  if (!e) return renderPlumeHome();
  const s = pSujet(e.sujet), f = pFmt(e.fmt);
  const r = plumeRelire(e.texte, s);
  e.relu = { score: r.score, n: r.drapeaux.length };
  save();

  const groupes = Object.keys(PLUME_SEV).map(sev => {
    const l = r.drapeaux.filter(d => d.sev === sev);
    if (!l.length) return '';
    const g = PLUME_SEV[sev];
    return `<div class="card" style="border-left:3px solid ${g.c}">
      <div style="font-weight:800;color:${g.c}">${g.ic} ${g.nom} · ${l.length}</div>
      <div class="sub" style="margin-bottom:8px">${g.d}</div>
      ${l.map(d => `<details class="whyx" style="margin-top:6px">
        <summary>${pEsc(d.t)}${d.n > 1 ? ` <span class="pill">×${d.n}</span>` : ''}</summary>
        <div>${d.ex.length ? `<div style="margin-bottom:7px;font-family:ui-monospace,monospace;font-size:12.5px;color:${g.c}">« ${d.ex.map(pEsc).join(' » · « ')} »</div>` : ''}${d.d}</div>
      </details>`).join('')}
    </div>`;
  }).join('');

  const testes = r.attendus.filter(a => a.ok !== null);
  const trouves = testes.filter(a => a.ok).length;
  const idees = `<div class="card">
      <h2 style="font-size:16px">🎯 Ce que le sujet demandait</h2>
      <div class="sub" style="margin-bottom:10px">L'app cherche des marqueurs dans ton texte. <b>Si elle rate une idée que tu as bien traitée, c'est elle qui a tort</b> — le vrai verdict vient de la correction. Traité : ${trouves}/${testes.length}.</div>
      ${r.attendus.map(a => a.ok === null
        ? `<div class="goal"><span class="gk">👁</span><span class="gt">${pEsc(a.q)}</span><span class="gs">à l'œil</span></div>`
        : `<div class="goal ${a.ok ? 'ok' : ''}"><span class="gk">${a.ok ? '✅' : '⬜️'}</span><span class="gt">${pEsc(a.q)}</span></div>`).join('')}
    </div>`;

  const m = r.mesures;
  const couleurScore = r.score >= 85 ? 'var(--good)' : r.score >= 65 ? 'var(--accent)' : 'var(--bad)';

  app.innerHTML = `
    <div class="card big" style="border-color:${couleurScore}">
      <div class="em">✒️</div>
      <div class="score" style="color:${couleurScore}">${r.score}<span style="font-size:22px;color:var(--muted)">/100</span></div>
      <div class="lab">score d'atelier · ce que l'app mesure seule</div>
      <div class="sub mt">Ce n'est <b>pas</b> ta note d'examen : la machine voit les fautes mécaniques, le registre et les signaux de plafond. Elle ne voit ni la force de tes idées, ni la justesse du ton. Ça, c'est la correction.</div>
    </div>

    <div class="scoreline">
      <div><div class="v" style="font-size:20px">${m.nMots}</div><div class="k">mots<br><span style="font-size:10px">cible ${f.mots[0]}-${f.mots[1]}</span></div></div>
      <div><div class="v" style="font-size:20px">${m.nParas}</div><div class="k">paragraphes</div></div>
      <div><div class="v" style="font-size:20px">${m.moy}</div><div class="k">mots/phrase</div></div>
      <div><div class="v" style="font-size:20px">${e.mins}′</div><div class="k">sur ${f.min}′</div></div>
    </div>

    ${r.drapeaux.length === 0 ? `<div class="expl ok mb">Aucun drapeau mécanique. C'est rare — passe à la correction, c'est là que ça se joue maintenant.</div>` : groupes}
    ${idees}

    <div class="card">
      <h2 style="font-size:16px">🪶 Ce qu'un natif aurait pu placer</h2>
      <div class="sub" style="margin-bottom:10px">Volontairement caché avant l'écriture — sinon tu recopies au lieu de produire. Envoie dans <b>La Moisson</b> celles que tu veux vraiment t'approprier.</div>
      ${s.lexique.map((l, i) => `<div class="vrow">
        <div class="vinfo"><div class="ven" style="font-size:14px">${pEsc(l[0])}</div><div class="vfr">${pEsc(l[1])}</div></div>
        <button class="btn ghost" style="width:auto;padding:7px 11px;margin:0;font-size:12px" onclick="plumeVersMoisson('${e.sujet}',${i},this)">🌾</button>
      </div>`).join('')}
    </div>

    <button class="btn" onclick="renderPlumeExport(${e.id})">📤 Faire corriger à la grille officielle</button>
    <button class="btn sec mt" onclick="renderPlumeCharpente('${e.fmt}')">🏛 Revoir la charpente du format</button>
    <button class="btn ghost mt" onclick="renderPlumeHome()">Plus tard</button>
  `;
  window.scrollTo(0, 0);
}

/* Une tournure du sujet part directement dans le deck perso. */
function plumeVersMoisson(sujetId, i, btn) {
  const s = pSujet(sujetId);
  if (!s || !s.lexique[i]) return;
  const [en, fr] = s.lexique[i];
  if (typeof mine !== 'function') { toast('La Moisson est indisponible'); return; }
  const key = typeof mNorm === 'function' ? mNorm(en) : en.toLowerCase();
  if (mine().some(x => (typeof mNorm === 'function' ? mNorm(x.en) : x.en.toLowerCase()) === key)) {
    toast('Déjà dans ta Moisson'); if (btn) btn.textContent = '✓'; return;
  }
  const now = Date.now();
  mine().push({ id: now + i, en, fr, note: '', ex: '', exfr: '', src: 'La Plume · ' + s.titre,
    created: now, updated: now, k: 1, srs: { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false } });
  save(); addXp(2);
  if (btn) { btn.textContent = '✓'; btn.style.color = 'var(--good)'; }
  toast('🌾 Ajoutée à La Moisson');
}

/* ============================================================
   LA CHARPENTE — le squelette du format et sa grille
   ============================================================ */
function renderPlumeCharpente(k) {
  const f = pFmt(k);
  if (!f) return renderPlumeHome();
  app.innerHTML = `
    <div class="card" style="border-color:${f.couleur}">
      <h2>${f.ic} ${f.nom}</h2>
      <div class="sub">${f.src}</div>
      <div class="mt">${f.quoi}</div>
    </div>
    <div class="card">
      <h2 style="font-size:16px">🏛 La charpente</h2>
      <div class="sub" style="margin-bottom:10px">Le plan que le correcteur s'attend à trouver. Pas une recette : un cadre, pour que ton effort passe dans les idées et pas dans l'architecture.</div>
      ${f.charpente.map((c, i) => `<div class="lrow" style="cursor:default">
        <div class="n" style="background:${f.couleur}22;color:${f.couleur}">${i + 1}</div>
        <div class="info"><div class="tt" style="font-size:14px;font-weight:600;line-height:1.45">${pEsc(c)}</div></div>
      </div>`).join('')}
    </div>
    <div class="card">
      <h2 style="font-size:16px">⚖️ La grille</h2>
      <div class="segwrap mb">${f.criteres.map(c => `<span class="segchip on">${pEsc(c)}</span>`).join('')}</div>
      <div class="sub">${f.bareme}</div>
      <div class="expl mt"><b>Longueur imposée :</b> ${f.mots[0]}-${f.mots[1]} mots en ${f.min} minutes. Sous le minimum, la note est plafonnée mécaniquement — c'est la première chose que vérifie un correcteur, avant même de lire.</div>
    </div>
    <button class="btn" onclick="renderPlumeChoix('${k}')">Écrire dans ce format</button>
    <button class="btn ghost mt" onclick="renderPlumeHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ============================================================
   EXPORT — le texte porte sa propre consigne, donc il marche
   dans n'importe quelle conversation, même sans contexte.
   ============================================================ */
let PLUME_EXPORT = null;
function plumeExportText(id) {
  const e = pById(id);
  if (!e) return '';
  const s = pSujet(e.sujet), f = pFmt(e.fmt);
  const r = plumeRelire(e.texte, s);
  const d = new Date(e.done).toLocaleDateString('fr-FR');

  let t = `# ✒️ LA PLUME — un essai à corriger\n(export de mon app 990, écrit le ${d})\n\n`;
  t += `Claude, voici un devoir d'expression écrite que je viens d'écrire au chrono. Corrige-le **à la grille officielle, sans complaisance** : je prépare une certification d'anglais et je vise le haut du barème, pas l'encouragement.\n\n`;
  t += `## L'ÉPREUVE\n`;
  t += `· Format : ${f.nom} — ${f.src}\n`;
  t += `· Grille : ${f.criteres.join(' · ')}\n`;
  t += `· ${f.bareme}\n`;
  t += `· Contrainte : ${f.mots[0]}-${f.mots[1]} mots en ${f.min} minutes.\n`;
  t += `· Ce que j'ai fait : **${r.mesures.nMots} mots en ${e.mins} minutes**, ${r.mesures.nParas} paragraphe(s).\n\n`;
  t += `## LE SUJET\n`;
  if (s.ctx) t += `${s.ctx}\n\n`;
  t += `${s.prompt}\n\n`;
  t += `## MON TEXTE\n\n${e.texte}\n\n`;
  const durs = r.drapeaux.filter(x => x.sev === 'faute' || x.sev === 'tache');
  t += `## CE QUE LA MACHINE A DÉJÀ VU\n`;
  t += durs.length
    ? `${durs.map(x => '· ' + x.t + (x.ex.length ? ` (« ${x.ex.join(' », « ')} »)` : '')).join('\n')}\n\nInutile de t'attarder dessus : dis-moi plutôt ce qu'un relecteur automatique ne peut pas voir.\n\n`
    : `Rien de mécanique. Va donc directement à ce qui compte : les idées, le ton, la bande réelle.\n\n`;
  t += `════════════════════════════════════════\n`;
  t += `RÉPONDS EXACTEMENT DANS CE FORMAT — je recolle ta réponse dans l'app, qui la parse :\n\n`;
  t += `## NOTE\n`;
  f.criteres.forEach(c => { t += `> ${c} : X/Y\n`; });
  t += `> TOTAL : X/Y\n\n`;
  t += `## VERDICT\n`;
  t += `Quatre à six lignes, franches : ce qui tient déjà, ce qui plafonne la note, et **la seule chose** à changer en priorité au prochain essai.\n\n`;
  t += `## CORRECTIONS\n`;
  t += `Une ligne par correction, avec DEUX doubles-deux-points :\n`;
  t += `- ce que j'ai écrit :: la version juste :: pourquoi, en une ligne\n`;
  t += `Prends les 8 à 12 plus rentables : d'abord ce qui coûte des points, ensuite ce qui me ferait passer de « correct » à « natif ». Ne recopie pas la liste de la machine ci-dessus.\n\n`;
  t += `## LE PARAGRAPHE REFAIT\n`;
  t += `Reprends **un seul** de mes paragraphes — le plus faible — et réécris-le au niveau du haut du barème, en gardant mes idées et pas les tiennes. C'est le paragraphe que je vais étudier.\n\n`;
  t += `## TOURNURES\n`;
  t += `Trois à cinq expressions que j'aurais dû employer sur CE sujet, au format de ma Moisson :\n`;
  t += `@@ the expression\n= le sens en français, une ligne\n~ la nuance : registre, quand on l'emploie et quand on l'évite, le piège de calque\nex an example sentence in natural English\nfr sa traduction\n\n`;
  t += `Règles : garde les titres de section tels quels ; pas de blabla autour, je copie tout le bloc d'un coup.\n`;
  return t;
}
function renderPlumeExport(id) {
  const e = pById(id);
  if (!e) return renderPlumeHome();
  PLUME_EXPORT = plumeExportText(id);
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(PLUME_EXPORT).then(() => toast('📋 Copié — colle-le à Claude'), () => {});
  app.innerHTML = `
    <div class="card">
      <h2>📤 Faire corriger</h2>
      <div class="sub">Copié dans ton presse-papier. Colle-le tel quel dans ta conversation avec Claude : le sujet, ton texte, la grille et la consigne de correction sont déjà dedans. Puis reviens avec «&nbsp;📥&nbsp;».</div>
    </div>
    <textarea class="transinput" style="min-height:300px;font-size:12.5px" readonly onclick="this.select()">${pEsc(PLUME_EXPORT)}</textarea>
    <button class="btn" onclick="copyPlumeExport()">📋 Copier à nouveau</button>
    <button class="btn sec mt" onclick="renderPlumeImport(${id})">📥 Coller la correction</button>
    <button class="btn ghost mt" onclick="renderPlumeHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function copyPlumeExport() {
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(PLUME_EXPORT).then(() => toast('📋 Copié'), () => toast('Sélectionne et copie à la main'));
  else toast('Sélectionne et copie à la main');
}

/* ============================================================
   IMPORT — parse la correction (tolérant : gras, puces, fences)
   ============================================================ */
function parsePlume(raw) {
  const lignes = String(raw || '').replace(/\r/g, '').split('\n');
  const out = { crits: [], total: null, affiche: '', verdict: '', corrections: [], para: '', tournures: [] };
  let sec = '';
  const nettoie = l => l.replace(/\*\*/g, '').replace(/__/g, '').replace(/^\s*[-*•·]\s*/, '').trim();
  const paraL = [], verdL = [];

  lignes.forEach(brut => {
    if (/^\s*```/.test(brut)) return;
    const l = nettoie(brut);
    const titre = l.replace(/^#+\s*/, '').toUpperCase();
    if (/^#{1,4}\s/.test(brut.trim()) || /^(NOTE|VERDICT|CORRECTIONS?|LE PARAGRAPHE REFAIT|PARAGRAPHE|TOURNURES?)\s*:?\s*$/.test(titre)) {
      if (/\bNOTE\b/.test(titre)) { sec = 'note'; return; }
      if (/\bVERDICT\b/.test(titre)) { sec = 'verdict'; return; }
      if (/\bCORRECTION/.test(titre)) { sec = 'corr'; return; }
      if (/PARAGRAPHE/.test(titre)) { sec = 'para'; return; }
      if (/TOURNURE/.test(titre)) { sec = 'tourn'; return; }
    }
    if (sec === 'note') {
      const m = l.match(/^>?\s*(.+?)\s*[:：]\s*([\d.,]+)\s*\/\s*([\d.,]+)/);
      if (m) {
        const nom = m[1].replace(/^>\s*/, '').trim();
        const v = parseFloat(m[2].replace(',', '.')), sur = parseFloat(m[3].replace(',', '.'));
        if (!isNaN(v) && sur > 0) {
          if (/total|global|overall|bande|band/i.test(nom)) { out.total = Math.round(v / sur * 100); out.affiche = m[2] + '/' + m[3]; }
          else out.crits.push({ nom, v, sur });
        }
      }
      return;
    }
    if (sec === 'verdict') { if (l) verdL.push(l); return; }
    if (sec === 'corr') {
      const p = l.split(/\s*::\s*/);
      if (p.length >= 2) out.corrections.push({ avant: p[0].trim(), apres: p[1].trim(), pourquoi: (p[2] || '').trim(), fr: (p[3] || '').trim() });
      return;
    }
    if (sec === 'para') { paraL.push(brut.replace(/\*\*/g, '')); return; }
  });

  out.verdict = verdL.join(' ').trim();
  out.para = paraL.join('\n').trim();
  /* les tournures passent par le parseur de La Moisson : même format, même deck */
  if (typeof parseMoisson === 'function') {
    const apres = String(raw).split(/#+\s*TOURNURES?/i)[1];
    if (apres) out.tournures = parseMoisson(apres);
  }
  /* pas de total annoncé mais des critères : on le calcule */
  if (out.total == null && out.crits.length) {
    const som = out.crits.reduce((a, c) => a + c.v / c.sur, 0) / out.crits.length;
    out.total = Math.round(som * 100);
    out.affiche = out.crits.map(c => c.v).join('+') + ' sur ' + out.crits.map(c => c.sur).join('+');
  }
  return out;
}

function renderPlumeImport(id, msg, keep, isErr) {
  app.innerHTML = `
    <div class="card">
      <h2>📥 Importer la correction</h2>
      <div class="sub">Colle toute la réponse de Claude. L'app range la note dans ta courbe, garde les corrections ligne à ligne et le paragraphe réécrit, et verse les tournures dans <b>La Moisson</b>.</div>
    </div>
    ${msg ? `<div class="expl ${isErr ? 'no' : 'ok'} mb">${msg}</div>` : ''}
    <textarea id="pl_paste" class="transinput" style="min-height:${msg && !isErr ? '120px' : '260px'};font-size:13px" placeholder="## NOTE&#10;> Task Response : 7/9&#10;> TOTAL : 6.5/9&#10;&#10;## VERDICT&#10;…">${pEsc(keep || '')}</textarea>
    <button class="btn ${msg && !isErr ? 'sec' : ''}" onclick="runPlumeImport(${id})">Importer</button>
    ${msg && !isErr ? `<button class="btn mt" onclick="renderPlumeEssai(${id})">Voir la correction</button>` : ''}
    <button class="btn ghost mt" onclick="renderPlumeHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}

function runPlumeImport(id) {
  const raw = (document.getElementById('pl_paste') || {}).value || '';
  const p = parsePlume(raw);
  const e = pById(id);
  if (!e) return renderPlumeHome();
  if (p.total == null && !p.corrections.length && !p.verdict) {
    toast('Correction illisible');
    renderPlumeImport(id, "Je n'ai reconnu ni note, ni corrections là-dedans. La réponse doit garder les titres <b>## NOTE</b>, <b>## CORRECTIONS</b>… tels quels. Redemande à Claude de répondre au format de l'export.", raw, true);
    return;
  }
  e.note = { total: p.total, affiche: p.affiche, crits: p.crits, verdict: p.verdict };
  e.corrections = p.corrections;
  e.para = p.para;
  save();

  /* les tournures rejoignent le deck perso */
  let versees = 0;
  if (p.tournures.length && typeof mine === 'function') {
    const now = Date.now();
    p.tournures.forEach((tr, i) => {
      const key = typeof mNorm === 'function' ? mNorm(tr.en) : tr.en.toLowerCase();
      if (mine().some(x => (typeof mNorm === 'function' ? mNorm(x.en) : x.en.toLowerCase()) === key)) return;
      mine().push({ id: now + i, en: tr.en, fr: tr.fr, note: tr.note, ex: tr.ex, exfr: tr.exfr,
        src: 'La Plume · ' + (pSujet(e.sujet) || {}).titre, created: now, updated: now, k: 1,
        srs: { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false } });
      versees++;
    });
  }
  /* chaque correction devient un exercice de production dans LA LIME
     (seule la forme juste est réimprimée — jamais la fautive) */
  let limes = null;
  if (typeof limeFromCorrections === 'function')
    limes = limeFromCorrections(p.corrections, 'La Plume · ' + ((pSujet(e.sujet) || {}).titre || ''));

  save(); touchDay();
  addXp(20);
  if (typeof checkAchievements === 'function') checkAchievements();
  const bits = [];
  if (p.total != null) bits.push(`note <b>${p.affiche || p.total + '/100'}</b> enregistrée`);
  if (p.corrections.length) bits.push(`<b>${p.corrections.length}</b> correction(s)`);
  if (p.para) bits.push('le paragraphe réécrit');
  if (versees) bits.push(`<b>${versees}</b> tournure(s) versée(s) dans La Moisson`);
  if (limes && limes.n) bits.push(`<b>${limes.n}</b> exercice(s) créé(s) dans La Lime`);
  if (limes && limes.maj) bits.push(`<b>${limes.maj}</b> exercice(s) réparé(s)`);
  if (limes && limes.sansConsigne) bits.push(`<b>${limes.sansConsigne}</b> sans consigne en français, écarté(s)`);
  toast('✨ Correction importée');
  renderPlumeImport(id, `✨ ${bits.join(' · ')}.`);
}

/* ============================================================
   UN ESSAI CORRIGÉ, EN DÉTAIL
   ============================================================ */
function renderPlumeEssai(id) {
  const e = pById(id);
  if (!e) return renderPlumeHome();
  const s = pSujet(e.sujet), f = pFmt(e.fmt);
  const n = e.note;
  app.innerHTML = `
    <div class="card" style="border-color:${f.couleur}">
      <div class="sub" style="color:${f.couleur};font-weight:800">${f.ic} ${f.nom}</div>
      <h2 style="font-size:17px">${pEsc(s ? s.titre : '')}</h2>
      <div class="sub">${new Date(e.done).toLocaleDateString('fr-FR')} · ${(e.texte.match(/\S+/g) || []).length} mots en ${e.mins} min</div>
    </div>
    ${n ? `
    <div class="card big">
      <div class="score" style="color:var(--accent)">${n.affiche || n.total + '/100'}</div>
      <div class="lab">${f.nom}</div>
      ${n.crits && n.crits.length ? `<div class="scoreline">${n.crits.map(c => `<div><div class="v" style="font-size:19px">${c.v}<span style="font-size:12px;color:var(--muted)">/${c.sur}</span></div><div class="k" style="font-size:10.5px">${pEsc(c.nom)}</div></div>`).join('')}</div>` : ''}
      ${n.verdict ? `<div class="expl mt" style="text-align:left">${pEsc(n.verdict)}</div>` : ''}
    </div>` : `<div class="banner"><div class="t">Pas encore corrigé</div><div class="d">L'app t'a relu, mais la note à la grille officielle demande une vraie lecture.</div><button class="btn" onclick="renderPlumeExport(${e.id})">📤 Faire corriger</button></div>`}

    ${e.corrections && e.corrections.length ? `
    <div class="card">
      <h2 style="font-size:16px">✂️ Ligne à ligne</h2>
      ${e.corrections.map(c => `<div class="review-item" style="border-left-color:var(--accent)">
        <div class="ans"><span class="ko">${pEsc(c.avant)}</span></div>
        <div class="ans mt"><span class="ok">${pEsc(c.apres)}</span></div>
        ${c.pourquoi ? `<div class="sub" style="margin-top:6px">${pEsc(c.pourquoi)}</div>` : ''}
      </div>`).join('')}
    </div>` : ''}

    ${e.para ? `
    <div class="card">
      <h2 style="font-size:16px">🪄 Ton paragraphe, refait</h2>
      <div class="sub" style="margin-bottom:8px">Tes idées, écrites au niveau visé. C'est le paragraphe à relire à voix haute.</div>
      <div class="passage" style="max-height:none">${pEsc(e.para)}</div>
      <button class="btn sec mt" onclick="plumeLire(${e.id})">🔊 L'écouter</button>
    </div>` : ''}

    <details class="whyx mb"><summary>📄 Mon texte d'origine</summary><div style="white-space:pre-wrap">${pEsc(e.texte)}</div></details>
    ${!n ? '' : `<button class="btn sec" onclick="renderPlumeExport(${e.id})">📤 Re-corriger</button>`}
    <button class="btn ghost mt" onclick="renderPlumeHisto()">Tous mes essais</button>
  `;
  window.scrollTo(0, 0);
}
function plumeLire(id) { const e = pById(id); if (e && e.para && typeof speak === 'function') speak(e.para); }

/* ---------- HISTORIQUE ---------- */
function renderPlumeHisto() {
  const l = [...pEssays()].reverse();
  app.innerHTML = `
    <div class="card"><h2>📚 Mes essais</h2><div class="sub">${l.length} écrit(s) · ${pNoted().length} noté(s)</div>${plumeCourbe()}</div>
    ${l.length ? l.map(e => {
      const s = pSujet(e.sujet), f = pFmt(e.fmt);
      return `<button class="hist" style="width:100%;text-align:left;cursor:pointer" onclick="renderPlumeEssai(${e.id})">
        <div style="min-width:0;flex:1">
          <div style="font-weight:700;font-size:14px">${f.ic} ${pEsc(s ? s.titre : e.fmt)}</div>
          <div class="d">${new Date(e.done).toLocaleDateString('fr-FR')} · ${(e.texte.match(/\S+/g) || []).length} mots${e.relu ? ` · atelier ${e.relu.score}/100` : ''}</div>
        </div>
        <b style="color:${e.note ? 'var(--accent)' : 'var(--muted)'};font-size:14px">${e.note ? (e.note.affiche || e.note.total + '/100') : '—'}</b>
      </button>`;
    }).join('') : '<div class="sub center mt">Rien encore.</div>'}
    <button class="btn ghost mt" onclick="renderPlumeHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ---------- ce que la tuile d'accueil affiche ---------- */
function plumeTuileTexte() {
  const n = pEssays().filter(e => e.done).length;
  const attente = pEssays().filter(e => e.done && !e.note).length;
  if (plume().draft) return 'Un brouillon en cours · reprends-le';
  if (attente) return `${attente} essai(s) à faire corriger`;
  if (!n) return "Expression écrite au chrono · 7 formats, 37 sujets";
  const d = pDaysSince();
  if (d === 0) return `${n} essai(s) · écrit aujourd'hui ✅`;
  return `${n} essai(s) · dernier il y a ${d} j`;
}
/* true = il y a quelque chose à faire (brouillon, essai non corrigé, ou c'est le jour) */
function plumeAlerte() { return !!(plume().draft || pEssays().some(e => e.done && !e.note) || pDue()); }
