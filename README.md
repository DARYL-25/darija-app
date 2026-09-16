# Darija Academy — Apprends le marocain

Application web (PWA) pour devenir **bilingue en darija marocain** et apprendre l'**arabe standard** en parallèle, destinée aux francophones.
Phonétique : 3 = ع (3ayn) · 7 = ح (h expiré) · 8 = ه (h doux) · 9 = ق (qaf, prononcé g à Casablanca-Marrakech) · 2 = ء (hamza) · kh · gh · sh.

**Ouvrir l'application : https://daryl-25.github.io/darija-app/**

## Installer sur téléphone

- **iPhone** : ouvre le lien dans Safari → bouton Partager → « Sur l'écran d'accueil ».
- **Android** : ouvre le lien dans Chrome → menu → « Ajouter à l'écran d'accueil ».

L'application fonctionne ensuite hors-ligne.

## Activer la prononciation

Le darija n'a pas de voix officielle : l'app lit l'écriture arabe avec la voix arabe du système.
iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Arabe → télécharger une voix.

## Contenu (version 2)

- **Théorie : 60 chapitres exhaustifs** — phonétique, le nom et l'adjectif, le verbe (tous les types et formes dérivées), la phrase (questions, négation, conditionnel, subordonnées, connecteurs), régions et culture, pont darija ↔ arabe standard.
- **Vocabulaire : 2 678 mots et expressions** en 88 chapitres, dont le **lexique complet de 1 748 entrées** (50 thèmes) avec, pour chaque mot : darija phonétique, **étiquette régionale sur chaque variante** (CAS, FÈS, NRD, ORI, MRK, SOU, SAH…), arabe standard phonétique et arabe vocalisé.
- **Conjugaison : 50 verbes** (accompli, présent, futur, impératif, participe actif).
- **Flashcards paramétrables** (thèmes, recto français / darija / arabe, cartes nouvelles ou fragiles) avec révision espacée (Leitner).
- **Mode infini paramétrable** : niveau (facile → expert), sens des questions (dont arabe → français), part de conjugaison, vies, chrono, thèmes au choix ; les mots ratés reviennent plus souvent.
- Quiz, exercices de grammaire, memory, XP, niveaux, série de jours.

## Organisation des fichiers

```
index.html              structure de l'app
css/style.css           design (rouge du Maroc et or, même charte qu'Iqra Academy)
js/app.js               moteur (écrans, flashcards, mode infini, quiz)
js/icons.js             icônes vectorielles (aucun emoji dans l'interface)
js/store.js             progression (XP, série, révision espacée, réglages)
js/tts.js               synthèse vocale
data/vocab-a/b/c.js     vocabulaire thématique
data/lexique.js         lexique complet (50 thèmes, régions, arabe standard)
data/grammar*.js        théorie (60 chapitres)
data/conjugation*.js    verbes conjugués
data/exercises.js       exercices de grammaire
fonts/                  polices hébergées (hors-ligne)
backups/                anciennes versions (voir backups/README.md)
```

Voir `CHANGELOG.md` pour l'historique des versions.
