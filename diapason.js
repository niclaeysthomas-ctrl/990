/* ============================================================
   990 — LE DIAPASON : accent, prononciation, phrases bilingues
   Se charge APRÈS diapason-data.js, AVANT app.js.

   Principe de conception (l'inverse des autres modules de l'app) :
   ici on ne coche pas des cases, on ENTEND puis on PARLE. Chaque
   atelier de perception précède son atelier de production, parce
   qu'un contraste qu'on ne perçoit pas ne se produit pas.

   État : S.dia = { srs:{clé -> SM-2}, voice:'us'|'gb'|'rand',
                    lineDir:'shadow'|'produce', stats:{...} }
   ============================================================ */

/* ---------- état ---------- */
function dia() {
  if (!S.dia || typeof S.dia !== 'object') S.dia = {};
  const d = S.dia;
  if (!d.srs || typeof d.srs !== 'object') d.srs = {};
  if (!d.stats || typeof d.stats !== 'object') d.stats = {};
  if (!d.voice) d.voice = 'us';
  if (!d.lineDir) d.lineDir = 'shadow';
  return d;
}
function dBump(k, n) { const st = dia().stats; st[k] = (st[k] || 0) + (n || 1); save(); }
function dGet(k) { return dia().stats[k] || 0; }
function dEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function dKey(s) { let h = 0; const t = String(s); for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0; return 'd' + (h >>> 0); }

/* ---------- SM-2 (indépendant des autres decks) ---------- */
function dSrs(key) {
  const d = dia();
  if (!d.srs[key]) d.srs[key] = { ease: 2.5, interval: 0, reps: 0, due: 0, introduced: false };
  return d.srs[key];
}
function dRateKey(key, rating) {
  const c = dSrs(key), now = Date.now();
  c.introduced = true;
  if (rating === 0) { c.reps = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.interval = 0; c.due = now + 60000; }
  else {
    if (c.interval < 1) c.interval = rating === 3 ? 4 : 1;
    else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; c.interval = Math.round(c.interval * m); }
    if (rating === 1) c.ease = Math.max(1.3, c.ease - 0.15);
    if (rating === 3) c.ease += 0.15;
    c.reps += 1; c.due = now + Math.max(1, c.interval) * DAY;
  }
  addXp(rating === 0 ? 2 : 6); save();
}
function dNextLabel(key, rating) {
  const c = dSrs(key);
  if (rating === 0) return '<1min';
  let iv;
  if (c.interval < 1) iv = rating === 3 ? 4 : 1;
  else { const m = rating === 1 ? 1.2 : rating === 2 ? c.ease : c.ease * 1.3; iv = Math.round(c.interval * m); }
  iv = Math.max(1, iv);
  return iv < 30 ? iv + 'j' : Math.round(iv / 30) + 'mois';
}
/* files du jour : mots-pièges + phrases bilingues */
function dQueue(kind) {
  const now = Date.now(), src = kind === 'trap' ? DIA.traps : DIA.lines;
  const pre = kind === 'trap' ? 't:' : 'l:';
  const due = [], fresh = [];
  src.forEach((x, i) => {
    const c = dia().srs[pre + dKey(kind === 'trap' ? x.w : x.en)];
    if (c && c.introduced) { if (c.due <= now) due.push(i); }
    else fresh.push(i);
  });
  shuffle(due); shuffle(fresh);
  return { due, fresh, all: due.concat(fresh) };
}
function dDueCount() { return dQueue('trap').due.length + dQueue('line').due.length; }
function dMastered() { let n = 0; const s = dia().srs; for (const k in s) if (s[k].interval >= 21) n++; return n; }
function dSeen() { let n = 0; const s = dia().srs; for (const k in s) if (s[k].introduced) n++; return n; }

/* ============================================================
   VOIX — plusieurs locuteurs, c'est le cœur du protocole HVPT
   ============================================================ */
const DACC = {
  'en-us': { f: '🇺🇸', n: 'américain' }, 'en-gb': { f: '🇬🇧', n: 'britannique' },
  'en-ie': { f: '🇮🇪', n: 'irlandais' }, 'en-au': { f: '🇦🇺', n: 'australien' },
  'en-za': { f: '🇿🇦', n: 'sud-africain' }, 'en-in': { f: '🇮🇳', n: 'indien' },
  'en-scotland': { f: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', n: 'écossais' }, 'en-gb-scotland': { f: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', n: 'écossais' }
};
function dLang(v) { return String(v.lang || '').toLowerCase().replace(/_/g, '-'); }
function dEnVoices() {
  if (!('speechSynthesis' in window)) return [];
  return speechSynthesis.getVoices().filter(v => /^en/i.test(dLang(v)));
}
function dAccOf(v) { return DACC[dLang(v)] || { f: '🌍', n: dLang(v) }; }
function dVoiceFor(mode) {
  const vs = dEnVoices();
  if (!vs.length) return null;
  if (mode === 'rand') return vs[Math.floor(Math.random() * vs.length)];
  if (mode === 'gb') return vs.find(v => dLang(v) === 'en-gb') || vs.find(v => /Daniel|Kate|Serena|Oliver|Arthur/i.test(v.name)) || vs[0];
  return vs.find(v => dLang(v) === 'en-us' && /Samantha|Alex|Victoria/i.test(v.name)) || vs.find(v => dLang(v) === 'en-us') || vs[0];
}
let DLAST = null;   // dernière voix employée (pour l'afficher après coup)
function dSay(text, mode, rate, onend) {
  if (!('speechSynthesis' in window)) { toast('Synthèse vocale indisponible'); return; }
  speechSynthesis.cancel();
  const v = dVoiceFor(mode || dia().voice);
  DLAST = v;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = v ? v.lang : 'en-US';
  if (v) u.voice = v;
  u.rate = audioRate(rate || 0.95); u.pitch = 1;
  if (onend) u.onend = onend;
  speechSynthesis.speak(u);
}
function dLastAcc() { return DLAST ? dAccOf(DLAST).f + ' ' + DLAST.name + ' · ' + dAccOf(DLAST).n : ''; }
function dSetVoice(m) { dia().voice = m; save(); renderDiapasonHome(); }
/* boutons d'écoute réutilisables : jamais de texte interpolé dans un onclick
   (une apostrophe dans « I'd rather » casserait l'attribut) — on passe par un registre. */
let DSAYREG = [];
function dSayBtn(text, label, mode, rate) {
  const i = DSAYREG.push({ t: text, m: mode || null, r: rate || null }) - 1;
  return `<button class="spk sm" onclick="dSayReg(${i});event.stopPropagation()">${label || '🔊'}</button>`;
}
function dSayReg(i) { const e = DSAYREG[i]; if (e) dSay(e.t, e.m, e.r); }
function dResetReg() { DSAYREG = []; }

/* ============================================================
   MICRO — s'entendre, et VOIR où tombe son accent
   Rien ne sort de l'appareil : le son est analysé en mémoire,
   jamais enregistré sur disque ni envoyé.
   ============================================================ */
const DREC = {
  ctx: null, stream: null, src: null, node: null, sink: null,
  chunks: [], on: false, sr: 44100, data: null, target: null,
  async start() {
    if (this.on) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error('nomic');
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!this.ctx) this.ctx = new AC();
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    this.stream = stream;
    this.sr = this.ctx.sampleRate;
    this.src = this.ctx.createMediaStreamSource(stream);
    this.node = this.ctx.createScriptProcessor(4096, 1, 1);
    this.chunks = [];
    this.node.onaudioprocess = e => {
      if (!DREC.on) return;
      DREC.chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
    };
    /* le processeur doit être branché à la sortie pour tourner ; gain 0 = pas de larsen */
    this.sink = this.ctx.createGain(); this.sink.gain.value = 0;
    this.src.connect(this.node); this.node.connect(this.sink); this.sink.connect(this.ctx.destination);
    this.on = true;
  },
  stop() {
    this.on = false;
    try { if (this.node) this.node.disconnect(); } catch (e) {}
    try { if (this.src) this.src.disconnect(); } catch (e) {}
    try { if (this.sink) this.sink.disconnect(); } catch (e) {}
    if (this.stream) this.stream.getTracks().forEach(t => t.stop());
    this.stream = this.src = this.node = this.sink = null;
    let n = 0; this.chunks.forEach(c => n += c.length);
    const out = new Float32Array(n); let o = 0;
    this.chunks.forEach(c => { out.set(c, o); o += c.length; });
    this.chunks = [];
    this.data = out;
    return out;
  },
  play() {
    if (!this.data || !this.data.length || !this.ctx) return;
    const b = this.ctx.createBuffer(1, this.data.length, this.sr);
    b.copyToChannel ? b.copyToChannel(this.data, 0) : b.getChannelData(0).set(this.data);
    const s = this.ctx.createBufferSource();
    s.buffer = b; s.connect(this.ctx.destination); s.start();
  }
};

/* Enveloppe d'énergie : RMS par tranches de 10 ms, en dB, lissée. */
function dEnvelope(x, sr) {
  const win = Math.max(64, Math.round(sr * 0.01));
  const n = Math.floor(x.length / win), db = [];
  for (let i = 0; i < n; i++) {
    let e = 0;
    for (let j = i * win; j < (i + 1) * win; j++) e += x[j] * x[j];
    db.push(10 * Math.log10(e / win + 1e-12));
  }
  const sm = db.slice();
  for (let i = 2; i < db.length - 2; i++) sm[i] = (db[i - 2] + db[i - 1] + db[i] + db[i + 1] + db[i + 2]) / 5;
  return sm;
}
/* Bosses = noyaux de syllabes (approximation par l'énergie). On ne garde
   qu'un sommet s'il domine ses deux creux d'au moins 4 dB. */
