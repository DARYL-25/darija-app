/* Voiceover — synthèse vocale.
   Le darija n'a pas de voix TTS dédiée : on lit l'écriture arabe avec une voix
   arabe du système (sur iPhone : Réglages > Accessibilité > Contenu énoncé > Voix > Arabe).
   La phonétique chat (3,7,8,9,2) sert de guide visuel ; l'audio suit le texte arabe. */
const TTS = (() => {
  let voices = [];
  let arVoice = null;
  let frVoice = null;

  function refresh() {
    voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    // Préférer une voix arabe (le maghrébin n'existe pas ; ar-001/ar-SA reste proche pour l'entraînement de l'oreille)
    const prefs = ['ar-MA', 'ar-001', 'ar-SA', 'ar-EG', 'ar'];
    arVoice = null;
    for (const p of prefs) {
      arVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(p.toLowerCase()));
      if (arVoice) break;
    }
    frVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('fr'));
  }

  if (window.speechSynthesis) {
    refresh();
    speechSynthesis.onvoiceschanged = refresh;
  }

  function hasArabic() { if (!voices.length) refresh(); return !!arVoice; }

  function speak(item, opts = {}) {
    if (!window.speechSynthesis) return false;
    speechSynthesis.cancel();
    if (!voices.length) refresh();
    const text = (typeof item === 'string') ? item : (item.ar || null);
    if (!text) return false;
    const u = new SpeechSynthesisUtterance(text);
    if (arVoice) { u.voice = arVoice; u.lang = arVoice.lang; }
    else { u.lang = 'ar'; }
    u.rate = opts.rate ?? parseFloat(localStorage.getItem('dj.rate') || '0.85');
    u.pitch = 1;
    if (opts.onend) u.onend = opts.onend;
    if (opts.onstart) u.onstart = opts.onstart;
    speechSynthesis.speak(u);
    return true;
  }

  function speakFr(text, opts = {}) {
    if (!window.speechSynthesis) return false;
    const u = new SpeechSynthesisUtterance(text);
    if (frVoice) { u.voice = frVoice; u.lang = frVoice.lang; } else u.lang = 'fr-FR';
    u.rate = opts.rate ?? 1;
    speechSynthesis.speak(u);
    return true;
  }

  function stop() { if (window.speechSynthesis) speechSynthesis.cancel(); }

  return { speak, speakFr, stop, hasArabic };
})();
