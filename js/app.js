/* Darija — moteur de l'application (SPA, hash router) */
(() => {
const $ = sel => document.querySelector(sel);
const app = $('#app');
const D = window.DATA;

/* ================= Utilitaires ================= */
function esc(s) { return String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function shuffle(a) { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function pick(a, n) { return shuffle(a).slice(0, n); }
function toast(msg) {
  let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.innerHTML = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1800);
}
function allItems() { return D.vocab.flatMap(ch => ch.items.map(it => ({...it, chap: ch.id, chTitle: ch.title}))); }
function wordKey(it) { return it.chap + '|' + it.da; }
function chapById(id) { return D.vocab.find(c => c.id === id); }
function norm(s) {
  return String(s||'').toLowerCase()
    .replace(/[àâä]/g,'a').replace(/[éèêë]/g,'e').replace(/[îï]/g,'i').replace(/[ôö]/g,'o').replace(/[ùûü]/g,'u')
    .replace(/[-'’.,!?()\s]/g,'').replace(/8/g,'h').replace(/ou/g,'u');
}
function answersOf(da) { return da.split('/').map(x => norm(x)); }

function speakBtnHandler(e) {
  const b = e.currentTarget;
  const ar = b.dataset.ar;
  if (!ar) { toast('Pas d’écriture arabe pour ce mot'); return; }
  if (!TTS.hasArabic()) { toast('🔇 Voix arabe non installée — voir Réglages'); return; }
  document.querySelectorAll('.speak.playing').forEach(x => x.classList.remove('playing'));
  b.classList.add('playing');
  TTS.speak({ar}, { onend: () => b.classList.remove('playing') });
}
function bindSpeaks(root) {
  (root || document).querySelectorAll('.speak[data-ar]').forEach(b => {
    b.removeEventListener('click', speakBtnHandler);
    b.addEventListener('click', speakBtnHandler);
  });
}

function pagehead(title, back) {
  return `<div class="pagehead">
    <a class="backbtn" href="#${back||'home'}">‹</a>
    <h2>${esc(title)}</h2>
  </div>`;
}

/* ================= Accueil ================= */
function viewHome() {
  const due = Store.srsDueCount(allItems().map(wordKey));
  const total = allItems().length;
  const known = Store.srsKnownCount(allItems().map(wordKey));
  const wod = allItems()[Math.floor((Date.now()/86400000)) % total];
  app.innerHTML = `
  <div class="hero">
    <h1>Salam ! 🇲🇦</h1>
    <div class="sub">Apprends le darija marocain — parle comme un local</div>
    <div class="stats">
      <div class="stat-chip">🔥 ${Store.streak()} j</div>
      <div class="stat-chip">⚡ ${Store.xp} XP</div>
      <div class="stat-chip">🏅 Niv. ${Store.level()}</div>
    </div>
  </div>
  <div class="wrap">
    <div class="card" style="display:flex;align-items:center;gap:12px;">
      <div style="font-size:34px;">🗓️</div>
      <div style="flex:1;">
        <div style="font-size:12px;color:var(--ink-soft);font-weight:800;">MOT DU JOUR — ${esc(wod.chTitle)}</div>
        <div style="font-weight:900;font-size:18px;color:var(--red);">${esc(wod.da)}</div>
        <div style="font-weight:700;font-size:14px;">${esc(wod.fr)} <span style="color:var(--green);direction:rtl;">${esc(wod.ar||'')}</span></div>
      </div>
      <button class="speak" data-ar="${esc(wod.ar||'')}">🔊</button>
    </div>

    ${due > 0 ? `<a class="bigbtn gold" href="#flash/due">🧠 Révision du jour — ${due} carte${due>1?'s':''}</a>` : ''}
    <a class="bigbtn" href="#quiz/random">🎯 Quiz éclair (tout le vocabulaire)</a>
    <a class="bigbtn green" href="#vocab">📚 Apprendre du vocabulaire</a>

    <div class="section-title">Progression</div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;margin-bottom:6px;">
        <span>Mots maîtrisés</span><span style="color:var(--green);">${known} / ${total}</span>
      </div>
      <div class="qbar"><div style="width:${total?Math.round(100*known/total):0}%"></div></div>
      <div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;margin:10px 0 6px;">
        <span>Niveau ${Store.level()}</span><span style="color:var(--ink-soft);">${Store.levelProgress()}%</span>
      </div>
      <div class="qbar"><div style="width:${Store.levelProgress()}%;background:var(--gold);"></div></div>
    </div>

    <div class="section-title">Explorer</div>
    <div class="tile-grid">
      <a class="tile" href="#grammar"><span class="icon">🎓</span><span class="name">Leçons & grammaire</span><span class="count">${D.grammar.length} leçons</span></a>
      <a class="tile" href="#conj"><span class="icon">⚙️</span><span class="name">Conjugaison</span><span class="count">${D.verbs.length} verbes</span></a>
      <a class="tile" href="#practice"><span class="icon">🎮</span><span class="name">Jeux & exercices</span><span class="count">Quiz, memory…</span></a>
      <a class="tile" href="#settings"><span class="icon">🔧</span><span class="name">Réglages</span><span class="count">Voix & audio</span></a>
    </div>
  </div>`;
  bindSpeaks();
}

/* ================= Vocabulaire ================= */
function viewVocab() {
  const groups = [...new Set(D.vocab.map(c => c.group))];
  app.innerHTML = pagehead('Vocabulaire — ' + allItems().length + ' mots') + `
  <div class="wrap">
    <input class="searchbox" id="vsearch" placeholder="🔍 Chercher un mot (français ou darija)…">
    <div id="vres"></div>
    <div id="vgroups">
    ${groups.map(g => `
      <div class="section-title">${esc(g)}</div>
      <div class="tile-grid">
        ${D.vocab.filter(c => c.group === g).map(c => {
          const st = Store.chapter(c.id);
          const keys = c.items.map(it => wordKey({...it, chap:c.id}));
          const kn = Store.srsKnownCount(keys);
          const pct = Math.round(100 * kn / c.items.length);
          return `<a class="tile ${pct>=80?'done':''}" href="#ch/${c.id}">
            ${st.bestQuiz>=80?'<span class="medal">🏆</span>':''}
            <span class="icon">${c.icon}</span>
            <span class="name">${esc(c.title)}</span>
            <span class="count">${c.items.length} mots · ${kn} maîtrisés</span>
            <span class="prog"><div style="width:${pct}%"></div></span>
          </a>`;
        }).join('')}
      </div>`).join('')}
    </div>
  </div>`;
  $('#vsearch').addEventListener('input', e => {
    const q = norm(e.target.value);
    const res = $('#vres'), grp = $('#vgroups');
    if (!q || q.length < 2) { res.innerHTML=''; grp.style.display='block'; return; }
    grp.style.display = 'none';
    const found = allItems().filter(it => norm(it.fr).includes(q) || norm(it.da).includes(q)).slice(0, 30);
    res.innerHTML = found.length ? found.map(wordRow).join('') : '<div class="empty">Aucun résultat</div>';
    bindSpeaks(res);
  });
}

function wordRow(it) {
  return `<div class="word">
    <div class="txt">
      <div class="fr">${esc(it.fr)}</div>
      <div class="da">${esc(it.da)}</div>
      ${it.ar ? `<div class="ar">${esc(it.ar)}</div>` : ''}
      ${it.note ? `<div class="note">💡 ${esc(it.note)}</div>` : ''}
      ${it.reg ? `<div class="regnote">🗺️ ${esc(it.reg)}</div>` : ''}
    </div>
    <button class="speak" data-ar="${esc(it.ar||'')}">🔊</button>
  </div>`;
}

function viewChapter(id) {
  const c = chapById(id);
  if (!c) return viewVocab();
  Store.setChapterSeen(id, 100);
  app.innerHTML = pagehead(c.icon + ' ' + c.title, 'vocab') + `
  <div class="wrap">
    ${TTS.hasArabic() ? '' : `<div class="audio-warn">🔇 Aucune voix arabe détectée. Sur iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Arabe → télécharger une voix, pour activer la prononciation audio.</div>`}
    <div style="display:flex;gap:10px;">
      <a class="bigbtn green" style="flex:1;" href="#flash/${id}">🃏 Flashcards</a>
      <a class="bigbtn" style="flex:1;" href="#quiz/${id}">🎯 Quiz</a>
    </div>
    <a class="bigbtn ghost" href="#memory/${id}">🎴 Jeu de memory</a>
    ${c.items.map(it => wordRow({...it, chap:id})).join('')}
  </div>`;
  bindSpeaks();
}

/* ================= Flashcards ================= */
function viewFlash(id) {
  let items, title, backTo;
  if (id === 'due') {
    const due = allItems().filter(it => Store.srsSeen(wordKey(it)) && Store.srsGet(wordKey(it)).due <= Date.now());
    items = pick(due, 20);
    title = '🧠 Révision du jour'; backTo = 'home';
    if (!items.length) { app.innerHTML = pagehead(title) + `<div class="wrap"><div class="result-hero"><div class="big">🎉</div><h2>Tout est révisé !</h2><p>Étudie d'abord des chapitres en flashcards — les cartes vues reviendront ici pour la révision espacée.</p><a class="bigbtn" href="#vocab">Choisir un chapitre</a></div></div>`; return; }
  } else {
    const c = chapById(id); if (!c) return viewVocab();
    items = shuffle(c.items.map(it => ({...it, chap:id})));
    title = '🃏 ' + c.title; backTo = 'ch/' + id;
  }
  let i = 0, learned = 0;

  function render() {
    if (i >= items.length) {
      Store.addXP(5);
      app.innerHTML = pagehead(title, backTo) + `<div class="wrap"><div class="result-hero">
        <div class="big">${learned >= items.length*0.7 ? '🌟' : '💪'}</div>
        <h2>${learned} / ${items.length} connues</h2>
        <p>+5 XP · Les cartes ratées reviendront plus vite en révision.</p>
        <a class="bigbtn" href="#${backTo}">Continuer</a>
        <button class="bigbtn ghost" id="again">Recommencer</button>
      </div></div>`;
      $('#again').onclick = () => { i=0; learned=0; items = shuffle(items); render(); };
      return;
    }
    const it = items[i];
    app.innerHTML = pagehead(title, backTo) + `
    <div class="wrap">
      <div class="flash-counter">${i+1} / ${items.length}</div>
      <div class="qbar"><div style="width:${Math.round(100*i/items.length)}%"></div></div>
      <div class="flash-stage">
        <div class="flashcard" id="fc">
          <div class="flashface">
            <div class="fr-big">${esc(it.fr)}</div>
            <div class="hint">Touche la carte pour retourner</div>
          </div>
          <div class="flashface back">
            <div class="da-big">${esc(it.da)}</div>
            ${it.ar ? `<div class="ar-big">${esc(it.ar)}</div>` : ''}
            ${it.note ? `<div style="font-size:13px;color:var(--ink-soft);font-weight:700;">💡 ${esc(it.note)}</div>` : ''}
            ${it.reg ? `<div style="font-size:13px;color:#155e97;font-weight:700;">🗺️ ${esc(it.reg)}</div>` : ''}
            <button class="speak" data-ar="${esc(it.ar||'')}" style="margin-top:6px;">🔊</button>
            <div class="hint">Je la connaissais ?</div>
          </div>
        </div>
      </div>
      <div class="flash-actions">
        <button class="bigbtn ghost" id="no" style="flex:1;">❌ À revoir</button>
        <button class="bigbtn green" id="yes" style="flex:1;">✅ Je sais</button>
      </div>
    </div>`;
    const fc = $('#fc');
    fc.addEventListener('click', e => {
      if (e.target.closest('.speak')) return;
      fc.classList.toggle('flipped');
      if (fc.classList.contains('flipped') && it.ar && TTS.hasArabic()) TTS.speak(it);
    });
    $('#yes').onclick = () => { Store.srsAnswer(wordKey(it), true); Store.addXP(1); learned++; i++; render(); };
    $('#no').onclick = () => { Store.srsAnswer(wordKey(it), false); i++; render(); };
    bindSpeaks();
  }
  render();
}

/* ================= Quiz vocabulaire ================= */
function makeVocabQuestions(items, pool, n) {
  const qs = [];
  const src = pick(items, Math.min(n, items.length));
  for (const it of src) {
    const dir = Math.random();
    const distract = pick(pool.filter(x => x.da !== it.da), 3);
    if (dir < 0.4) {
      qs.push({ type:'mcq', q: `Comment dit-on « ${it.fr} » ?`, sub:'Choisis la bonne réponse',
        choices: shuffle([it, ...distract]).map(x => x.da), a: it.da, item: it });
    } else if (dir < 0.75) {
      qs.push({ type:'mcq', q: `Que veut dire « ${it.da} » ?`, sub: it.ar ? it.ar : 'Traduis en français',
        choices: shuffle([it, ...distract]).map(x => x.fr), a: it.fr, item: it });
    } else {
      qs.push({ type:'type', q: `Écris en darija : « ${it.fr} »`, sub:'Utilise la phonétique (3, 7, 8, 9…)', a: it.da, item: it });
    }
  }
  return qs;
}

function runQuiz(title, backTo, questions, onScore) {
  let i = 0, score = 0;
  function render() {
    if (i >= questions.length) {
      const pct = Math.round(100 * score / questions.length);
      const bonus = pct >= 80 ? 10 : 0;
      Store.addXP(bonus);
      if (onScore) onScore(pct);
      app.innerHTML = pagehead(title, backTo) + `<div class="wrap"><div class="result-hero">
        <div class="big">${pct>=80?'🏆':pct>=50?'👏':'📖'}</div>
        <h2>${score} / ${questions.length}</h2>
        <p>${pct>=80?'Excellent ! +10 XP bonus':'Continue, shwiya b shwiya !'}</p>
        <a class="bigbtn" href="#${backTo}">Continuer</a>
      </div></div>`;
      return;
    }
    const q = questions[i];
    app.innerHTML = pagehead(title, backTo) + `
    <div class="wrap">
      <div class="qbar"><div style="width:${Math.round(100*i/questions.length)}%"></div></div>
      <div class="question">${esc(q.q)}</div>
      <div class="qsub">${esc(q.sub||'')}</div>
      <div id="qbody"></div>
      <div id="qfoot"></div>
    </div>`;
    const body = $('#qbody'), foot = $('#qfoot');

    function feedback(ok, correct, exp) {
      if (ok) { score++; Store.addXP(2); }
      else if (q.item) Store.srsAnswer(wordKey(q.item), false);
      foot.innerHTML = `<div class="qfeedback ${ok?'good':'bad'}">
        ${ok ? '✅ Mzyan ! Bonne réponse' : '❌ Réponse : ' + esc(correct)}
        ${exp ? `<div class="exp">💡 ${esc(exp)}</div>` : ''}
      </div><button class="bigbtn" id="next">${i+1 >= questions.length ? 'Voir le résultat' : 'Suivant'}</button>`;
      if (q.item && q.item.ar && TTS.hasArabic()) TTS.speak(q.item);
      $('#next').onclick = () => { i++; render(); };
    }

    if (q.type === 'type') {
      body.innerHTML = `<input class="typing" id="tin" autocapitalize="off" autocomplete="off" placeholder="Ta réponse…">`;
      foot.innerHTML = `<button class="bigbtn green" id="chk">Vérifier</button>`;
      const inp = $('#tin'); inp.focus();
      const check = () => {
        const ok = answersOf(q.a).includes(norm(inp.value));
        inp.disabled = true;
        if (q.item) Store.srsAnswer(wordKey(q.item), ok);
        feedback(ok, q.a, q.exp);
      };
      $('#chk').onclick = check;
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
    } else {
      body.innerHTML = q.choices.map(c => `<button class="choice">${esc(c)}</button>`).join('');
      body.querySelectorAll('.choice').forEach(btn => btn.onclick = () => {
        const ok = btn.textContent === q.a;
        body.querySelectorAll('.choice').forEach(b => {
          if (b.textContent === q.a) b.classList.add('correct');
          else if (b === btn) b.classList.add('wrong');
          else b.classList.add('dim');
          b.disabled = true;
        });
        if (q.item) Store.srsAnswer(wordKey(q.item), ok);
        feedback(ok, q.a, q.exp);
      });
    }
  }
  render();
}

function viewQuiz(id) {
  if (id === 'random') {
    const pool = allItems();
    runQuiz('🎯 Quiz éclair', 'home', makeVocabQuestions(pool, pool, 10));
  } else {
    const c = chapById(id); if (!c) return viewVocab();
    const items = c.items.map(it => ({...it, chap:id}));
    runQuiz('🎯 ' + c.title, 'ch/' + id, makeVocabQuestions(items, allItems(), 10),
      pct => Store.setQuizScore(id, pct));
  }
}

/* ================= Conjugaison ================= */
const PRON = ['Ana', 'Nta', 'Nti', '8uwa', '8iya', '7na', 'Ntuma', '8uma'];
const PRON_FR = ['je', 'tu (m)', 'tu (f)', 'il', 'elle', 'nous', 'vous', 'ils/elles'];

function viewConj() {
  app.innerHTML = pagehead('⚙️ Conjugaison', 'home') + `
  <div class="wrap">
    <a class="bigbtn" href="#conjquiz">🎯 Quiz de conjugaison</a>
    <a class="bigbtn ghost" href="#lesson/verbes-accompli">🎓 Revoir les règles (leçons)</a>
    <div class="section-title">${D.verbs.length} verbes essentiels</div>
    <div class="tile-grid">
      ${D.verbs.map(v => `<a class="tile" href="#verb/${v.id}">
        <span class="icon">${v.icon || '🔤'}</span>
        <span class="name">${esc(v.da)}</span>
        <span class="count">${esc(v.fr)}</span>
      </a>`).join('')}
    </div>
  </div>`;
}

function conjTable(title, forms, prefix) {
  return `<div class="section-title">${title}</div>
  <table class="gtable"><tr><th>Pronom</th><th>Darija</th></tr>
  ${forms.map((f,ix) => `<tr><td>${PRON[ix]} <span style="color:var(--ink-soft);font-weight:600;">(${PRON_FR[ix]})</span></td><td><b>${esc(prefix ? prefix(f) : f)}</b></td></tr>`).join('')}
  </table>`;
}

function viewVerb(id) {
  const v = D.verbs.find(x => x.id === id);
  if (!v) return viewConj();
  app.innerHTML = pagehead((v.icon||'🔤') + ' ' + v.da + ' — ' + v.fr, 'conj') + `
  <div class="wrap">
    <div class="card" style="display:flex;align-items:center;gap:12px;">
      <div style="flex:1;">
        <div style="font-weight:900;font-size:22px;color:var(--red);">${esc(v.da)}</div>
        <div style="font-weight:700;">${esc(v.fr)} ${v.ar ? `· <span style="color:var(--green);">${esc(v.ar)}</span>` : ''}</div>
        <div style="font-size:13px;color:var(--ink-soft);font-weight:700;">Type : ${esc(v.type)}</div>
      </div>
      ${v.ar ? `<button class="speak" data-ar="${esc(v.ar)}">🔊</button>` : ''}
    </div>
    ${v.note ? `<div class="lesson"><div class="tip">💡 ${v.note}</div></div>` : ''}
    ${conjTable('Accompli (passé)', v.acc)}
    ${conjTable('Inaccompli (présent) — préfixe ka-', v.base, f => 'ka' + f)}
    <div class="lesson"><div class="reg">🗺️ À Marrakech et Fès on entend <b>ta-</b> au lieu de <b>ka-</b> : ta${esc(v.base[0])} = ka${esc(v.base[0])}.</div></div>
    ${conjTable('Futur — particule gha / ghadi', v.base, f => 'gha ' + f)}
    ${v.imp ? `<div class="section-title">Impératif</div>
    <table class="gtable"><tr><th></th><th>Darija</th></tr>
      <tr><td>À un homme</td><td><b>${esc(v.imp[0])}</b></td></tr>
      <tr><td>À une femme</td><td><b>${esc(v.imp[1])}</b></td></tr>
      <tr><td>À un groupe</td><td><b>${esc(v.imp[2])}</b></td></tr>
    </table>` : ''}
    ${v.pa ? `<div class="section-title">Participe actif (action en cours)</div>
    <table class="gtable"><tr><th></th><th>Darija</th></tr>
      <tr><td>Masculin</td><td><b>${esc(v.pa[0])}</b></td></tr>
      <tr><td>Féminin</td><td><b>${esc(v.pa[1])}</b></td></tr>
      <tr><td>Pluriel</td><td><b>${esc(v.pa[2])}</b></td></tr>
    </table>` : ''}
    <a class="bigbtn" href="#conjquiz">🎯 M'entraîner</a>
  </div>`;
  bindSpeaks();
}

function viewConjQuiz() {
  const qs = [];
  const verbs = pick(D.verbs, 10);
  for (const v of verbs) {
    const ix = Math.floor(Math.random() * 8);
    const tense = ['acc','pres','fut'][Math.floor(Math.random()*3)];
    let correct, tname;
    if (tense === 'acc') { correct = v.acc[ix]; tname = 'à l’accompli (passé)'; }
    else if (tense === 'pres') { correct = 'ka' + v.base[ix]; tname = 'au présent (ka-)'; }
    else { correct = 'gha ' + v.base[ix]; tname = 'au futur (gha)'; }
    // distracteurs : autres personnes du même temps
    const others = [...new Set([0,1,2,3,4,5,6,7].filter(j => {
      const f = tense==='acc' ? v.acc[j] : tense==='pres' ? 'ka'+v.base[j] : 'gha '+v.base[j];
      return f !== correct;
    }).map(j => tense==='acc' ? v.acc[j] : tense==='pres' ? 'ka'+v.base[j] : 'gha '+v.base[j]))];
    qs.push({ type:'mcq',
      q: `${v.da} (${v.fr}) — conjugue avec ${PRON[ix]} ${tname}`,
      sub: `${PRON[ix]} = ${PRON_FR[ix]}`,
      choices: shuffle([correct, ...pick(others, 3)]), a: correct,
      exp: `${PRON[ix]} ${correct}` });
  }
  runQuiz('⚙️ Quiz conjugaison', 'conj', qs);
}

/* ================= Leçons / Grammaire ================= */
function viewGrammar() {
  const cats = [...new Set(D.grammar.map(l => l.cat))];
  app.innerHTML = pagehead('🎓 Leçons & grammaire', 'home') + `
  <div class="wrap">
    ${cats.map(cat => `
      <div class="section-title">${esc(cat)}</div>
      ${D.grammar.filter(l => l.cat === cat).map(l => `
        <a class="word" style="text-decoration:none;color:inherit;" href="#lesson/${l.id}">
          <div style="font-size:26px;">${l.icon}</div>
          <div class="txt"><div class="da" style="font-size:15px;">${esc(l.title)}</div>
          <div class="fr">${esc(l.sub||'')}</div></div>
          <div style="font-size:20px;">${Store.lessonDone(l.id) ? '✅' : '›'}</div>
        </a>`).join('')}
    `).join('')}
  </div>`;
}

function viewLesson(id) {
  const l = D.grammar.find(x => x.id === id);
  if (!l) return viewGrammar();
  const ix = D.grammar.indexOf(l);
  const next = D.grammar[ix+1];
  app.innerHTML = pagehead(l.icon + ' ' + l.title, 'grammar') + `
  <div class="wrap"><div class="lesson">${l.body}</div>
  <button class="bigbtn green" id="doneBtn">${Store.lessonDone(id) ? '✅ Leçon relue' : '✅ J’ai compris ! (+5 XP)'}</button>
  ${next ? `<a class="bigbtn ghost" href="#lesson/${next.id}">Leçon suivante : ${esc(next.title)} ›</a>` : ''}
  </div>`;
  $('#doneBtn').onclick = () => {
    if (!Store.lessonDone(id)) { Store.addXP(5); toast('<span class="xp-pop">+5 XP</span> — leçon terminée !'); }
    Store.markLesson(id);
    location.hash = next ? '#lesson/' + next.id : '#grammar';
  };
  bindSpeaks();
}

/* ================= Jeux & exercices ================= */
function viewPractice() {
  const due = Store.srsDueCount(allItems().map(wordKey));
  app.innerHTML = pagehead('🎮 Jeux & exercices', 'home') + `
  <div class="wrap">
    <div class="section-title">S'entraîner</div>
    <a class="bigbtn gold" href="#flash/due">🧠 Révision espacée ${due?`(${due} cartes dues)`:'(à jour ✅)'}</a>
    <a class="bigbtn" href="#quiz/random">🎯 Quiz éclair vocabulaire</a>
    <a class="bigbtn" href="#conjquiz">⚙️ Quiz de conjugaison</a>
    <a class="bigbtn green" href="#memory/random">🎴 Memory (paires FR ↔ Darija)</a>
    <div class="section-title">Exercices de grammaire</div>
    ${D.exos.map(s => {
      const sc = Store.exoScore(s.id);
      return `<a class="word" style="text-decoration:none;color:inherit;" href="#exo/${s.id}">
        <div style="font-size:26px;">${s.icon}</div>
        <div class="txt"><div class="da" style="font-size:15px;">${esc(s.title)}</div>
        <div class="fr">${s.questions.length} questions${sc?` · record ${sc}%`:''}</div></div>
        <div style="font-size:20px;">${sc>=80?'🏆':'›'}</div>
      </a>`;
    }).join('')}
  </div>`;
}

function viewExo(id) {
  const s = D.exos.find(x => x.id === id);
  if (!s) return viewPractice();
  const qs = shuffle(s.questions).map(q => ({
    type:'mcq', q: q.q, sub: q.sub || '', choices: shuffle(q.choices.slice()), a: q.choices[q.a], exp: q.exp
  }));
  runQuiz(s.icon + ' ' + s.title, 'practice', qs, pct => Store.setExoScore(id, pct));
}

/* ================= Memory ================= */
function viewMemory(id) {
  let items;
  if (id === 'random') items = pick(allItems(), 8);
  else {
    const c = chapById(id); if (!c) return viewPractice();
    items = pick(c.items, 8);
  }
  const cards = shuffle(items.flatMap((it, ix) => [
    { pid: ix, label: it.fr }, { pid: ix, label: it.da }
  ]));
  let open = [], found = 0, lock = false, moves = 0;
  app.innerHTML = pagehead('🎴 Memory', id==='random' ? 'practice' : 'ch/'+id) + `
  <div class="wrap">
    <p style="font-weight:800;color:var(--ink-soft);font-size:14px;">Associe chaque mot français à son équivalent darija.</p>
    <div class="mem-grid" id="mg">
      ${cards.map((c,ix) => `<button class="mem-card" data-ix="${ix}" data-pid="${c.pid}">
        <span class="star">★</span><span class="inner">${esc(c.label)}</span>
      </button>`).join('')}
    </div>
    <div id="memdone"></div>
  </div>`;
  $('#mg').querySelectorAll('.mem-card').forEach(btn => btn.onclick = () => {
    if (lock || btn.classList.contains('open') || btn.classList.contains('found')) return;
    btn.classList.add('open');
    open.push(btn);
    if (open.length === 2) {
      moves++; lock = true;
      const [a,b] = open;
      if (a.dataset.pid === b.dataset.pid) {
        setTimeout(() => {
          a.classList.remove('open'); b.classList.remove('open');
          a.classList.add('found'); b.classList.add('found');
          open = []; lock = false; found++;
          if (found === items.length) {
            Store.addXP(8);
            $('#memdone').innerHTML = `<div class="result-hero"><div class="big">🎉</div><h2>Bravo !</h2><p>${moves} coups · +8 XP</p>
            <a class="bigbtn" href="#practice">Continuer</a></div>`;
          }
        }, 350);
      } else {
        setTimeout(() => { a.classList.remove('open'); b.classList.remove('open'); open=[]; lock=false; }, 750);
      }
    }
  });
}

/* ================= Réglages ================= */
function viewSettings() {
  const rate = parseFloat(localStorage.getItem('dj.rate') || '0.85');
  app.innerHTML = pagehead('🔧 Réglages', 'home') + `
  <div class="wrap">
    <div class="card">
      <div class="setrow">
        <div class="lab">🔊 Voix arabe</div>
        <div style="font-weight:900;color:${TTS.hasArabic()?'var(--green)':'var(--red)'};">${TTS.hasArabic() ? 'Détectée ✅' : 'Absente ❌'}</div>
      </div>
      <div class="setrow"><div class="lab">Vitesse de lecture</div>
        <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${rate}">
      </div>
      <div class="setrow">
        <div class="lab">Tester la voix</div>
        <button class="speak" data-ar="السلام عليكم، كيداير؟">🔊</button>
      </div>
    </div>
    <div class="card" style="font-size:13.5px;font-weight:700;line-height:1.5;">
      <b>📱 Installer sur iPhone :</b> ouvre ce site dans Safari → bouton Partager <b>⬆︎</b> → « Sur l'écran d'accueil ». L'app fonctionne ensuite hors-ligne.<br><br>
      <b>🗣️ Activer l'audio :</b> le darija n'a pas de voix officielle ; l'app lit l'écriture arabe avec la voix arabe du système. Sur iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Arabe → télécharge une voix (ex. Majed). La prononciation reste une aide — fie-toi à la phonétique (3, 7, 8, 9, 2) pour l'accent 100% marocain.<br><br>
      <b>🔤 Rappel phonétique :</b> 3 = 3ayn (gorge) · 7 = h expiré fort · 8 = h doux · 9 = q profond · 2 = coup de glotte · kh = jota · gh = r grasseyé.
    </div>
    <button class="bigbtn ghost" id="resetBtn" style="color:var(--red);">🗑️ Réinitialiser ma progression</button>
  </div>`;
  $('#rate').addEventListener('change', e => { localStorage.setItem('dj.rate', e.target.value); toast('Vitesse enregistrée'); });
  $('#resetBtn').onclick = () => {
    if (confirm('Effacer toute la progression (XP, révisions, scores) ?')) { Store.reset(); toast('Progression réinitialisée'); route(); }
  };
  bindSpeaks();
}

/* ================= Router ================= */
function route() {
  TTS.stop();
  const h = (location.hash || '#home').slice(1);
  const [name, arg] = h.split('/');
  window.scrollTo(0, 0);
  const tabs = { home:'home', vocab:'vocab', ch:'vocab', flash:'vocab', quiz:'vocab',
    conj:'conj', verb:'conj', conjquiz:'conj', grammar:'grammar', lesson:'grammar',
    practice:'practice', exo:'practice', memory:'practice', settings:'home' };
  document.querySelectorAll('#tabbar a').forEach(a => a.classList.toggle('on', a.dataset.tab === (tabs[name] || 'home')));
  switch (name) {
    case 'vocab': return viewVocab();
    case 'ch': return viewChapter(arg);
    case 'flash': return viewFlash(arg);
    case 'quiz': return viewQuiz(arg);
    case 'conj': return viewConj();
    case 'verb': return viewVerb(arg);
    case 'conjquiz': return viewConjQuiz();
    case 'grammar': return viewGrammar();
    case 'lesson': return viewLesson(arg);
    case 'practice': return viewPractice();
    case 'exo': return viewExo(arg);
    case 'memory': return viewMemory(arg);
    case 'settings': return viewSettings();
    default: return viewHome();
  }
}
window.addEventListener('hashchange', route);
route();
})();
