/* ============================================================
   990 — LE MICRO : parler deux minutes, tous les jours
   Se charge APRÈS micro-data.js, AVANT app.js.

   POURQUOI CE MODULE (2026-11-11). L'app savait tout faire sauf
   te faire ouvrir la bouche : le seul studio de parole vivait
   dans une salle d'examen réglée sur une date passée. L'IELTS est
   obtenu ; ce qui reste à gagner, c'est de parler sans chercher.
   Alors la parole devient le pilier du jour, et l'écrit passe
   derrière : on produit de la langue à voix haute, au chrono,
   et on se réécoute. C'est l'exercice le plus rentable qui soit
   à partir de C1, et c'est aussi le moins confortable.

   État : S.micro = { sessions:[{id,mode,sujet,secs,mots,wpm,texte,
                      note,corrections,modele,date}], iM, iC, iE }

   La séance s'enregistre dans le navigateur (MediaRecorder) et se
   transcrit en direct quand le navigateur sait le faire. Rien ne
   sort de l'appareil : la transcription ne part que si TU copies
   l'export pour faire corriger.
   ============================================================ */
'use strict';

/* ---------- état ---------- */
function mic() {
  if (!S.micro || typeof S.micro !== 'object') S.micro = {};
  const m = S.micro;
  if (!Array.isArray(m.sessions)) m.sessions = [];
  if (typeof m.iM !== 'number') m.iM = 0;
  if (typeof m.iC !== 'number') m.iC = 0;
  if (typeof m.iE !== 'number') m.iE = 0;
  return m;
}
function micEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function micWords(s) { return (String(s || '').match(/[A-Za-z'’]+/g) || []).length; }
function micSessions() { return mic().sessions; }
function micById(id) { return micSessions().find(s => s.id === id); }
function micDone() { return micSessions().length; }
function micSecsTotal() { return micSessions().reduce((a, s) => a + (s.secs || 0), 0); }
function micDaysSpoken() { const d = {}; micSessions().forEach(s => { d[(s.date || '').slice(0, 10)] = 1; }); return Object.keys(d).length; }
function micWpmMoyen() {
  const w = micSessions().filter(s => s.wpm > 0);
  return w.length ? Math.round(w.reduce((a, s) => a + s.wpm, 0) / w.length) : 0;
}
function micSecsToday() {
  const t = todayStr();
  return micSessions().filter(s => (s.date || '').slice(0, 10) === t).reduce((a, s) => a + (s.secs || 0), 0);
}
function micCorrigees() { return micSessions().filter(s => s.note != null || (s.corrections || []).length).length; }
function micDerniere() { const l = micSessions(); return l.length ? l[l.length - 1] : null; }
function micJoursSansParler() {
  const d = micDerniere();
  if (!d) return 99;
  return Math.max(0, Math.round((Date.now() - new Date(d.date).getTime()) / DAY));
}

/* ---------- le sujet du jour : une rotation, pas un tirage ----------
   Un tirage au sort redonne les mêmes sujets et saute les autres.
   La rotation garantit que les douze passent avant qu'un revienne. */
function micSujet(mode, i) {
  const L = mode === 'mono' ? MICRO.monologue : mode === 'courte' ? MICRO.courtes : MICRO.entretien;
  if (!L.length) return null;
  return L[((i == null ? micIdx(mode) : i) % L.length + L.length) % L.length];
}
function micIdx(mode) { const m = mic(); return mode === 'mono' ? m.iM : mode === 'courte' ? m.iC : m.iE; }
function micSetIdx(mode, v) { const m = mic(); if (mode === 'mono') m.iM = v; else if (mode === 'courte') m.iC = v; else m.iE = v; save(); }
function micSuivant(mode) { micSetIdx(mode, micIdx(mode) + 1); }

/* ============================================================
   LA VOIX QUI POSE LA QUESTION
   Une voix britannique, un débit normal : si la question est lue
   trop lentement, l'oreille ne travaille pas.
   ============================================================ */
function micSay(text, cb) {
  if (!('speechSynthesis' in window)) { if (cb) cb(); return; }
  try { speechSynthesis.cancel(); } catch (e) {}
  const u = new SpeechSynthesisUtterance(String(text || ''));
  const vs = speechSynthesis.getVoices();
  const v = vs.find(x => /en-GB/i.test(x.lang) && /Daniel|Kate|Serena|Oliver|Arthur|Stephanie/i.test(x.name))
         || vs.find(x => /en-GB/i.test(x.lang)) || vs.find(x => /^en/i.test(x.lang));
  if (v) u.voice = v;
  u.lang = v && v.lang ? v.lang : 'en-GB';
  u.rate = 0.98; u.pitch = 1;
  let fini = false;
  const fin = () => { if (fini) return; fini = true; if (cb) cb(); };
  u.onend = fin; u.onerror = fin;
  setTimeout(fin, 1200 + String(text || '').length * 90);   // filet : certains navigateurs n'émettent jamais onend
  speechSynthesis.speak(u);
}

/* ============================================================
   LE CHRONO
   ============================================================ */
let MIC_T = null;
function micTimerStop() { if (MIC_T) { clearInterval(MIC_T.iv); MIC_T = null; } }
function micTimerRun(secs, onEnd) {
  micTimerStop();
  const t0 = Date.now();
  MIC_T = { onEnd, iv: setInterval(() => {
    const reste = Math.max(0, secs - Math.round((Date.now() - t0) / 1000));
    const el = document.getElementById('mic-chrono');
    if (el) el.textContent = micFmt(reste);
    if (reste <= 0) { micTimerStop(); if (onEnd) onEnd(); }
  }, 250) };
  const el = document.getElementById('mic-chrono');
  if (el) el.textContent = micFmt(secs);
}
function micFmt(s) { s = Math.max(0, Math.round(s)); return String(Math.floor(s / 60)) + ':' + String(s % 60).padStart(2, '0'); }

/* ============================================================
   L'ENREGISTREUR
   Audio pour se réécouter (c'est là que l'accent s'entend), et
   transcription en direct quand le navigateur la propose — elle
   sert à faire corriger, pas à juger la prononciation.
   ============================================================ */
let MIC_REC = null;
const MIC_SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const micCanRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

async function micRecStart() {
  if (MIC_REC || !micCanRec) return;
  const st = document.getElementById('mic-recst');
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
  catch (e) {
    if (st) st.innerHTML = `Micro refusé ou indisponible. Parle quand même : tu valideras la journée avec «&nbsp;j'ai parlé sans enregistrer&nbsp;».`;
    return;
  }
  const R = { stream, chunks: [], t0: Date.now(), txt: '', base: (document.getElementById('mic-tr') || {}).value || '', sr: null, mr: null };
  MIC_REC = R;
  try {
    R.mr = new MediaRecorder(stream);
    R.mr.ondataavailable = e => { if (e.data && e.data.size) R.chunks.push(e.data); };
    R.mr.start();
  } catch (e) { R.mr = null; }
  if (MIC_SR) {
    try {
      const sr = new MIC_SR();
      sr.lang = 'en-GB'; sr.continuous = true; sr.interimResults = true;
      sr.onresult = ev => {
        let interim = '';
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
          const r = ev.results[i];
          if (r.isFinal) R.txt += r[0].transcript.trim() + ' '; else interim += r[0].transcript;
        }
        const box = document.getElementById('mic-tr');
        if (box) box.value = (R.base ? R.base.trim() + '\n' : '') + R.txt + interim;
      };
      sr.onend = () => { if (MIC_REC === R) { try { sr.start(); } catch (e) {} } };
      sr.onerror = () => {};
      sr.start(); R.sr = sr;
    } catch (e) { R.sr = null; }
  }
  const b = document.getElementById('mic-recbtn');
  if (b) b.innerHTML = '■ Arrêter';
  R.iv = setInterval(() => {
    const s = document.getElementById('mic-recst');
    if (s) s.innerHTML = `<span style="color:var(--bad)">●</span> ${micFmt((Date.now() - R.t0) / 1000)}${R.sr ? ' · transcription en direct' : ' · audio seul'}`;
  }, 300);
}
function micRecStop(then) {
  if (!MIC_REC) { if (then) then(null); return; }
  const R = MIC_REC; MIC_REC = null;
  clearInterval(R.iv);
  if (R.sr) { try { R.sr.stop(); } catch (e) {} }
  const secs = Math.round((Date.now() - R.t0) / 1000);
  const fin = () => {
    try { R.stream.getTracks().forEach(t => t.stop()); } catch (e) {}
    const a = document.getElementById('mic-audio');
    if (a && R.chunks.length) {
      try { a.src = URL.createObjectURL(new Blob(R.chunks, { type: (R.mr && R.mr.mimeType) || 'audio/webm' })); a.hidden = false; } catch (e) {}
    }
    const b = document.getElementById('mic-recbtn');
    if (b) b.innerHTML = '● Enregistrer';
    const s = document.getElementById('mic-recst');
    const box = document.getElementById('mic-tr');
    const mots = micWords(box ? box.value : R.txt);
    if (s) s.innerHTML = `Durée ${micFmt(secs)}${mots ? ` · ${mots} mots · <b>${Math.round(mots / Math.max(1, secs / 60))} mots/min</b>` : ''} — réécoute-toi`;
    if (then) then({ secs, mots });
  };
  if (R.mr && R.mr.state !== 'inactive') { R.mr.onstop = fin; try { R.mr.stop(); } catch (e) { fin(); } } else fin();
}
function micRecToggle() { if (MIC_REC) micRecStop(); else micRecStart(); }

/* ============================================================
   L'ACCUEIL DU MICRO
   ============================================================ */
function renderMicroHome() {
  const sec = micSecsToday(), fait = micParleFait();
  const mono = micSujet('mono'), ent = micSujet('entretien'), crt = micSujet('courte');
  const d = micDerniere();
  app.innerHTML = `
    <div class="card">
      <h2>🎙️ Le Micro</h2>
      <div class="sub">Deux minutes de parole par jour, enregistrées. C'est l'exercice que rien ne remplace : seul devant un sujet, personne pour te relancer, il faut structurer en parlant. Tu te réécoutes — c'est désagréable les trois premières fois, puis c'est le seul miroir honnête que tu aies.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--accent)">${micDaysSpoken()}</div><div class="sub">jours parlés</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${micWpmMoyen() || '–'}</div><div class="sub">mots/min moyen</div></div>
      </div>
      <div class="goal ${fait ? 'ok' : ''} mt"><span class="gk">${fait ? '✅' : '⬜️'}</span><span class="gt">Parlé aujourd'hui</span><span class="gs">${Math.min(sec, 120)}/120 s</span></div>
      <div class="sub" style="font-size:12px">La journée se valide dès 1 min 40 de parole enregistrée.</div>
    </div>

    <button class="btn" onclick="micStart('mono')">▶ Parler 2 minutes · le sujet du jour</button>
    <div class="sub center mb" style="margin-top:6px">1 min de notes, puis 2 min chrono : «&nbsp;${micEsc(mono ? mono.t : '')}&nbsp;»</div>

    <button class="tile" onclick="micStart('entretien')">
      <div class="ic" style="background:linear-gradient(135deg,#4d8dff33,#4d8dff11);color:var(--blue)">💼</div>
      <div class="body"><div class="t">L'entretien, en anglais</div><div class="d">${MICRO.entretien.length} questions de stage · «&nbsp;${micEsc(ent ? ent.q : '')}&nbsp;»</div></div>
      <div class="badge">EN</div>
    </button>

    <button class="tile" onclick="micStart('courte')">
      <div class="ic a">💬</div>
      <div class="body"><div class="t">Échauffement</div><div class="d">Réponses courtes · thème : ${micEsc(crt ? crt.th : '')}</div></div>
      <div class="badge zero">${MICRO.courtes.length}</div>
    </button>

    ${micCanRec ? '' : `<div class="expl no mt">Ce navigateur ne donne pas accès au micro. Enregistre-toi avec le dictaphone du téléphone, et valide la journée à la main en fin de séance.</div>`}

    ${d ? `
    <div class="sub mb mt" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">Tes séances</div>
    ${micSessions().slice().reverse().slice(0, 8).map(s => `
      <button class="hist" style="width:100%;text-align:left" onclick="renderMicroSession(${s.id})">
        <div><b>${s.mots || 0}</b> <span class="sub">mots · ${micFmt(s.secs || 0)}</span>
          <div class="d">${micEsc((s.sujet || '').slice(0, 54))}${(s.sujet || '').length > 54 ? '…' : ''}</div></div>
        <div class="sub" style="text-align:right">${s.wpm ? s.wpm + ' m/min' : ''}<div class="d">${s.note != null ? 'corrigée' : new Date(s.date).toLocaleDateString('fr-FR')}</div></div>
      </button>`).join('')}` : ''}

    <button class="btn ghost mt" onclick="setView('parler')">← Parler</button>
  `;
  window.scrollTo(0, 0);
}
function micParleFait() { return micSecsToday() >= 100 || (S.daily && S.daily.parleManuel === todayStr()); }
function micTuileTexte() {
  if (micParleFait()) return 'Parlé aujourd\'hui ✓ · ' + micFmt(micSecsToday()) + ' enregistrées';
  const j = micJoursSansParler();
  if (j >= 99) return 'Jamais encore parlé dans l\'app — commence par 2 minutes';
  if (j === 0) return micFmt(micSecsToday()) + ' aujourd\'hui · il en faut 1 min 40';
  return `${j} jour${j > 1 ? 's' : ''} sans parler · 2 minutes suffisent`;
}

/* ============================================================
   UNE SÉANCE
   ============================================================ */
let MIC = null;
function micStart(mode, idx) {
  const suj = micSujet(mode, idx);
  if (!suj) { toast('Rien ici 🙂'); return; }
  MIC = { mode, idx: idx == null ? micIdx(mode) : idx, suj, phase: 'pret', qi: 0, secs: 0, mots: 0 };
  micRenderSeance();
}
function micQuit() { micTimerStop(); micRecStop(); MIC = null; if ('speechSynthesis' in window) try { speechSynthesis.cancel(); } catch (e) {} renderMicroHome(); }

function micBlocEnregistreur(aide) {
  return `
    <div class="card">
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <button class="btn" style="margin:0;flex:1 1 150px" id="mic-recbtn" onclick="micRecToggle()">● Enregistrer</button>
        <div class="sub" id="mic-recst" style="flex:1 1 140px;font-variant-numeric:tabular-nums"></div>
      </div>
      <audio id="mic-audio" controls hidden style="width:100%;margin-top:10px"></audio>
      <div class="sub mt" style="font-size:12px">${aide}</div>
      <textarea class="transinput mt" id="mic-tr" style="min-height:120px;font-size:14px" placeholder="La transcription s'écrit ici toute seule si ton navigateur sait le faire. Sinon, tape l'essentiel de ce que tu as dit — c'est ce texte qui part en correction."></textarea>
      <button class="btn sec" onclick="micFinir()">Terminer la séance</button>
    </div>`;
}

function micRenderSeance() {
  if (!MIC) return renderMicroHome();
  const m = MIC.mode;
  if (m === 'mono') return micRenderMono();
  if (m === 'entretien') return micRenderEntretien();
  return micRenderCourte();
}

/* ---------- monologue : 1 min de notes, 2 min de parole ---------- */
function micRenderMono() {
  const s = MIC.suj;
  app.innerHTML = `
    <div class="exbar">
      <span class="sec">${MIC.phase === 'notes' ? 'Préparation' : MIC.phase === 'parle' ? 'Parle' : 'Deux minutes'}</span>
      <span class="timer">⏱ <span id="mic-chrono">${MIC.phase === 'notes' ? '1:00' : '2:00'}</span></span>
    </div>
    <div class="card">
      <h2 style="font-size:17px">${micEsc(s.t)}</h2>
      <div class="sub mt">You should say:</div>
      <ul class="sub" style="margin:4px 0 0;padding-left:20px;line-height:1.7">${s.b.map(x => `<li>${micEsc(x)}</li>`).join('')}</ul>
      <div class="sub mt">${micEsc(s.e)}</div>
    </div>
    ${MIC.phase === 'pret' ? `
      <button class="btn" onclick="micMonoGo()">▶ Lancer : 1 min de notes, puis 2 min de parole</button>
      <button class="btn sec mt" onclick="micAutreSujet()">Un autre sujet</button>
      <div class="sub center mt" style="font-size:12px">L'enregistrement démarre tout seul à la fin de la minute de notes et s'arrête à deux minutes.</div>
    ` : `
      <textarea class="transinput" id="mic-notes" style="min-height:90px" placeholder="Mots-clés seulement. Des phrases écrites et tu liras au lieu de parler.">${micEsc(MIC.notes || '')}</textarea>
      ${MIC.phase === 'parle' || MIC.phase === 'fini' ? micBlocEnregistreur("Vise 1 min 45 à 2 min. S'arrêter à quarante secondes, c'est la seule faute qui compte ici : tu t'entraînes à tenir la distance, pas à bien finir.") : '<div class="sub center">Prépare. L\'enregistrement part tout seul.</div>'}
    `}
    <button class="btn ghost mt" onclick="micQuit()">${MIC.phase === 'pret' ? 'Retour' : 'Arrêter'}</button>
  `;
  window.scrollTo(0, 0);
  if (MIC.phase === 'notes') micTimerRun(60, micMonoParle);
  if (MIC.phase === 'parle' && !MIC_REC) { micRecStart(); micTimerRun(120, () => micRecStop(r => { if (r) micPose(r); })); }
}
function micAutreSujet() { micSuivant(MIC.mode); micStart(MIC.mode); }
function micMonoGo() {
  MIC.phase = 'notes';
  micRenderSeance();
  micSay("Now, I'm going to give you a topic, and I'd like you to talk about it for one to two minutes. Before you talk, you'll have one minute to think about what you're going to say. You can make some notes if you wish.");
}
function micMonoParle() {
  const n = document.getElementById('mic-notes');
  if (n) MIC.notes = n.value;
  MIC.phase = 'parle';
  micSay("All right? Remember, you have one to two minutes. Can you start speaking now, please?", () => micRenderSeance());
}
function micPose(r) {
  MIC.phase = 'fini';
  micSay('Thank you.');
  if (r) { MIC.secs = r.secs; MIC.mots = r.mots; }
}

/* ---------- entretien : une question, une réponse ---------- */
function micRenderEntretien() {
  const s = MIC.suj;
  app.innerHTML = `
    <div class="exbar"><span class="sec">Entretien · en anglais</span><span class="timer">⏱ <span id="mic-chrono">1:30</span></span></div>
    <div class="card">
      <div class="coach-h">La question</div>
      <h2 style="font-size:18px;margin-top:4px">${micEsc(s.q)}</h2>
      <button class="btn sec mt" onclick="micSay(${JSON.stringify(s.q).replace(/"/g, '&quot;')})">🔊 L'entendre</button>
    </div>
    <details class="whyx mb">
      <summary>Ce qu'une bonne réponse contient</summary>
      <div>${micEsc(s.aide)}
        <div class="mt"><b>À placer, tel quel :</b></div>
        <ul style="padding-left:18px;line-height:1.7;margin:4px 0 0">${s.dire.map(x => `<li><i>${micEsc(x)}</i></li>`).join('')}</ul>
      </div>
    </details>
    ${micBlocEnregistreur("Quatre-vingt-dix secondes suffisent. Une réponse d'entretien qui dépasse deux minutes, on ne l'écoute plus — et une réponse de vingt secondes, on n'y croit pas.")}
    <button class="btn sec" onclick="micAutreSujet()">Question suivante</button>
    <button class="btn ghost mt" onclick="micQuit()">Arrêter</button>
  `;
  window.scrollTo(0, 0);
  micTimerRun(90, () => {});
}

/* ---------- courtes : l'échauffement ---------- */
function micRenderCourte() {
  const s = MIC.suj, qs = s.qs, q = qs[MIC.qi % qs.length];
  app.innerHTML = `
    <div class="exbar"><span class="sec">Échauffement · ${micEsc(s.th)}</span><span class="timer">⏱ <span id="mic-chrono">0:30</span></span></div>
    <div class="card">
      <div class="coach-h">Question ${MIC.qi + 1} / ${qs.length}</div>
      <h2 style="font-size:18px;margin-top:4px">${micEsc(q)}</h2>
      <button class="btn sec mt" onclick="micSay(${JSON.stringify(q).replace(/"/g, '&quot;')})">🔊 L'entendre</button>
      <div class="sub mt" style="font-size:12px">Réponse, raison, petit exemple — puis tu t'arrêtes. Jamais un mot seul : «&nbsp;yes&nbsp;» ne dit rien de ton anglais.</div>
    </div>
    ${micBlocEnregistreur("Enchaîne les quatre questions du thème sans couper l'enregistrement : c'est la continuité qui compte, pas la perfection de chaque réponse.")}
    <button class="btn sec" onclick="micCourteNext()">Question suivante</button>
    <button class="btn sec mt" onclick="micAutreSujet()">Changer de thème</button>
    <button class="btn ghost mt" onclick="micQuit()">Arrêter</button>
  `;
  window.scrollTo(0, 0);
  micTimerRun(30, () => {});
}
function micCourteNext() { MIC.qi++; micRenderSeance(); }

/* ============================================================
   FIN DE SÉANCE — on enregistre, on compte, on crédite la journée
   ============================================================ */
function micFinir() {
  const txt = (document.getElementById('mic-tr') || {}).value || '';
  const finir = r => {
    micTimerStop();
    const secs = Math.max(MIC && MIC.secs || 0, r ? r.secs : 0);
    const mots = micWords(txt) || (r ? r.mots : 0);
    if (!secs && !mots) { toast('Rien à enregistrer — parle d\'abord 🙂'); return; }
    const sujet = MIC.mode === 'mono' ? MIC.suj.t : MIC.mode === 'entretien' ? MIC.suj.q : 'Échauffement · ' + MIC.suj.th;
    const sess = {
      id: Date.now(), mode: MIC.mode, sujet, secs, mots,
      wpm: secs > 5 ? Math.round(mots / (secs / 60)) : 0,
      texte: txt.trim(), note: null, corrections: [], modele: '', date: new Date().toISOString()
    };
    mic().sessions.push(sess);
    micSuivant(MIC.mode);
    bumpDaily('parler', secs);
    addXp(25); touchDay(); save();
    if (typeof checkAchievements === 'function') checkAchievements();
    MIC = null;
    renderMicroSession(sess.id, true);
  };
  if (MIC_REC) micRecStop(finir); else finir(null);
}
/* Le filet : micro refusé, ou enregistré avec le dictaphone du téléphone. */
function micParleManuel() {
  resetDailyIfNeeded();
  S.daily.parleManuel = todayStr();
  bumpDaily('parler', 0);
  touchDay(); addXp(15); save();
  toast('🎙️ Journée validée à la parole');
  renderMicroHome();
}

function renderMicroSession(id, fraiche) {
  const s = micById(id);
  if (!s) return renderMicroHome();
  const trop = s.secs && s.secs < 60;
  app.innerHTML = `
    ${fraiche ? `<div class="card big">
      <div class="em">🎙️</div>
      <div class="score" style="color:var(--good)">${micFmt(s.secs)}</div>
      <div class="lab">${s.mots} mots${s.wpm ? ` · ${s.wpm} mots/min` : ''}</div>
      <div class="mt sub">${trop
        ? "Court. Ce n'est pas grave aujourd'hui, mais l'objectif est de tenir deux minutes sans t'arrêter — c'est ça qui déplace la fluidité."
        : s.wpm && s.wpm < 110
          ? "Le débit est posé. À l'oral, en dessous de 110 mots par minute on entend la recherche du mot ; au-dessus de 150 on mange les fins. La zone confortable est entre les deux."
          : "Bon rythme. Garde ça et travaille la précision : c'est le lexique qui fait la différence maintenant."}</div>
    </div>` : `
    <div class="card">
      <h2 style="font-size:17px">${micEsc(s.sujet)}</h2>
      <div class="sub">${new Date(s.date).toLocaleDateString('fr-FR')} · ${micFmt(s.secs)} · ${s.mots} mots${s.wpm ? ` · ${s.wpm} mots/min` : ''}</div>
    </div>`}

    ${s.note != null ? `
    <div class="card big">
      <div class="score" style="color:var(--accent)">${micEsc(s.affiche || s.note + '/100')}</div>
      <div class="lab">la correction</div>
      ${s.verdict ? `<div class="expl mt" style="text-align:left">${micEsc(s.verdict)}</div>` : ''}
    </div>` : ''}

    ${(s.corrections || []).length ? `
    <div class="card">
      <h2 style="font-size:16px">✂️ Ligne à ligne</h2>
      ${s.corrections.map(c => `<div class="review-item" style="border-left-color:var(--accent)">
        <div class="ans"><span class="ko">${micEsc(c.avant)}</span></div>
        <div class="ans mt"><span class="ok">${micEsc(c.apres)}</span></div>
        ${c.pourquoi ? `<div class="sub" style="margin-top:6px">${micEsc(c.pourquoi)}</div>` : ''}
      </div>`).join('')}
    </div>` : ''}

    ${s.modele ? `
    <div class="card">
      <h2 style="font-size:16px">🪄 La même réponse, au niveau visé</h2>
      <div class="sub" style="margin-bottom:8px">À relire <b>à voix haute</b>, deux fois. C'est l'usage de ce paragraphe.</div>
      <div class="passage" style="max-height:none">${micEsc(s.modele)}</div>
      <button class="btn sec mt" onclick="micSay(${JSON.stringify(s.modele || '').replace(/"/g, '&quot;')})">🔊 L'entendre</button>
    </div>` : ''}

    ${s.texte ? `
    <details class="whyx mb"><summary>Ta transcription (${s.mots} mots)</summary><div>${micEsc(s.texte)}</div></details>` : ''}

    ${s.note == null ? `<button class="btn" onclick="renderMicroExport(${s.id})">📤 Faire corriger</button>` : `<button class="btn sec" onclick="renderMicroExport(${s.id})">📤 Refaire corriger</button>`}
    ${fraiche && !micParleFait() ? `<button class="btn sec mt" onclick="micParleManuel()">✓ J'ai parlé sans enregistrer</button>` : ''}
    <button class="btn ghost mt" onclick="renderMicroHome()">← Le Micro</button>
  `;
  window.scrollTo(0, 0);
}

/* ============================================================
   EXPORT / IMPORT — le circuit que tu connais déjà :
   on copie, Claude corrige, on recolle. Les corrections tombent
   dans LA LIME (en exercices de production) et les tournures
   dans LA MOISSON. Rien ne se perd en route.
   ============================================================ */
let MICRO_EXPORT = '';
function micExportText(id) {
  const s = micById(id);
  if (!s) return '';
  const d = new Date(s.date).toLocaleDateString('fr-FR');
  const ctx = s.mode === 'mono'
    ? `Sujet imposé, deux minutes de monologue après une minute de notes : « ${s.sujet} »`
    : s.mode === 'entretien'
      ? `Question d'entretien de stage (finance d'entreprise, M&A / transaction services), posée en anglais : « ${s.sujet} »`
      : `Série de questions courtes d'échauffement — ${s.sujet}`;
  let t = `# 🎙️ LE MICRO — une prise de parole à corriger\n(export de mon app 990, enregistrée le ${d})\n\n`;
  t += `Claude, je viens de parler anglais au chrono et je te colle la transcription. Je suis C1 confirmé (IELTS 7.5) et je ne cherche pas des encouragements : je cherche ce qui m'empêche de passer pour un locuteur à l'aise à l'oral, en entretien comme en réunion.\n\n`;
  t += `## L'EXERCICE\n· ${ctx}\n· Ce que j'ai produit : **${s.mots} mots en ${micFmt(s.secs)}**${s.wpm ? `, soit ${s.wpm} mots/minute` : ''}.\n`;
  t += `· La transcription est automatique : elle efface les hésitations et les reprises. Juge donc la langue, et pour la fluidité tiens-toi au débit et à la longueur.\n\n`;
  t += `## CE QUE J'AI DIT\n\n"""\n${s.texte || '(transcription vide)'}\n"""\n\n`;
  t += `════════════════════════════════════════\n`;
  t += `RÉPONDS EXACTEMENT DANS CE FORMAT — je recolle ta réponse dans l'app, qui la parse :\n\n`;
  t += `## NOTE\n> Fluidité & cohérence : X/9\n> Lexique : X/9\n> Grammaire : X/9\n> TOTAL : X/9\n\n`;
  t += `## VERDICT\nQuatre à six lignes franches : ce qui tient déjà, ce qui me trahit comme francophone à l'oral, et **la seule chose** à changer à la prochaine prise de parole.\n\n`;
  t += `## CORRECTIONS\nUne ligne par correction, avec TROIS doubles-deux-points :\n`;
  t += `- ce que j'ai dit :: la version juste :: pourquoi, en une ligne :: le sens en français (pour que l'app en fasse un exercice de production)\n`;
  t += `Prends les 8 à 12 plus rentables : d'abord ce qui est faux, ensuite ce qui est correct mais scolaire. Ne me reproche pas les hésitations, la transcription les a mangées.\n\n`;
  t += `## LE PARAGRAPHE REFAIT\n`;
  t += `Réécris ma réponse — la même idée, la mienne, pas la tienne — comme la dirait un anglophone à l'aise **à l'oral** : contractions, phrases qui respirent, rien de la prose écrite. C'est ce paragraphe que je vais relire à voix haute.\n\n`;
  t += `## TOURNURES\nTrois à cinq expressions que j'aurais dû employer sur CE sujet, au format de ma Moisson :\n`;
  t += `@@ the expression\n= le sens en français, une ligne\n~ la nuance : registre, quand on l'emploie et quand on l'évite, le piège de calque\nex an example sentence in natural spoken English\nfr sa traduction\n\n`;
  t += `Règles : garde les titres de section tels quels ; pas de blabla autour, je copie tout le bloc d'un coup.\n`;
  return t;
}
function renderMicroExport(id) {
  const s = micById(id);
  if (!s) return renderMicroHome();
  MICRO_EXPORT = micExportText(id);
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(MICRO_EXPORT).then(() => toast('📋 Copié — colle-le à Claude'), () => {});
  app.innerHTML = `
    <div class="card">
      <h2>📤 Faire corriger</h2>
      <div class="sub">Copié dans ton presse-papier. Colle-le tel quel dans une conversation avec Claude : le sujet, ta transcription et la consigne de correction sont déjà dedans. Puis reviens avec «&nbsp;📥&nbsp;».</div>
    </div>
    <textarea class="transinput" style="min-height:280px;font-size:12.5px" readonly onclick="this.select()">${micEsc(MICRO_EXPORT)}</textarea>
    <button class="btn" onclick="copyMicroExport()">📋 Copier à nouveau</button>
    <button class="btn sec mt" onclick="renderMicroImport(${s.id})">📥 Coller la correction</button>
    <button class="btn ghost mt" onclick="renderMicroSession(${s.id})">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function copyMicroExport() {
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(MICRO_EXPORT).then(() => toast('📋 Copié'), () => toast('Sélectionne et copie à la main'));
  else toast('Sélectionne et copie à la main');
}
function renderMicroImport(id, msg, keep, isErr) {
  const s = micById(id);
  if (!s) return renderMicroHome();
  app.innerHTML = `
    <div class="card">
      <h2>📥 Coller la correction</h2>
      <div class="sub">Colle la réponse entière de Claude. L'app en tire la note, les corrections ligne à ligne, la réponse réécrite — et verse les corrections dans La Lime et les tournures dans La Moisson.</div>
      ${msg ? `<div class="expl ${isErr ? 'no' : 'ok'} mt">${msg}</div>` : ''}
    </div>
    <textarea class="transinput" id="mic-imp" style="min-height:220px;font-size:13px" placeholder="## NOTE…">${keep ? micEsc(keep) : ''}</textarea>
    <button class="btn" onclick="micImportGo(${s.id})">Enregistrer la correction</button>
    <button class="btn ghost mt" onclick="renderMicroSession(${s.id})">Retour</button>
  `;
  window.scrollTo(0, 0);
}
function micImportGo(id) {
  const s = micById(id);
  if (!s) return renderMicroHome();
  const raw = (document.getElementById('mic-imp') || {}).value || '';
  if (!raw.trim()) return renderMicroImport(id, 'Il n\'y a rien à lire là.', '', true);
  if (typeof parsePlume !== 'function') return renderMicroImport(id, 'Le lecteur de corrections n\'est pas chargé.', raw, true);
  const p = parsePlume(raw);
  if (p.total == null && !p.corrections.length && !p.para)
    return renderMicroImport(id, 'Je n\'ai reconnu ni note, ni corrections là-dedans. La réponse doit garder les titres <b>## NOTE</b>, <b>## CORRECTIONS</b>… tels quels. Redemande à Claude de répondre au format de l\'export.', raw, true);

  s.note = p.total; s.affiche = p.affiche; s.verdict = p.verdict;
  s.corrections = p.corrections || []; s.modele = p.para || '';

  /* les tournures rejoignent le deck perso */
  let versees = 0;
  if ((p.tournures || []).length && typeof mine === 'function') {
    const now = Date.now();
    p.tournures.forEach((tr, i) => {
      const key = typeof mNorm === 'function' ? mNorm(tr.en) : String(tr.en).toLowerCase();
      if (mine().some(x => (typeof mNorm === 'function' ? mNorm(x.en) : String(x.en).toLowerCase()) === key)) return;
      mine().push({ id: now + i, en: tr.en, fr: tr.fr, note: tr.note, ex: tr.ex, exfr: tr.exfr,
        src: 'Le Micro · ' + String(s.sujet).slice(0, 40), created: now, updated: now, k: 1,
        srs: { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false } });
      versees++;
    });
  }
  /* chaque correction devient un exercice de production (jamais la forme fautive) */
  let limes = null;
  if (typeof limeFromCorrections === 'function')
    limes = limeFromCorrections(p.corrections, 'Le Micro · ' + String(s.sujet).slice(0, 40));

  save(); touchDay(); addXp(20);
  if (typeof checkAchievements === 'function') checkAchievements();
  const bits = [];
  if (p.total != null) bits.push(`note <b>${p.affiche || p.total + '/100'}</b> enregistrée`);
  if (p.corrections.length) bits.push(`<b>${p.corrections.length}</b> correction(s)`);
  if (p.para) bits.push('la réponse réécrite');
  if (versees) bits.push(`<b>${versees}</b> tournure(s) dans La Moisson`);
  if (limes && limes.n) bits.push(`<b>${limes.n}</b> exercice(s) dans La Lime`);
  if (limes && limes.sansConsigne) bits.push(`<b>${limes.sansConsigne}</b> sans sens français, écarté(s)`);
  toast('✨ Correction importée');
  renderMicroImport(id, `✨ ${bits.join(' · ')}.`);
}