function dPeaks(env) {
  const max = Math.max.apply(null, env), floor = max - 28;
  const peaks = [];
  let i = 1;
  while (i < env.length - 1) {
    if (env[i] > floor && env[i] >= env[i - 1] && env[i] > env[i + 1]) {
      let l = i; while (l > 0 && env[l - 1] < env[l]) l--;
      let r = i; while (r < env.length - 1 && env[r + 1] < env[r]) r++;
      const prom = env[i] - Math.max(env[l], env[r]);
      if (prom >= 4 || peaks.length === 0) {
        let e = 0; for (let k = l; k <= r; k++) e += Math.pow(10, env[k] / 10);
        const last = peaks[peaks.length - 1];
        if (last && i - last.i < 8) { if (env[i] > env[last.i]) peaks[peaks.length - 1] = { i, l, r, e, v: env[i] }; }
        else peaks.push({ i, l, r, e, v: env[i] });
      }
      i = r + 1;
    } else i++;
  }
  return peaks.filter(p => p.v > floor + 3);
}
function dEnvSvg(env) {
  if (!env.length) return '';
  const W = 320, H = 56, max = Math.max.apply(null, env), min = max - 30;
  const step = Math.max(1, Math.floor(env.length / 110));
  const bars = [];
  for (let i = 0; i < env.length; i += step) {
    const v = Math.max(0, Math.min(1, (env[i] - min) / (max - min)));
    const h = Math.max(1, v * (H - 6)), x = (i / env.length) * W;
    bars.push(`<rect x="${x.toFixed(1)}" y="${(H - h).toFixed(1)}" width="${Math.max(1.4, W / (env.length / step) - 0.6).toFixed(1)}" height="${h.toFixed(1)}" fill="var(--accent)" opacity=".75"/>`);
  }
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:420px;display:block;margin:6px auto">${bars.join('')}</svg>`;
}

