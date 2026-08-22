/* ============================================================
   990 — L'ANGLAIS DE JANE EYRE : le style littéraire soutenu.
   Hub dédié : les tournures de la grande prose, un lexique choisi
   (audio UK), deux extraits de Charlotte Brontë glosés, un atelier
   de transformation « neutre → littéraire ».
   Se charge APRÈS elevate.js (pour speakVoice) et AVANT app.js.
   ============================================================ */

/* ---------- 1) LES TOURNURES ---------- */
window.LIT_FORMS = [
  { name: "L'inversion négative", rule: "Quand la phrase commence par un mot <b>négatif ou restrictif</b> (never, not until, no sooner, seldom, rarely, little, only then, hardly…), on <b>inverse comme dans une question</b> : auxiliaire avant le sujet. C'est la signature du style soutenu.",
    ex: [["Never once did I suspect the truth.", "Pas une seule fois je ne soupçonnai la vérité. (I never suspected → Never did I suspect)"],
      ["No sooner had she spoken than the door opened.", "À peine eut-elle parlé que la porte s'ouvrit."],
      ["Not until dawn did he return.", "Ce ne fut qu'à l'aube qu'il revint."],
      ["Seldom have I beheld such beauty.", "Rarement ai-je contemplé pareille beauté."],
      ["Little did they know what awaited them.", "Ils étaient loin de savoir ce qui les attendait."],
      ["Only then did I understand.", "C'est alors seulement que je compris."]] },
  { name: "La concession antéposée (as / though)", rule: "Pour <b>concéder avec élégance</b>, on met l'adjectif (ou l'adverbe) EN TÊTE, suivi de <b>as</b> ou <b>though</b> : « <i>Adjectif</i> + as/though + sujet + verbe ». Équivaut à « bien que… ». C'est exactement le « <i>concerned as I was…</i> ».",
    ex: [["Concerned as I was, I said nothing.", "Si inquiet que je fusse, je ne dis rien. (= Though I was concerned)"],
      ["Try as I might, I could not forget her.", "J'avais beau essayer, je ne pouvais l'oublier."],
      ["Cold though the night was, we pressed on.", "Si froide que fût la nuit, nous poursuivîmes."],
      ["Much as I admired him, I could not agree.", "Quelque admiration que j'eusse pour lui, je ne pouvais consentir."],
      ["Young as she was, she understood everything.", "Toute jeune qu'elle était, elle comprenait tout."]] },
  { name: "L'inversion conditionnelle (sans « if »)", rule: "Le conditionnel soutenu <b>supprime « if »</b> et inverse : <b>Had</b> I…, <b>Were</b> I to…, <b>Should</b> you… C'est plus formel et plus littéraire que « if ».",
    ex: [["Had I known, I would have stayed.", "L'eussé-je su, je serais resté. (= If I had known)"],
      ["Were I to leave, who would remain?", "Si je devais partir, qui resterait ?"],
      ["Should you need anything, do not hesitate.", "Si d'aventure vous aviez besoin de quoi que ce soit, n'hésitez pas."]] },
  { name: "L'emphase et le relief", rule: "Mettre en valeur : la <b>tournure clivée</b> (It was… that…), le <b>pseudo-clivage</b> (What… was…), <b>so/such… that…</b> avec inversion, et l'<b>antéposition</b> d'un complément de lieu (avec inversion du verbe).",
    ex: [["It was then that she understood.", "Ce fut alors qu'elle comprit. (clivage)"],
      ["What struck me was the silence.", "Ce qui me frappa, ce fut le silence. (pseudo-clivage)"],
      ["So great was her joy that she wept.", "Si grande était sa joie qu'elle en pleura."],
      ["Such was the silence that I could hear my heart.", "Tel était le silence que j'entendais mon cœur."],
      ["Down the lane came a solitary figure.", "Au bout du chemin s'avança une silhouette solitaire."],
      ["In the distance rose the dark towers of the house.", "Au loin se dressaient les sombres tours de la demeure."]] }
];

