/* Exercices de grammaire — séries manuelles. a = index de la bonne réponse dans choices. */
window.DATA.exos.push(
{
  id: "exo-phonetique", icon: "🔤", title: "Phonétique : 3, 7, 8, 9",
  questions: [
    { q: "Dans « 3afak », le chiffre 3 se prononce…", choices: ["Comme un « a » profond venant de la gorge (3ayn)", "Comme le chiffre trois", "Comme un « h » doux", "Comme un « k » claqué"], a: 0, exp: "Le 3 = 3ayn, contraction au milieu de la gorge." },
    { q: "Quelle est la différence entre 7 et 8 ?", choices: ["7 = h raclé avec force, 8 = h doux comme en anglais", "Aucune, c'est le même son", "7 = h doux, 8 = h raclé", "8 ne se prononce jamais"], a: 0, exp: "7lib (lait) se racle ; 8ada (celui-ci) est doux comme « hello »." },
    { q: "Le 9 de « 9a8wa » (café) se prononce…", choices: ["Un « k » profond claqué au fond du palais", "Comme le chiffre neuf", "Comme un « g »", "Comme un « q » français ordinaire"], a: 0, exp: "Le 9af est sec, percutant, au fond du palais." },
    { q: "Comment un local prononce-t-il « Kidayer » ?", choices: ["Kdayr — en mangeant les voyelles courtes", "Ki-da-yer, bien articulé", "Kidayère à la française", "Kidaïr avec l'accent sur le i"], a: 0, exp: "Le secret de la vitesse : supprime les voyelles courtes !" },
    { q: "« Kh » (comme dans khouya) se prononce comme…", choices: ["La jota espagnole / le ch allemand de « Bach »", "Un k suivi d'un h", "Le ch de « chat »", "Un r roulé"], a: 0, exp: "Ça gratte le haut de la gorge : khouya, khobz, khedma." },
    { q: "« Gh » (comme dans ghali) se prononce comme…", choices: ["Le R grasseyé français, un peu plus profond", "G + H séparés", "Un g dur", "La jota espagnole"], a: 0, exp: "Ghali (cher) = presque « rali » avec le r parisien." },
    { q: "Le 2 dans « su2al » (question) représente…", choices: ["Un coup de glotte (hamza), arrêt net du son", "Le chiffre deux", "Un double s", "Un accent tonique"], a: 0, exp: "La hamza = la pause de « oh-oh » en français." },
    { q: "Pourquoi dit-on « S-sbitar » et jamais « L-sbitar » ?", choices: ["S est une lettre solaire : le L est avalé et le S doublé", "C'est une exception sans règle", "Le L est interdit devant les noms de lieux", "C'est un emprunt au français"], a: 0, exp: "Lettres solaires (t, d, r, z, s, sh, n…) : Sh-shems, R-rajel, D-dar." },
    { q: "Confondre 7emmam et 7mam, c'est confondre…", choices: ["Le bain et les pigeons", "Le bain et le four", "La maison et la mosquée", "Chaud et froid"], a: 0, exp: "La gémination (consonne doublée) change le sens : appuie sur le m de 7emmam !" }
  ]
},
{
  id: "exo-etre-avoir", icon: "🧱", title: "Être, avoir & états",
  questions: [
    { q: "Comment dit-on « je suis content » ?", choices: ["Ana fer7an", "Ana kan fer7an", "Kan-koun fer7an", "Rani kent fer7an"], a: 0, exp: "Pas de verbe « être » au présent : pronom + adjectif." },
    { q: "« Elle est grande » se dit…", choices: ["8iya kbira", "8iya kbir", "8uwa kbira", "Kant kbira"], a: 0, exp: "8iya (elle) + adjectif au féminin (-a) : kbira." },
    { q: "« J'ai une voiture » se dit…", choices: ["3endi tomobil", "Ana tomobil", "Fiya tomobil", "Khasni tomobil"], a: 0, exp: "3end + pronom = avoir : 3endi = j'ai (litt. « chez moi »)." },
    { q: "« J'ai faim » se dit…", choices: ["Fiya j-ju3", "3endi j-ju3", "Ana ju3", "Khasni j-ju3"], a: 0, exp: "Les états physiques utilisent Fiya (« en moi ») : fiya j-ju3, fiya l-3tesh…" },
    { q: "« Tu as sommeil ? » se dit…", choices: ["Wesh fik n-n3as ?", "Wesh 3endek n-n3as ?", "Wesh nta n3as ?", "Wesh kat-n3as ?"], a: 0, exp: "Fik = « en toi ». Les états sont EN nous, pas possédés." },
    { q: "« Je dois partir » se dit…", choices: ["Khasni n-mshi", "3endi n-mshi", "Fiya n-mshi", "Bghit mshit"], a: 0, exp: "Khas + pronom + verbe sans ka- : khasni n-mshi." },
    { q: "« Il a un problème » se dit…", choices: ["3endo mushkil", "3end8a mushkil", "Fi8 mushkil", "8uwa mushkil"], a: 0, exp: "3endo = il a (o = lui). 3end8a = elle a." },
    { q: "« Je suis fatiguée » (une femme) se dit…", choices: ["Ana 3iyyana", "Fiya 3iyyan", "Ana 3iyyan", "3endi 3iya"], a: 0, exp: "Fatigué = adjectif classique : 3iyyan (m) / 3iyyana (f)." },
    { q: "« Nous étions à Rabat » se dit…", choices: ["Kenna f R-rbat", "7na f R-rbat", "Kanu f R-rbat", "Kent f R-rbat"], a: 0, exp: "Au passé, « être » existe : kent, kenti, kan, kant, kenna, kentu, kanu." },
    { q: "« J'aurais dû venir plus tôt » se dit…", choices: ["Kan khasni n-ji bekri", "Khasni jit bekri", "Kent n-ji bekri", "Koun khasni bekri"], a: 0, exp: "Kan + khasni = j'aurais dû." }
  ]
},
{
  id: "exo-conjugaison", icon: "⚙️", title: "Conjugaison : les 3 temps",
  questions: [
    { q: "« Je comprends » (habitude, présent) se dit…", choices: ["Kan-f8em", "F8emt", "Gha n-f8em", "N-f8em"], a: 0, exp: "Présent = ka + n (je) + verbe : kan-f8em." },
    { q: "« Elle a compris » se dit…", choices: ["F8mat", "F8emt", "F8emti", "Kat-f8em"], a: 0, exp: "Accompli 3e pers. féminin : terminaison -at → f8mat." },
    { q: "« Nous comprendrons » se dit…", choices: ["Gha n-f8mu", "Kan-f8mu", "F8emna", "Gha y-f8mu"], a: 0, exp: "Futur = gha + inaccompli sans ka- : gha n-f8mu." },
    { q: "« Tu bois (f) » se dit…", choices: ["Kat-sherbi", "Kat-shreb", "Kan-sherbi", "Sherbi"], a: 0, exp: "Nti : kat- + verbe + -i → kat-sherbi." },
    { q: "« Ils travaillent » se dit…", choices: ["Kay-khedmu", "Kat-khedmu", "Khedmu", "Kay-khdem"], a: 0, exp: "8uma : kay- + verbe + -u → kay-khedmu." },
    { q: "À Marrakech, « je comprends » se dit souvent…", choices: ["Tan-f8em", "Dan-f8em", "Kan-f8em uniquement", "Lan-f8em"], a: 0, exp: "Préfixe ta- à Marrakech et Fès : tan-f8em = kan-f8em." },
    { q: "« J'ai oublié » (verbe faible nsa) se dit…", choices: ["Nsit", "Nsat", "Nsa", "Kan-nsa"], a: 0, exp: "Verbes faibles : le a final devient i → nsit, nsiti, nsa, nsat…" },
    { q: "« Ils ont acheté » (shra) se dit…", choices: ["Shraw", "Shritu", "Shrina", "Shrat"], a: 0, exp: "8uma avec verbe faible : terminaison -aw → shraw." },
    { q: "« Va ! » (impératif de msha, à un homme)…", choices: ["Sir !", "Mshi !", "Msha !", "Ymshi !"], a: 0, exp: "Impératif irrégulier : Sir/Siri/Siru. Jamais « mshi » !" },
    { q: "« Je mangeais » (imparfait) se dit…", choices: ["Kent kan-akul", "Klit", "Kan-akul", "Kent klit"], a: 0, exp: "Kan au passé + inaccompli : kent kan-akul." },
    { q: "« Viens ! » se dit…", choices: ["Aji !", "Ja !", "Ji !", "Tji !"], a: 0, exp: "Impératif irrégulier de ja : Aji ! (Ajiw au pluriel)." },
    { q: "« Ils dorment (en ce moment) » se dit…", choices: ["8uma na3sin", "8uma kay-n3su", "8uma n3su", "8uma gha y-n3su"], a: 0, exp: "Action d'état en cours = participe actif : na3es/na3sa/na3sin. Kay-n3su = ils dorment (habituellement)." }
  ]
},
{
  id: "exo-negation-questions", icon: "🚫", title: "Négation & questions",
  questions: [
    { q: "« Je ne peux pas » se dit…", choices: ["Ma kan-9der-sh", "Kan-9der-sh ma", "La kan-9der", "Ma kan-9der"], a: 0, exp: "La négation encadre : ma + verbe + sh." },
    { q: "« Je n'ai rien vu » se dit…", choices: ["Ma sheft walu", "Ma sheft-sh walu", "Sheft ma walu", "Walu ma sheft-sh"], a: 0, exp: "Avec walu (rien), pas de -sh !" },
    { q: "« Je ne suis jamais allé à Fès » se dit…", choices: ["3emmri ma mshit l Fes", "Ma mshit-sh 3emmri l Fes", "Ma jamais mshit l Fes", "3emmri mshit l Fes"], a: 0, exp: "3emmer + pronom + ma + passé, sans -sh : 3emmri ma mshit." },
    { q: "« Je n'ai pas encore mangé » se dit…", choices: ["Mazal ma klit", "Mazal ma klit-sh", "Ma klit-sh mazal", "Mazal kan-akul"], a: 0, exp: "Mazal ma + accompli, sans -sh : mazal ma klit." },
    { q: "« Ce n'est pas vrai » se dit…", choices: ["Mashi s7i7", "Ma s7i7-sh", "La s7i7", "S7i7 walu"], a: 0, exp: "Pour nier un adjectif/nom : mashi (pas ma…sh)." },
    { q: "« Est-ce que tu es marocain ? » se dit…", choices: ["Wesh nta mghribi ?", "Shkun nta mghribi ?", "Fin nta mghribi ?", "Kifash nta mghribi ?"], a: 0, exp: "Wesh = la particule interrogative « est-ce que »." },
    { q: "« Où vas-tu (aller) ? » se dit…", choices: ["Fin gha temshi ?", "Imta gha temshi ?", "Shkun gha temshi ?", "Sh7al gha temshi ?"], a: 0, exp: "Fin = où. Imta = quand. Shkun = qui." },
    { q: "« Pourquoi as-tu fait ça ? » se dit…", choices: ["3lash derti 8akkak ?", "Kifash derti 8akkak ?", "Fu9ash derti 8akkak ?", "Bash derti 8akkak ?"], a: 0, exp: "3lash = pourquoi (3layash au Nord, 3lah à Oujda)." },
    { q: "« Ne le lui dis pas ! » se dit…", choices: ["Ma t-goul8a-sh lu !", "Ma goul8a lu-sh !", "La t-goul8a lu !", "T-goul8a-sh ma lu !"], a: 0, exp: "Ma + t-goul + 8a (la chose) + sh, puis lu (à lui)." }
  ]
},
{
  id: "exo-possession", icon: "🔑", title: "Possession & démonstratifs",
  questions: [
    { q: "« Ma voiture » se dit (standard)…", choices: ["T-tomobil dyali", "T-tomobil nta3i", "T-tomobil deali", "Tomobilti"], a: 0, exp: "Dyal + i = dyali. (Nta3i à Oujda, deali à Tanger — tout est correct localement !)" },
    { q: "« Le livre de l'homme » se dit…", choices: ["L-ktab dyal r-rajel", "L-ktab men r-rajel", "Ktab r-rajel dyal", "L-ktab l r-rajel"], a: 0, exp: "Possession entre noms : X dyal Y." },
    { q: "À Tanger, « ma maison » peut se dire…", choices: ["D-dar deali", "D-dar nta3i", "D-dar mata3i", "Dari dyal"], a: 0, exp: "Le Nord utilise de/deal (influence espagnole)." },
    { q: "« Ce livre » se dit…", choices: ["8ad l-ktab", "8ada ktab", "8adi l-ktab", "8ad ktab"], a: 0, exp: "8ad + nom TOUJOURS défini : 8ad l-ktab. (8ada ktab = c'est un livre.)" },
    { q: "« Cette voiture-là (au loin) est superbe » se dit…", choices: ["8adik t-tomobil ghzala", "8adi t-tomobil ghzala", "8adak t-tomobil ghzala", "8aduk t-tomobil ghzala"], a: 0, exp: "Féminin éloigné : 8adik. (8adak = masculin, 8aduk = pluriel.)" },
    { q: "« Son téléphone (à elle) » se dit…", choices: ["T-tilifun dyal8a", "T-tilifun dyalo", "T-tilifun dyal8om", "T-tilifun dyalek"], a: 0, exp: "dyal8a = à elle · dyalo = à lui." },
    { q: "« Mon frère » se dit…", choices: ["Khuya", "Khu dyali", "Dyali khu", "L-khu"], a: 0, exp: "La famille proche prend le suffixe direct : khuya, khti, weldi, bnti." },
    { q: "« Fais ce que tu veux » se dit…", choices: ["Dir lli bghiti", "Dir ash bghiti", "Dir shnu bghiti", "Dir dakshi bghit"], a: 0, exp: "Lli = ce que/celui qui : dir lli bghiti." }
  ]
},
{
  id: "exo-subordonnees", icon: "🧩", title: "Bash, ila, koun & cie",
  questions: [
    { q: "« Je suis venu pour te voir » se dit…", choices: ["Jit bash n-shoufek", "Jit bash kan-shoufek", "Jit 7it n-shoufek", "Jit belli n-shoufek"], a: 0, exp: "Bash + inaccompli SANS ka- : bash n-shoufek." },
    { q: "« Lave-toi les mains avant de manger »…", choices: ["Ghsel yeddik 9bel ma t-akul", "Ghsel yeddik 9bel ma kat-akul", "Ghsel yeddik be3d ma t-akul", "Ghsel yeddik bla ma t-akul"], a: 0, exp: "9bel ma + inaccompli sans ka-." },
    { q: "« Après avoir mangé, nous sommes sortis »…", choices: ["Be3d ma klina, kherjna", "Be3d ma n-aklu, kherjna", "9bel ma klina, kherjna", "Bash klina, kherjna"], a: 0, exp: "Be3d ma + ACCOMPLI (l'action est finie) : be3d ma klina." },
    { q: "« Il est parti sans rien dire »…", choices: ["Msha bla ma y-goul walu", "Msha bla ma gal walu", "Msha bla ma kay-goul walu", "Msha bash ma y-goul walu"], a: 0, exp: "Bla ma + inaccompli sans ka-." },
    { q: "« Si tu vas au souk, achète du pain » : quel temps après ILA ?", choices: ["Le passé : Ila mshiti l-souk, shri l-khobz", "Le présent : Ila kat-mshi l-souk…", "Le futur : Ila gha temshi l-souk…", "L'impératif : Ila sir l-souk…"], a: 0, exp: "Ila est TOUJOURS suivi de l'accompli, même pour le futur !" },
    { q: "« Si j'avais su, je serais venu » se dit…", choices: ["Koun 3reft, koun jit", "Ila 3reft, jit", "Koun kan-3ref, koun kan-ji", "Ila 3reft, koun jit"], a: 0, exp: "L'irréel : koun + passé… koun + passé." },
    { q: "« Il m'a dit qu'il est malade » se dit…", choices: ["Gal lya belli 8uwa mrid", "Gal lya bash 8uwa mrid", "Gal lya lli 8uwa mrid", "Gal lya ila 8uwa mrid"], a: 0, exp: "Discours indirect : belli (bi-anna au Nord)." },
    { q: "« Au lieu de dormir, travaille ! » se dit…", choices: ["F 3iwed ma t-n3es, khdem !", "F 3iwed ma kat-n3es, khdem !", "Bla ma t-n3es, khdem !", "Be3d ma t-n3es, khdem !"], a: 0, exp: "F 3iwed ma + inaccompli sans ka-." },
    { q: "« L'homme qui est venu hier » se dit…", choices: ["R-rajel lli ja l-bare7", "R-rajel belli ja l-bare7", "R-rajel shkun ja l-bare7", "R-rajel ash ja l-bare7"], a: 0, exp: "Lli = le relatif universel (qui/que/dont)." }
  ]
},
{
  id: "exo-regions", icon: "🗺️", title: "Quiz des régions",
  questions: [
    { q: "À Oujda, « maintenant » se dit…", choices: ["Drok", "Daba", "Daba daba", "Deghya"], a: 0, exp: "Drok = le marqueur oriental par excellence." },
    { q: "À Tanger, une carotte s'appelle…", choices: ["J3da", "Khizzu", "Zrodiya", "Sanaria"], a: 0, exp: "Khizzu (standard), j3da (Nord), zrodiya (Oriental)." },
    { q: "Le préfixe du présent à Marrakech et Fès est souvent…", choices: ["Ta-", "Ka-", "Da-", "La-"], a: 0, exp: "Tan-f8em au lieu de kan-f8em." },
    { q: "« Comment ça va ? » typique du Nord (Tanger/Tétouan) :", choices: ["Shni kat-3awed ?", "Kidayer ?", "Rak mli7 ?", "Kidayr a sidi ?"], a: 0, exp: "« Qu'est-ce que tu racontes ? » — pure signature chamalia." },
    { q: "À Oujda, « l'argent » se dit souvent…", choices: ["Dra8em", "Flous", "Sordi", "Bznas"], a: 0, exp: "Dra8em (influence algérienne). Flous = standard." },
    { q: "Un Tanjaoui peut appeler sa voiture…", choices: ["Coche", "Karrossa", "Tonobile", "Watura"], a: 0, exp: "Coche = de l'espagnol. L'héritage hispanique du Nord !" },
    { q: "La possession à Oujda utilise souvent…", choices: ["Nta3", "Dyal", "De", "Mta3"], a: 0, exp: "Nta3i = à moi (Oriental). Dyal = standard. De = Nord." },
    { q: "À Marrakech, on ponctue ses phrases avec…", choices: ["A sidi", "A wili", "Ay", "Aji"], a: 0, exp: "Le parler du Sud est chantant et ponctué de « a sidi »." },
    { q: "« Le chat » à Oujda se dit…", choices: ["Gett", "Mesh", "9et", "Bess"], a: 0, exp: "Mesh (standard), 9et (Nord), gett (Oriental)." },
    { q: "Dans l'extrême Sud, « beaucoup » peut se dire…", choices: ["Yasser", "Bzaf", "Ktir", "Shwiya"], a: 0, exp: "Yasser — influence sahraouie/algérienne du Sud-Est." },
    { q: "« Deux » à Oujda se dit…", choices: ["Zouj", "Juj", "Tnin", "Zoz"], a: 0, exp: "Zouj à l'Oriental, juj au Centre." },
    { q: "« Que » (discours indirect) au Nord se dit…", choices: ["Bi-anna", "Belli", "Bash", "Lli"], a: 0, exp: "Bi-anna/Biyan à Tanger-Tétouan, belli ailleurs." }
  ]
},
{
  id: "exo-situations", icon: "🎬", title: "Situations réelles",
  questions: [
    { q: "Le taxi n'a pas allumé son compteur. Tu dis…", choices: ["Kheddem l-kuntur 3afak", "Sh7al l-kuntur ?", "W9ef 8na 3afak", "Sir b shwiya"], a: 0, exp: "« Fais marcher le compteur svp » — le réflexe anti-arnaque n°1." },
    { q: "Le vendeur dit « miyat riyal ». Ça fait…", choices: ["5 dirhams", "100 dirhams", "20 dirhams", "50 dirhams"], a: 0, exp: "100 rials ÷ 20 = 5 DH. Toujours diviser par 20 !" },
    { q: "On te sert un excellent tajine. Tu dis au cuisinier…", choices: ["Tbarkellah 3lik, bnin bzaf !", "Ghali bzaf !", "Yeddo twila !", "Bezzaf 3lik !"], a: 0, exp: "Compliment + protection du mauvais œil : tbarkellah 3lik !" },
    { q: "Ton hôte insiste : « Kul ! Zid kul ! ». Tu es plein. Tu réponds…", choices: ["Safi, shbe3t l-7emdu l-illah", "La, ma bghit-sh", "Khellini 3lik", "Baraka men l-makla"], a: 0, exp: "Refus poli et pieux = la seule sortie honorable !" },
    { q: "Tu entres chez quelqu'un. Le premier réflexe :", choices: ["7iyyed sbbatek (enlever tes chaussures)", "Demander le wifi", "T'asseoir directement au salon", "Serrer la main de tout le monde sans rien dire"], a: 0, exp: "Se déchausser = respect de base. Sinon : 7shuma !" },
    { q: "Quelqu'un éternue et dit « L-7emdu l-illah ». Tu réponds…", choices: ["Rhemek Allah / Llah yer7emek", "Beslama", "InshaAllah", "Mabrouk"], a: 0, exp: "On répond par une bénédiction." },
    { q: "Tu veux dire au revoir à ton ami qui part travailler…", choices: ["Llah y-3awnek", "Llah yer7emu", "3la slamtek", "Tbarkellah"], a: 0, exp: "« Que Dieu t'aide » — parfait pour quelqu'un qui va travailler." },
    { q: "Le chauffeur roule trop vite. Tu dis…", choices: ["Sir b shwiya 3afak !", "Zid b z-zerba !", "Deghya deghya !", "Nishan !"], a: 0, exp: "B shwiya = doucement. (Zid b z-zerba = l'inverse !)" },
    { q: "Ton ami arrive avec 1h de retard. Tu lances (ironique)…", choices: ["3la slamtek !", "Mabrouk z-ziyada !", "B-s-se7a !", "Llah y-shafi !"], a: 0, exp: "« Enfin te voilà ! » — parfait pour taquiner un retardataire." },
    { q: "Tu quittes le gardien de voitures. Tu lui donnes…", choices: ["2-3 dirhams en disant « Hak a khuya »", "Rien, c'est gratuit", "20 dirhams obligatoires", "Ta carte bancaire"], a: 0, exp: "Le 3essas / moul l-gilet vit de ces pièces. Hak = tiens !" },
    { q: "Au téléphone, on te demande « Shkun m3aya ? ». On veut savoir…", choices: ["Qui est à l'appareil", "Où tu es", "Comment tu vas", "Quelle heure il est"], a: 0, exp: "Litt. « qui est avec moi ? » = qui parle ?" },
    { q: "Tu racontes ton futur voyage. Tu conclus par…", choices: ["InshaAllah", "Walakin", "B-zzez", "Safi"], a: 0, exp: "Jamais de projet futur sans InshaAllah !" }
  ]
},
{
  id: "exo-faux-amis", icon: "⚠️", title: "Pièges & faux-amis",
  questions: [
    { q: "« Je t'aime beaucoup » se dit…", choices: ["Kan-bghik bzaf", "Kan-bghik mzyan", "Kan-bghik shwiya", "Kan-bghik nishan"], a: 0, exp: "Bzaf = intensité. « Kan-bghik mzyan » fait rire les Marocains !" },
    { q: "« Je cherche mes clés » se dit…", choices: ["Kan-9elleb 3la s-swaret", "Kan-9elleb s-swaret", "Kan-shuf s-swaret", "Kan-l9a s-swaret"], a: 0, exp: "9elleb SEUL = retourner/fouiller. Chercher = 9elleb 3LA." },
    { q: "« Yeddo twila » signifie…", choices: ["C'est un voleur", "Il a des relations haut placées", "Il est généreux", "Il est grand"], a: 0, exp: "Faux-ami total avec le français « avoir le bras long » !" },
    { q: "« Limoun » désigne…", choices: ["L'orange", "Le citron", "La lime", "Le pamplemousse"], a: 0, exp: "Le citron = 7amed. 3asir limoun = jus d'orange !" },
    { q: "Dire « Sir ! » sec à quelqu'un revient à dire…", choices: ["« Dégage ! »", "« Vas-y je t'en prie »", "« Bonne route »", "« D'accord »"], a: 0, exp: "Toujours adoucir : Sir 3afak, Sir b shwiya." },
    { q: "Pendant Ramadan, « l-ftour » désigne…", choices: ["La rupture du jeûne au coucher du soleil", "Le petit-déjeuner du matin", "Le déjeuner", "Le goûter"], a: 0, exp: "Le reste de l'année, l-ftour = petit-déjeuner. Contexte !" },
    { q: "« Kayna sh-shta » veut dire…", choices: ["Il pleut", "C'est l'hiver", "Il fait froid", "Il neige"], a: 0, exp: "Sh-shta = la pluie (et sh-shtwa = l'hiver)." },
    { q: "« C'est bien » se dit…", choices: ["8adshi mzyan", "C'est mzyan", "8uwa mzyan bzaf", "Kayn mzyan"], a: 0, exp: "Pas de « c'est » neutre : 8adshi mzyan (cette chose est bien)." },
    { q: "« Wa3er » peut vouloir dire…", choices: ["Génial OU très difficile, selon le contexte", "Uniquement difficile", "Uniquement génial", "Cher"], a: 0, exp: "Film wa3er = génial. Imti7an wa3er = très dur. Le contexte décide !" },
    { q: "« R-rizo 3iyyan » signifie…", choices: ["Le réseau est mauvais", "Le réseau est fatigué de toi", "Le riz est cuit", "La connexion est excellente"], a: 0, exp: "Litt. « le réseau est fatigué » — expression 100% locale." }
  ]
}
);
