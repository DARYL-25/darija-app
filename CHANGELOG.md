# Journal des versions — Darija Academy

## v2 — 16 septembre 2026 · « Darija Academy »
- **Nouveau design** : même charte qu'Iqra Academy (cartes vitrées, boutons 3D, polices Fredoka One / Baloo 2 / Noto Naskh Arabic hébergées dans l'app), en **rouge du Maroc et or**, vert pour la réussite.
- **Renommage** : Darija → Darija Academy (titre, manifest, écran d'accueil, nouveau logo : rond rouge, étoile verte, liseré or).
- **Aucun emoji** dans l'interface : bibliothèque de 80 icônes vectorielles (`js/icons.js`) ; tous les emojis des données ont été retirés.
- **Théorie entièrement étoffée : 60 chapitres** (au lieu de 28), organisés en 8 parties :
  - Phonétique & bases (+ voyelles et accent, gémination et emphatiques, écrire le darija en arabe)
  - Grammaire essentielle
  - **Le nom & l'adjectif** (nouveau) : genre, pluriels brisés, annexion et possessifs, adjectifs, nombres avec les noms, prépositions + pronoms
  - Conjugaison (+ verbes creux, sourds et hamzés, formes dérivées, participe passif, temps composés avec kan et ra-, auxiliaires modaux, verbes de mouvement)
  - **La phrase** (nouveau) : ordre des mots, toutes les questions, négation approfondie, conditionnel, subordonnées de temps/cause/but, connecteurs, exclamations et vocatif, temps et durée
  - Niveau avancé
  - Régions & culture (+ formules religieuses, régions en détail, codes d'une visite, registres et argot, expressions idiomatiques, quantités et courses)
  - **Darija ↔ arabe standard** (nouveau) : correspondances de sons, grammaire comparée
- **Lexique intégré** : les 1 748 entrées du lexique PDF (50 thèmes) ajoutées au vocabulaire, avec **une étiquette régionale sur chaque variante**, l'arabe standard phonétique et l'arabe vocalisé. Total : **2 678 mots**. Notation harmonisée (9 = ق, 8 = ه).
- **Conjugaison** : 50 verbes (24 nouveaux : 3ref, dkhel, khrej, rje3, Tle3, 8beT, ghsel, lbes, Tbekh, Dreb, 3awen, t3ellem, khelleS, sewwel, jerreb, 3iyyeT, jab, fa9, khaf, 7ell, sedd, bda, b9a, stenna).
- **Flashcards paramétrables** : choix des thèmes (groupes ou chapitres), recto français / darija / arabe, toutes les cartes / nouvelles / fragiles, 10-20-40 cartes.
- **Mode infini paramétrable** : niveau facile / moyen / difficile / expert, sens des questions (français ↔ darija, arabe → français, français → arabe, arabe standard phonétique), part de conjugaison, vies (3 / 5 / illimitées), chrono (aucun / 15 s / 8 s), thèmes ; mots fragiles pondérés ; record de série, statistiques dans Entraînement et Profil.
- Recherche du vocabulaire en français, darija, arabe et arabe standard ; toute variante régionale acceptée dans les réponses écrites.
- Navigation basse à 5 onglets : Accueil, Vocabulaire, Théorie, Entraînement, Profil.
- `sw.js` : cache `darija-v2` avec les polices et les nouveaux fichiers.
- v1 sauvegardée dans `backups/v1-avant-darija-academy/`.

## v1 — version précédente « Darija »
- Design rouge/blanc, 930 mots en 38 chapitres, 28 leçons, 26 verbes, flashcards, quiz, memory.
- Sauvegardée dans `backups/v1-avant-darija-academy/`.