/* ---------- 2) LE LEXIQUE CHOISI ---------- */
window.LIT_WORDS = [
  // Verbes
  ["to gaze", "contempler, fixer du regard", "She gazed out at the moor for a long while."],
  ["to behold", "contempler, voir (littéraire)", "He beheld a sight he would never forget."],
  ["to ponder", "méditer, réfléchir longuement à", "I pondered his strange words all night."],
  ["to muse", "songer, rêvasser", "She mused on the days gone by."],
  ["to yearn (for)", "aspirer ardemment à, languir après", "He yearned for a freedom he had never known."],
  ["to linger", "s'attarder, traîner", "The scent of roses lingered in the hall."],
  ["to dwell (on)", "s'appesantir sur, ressasser", "Do not dwell on what cannot be changed."],
  ["to discern", "discerner, distinguer", "I could just discern a figure in the mist."],
  ["to relish", "savourer, se délecter de", "She relished every moment of the journey."],
  ["to loathe", "abhorrer, détester profondément", "He loathed idleness above all things."],
  ["to endeavour", "s'efforcer de, s'employer à", "I shall endeavour to be worthy of your trust."],
  ["to summon", "rassembler (courage), convoquer", "She summoned all her courage and spoke."],
  ["to falter", "vaciller, hésiter, défaillir", "His voice faltered as he read the letter."],
  ["to conceal", "dissimuler, cacher", "She could not conceal her joy."],
  ["to cherish", "chérir, tenir précieusement à", "I cherish the memory of that summer."],
  ["to dread", "redouter, appréhender", "He dreaded the coming winter."],
  ["to wander", "errer, déambuler", "We wandered through the silent gardens."],
  // Adjectifs
  ["melancholy", "mélancolique", "A melancholy air hung over the old house."],
  ["serene", "serein, paisible", "Her face was perfectly serene."],
  ["resolute", "résolu, déterminé", "She was resolute in her decision."],
  ["austere", "austère, sévère", "The room was bare and austere."],
  ["wistful", "nostalgique, songeur", "He gave a wistful smile."],
  ["forlorn", "délaissé, désolé, abandonné", "A forlorn little figure stood at the gate."],
  ["luminous", "lumineux, rayonnant", "Her luminous eyes met mine."],
  ["sombre", "sombre, grave (GB)", "The sky grew sombre before the storm."],
  ["tender", "tendre, doux", "She spoke in a tender voice."],
  ["desolate", "désolé, dévasté", "The moor stretched out, vast and desolate."],
  ["weary", "las, épuisé", "Weary and cold, we reached the inn at last."],
  ["quaint", "pittoresque, charmant et désuet", "A quaint little village nestled in the valley."],
  ["formidable", "redoutable, imposant", "She was a formidable adversary."],
  ["radiant", "radieux, éclatant", "The bride looked radiant."],
  // Noms & atmosphère
  ["solitude", "la solitude", "He found a strange comfort in solitude."],
  ["reverie", "la rêverie", "A knock at the door broke my reverie."],
  ["twilight", "le crépuscule", "We walked home in the twilight."],
  ["tempest", "la tempête", "A tempest raged all through the night."],
  ["hearth", "l'âtre, le foyer", "We gathered around the hearth."],
  ["countenance", "le visage, la contenance", "A shadow crossed his countenance."],
  ["semblance", "le semblant, l'apparence", "She kept some semblance of calm."],
  ["gloom", "la pénombre, la morosité", "A deep gloom filled the empty house."],
  ["grief", "le chagrin, le deuil", "She bore her grief in silence."],
  ["rapture", "le ravissement, l'extase", "He listened in silent rapture."],
  ["stillness", "le calme absolu, l'immobilité", "The stillness of the night was complete."],
  ["threshold", "le seuil", "She paused on the threshold."],
  ["yearning", "l'aspiration, le désir ardent", "A deep yearning stirred within her."],
  // Connecteurs soutenus
  ["thus", "ainsi, de cette manière", "Thus began the strangest year of my life."],
  ["hence", "d'où, par conséquent", "He was a stranger; hence our caution."],
  ["whereupon", "sur quoi, après quoi", "She rose, whereupon everyone fell silent."],
  ["henceforth", "désormais, dorénavant", "Henceforth we shall never be parted."],
  ["notwithstanding", "nonobstant, malgré cela", "Notwithstanding the danger, she went on."],
  ["albeit", "quoique, bien que (+ adj.)", "It was a victory, albeit a costly one."],
  ["hitherto", "jusqu'ici, jusqu'alors", "A calm hitherto unknown settled over her."],
  ["nonetheless", "néanmoins, cependant", "It was late; nonetheless, she waited."]
];

