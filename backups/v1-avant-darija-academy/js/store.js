/* Progression, XP, streak, SRS — tout en localStorage. */
const Store = (() => {
  const K = 'dj.state.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(K)) || {}; }
    catch { return {}; }
  }
  let S = load();
  S.xp = S.xp || 0;
  S.days = S.days || {};          // 'YYYY-MM-DD' -> xp du jour
  S.chapters = S.chapters || {};  // chapId -> {seen:%, bestQuiz:0-100}
  S.srs = S.srs || {};            // wordKey -> {box:0-5, due:timestamp}
  S.lessons = S.lessons || {};    // lessonId -> true (lue)
  S.exos = S.exos || {};          // serieId -> best %

  function save() { localStorage.setItem(K, JSON.stringify(S)); }

  function today() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  function addXP(n) {
    S.xp += n;
    const t = today();
    S.days[t] = (S.days[t] || 0) + n;
    save();
  }

  function streak() {
    let n = 0;
    const d = new Date();
    // le streak tient si on a pratiqué aujourd'hui OU hier (journée en cours pas encore jouée)
    for (let i = 0; i < 3650; i++) {
      const key = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
      if (S.days[key]) { n++; d.setDate(d.getDate()-1); }
      else if (i === 0) { d.setDate(d.getDate()-1); } // aujourd'hui pas encore joué : on regarde hier
      else break;
    }
    return n;
  }

  function level() { return Math.floor(Math.sqrt(S.xp / 60)) + 1; }
  function levelProgress() {
    const lvl = level();
    const cur = 60 * (lvl-1) * (lvl-1), next = 60 * lvl * lvl;
    return Math.min(100, Math.round(100 * (S.xp - cur) / (next - cur)));
  }

  function chapter(id) { return S.chapters[id] || (S.chapters[id] = {seen:0, bestQuiz:0}); }
  function setChapterSeen(id, pct) { const c = chapter(id); if (pct > c.seen) { c.seen = pct; save(); } }
  function setQuizScore(id, pct) { const c = chapter(id); if (pct > c.bestQuiz) { c.bestQuiz = pct; save(); } }

  /* --- SRS Leitner : box 0..5, intervalles en jours --- */
  const INTERVALS = [0, 1, 2, 4, 8, 21];
  function srsGet(key) { return S.srs[key] || {box:0, due:0}; }
  function srsAnswer(key, ok) {
    const it = srsGet(key);
    it.box = ok ? Math.min(5, it.box + 1) : 0;
    it.due = Date.now() + INTERVALS[it.box] * 86400000;
    S.srs[key] = it; save();
  }
  function srsSeen(key) { return !!S.srs[key]; }
  function srsDueCount(keys) {
    const now = Date.now();
    return keys.filter(k => S.srs[k] && S.srs[k].due <= now).length;
  }
  function srsKnownCount(keys) {
    return keys.filter(k => srsGet(k).box >= 3).length;
  }

  function markLesson(id) { S.lessons[id] = true; save(); }
  function lessonDone(id) { return !!S.lessons[id]; }
  function setExoScore(id, pct) { if (!S.exos[id] || pct > S.exos[id]) { S.exos[id] = pct; save(); } }
  function exoScore(id) { return S.exos[id] || 0; }

  function reset() { S = {xp:0, days:{}, chapters:{}, srs:{}, lessons:{}, exos:{}}; save(); }

  return { get xp(){return S.xp;}, addXP, streak, level, levelProgress,
           chapter, setChapterSeen, setQuizScore,
           srsGet, srsSeen, srsAnswer, srsDueCount, srsKnownCount,
           markLesson, lessonDone, setExoScore, exoScore, reset };
})();
