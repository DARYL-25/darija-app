/* Darija Academy — moteur de l'application (SPA, routeur par hash)
   Toutes les icônes sont vectorielles (js/icons.js) : aucun emoji dans l'interface. */
(() => {
const $ = sel => document.querySelector(sel);
const app = $('#app');
const D = window.DATA;
const I = window.Icon;

/* ================= Utilitaires ================= */
function esc(s) { return String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function shuffle(a) { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function pick(a, n) { return shuffle(a).slice(0, n); }
function toast(msg) {
  let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.innerHTML = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1900);
}
let _all = null;
function allItems() {
  if (!_all) _all = D.vocab.flatMap(ch => ch.items.map(it => ({...it, chap: ch.id, chTitle: ch.title, group: ch.group})));
  return _all;
}
function wordKey(it) { return it.chap + '|' + it.da; }
function chapById(id) { return D.vocab.find(c => c.id === id); }
function norm(s) {
  return String(s||'').toLowerCase()
    .replace(/[àâä]/g,'a').replace(/[éèêë]/g,'e').replace(/[îï]/g,'i').replace(/[ôö]/g,'o').replace(/[ùûü]/g,'u')
    .replace(/\([^)]*\)/g,'')
    .replace(/[-'’.,!?()\s]/g,'').replace(/8/g,'h').replace(/9/g,'q').replace(/ou/g,'u').replace(/oo/g,'u').replace(/ee/g,'i');
}
/* Formes d'un mot darija : "gal (CAS-MRK) / 9al (FÈS)" → ["gal","9al"] */
function forms(da) { return String(da).split('/').map(x => x.replace(/\([^)]*\)/g,'').trim()).filter(Boolean); }
function answersOf(da) { return forms(da).map(norm); }
function primaryForm(it) { return cap(forms(it.da)[0] || it.da); }
function cap(s) { s = String(s); return s.charAt(0).toUpperCase() + s.slice(1); }
/* Rendu d'un mot darija avec ses étiquettes régionales sous forme de badges */
function daHtml(da) {
  const parts = String(da).split('/').map(s => s.trim()).filter(Boolean);
  return parts.map(p => {
    const m = p.match(/^(.*?)\s*((?:\([^)]*\)\s*)+)$/);
    if (!m) return esc(p);
    const tags = m[2].match(/\([^)]*\)/g).map(t => `<span class="tag">${esc(t.slice(1,-1))}</span>`).join('');
    return esc(m[1]) + ' ' + tags;
  }).join('<span class="sep">/</span>');
}
const REGION_HELP = 'gén. = partout · CAS = Casablanca-Rabat · FÈS = Fès-Meknès · NRD = Nord (Tanger, Tétouan) · ORI = Oriental (Oujda) · MRK = Marrakech · SOU = Souss (Agadir) · SAH = Sahara · sout. = registre soutenu · fr./esp. = emprunt';

function speakBtnHandler(e) {
  const b = e.currentTarget;
  const ar = b.dataset.ar;
  if (!ar) { toast('Pas d’écriture arabe pour ce mot'); return; }
  if (!TTS.hasArabic()) { toast('Voix arabe non installée — voir Profil'); return; }
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
function speakBtn(ar, cls) { return `<button class="btn-icon gold speak ${cls||''}" data-ar="${esc(ar||'')}" aria-label="Écouter">${I('volume')}</button>`; }

function topbar(title, back, icon, right) {
  return `<header class="topbar">
    <div class="left">
      ${back ? `<a class="btn-icon" href="#${back}" aria-label="Retour">${I('back')}</a>` : ''}
      <span class="logo">${icon ? I(icon) : ''}${esc(title)}</span>
    </div>
    ${right || ''}
  </header>`;
}
function statsChip() {
  return `<span class="top-stats"><span>${I('flame')}${Store.streak()}</span><span>${Store.xp} XP</span></span>`;
}
function hearts(n, max) { let h=''; for (let i=0;i<max;i++) h += I(i<n?'heartf':'heart', i<n?'on':''); return `<span class="hearts">${h}</span>`; }
function chapKeys(c) { return c.items.map(it => wordKey({...it, chap:c.id})); }
function setTab(name) {
  document.querySelectorAll('#bottom-nav .nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
}

/* ================= Accueil ================= */
function viewHome() {
  const items = allItems();
  const keys = items.map(wordKey);
  const due = Store.srsDueCount(keys), total = items.length, known = Store.srsKnownCount(keys);
  const wod = items[Math.floor(Date.now()/86400000) % total];
  const lessons = D.grammar.length, done = Store.lessonsDoneCount();
  app.innerHTML = topbar('Darija Academy', null, null, statsChip()).replace('<span class="logo">', '<span class="logo"><img src="icons/logo-256.png" alt="" class="logo-img">') + `
  <div class="card gold wod">
    <div class="txt">
      <div class="lab">Mot du jour · ${esc(wod.chTitle)}</div>
      <div class="da">${esc(primaryForm(wod))}</div>
      <div class="fr">${esc(wod.fr)}</div>
    </div>
    ${wod.ar ? `<span class="ar">${esc(wod.ar)}</span>` : ''}
    ${speakBtn(wod.ar)}
  </div>

  <div class="infinity-card">
    <b>${I('infinity')}Mode infini</b>
    <p>Un entraînement sans fin, réglé sur tes thèmes et ton niveau. Record actuel : <b>${Store.inf.best}</b> bonnes réponses d'affilée.</p>
    <div class="inf-btns">
      <a href="#infcfg">${I('sliders')}Paramétrer</a>
      <a href="#inf">${I('play')}Reprendre mes réglages</a>
    </div>
  </div>

  ${due > 0 ? `<a class="btn big green" href="#flash/due">${I('brain')}Révision du jour — ${due} carte${due>1?'s':''}</a>` : ''}
  <a class="btn big" href="#quiz/random">${I('target')}Quiz éclair (tout le vocabulaire)</a>

  <div class="section-title">${I('award')}Progression</div>
  <div class="card">
    <div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;margin-bottom:6px;">
      <span>Mots maîtrisés</span><span style="color:#86efac;">${known} / ${total}</span>
    </div>
    <div class="qbar"><div style="width:${total?Math.round(100*known/total):0}%"></div></div>
    <div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;margin-bottom:6px;">
      <span>Chapitres de théorie lus</span><span style="color:var(--gold);">${done} / ${lessons}</span>
    </div>
    <div class="qbar"><div style="width:${Math.round(100*done/lessons)}%"></div></div>
    <div style="display:flex;justify-content:space-between;font-weight:800;font-size:14px;margin-bottom:6px;">
      <span>Niveau ${Store.level()}</span><span class="muted">${Store.levelProgress()}% vers le niveau ${Store.level()+1}</span>
    </div>
    <div class="qbar" style="margin-bottom:0"><div style="width:${Store.levelProgress()}%"></div></div>
  </div>

  <div class="section-title">${I('compass')}Explorer</div>
  <div class="unit-lessons" style="padding:0">
    <a class="lesson-node" href="#theory"><span class="node-circle" style="--c:#c084fc">${I('layers')}</span><span class="node-label">Théorie complète<small>${lessons} chapitres — phonétique, grammaire, conjugaison, culture</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#vocab"><span class="node-circle" style="--c:#60a5fa">${I('book')}</span><span class="node-label">Vocabulaire<small>${D.vocab.length} chapitres · ${total} mots avec darija, arabe standard et régions</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#conj"><span class="node-circle" style="--c:#22c55e">${I('refresh')}</span><span class="node-label">Conjugaison<small>${D.verbs.length} verbes conjugués à tous les temps</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#flashcfg"><span class="node-circle" style="--c:#f472b6">${I('cards')}</span><span class="node-label">Flashcards<small>Choisis tes thèmes et le sens (français, darija ou arabe)</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#practice"><span class="node-circle" style="--c:#f5c451">${I('gamepad')}</span><span class="node-label">Entraînement<small>Quiz, exercices de grammaire, memory, révision espacée</small></span><span class="node-arrow">${I('chevron')}</span></a>
  </div>`;
  bindSpeaks();
}

/* ================= Vocabulaire ================= */
const GROUP_COLORS = ['#60a5fa','#22c55e','#f5c451','#f472b6','#c084fc','#fb923c','#2dd4bf','#a3e635','#f87171','#e879f9'];
function viewVocab() {
  const groups = [...new Set(D.vocab.map(c => c.group))];
  app.innerHTML = topbar('Vocabulaire', 'home', 'book') + `
  <p class="intro">${allItems().length} mots et expressions. Les chapitres « Lexique » donnent aussi l'arabe standard vocalisé et chaque variante régionale.</p>
  <div class="search-wrap">${I('search')}<input class="search" id="vsearch" placeholder="Chercher un mot (français, darija ou arabe)…"></div>
  <div id="vres"></div>
  <div id="vgroups">
  ${groups.map((g, gi) => `
    <div class="unit" style="--c:${GROUP_COLORS[gi % GROUP_COLORS.length]}">
      <div class="unit-head"><span class="unit-icon">${I(g.startsWith('Lexique') ? 'languages' : 'book')}</span><b>${esc(g)}</b><small>${D.vocab.filter(c => c.group === g).length} chapitres</small></div>
      <div class="unit-lessons">
        ${D.vocab.filter(c => c.group === g).map(c => {
          const st = Store.chapter(c.id);
          const kn = Store.srsKnownCount(chapKeys(c));
          const pct = Math.round(100 * kn / c.items.length);
          return `<a class="lesson-node ${pct>=80?'done':''}" href="#ch/${c.id}">
            <span class="node-circle">${I(c.icon)}</span>
            <span class="node-label">${esc(c.title)}<small>${c.items.length} mots · ${kn} maîtrisés${st.bestQuiz?` · quiz ${st.bestQuiz}%`:''}</small><span class="bar"><div style="width:${pct}%"></div></span></span>
            <span class="node-arrow">${I('chevron')}</span>
          </a>`;
        }).join('')}
      </div>
    </div>`).join('')}
  </div>`;
  $('#vsearch').addEventListener('input', e => {
    const q = norm(e.target.value), raw = e.target.value.trim();
    const res = $('#vres'), grp = $('#vgroups');
    if (!q && !raw) { res.innerHTML=''; grp.style.display='block'; return; }
    if (raw.length < 2) return;
    grp.style.display = 'none';
    const found = allItems().filter(it => norm(it.fr).includes(q) || norm(it.da).includes(q) || (it.ar && it.ar.includes(raw)) || (it.ms && norm(it.ms).includes(q))).slice(0, 40);
    res.innerHTML = found.length ? found.map(wordRow).join('') : '<div class="empty">Aucun résultat</div>';
    bindSpeaks(res);
  });
}

function wordRow(it) {
  return `<div class="word">
    <div class="txt">
      <div class="fr">${esc(it.fr)}${it.chTitle ? ` <span class="muted">· ${esc(it.chTitle)}</span>` : ''}</div>
      <div class="da">${daHtml(it.da)}</div>
      ${it.ar ? `<span class="ar">${esc(it.ar)}</span>` : ''}
      ${it.ms ? `<div class="ms">arabe standard : ${esc(it.ms)}</div>` : ''}
      ${it.note ? `<div class="note">${I('info')}<span>${esc(it.note)}</span></div>` : ''}
      ${it.reg ? `<div class="regnote">${I('map')}<span>${esc(it.reg)}</span></div>` : ''}
    </div>
    <div class="acts">${speakBtn(it.ar)}</div>
  </div>`;
}

function viewChapter(id) {
  const c = chapById(id);
  if (!c) return viewVocab();
  Store.setChapterSeen(id, 100);
  const kn = Store.srsKnownCount(chapKeys(c));
  app.innerHTML = topbar(c.title, 'vocab', c.icon) + `
    ${TTS.hasArabic() ? '' : `<div class="audio-warn">${I('volumeoff')}<span>Aucune voix arabe détectée. Sur iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Arabe → télécharger une voix.</span></div>`}
    <p class="intro">${c.items.length} mots · ${kn} maîtrisés${c.lex ? ' · <span class="muted">' + esc(REGION_HELP) + '</span>' : ''}</p>
    <div class="row">
      <a class="btn green" href="#flash/${id}">${I('cards')}Flashcards</a>
      <a class="btn" href="#quiz/${id}">${I('target')}Quiz</a>
    </div>
    <a class="btn big alt" href="#memory/${id}">${I('grid')}Jeu de memory</a>
    <div style="height:14px"></div>
    ${c.items.map(it => wordRow({...it, chap:id})).join('')}`;
  bindSpeaks();
}

/* ================= Sélection de thèmes (partagée : flashcards & infini) ================= */
function themePicker(selected, name) {
  const groups = [...new Set(D.vocab.map(c => c.group))];
  return `<div class="cfg-actions">
      <button class="btn-link" data-all="1" data-pick="${name}">Tout cocher</button>
      <button class="btn-link" data-all="0" data-pick="${name}">Tout décocher</button>
      <button class="btn-link" data-all="base" data-pick="${name}">Les bases seulement</button>
    </div>
    <div class="cfg-list" id="${name}">
    ${groups.map(g => `
      <label class="grp"><input type="checkbox" data-group="${esc(g)}"> ${esc(g)}</label>
      ${D.vocab.filter(c => c.group === g).map(c => `<label><input type="checkbox" value="${c.id}" ${selected.includes(c.id)?'checked':''}> ${esc(c.title)}<small>${c.items.length}</small></label>`).join('')}
    `).join('')}
    </div>`;
}
function bindThemePicker(name, onChange) {
  const box = document.getElementById(name);
  const sync = () => {
    box.querySelectorAll('input[data-group]').forEach(g => {
      const ids = D.vocab.filter(c => c.group === g.dataset.group).map(c => c.id);
      g.checked = ids.every(id => box.querySelector(`input[value="${id}"]`).checked);
    });
    onChange(selectedThemes(name));
  };
  box.addEventListener('change', e => {
    if (e.target.dataset.group) {
      D.vocab.filter(c => c.group === e.target.dataset.group).forEach(c => box.querySelector(`input[value="${c.id}"]`).checked = e.target.checked);
    }
    sync();
  });
  document.querySelectorAll(`[data-pick="${name}"]`).forEach(b => b.onclick = () => {
    const mode = b.dataset.all;
    box.querySelectorAll('input[value]').forEach(i => {
      const c = chapById(i.value);
      i.checked = mode === '1' ? true : mode === '0' ? false : (c.group === 'Les bases' || c.id === 'lex-01' || c.id === 'lex-02' || c.id === 'lex-03');
    });
    sync();
  });
  sync();
}
function selectedThemes(name) { return [...document.querySelectorAll(`#${name} input[value]:checked`)].map(i => i.value); }
function itemsForThemes(ids) { return allItems().filter(it => ids.includes(it.chap)); }
function segButtons(cls, name, opts, val) {
  return `<div class="seg ${cls}" data-seg="${name}">${opts.map(o => `<button class="${o.v===val?'on':''}" data-v="${o.v}">${o.l}${o.s?`<small>${o.s}</small>`:''}</button>`).join('')}</div>`;
}
function bindSeg(name, onChange) {
  const box = document.querySelector(`[data-seg="${name}"]`);
  box.querySelectorAll('button').forEach(b => b.onclick = () => { box.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on'); onChange(b.dataset.v); });
}
function segVal(name) { const b = document.querySelector(`[data-seg="${name}"] button.on`); return b ? b.dataset.v : null; }

/* ================= Flashcards ================= */
const DEFAULT_FLASH = { themes: ['salutations','politesse','lex-01','lex-02'], front: 'fr', count: '20', mode: 'all' };
function viewFlashCfg() {
  const cfg = Object.assign({}, DEFAULT_FLASH, Store.getCfg('flash', {}));
  app.innerHTML = topbar('Flashcards', 'practice', 'cards') + `
  <p class="intro">Retourne la carte, puis dis si tu la connaissais. Les cartes ratées reviennent plus vite (révision espacée).</p>
  <div class="card">
    <div class="cfg-group"><h4>${I('shuffle')}Recto de la carte</h4>
      ${segButtons('c3','front',[{v:'fr',l:'Français',s:'→ darija'},{v:'da',l:'Darija',s:'→ français'},{v:'ar',l:'Arabe',s:'→ tout'}],cfg.front)}</div>
    <div class="cfg-group"><h4>${I('filter')}Quelles cartes ?</h4>
      ${segButtons('c3','mode',[{v:'all',l:'Toutes'},{v:'new',l:'Nouvelles',s:'jamais vues'},{v:'weak',l:'Fragiles',s:'ratées récemment'}],cfg.mode)}</div>
    <div class="cfg-group"><h4>${I('hash')}Nombre de cartes</h4>
      ${segButtons('c3','count',[{v:'10',l:'10'},{v:'20',l:'20'},{v:'40',l:'40'}],cfg.count)}</div>
    <div class="cfg-group"><h4>${I('layers')}Thèmes<span class="cnt" id="fl-cnt"></span></h4>${themePicker(cfg.themes, 'fl-themes')}</div>
  </div>
  <button class="btn big" id="fl-go">${I('play')}Commencer</button>`;
  const upd = () => { const ids = selectedThemes('fl-themes'); $('#fl-cnt').textContent = ids.length + ' chapitre(s) · ' + itemsForThemes(ids).length + ' mots'; };
  bindThemePicker('fl-themes', upd);
  ['front','mode','count'].forEach(n => bindSeg(n, () => {}));
  $('#fl-go').onclick = () => {
    const c = { themes: selectedThemes('fl-themes'), front: segVal('front'), count: segVal('count'), mode: segVal('mode') };
    if (!c.themes.length) { toast('Choisis au moins un thème'); return; }
    Store.setCfg('flash', c); location.hash = '#flash/custom';
  };
}

function viewFlash(id) {
  let items, title, backTo, front = 'fr';
  if (id === 'due') {
    const due = allItems().filter(it => Store.srsSeen(wordKey(it)) && Store.srsGet(wordKey(it)).due <= Date.now());
    items = pick(due, 25); title = 'Révision du jour'; backTo = 'practice';
    if (!items.length) { app.innerHTML = topbar(title, backTo, 'brain') + `<div class="result-hero"><div class="end-ico">${I('checkcircle')}</div><h2>Tout est révisé !</h2><p>Étudie des chapitres en flashcards : les cartes vues reviendront ici pour la révision espacée.</p><a class="btn big" href="#flashcfg">Choisir des thèmes</a></div>`; return; }
  } else if (id === 'custom') {
    const cfg = Object.assign({}, DEFAULT_FLASH, Store.getCfg('flash', {}));
    let pool = itemsForThemes(cfg.themes);
    if (cfg.mode === 'new') pool = pool.filter(it => !Store.srsSeen(wordKey(it)));
    if (cfg.mode === 'weak') pool = pool.filter(it => Store.srsSeen(wordKey(it)) && Store.srsGet(wordKey(it)).box <= 1);
    if (cfg.front === 'ar') pool = pool.filter(it => it.ar);
    items = pick(pool, parseInt(cfg.count)); front = cfg.front; title = 'Flashcards'; backTo = 'flashcfg';
    if (!items.length) { app.innerHTML = topbar(title, backTo, 'cards') + `<div class="empty">Aucune carte ne correspond à ces réglages. Change le filtre « Quelles cartes ? » ou les thèmes.</div>`; return; }
  } else {
    const c = chapById(id); if (!c) return viewVocab();
    items = shuffle(c.items.map(it => ({...it, chap:id}))); title = c.title; backTo = 'ch/' + id;
  }
  let i = 0, learned = 0;
  function render() {
    if (i >= items.length) {
      Store.addXP(5);
      app.innerHTML = topbar(title, backTo, 'cards') + `<div class="result-hero">
        <div class="end-ico">${I(learned >= items.length*0.7 ? 'star' : 'flame')}</div>
        <h2>${learned} / ${items.length}</h2>
        <p>cartes connues · +5 XP · les cartes ratées reviendront plus vite en révision.</p>
        <a class="btn big" href="#${backTo}">Continuer</a>
        <button class="btn big alt" id="again">${I('refresh')}Recommencer</button>
      </div>`;
      $('#again').onclick = () => { i=0; learned=0; items = shuffle(items); render(); };
      return;
    }
    const it = items[i];
    const faceFr = `<div class="fr-big">${esc(it.fr)}</div>`;
    const faceDa = `<div class="da-big">${esc(it.da)}</div>`;
    const faceAr = it.ar ? `<div class="ar-big ar">${esc(it.ar)}</div>` : '';
    const faceMs = it.ms ? `<div class="ms">${esc(it.ms)}</div>` : '';
    let recto, verso;
    if (front === 'da') { recto = faceDa; verso = faceFr + faceAr + faceMs; }
    else if (front === 'ar') { recto = faceAr; verso = faceFr + faceDa + faceMs; }
    else { recto = faceFr; verso = faceDa + faceAr + faceMs; }
    app.innerHTML = topbar(title, backTo, 'cards') + `
      <div class="flash-counter">${i+1} / ${items.length}</div>
      <div class="qbar"><div style="width:${Math.round(100*i/items.length)}%"></div></div>
      <div class="flash-stage">
        <div class="flashcard" id="fc">
          <div class="flashface">${recto}<div class="hint">Touche la carte pour la retourner</div></div>
          <div class="flashface back">${verso}
            ${it.note ? `<div class="small">${esc(it.note)}</div>` : ''}
            ${it.reg ? `<div class="small">${esc(it.reg)}</div>` : ''}
            ${it.ar ? speakBtn(it.ar) : ''}
            <div class="hint">Je la connaissais ?</div>
          </div>
        </div>
      </div>
      <div class="flash-actions">
        <button class="btn alt" id="no">${I('xcircle')}À revoir</button>
        <button class="btn green" id="yes">${I('checkcircle')}Je sais</button>
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

/* ================= Générateur de questions ================= */
/* dirs : fr2da, da2fr, ar2fr, fr2ar, ms2fr · types : mcq, type · nchoices : 4 ou 6 */
function makeQuestion(it, pool, opts) {
  const dirs = opts.dirs.filter(d => (d === 'ar2fr' || d === 'fr2ar') ? !!it.ar : d === 'ms2fr' ? !!it.ms : true);
  if (!dirs.length) return null;
  const dir = dirs[Math.floor(Math.random()*dirs.length)];
  const types = opts.types;
  let type = types[Math.floor(Math.random()*types.length)];
  if (type === 'type' && dir !== 'fr2da') type = 'mcq';
  const n = opts.nchoices || 4;
  const distract = pick(pool.filter(x => x.da !== it.da && x.fr !== it.fr && (dir === 'ar2fr' || dir === 'fr2ar' ? !!x.ar : dir === 'ms2fr' ? !!x.ms : true)), n-1);
  const base = { item: it, dir };
  if (type === 'type') return { ...base, type:'type', q: `Écris en darija : « ${it.fr} »`, sub: 'Phonétique (3, 7, 8, 9, 2) — toute variante régionale est acceptée', a: it.da, aShow: it.da };
  if (dir === 'fr2da') return { ...base, type:'mcq', q: `Comment dit-on « ${it.fr} » ?`, sub: 'en darija', choices: shuffle([it, ...distract]).map(x => primaryForm(x)), a: primaryForm(it), aShow: it.da };
  if (dir === 'da2fr') return { ...base, type:'mcq', q: `Que veut dire « ${primaryForm(it)} » ?`, sub: 'Traduis en français', choices: shuffle([it, ...distract]).map(x => cap(x.fr)), a: cap(it.fr), aShow: it.fr };
  if (dir === 'ar2fr') return { ...base, type:'mcq', prompt: it.ar, q: 'Que veut dire ce mot ?', sub: 'Lis l’arabe standard', choices: shuffle([it, ...distract]).map(x => x.fr), a: it.fr, aShow: it.fr + ' — ' + (it.ms||'') };
  if (dir === 'fr2ar') return { ...base, type:'mcq', arChoices: true, q: `« ${it.fr} » en arabe standard, c'est…`, sub: 'Choisis l’écriture', choices: shuffle([it, ...distract]).map(x => x.ar), a: it.ar, aShow: it.ar + ' (' + (it.ms||'') + ')' };
  if (dir === 'ms2fr') return { ...base, type:'mcq', q: `Que veut dire « ${it.ms} » ?`, sub: 'Arabe standard (phonétique)', choices: shuffle([it, ...distract]).map(x => x.fr), a: it.fr, aShow: it.fr };
  return null;
}
function makeVocabQuestions(items, pool, n, opts) {
  opts = opts || { dirs:['fr2da','da2fr','fr2da'], types:['mcq','mcq','type'], nchoices:4 };
  const qs = [];
  for (const it of pick(items, Math.min(n, items.length))) { const q = makeQuestion(it, pool, opts); if (q) qs.push(q); }
  return qs;
}

/* Affiche une question dans un conteneur ; cb(ok) appelé après la réponse */
function renderQuestion(q, bodyEl, footEl, onAnswer, nextLabel) {
  const arPrompt = q.prompt ? `<div class="ex-prompt speak" data-ar="${esc(q.prompt)}"><span class="ar">${esc(q.prompt)}</span></div>` : '';
  bodyEl.innerHTML = `<div class="ex-title"><small>${esc(q.sub||'')}</small>${esc(q.q)}</div>${arPrompt}<div id="qbody"></div>`;
  const body = bodyEl.querySelector('#qbody');
  function feedback(ok) {
    const exp = q.exp ? `<div class="exp">${esc(q.exp)}</div>` : '';
    const ans = q.arChoices ? `<span class="ar">${esc(q.aShow)}</span>` : esc(q.aShow || q.a);
    footEl.innerHTML = `<div class="qfeedback ${ok?'good':'bad'}">
      <div class="head">${I(ok?'checkcircle':'xcircle')}${ok ? 'Mzyan ! Bonne réponse' : 'La réponse était :'}</div>
      ${ok ? '' : `<div>${ans}</div>`}${exp}
    </div><button class="btn big" id="next">${nextLabel || 'Suivant'}</button>`;
    if (q.item && q.item.ar && TTS.hasArabic()) TTS.speak(q.item);
    $('#next').onclick = () => onAnswer(ok);
    $('#next').focus();
  }
  if (q.type === 'type') {
    body.innerHTML = `<input class="typing" id="tin" autocapitalize="off" autocomplete="off" placeholder="Ta réponse…">`;
    footEl.innerHTML = `<button class="btn big green" id="chk">Vérifier</button>`;
    const inp = $('#tin'); inp.focus();
    const check = () => {
      if (!inp.value.trim()) return;
      const ok = answersOf(q.a).includes(norm(inp.value));
      inp.disabled = true; feedback(ok);
    };
    $('#chk').onclick = check;
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
  } else {
    body.innerHTML = `<div class="ex-options ${q.arChoices ? '' : (q.choices.some(c => c.length > 26) ? 'col' : '')}">${q.choices.map(c => `<button class="ex-opt ${q.arChoices?'ar':''}" data-v="${esc(c)}">${esc(c)}</button>`).join('')}</div>`;
    footEl.innerHTML = '';
    body.querySelectorAll('.ex-opt').forEach(btn => btn.onclick = () => {
      const ok = btn.dataset.v === q.a;
      body.querySelectorAll('.ex-opt').forEach(b => {
        if (b.dataset.v === q.a) b.classList.add('good');
        else if (b === btn) b.classList.add('bad');
        else b.classList.add('dim');
        b.disabled = true;
      });
      feedback(ok);
    });
  }
  bindSpeaks(bodyEl);
}

function runQuiz(title, backTo, questions, onScore) {
  let i = 0, score = 0;
  function render() {
    if (i >= questions.length) {
      const pct = Math.round(100 * score / questions.length);
      const bonus = pct >= 80 ? 10 : 0;
      Store.addXP(bonus);
      if (onScore) onScore(pct);
      app.innerHTML = topbar(title, backTo, 'target') + `<div class="result-hero">
        <div class="end-ico">${I(pct>=80?'trophy':pct>=50?'award':'book')}</div>
        <h2>${score} / ${questions.length}</h2>
        <div class="end-xp">+${score*2 + bonus} XP</div>
        <p>${pct>=80?'Excellent ! Bonus de 10 XP.':'Continue, shwiya b shwiya !'}</p>
        <a class="btn big" href="#${backTo}">Continuer</a>
      </div>`;
      return;
    }
    const q = questions[i];
    app.innerHTML = `<header class="lesson-header"><a class="btn-icon" href="#${backTo}">${I('x')}</a><div class="qbar"><div style="width:${Math.round(100*i/questions.length)}%"></div></div><span class="muted">${i+1}/${questions.length}</span></header>
      <div id="qwrap"></div><div id="qfoot"></div>`;
    renderQuestion(q, $('#qwrap'), $('#qfoot'), ok => {
      if (ok) { score++; Store.addXP(2); }
      if (q.item) Store.srsAnswer(wordKey(q.item), ok);
      i++; render();
    }, i+1 >= questions.length ? 'Voir le résultat' : 'Suivant');
  }
  render();
}

function viewQuiz(id) {
  if (id === 'random') {
    const pool = allItems();
    runQuiz('Quiz éclair', 'home', makeVocabQuestions(pool, pool, 10));
  } else {
    const c = chapById(id); if (!c) return viewVocab();
    const items = c.items.map(it => ({...it, chap:id}));
    const dirs = c.lex ? ['fr2da','da2fr','ar2fr','fr2da'] : ['fr2da','da2fr','fr2da'];
    runQuiz(c.title, 'ch/' + id, makeVocabQuestions(items, allItems(), 10, { dirs, types:['mcq','mcq','type'], nchoices:4 }),
      pct => Store.setQuizScore(id, pct));
  }
}

/* ================= Mode infini ================= */
const DEFAULT_INF = { themes: ['salutations','politesse','nombres','famille','lex-01','lex-02','lex-06','lex-08'], level: 'moyen', dirs: ['fr2da','da2fr'], conj: '1', lives: '3', timer: '0' };
const LEVELS = {
  facile:  { types:['mcq'], nchoices:4, label:'Facile', desc:'QCM à 4 choix' },
  moyen:   { types:['mcq','mcq','type'], nchoices:4, label:'Moyen', desc:'QCM + écriture' },
  difficile:{ types:['mcq','type','type'], nchoices:6, label:'Difficile', desc:'6 choix, beaucoup d’écriture' },
  expert:  { types:['type'], nchoices:6, label:'Expert', desc:'Tout à l’écrit' }
};
function viewInfCfg() {
  const cfg = Object.assign({}, DEFAULT_INF, Store.getCfg('inf', {}));
  const dirChip = (v, l, s) => `<button class="chip ${cfg.dirs.includes(v)?'on':''}" data-dir="${v}">${l}${s?` <span class="muted">${s}</span>`:''}</button>`;
  app.innerHTML = topbar('Mode infini — réglages', 'practice', 'sliders') + `
  <p class="intro">Le mode infini enchaîne les questions sans fin. Règle-le sur ton niveau : tu perds une vie à chaque erreur, et ton record est la plus longue série de bonnes réponses.</p>
  <div class="card">
    <div class="cfg-group"><h4>${I('zap')}Niveau</h4>
      ${segButtons('c2','level', Object.keys(LEVELS).map(k => ({v:k, l:LEVELS[k].label, s:LEVELS[k].desc})), cfg.level)}</div>
    <div class="cfg-group"><h4>${I('shuffle')}Sens des questions</h4>
      <div class="chips" id="inf-dirs">
        ${dirChip('fr2da','Français → darija')}
        ${dirChip('da2fr','Darija → français')}
        ${dirChip('ar2fr','Arabe (écriture) → français','lexique')}
        ${dirChip('fr2ar','Français → arabe (écriture)','lexique')}
        ${dirChip('ms2fr','Arabe standard (phonétique) → français','lexique')}
      </div></div>
    <div class="cfg-group"><h4>${I('refresh')}Conjugaison</h4>
      ${segButtons('c3','conj',[{v:'0',l:'Aucune'},{v:'1',l:'Un peu',s:'1 question sur 5'},{v:'2',l:'Beaucoup',s:'1 sur 2'}],cfg.conj)}</div>
    <div class="cfg-group"><h4>${I('heart')}Vies</h4>
      ${segButtons('c3','lives',[{v:'3',l:'3 vies'},{v:'5',l:'5 vies'},{v:'99',l:'Illimitées',s:'entraînement libre'}],cfg.lives)}</div>
    <div class="cfg-group"><h4>${I('timer')}Chrono par question</h4>
      ${segButtons('c3','timer',[{v:'0',l:'Aucun'},{v:'15',l:'15 s'},{v:'8',l:'8 s',s:'réflexe'}],cfg.timer)}</div>
    <div class="cfg-group"><h4>${I('layers')}Thèmes<span class="cnt" id="inf-cnt"></span></h4>${themePicker(cfg.themes, 'inf-themes')}</div>
  </div>
  <button class="btn big" id="inf-go">${I('play')}Lancer le mode infini</button>`;
  const upd = () => { const ids = selectedThemes('inf-themes'); $('#inf-cnt').textContent = ids.length + ' chapitre(s) · ' + itemsForThemes(ids).length + ' mots'; };
  bindThemePicker('inf-themes', upd);
  ['level','conj','lives','timer'].forEach(n => bindSeg(n, () => {}));
  $('#inf-dirs').querySelectorAll('.chip').forEach(c => c.onclick = () => c.classList.toggle('on'));
  $('#inf-go').onclick = () => {
    const c = { themes: selectedThemes('inf-themes'), level: segVal('level'), conj: segVal('conj'), lives: segVal('lives'), timer: segVal('timer'),
      dirs: [...document.querySelectorAll('#inf-dirs .chip.on')].map(x => x.dataset.dir) };
    if (!c.themes.length) { toast('Choisis au moins un thème'); return; }
    if (!c.dirs.length) { toast('Choisis au moins un sens de question'); return; }
    Store.setCfg('inf', c); location.hash = '#inf';
  };
}

function viewInfinity() {
  const cfg = Object.assign({}, DEFAULT_INF, Store.getCfg('inf', {}));
  const lvl = LEVELS[cfg.level] || LEVELS.moyen;
  const pool = itemsForThemes(cfg.themes);
  const all = allItems();
  if (pool.length < 6) { location.hash = '#infcfg'; return; }
  const maxLives = parseInt(cfg.lives), timer = parseInt(cfg.timer);
  let lives = maxLives, streak = 0, best = 0, total = 0, correct = 0, tHandle = null, tLeft = 0;
  const conjRate = cfg.conj === '2' ? 0.5 : cfg.conj === '1' ? 0.2 : 0;
  const weight = it => { const b = Store.srsGet(wordKey(it)).box; return b >= 4 ? 1 : b >= 2 ? 2 : 4; }; // les mots fragiles reviennent plus souvent

  function pickItem() {
    const w = pool.map(weight); const sum = w.reduce((a,b)=>a+b,0); let r = Math.random()*sum;
    for (let i=0;i<pool.length;i++) { r -= w[i]; if (r <= 0) return pool[i]; }
    return pool[pool.length-1];
  }
  function nextQuestion() {
    if (conjRate && Math.random() < conjRate && D.verbs.length) return makeConjQuestion(lvl.nchoices);
    for (let k=0;k<8;k++) { const q = makeQuestion(pickItem(), all, { dirs: cfg.dirs, types: lvl.types, nchoices: lvl.nchoices }); if (q) return q; }
    return makeQuestion(pickItem(), all, { dirs:['fr2da','da2fr'], types: lvl.types, nchoices: lvl.nchoices });
  }
  function hud() {
    return `<span class="inf-hud"><span>${I('flame')}${streak}</span><span>${I('trophy')}${best}</span></span>`;
  }
  function end(reason) {
    clearInterval(tHandle);
    Store.infRecord(best, total, correct);
    const xp = correct * 2 + (best >= 10 ? 15 : best >= 5 ? 5 : 0);
    Store.addXP(xp);
    app.innerHTML = topbar('Mode infini', 'practice', 'infinity') + `<div class="result-hero">
      <div class="end-ico">${I(best >= 20 ? 'trophy' : best >= 10 ? 'star' : 'flame')}</div>
      <h2>Série : ${best}</h2>
      <div class="end-xp">+${xp} XP</div>
      <p>${reason}<br>${correct} bonnes réponses sur ${total}${best >= Store.inf.best && best > 0 ? ' · nouveau record !' : ' · record : ' + Store.inf.best}</p>
      <a class="btn big" href="#inf">${I('refresh')}Rejouer</a>
      <a class="btn big alt" href="#infcfg">${I('sliders')}Changer les réglages</a>
    </div>`;
  }
  function render() {
    const q = nextQuestion();
    app.innerHTML = `<header class="lesson-header"><a class="btn-icon" href="#practice">${I('x')}</a>${hud()}<span style="flex:1"></span>${maxLives < 99 ? hearts(lives, maxLives) : `<span class="muted">${total+1}</span>`}</header>
      ${timer ? `<div class="timerbar"><div id="tbar" style="width:100%"></div></div>` : ''}
      <div id="qwrap"></div><div id="qfoot"></div>`;
    let answered = false;
    const after = ok => {
      if (answered) return; answered = true; clearInterval(tHandle);
      total++;
      if (ok) { correct++; streak++; if (streak > best) best = streak; }
      else { streak = 0; lives--; }
      if (q.item) Store.srsAnswer(wordKey(q.item), ok);
      if (lives <= 0) { end('Plus de vies !'); return; }
      render();
    };
    renderQuestion(q, $('#qwrap'), $('#qfoot'), after, 'Suivant');
    if (timer) {
      tLeft = timer;
      tHandle = setInterval(() => {
        tLeft--; const bar = $('#tbar'); if (bar) bar.style.width = Math.max(0, 100*tLeft/timer) + '%';
        if (tLeft <= 0) {
          clearInterval(tHandle);
          if (answered) return;
          // temps écoulé = erreur
          $('#qwrap').querySelectorAll('.ex-opt').forEach(b => { b.disabled = true; if (b.dataset.v === q.a) b.classList.add('good'); });
          const tin = $('#tin'); if (tin) tin.disabled = true;
          $('#qfoot').innerHTML = `<div class="qfeedback bad"><div class="head">${I('timer')}Temps écoulé ! La réponse était :</div><div>${q.arChoices ? `<span class="ar">${esc(q.aShow)}</span>` : esc(q.aShow||q.a)}</div></div><button class="btn big" id="next">Suivant</button>`;
          $('#next').onclick = () => after(false);
        }
      }, 1000);
    }
  }
  render();
}

/* ================= Conjugaison ================= */
const PRON = ['Ana', 'Nta', 'Nti', '8uwa', '8iya', '7na', 'Ntuma', '8uma'];
const PRON_FR = ['je', 'tu (m)', 'tu (f)', 'il', 'elle', 'nous', 'vous', 'ils/elles'];
function makeConjQuestion(n) {
  const v = D.verbs[Math.floor(Math.random()*D.verbs.length)];
  const ix = Math.floor(Math.random() * 8);
  const tense = ['acc','pres','fut'][Math.floor(Math.random()*3)];
  const form = (t, j) => t==='acc' ? v.acc[j] : t==='pres' ? 'ka' + v.base[j] : 'gha ' + v.base[j];
  const correct = form(tense, ix);
  const tname = tense==='acc' ? 'à l’accompli (passé)' : tense==='pres' ? 'au présent (ka-)' : 'au futur (gha)';
  const others = [...new Set([0,1,2,3,4,5,6,7].map(j => form(tense, j)).filter(f => f !== correct))];
  let extra = [];
  if (others.length < n-1) extra = [...new Set(['acc','pres','fut'].filter(t => t !== tense).map(t => form(t, ix)))].filter(f => f !== correct);
  return { type:'mcq', q: `${v.da} (${v.fr}) — conjugue avec ${PRON[ix]} ${tname}`, sub: `${PRON[ix]} = ${PRON_FR[ix]} · conjugaison`,
    choices: shuffle([correct, ...pick([...others, ...extra], n-1)]), a: correct, aShow: `${PRON[ix]} ${correct}`, exp: `${PRON[ix]} ${correct}` };
}
function viewConj() {
  app.innerHTML = topbar('Conjugaison', 'theory', 'refresh') + `
  <p class="intro">${D.verbs.length} verbes essentiels conjugués à l'accompli, au présent, au futur et à l'impératif, avec le participe actif. Ordre des pronoms : ana, nta, nti, 8uwa, 8iya, 7na, ntuma, 8uma.</p>
  <a class="btn big" href="#conjquiz">${I('target')}Quiz de conjugaison</a>
  <a class="btn big alt" href="#lesson/verbes-accompli">${I('layers')}Revoir les règles dans la théorie</a>
  <div style="height:14px"></div>
  <div class="list">
    ${D.verbs.map(v => `<a class="theory-item" href="#verb/${v.id}"><span class="th-icon">${esc(v.da.slice(0,2))}</span><span class="th-names"><b>${esc(v.da)}</b><small>${esc(v.fr)} · ${esc(v.type)}</small></span><span class="node-arrow">${I('chevron')}</span></a>`).join('')}
  </div>`;
}
function conjTable(title, forms, prefix) {
  return `<div class="section-title">${title}</div>
  <table class="ctable"><tr><th>Pronom</th><th>Darija</th></tr>
  ${forms.map((f,ix) => `<tr><td>${PRON[ix]} <span>(${PRON_FR[ix]})</span></td><td><b>${esc(prefix ? prefix(f) : f)}</b></td></tr>`).join('')}
  </table>`;
}
function viewVerb(id) {
  const v = D.verbs.find(x => x.id === id);
  if (!v) return viewConj();
  app.innerHTML = topbar(v.da + ' — ' + v.fr, 'conj', 'refresh') + `
    <div class="card verb-head">
      <div style="flex:1;">
        <div class="da">${esc(v.da)}</div>
        <div class="fr">${esc(v.fr)}${v.ar ? ` · <span class="ar">${esc(v.ar)}</span>` : ''}</div>
        <div class="type">Type : ${esc(v.type)}</div>
      </div>
      ${v.ar ? speakBtn(v.ar) : ''}
    </div>
    ${v.note ? `<div class="theory-body"><div class="tip">${v.note}</div></div>` : ''}
    ${conjTable('Accompli (passé)', v.acc)}
    ${conjTable('Inaccompli (présent) — préfixe ka-', v.base, f => 'ka' + f)}
    <div class="theory-body"><div class="reg">À Marrakech et Fès on entend souvent <b>ta-</b> au lieu de <b>ka-</b> : ta${esc(v.base[0])} = ka${esc(v.base[0])}. Au Nord, le préfixe est parfois réduit à <b>a-</b>.</div></div>
    ${conjTable('Futur — particule gha / ghadi', v.base, f => 'gha ' + f)}
    ${v.imp ? `<div class="section-title">Impératif</div>
    <table class="ctable"><tr><th></th><th>Darija</th></tr>
      <tr><td>À un homme</td><td><b>${esc(v.imp[0])}</b></td></tr>
      <tr><td>À une femme</td><td><b>${esc(v.imp[1])}</b></td></tr>
      <tr><td>À un groupe</td><td><b>${esc(v.imp[2])}</b></td></tr>
    </table>` : ''}
    ${v.pa ? `<div class="section-title">Participe actif (état / action en cours)</div>
    <table class="ctable"><tr><th></th><th>Darija</th></tr>
      <tr><td>Masculin</td><td><b>${esc(v.pa[0])}</b></td></tr>
      <tr><td>Féminin</td><td><b>${esc(v.pa[1])}</b></td></tr>
      <tr><td>Pluriel</td><td><b>${esc(v.pa[2])}</b></td></tr>
    </table>` : ''}
    <a class="btn big" href="#conjquiz">${I('target')}M'entraîner</a>`;
  bindSpeaks();
}
function viewConjQuiz() {
  const qs = []; for (let k=0;k<10;k++) qs.push(makeConjQuestion(4));
  runQuiz('Quiz de conjugaison', 'conj', qs);
}

/* ================= Théorie ================= */
const CAT_ORDER = ['Phonétique & bases', 'Grammaire essentielle', "Le nom & l'adjectif", 'Conjugaison', 'La phrase', 'Niveau avancé', 'Régions & culture', 'Darija ↔ arabe standard'];
let _lessons = null;
function lessons() {
  if (!_lessons) {
    const rank = c => { const i = CAT_ORDER.indexOf(c); return i < 0 ? 99 : i; };
    _lessons = D.grammar.map((l, i) => ({ l, i })).sort((a, b) => rank(a.l.cat) - rank(b.l.cat) || a.i - b.i).map(x => x.l);
  }
  return _lessons;
}
function viewTheory() {
  const L = lessons();
  const cats = [...new Set(L.map(l => l.cat))];
  const done = Store.lessonsDoneCount();
  app.innerHTML = topbar('Théorie', 'home', 'layers') + `
  <p class="intro">${D.grammar.length} chapitres, ${done} lus. Tout ce qu'il faut pour parler darija comme un Marocain et comprendre l'arabe standard : phonétique, nom, verbe, phrase, régions et culture. Avance dans l'ordre !</p>
  <a class="btn big alt" href="#conj">${I('refresh')}Tables de conjugaison (${D.verbs.length} verbes)</a>
  ${cats.map((cat, ci) => `
    <div class="unit" style="--c:${GROUP_COLORS[(ci+2) % GROUP_COLORS.length]}">
      <div class="unit-head"><span class="unit-icon">${I('layers')}</span><b>${esc(cat)}</b><small>${L.filter(l => l.cat === cat).length}</small></div>
      <div class="unit-lessons">
      ${L.filter(l => l.cat === cat).map(l => `
        <a class="theory-item ${Store.lessonDone(l.id) ? 'read' : ''}" href="#lesson/${l.id}">
          <span class="th-icon">${L.indexOf(l)+1}</span>
          <span class="th-names"><b>${esc(l.title)}</b><small>${esc(l.sub||'')}</small></span>
          <span class="th-check">${I(Store.lessonDone(l.id) ? 'checkcircle' : 'chevron', Store.lessonDone(l.id) ? '' : 'off')}</span>
        </a>`).join('')}
      </div>
    </div>`).join('')}`;
}
function viewLesson(id) {
  const L = lessons();
  const l = L.find(x => x.id === id);
  if (!l) return viewTheory();
  const ix = L.indexOf(l);
  const next = L[ix+1], prev = L[ix-1];
  app.innerHTML = topbar((ix+1) + '. ' + l.title, 'theory', null) + `
  <p class="muted">${esc(l.cat)} · ${esc(l.sub||'')}</p>
  <article class="theory-body">${l.body}</article>
  <div class="theory-nav">
    <button class="btn big green" id="doneBtn">${I('checkcircle')}${Store.lessonDone(id) ? 'Chapitre relu' : 'J’ai compris ! (+5 XP)'}</button>
    ${next ? `<a class="btn big alt" href="#lesson/${next.id}">${I('arrowright')}Suivant : ${esc(next.title)}</a>` : ''}
    ${prev ? `<a class="btn-link" href="#lesson/${prev.id}">Précédent : ${esc(prev.title)}</a>` : ''}
  </div>`;
  $('#doneBtn').onclick = () => {
    if (!Store.lessonDone(id)) { Store.addXP(5); toast('+5 XP — chapitre terminé'); }
    Store.markLesson(id);
    location.hash = next ? '#lesson/' + next.id : '#theory';
  };
  // texte arabe cliquable dans la théorie
  document.querySelectorAll('.theory-body .ar').forEach(el => { if (!el.closest('.speak')) el.style.cursor = 'pointer'; el.addEventListener('click', () => { if (TTS.hasArabic()) TTS.speak({ar: el.textContent}); }); });
  bindSpeaks();
}

/* ================= Entraînement ================= */
function viewPractice() {
  const due = Store.srsDueCount(allItems().map(wordKey));
  const inf = Store.inf;
  app.innerHTML = topbar('Entraînement', 'home', 'gamepad') + `
  <div class="infinity-card">
    <b>${I('infinity')}Mode infini</b>
    <p>Questions sans fin, sur les thèmes et au niveau que tu choisis. Les mots que tu rates reviennent plus souvent.</p>
    <div class="inf-btns">
      <a href="#infcfg">${I('sliders')}Paramétrer</a>
      <a href="#inf">${I('play')}Lancer</a>
    </div>
    <div class="inf-stats"><div><b>${inf.best}</b>record (série)</div><div><b>${inf.sessions}</b>parties</div><div><b>${inf.total ? Math.round(100*inf.correct/inf.total) : 0}%</b>réussite</div></div>
  </div>
  <div class="unit-lessons" style="padding:0">
    <a class="lesson-node" href="#flashcfg"><span class="node-circle" style="--c:#f472b6">${I('cards')}</span><span class="node-label">Flashcards<small>Thèmes au choix · recto français, darija ou arabe</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#flash/due"><span class="node-circle" style="--c:#22c55e">${I('brain')}</span><span class="node-label">Révision espacée<small>${due ? due + ' cartes à revoir aujourd’hui' : 'À jour — rien à revoir'}</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#quiz/random"><span class="node-circle" style="--c:#f5c451">${I('target')}</span><span class="node-label">Quiz éclair<small>10 questions sur tout le vocabulaire</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#conjquiz"><span class="node-circle" style="--c:#60a5fa">${I('refresh')}</span><span class="node-label">Quiz de conjugaison<small>Accompli, présent, futur</small></span><span class="node-arrow">${I('chevron')}</span></a>
    <a class="lesson-node" href="#memory/random"><span class="node-circle" style="--c:#c084fc">${I('grid')}</span><span class="node-label">Memory<small>Associe français et darija</small></span><span class="node-arrow">${I('chevron')}</span></a>
  </div>
  <div class="section-title">${I('puzzle')}Exercices de grammaire</div>
  <div class="list">
  ${D.exos.map(s => {
    const sc = Store.exoScore(s.id);
    return `<a class="theory-item ${sc>=80?'read':''}" href="#exo/${s.id}">
      <span class="th-icon">${I(s.icon)}</span>
      <span class="th-names"><b>${esc(s.title)}</b><small>${s.questions.length} questions${sc?` · record ${sc}%`:''}</small></span>
      <span class="th-check">${I(sc>=80?'trophy':'chevron', sc>=80?'':'off')}</span>
    </a>`;
  }).join('')}
  </div>`;
}
function viewExo(id) {
  const s = D.exos.find(x => x.id === id);
  if (!s) return viewPractice();
  const qs = shuffle(s.questions).map(q => ({ type:'mcq', q: q.q, sub: q.sub || s.title, choices: shuffle(q.choices.slice()), a: q.choices[q.a], aShow: q.choices[q.a], exp: q.exp }));
  runQuiz(s.title, 'practice', qs, pct => Store.setExoScore(id, pct));
}

/* ================= Memory ================= */
function viewMemory(id) {
  let items;
  if (id === 'random') items = pick(allItems(), 8);
  else { const c = chapById(id); if (!c) return viewPractice(); items = pick(c.items, 8); }
  const cards = shuffle(items.flatMap((it, ix) => [{ pid: ix, label: it.fr }, { pid: ix, label: primaryForm(it) }]));
  let open = [], found = 0, lock = false, moves = 0;
  app.innerHTML = topbar('Memory', id==='random' ? 'practice' : 'ch/'+id, 'grid') + `
    <p class="intro">Associe chaque mot français à son équivalent darija.</p>
    <div class="mem-grid" id="mg">
      ${cards.map((c,ix) => `<button class="mem-card" data-ix="${ix}" data-pid="${c.pid}"><span class="mark">${I('star')}</span><span class="inner">${esc(c.label)}</span></button>`).join('')}
    </div>
    <div id="memdone"></div>`;
  $('#mg').querySelectorAll('.mem-card').forEach(btn => btn.onclick = () => {
    if (lock || btn.classList.contains('open') || btn.classList.contains('found')) return;
    btn.classList.add('open'); open.push(btn);
    if (open.length === 2) {
      moves++; lock = true;
      const [a,b] = open;
      if (a.dataset.pid === b.dataset.pid) {
        setTimeout(() => {
          a.classList.remove('open'); b.classList.remove('open'); a.classList.add('found'); b.classList.add('found');
          open = []; lock = false; found++;
          if (found === items.length) {
            Store.addXP(8);
            $('#memdone').innerHTML = `<div class="result-hero"><div class="end-ico">${I('trophy')}</div><h2>Bravo !</h2><p>${moves} coups · +8 XP</p><a class="btn big" href="#practice">Continuer</a></div>`;
          }
        }, 350);
      } else setTimeout(() => { a.classList.remove('open'); b.classList.remove('open'); open=[]; lock=false; }, 750);
    }
  });
}

/* ================= Profil & réglages ================= */
function viewProfile() {
  const rate = parseFloat(localStorage.getItem('dj.rate') || '0.85');
  const items = allItems(), keys = items.map(wordKey);
  app.innerHTML = topbar('Profil', null, 'user') + `
  <div class="profile-stats">
    <div class="stat"><b>${I('flame')}${Store.streak()}</b><span>jours d'affilée</span></div>
    <div class="stat"><b>${Store.xp}</b><span>XP · niveau ${Store.level()}</span></div>
    <div class="stat"><b>${Store.srsKnownCount(keys)}</b><span>mots maîtrisés / ${items.length}</span></div>
    <div class="stat"><b>${Store.lessonsDoneCount()}</b><span>chapitres lus / ${D.grammar.length}</span></div>
    <div class="stat"><b>${Store.inf.best}</b><span>record mode infini</span></div>
    <div class="stat"><b>${Store.srsDueCount(keys)}</b><span>cartes à réviser</span></div>
  </div>
  <div class="settings">
    <h3>${I('volume')}Prononciation</h3>
    <div class="card">
      <div class="setrow"><div class="lab">Voix arabe du système</div>
        ${TTS.hasArabic() ? `<span class="status-ok">${I('checkcircle')}Détectée</span>` : `<span class="status-ko">${I('xcircle')}Absente</span>`}</div>
      <div class="setrow"><div class="lab">Vitesse de lecture</div><input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${rate}" style="width:45%"></div>
      <div class="setrow"><div class="lab">Tester la voix</div>${speakBtn('السلام عليكم، كيداير؟')}</div>
    </div>
    <p class="muted">Le darija n'a pas de voix officielle : l'app lit l'écriture arabe avec la voix arabe de ton appareil. Sur iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Arabe → télécharge une voix. La phonétique (3, 7, 8, 9, 2) reste ta référence pour l'accent marocain.</p>
    <h3>${I('type')}Rappel phonétique</h3>
    <div class="card"><p><b>3</b> = 3ayn (gorge) · <b>7</b> = h expiré fort · <b>8</b> = h doux · <b>9</b> = q profond (g à Casablanca-Marrakech) · <b>2</b> = coup de glotte · <b>kh</b> = jota · <b>gh</b> = r grasseyé · <b>sh</b> = ch</p>
    <p><b>Régions :</b> ${esc(REGION_HELP)}</p></div>
    <h3>${I('smartphone')}Installer l'application</h3>
    <div class="card"><p>Sur iPhone : ouvre ce site dans Safari → bouton Partager → « Sur l'écran d'accueil ». Sur Android : menu du navigateur → « Ajouter à l'écran d'accueil ». L'app fonctionne ensuite hors-ligne.</p></div>
    <button class="btn danger" id="resetBtn">${I('trash')}Réinitialiser ma progression</button>
  </div>
  <div class="about">
    <p><b>Darija Academy</b> — version 2 · ${items.length} mots · ${D.grammar.length} chapitres de théorie · ${D.verbs.length} verbes.</p>
    <p>Les anciennes versions de l'application sont conservées dans le dossier <b>backups/</b> du dépôt.</p>
  </div>`;
  $('#rate').addEventListener('change', e => { localStorage.setItem('dj.rate', e.target.value); toast('Vitesse enregistrée'); });
  $('#resetBtn').onclick = () => { if (confirm('Effacer toute la progression (XP, révisions, scores) ?')) { Store.reset(); toast('Progression réinitialisée'); route(); } };
  bindSpeaks();
}

/* ================= Routeur ================= */
function route() {
  TTS.stop();
  const h = (location.hash || '#home').slice(1);
  const [name, arg] = h.split('/');
  window.scrollTo(0, 0);
  const tabs = { home:'home', vocab:'vocab', ch:'vocab', flash:'practice', flashcfg:'practice', quiz:'practice',
    conj:'theory', verb:'theory', conjquiz:'practice', theory:'theory', lesson:'theory',
    practice:'practice', exo:'practice', memory:'practice', inf:'practice', infcfg:'practice', profile:'profile' };
  setTab(tabs[name] || 'home');
  switch (name) {
    case 'vocab': return viewVocab();
    case 'ch': return viewChapter(arg);
    case 'flashcfg': return viewFlashCfg();
    case 'flash': return viewFlash(arg);
    case 'quiz': return viewQuiz(arg);
    case 'conj': return viewConj();
    case 'verb': return viewVerb(arg);
    case 'conjquiz': return viewConjQuiz();
    case 'theory': return viewTheory();
    case 'lesson': return viewLesson(arg);
    case 'practice': return viewPractice();
    case 'exo': return viewExo(arg);
    case 'memory': return viewMemory(arg);
    case 'infcfg': return viewInfCfg();
    case 'inf': return viewInfinity();
    case 'profile': return viewProfile();
    default: return viewHome();
  }
}
window.addEventListener('hashchange', route);
document.querySelectorAll('#bottom-nav .nav-btn').forEach(b => b.onclick = () => { location.hash = '#' + b.dataset.tab; });
I.mount();
if (!Store.flag('onboarded')) {
  $('#onboarding').classList.add('open');
  $('#ob-start').onclick = () => { Store.flag('onboarded', true); $('#onboarding').classList.remove('open'); };
}
route();
})();