/* ---------- 3) LES EXTRAITS (domaine public — Charlotte Brontë, 1847) ---------- */
window.LIT_TEXTS = [
  { title: "Un jour sans promenade", author: "Charlotte Brontë · Jane Eyre", src: "Chapitre I — l'ouverture du roman.",
    paras: [
      "There was no possibility of taking a walk that day.",
      "We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question."
    ],
    fr: [
      "Il n'était pas possible, ce jour-là, d'aller se promener.",
      "Nous avions bien erré une heure, le matin, dans le bosquet dénudé ; mais depuis le déjeuner, le froid vent d'hiver avait amené des nuages si sombres et une pluie si pénétrante que toute sortie était désormais hors de question."
    ],
    gloss: [["leafless", "dénudé, sans feuilles"], ["shrubbery", "le bosquet, les massifs d'arbustes"], ["sombre", "sombre"], ["penetrating", "pénétrant"], ["out-door exercise", "une sortie, de l'exercice en plein air"], ["out of the question", "hors de question, exclu"], ["so … that …", "si … que … (conséquence)"]] },
  { title: "Je ne suis pas un oiseau", author: "Charlotte Brontë · Jane Eyre", src: "Chapitre XXIII — la déclaration de Jane à Rochester.",
    paras: [
      "Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!",
      "I have as much soul as you — and full as much heart!",
      "I am no bird; and no net ensnares me: I am a free human being with an independent will."
    ],
    fr: [
      "Croyez-vous que, parce que je suis pauvre, obscure, quelconque et menue, je sois sans âme et sans cœur ? Vous vous trompez !",
      "J'ai autant d'âme que vous — et tout autant de cœur !",
      "Je ne suis pas un oiseau ; et nul filet ne me prend au piège : je suis un être humain libre, doté d'une volonté indépendante."
    ],
    gloss: [["obscure", "obscur, sans notoriété"], ["plain", "quelconque, sans beauté"], ["soulless", "sans âme"], ["full as much", "tout autant"], ["to ensnare", "prendre au piège, capturer"], ["net", "le filet"], ["an independent will", "une volonté indépendante"]] }
];

/* ---------- 4) L'ATELIER DE STYLE (transformation neutre → littéraire) ---------- */
window.LIT_DRILL = [
  ["I never suspected the truth.", ["Never did I suspect the truth.", "Never I suspected the truth.", "Never suspected I the truth."], 0, "Inversion négative : Never + <b>auxiliaire (did)</b> + sujet + verbe."],
  ["Although I was afraid, I went on.", ["Afraid though I was, I went on.", "Though afraid I was, I went on.", "Afraid as though I was, I went on."], 0, "Concession antéposée : adjectif + <b>though</b> + sujet + verbe."],
  ["If I had known, I would have come.", ["Had I known, I would have come.", "Would I have known, I had come.", "If had I known, I would have come."], 0, "Inversion conditionnelle : on supprime « if » et on met <b>Had</b> en tête."],
  ["As soon as she left, it began to rain.", ["No sooner had she left than it began to rain.", "No sooner she had left than it began to rain.", "No sooner did she leave when it began to rain."], 0, "« <b>No sooner had</b> + sujet + participe <b>than</b>… »."],
  ["She was so kind that everyone loved her.", ["So kind was she that everyone loved her.", "So kind she was that everyone loved her.", "Such kind was she that everyone loved her."], 0, "So + adjectif + <b>inversion</b> (was she) + that…"],
  ["I understood only then.", ["Only then did I understand.", "Only then I understood.", "Only then understood I."], 0, "Only then + <b>auxiliaire</b> + sujet + verbe."],
  ["The silence was such that I could hear my heart.", ["Such was the silence that I could hear my heart.", "So was the silence that I could hear my heart.", "Such the silence was that I could hear my heart."], 0, "<b>Such was</b> + le nom + that…"],
  ["They did not know what awaited them.", ["Little did they know what awaited them.", "Little they knew what awaited them.", "Little knew they what awaited them."], 0, "Little + <b>did</b> + sujet + verbe (litote soutenue)."],
  ["I have rarely seen such devotion.", ["Rarely have I seen such devotion.", "Rarely I have seen such devotion.", "Rarely seen have I such devotion."], 0, "Rarely + <b>auxiliaire (have)</b> + sujet + participe."],
  ["If you should need help, call me.", ["Should you need help, call me.", "Should you to need help, call me.", "If should you need help, call me."], 0, "Inversion conditionnelle avec <b>Should</b> (éventualité)."],
  ["However hard I tried, I could not forget her.", ["Try as I might, I could not forget her.", "As try I might, I could not forget her.", "Try though I might not, I could not forget her."], 0, "« <b>Try as I might</b> » = j'avais beau essayer."]
];

/* ============================================================
   RENDU — le hub et ses écrans (app.innerHTML, style de l'app)
   ============================================================ */
function litSay(text){ if(window.speakVoice) speakVoice(text, 'gb'); }
function litSayForm(fi, ei){ litSay(LIT_FORMS[fi].ex[ei][0]); }
function litSpeakText(i){ litSay(LIT_TEXTS[i].paras.join(' ')); }