/* Widget micro. cible = {text, syl:[..], s:index} pour un mot, ou {text} pour une phrase. */
let DTARGET = null;
function dRecWidget(target, hint) {
  DTARGET = target || null;
  return `<div class="card" id="dreczone" style="border-color:var(--purple)">
      <h2 style="font-size:15px">🎙️ À toi</h2>
      <div class="sub">${hint || 'Dis-le à voix haute, puis écoute-toi. C\'est en s\'entendant qu\'on se corrige — pas en croyant s\'entendre.'}</div>
      <button class="btn sec mt" id="drecbtn" onclick="dRecToggle()">⏺ M'enregistrer</button>
      <div id="drecout"></div>
    </div>`;
}
function dRecToggle() {
  const btn = document.getElementById('drecbtn'), out = document.getElementById('drecout');
  if (!btn) return;
  if (DREC.on) {
    const data = DREC.stop();
    btn.textContent = '⏺ Recommencer';
    if (!data || data.length < 2000) { out.innerHTML = `<div class="expl no mt">Rien d'enregistré. Vérifie que le micro est autorisé, puis reparle plus près.</div>`; return; }
    dRecReport(data, out);
  } else {
    out.innerHTML = '';
    DREC.start().then(() => {
      btn.textContent = '⏹ Stop';
      btn.style.borderColor = 'var(--bad)';
      out.innerHTML = `<div class="sub center mt" style="color:var(--bad)">● enregistrement… parle, puis touche Stop</div>`;
    }).catch(err => {
      const msg = (err && err.name === 'NotAllowedError')
        ? "Le micro est refusé pour ce site. Autorise-le (cadenas dans la barre d'adresse, ou Réglages → Safari) puis réessaie."
        : (err && err.message === 'nomic')
          ? "Ce navigateur ne donne pas accès au micro. Sur iPhone, ouvre l'app depuis Safari plutôt que depuis l'icône installée si le problème persiste."
          : "Micro indisponible ici. Le reste de l'atelier fonctionne sans.";
      out.innerHTML = `<div class="expl no mt">${msg}</div>`;
    });
  }
}
function dRecReport(data, out) {
  const env = dEnvelope(data, DREC.sr);
  const peaks = dPeaks(env);
  let verdict = '';
  const T = DTARGET;
  if (T && T.syl && T.syl.length > 1) {
    if (peaks.length === T.syl.length) {
      let bi = 0; peaks.forEach((p, i) => { if (p.e > peaks[bi].e) bi = i; });
      const ok = bi === T.s;
      verdict = `<div class="expl ${ok ? 'ok' : 'no'} mt">${ok
        ? `✅ La machine compte ${peaks.length} syllabes et voit le sommet d'énergie sur <b>${dEsc(T.syl[bi])}</b> — c'est la bonne.`
        : `⚠️ Elle voit le sommet sur <b>${dEsc(T.syl[bi])}</b>, alors que l'accent va sur <b>${dEsc(T.syl[T.s])}</b>. Reprends en allongeant nettement la bonne syllabe : plus longue, plus forte, plus haute.`}
        <div class="sub mt">Mesure d'énergie seule, sans la hauteur : elle indique une tendance, elle ne remplace pas ton oreille.</div></div>`;
    } else {
      verdict = `<div class="expl mt">Je compte ${peaks.length} bosse(s) d'énergie pour ${T.syl.length} syllabe(s) — la découpe automatique a échoué (syllabes trop liées, ou bruit de fond). Fie-toi à la courbe : le pic le plus large et le plus haut doit tomber sur <b>${dEsc(T.syl[T.s])}</b>.</div>`;
    }
  } else if (T) {
    verdict = `<div class="expl mt">${peaks.length} temps forts détectés. Sur une phrase, ce qui compte est le CONTRASTE : des bosses nettes sur les mots pleins, des creux marqués entre elles. Une courbe régulière comme un rail = un débit français.</div>`;
  }
  out.innerHTML = `${dEnvSvg(env)}
    <div class="sub center">ton enveloppe d'énergie · gauche → droite</div>
    ${verdict}
    <div class="row2 mt">
      <button class="btn sec" onclick="DREC.play()">▶ M'écouter</button>
      ${T && T.text ? dModelBtn(T.text) : ''}
    </div>
    ${dAsrBlock()}`;
  dBump('spoken');
  if (typeof bumpDaily === 'function') bumpDaily('speak');
}
function dModelBtn(text) {
  const i = DSAYREG.push({ t: text, m: null, r: null }) - 1;
  return `<button class="btn sec" onclick="dSayReg(${i})">🔊 Le modèle</button>`;
}
/* Reconnaissance vocale : « la machine m'a-t-elle compris ? » */
function dAsrBlock() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR || !DTARGET || !DTARGET.text) return '';
  return `<button class="btn ghost mt" onclick="dAsrRun()">🤖 Test machine : est-ce qu'on me comprend ?</button>
    <div id="dasrout"></div>`;
}
function dNorm(s) {
  return String(s || '').toLowerCase().replace(/[’']/g, "'").replace(/[^a-z' ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function dAsrRun() {
  const out = document.getElementById('dasrout');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR || !out || !DTARGET) return;
  const target = DTARGET.text, alt = DTARGET.alt || null;
  out.innerHTML = `<div class="sub center mt" style="color:var(--bad)">● parle maintenant…</div>`;
  let r;
  try { r = new SR(); } catch (e) { out.innerHTML = `<div class="expl no mt">Reconnaissance vocale indisponible ici.</div>`; return; }
  r.lang = dia().voice === 'gb' ? 'en-GB' : 'en-US';
  r.interimResults = false; r.maxAlternatives = 3;
  r.onresult = ev => {
    const heard = [];
    for (let i = 0; i < ev.results[0].length; i++) heard.push(ev.results[0][i].transcript);
    const nt = dNorm(target), nh = heard.map(dNorm);
    const hit = nh.some(h => h === nt || h.indexOf(nt) >= 0);
    const trap = alt && nh.some(h => h === dNorm(alt));
    out.innerHTML = `<div class="expl ${hit ? 'ok' : 'no'} mt">
      ${hit ? '✅ Comprise du premier coup.' : trap ? `❌ Elle a entendu <b>${dEsc(alt)}</b> — exactement le mot que tu voulais éviter.` : `❌ Elle a entendu «&nbsp;${dEsc(heard[0])}&nbsp;».`}
      <div class="sub mt">Attendu : «&nbsp;${dEsc(target)}&nbsp;»${heard.length > 1 ? ` · autres hypothèses : ${heard.slice(1).map(h => '«&nbsp;' + dEsc(h) + '&nbsp;»').join(' · ')}` : ''}</div>
      <div class="sub mt">La machine n'est pas un jury : elle devine aussi d'après ce qui est probable. Un échec est un signal, pas une sentence.</div></div>`;
  };
  r.onerror = ev => {
    const e = ev && ev.error;
    const msg = e === 'not-allowed' ? "Micro refusé pour ce site."
      : e === 'service-not-allowed' ? "Le service de dictée du système est désactivé (Réglages → Clavier → Dictée)."
      : e === 'no-speech' ? "Je n'ai rien entendu."
      : "Reconnaissance indisponible (" + e + ").";
    out.innerHTML = `<div class="expl no mt">${msg}</div>`;
  };
  try { r.start(); } catch (e) { out.innerHTML = `<div class="expl no mt">Reconnaissance déjà en cours.</div>`; }
}

/* ============================================================
   ACCUEIL
   ============================================================ */
function dTile(fn, ic, t, d, badge, color) {
  return `<button class="tile" onclick="${fn}">
    <div class="ic" style="background:linear-gradient(135deg,${color}33,${color}11);color:${color}">${ic}</div>
    <div class="body"><div class="t">${t}</div><div class="d">${d}</div></div>
    <div class="badge ${badge ? '' : 'zero'}">${badge || '›'}</div>
  </button>`;
}
function renderDiapasonHome() {
  dia(); dResetReg();
  const v = dia().voice;
  const nv = dEnVoices().length;
  const trap = dQueue('trap'), line = dQueue('line');
  const vbtn = (m, lab) => `<button class="segchip ${v === m ? 'on' : ''}" onclick="dSetVoice('${m}')">${lab}</button>`;
  app.innerHTML = `
    <div class="card">
      <h2>🎙️ Le Diapason</h2>
      <div class="sub">Accorder l'oreille, puis la bouche. Le français n'a pas d'accent de mot : l'accent y tombe mécaniquement en fin de groupe. Résultat mesuré en laboratoire — les francophones <b style="color:var(--txt)">n'entendent pas</b> où tombe l'accent anglais. On ne produit pas ce qu'on ne perçoit pas : chaque atelier commence donc par écouter.</div>
      <div class="row2 mt">
        <div><div class="logo" style="font-size:24px;color:var(--blue)">${dSeen()}</div><div class="sub">items travaillés</div></div>
        <div><div class="logo" style="font-size:24px;color:var(--good)">${dMastered()}</div><div class="sub">ancrés (≥21j)</div></div>
      </div>
    </div>

    <button class="btn" onclick="dSeanceStart()">▶ La séance du jour · ~12 min</button>
    <div class="sub center mb" style="margin-top:6px">oreille → paires → rythme → bouche → phrases</div>

    <div class="card">
      <h2 style="font-size:15px">La voix du modèle</h2>
      <div class="sub" style="margin-bottom:8px">${v === 'rand'
        ? `Voix tirée au sort à chaque item parmi les ${nv} voix anglaises de ton appareil. C'est le réglage exigeant : entendre un même contraste par plusieurs bouches est ce qui fait vraiment tenir la discrimination.`
        : v === 'gb' ? 'Modèle britannique (RP).' : 'Modèle américain.'}</div>
      <div class="segwrap">
        ${vbtn('us', '🇺🇸 US')} ${vbtn('gb', '🇬🇧 UK')} ${vbtn('rand', '🌍 Multi-accents')}
      </div>
      ${nv === 0 ? `<div class="expl no mt">Aucune voix anglaise détectée sur cet appareil.</div>` : `<div class="sub mt">Disponibles : ${dEnVoices().map(x => dAccOf(x).f + ' ' + dEsc(x.name)).join(' · ')}</div>`}
    </div>

    <div class="sub mb" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">L'oreille · perception</div>
    ${dTile('dStressStart(\'all\')', '👂', 'Où tombe l\'accent ?', `${DIA.stress.length} mots · tu écoutes, tu désignes la syllabe`, '', '#4d8dff')}
    ${dTile('dPairHome()', '🎧', 'Paires minimales', `${DIA.pairs.length} paires · ship/sheep, work/walk, want/won't`, '', '#4d8dff')}
    ${dTile('dEndStart(\'ed\')', '🔚', 'Terminaisons -ed et -s', `/t/ /d/ /ɪd/ · ${DIA.ed.length + DIA.s3.length} mots au jugé`, '', '#4d8dff')}
    ${dTile('dDictStart()', '✍️', 'Dictée multi-accents', `${DIA.lines.length} phrases natives à vitesse réelle`, '', '#4d8dff')}

    <div class="sub mb mt" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">La bouche · production</div>
    ${dTile('dTrapStart(\'all\')', '🪤', 'Mots-pièges', `${DIA.traps.length} mots qui trahissent en une syllabe`, trap.due.length || '', '#ffb020')}
    ${dTile('dLineStart()', '🗣️', 'Phrases bilingues', `${DIA.lines.length} phrases à shadower, accents marqués`, line.due.length || '', '#ffb020')}
    ${dTile('dRhyStart()', '🥁', 'Le rythme de la phrase', `${DIA.rhythm.length} phrases · marque les temps forts`, '', '#ffb020')}
    ${dTile('dCsStart()', '🔗', 'Parole enchaînée', `${DIA.cs.length} groupes · « whatcha gonna do »`, '', '#ffb020')}

    <div class="sub mb mt" style="padding-left:4px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:12px">Comprendre le système</div>
    ${dTile('dConStart()', '🎯', 'Accent contrastif', 'Le même phrase, sept sens selon l\'accent', '', '#9d7bff')}
    ${dTile('dTuneStart()', '📈', 'Intonation', `${DIA.tunes.length} courbes mélodiques et ce qu'elles disent`, '', '#9d7bff')}
    ${dTile('dRules()', '📜', 'Les règles d\'accentuation', 'Suffixes, composés, nom/verbe : la mécanique', '', '#9d7bff')}

    <button class="btn ghost mt" onclick="setView('home')">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ---------- Les règles (référence) ---------- */
function dRules() {
  dResetReg();
  const ex = (w, s) => `<b style="color:var(--accent)">${w}</b> ${dSayBtn(s || w.replace(/·/g, ''), '🔊')}`;
  app.innerHTML = `
    <div class="card">
      <h2>📜 Les règles d'accentuation</h2>
      <div class="sub">L'anglais n'accentue pas au hasard : 80 % des cas tiennent dans ces sept règles. Le reste s'apprend mot par mot — c'est l'atelier des mots-pièges.</div>
    </div>
    <div class="card"><h2 style="font-size:15px">1 · Les suffixes qui tirent l'accent juste AVANT eux</h2>
      <div class="sub">-tion, -sion, -ic, -ical, -ity, -ial, -ian, -ious, -graphy, -logy, -cracy, -metry.<br>
      ${ex('eduCAtion', 'education')} · ${ex('ecoNOMic', 'economic')} · ${ex('aBIlity', 'ability')} · ${ex('phoTOgraphy', 'photography')} · ${ex('deMOcracy', 'democracy')}<br>
      C'est la règle la plus rentable : elle explique à elle seule les familles où l'accent « bouge » (PHOtograph → phoTOgrapher → photoGRAPHic).</div></div>
    <div class="card"><h2 style="font-size:15px">2 · Les suffixes qui portent EUX-MÊMES l'accent</h2>
      <div class="sub">-ee, -eer, -ese, -ette, -esque, -ique.<br>
      ${ex('traiNEE', 'trainee')} · ${ex('engiNEER', 'engineer')} · ${ex('japaNESE', 'Japanese')} · ${ex('picturESQUE', 'picturesque')} · ${ex('techNIQUE', 'technique')}<br>
      Exception à connaître : comMITtee.</div></div>
    <div class="card"><h2 style="font-size:15px">3 · Les verbes en -ate, -ise/-ize, -ify</h2>
      <div class="sub">Accent deux syllabes avant la fin : ${ex('comMUnicate', 'communicate')} · ${ex('DEMonstrate', 'demonstrate')} · ${ex('aPOLogize', 'apologize')}.</div></div>
    <div class="card"><h2 style="font-size:15px">4 · Nom devant, verbe derrière</h2>
      <div class="sub">Pour une centaine de dissyllabes, l'accent seul distingue le nom du verbe :<br>
      a ${ex('REcord', 'a new record')} / to ${ex('reCORD', 'to record it')} · a ${ex('PRESent', 'a present')} / to ${ex('preSENT', 'to present it')} · an ${ex('INcrease', 'an increase')} / to ${ex('inCREASE', 'to increase it')}.<br>
      Se tromper ne fait pas « accent » : ça fait entendre un autre mot.</div></div>
    <div class="card"><h2 style="font-size:15px">5 · Les noms composés : accent sur le PREMIER élément</h2>
      <div class="sub">${ex('GREENhouse', 'a greenhouse')} (une serre) vs a green ${ex('HOUSE', 'a green house')} (une maison verte).<br>
      ${ex('ENGlish teacher', 'my English teacher')} = il enseigne l'anglais ; English ${ex('TEAcher', 'an English teacher')} = il est anglais. L'accent porte le sens, à lui tout seul.</div></div>
    <div class="card"><h2 style="font-size:15px">6 · Les phrasal verbs : accent sur la PARTICULE</h2>
      <div class="sub">to set ${ex('UP', 'to set up a meeting')} → mais a ${ex('SETup', 'the whole setup')}. Idem break DOWN / a BREAKdown, work OUT / a WORKout.</div></div>
    <div class="card"><h2 style="font-size:15px">7 · Les préfixes ne sont jamais accentués</h2>
      <div class="sub">re-, de-, in-, con-, pre-, ex-, sub-, mis- : ${ex('conCERNED', 'concerned')} · ${ex('deVElop', 'develop')} · ${ex('preFER', 'prefer')} · ${ex('misTAKE', 'mistake')}.</div></div>
    <div class="card" style="border-color:var(--accent)"><h2 style="font-size:15px">Et la conséquence qu'on oublie</h2>
      <div class="sub">L'accent commande la VOYELLE, jamais l'inverse. Une syllabe inaccentuée se réduit presque toujours à un schwa /ə/ : phoTOgrapher se dit /fəˈtɒɡrəfə/ — le « o » du début et le « a » de la fin ont disparu. Prononcer toutes les voyelles pleinement, c'est le signe le plus sûr d'un accent français.</div></div>
    <button class="btn ghost mt" onclick="renderDiapasonHome()">Retour</button>
  `;
  window.scrollTo(0, 0);
}

/* ============================================================
   LA SÉANCE DU JOUR — l'ordre qui marche : oreille, puis bouche
   ============================================================ */
let DSE = null;
const DSE_STEPS = [
  { k: 'stress', n: 6, t: 'Où tombe l\'accent ?', d: 'Six mots à l\'oreille. On règle le récepteur avant l\'émetteur.' },
  { k: 'pair', n: 6, t: 'Paires minimales', d: 'Six contrastes, voix différentes. C\'est l\'exercice qui déplace vraiment la frontière.' },
  { k: 'rhythm', n: 2, t: 'Le rythme', d: 'Deux phrases : où sont les temps forts, et ce qui s\'écrase entre eux.' },
  { k: 'trap', n: 4, t: 'Mots-pièges', d: 'Quatre mots à dire à voix haute. Enregistre-toi, ça change tout.' },
  { k: 'line', n: 4, t: 'Phrases bilingues', d: 'Quatre phrases à shadower. C\'est ici que l\'accent se joue vraiment.' }
];
function dSeanceStart() { DSE = { i: 0 }; dSeanceStep(); }
function dSeanceStep() {
  if (!DSE) return;
  if (DSE.i >= DSE_STEPS.length) return dSeanceEnd();
  const s = DSE_STEPS[DSE.i];
  app.innerHTML = `
    <div class="card">
      <div class="pill warn">Étape ${DSE.i + 1} / ${DSE_STEPS.length}</div>
      <h2 class="mt">${s.t}</h2>
      <div class="sub mt">${s.d}</div>
    </div>
    <div class="pbar mb"><i style="width:${DSE.i / DSE_STEPS.length * 100}%"></i></div>
    <button class="btn" onclick="dSeanceGo()">Continuer</button>
    <button class="btn ghost mt" onclick="dSeanceQuit()">Arrêter la séance</button>`;
  window.scrollTo(0, 0);
}
function dSeanceGo() {
  const s = DSE_STEPS[DSE.i];
  if (s.k === 'stress') dStressStart('all', s.n);
  else if (s.k === 'pair') dPairStart('all', s.n);
  else if (s.k === 'rhythm') dRhyStart(s.n);
  else if (s.k === 'trap') dTrapStart('all', s.n);
  else if (s.k === 'line') dLineStart(s.n);
}
function dSeanceNext() { if (!DSE) return false; DSE.i++; dSeanceStep(); return true; }
function dSeanceQuit() { DSE = null; renderDiapasonHome(); }
function dSeanceEnd() {
  DSE = null; markStudy(); touchDay(); save();
  if (typeof checkAchievements === 'function') checkAchievements();
  app.innerHTML = `
    <div class="card big">
      <div class="em">🎙️</div>
      <div class="score" style="color:var(--good)">Séance bouclée</div>
      <div class="lab">oreille + bouche</div>
      <div class="mt sub">Le meilleur usage de ce que tu viens de faire : le replacer aujourd'hui, à voix haute, dans une vraie phrase. Une tournure entendue et jamais prononcée reste du vocabulaire passif.</div>
    </div>
    <button class="btn" onclick="renderDiapasonHome()">Terminé</button>`;
  window.scrollTo(0, 0);
}
/* Chaque atelier finit par ici : soit on enchaîne la séance, soit on rend la main. */
function dEndScreen(html, again, backLabel) {
  markStudy(); touchDay(); save();
  if (typeof checkAchievements === 'function') checkAchievements();
  if (DSE) { dSeanceNext(); return; }
  app.innerHTML = html + (again ? `<button class="btn" onclick="${again}">↻ Encore</button>` : '') +
    `<button class="btn ghost mt" onclick="renderDiapasonHome()">${backLabel || '← Le Diapason'}</button>`;
  window.scrollTo(0, 0);
}

/* ============================================================
   ATELIER 1 — OÙ TOMBE L'ACCENT ? (perception + production)
   ============================================================ */
let DST = null;
const DST_CATS = { all: 'Tous', cognat: 'Cognats', suffixe: 'Suffixes', famille: 'Familles', 'nom/verbe': 'Nom / verbe', 'nom/adj': 'Nom / adjectif', composé: 'Composés', phrasal: 'Phrasal verbs', piège: 'Pièges', emprunt: 'Emprunts', 'faux-ami': 'Faux-amis' };
function dStressStart(cat, lim) {
  const pool = DIA.stress.filter(x => cat === 'all' || x.cat === cat);
  if (!pool.length) { toast('Rien ici 🙂'); return; }
  DST = { cat, pool, bag: [], n: 0, ok: 0, streak: 0, best: 0, lim: lim || 0, answered: false };
  dStressRender();
}
function dStressRender() {
  dResetReg();
  if (DST.lim && DST.n >= DST.lim) return dStressFinish();
  if (!DST.bag.length) DST.bag = shuffle(DST.pool.slice());
  const it = DST.cur = DST.bag.pop();
  DST.answered = false;
  const acc = DST.n ? Math.round(100 * DST.ok / DST.n) : 0;
  const btns = it.syl.map((s, k) =>
    `<button class="opt" id="dsyl${k}" style="flex:1 1 auto;min-width:74px;text-align:center;font-size:19px;font-weight:800;padding:15px 10px;margin-bottom:0" onclick="dStressAnswer(${k})">${dEsc(s)}</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>👂 Accent de mot${DST.cat !== 'all' ? ' · ' + DST_CATS[DST.cat] : ''}</span><span>${DST.lim ? DST.n + 1 + ' / ' + DST.lim : '🔥 ' + DST.streak}</span></div>
    <div class="pbar mb"><i style="width:${DST.lim ? DST.n / DST.lim * 100 : acc}%"></i></div>
    <div class="sub center mb">${DST.n ? acc + '% · ' + DST.n + ' faites' : 'Écoute, puis touche la syllabe qui porte l\'accent.'}</div>
    <button class="spk" onclick="dStressPlay()" style="width:84px;height:84px;font-size:32px">🔊</button>
    <div class="center sub mb">Touche pour réécouter</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">${btns}</div>
    <div id="dstafter"></div>
    ${DST.lim ? '' : `<button class="btn ghost mt" onclick="dStressFinish()">■ Stop &amp; bilan</button>`}`;
  window.scrollTo(0, 0);
  setTimeout(dStressPlay, 320);
}
function dStressPlay() { const it = DST.cur; dSay(it.audio || it.w, null, 0.9); }
function dStressAnswer(k) {
  if (!DST || DST.answered) return;
  DST.answered = true;
  const it = DST.cur, ok = k === it.s;
  it.syl.forEach((s, i) => {
    const b = document.getElementById('dsyl' + i);
    if (!b) return;
    b.setAttribute('disabled', '');
    if (i === it.s) b.classList.add('good');
    else if (i === k) b.classList.add('bad');
    else b.classList.add('dim');
  });
  DST.n++;
  if (ok) { DST.ok++; DST.streak++; if (DST.streak > DST.best) DST.best = DST.streak; addXp(3); dBump('stressOk'); }
  else { DST.streak = 0; recordMistake({ kind: 'gram', q: 'Accent de mot : ' + it.w + ' — quelle syllabe ?', opts: it.syl, correct: it.s, expl: it.ipa + ' — ' + it.note, cat: 'Diapason · accent de mot' }); }
  dBump('stressN');
  const marked = it.syl.map((s, i) => i === it.s ? `<b style="color:var(--accent)">${dEsc(s.toUpperCase())}</b>` : dEsc(s)).join('-');
  document.getElementById('dstafter').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'} mt">${ok ? '✅ ' : '❌ '}<b>${marked}</b> ${it.ipa}
      ${it.ctx ? `<div class="sub mt">Entendu : ${dEsc(it.ctx)}</div>` : ''}
      <div class="mt">${it.note}</div>
      <div class="mt">${dSayBtn(it.audio || it.w, '🔊 US', 'us', 0.9)} ${dSayBtn(it.audio || it.w, '🔊 UK', 'gb', 0.9)} ${dSayBtn(it.audio || it.w, '🐢 lent', null, 0.55)}</div>
    </div>
    ${dRecWidget({ text: it.audio || it.w, syl: it.syl, s: it.s }, 'Dis le mot en écrasant tout SAUF la bonne syllabe. La courbe te dira où est tombé ton poids.')}
    <button class="btn mt" onclick="dStressRender()">Suivant →</button>`;
  document.getElementById('dstafter').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function dStressFinish() {
  if (!DST) return;
  const acc = DST.n ? Math.round(100 * DST.ok / DST.n) : 0;
  dEndScreen(`<div class="card big"><div class="em">${acc >= 85 ? '🎉' : acc >= 60 ? '💪' : '👂'}</div>
      <div class="score" style="color:${acc >= 70 ? 'var(--good)' : 'var(--accent)'}">${acc}%</div>
      <div class="lab">${DST.ok}/${DST.n} · meilleure série ${DST.best}</div>
      <div class="mt sub">${acc >= 85 ? 'Ton oreille encode la place de l\'accent — c\'est exactement ce qui manque à la plupart des francophones.'
        : acc >= 60 ? 'Ça vient. Refais-en tous les jours : la discrimination accentuelle s\'installe par exposition, pas par raisonnement.'
        : 'Normal, et c\'est le but : ton système phonologique ne code pas cette information. Il faut du volume, pas de l\'intelligence.'}</div></div>`,
    `dStressStart('${DST.cat}')`);
}

/* ============================================================
   ATELIER 2 — PAIRES MINIMALES (HVPT : voix qui change)
   ============================================================ */
let DPR = null;
function dPairHome() {
  dResetReg();
  const chips = Object.keys(DIA.contrasts).map(k => {
    const n = DIA.pairs.filter(p => p[2] === k).length;
    return `<button class="segchip" onclick="dPairStart('${k}')">${DIA.contrasts[k].lab} <span class="cnt">${n}</span></button>`;
  }).join('');
  app.innerHTML = `
    <div class="card">
      <h2>🎧 Paires minimales</h2>
      <div class="sub">Deux mots qui ne diffèrent que par un son. Tu en entends un : lequel ? Si le réglage « multi-accents » est actif, la voix change à chaque fois — c'est ce qui force l'oreille à coder le son lui-même plutôt qu'une voix particulière.</div>
      <div class="pill warn mt">Réussite : ${dGet('pairOk')} / ${dGet('pairN')}</div>
    </div>
    <button class="btn" onclick="dPairStart('all')">Tout mélanger · ${DIA.pairs.length} paires</button>
    <div class="card mt"><h2 style="font-size:15px">Cibler un contraste</h2><div class="segwrap mt">${chips}</div></div>
    <button class="btn ghost mt" onclick="renderDiapasonHome()">Retour</button>`;
  window.scrollTo(0, 0);
}
function dPairStart(ckey, lim) {
  const pool = DIA.pairs.filter(p => ckey === 'all' || p[2] === ckey);
  if (!pool.length) { toast('Rien ici 🙂'); return; }
  DPR = { ckey, pool, bag: [], n: 0, ok: 0, streak: 0, best: 0, lim: lim || 0, answered: false };
  dPairRender();
}
function dPairRender() {
  dResetReg();
  if (DPR.lim && DPR.n >= DPR.lim) return dPairFinish();
  if (!DPR.bag.length) DPR.bag = shuffle(DPR.pool.slice());
  const p = DPR.cur = DPR.bag.pop();
  DPR.said = Math.random() < 0.5 ? 0 : 1;               // lequel des deux est prononcé
  DPR.order = Math.random() < 0.5 ? [0, 1] : [1, 0];     // ordre d'affichage
  DPR.answered = false;
  const c = DIA.contrasts[p[2]];
  const acc = DPR.n ? Math.round(100 * DPR.ok / DPR.n) : 0;
  const btns = DPR.order.map((idx, k) =>
    `<button class="opt" id="dpr${k}" style="flex:1;text-align:center;font-size:22px;font-weight:800;padding:18px;margin-bottom:0" onclick="dPairAnswer(${idx})">${dEsc(p[idx])}</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>🎧 ${c.lab}</span><span>${DPR.lim ? DPR.n + 1 + ' / ' + DPR.lim : '🔥 ' + DPR.streak}</span></div>
    <div class="pbar mb"><i style="width:${DPR.lim ? DPR.n / DPR.lim * 100 : acc}%"></i></div>
    <div class="sub center mb">${DPR.n ? acc + '% · ' + DPR.n + ' faites' : 'Lequel des deux entends-tu ?'}</div>
    <button class="spk" onclick="dPairPlay()" style="width:84px;height:84px;font-size:32px">🔊</button>
    <div class="center sub mb">Touche pour réécouter</div>
    <div style="display:flex;gap:10px">${btns}</div>
    <div id="dprafter"></div>
    ${DPR.lim ? '' : `<button class="btn ghost mt" onclick="dPairFinish()">■ Stop &amp; bilan</button>`}`;
  window.scrollTo(0, 0);
  setTimeout(dPairPlay, 320);
}
function dPairPlay() { dSay(DPR.cur[DPR.said], null, 0.85); }
function dPairAnswer(idx) {
  if (!DPR || DPR.answered) return;
  DPR.answered = true;
  const p = DPR.cur, c = DIA.contrasts[p[2]], ok = idx === DPR.said;
  const target = p[DPR.said], other = p[1 - DPR.said];
  DPR.order.forEach((oi, k) => {
    const b = document.getElementById('dpr' + k);
    if (!b) return;
    b.setAttribute('disabled', '');
    if (oi === DPR.said) b.classList.add('good'); else if (oi === idx) b.classList.add('bad'); else b.classList.add('dim');
  });
  DPR.n++; dBump('pairN');
  if (ok) { DPR.ok++; DPR.streak++; if (DPR.streak > DPR.best) DPR.best = DPR.streak; addXp(3); dBump('pairOk'); }
  else { DPR.streak = 0; recordMistake({ kind: 'listen', q: 'Paire minimale : ' + p[0] + ' / ' + p[1], opts: [p[0], p[1]], correct: DPR.said, expl: c.tip, cat: 'Diapason · paires minimales', audio: target }); }
  document.getElementById('dprafter').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'} mt">${ok ? '✅ C\'était bien ' : '❌ C\'était '}<b>${dEsc(target)}</b>${DLAST ? ` · voix : ${dEsc(dLastAcc())}` : ''}
      <div class="mt">${c.tip}</div>
      <div class="mt">${dSayBtn(p[0], '🔊 ' + dEsc(p[0]), null, 0.8)} ${dSayBtn(p[1], '🔊 ' + dEsc(p[1]), null, 0.8)} ${dSayBtn(p[0] + ', ' + p[1], '🔊 les deux', null, 0.75)}</div>
    </div>
    ${dRecWidget({ text: target, alt: other }, 'À toi : dis <b style="color:var(--accent)">' + dEsc(target) + '</b>. Si la machine entend « ' + dEsc(other) + ' », le contraste n\'est pas encore là.')}
    <button class="btn mt" onclick="dPairRender()">Suivant →</button>`;
  document.getElementById('dprafter').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function dPairFinish() {
  if (!DPR) return;
  const acc = DPR.n ? Math.round(100 * DPR.ok / DPR.n) : 0;
  dEndScreen(`<div class="card big"><div class="em">${acc >= 85 ? '🎉' : acc >= 60 ? '💪' : '🎧'}</div>
      <div class="score" style="color:${acc >= 70 ? 'var(--good)' : 'var(--accent)'}">${acc}%</div>
      <div class="lab">${DPR.ok}/${DPR.n} · meilleure série ${DPR.best}</div>
      <div class="mt sub">Un contraste sous 70 % n'est pas « mal entendu » : il n'est pas encore encodé. Reviens dessus en séries courtes et fréquentes plutôt qu'en une longue session.</div></div>`,
    `dPairStart('${DPR.ckey}')`);
}

/* ============================================================
   ATELIER 3 — TERMINAISONS -ED / -S
   ============================================================ */
let DEN = null;
function dEndStart(kind, lim) {
  const src = kind === 's' ? DIA.s3 : DIA.ed;
  DEN = { kind, pool: src.slice(), bag: [], n: 0, ok: 0, streak: 0, best: 0, lim: lim || 0, answered: false };
  dEndRender();
}
function dEndRender() {
  dResetReg();
  if (DEN.lim && DEN.n >= DEN.lim) return dEndFinish();
  if (!DEN.bag.length) DEN.bag = shuffle(DEN.pool.slice());
  const it = DEN.cur = DEN.bag.pop();
  DEN.answered = false;
  const cats = DEN.kind === 's' ? ['s', 'z', 'ɪz'] : ['t', 'd', 'ɪd'];
  const acc = DEN.n ? Math.round(100 * DEN.ok / DEN.n) : 0;
  const btns = cats.map((c, k) =>
    `<button class="opt" id="dend${k}" style="flex:1;text-align:center;font-size:21px;font-weight:800;padding:18px;margin-bottom:0" onclick="dEndAnswer(${k})">/${c}/</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>🔚 Terminaison -${DEN.kind === 's' ? 's' : 'ed'}</span><span>${DEN.lim ? DEN.n + 1 + ' / ' + DEN.lim : '🔥 ' + DEN.streak}</span></div>
    <div class="pbar mb"><i style="width:${DEN.lim ? DEN.n / DEN.lim * 100 : acc}%"></i></div>
    <div class="sub center mb">${DEN.n ? acc + '% · ' + DEN.n + ' faites' : 'Écoute : comment finit ce mot ?'}</div>
    <button class="spk" onclick="dEndPlay()" style="width:84px;height:84px;font-size:32px">🔊</button>
    <div class="center sub mb">Touche pour réécouter</div>
    <div style="display:flex;gap:10px">${btns}</div>
    <div id="denafter"></div>
    <div class="row2 mt">
      <button class="btn ghost" onclick="dEndStart('${DEN.kind === 's' ? 'ed' : 's'}')">↔ Passer aux -${DEN.kind === 's' ? 'ed' : 's'}</button>
      <button class="btn ghost" onclick="dEndFinish()">■ Bilan</button>
    </div>`;
  window.scrollTo(0, 0);
  setTimeout(dEndPlay, 320);
}
function dEndPlay() { dSay(DEN.cur[0], null, 0.8); }
function dEndAnswer(k) {
  if (!DEN || DEN.answered) return;
  DEN.answered = true;
  const it = DEN.cur, cats = DEN.kind === 's' ? ['s', 'z', 'ɪz'] : ['t', 'd', 'ɪd'];
  const correct = cats.indexOf(it[1]), ok = k === correct;
  cats.forEach((c, i) => {
    const b = document.getElementById('dend' + i);
    if (!b) return;
    b.setAttribute('disabled', '');
    if (i === correct) b.classList.add('good'); else if (i === k) b.classList.add('bad'); else b.classList.add('dim');
  });
  DEN.n++;
  if (ok) { DEN.ok++; DEN.streak++; if (DEN.streak > DEN.best) DEN.best = DEN.streak; addXp(2); }
  else DEN.streak = 0;
  document.getElementById('denafter').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'} mt">${ok ? '✅ ' : '❌ '}<b>${dEsc(it[0])}</b> → /${it[1]}/
      <div class="mt">${DEN.kind === 's' ? DIA.sRule : DIA.edRule}</div>
      <div class="mt">${dSayBtn(it[0], '🔊', null, 0.75)}</div>
    </div>
    <button class="btn mt" onclick="dEndRender()">Suivant →</button>`;
}
function dEndFinish() {
  if (!DEN) return;
  const acc = DEN.n ? Math.round(100 * DEN.ok / DEN.n) : 0;
  const adj = DIA.edAdj.map(a => `<b>${dEsc(a[0])}</b> ${a[1]}`).join(' · ');
  dEndScreen(`<div class="card big"><div class="em">${acc >= 85 ? '🎉' : '🔚'}</div>
      <div class="score" style="color:${acc >= 70 ? 'var(--good)' : 'var(--accent)'}">${acc}%</div>
      <div class="lab">${DEN.ok}/${DEN.n}</div></div>
    ${DEN.kind === 'ed' ? `<div class="card"><h2 style="font-size:15px">L'exception à connaître</h2>
      <div class="sub">Ces ADJECTIFS en -ed gardent le /ɪd/ alors que la règle ne le prévoit pas : ${adj}. Comparer « he learned fast » /d/ et « a learned professor » /ˈlɜːnɪd/.</div></div>` : ''}`,
    `dEndStart('${DEN.kind}')`);
}

/* ============================================================
   ATELIER 4 — MOTS-PIÈGES (production, SM-2)
   ============================================================ */
let DTR = null;
function dTrapCats() { const s = []; DIA.traps.forEach(t => { if (s.indexOf(t.cat) < 0) s.push(t.cat); }); return s; }
function dTrapStart(cat, lim) {
  let idx = dQueue('trap').all;
  if (cat && cat !== 'all') idx = idx.filter(i => DIA.traps[i].cat === cat);
  if (!idx.length) { toast('Rien à travailler ici 🎉'); return; }
  if (lim) idx = idx.slice(0, lim);
  DTR = { cat: cat || 'all', queue: idx, pos: 0, done: 0, shown: false };
  dTrapRender();
}
function dTrapRender() {
  dResetReg();
  if (DTR.pos >= DTR.queue.length) return dTrapFinish();
  const t = DIA.traps[DTR.queue[DTR.pos]];
  const key = 't:' + dKey(t.w);
  const c = dia().srs[key];
  DTR.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>🪤 ${dEsc(t.cat)}${c && c.introduced ? ' · 🔁' : ' · 🆕'}</span><span>${DTR.pos + 1} / ${DTR.queue.length}</span></div>
    <div class="flash" onclick="dTrapReveal()">
      <div class="theme">dis-le à voix haute, puis vérifie</div>
      <div class="front" style="font-size:${t.w.length > 14 ? '26px' : '34px'}">${dEsc(t.w)}</div>
      <div id="dtrback" class="hidden">
        <div class="back" style="font-size:19px">${dEsc(t.ipa)}</div>
        <div class="ex" style="font-style:normal">« ${dEsc(t.like)} »</div>
      </div>
      <div id="dtrhint" class="tap">touche pour révéler ▽</div>
    </div>
    <div id="dtrafter"></div>`;
  window.scrollTo(0, 0);
}
function dTrapReveal() {
  if (DTR.shown) return;
  DTR.shown = true;
  const t = DIA.traps[DTR.queue[DTR.pos]], key = 't:' + dKey(t.w);
  document.getElementById('dtrback').classList.remove('hidden');
  document.getElementById('dtrhint').classList.add('hidden');
  dSay(t.w, null, 0.75);
  document.getElementById('dtrafter').innerHTML = `
    <div class="expl mt">${t.note}
      <div class="mt">${dSayBtn(t.w, '🔊 US', 'us', 0.8)} ${dSayBtn(t.w, '🔊 UK', 'gb', 0.8)} ${dSayBtn(t.w, '🐢 lent', null, 0.5)}</div>
    </div>
    ${dRecWidget({ text: t.w }, 'Redis-le maintenant que tu sais, et compare-toi au modèle.')}
    <div class="sub center mt mb">Sans regarder, tu l'avais dit…</div>
    <div class="srsrow">
      <button class="again" onclick="dTrapRate(0)">Raté<small>${dNextLabel(key, 0)}</small></button>
      <button class="hard" onclick="dTrapRate(1)">Dur<small>${dNextLabel(key, 1)}</small></button>
      <button class="good" onclick="dTrapRate(2)">Bien<small>${dNextLabel(key, 2)}</small></button>
      <button class="easy" onclick="dTrapRate(3)">Facile<small>${dNextLabel(key, 3)}</small></button>
    </div>`;
}
function dTrapRate(r) {
  const t = DIA.traps[DTR.queue[DTR.pos]];
  dRateKey('t:' + dKey(t.w), r);
  DTR.done++;
  if (typeof bumpDaily === 'function') bumpDaily('speak');
  if (r === 0) DTR.queue.splice(Math.min(DTR.pos + 4, DTR.queue.length), 0, DTR.queue[DTR.pos]);
  DTR.pos++; touchDay();
  dTrapRender();
}
function dTrapFinish() {
  dEndScreen(`<div class="card big"><div class="em">🪤</div>
      <div class="score" style="color:var(--good)">+${DTR.done}</div>
      <div class="lab">mot(s) travaillé(s)</div>
      <div class="mt sub">Ces mots-là ne se rattrapent pas au contexte : ils s'entendent tout de suite. Un par jour bien ancré vaut mieux que vingt survolés.</div></div>`,
    `dTrapStart('${DTR.cat}')`);
}

/* ============================================================
   ATELIER 5 — PHRASES BILINGUES (shadowing / production, SM-2)
   ============================================================ */
let DLN = null;
function dStMark(st) { return dEsc(st).replace(/\[([^\]]+)\]/g, '<b style="color:var(--accent)">$1</b>'); }
function dLineStart(lim) {
  let idx = dQueue('line').all;
  if (!idx.length) { toast('Rien à travailler ici 🎉'); return; }
  if (lim) idx = idx.slice(0, lim);
  DLN = { queue: idx, pos: 0, done: 0, shown: false };
  dLineRender();
}
function dSetLineDir(d) { dia().lineDir = d; save(); if (DLN) dLineRender(); else renderDiapasonHome(); }
function dLineRender() {
  dResetReg();
  if (DLN.pos >= DLN.queue.length) return dLineFinish();
  const l = DIA.lines[DLN.queue[DLN.pos]];
  const key = 'l:' + dKey(l.en), c = dia().srs[key];
  const prod = dia().lineDir === 'produce';
  DLN.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>🗣️ ${l.lv}${c && c.introduced ? ' · 🔁' : ' · 🆕'}</span><span>${DLN.pos + 1} / ${DLN.queue.length}</span></div>
    <div class="seg">
      <button class="${!prod ? 'on' : ''}" onclick="dSetLineDir('shadow')">🦜 Shadowing<small>répéter</small></button>
      <button class="${prod ? 'on' : ''}" onclick="dSetLineDir('produce')">🇫🇷→🇬🇧 Produire<small>plus dur</small></button>
    </div>
    <div class="flash" onclick="dLineReveal()">
      <div class="theme">${prod ? 'dis-la en anglais, à voix haute' : 'écoute, puis répète PAR-DESSUS la voix'}</div>
      <div class="front" style="font-size:${prod ? '20px' : '19px'};line-height:1.5">${prod ? dEsc(l.fr) : dStMark(l.st)}</div>
      <div id="dlnback" class="hidden">
        ${prod ? `<div class="back" style="font-size:18px;line-height:1.5">${dStMark(l.st)}</div>` : `<div class="back" style="font-size:17px">${dEsc(l.fr)}</div>`}
      </div>
      <div id="dlnhint" class="tap">touche pour révéler ▽</div>
    </div>
    ${!prod ? `<div class="row2">
      <button class="btn sec" onclick="dLinePlay(0)">🔊 Écouter</button>
      <button class="btn sec" onclick="dLinePlay(1)">🐢 Lentement</button>
    </div>` : ''}
    <div id="dlnafter"></div>`;
  window.scrollTo(0, 0);
  if (!prod) setTimeout(() => dLinePlay(0), 350);
}
function dLinePlay(slow) { const l = DIA.lines[DLN.queue[DLN.pos]]; dSay(l.en, null, slow ? 0.55 : 0.95); }
function dLineReveal() {
  if (DLN.shown) return;
  DLN.shown = true;
  const l = DIA.lines[DLN.queue[DLN.pos]], key = 'l:' + dKey(l.en);
  document.getElementById('dlnback').classList.remove('hidden');
  document.getElementById('dlnhint').classList.add('hidden');
  if (dia().lineDir === 'produce') dSay(l.en, null, 0.95);
  document.getElementById('dlnafter').innerHTML = `
    <div class="expl mt" style="border-color:var(--purple)"><b>Ce que fait la bouche</b><br>${l.tip}</div>
    <div class="expl mt"><b>Ce que dit vraiment la phrase</b><br>${l.note}</div>
    <div class="mt">${dSayBtn(l.en, '🔊 US', 'us', 0.95)} ${dSayBtn(l.en, '🔊 UK', 'gb', 0.95)} ${dSayBtn(l.en, '🐢 lent', null, 0.55)}</div>
    ${dRecWidget({ text: l.en }, 'Dis-la en entier. Vise le CONTRASTE : des sommets nets sur les mots en gras, tout le reste écrasé.')}
    <div class="sub center mt mb">Ta version était…</div>
    <div class="srsrow">
      <button class="again" onclick="dLineRate(0)">Ratée<small>${dNextLabel(key, 0)}</small></button>
      <button class="hard" onclick="dLineRate(1)">Laborieuse<small>${dNextLabel(key, 1)}</small></button>
      <button class="good" onclick="dLineRate(2)">Fluide<small>${dNextLabel(key, 2)}</small></button>
      <button class="easy" onclick="dLineRate(3)">Native<small>${dNextLabel(key, 3)}</small></button>
    </div>`;
}
function dLineRate(r) {
  const l = DIA.lines[DLN.queue[DLN.pos]];
  dRateKey('l:' + dKey(l.en), r);
  DLN.done++;
  if (typeof bumpDaily === 'function') bumpDaily('speak');
  if (r === 0) DLN.queue.splice(Math.min(DLN.pos + 4, DLN.queue.length), 0, DLN.queue[DLN.pos]);
  DLN.pos++; touchDay();
  dLineRender();
}
function dLineFinish() {
  dEndScreen(`<div class="card big"><div class="em">🗣️</div>
      <div class="score" style="color:var(--good)">+${DLN.done}</div>
      <div class="lab">phrase(s) travaillée(s)</div>
      <div class="mt sub">Le shadowing ne sert que si tu parles EN MÊME TEMPS que la voix, pas après. Le but n'est pas de comprendre : c'est de copier une musique.</div></div>`,
    `dLineStart()`);
}

/* ============================================================
   ATELIER 6 — LE RYTHME DE LA PHRASE (marquer les temps forts)
   ============================================================ */
let DRH = null;
function dRhyStart(lim) {
  const order = shuffle([...Array(DIA.rhythm.length).keys()]);
  DRH = { order, pos: 0, lim: lim || 0, sel: {}, checked: false, ok: 0, n: 0 };
  dRhyRender();
}
function dRhyParse(t) {
  /* « I should have *told* you » → [{w:'I',s:false},…] */
  return t.split(/\s+/).map(tok => {
    const s = /^\*/.test(tok) && /\*[.,!?;:]*$/.test(tok);
    return { w: tok.replace(/\*/g, ''), s };
  });
}
function dRhyRender() {
  dResetReg();
  if (DRH.lim && DRH.pos >= DRH.lim) return dRhyFinish();
  if (DRH.pos >= DRH.order.length) return dRhyFinish();
  const it = DRH.cur = DIA.rhythm[DRH.order[DRH.pos]];
  DRH.words = dRhyParse(it.t);
  DRH.sel = {}; DRH.checked = false;
  app.innerHTML = `
    <div class="qmeta"><span>🥁 Rythme de la phrase</span><span>${DRH.pos + 1} / ${DRH.lim || DRH.order.length}</span></div>
    <div class="card"><div class="sub">Touche les mots qui portent un <b style="color:var(--txt)">temps fort</b>. Tout le reste sera écrasé — c'est ça, parler anglais.</div></div>
    <div id="drhwords" style="display:flex;flex-wrap:wrap;gap:8px;margin:14px 0">${dRhyWordsHtml()}</div>
    <div id="drhafter"></div>
    <button class="btn" id="drhcheck" onclick="dRhyCheck()">Vérifier</button>
    ${DRH.lim ? '' : `<button class="btn ghost mt" onclick="dRhyFinish()">■ Bilan</button>`}`;
  window.scrollTo(0, 0);
}
function dRhyWordsHtml() {
  return DRH.words.map((w, i) => {
    let cls = 'segchip', style = 'font-size:16px;padding:10px 13px';
    if (DRH.checked) {
      if (w.s && DRH.sel[i]) cls += ' on';
      else if (w.s && !DRH.sel[i]) style += ';border-color:var(--bad);color:var(--bad)';
      else if (!w.s && DRH.sel[i]) style += ';border-color:var(--bad);opacity:.6;text-decoration:line-through';
    } else if (DRH.sel[i]) cls += ' on';
    const weak = DRH.checked && !w.s ? DIA.weak[w.w.toLowerCase().replace(/[^a-z']/g, '')] : null;
    return `<button class="${cls}" style="${style}" onclick="dRhyToggle(${i})">${dEsc(w.w)}${weak ? `<br><span class="cnt" style="font-size:10px">${dEsc(weak)}</span>` : ''}</button>`;
  }).join('');
}
function dRhyToggle(i) {
  if (DRH.checked) return;
  DRH.sel[i] = !DRH.sel[i];
  document.getElementById('drhwords').innerHTML = dRhyWordsHtml();
}
function dRhyCheck() {
  if (DRH.checked) return;
  DRH.checked = true;
  const it = DRH.cur;
  let hit = 0, miss = 0, extra = 0;
  DRH.words.forEach((w, i) => {
    if (w.s && DRH.sel[i]) hit++;
    else if (w.s && !DRH.sel[i]) miss++;
    else if (!w.s && DRH.sel[i]) extra++;
  });
  const total = DRH.words.filter(w => w.s).length;
  const perfect = miss === 0 && extra === 0;
  DRH.n++; if (perfect) DRH.ok++;
  const plain = DRH.words.map(w => w.w).join(' ');
  document.getElementById('drhwords').innerHTML = dRhyWordsHtml();
  document.getElementById('drhcheck').style.display = 'none';
  const last = DRH.pos + 1 >= (DRH.lim || DRH.order.length);
  document.getElementById('drhafter').innerHTML = `
    <div class="expl ${perfect ? 'ok' : 'no'}">${perfect ? '✅ Exactement le bon squelette rythmique.' : `${hit}/${total} temps forts trouvés${extra ? ` · ${extra} de trop` : ''}.`}
      <div class="mt">${it.note}</div>
      <div class="sub mt">Sous chaque mot-outil : sa forme faible réelle. C'est ce que tu dois produire, pas la forme du dictionnaire.</div>
      <div class="mt">${dSayBtn(plain, '🔊 écouter', null, 0.95)} ${dSayBtn(plain, '🐢 lent', null, 0.55)}</div>
      <div class="sub mt">🇫🇷 ${dEsc(it.fr)}</div>
    </div>
    ${dRecWidget({ text: plain }, 'Dis-la en tapant les temps forts comme un métronome, et en avalant le reste.')}
    <button class="btn mt" onclick="dRhyNext()">${last ? 'Bilan' : 'Suivante →'}</button>`;
  document.getElementById('drhafter').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function dRhyNext() { DRH.pos++; dRhyRender(); }
function dRhyFinish() {
  dEndScreen(`<div class="card big"><div class="em">🥁</div>
      <div class="score" style="color:var(--good)">${DRH.ok}/${DRH.n}</div>
      <div class="lab">phrases au bon rythme</div>
      <div class="mt sub">${DIA.rhythmRule}</div></div>`, `dRhyStart()`);
}

/* ============================================================
   ATELIER 7 — ACCENT CONTRASTIF
   ============================================================ */
let DCO = null;
function dConStart() {
  const items = [];
  DIA.contrast.forEach((c, ci) => c.qs.forEach((q, qi) => items.push({ ci, qi })));
  DCO = { items: shuffle(items), pos: 0, ok: 0, n: 0, answered: false };
  dConRender();
}
function dConRender() {
  dResetReg();
  if (DCO.pos >= DCO.items.length) return dConFinish();
  const { ci, qi } = DCO.items[DCO.pos];
  const c = DIA.contrast[ci], q = c.qs[qi];
  DCO.cur = { c, q };
  DCO.answered = false;
  const btns = c.s.map((w, i) =>
    `<button class="segchip" id="dco${i}" style="font-size:17px;padding:11px 14px" onclick="dConAnswer(${i})">${dEsc(w)}</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>🎯 Accent contrastif</span><span>${DCO.pos + 1} / ${DCO.items.length}</span></div>
    <div class="pbar mb"><i style="width:${DCO.pos / DCO.items.length * 100}%"></i></div>
    <div class="card">
      <div class="sub">La phrase :</div>
      <div class="stem" style="font-size:19px;margin:8px 0 0">${dEsc(c.s.join(' '))}.</div>
    </div>
    <div class="card" style="border-color:var(--accent)">
      <div class="sub">Tu veux dire :</div>
      <div style="font-size:17px;font-weight:700;margin-top:6px">« ${dEsc(q[0])} »</div>
      <div class="sub mt">Quel mot dois-tu accentuer ?</div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0">${btns}</div>
    <div id="dcoafter"></div>`;
  window.scrollTo(0, 0);
}
function dConAnswer(i) {
  if (!DCO || DCO.answered) return;
  DCO.answered = true;
  const { c, q } = DCO.cur, ok = i === q[1];
  c.s.forEach((w, k) => {
    const b = document.getElementById('dco' + k);
    if (!b) return;
    if (k === q[1]) { b.classList.add('on'); b.style.borderColor = 'var(--good)'; b.style.color = 'var(--good)'; }
    else if (k === i) { b.style.borderColor = 'var(--bad)'; b.style.color = 'var(--bad)'; }
  });
  DCO.n++; if (ok) { DCO.ok++; addXp(3); }
  const marked = c.s.map((w, k) => k === q[1] ? '<b style="color:var(--accent)">' + dEsc(w.toUpperCase()) + '</b>' : dEsc(w)).join(' ');
  const last = DCO.pos === DCO.items.length - 1;
  document.getElementById('dcoafter').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'}">${ok ? '✅ ' : '❌ '}${marked}.
      <div class="sub mt">🇫🇷 ${dEsc(c.fr)} → ${dEsc(q[0])}</div>
      <div class="mt">${DIA.contrastRule}</div>
    </div>
    ${dRecWidget({ text: c.s.join(' ') }, 'Dis-la en frappant fort sur <b style="color:var(--accent)">' + dEsc(c.s[q[1]]) + '</b> — et en gardant tout le reste plat. La synthèse vocale, elle, en est incapable : c\'est un exercice de bouche.')}
    <button class="btn mt" onclick="dConNext()">${last ? 'Bilan' : 'Suivant →'}</button>`;
  document.getElementById('dcoafter').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function dConNext() { DCO.pos++; dConRender(); }
function dConFinish() {
  dEndScreen(`<div class="card big"><div class="em">🎯</div>
      <div class="score" style="color:var(--good)">${DCO.ok}/${DCO.n}</div>
      <div class="lab">accents bien placés</div>
      <div class="mt sub">En anglais, l'insistance ne s'ajoute pas avec des mots : elle se déplace. C'est plus économique que le français — et beaucoup plus facile à rater.</div></div>`,
    `dConStart()`);
}

/* ============================================================
   ATELIER 8 — INTONATION (QCM)
   ============================================================ */
let DTU = null;
function dTuneStart() { DTU = { order: shuffle([...Array(DIA.tunes.length).keys()]), pos: 0, ok: 0, answered: false }; dTuneRender(); }
function dTuneRender() {
  dResetReg();
  if (DTU.pos >= DTU.order.length) return dTuneFinish();
  const t = DTU.cur = DIA.tunes[DTU.order[DTU.pos]];
  DTU.answered = false;
  const order = shuffle(t[1].map((o, i) => i));
  DTU.disp = order;
  const opts = order.map((oi, k) => `<button class="opt" id="dtu${k}" onclick="dTuneAnswer(${k})"><span class="lab">${'ABCD'[k]}</span>${dEsc(t[1][oi])}</button>`).join('');
  app.innerHTML = `
    <div class="qmeta"><span>📈 Intonation</span><span>${DTU.pos + 1} / ${DTU.order.length}</span></div>
    <div class="pbar mb"><i style="width:${DTU.pos / DTU.order.length * 100}%"></i></div>
    <div class="stem" style="font-size:17px">${dEsc(t[0])}</div>
    <div id="dtuopts">${opts}</div>
    <div id="dtuafter"></div>`;
  window.scrollTo(0, 0);
}
function dTuneAnswer(k) {
  if (!DTU || DTU.answered) return;
  DTU.answered = true;
  const t = DTU.cur, correctDisp = DTU.disp.indexOf(t[2]), ok = k === correctDisp;
  DTU.disp.forEach((oi, i) => {
    const b = document.getElementById('dtu' + i);
    if (!b) return;
    b.setAttribute('disabled', '');
    if (i === correctDisp) b.classList.add('good'); else if (i === k) b.classList.add('bad'); else b.classList.add('dim');
  });
  if (ok) { DTU.ok++; addXp(3); }
  else recordMistake({ kind: 'gram', q: t[0], opts: t[1], correct: t[2], expl: t[3], cat: 'Diapason · intonation' });
  const last = DTU.pos === DTU.order.length - 1;
  document.getElementById('dtuafter').innerHTML = `
    <div class="expl ${ok ? 'ok' : 'no'}">${ok ? '✅ ' : '❌ ' + dEsc(t[1][t[2]]) + '. '}${t[3]}</div>
    <button class="btn mt" onclick="dTuneNext()">${last ? 'Bilan' : 'Suivant →'}</button>`;
  document.getElementById('dtuafter').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function dTuneNext() { DTU.pos++; dTuneRender(); }
function dTuneFinish() {
  dEndScreen(`<div class="card big"><div class="em">📈</div>
      <div class="score" style="color:var(--good)">${DTU.ok}/${DTU.order.length}</div>
      <div class="lab">courbes maîtrisées</div>
      <div class="mt sub">L'intonation n'est pas de la décoration : elle porte l'acte de langage. Un « Sorry? » qui descend s'excuse, un « Sorry?↗ » demande de répéter.</div></div>`,
    `dTuneStart()`);
}

/* ============================================================
   ATELIER 9 — PAROLE ENCHAÎNÉE (cartes à révéler)
   ============================================================ */
let DCS = null;
function dCsStart() { DCS = { order: shuffle([...Array(DIA.cs.length).keys()]), pos: 0, shown: false }; dCsRender(); }
function dCsRender() {
  dResetReg();
  if (DCS.pos >= DCS.order.length) return dCsFinish();
  const c = DCS.cur = DIA.cs[DCS.order[DCS.pos]];
  DCS.shown = false;
  app.innerHTML = `
    <div class="qmeta"><span>🔗 Parole enchaînée</span><span>${DCS.pos + 1} / ${DCS.order.length}</span></div>
    <div class="flash" onclick="dCsReveal()">
      <div class="theme">ce qui est écrit</div>
      <div class="front" style="font-size:22px">${dEsc(c.w)}</div>
      <div id="dcsback" class="hidden">
        <div class="back" style="font-size:22px">« ${dEsc(c.said)} »</div>
        <div class="ex" style="font-style:normal">${dEsc(c.ipa)}</div>
      </div>
      <div id="dcshint" class="tap">comment ça se dit vraiment ? ▽</div>
    </div>
    <div class="row2">
      <button class="btn sec" onclick="dCsPlay(0)">🔊 Vitesse réelle</button>
      <button class="btn sec" onclick="dCsPlay(1)">🐢 Décomposé</button>
    </div>
    <div id="dcsafter"></div>`;
  window.scrollTo(0, 0);
  setTimeout(() => dCsPlay(0), 320);
}
function dCsPlay(slow) { dSay(DCS.cur.w, null, slow ? 0.5 : 1.0); }
function dCsReveal() {
  if (DCS.shown) return;
  DCS.shown = true;
  const c = DCS.cur;
  document.getElementById('dcsback').classList.remove('hidden');
  document.getElementById('dcshint').classList.add('hidden');
  const last = DCS.pos === DCS.order.length - 1;
  document.getElementById('dcsafter').innerHTML = `
    <div class="expl mt"><span class="pill warn">${dEsc(c.ph)}</span><div class="mt">${c.note}</div></div>
    ${dRecWidget({ text: c.w }, 'Dis le groupe d\'un seul souffle, sans frontière entre les mots.')}
    <button class="btn mt" onclick="dCsNext()">${last ? 'Bilan' : 'Suivant →'}</button>`;
}
function dCsNext() { DCS.pos++; dCsRender(); }
function dCsFinish() {
  dEndScreen(`<div class="card big"><div class="em">🔗</div>
      <div class="score" style="color:var(--good)">${DCS.order.length}</div>
      <div class="lab">groupes vus</div>
      <div class="mt sub">${DIA.csRule}</div></div>`, `dCsStart()`);
}

/* ============================================================
   ATELIER 10 — DICTÉE MULTI-ACCENTS (compréhension à vitesse réelle)
   ============================================================ */
let DDI = null;
function dDictStart() {
  DDI = { order: shuffle([...Array(DIA.lines.length).keys()]), pos: 0, ok: 0, n: 0, score: 0, checked: false };
  dDictRender();
}
function dDictRender() {
  dResetReg();
  if (DDI.pos >= DDI.order.length || DDI.pos >= 10) return dDictFinish();
  const l = DDI.cur = DIA.lines[DDI.order[DDI.pos]];
  DDI.checked = false;
  DDI.voiceMode = dia().voice === 'rand' ? 'rand' : dia().voice;
  app.innerHTML = `
    <div class="qmeta"><span>✍️ Dictée${dia().voice === 'rand' ? ' · voix surprise' : ''}</span><span>${DDI.pos + 1} / 10</span></div>
    <div class="pbar mb"><i style="width:${DDI.pos / 10 * 100}%"></i></div>
    <button class="spk" onclick="dDictPlay(0)" style="width:84px;height:84px;font-size:32px">🔊</button>
    <div class="center sub mb">Vitesse réelle · touche pour réécouter</div>
    <div class="row2 mb">
      <button class="btn ghost" onclick="dDictPlay(1)">🐢 Plus lentement</button>
      <button class="btn ghost" onclick="dDictGiveUp()">Je donne ma langue au chat</button>
    </div>
    <textarea id="ddin" class="transinput" rows="3" placeholder="Écris ce que tu entends, mot à mot…"></textarea>
    <button class="btn" onclick="dDictCheck()">Vérifier</button>
    <div id="ddiafter"></div>`;
  window.scrollTo(0, 0);
  setTimeout(() => dDictPlay(0), 350);
}
function dDictPlay(slow) { dSay(DDI.cur.en, DDI.voiceMode, slow ? 0.6 : 1.0); }
function dDictGiveUp() { const el = document.getElementById('ddin'); if (el) el.value = ''; dDictCheck(); }
/* alignement mot à mot par plus longue sous-séquence commune */
function dDiff(a, b) {
  const n = a.length, m = b.length;
  const T = [];
  for (let i = 0; i <= n; i++) { T.push(new Array(m + 1).fill(0)); }
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      T[i][j] = a[i] === b[j] ? T[i + 1][j + 1] + 1 : Math.max(T[i + 1][j], T[i][j + 1]);
  const keep = new Array(n).fill(false);
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { keep[i] = true; i++; j++; }
    else if (T[i + 1][j] >= T[i][j + 1]) i++; else j++;
  }
  return keep;
}
function dDictCheck() {
  if (DDI.checked) return;
  DDI.checked = true;
  const l = DDI.cur;
  const mine = ((document.getElementById('ddin') || {}).value || '');
  const target = dNorm(l.en).split(' ').filter(Boolean);
  const said = dNorm(mine).split(' ').filter(Boolean);
  const keep = dDiff(target, said);
  const good = keep.filter(Boolean).length;
  const pct = target.length ? Math.round(100 * good / target.length) : 0;
  DDI.n++; DDI.score += pct; if (pct === 100) DDI.ok++;
  const words = l.en.split(/\s+/);
  let ti = 0;
  const marked = words.map(w => {
    const norm = dNorm(w);
    if (!norm) return dEsc(w);
    const parts = norm.split(' ').filter(Boolean);
    let allOk = true;
    parts.forEach(() => { if (!keep[ti]) allOk = false; ti++; });
    return allOk ? dEsc(w) : `<b style="color:var(--bad)">${dEsc(w)}</b>`;
  }).join(' ');
  const last = DDI.pos >= 9;
  document.getElementById('ddiafter').innerHTML = `
    <div class="expl ${pct === 100 ? 'ok' : pct >= 70 ? '' : 'no'} mt">
      <div style="font-size:17px;line-height:1.5">${marked}</div>
      <div class="sub mt">${pct}% des mots retrouvés${DLAST ? ` · voix : ${dEsc(dLastAcc())}` : ''}. En rouge, ce que tu n'as pas entendu — regarde s'ils sont enchaînés ou réduits, c'est presque toujours ça.</div>
      <div class="sub mt">🇫🇷 ${dEsc(l.fr)}</div>
      <div class="mt"><b>La bouche :</b> ${l.tip}</div>
      <div class="mt">${dSayBtn(l.en, '🔊 réécouter', DDI.voiceMode, 1.0)} ${dSayBtn(l.en, '🐢 lent', DDI.voiceMode, 0.55)}</div>
    </div>
    <button class="btn mt" onclick="dDictNext()">${last ? 'Bilan' : 'Suivante →'}</button>`;
  document.getElementById('ddiafter').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function dDictNext() { DDI.pos++; dDictRender(); }
function dDictFinish() {
  const avg = DDI.n ? Math.round(DDI.score / DDI.n) : 0;
  if (avg) addXp(Math.round(avg / 5));
  dEndScreen(`<div class="card big"><div class="em">${avg >= 90 ? '🎉' : avg >= 70 ? '💪' : '✍️'}</div>
      <div class="score" style="color:${avg >= 80 ? 'var(--good)' : 'var(--accent)'}">${avg}%</div>
      <div class="lab">${DDI.ok} phrase(s) sans faute sur ${DDI.n}</div>
      <div class="mt sub">La dictée mesure ce que ton oreille segmente vraiment, sans le secours du contexte. Les mots ratés sont presque toujours des mots-outils réduits : c'est l'atelier « parole enchaînée » qui les débloque.</div></div>`,
    `dDictStart()`);
}