function renderLitHome(){
  window.scrollTo(0,0);
  app.innerHTML = `
    <div class="card">
      <h2>✒️ L'anglais de Jane Eyre</h2>
      <div class="sub">Le style de la grande prose anglaise : inversions (« never once did I… »), concessions élégantes (« concerned as I was… »), mots choisis. Comprends-le, lis-le, puis écris-le.</div>
    </div>
    <button class="tile" onclick="renderLitForms()"><div class="ic g">🏛️</div><div class="body"><div class="t">Les tournures de la grande prose</div><div class="d">Inversion négative · concession · « had I known… » · emphase</div></div></button>
    <button class="tile" onclick="renderLitWords()"><div class="ic a">📜</div><div class="body"><div class="t">Le lexique choisi</div><div class="d">${LIT_WORDS.length} mots élégants · audio britannique</div></div></button>
    <button class="tile" onclick="renderLitRead(0)"><div class="ic l">📖</div><div class="body"><div class="t">Lire Jane Eyre</div><div class="d">Deux extraits de Charlotte Brontë, glosés</div></div></button>
    <button class="tile" onclick="startLitDrill()"><div class="ic e">🖋️</div><div class="body"><div class="t">Atelier de style</div><div class="d">Transforme du neutre en littéraire · ${LIT_DRILL.length} phrases</div></div></button>
    <button class="btn ghost mt" onclick="setView('home')">← Accueil</button>
  `;
}
function renderLitForms(){
  window.scrollTo(0,0);
  const cards = LIT_FORMS.map((f,fi)=>`
    <div class="card">
      <h2 style="font-size:16px">${f.name}</h2>
      <div class="expl mt" style="border-color:var(--blue)">${f.rule}</div>
      ${f.ex.map(([en,fr],ei)=>`<div style="display:flex;flex-direction:column;padding:9px 0;border-bottom:1px solid var(--line)">
        <span style="font-weight:600;font-size:15px">${en} <button class="spk sm" onclick="litSayForm(${fi},${ei})">🔊 UK</button></span>
        <span class="sub" style="margin-top:2px">${fr}</span></div>`).join('')}
    </div>`).join('');
  app.innerHTML = `<div class="card"><h2>🏛️ Les tournures de la grande prose</h2><div class="sub">La grammaire du style. Lis à voix haute, écoute l'accent, imite.</div></div>${cards}<button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
}
function renderLitWords(){
  window.scrollTo(0,0);
  app.innerHTML = `
    <div class="card"><h2>📜 Le lexique choisi</h2><div class="sub">Les mots qui font le style. Touche 🔊 pour l'accent britannique.</div></div>
    <input id="litq" placeholder="Chercher un mot…" style="width:100%;padding:11px 14px;border-radius:12px;background:var(--bg2);border:1px solid var(--line);color:var(--txt);font-size:15px;margin-bottom:10px">
    <div class="card" id="litlist"></div>
    <button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
  const inp=document.getElementById('litq'), list=document.getElementById('litlist');
  const draw=fRaw=>{ const fq=(fRaw||'').toLowerCase();
    const rows=LIT_WORDS.filter(w=>!fq||w[0].toLowerCase().includes(fq)||w[1].toLowerCase().includes(fq));
    list.innerHTML = rows.length ? rows.map(w=>`
      <div style="padding:10px 2px;border-bottom:1px solid var(--line)">
        <div style="display:flex;align-items:center;gap:8px"><b style="color:var(--accent);font-size:15px">${w[0]}</b><button class="spk sm" onclick="litSay('${w[0].replace(/'/g,"\\'")}')">🔊 UK</button></div>
        <div class="sub" style="margin-top:2px">${w[1]}</div>
        ${w[2]?`<div style="color:#c9cde0;font-size:13px;font-style:italic;margin-top:3px">${w[2]}</div>`:''}
      </div>`).join('') : '<div class="sub">Rien trouvé.</div>'; };
  inp.oninput=()=>draw(inp.value); draw('');
}
function renderLitRead(i){
  window.scrollTo(0,0); i=i||0; const t=LIT_TEXTS[i];
  const paras=t.paras.map(p=>`<p style="font-size:16.5px;line-height:1.72;margin-bottom:12px;color:var(--txt)">${p}</p>`).join('');
  const fr=t.fr.map(p=>`<p style="font-size:14px;line-height:1.6;margin-bottom:8px;color:var(--muted)">${p}</p>`).join('');
  const gloss=t.gloss.map(([en,f])=>`<div class="glrow"><b>${en}</b><span>${f}</span></div>`).join('');
  const nav=LIT_TEXTS.map((x,k)=>`<button class="btn ${k===i?'':'sec'}" style="flex:1;margin-top:0" onclick="renderLitRead(${k})">${k+1}. ${x.title}</button>`).join('');
  app.innerHTML = `
    <div class="card"><div class="pill warn">${t.author}</div><h2 class="mt">${t.title}</h2><div class="sub">${t.src}</div>
      <button class="btn mt" onclick="litSpeakText(${i})">🔊 Écouter le passage (UK)</button></div>
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">${nav}</div>
    <div class="card">${paras}</div>
    <details class="card"><summary style="cursor:pointer;font-weight:700;color:var(--accent)">Voir la traduction</summary><div class="mt">${fr}</div></details>
    <div class="card"><h2 style="font-size:15px">Mots à savourer</h2>${gloss}</div>
    <button class="btn" onclick="litReadDone()">J'ai lu ✓ (+12 XP)</button>
    <button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
}
function litReadDone(){ if(window.markStudy) markStudy(); if(window.addXp) addXp(12); if(window.save) save(); if(window.toast) toast('📖 +12 XP · lecture soutenue'); }

let LITQ=null;
function startLitDrill(){
  LITQ={ i:0, ok:0, order:shuffle([...Array(LIT_DRILL.length).keys()]), answered:false };
  renderLitQ();
}
function renderLitQ(){
  window.scrollTo(0,0);
  const it=LIT_DRILL[LITQ.order[LITQ.i]]; LITQ.answered=false;
  const plain=it[0], opts=it[1];
  const order=shuffle(opts.map((o,k)=>k)); LITQ.dispCorrect=order.indexOf(it[2]);
  const optHtml=order.map((oi,k)=>`<button class="opt" onclick="litAnswer(${k})">${opts[oi]}</button>`).join('');
  app.innerHTML=`
    <div class="qmeta"><span>🖋️ Atelier de style</span><span>${LITQ.i+1} / ${LIT_DRILL.length}</span></div>
    <div class="pbar mb"><i style="width:${LITQ.i/LIT_DRILL.length*100}%"></i></div>
    <div class="sub" style="margin-bottom:6px">Mets cette phrase au style <b style="color:var(--txt)">littéraire</b> :</div>
    <div class="stem" style="font-size:17px">${plain}</div>
    <div id="litopts">${optHtml}</div>
    <div id="litafter"></div>`;
}
function litAnswer(k){
  if(LITQ.answered) return; LITQ.answered=true;
  const it=LIT_DRILL[LITQ.order[LITQ.i]], correct=LITQ.dispCorrect, ok=(k===correct);
  document.querySelectorAll('#litopts .opt').forEach((b,idx)=>{ b.setAttribute('disabled',''); if(idx===correct)b.classList.add('good'); else if(idx===k)b.classList.add('bad'); else b.classList.add('dim'); });
  if(ok){ LITQ.ok++; addXp(4); } else recordMistake({kind:'gram',q:it[0],opts:it[1],correct:it[2],expl:it[3],cat:'Style littéraire'});
  const last=LITQ.i===LIT_DRILL.length-1;
  document.getElementById('litafter').innerHTML=`<div class="expl ${ok?'ok':'no'}" style="margin-top:8px">${ok?'✅ ':'❌ '}${it[3]}</div><button class="btn mt" onclick="${last?'finishLitDrill()':'nextLitQ()'}">${last?'Voir le résultat':'Suivant →'}</button>`;
  document.getElementById('litafter').scrollIntoView({behavior:'smooth',block:'end'});
}
function nextLitQ(){ LITQ.i++; renderLitQ(); }
function finishLitDrill(){
  const pct=Math.round(LITQ.ok/LIT_DRILL.length*100);
  markStudy(); addXp(10); save(); if(typeof checkAchievements==='function') checkAchievements();
  app.innerHTML=`
    <div class="card big"><div class="em">${pct>=80?'🖋️':'📚'}</div>
      <div class="score" style="color:${pct>=70?'var(--good)':'var(--accent)'}">${pct}%</div>
      <div class="lab">${LITQ.ok}/${LIT_DRILL.length} au style juste</div>
      <div class="mt sub">Le style s'apprend par l'imitation. Relis un extrait de Brontë, puis recommence.</div></div>
    <button class="btn" onclick="startLitDrill()">↻ Recommencer</button>
    <button class="btn ghost mt" onclick="renderLitHome()">← Retour</button>`;
}
