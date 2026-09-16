/* Théorie — partie 2 : phonétique avancée, le nom & l'adjectif, le verbe en profondeur.
   Notation : 3=ع · 7=ح · 8=ه · 9=ق (g à Casablanca-Marrakech) · 2=ء · kh=خ · gh=غ · sh=ش */
window.DATA.grammar.push(
{
  id: "voyelles-accent", icon: "type", title: "Voyelles, schwa et accent", sub: "Pourquoi « ktab » n'a qu'une voyelle", cat: "Phonétique & bases",
  body: `
<p>Le darija a <b>trois voyelles longues</b> (a, i, u) et une voyelle ultra-courte, le <b>schwa</b> (noté <b>e</b>), qui est à peine prononcé. C'est cette voyelle avalée qui donne au darija son rythme percussif.</p>
<h3>Les voyelles longues</h3>
<table class="gtable"><tr><th>Voyelle</th><th>Son</th><th>Exemples</th></tr>
<tr><td><b>a</b></td><td>« a » ouvert, long (comme « pâte »). Près d'une emphatique ou d'un 9, il devient sombre, vers « â/o »</td><td><b>dar</b> (maison), <b>bab</b> (porte), <b>9al</b> (il a dit)</td></tr>
<tr><td><b>i</b></td><td>« i » long, comme « vie »</td><td><b>bir</b> (puits), <b>kbir</b> (grand), <b>sghir</b> (petit)</td></tr>
<tr><td><b>u</b></td><td>« ou » long, comme « roue ». S'écrit aussi « ou » ou « o »</td><td><b>sug</b>/<b>suq</b> (marché), <b>ktub</b> (livres), <b>8uwa</b> (lui)</td></tr></table>
<h3>Le schwa « e » : la voyelle qui disparaît</h3>
<p>Entre deux consonnes, le darija glisse une voyelle minuscule, comme le « e » de « petit » prononcé vite : <b>ptit</b>. On l'écrit <b>e</b> mais on la prononce à peine.</p>
<div class="ex"><div class="txt"><div class="da-line">kteb → « ktb » · sherbat → « shrbat » · khedma → « khdma »</div><div class="fr-line">il a écrit · elle a bu · travail — le e ne s'entend presque pas</div></div></div>
<div class="warn">Un Français qui dit « ké-teb », « chér-bat » avec un vrai « é » est repéré immédiatement. Le schwa n'est jamais accentué et jamais long.</div>
<h3>Le schwa se déplace !</h3>
<p>Quand on ajoute une terminaison qui commence par une voyelle, le schwa saute d'une syllabe. C'est la règle qui explique <b>kteb → ketbat</b> et <b>shreb → sherbu</b>.</p>
<table class="gtable"><tr><th>Base</th><th>+ voyelle</th><th>Résultat</th></tr>
<tr><td>kteb (il a écrit)</td><td>+ at (elle)</td><td><b>ketbat</b> (pas « ktebat »)</td></tr>
<tr><td>shreb (il a bu)</td><td>+ u (ils)</td><td><b>sherbu</b></td></tr>
<tr><td>khdem (il a travaillé)</td><td>+ u</td><td><b>khedmu</b></td></tr>
<tr><td>ka-n-kteb (j'écris)</td><td>+ u (nous)</td><td><b>ka-n-ketbu</b></td></tr>
<tr><td>rajel (homme)</td><td>+ i (mon)</td><td><b>rajli</b> (mon mari)</td></tr></table>
<h3>Les diphtongues « aw » et « ay »</h3>
<p><b>aw</b> se prononce « aou » : <b>lawn</b> (couleur), <b>dawa</b> (médicament), <b>khawi</b> (vide). <b>ay</b> se prononce « aï » : <b>3ayn</b> (œil), <b>khayef</b> (effrayé), <b>bayt</b> (chambre, au Nord).</p>
<h3>L'accent tonique</h3>
<p>L'accent tombe en général sur la <b>dernière syllabe longue</b> du mot : ki<b>DAY</b>er, ma<b>ghRI</b>bi, mez<b>YAN</b>. Une syllabe avec schwa n'est jamais accentuée. Les terminaisons de personne (-t, -ti, -na) n'attirent pas l'accent : <b>KTEBt</b>, <b>KTEBti</b>.</p>
<div class="tip">Exercice : dis « mezyan », « bezzaf », « makaynsh » en frappant du doigt sur la syllabe accentuée. Tu dois sentir que le mot « tombe » à la fin.</div>
<h3>Le « o » : une variante du « u »</h3>
<p>Le son « o » n'existe pas vraiment : c'est un « u » coloré par une consonne emphatique ou par 9, kh, gh, 7, 3. On écrit indifféremment <b>tomobil</b>/<b>tumubil</b>, <b>9ahwa</b>/<b>9a8wa</b>, <b>kolshi</b>/<b>kulshi</b>. À l'oreille, c'est entre les deux.</p>`
},
{
  id: "gemination-emphatiques", icon: "type", title: "Gémination, emphatiques & assimilation", sub: "7emmam ≠ 7mam, dar ≠ Dar", cat: "Phonétique & bases",
  body: `
<h3>1. La gémination (consonne doublée)</h3>
<p>Une consonne écrite deux fois se prononce <b>deux fois plus longtemps</b>, avec une tenue. Ce n'est pas un détail : la gémination change le sens et sert à fabriquer des mots.</p>
<table class="gtable"><tr><th>Simple</th><th>Géminée</th></tr>
<tr><td><b>7mam</b> — pigeons</td><td><b>7emmam</b> — bain public</td></tr>
<tr><td><b>kteb</b> — il a écrit</td><td><b>ketteb</b> — il a fait écrire</td></tr>
<tr><td><b>khdem</b> — il a travaillé</td><td><b>kheddem</b> — il a fait travailler / embauché</td></tr>
<tr><td><b>9ra</b> — il a lu, étudié</td><td><b>9erra</b> — il a enseigné</td></tr>
<tr><td><b>jbel</b> — montagne</td><td><b>jebbel</b> — il a rendu montagneux… (rare) — mais <b>mjebbed</b> = tendu</td></tr></table>
<p>Ce mécanisme est la <b>forme II</b> du verbe (voir le chapitre sur les formes dérivées) : doubler la consonne du milieu donne un sens causatif ou intensif.</p>
<div class="tip">Pour tenir une géminée, dis « 7em-mam » comme s'il y avait une micro-pause au milieu, puis accélère.</div>
<h3>2. Les consonnes emphatiques</h3>
<p>Quatre consonnes ont une version « lourde », prononcée avec l'arrière de la langue abaissé et la gorge élargie. Elles assombrissent la voyelle voisine (« a » devient presque « o »). L'écriture chat ne les distingue pas toujours ; nous les notons avec une majuscule quand c'est utile.</p>
<table class="gtable"><tr><th>Légère</th><th>Emphatique</th><th>Paire minimale</th></tr>
<tr><td>s (س)</td><td><b>S</b> (ص)</td><td><b>sif</b> (épée) / <b>Sif</b> (été) · <b>sla</b> ? / <b>Sla</b> (prière)</td></tr>
<tr><td>d (د)</td><td><b>D</b> (ض)</td><td><b>dar</b> (maison) / <b>Dar</b> (il a fait mal, il a nui) · <b>Derb</b> (ruelle)</td></tr>
<tr><td>t (ت)</td><td><b>T</b> (ط)</td><td><b>tab</b> (il s'est repenti) / <b>Tab</b> (il a mûri, cuit)</td></tr>
<tr><td>z (ز)</td><td><b>Z</b> (ظ / ض)</td><td><b>zher</b> (chance) / <b>Zher</b> (dos, à Fès « Dher »)</td></tr></table>
<p>Mots courants avec emphatique : <b>Tomobil</b>, <b>Tajin</b>, <b>Sbah</b> (matin), <b>SaHa</b> (santé), <b>Darb</b>, <b>Tbib</b> (médecin), <b>Tri9</b> (route), <b>DHer</b>/<b>Dher</b> (dos), <b>Sghir</b> (petit), <b>Se7</b> (vrai).</p>
<h3>3. L'emphase contagieuse</h3>
<p>Une emphatique « colore » tout le mot : dans <b>Tri9</b> le r et le i sont sombres ; dans <b>Sghir</b> le gh renforce l'effet. Le <b>r</b> lui-même a une version emphatique dans <b>Rba3</b> (quart), <b>3Rab</b>. C'est pour cela que les Marocains disent que le darija « vient du ventre ».</p>
<h3>4. L'assimilation</h3>
<p>Quand deux consonnes se touchent, la première s'aligne souvent sur la seconde :</p>
<ul>
<li><b>n + b → mb</b> : <i>n-bghi</i> se prononce « mbghi » ; <i>menba3d</i> → « memba3d »</li>
<li><b>t + emphatique → T</b> : <i>ka-t-Tle3</i> → « kaTTle3 » (tu montes)</li>
<li><b>t + d → dd</b> : <i>ka-t-dir</i> → « kaddir » (tu fais) ; <i>ka-t-dkhel</i> → « kaddkhel »</li>
<li><b>t + j → jj / dj</b> : <i>ka-t-ji</i> → « kajji » (tu viens)</li>
<li><b>t + z → zz</b>, <b>t + s → ss</b> : <i>ka-t-zid</i> → « kazzid » ; <i>ka-t-sme3</i> → « kassme3 »</li>
<li><b>l de l'article + solaire</b> : <i>l-shems</i> → « sh-shems » (déjà vu) ; <i>l-dar</i> → « d-dar »</li>
<li><b>-sh de la négation + s</b> : <i>ma bghit-sh sukkar</i> → « ma bghi-ssukkar »</li></ul>
<div class="ok">Règle d'or : le darija cherche toujours le chemin le plus court. Si deux sons voisins peuvent fusionner, ils fusionnent. Écoute, imite, ne « sur-articule » jamais.</div>`
},
{
  id: "ecrire-arabe", icon: "pen", title: "Écrire le darija en lettres arabes", sub: "Lire les SMS, les enseignes, les paroles de chansons", cat: "Phonétique & bases",
  body: `
<p>Le darija n'a pas d'orthographe officielle, mais les Marocains l'écrivent tous les jours en lettres arabes (réseaux sociaux, publicité, presse) et en « arabizi » (lettres latines + chiffres, la notation de cette application). Savoir passer de l'un à l'autre te donne accès à tout ce qui s'écrit au Maroc.</p>
<h3>Correspondances de base</h3>
<table class="gtable"><tr><th>App</th><th>Arabe</th><th>App</th><th>Arabe</th><th>App</th><th>Arabe</th></tr>
<tr><td>2</td><td class="ar">ء / أ</td><td>b</td><td class="ar">ب</td><td>t</td><td class="ar">ت</td></tr>
<tr><td>j</td><td class="ar">ج</td><td>7</td><td class="ar">ح</td><td>kh</td><td class="ar">خ</td></tr>
<tr><td>d</td><td class="ar">د</td><td>r</td><td class="ar">ر</td><td>z</td><td class="ar">ز</td></tr>
<tr><td>s</td><td class="ar">س</td><td>sh</td><td class="ar">ش</td><td>S</td><td class="ar">ص</td></tr>
<tr><td>D</td><td class="ar">ض</td><td>T</td><td class="ar">ط</td><td>Z</td><td class="ar">ظ</td></tr>
<tr><td>3</td><td class="ar">ع</td><td>gh</td><td class="ar">غ</td><td>f</td><td class="ar">ف</td></tr>
<tr><td>9</td><td class="ar">ق</td><td>k</td><td class="ar">ك</td><td>l</td><td class="ar">ل</td></tr>
<tr><td>m</td><td class="ar">م</td><td>n</td><td class="ar">ن</td><td>8</td><td class="ar">ه</td></tr>
<tr><td>w / u</td><td class="ar">و</td><td>y / i</td><td class="ar">ي</td><td>a</td><td class="ar">ا</td></tr></table>
<h3>Les lettres « marocaines »</h3>
<ul>
<li><b>g</b> (comme dans <i>gal</i>, <i>garro</i>) n'existe pas en arabe classique : on écrit <span class="ar">گ</span> (kaf à trois points, le plus courant), <span class="ar">ڭ</span>, ou simplement <span class="ar">ق</span>/<span class="ar">ك</span> selon le mot. <i>gal</i> = <span class="ar">گال</span> ; <i>garro</i> = <span class="ar">گارو</span>.</li>
<li><b>v</b> (emprunts : <i>vitess</i>, <i>villa</i>) → <span class="ar">ڤ</span> ou <span class="ar">ف</span>.</li>
<li><b>p</b> (<i>pisin</i>, <i>portabl</i>) → <span class="ar">پ</span> ou <span class="ar">ب</span>.</li></ul>
<h3>Les règles d'écriture courantes</h3>
<ul>
<li>Le <b>schwa</b> ne s'écrit pas : <i>kteb</i> = <span class="ar">كتب</span>, <i>khedma</i> = <span class="ar">خدمة</span>.</li>
<li>Le préfixe <b>ka-</b> du présent s'écrit avec un kaf collé : <i>kan-akul</i> = <span class="ar">كناكل</span>, <i>kay-9ul</i> = <span class="ar">كيقول</span>. À Marrakech, <b>ta-</b> = <span class="ar">تا</span>.</li>
<li>Le futur <b>gha-</b> = <span class="ar">غا</span> : <i>gha-n-mshi</i> = <span class="ar">غانمشي</span> ; <i>ghadi</i> = <span class="ar">غادي</span>.</li>
<li>La négation <b>ma…sh</b> : <span class="ar">ما</span> avant, <span class="ar">ش</span> collé après : <i>ma bghitsh</i> = <span class="ar">ما بغيتش</span>.</li>
<li>L'article <b>l-</b> s'écrit toujours <span class="ar">ال</span> même quand on entend « sh-sh » : <i>sh-shems</i> = <span class="ar">الشمس</span>.</li>
<li><b>dyal</b> = <span class="ar">ديال</span>, <b>wash</b> = <span class="ar">واش</span>, <b>shnu</b> = <span class="ar">شنو</span>, <b>fin</b> = <span class="ar">فين</span>, <b>bezzaf</b> = <span class="ar">بزاف</span>, <b>walu</b> = <span class="ar">والو</span>, <b>safi</b> = <span class="ar">صافي</span>, <b>wakha</b> = <span class="ar">واخا</span>.</li>
<li>Le <b>ta marbuta</b> <span class="ar">ة</span> marque le féminin : <i>mdina</i> = <span class="ar">مدينة</span>, <i>zwina</i> = <span class="ar">زوينة</span>.</li></ul>
<h3>Lire une phrase</h3>
<div class="ex"><div class="txt"><div class="da-line"><span class="ar">واش كتهضر بالدارجة؟</span></div><div class="fr-line">Wash kat-8der b-d-darija ? — Tu parles darija ?</div></div></div>
<div class="ex"><div class="txt"><div class="da-line"><span class="ar">ما فهمتش، عاود عافاك</span></div><div class="fr-line">Ma f8emtsh, 3awed 3afak — Je n'ai pas compris, répète s'il te plaît</div></div></div>
<div class="ex"><div class="txt"><div class="da-line"><span class="ar">غادي نمشي للسوق دابا</span></div><div class="fr-line">Ghadi n-mshi l-s-su9 daba — Je vais au marché maintenant</div></div></div>
<h3>L'arabizi (écriture SMS)</h3>
<p>Sur WhatsApp, les Marocains écrivent exactement comme cette application : <b>3</b> = ع, <b>7</b> = ح, <b>9</b> = ق, <b>kh</b>, <b>gh</b>, <b>sh</b>/<b>ch</b>. Tu verras aussi <b>ch</b> pour sh (influence française : « chwiya »), <b>ou</b> pour u (« bezzaf dial chi ») et <b>h</b> pour 8. Variantes courantes : <i>wach / wash</i>, <i>chnou / shnu</i>, <i>labas / labes</i>, <i>bikhir / bkhir</i>.</p>
<div class="tip">Le lexique de cette application donne pour chaque mot l'<b>arabe standard vocalisé</b>. En comparant la colonne darija (arabizi) et l'arabe standard (lettres arabes), tu apprends les deux écritures en même temps.</div>`
},

/* ---------------- LE NOM & L'ADJECTIF ---------------- */
{
  id: "genre-noms", icon: "users", title: "Le genre des noms", sub: "-a féminin… et les exceptions à connaître par cœur", cat: "Le nom & l'adjectif",
  body: `
<p>Tout nom est masculin ou féminin, et cet accord se répercute sur l'adjectif, le verbe et les pronoms. Bonne nouvelle : la règle est simple. Mauvaise nouvelle : les exceptions sont des mots très fréquents.</p>
<h3>La règle : féminin = -a</h3>
<table class="gtable"><tr><th>Masculin</th><th>Féminin</th></tr>
<tr><td>weld (garçon)</td><td>bent (fille) — <i>mot différent</i></td></tr>
<tr><td>khuya (mon frère)</td><td>khti (ma sœur)</td></tr>
<tr><td>mu3ellim (enseignant)</td><td>mu3ellim<b>a</b></td></tr>
<tr><td>Tbib (médecin)</td><td>Tbib<b>a</b></td></tr>
<tr><td>9eTT (chat)</td><td>9eTT<b>a</b> (chatte)</td></tr>
<tr><td>maghribi (Marocain)</td><td>maghribi<b>ya</b> (Marocaine)</td></tr>
<tr><td>Sa7bi (mon ami)</td><td>Sa7b<b>ti</b> (mon amie) — le -a devient -t devant un suffixe</td></tr></table>
<h3>Féminins sans -a (à mémoriser)</h3>
<p>Ce sont surtout les <b>parties du corps par paire</b>, des <b>éléments naturels</b> et quelques mots essentiels :</p>
<table class="gtable"><tr><th>Mot</th><th>Sens</th><th>Preuve de l'accord</th></tr>
<tr><td><b>yedd</b></td><td>main</td><td>yeddi <b>kbira</b> — ma main est grande</td></tr>
<tr><td><b>rjel</b></td><td>pied / jambe</td><td>rjli <b>mjer7a</b></td></tr>
<tr><td><b>3in</b></td><td>œil</td><td>3in <b>zer9a</b> — un œil bleu</td></tr>
<tr><td><b>wden</b></td><td>oreille</td><td>wden <b>sghira</b></td></tr>
<tr><td><b>dar</b></td><td>maison</td><td>d-dar <b>kbira</b></td></tr>
<tr><td><b>blad</b></td><td>pays</td><td>blad <b>zwina</b></td></tr>
<tr><td><b>shems</b></td><td>soleil</td><td>sh-shems <b>7arra</b> — le soleil est chaud (féminin !)</td></tr>
<tr><td><b>ard</b></td><td>terre</td><td>l-ard <b>na9ya</b></td></tr>
<tr><td><b>nar</b></td><td>feu</td><td>n-nar <b>sh3alat</b> — le feu a pris</td></tr>
<tr><td><b>Tri9</b></td><td>route</td><td>Tri9 <b>Twila</b></td></tr>
<tr><td><b>7arb</b></td><td>guerre</td><td>7arb <b>kbira</b></td></tr>
<tr><td><b>3in</b></td><td>source</td><td></td></tr>
<tr><td><b>sma</b></td><td>ciel</td><td>s-sma <b>zer9a</b></td></tr>
<tr><td><b>ru7</b></td><td>âme</td><td></td></tr>
<tr><td><b>kersh</b></td><td>ventre</td><td>kersh <b>kbira</b></td></tr>
<tr><td><b>senn</b></td><td>dent</td><td></td></tr></table>
<h3>Masculins en -a (rares mais fréquents)</h3>
<p><b>ma</b> (eau) : <i>l-ma bared</i> (l'eau est froide, masculin) · <b>khuya</b>, <b>baba</b> (papa), <b>3emmi</b> (mon oncle) : naturellement masculins · <b>lmaghrib</b> n'en fait pas partie. Les emprunts français gardent souvent leur genre d'origine : <i>tomobil</i> (fém., « la voiture »), <i>portabl</i> (masc.).</p>
<h3>Les noms d'animaux</h3>
<p>Quand le sexe n'importe pas, on utilise le masculin générique : <i>9eTT</i> (chat), <i>kelb</i> (chien), <i>7San</i> (cheval). Féminins spécifiques : <i>9eTTa</i>, <i>kelba</i>, <i>3awda</i> (jument), <i>ne3ja</i> (brebis), <i>b9ra</i> (vache).</p>
<div class="tip">Le meilleur test du genre : l'adjectif « grand ». Si tu entends <b>kbira</b>, le mot est féminin. Note-le au fur et à mesure dans le lexique.</div>`
},
{
  id: "pluriels-brises", icon: "users", title: "Les pluriels brisés en détail", sub: "Les 10 moules qui couvrent 90 % des mots", cat: "Le nom & l'adjectif",
  body: `
<p>Le darija a deux façons de faire le pluriel : le pluriel <b>régulier</b> (on ajoute <b>-in</b> ou <b>-at</b>) et le pluriel <b>brisé</b>, où l'on casse le mot pour le recouler dans un autre moule. Les pluriels brisés semblent chaotiques, mais ils suivent une dizaine de schémas. Apprends le pluriel <b>avec</b> chaque nouveau nom.</p>
<h3>1. Pluriels réguliers</h3>
<table class="gtable"><tr><th>Terminaison</th><th>Pour</th><th>Exemples</th></tr>
<tr><td><b>-in</b></td><td>humains masculins, participes, nisba (-i)</td><td>mu3ellim → mu3ellim<b>in</b> · maghribi → maghribiy<b>in</b> · khaddam → khaddam<b>in</b> · fer7an → fer7an<b>in</b></td></tr>
<tr><td><b>-at</b></td><td>féminins en -a, emprunts, mots longs</td><td>mu3ellima → mu3ellim<b>at</b> · tomobil → tomobil<b>at</b> · telfaza → telfaz<b>at</b> · portabl → portabl<b>at</b> · 7aja → 7aj<b>at</b></td></tr></table>
<h3>2. Les moules brisés les plus fréquents</h3>
<table class="gtable"><tr><th>Moule</th><th>Singulier → pluriel</th></tr>
<tr><td><b>CCaC</b> (a au milieu)</td><td>kelb → <b>klab</b> (chiens) · jbel → <b>jbal</b> · weld → <b>wlad</b> · rajel → <b>rjal</b> · bab → <b>biban</b> (variante) · 9elb → <b>9lub</b></td></tr>
<tr><td><b>CCuC</b> (u au milieu)</td><td>ktab → <b>ktub</b> · bit → <b>byut</b> (chambres) · dar → <b>dyur</b> · 9elb → <b>9lub</b> · sef → <b>sfuf</b> · 3in → <b>3yun</b> (yeux/sources)</td></tr>
<tr><td><b>CCaCi / CCaCa</b></td><td>kursi → <b>krasa</b> (chaises) · 9ehwa → <b>9hawi</b> (cafés) · Tajin → <b>Twajen</b> · 7anut → <b>7wanet</b> (boutiques) · sarut → <b>swaret</b> (clés) · mdina → <b>mdun</b>/<b>mdayen</b></td></tr>
<tr><td><b>CCaCeC</b> (4 consonnes)</td><td>mekteb → <b>mkateb</b> (bureaux) · meftah → <b>mfate7</b> · merkeb → <b>mrakeb</b> (bateaux) · Tri9 → <b>Tor9an</b> · dexter : jerda → <b>jrayed</b> (journaux)</td></tr>
<tr><td><b>CCiC → CCaC</b> (adjectifs)</td><td>kbir → <b>kbar</b> · Sghir → <b>Sghar</b> · Twil → <b>Twal</b> · 9SiR → <b>9Sar</b> · jdid → <b>jdad</b> · 9dim → <b>9dam</b> · mri D → <b>mraD</b> (malades)</td></tr>
<tr><td><b>-an</b></td><td>khuya → <b>khut</b> (frères, irrégulier) · bab → <b>biban</b> · wad → <b>widan</b> (rivières) · jar → <b>jiran</b> (voisins) · blad → <b>bldan</b></td></tr>
<tr><td><b>Redoublement</b></td><td>3amm → <b>3mum</b>/<b>3mam</b> (oncles) · khal → <b>khwal</b> · Sa7eb → <b>S7ab</b> (amis)</td></tr>
<tr><td><b>Féminins → -at ou brisé</b></td><td>bent → <b>bnat</b> · mra → <b>3yalat</b> (femmes, irrégulier) · khti → <b>khwatat</b> · wden → <b>wednin</b> · yedd → <b>yeddin</b> · rjel → <b>rejlin</b></td></tr></table>
<h3>3. Les collectifs</h3>
<p>Beaucoup de fruits, légumes et petites choses ont un <b>collectif</b> (masculin, sans article de nombre) et un <b>nom d'unité</b> en -a :</p>
<table class="gtable"><tr><th>Collectif (« du… », « des… »)</th><th>Unité</th><th>Pluriel compté</th></tr>
<tr><td><b>tuffa7</b> (pommes en général)</td><td>tuffa7<b>a</b> (une pomme)</td><td>tlata d t-tuffa7at</td></tr>
<tr><td><b>lim</b> (oranges)</td><td>lim<b>a</b></td><td>jouj d l-limat</td></tr>
<tr><td><b>bid</b> (œufs)</td><td>bid<b>a</b></td><td>3eshra d l-bid</td></tr>
<tr><td><b>zitun</b> (olives)</td><td>zitun<b>a</b></td><td></td></tr>
<tr><td><b>khobz</b> (pain)</td><td>khobz<b>a</b> (un pain)</td><td>jouj khobzat</td></tr>
<tr><td><b>shjer</b> (arbres)</td><td>shejr<b>a</b></td><td>shjur (plur.)</td></tr></table>
<div class="ex"><div class="txt"><div class="da-line">3Tini kilu d t-tuffa7 w tuffa7a l-weld.</div><div class="fr-line">Donne-moi un kilo de pommes et une pomme pour le garçon.</div></div></div>
<h3>4. Le duel</h3>
<p>Le vrai duel en <b>-ayn</b> ne survit que pour les mesures et les paires : <b>yumayn</b> (deux jours), <b>3amayn</b>, <b>sa3tayn</b>, <b>mertayn</b> (deux fois), <b>yeddin</b> (les deux mains), <b>3inin</b>. Pour tout le reste : <b>juj</b> + pluriel : <i>juj wlad</i>, <i>juj d l-ktub</i>.</p>
<div class="ok">Méthode : quand tu apprends « ktab », apprends « ktab / ktub » d'un bloc, comme un Allemand apprend « der Tisch / die Tische ». Le lexique et les flashcards t'aideront ; à l'oral, la forme brisée te viendra vite parce qu'elle « sonne » juste.</div>`
},
{
  id: "annexion-possessifs", icon: "key", title: "Annexion & possessifs suffixés", sub: "dari, darek, dar Mohamed — et quand dyal est obligatoire", cat: "Le nom & l'adjectif",
  body: `
<p>Tu connais <b>dyal</b> (« de »). Mais un vrai locuteur n'utilise pas dyal partout : pour la famille, le corps et quelques mots très fréquents, il colle directement un pronom au nom ou juxtapose les deux noms. C'est l'<b>annexion</b>.</p>
<h3>1. Les suffixes possessifs</h3>
<table class="gtable"><tr><th>Personne</th><th>Suffixe après consonne</th><th>Après voyelle</th><th>Exemple : dar (maison)</th><th>Exemple : khu (frère)</th></tr>
<tr><td>mon</td><td><b>-i</b></td><td><b>-ya</b></td><td>dar<b>i</b></td><td>khu<b>ya</b></td></tr>
<tr><td>ton</td><td><b>-ek</b></td><td><b>-k</b></td><td>dar<b>ek</b></td><td>khu<b>k</b></td></tr>
<tr><td>son (à lui)</td><td><b>-u</b> / <b>-o</b></td><td><b>-8</b></td><td>dar<b>u</b></td><td>khu<b>8</b></td></tr>
<tr><td>son (à elle)</td><td><b>-8a</b></td><td><b>-8a</b></td><td>dar<b>8a</b></td><td>khu<b>8a</b></td></tr>
<tr><td>notre</td><td><b>-na</b></td><td><b>-na</b></td><td>dar<b>na</b></td><td>khu<b>na</b></td></tr>
<tr><td>votre</td><td><b>-kum</b></td><td><b>-kum</b></td><td>dar<b>kum</b></td><td>khu<b>kum</b></td></tr>
<tr><td>leur</td><td><b>-8um</b></td><td><b>-8um</b></td><td>dar<b>8um</b></td><td>khu<b>8um</b></td></tr></table>
<h3>2. Le -a féminin devient -t</h3>
<p>Un nom en <b>-a</b> reprend son « t » caché devant un suffixe : <b>mra</b> (femme) → <b>mrati</b> (ma femme) ; <b>smiya</b> → <b>smiytek</b> (ton prénom) ; <b>Sa7ba</b> → <b>Sa7ebti</b> ; <b>khedma</b> → <b>khedmti</b> (mon travail) ; <b>3ayla</b> → <b>3ayelti</b>.</p>
<h3>3. Où l'annexion est obligatoire (dyal serait bizarre)</h3>
<ul>
<li><b>Famille</b> : baba (mon père), mmi / mama (ma mère), khuya, khti, weldi (mon fils), benti, rajli (mon mari), mrati, 3emmi, khali, jeddi, jeddati (grand-mère). On dit <i>khuk</i>, jamais « l-khu dyalek ».</li>
<li><b>Corps</b> : rasi (ma tête), yeddek, 9elbi, 3ini, wejhek (ton visage), kershu.</li>
<li><b>Mots très fréquents</b> : smiyti, dari, bladi, ra2yi (mon avis), 3omri (mon âge / ma vie), 7ali (mon état), blasti (ma place).</li></ul>
<h3>4. L'annexion nom + nom</h3>
<p>Deux noms collés = « X de Y ». Le premier nom <b>perd son article</b>, le second le garde :</p>
<div class="ex"><div class="txt"><div class="da-line">bab d-dar · ras l-weld · weld 3emmi · mul l-7anut · bent l-jiran</div><div class="fr-line">la porte de la maison · la tête du garçon · mon cousin (fils de mon oncle) · le propriétaire de la boutique · la fille des voisins</div></div></div>
<div class="ex"><div class="txt"><div class="da-line">dar Mo7amed · tomobil baba · ktab l-mu3ellim</div><div class="fr-line">la maison de Mohamed · la voiture de papa · le livre du professeur</div></div></div>
<h3>5. Où dyal est préférable</h3>
<p>Avec un objet ordinaire, un emprunt, un nom long, ou pour insister : <i>l-ktab <b>dyali</b></i> (le livre à MOI), <i>t-tomobil <b>dyal</b> Sa7bi</i>, <i>l-portabl <b>dyalek</b></i>, <i>l-khedma <b>dyal</b> l-bare7</i> (le travail d'hier). Dyal s'accorde parfois au pluriel : <b>dyawl</b> (<i>l-ktub dyawli</i>, rare et plutôt à Casablanca).</p>
<div class="reg">Nord (Tanger, Tétouan) : <b>d</b> / <b>dyal</b> · Oriental (Oujda) : <b>nta3</b>, <b>ta3</b> (<i>d-dar ta3i</i>) · Sud/Sahara : <b>mta3</b> ou <b>dyal</b>. Les suffixes possessifs sont les mêmes partout.</div>
<h3>6. Avec un pluriel</h3>
<p>Suffixe + pluriel régulier ou brisé : <b>wladi</b> (mes enfants), <b>wladek</b>, <b>ktubi</b>, <b>S7abi</b> (mes amis), <b>jirani</b>. Avec un pluriel en -in, le n reste : <b>yeddin8a</b> (ses mains), <b>3ini8a</b>.</p>`
},
{
  id: "adjectifs-accord", icon: "sparkles", title: "L'adjectif : accord, place, formes", sub: "kbir, kbira, kbar · 7mer, 7amra, 7omer · maghribi, -ya, -yin", cat: "Le nom & l'adjectif",
  body: `
<h3>1. L'accord</h3>
<p>L'adjectif suit le nom et s'accorde en genre et en nombre. Le féminin ajoute <b>-a</b>, le pluriel est souvent <b>brisé</b> pour les adjectifs courts et en <b>-in</b> pour les autres.</p>
<table class="gtable"><tr><th>Masc.</th><th>Fém.</th><th>Pluriel</th><th>Sens</th></tr>
<tr><td>kbir</td><td>kbira</td><td>kbar</td><td>grand</td></tr>
<tr><td>Sghir</td><td>Sghira</td><td>Sghar</td><td>petit</td></tr>
<tr><td>Twil</td><td>Twila</td><td>Twal</td><td>long / grand de taille</td></tr>
<tr><td>9Sir</td><td>9Sira</td><td>9Sar</td><td>court</td></tr>
<tr><td>jdid</td><td>jdida</td><td>jdad</td><td>neuf</td></tr>
<tr><td>9dim</td><td>9dima</td><td>9dam</td><td>vieux, ancien</td></tr>
<tr><td>zwin</td><td>zwina</td><td>zwinin</td><td>beau, joli, bien</td></tr>
<tr><td>mezyan</td><td>mezyana</td><td>mezyanin</td><td>bien, bon</td></tr>
<tr><td>khayb</td><td>khayba</td><td>khaybin</td><td>mauvais, laid</td></tr>
<tr><td>ghali</td><td>ghalya</td><td>ghalyin</td><td>cher</td></tr>
<tr><td>rkhis</td><td>rkhisa</td><td>rkhas</td><td>bon marché</td></tr>
<tr><td>s8el</td><td>s8la</td><td>s8al</td><td>facile</td></tr>
<tr><td>S3ib</td><td>S3iba</td><td>S3ab</td><td>difficile</td></tr>
<tr><td>fer7an</td><td>fer7ana</td><td>fer7anin</td><td>content</td></tr>
<tr><td>3iyyan</td><td>3iyyana</td><td>3iyyanin</td><td>fatigué</td></tr>
<tr><td>mriD</td><td>mriDa</td><td>mraD</td><td>malade</td></tr></table>
<h3>2. Les couleurs et les défauts : un moule à part</h3>
<p>Les couleurs de base et certains traits physiques suivent le moule <b>CCeC / CeCCa / CoCeC</b> :</p>
<table class="gtable"><tr><th>Masc.</th><th>Fém.</th><th>Plur.</th><th>Sens</th></tr>
<tr><td>7mer</td><td>7amra</td><td>7omer</td><td>rouge</td></tr>
<tr><td>khDer</td><td>khaDra</td><td>khoDer</td><td>vert</td></tr>
<tr><td>zre9</td><td>zer9a</td><td>zore9</td><td>bleu</td></tr>
<tr><td>Sfer</td><td>Sefra</td><td>Sofer</td><td>jaune</td></tr>
<tr><td>byeD</td><td>beyDa</td><td>byoD</td><td>blanc</td></tr>
<tr><td>k7el</td><td>ke7la</td><td>ko7el</td><td>noir</td></tr>
<tr><td>3wer</td><td>3ewra</td><td>3ower</td><td>borgne</td></tr>
<tr><td>Trsh</td><td>Tersha</td><td>Torsh</td><td>sourd</td></tr>
<tr><td>3ma</td><td>3emya</td><td>3omyan</td><td>aveugle</td></tr></table>
<p>Les autres couleurs sont des nisba invariables en genre à l'oral ou en -i/-iya : <b>rmadi</b> (gris), <b>bni / 9ehwi</b> (marron), <b>wardi</b> (rose), <b>khukhi</b> (mauve), <b>limuni</b> (orange).</p>
<h3>3. Les adjectifs de relation en -i (nisba)</h3>
<p>Un nom + <b>-i</b> = « relatif à ». Féminin <b>-iya</b>, pluriel <b>-iyin</b> : <b>maghribi / maghribiya / maghribiyin</b>, <b>fransawi</b> (français), <b>3rubi</b> (campagnard), <b>beldi</b> (du pays, traditionnel — <i>khobz beldi</i>), <b>rumi</b> (européen, industriel — <i>djaj rumi</i>), <b>meshriqi</b> (oriental), <b>Sifi</b> (estival).</p>
<h3>4. Les participes utilisés comme adjectifs</h3>
<p>Les participes se comportent comme des adjectifs en -in : <b>gales</b>/galsa/galsin (assis), <b>wa9ef</b> (debout), <b>na3es</b> (endormi), <b>mesdud</b> (fermé), <b>meftu7</b> (ouvert), <b>mekhdum</b> (fait), <b>m3ellem</b> (instruit). Voir le chapitre sur le participe actif.</p>
<h3>5. L'accord avec l'article</h3>
<p>Si le nom est défini, l'adjectif l'est aussi : <b>l-weld l-kbir</b> (le grand garçon) ≠ <b>weld kbir</b> (un grand garçon). Cette double définition est <b>obligatoire</b> — sans elle on comprend une phrase : <i>l-weld kbir</i> = « le garçon est grand ».</p>
<div class="warn"><b>l-bent zwina</b> = la fille est jolie (phrase). <b>l-bent z-zwina</b> = la jolie fille (groupe nominal). Une syllabe change le sens.</div>
<h3>6. L'accord avec un pluriel de choses</h3>
<p>Pour des objets (non humains) au pluriel, l'accord peut se faire au <b>féminin singulier</b>, surtout dans un style soigné ou influencé par l'arabe standard : <i>l-ktub jdida</i> ou <i>l-ktub jdad</i>. Les deux s'entendent ; le pluriel (jdad) est plus courant à l'oral.</p>
<h3>7. Intensifier</h3>
<p><b>bezzaf</b> (très, beaucoup) après l'adjectif : <i>zwin bezzaf</i>. <b>shwiya</b> (un peu) : <i>3iyyan shwiya</i>. <b>3la l-akhir</b> / <b>7etta l-akhir</b> (à fond) : <i>fer7an 3la l-akhir</i>. Redoublement : <i>kbir kbir</i> (vraiment grand). <b>ghir</b> (juste) : <i>ghir mezyan</i>. Négation atténuée : <i>mashi zwin bezzaf</i> (pas terrible).</p>`
},
{
  id: "nombres-noms", icon: "hash", title: "Les nombres avec les noms", sub: "juj wlad, tlata d l-bnat, 3eshrin derhem, l-luwwel…", cat: "Le nom & l'adjectif",
  body: `
<p>Tu sais compter. Mais dire « trois enfants » ou « le troisième jour » suit des règles précises, différentes du français. Les voici toutes.</p>
<h3>1. Un et deux</h3>
<ul>
<li><b>Un</b> : nom seul, ou <b>wa7ed</b> après (insistance), ou <b>wa7ed l-</b> devant (« un certain ») : <i>weld</i> / <i>weld wa7ed</i> / <i>wa7ed l-weld</i>. Féminin : <i>bent we7da</i>.</li>
<li><b>Deux</b> : <b>juj</b> + pluriel : <i>juj wlad</i>, <i>juj bnat</i>, <i>juj d l-ktub</i>. Mesures : duel en -ayn (<i>yumayn</i>, <i>sa3tayn</i>). Dans le Nord et à Fès : <b>zuj</b> ; à Oujda : <b>zuj</b>/<b>juj</b>.</li></ul>
<h3>2. De 3 à 10 : « nombre + d + l- + pluriel »</h3>
<p>La forme la plus sûre partout : <b>tlata d l-wlad</b> (trois enfants), <b>khemsa d l-bnat</b>, <b>3eshra d n-nas</b>. Les nombres 3-10 ont aussi une forme courte utilisée devant un nom sans « d » : <b>tlt</b>, <b>reb3</b>, <b>khems</b>, <b>sett</b>, <b>seb3</b>, <b>tmen</b>, <b>tse3</b>, <b>3eshr</b> + pluriel : <i>tlt snin</i> (trois ans), <i>khems dyur</i>, <i>seb3 iyyam</i> (sept jours), <i>3eshr myat derhem</i>.</p>
<table class="gtable"><tr><th>Nombre</th><th>Seul</th><th>Devant un nom (court)</th><th>Exemple</th></tr>
<tr><td>3</td><td>tlata</td><td>tlt</td><td>tlt snin · tlata d l-wlad</td></tr>
<tr><td>4</td><td>reb3a</td><td>reb3</td><td>reb3 iyyam</td></tr>
<tr><td>5</td><td>khemsa</td><td>khems</td><td>khems dyur · khemsa d d-drari</td></tr>
<tr><td>6</td><td>setta</td><td>sett</td><td>sett sh8ur (six mois)</td></tr>
<tr><td>7</td><td>seb3a</td><td>seb3</td><td>seb3 iyyam</td></tr>
<tr><td>8</td><td>tmenya</td><td>tmen</td><td>tmen snin</td></tr>
<tr><td>9</td><td>tes3ud</td><td>tse3</td><td>tse3 sh8ur</td></tr>
<tr><td>10</td><td>3eshra</td><td>3eshr</td><td>3eshr myat (mille = dix cents)</td></tr></table>
<h3>3. À partir de 11 : le nom reste au singulier</h3>
<p>Comme en arabe standard, à partir de onze le nom est au <b>singulier</b> : <b>7Dash l-weld</b>… en pratique on dit surtout <b>7Dash weld</b>, <b>3eshrin derhem</b> (vingt dirhams, jamais « drahem »), <b>miya d d-derhem</b> ou <b>myat derhem</b>, <b>tlatin 3am</b> (trente ans), <b>alf derhem</b>. Les nombres 11-19 prennent un <b>-r</b> devant un nom : <b>7Dash<b>er</b> 3am</b>, <b>tnash<b>er</b> shher</b> (douze mois), <b>khemsTash<b>er</b> yum</b>.</p>
<h3>4. Cent, mille, million</h3>
<p><b>miya</b> (100), <b>myatayn</b> (200), <b>tlt-miya</b>, <b>reb3-miya</b>… <b>alf</b> (1000), <b>alfayn</b>, <b>tlt alaf</b> (3000)… <b>melyun</b>, <b>juj d l-mlayn</b>. Devant un nom : <i>myat derhem</i>, <i>alf 3am</i>, <i>melyun santim</i>.</p>
<h3>5. Les ordinaux</h3>
<table class="gtable"><tr><th></th><th>Masc.</th><th>Fém.</th></tr>
<tr><td>premier</td><td><b>l-luwwel</b></td><td>l-luwla</td></tr>
<tr><td>deuxième</td><td><b>t-tani</b></td><td>t-tanya</td></tr>
<tr><td>troisième</td><td><b>t-talet</b></td><td>t-talta</td></tr>
<tr><td>quatrième</td><td><b>r-rabe3</b></td><td>r-rab3a</td></tr>
<tr><td>cinquième</td><td><b>l-khames</b></td><td>l-khamsa</td></tr>
<tr><td>sixième</td><td><b>s-sades</b></td><td>s-sadsa</td></tr>
<tr><td>septième</td><td><b>s-sabe3</b></td><td>s-sab3a</td></tr>
<tr><td>huitième</td><td><b>t-tamen</b></td><td>t-tamna</td></tr>
<tr><td>neuvième</td><td><b>t-tase3</b></td><td>t-tas3a</td></tr>
<tr><td>dixième</td><td><b>l-3asher</b></td><td>l-3ashra</td></tr>
<tr><td>dernier</td><td><b>l-akhir / l-akhrani</b></td><td>l-akhira / l-akhranya</td></tr></table>
<div class="ex"><div class="txt"><div class="da-line">l-mrra l-luwla · t-tabe9 t-tani · l-yum t-talet · l-mrra l-akhranya</div><div class="fr-line">la première fois · le deuxième étage · le troisième jour · la dernière fois</div></div></div>
<p>Au-delà de dix, on utilise le cardinal : <i>l-9ism 7Dash</i> (la onzième classe), <i>s-sef3a 3eshrin</i>.</p>
<h3>6. Fractions et quantités</h3>
<p><b>neS</b> (moitié), <b>tulut</b> (tiers), <b>rbe3</b> (quart), <b>khoms</b> (cinquième) ; <b>neS kilu</b>, <b>rbe3 sa3a</b> (un quart d'heure), <b>kilu w neS</b>. Pourcentage : <b>3eshra f l-miya</b> (10 %). <b>zuj</b> = paire : <i>zuj d s-sbabet</i> (une paire de chaussures).</p>
<h3>7. L'âge et les dates</h3>
<div class="ex"><div class="txt"><div class="da-line">3endi tlatin 3am. · Sh7al f 3omrek ? · 3endu 3eshr snin. · Bent 3endha 3amayn.</div><div class="fr-line">J'ai trente ans. · Quel âge as-tu ? · Il a dix ans. · Une fille de deux ans.</div></div></div>
<div class="ex"><div class="txt"><div class="da-line">f l-luwwel dyal mars · f khemsTash yulyuz · 3am alfayn w 3eshrin</div><div class="fr-line">le premier mars · le 15 juillet · l'an 2020</div></div></div>
<div class="tip">Pour les prix, rappelle-toi le rial (1 DH = 20 rials) vu au chapitre « Le rial » : <i>alf rial</i> = 50 DH, <i>myat rial</i> = 5 DH.</div>`
},
{
  id: "prepositions-suffixes", icon: "link", title: "Prépositions + pronoms suffixés", sub: "fiya, 3lik, lih, m3ana, menkum, 7da8um", cat: "Le nom & l'adjectif",
  body: `
<p>En darija, une préposition ne se sépare jamais de son pronom : « avec moi » n'est pas « m3a ana » mais <b>m3aya</b>. Ces formes sont si fréquentes qu'il faut les avoir en réflexe. Voici le tableau complet.</p>
<h3>Le tableau maître</h3>
<table class="gtable"><tr><th></th><th>f (dans)</th><th>3la (sur)</th><th>l (à, pour)</th><th>b (avec, par)</th><th>m3a (avec)</th><th>men (de)</th><th>3end (chez)</th></tr>
<tr><td>moi</td><td>fiya</td><td>3liya</td><td>liya / li</td><td>biya</td><td>m3aya</td><td>menni</td><td>3endi</td></tr>
<tr><td>toi</td><td>fik</td><td>3lik</td><td>lik</td><td>bik</td><td>m3ak</td><td>mennek</td><td>3endek</td></tr>
<tr><td>lui</td><td>fi8</td><td>3li8</td><td>li8</td><td>bi8</td><td>m3a8</td><td>mennu</td><td>3endu</td></tr>
<tr><td>elle</td><td>fi8a</td><td>3li8a</td><td>li8a</td><td>bi8a</td><td>m3a8a</td><td>menn8a</td><td>3end8a</td></tr>
<tr><td>nous</td><td>fina</td><td>3lina</td><td>lina</td><td>bina</td><td>m3ana</td><td>menna</td><td>3endna</td></tr>
<tr><td>vous</td><td>fikum</td><td>3likum</td><td>likum</td><td>bikum</td><td>m3akum</td><td>menkum</td><td>3endkum</td></tr>
<tr><td>eux</td><td>fi8um</td><td>3li8um</td><td>li8um</td><td>bi8um</td><td>m3a8um</td><td>men8um</td><td>3end8um</td></tr></table>
<h3>Les autres prépositions</h3>
<table class="gtable"><tr><th>Préposition</th><th>Sens</th><th>+ moi / toi / lui</th></tr>
<tr><td><b>7da</b></td><td>à côté de</td><td>7daya · 7dak · 7da8</td></tr>
<tr><td><b>9eddam / 9uddam</b></td><td>devant</td><td>9eddami · 9eddamek · 9eddamu</td></tr>
<tr><td><b>mura / wra</b></td><td>derrière</td><td>muraya · murak · mura8</td></tr>
<tr><td><b>fu9</b></td><td>au-dessus, sur</td><td>fu9i · fu9ek · fu9u</td></tr>
<tr><td><b>te7t</b></td><td>sous</td><td>te7ti · te7tek · te7tu</td></tr>
<tr><td><b>bin</b></td><td>entre</td><td>binatna (entre nous) · binat8um</td></tr>
<tr><td><b>7etta l</b></td><td>jusqu'à</td><td>7etta lik · 7etta li8</td></tr>
<tr><td><b>bla</b></td><td>sans</td><td>bla biya · bla bik · bla bi8 (« bla » se combine avec b)</td></tr>
<tr><td><b>9bel</b></td><td>avant</td><td>9bel menni · 9bel mennek</td></tr>
<tr><td><b>be3d</b></td><td>après</td><td>be3d menni · mura8</td></tr>
<tr><td><b>b7al</b></td><td>comme</td><td>b7ali · b7alek · b7alu</td></tr>
<tr><td><b>dyal</b></td><td>de (possession)</td><td>dyali · dyalek · dyalu · dyal8a · dyalna · dyalkum · dyal8um</td></tr>
<tr><td><b>3end</b></td><td>chez, avoir</td><td>3endi · 3endek · 3endu (voir « avoir »)</td></tr>
<tr><td><b>3la 9bel</b></td><td>à cause de</td><td>3la 9bel + nom / 3la 9belek</td></tr></table>
<h3>Les emplois à connaître</h3>
<ul>
<li><b>f</b> = dans, à (lieu), en (temps) : <i>f d-dar</i>, <i>f Casa</i>, <i>f Sif</i> (en été), <i>f l-lil</i> (la nuit). État intérieur : <i>fiya j-ju3</i> (j'ai faim).</li>
<li><b>3la</b> = sur, à propos de, à cause de, contre : <i>3la T-Tabla</i>, <i>8der 3la l-maghrib</i> (parle du Maroc), <i>3lash ?</i> (pourquoi = sur quoi), <i>3lik b</i>… (il faut que tu…). <b>3la</b> + pronom = obligation légère : <i>3lik tji</i> (tu devrais venir).</li>
<li><b>l</b> = à, pour, vers : <i>msha l Rbat</i>, <i>gal li8a</i> (il lui a dit), <i>3Tit lik</i> (je t'ai donné). Avec l'article : <i>l l-mdina</i> → « l-l-mdina » → souvent prononcé <b>l-mdina</b> (le double l fusionne).</li>
<li><b>b</b> = avec (moyen), par, pour (prix) : <i>b l-yedd</i> (à la main), <i>b s-syara</i>, <i>b 3eshra derhem</i> (pour 10 DH), <i>b l-3ani</i> (exprès), <i>b s-se7</i> (vraiment), <i>b l-7e9</i> (à vrai dire).</li>
<li><b>m3a</b> = avec (accompagnement) et aussi « à » (heure) : <i>m3a l-3ashra</i> (à dix heures), <i>m3a S-Sba7</i> (le matin).</li>
<li><b>men</b> = de (origine), depuis : <i>men Fransa</i>, <i>men l-bare7</i> (depuis hier), <i>kber menni</i> (plus grand que moi), <i>wa7ed men8um</i> (l'un d'eux).</li></ul>
<div class="warn">Ne sépare jamais : « m3a ana » n'existe pas, dis <b>m3aya</b>. « 3la 8uwa » n'existe pas, dis <b>3li8</b>. C'est l'une des fautes les plus reconnaissables des débutants.</div>
<div class="ex"><div class="txt"><div class="da-line">Sber 3liya shwiya. · Bghit n-8der m3ak. · Ma 3endi ma n-9ul lik. · Dwwezt yumayn 3end8um. · Ash fik ?</div><div class="fr-line">Sois patient avec moi un peu. · Je veux te parler. · Je n'ai rien à te dire. · J'ai passé deux jours chez eux. · Qu'est-ce que tu as ?</div></div></div>`
},

/* ---------------- LE VERBE EN PROFONDEUR ---------------- */
{
  id: "verbes-creux", icon: "refresh", title: "Les verbes creux (voyelle au milieu)", sub: "dar / dir, gal / gul, shaf / shuf, ba3 / bi3", cat: "Conjugaison",
  body: `
<p>Un verbe creux a une <b>voyelle longue au milieu</b> (dar, gal, shaf, ba3, kan). Cette voyelle change entre l'accompli et l'inaccompli, et se raccourcit à la 1re et 2e personne de l'accompli. Ce sont des verbes ultra-fréquents : maîtrise-les et tu couvres une grande partie des conversations.</p>
<h3>Les trois familles</h3>
<table class="gtable"><tr><th>Famille</th><th>Accompli (il)</th><th>Inaccompli (il)</th><th>Verbes</th></tr>
<tr><td><b>a / i</b></td><td>dar</td><td>y-dir</td><td>dar (faire), ba3/y-bi3 (vendre), jab/y-jib (apporter), 3ash/y-3ish (vivre), zad/y-zid (ajouter, naître), Tar/y-Tir (voler), Sab/y-Sib (trouver), kal/… (non — kla est faible)</td></tr>
<tr><td><b>a / u</b></td><td>gal</td><td>y-gul</td><td>gal (dire), shaf/y-shuf (voir), kan/y-kun (être), 9am/y-9um (se lever), mat/y-mut (mourir), Sam/y-Sum (jeûner), zar/y-zur (visiter), da9/y-du9 (goûter), fa9/y-fi9 (se réveiller — a/i), 3am/y-3um (nager)</td></tr>
<tr><td><b>a / a</b></td><td>khaf</td><td>y-khaf</td><td>khaf (avoir peur), nam/y-nam (dormir, Nord), ban/y-ban (apparaître, sembler), bat/y-bat (passer la nuit), 3ad/y-3awed (refaire — irrégulier)</td></tr></table>
<h3>L'accompli : la voyelle se raccourcit</h3>
<p>À la 1re et 2e personne (je, tu, nous, vous), la voyelle longue devient un schwa court (e) ou un « u/i » bref : <b>dar</b> → <b>dert</b>, <b>gal</b> → <b>gelt</b>, <b>shaf</b> → <b>sheft</b>, <b>kan</b> → <b>kent</b>.</p>
<table class="gtable"><tr><th></th><th>dar (faire)</th><th>gal (dire)</th><th>shaf (voir)</th><th>ba3 (vendre)</th><th>kan (être)</th></tr>
<tr><td>ana</td><td>dert</td><td>gelt</td><td>sheft</td><td>be3t</td><td>kent</td></tr>
<tr><td>nta / nti</td><td>derti</td><td>gelti</td><td>shefti</td><td>be3ti</td><td>kenti</td></tr>
<tr><td>8uwa</td><td>dar</td><td>gal</td><td>shaf</td><td>ba3</td><td>kan</td></tr>
<tr><td>8iya</td><td>daret</td><td>galet</td><td>shafet</td><td>ba3et</td><td>kanet</td></tr>
<tr><td>7na</td><td>derna</td><td>gelna</td><td>shefna</td><td>be3na</td><td>kenna</td></tr>
<tr><td>ntuma</td><td>dertu</td><td>geltu</td><td>sheftu</td><td>be3tu</td><td>kentu</td></tr>
<tr><td>8uma</td><td>daru</td><td>galu</td><td>shafu</td><td>ba3u</td><td>kanu</td></tr></table>
<h3>L'inaccompli : la voyelle du milieu apparaît</h3>
<table class="gtable"><tr><th></th><th>dar → dir</th><th>gal → gul</th><th>shaf → shuf</th><th>kan → kun</th></tr>
<tr><td>ana</td><td>kan-dir</td><td>kan-gul</td><td>kan-shuf</td><td>n-kun</td></tr>
<tr><td>nta</td><td>kat-dir</td><td>kat-gul</td><td>kat-shuf</td><td>t-kun</td></tr>
<tr><td>nti</td><td>kat-diri</td><td>kat-guli</td><td>kat-shufi</td><td>t-kuni</td></tr>
<tr><td>8uwa</td><td>kay-dir</td><td>kay-gul</td><td>kay-shuf</td><td>y-kun</td></tr>
<tr><td>8iya</td><td>kat-dir</td><td>kat-gul</td><td>kat-shuf</td><td>t-kun</td></tr>
<tr><td>7na</td><td>kan-diru</td><td>kan-gulu</td><td>kan-shufu</td><td>n-kunu</td></tr>
<tr><td>ntuma</td><td>kat-diru</td><td>kat-gulu</td><td>kat-shufu</td><td>t-kunu</td></tr>
<tr><td>8uma</td><td>kay-diru</td><td>kay-gulu</td><td>kay-shufu</td><td>y-kunu</td></tr></table>
<h3>L'impératif et le participe</h3>
<p>Impératif = inaccompli sans préfixe : <b>dir !</b> / diri ! / diru ! · <b>gul !</b> / guli / gulu · <b>shuf !</b> / shufi / shufu · <b>bi3 !</b> · <b>jib !</b> (apporte) · <b>zid !</b> (ajoute, continue) · <b>kun !</b> (sois). Participe actif : <b>dayer</b>, <b>gayel</b>, <b>shayef</b>, <b>baye3</b>, <b>kayen</b> (existant → « il y a »), <b>3ayesh</b>.</p>
<div class="reg"><b>gal</b> se dit <b>9al</b> à Fès, Tétouan, Tanger et Oujda : <i>9elt, 9elti, 9al, 9alet…</i> et <i>kan-9ul</i>. Le mécanisme est le même, seule la consonne change. <b>shaf</b> est parfois <b>shef</b>/<b>shuf</b> au Nord : <i>shefti ?</i></div>
<div class="ex"><div class="txt"><div class="da-line">Gelt lik ma t-dir-sh 8adshi ! · Sheftu l-bare7 f s-su9. · Kent f d-dar. · Zid shwiya d s-skkar. · Jib lya l-ma 3afak.</div><div class="fr-line">Je t'ai dit de ne pas faire ça ! · Je l'ai vu hier au marché. · J'étais à la maison. · Ajoute un peu de sucre. · Apporte-moi de l'eau s'il te plaît.</div></div></div>`
},
{
  id: "verbes-sourds-hamzes", icon: "refresh", title: "Verbes sourds, hamzés et en w-", sub: "7ell, sedd, shedd · kla, khda · wella, wSel", cat: "Conjugaison",
  body: `
<h3>1. Les verbes sourds (dernière consonne doublée)</h3>
<p><b>7ell</b> (ouvrir), <b>sedd</b> (fermer), <b>shedd</b> (tenir, attraper), <b>medd</b> (tendre), <b>7ess</b> (sentir), <b>3edd</b> (compter, mordre), <b>dezz</b> (pousser), <b>kebb</b> (verser), <b>7eTT</b> (poser), <b>shemm</b> (sentir une odeur), <b>7ebb</b> (aimer, Nord), <b>dell</b> (montrer, Nord). À l'accompli, ils prennent un <b>-i-</b> de liaison aux 1re et 2e personnes : <b>7ellit</b>, pas « 7ellt ».</p>
<table class="gtable"><tr><th></th><th>Accompli — 7ell (ouvrir)</th><th>Inaccompli</th></tr>
<tr><td>ana</td><td>7ell<b>it</b></td><td>kan-7ell</td></tr>
<tr><td>nta / nti</td><td>7ell<b>iti</b></td><td>kat-7ell / kat-7elli</td></tr>
<tr><td>8uwa</td><td>7ell</td><td>kay-7ell</td></tr>
<tr><td>8iya</td><td>7ellat</td><td>kat-7ell</td></tr>
<tr><td>7na</td><td>7ell<b>ina</b></td><td>kan-7ellu</td></tr>
<tr><td>ntuma</td><td>7ell<b>itu</b></td><td>kat-7ellu</td></tr>
<tr><td>8uma</td><td>7ellu</td><td>kay-7ellu</td></tr></table>
<p>Impératif : <b>7ell !</b> / 7elli / 7ellu · <b>sedd l-bab !</b> (ferme la porte) · <b>shedd !</b> (tiens !). Participes : <b>7all</b> (ouvert, actif), <b>me7lul</b> (ouvert, passif), <b>mesdud</b> (fermé), <b>meshdud</b> (tenu).</p>
<h3>2. Les verbes hamzés : kla et khda</h3>
<p>Deux verbes essentiels, <b>kla</b> (manger) et <b>khda</b> (prendre), viennent de racines à hamza (أكل, أخذ). Ils se conjuguent comme des verbes faibles à l'accompli, mais l'inaccompli ajoute un <b>a</b> : <b>y-akul</b>, <b>y-akhud</b>.</p>
<table class="gtable"><tr><th></th><th>Accompli</th><th>Inaccompli</th><th>Accompli</th><th>Inaccompli</th></tr>
<tr><td>ana</td><td>klit</td><td>kan-akul</td><td>khdit</td><td>kan-akhud</td></tr>
<tr><td>nta</td><td>kliti</td><td>kat-akul</td><td>khditi</td><td>kat-akhud</td></tr>
<tr><td>nti</td><td>kliti</td><td>kat-akli</td><td>khditi</td><td>kat-akhdi</td></tr>
<tr><td>8uwa</td><td>kla</td><td>kay-akul</td><td>khda</td><td>kay-akhud</td></tr>
<tr><td>8iya</td><td>klat</td><td>kat-akul</td><td>khdat</td><td>kat-akhud</td></tr>
<tr><td>7na</td><td>klina</td><td>kan-aklu</td><td>khdina</td><td>kan-akhdu</td></tr>
<tr><td>ntuma</td><td>klitu</td><td>kat-aklu</td><td>khditu</td><td>kat-akhdu</td></tr>
<tr><td>8uma</td><td>klaw</td><td>kay-aklu</td><td>khdaw</td><td>kay-akhdu</td></tr></table>
<p>Impératif irrégulier : <b>kul !</b> / kuli / kulu (mange) · <b>khud !</b> / khudi / khudu (prends). Participes : <b>wakel</b> (ayant mangé, rassasié), <b>wakhed</b>. Passif : <b>ttekla</b> / <b>ttekhda</b> (a été mangé / pris).</p>
<div class="ex"><div class="txt"><div class="da-line">Kliti ? — Iyeh, klit. · Kul, kul ! Ma tSt7ash. · Khud had l-flus. · Shnu kat-akul f S-Sba7 ?</div><div class="fr-line">Tu as mangé ? — Oui. · Mange, mange ! N'aie pas honte. · Prends cet argent. · Qu'est-ce que tu manges le matin ?</div></div></div>
<h3>3. Les verbes en w- (assimilés)</h3>
<p><b>wSel</b> (arriver), <b>wella</b> (devenir, retourner), <b>w9ef</b> (s'arrêter, se tenir debout), <b>wzen</b> (peser), <b>w3ed</b> (promettre), <b>wjed</b> (préparer), <b>wled</b> (accoucher), <b>wrra</b> (montrer). Le w se conserve partout, il n'y a pas de piège : <i>wSelt, wSelti, wSel… kan-wSel, kat-wSel</i>. <b>wella</b> se conjugue comme un verbe faible : <i>wellit, wella, wellat, wellaw</i> ; <i>kan-welli</i>.</p>
<div class="ex"><div class="txt"><div class="da-line">WSelt ? — WSelt daba. · Wella Tbib. · Wellit n-akul kter men 9bel. · W9ef 8na !</div><div class="fr-line">Tu es arrivé ? — Je viens d'arriver. · Il est devenu médecin. · Je me suis mis à manger plus qu'avant. · Arrête-toi ici !</div></div></div>
<div class="tip"><b>wella</b> a trois sens : devenir (<i>wella kbir</i>), retourner (<i>wella l d-dar</i> — ou <i>rje3</i>), et « se mettre à » + inaccompli (<i>wellit kan-fi9 bekri</i> = je me suis mis à me lever tôt).</div>`
},
{
  id: "formes-derivees", icon: "layers", title: "Les formes dérivées du verbe", sub: "ketteb, t3ellem, tt-kteb, st3mel, terjem : une racine, dix sens", cat: "Conjugaison",
  body: `
<p>Comme l'arabe, le darija fabrique des verbes à partir d'une racine de trois consonnes en la moulant dans des <b>formes</b>. Connaître les formes, c'est deviner le sens d'un verbe jamais entendu : si tu connais <i>kteb</i> (écrire), tu comprends <i>ketteb</i>, <i>tketteb</i>, <i>ttekteb</i>, <i>mektub</i>. Voici les formes vivantes en darija.</p>
<h3>Forme I : la base</h3>
<p><b>kteb</b> (écrire), <b>khdem</b> (travailler), <b>3ref</b> (savoir), <b>fhem</b> (comprendre). C'est le verbe « simple ».</p>
<h3>Forme II : consonne du milieu doublée → causatif / intensif</h3>
<table class="gtable"><tr><th>Base</th><th>Forme II</th><th>Sens</th></tr>
<tr><td>kteb (écrire)</td><td><b>ketteb</b></td><td>faire écrire, inscrire</td></tr>
<tr><td>khdem (travailler)</td><td><b>kheddem</b></td><td>faire travailler, embaucher</td></tr>
<tr><td>3ref (savoir)</td><td><b>3erref</b></td><td>faire connaître, présenter (3errefni bi8 = présente-le-moi)</td></tr>
<tr><td>fhem (comprendre)</td><td><b>fehhem</b></td><td>expliquer, faire comprendre</td></tr>
<tr><td>9ra (lire)</td><td><b>9erra</b></td><td>enseigner</td></tr>
<tr><td>n3es (dormir)</td><td><b>ne33es</b></td><td>endormir, coucher (un enfant)</td></tr>
<tr><td>khrej (sortir)</td><td><b>kherrej</b></td><td>faire sortir</td></tr>
<tr><td>dkhel (entrer)</td><td><b>dekhkhel</b></td><td>faire entrer</td></tr>
<tr><td>—</td><td><b>3ellem</b></td><td>enseigner</td></tr>
<tr><td>—</td><td><b>Sllem</b></td><td>saluer, remettre</td></tr>
<tr><td>—</td><td><b>fekker</b></td><td>rappeler, faire penser</td></tr>
<tr><td>—</td><td><b>khebber</b></td><td>informer</td></tr>
<tr><td>—</td><td><b>Sewwer</b></td><td>photographier</td></tr>
<tr><td>—</td><td><b>bddel</b></td><td>changer (quelque chose)</td></tr></table>
<p>Conjugaison : régulière, sans changement de voyelle : <i>3ellemt, 3ellemti, 3ellem, 3ellmat, 3ellemna, 3ellemtu, 3ellmu</i> ; <i>kan-3ellem, kat-3ellem, kay-3ellem…</i> Participe : <b>m3ellem</b> (qui a été enseigné / expert). </p>
<h3>Forme III : voyelle « a » après la première consonne → action vers quelqu'un</h3>
<p><b>3awen</b> (aider), <b>safer</b> (voyager), <b>9abel</b> (rencontrer, faire face), <b>8awel</b> (essayer), <b>sameh</b> (pardonner, Nord), <b>bare</b>… (rare). Conjugaison régulière : <i>3awent, 3awen, 3awnat, 3awnu ; kan-3awen</i>.</p>
<h3>Formes t- (V et VI) : réfléchi, passif, réciproque</h3>
<p>On ajoute <b>t-</b> devant une forme II ou III :</p>
<table class="gtable"><tr><th>Forme II / III</th><th>t- + forme</th><th>Sens</th></tr>
<tr><td>3ellem (enseigner)</td><td><b>t3ellem</b></td><td>apprendre (s'enseigner)</td></tr>
<tr><td>bddel (changer)</td><td><b>tbeddel</b></td><td>se changer, changer (soi-même)</td></tr>
<tr><td>3awen (aider)</td><td><b>t3awen</b></td><td>s'entraider</td></tr>
<tr><td>9abel</td><td><b>t9abel</b></td><td>se rencontrer, s'affronter</td></tr>
<tr><td>—</td><td><b>tla9a</b> / <b>tl9a</b></td><td>se rencontrer (tla9ina = on s'est rencontrés)</td></tr>
<tr><td>Sewwer</td><td><b>tSewwer</b></td><td>se faire photographier ; imaginer</td></tr>
<tr><td>fekker</td><td><b>tfekker</b></td><td>se souvenir</td></tr>
<tr><td>—</td><td><b>tkellem</b></td><td>parler (soutenu)</td></tr>
<tr><td>—</td><td><b>t3esha</b></td><td>dîner</td></tr>
<tr><td>—</td><td><b>tghedda</b></td><td>déjeuner</td></tr>
<tr><td>—</td><td><b>tzewwej</b></td><td>se marier</td></tr>
<tr><td>—</td><td><b>tsara</b></td><td>se promener</td></tr>
<tr><td>—</td><td><b>tferrej</b></td><td>regarder (un spectacle, la télé)</td></tr>
<tr><td>—</td><td><b>tkherrej</b></td><td>obtenir son diplôme</td></tr></table>
<p>Conjugaison : <i>t3ellemt, t3ellemti, t3ellem, t3ellmat, t3ellemna, t3ellemtu, t3ellmu</i> ; <i>kan-t3ellem, kat-t3ellem, kay-t3ellem</i>. Attention à l'assimilation : <i>kat-t3ellem</i> se prononce « katt3ellem ».</p>
<h3>Forme tt- (VII) : le passif du darija</h3>
<p>Le darija n'a presque pas de passif « classique » : il utilise <b>tt-</b> (ou <b>n-</b> dans certaines régions) devant la forme I.</p>
<table class="gtable"><tr><th>Actif</th><th>Passif</th></tr>
<tr><td>kteb (écrire)</td><td><b>ttekteb</b> (être écrit) — <i>l-ktab ttekteb l-3am lli fat</i></td></tr>
<tr><td>ba3 (vendre)</td><td><b>tteba3</b> (être vendu) — <i>d-dar ttba3et</i></td></tr>
<tr><td>9tel (tuer)</td><td><b>tte9tel</b> (être tué)</td></tr>
<tr><td>sre9 (voler)</td><td><b>ttesre9</b> (être volé) — <i>l-portabl ttesre9 liya</i></td></tr>
<tr><td>7ell (ouvrir)</td><td><b>tte7ell</b> (s'ouvrir)</td></tr>
<tr><td>kla (manger)</td><td><b>ttekla</b> (être mangé)</td></tr>
<tr><td>dreb (frapper)</td><td><b>ttedreb</b> (être frappé)</td></tr>
<tr><td>khelleS (payer)</td><td><b>tkhelleS</b> (être payé) — forme t- classique</td></tr></table>
<div class="reg">Au Nord et à Fès, on entend aussi <b>n-</b> : <i>nkteb</i> (être écrit), <i>nDreb</i> (être frappé), <i>n9tel</i>. Le sens est identique.</div>
<h3>Forme st- (X) : demander, considérer</h3>
<p><b>st3mel</b> (utiliser), <b>stenna</b> (attendre), <b>st7e9</b> (mériter, avoir besoin), <b>st9al</b> (démissionner), <b>stghrab</b> (s'étonner), <b>stawe7sh</b> (se sentir seul, avoir le mal du pays — <i>stawe7sht lik</i> = tu me manques), <b>stghfer</b> (demander pardon à Dieu). Conjugaison régulière : <i>st3melt, st3mel, st3mlat, st3mlu ; kan-st3mel</i>.</p>
<h3>Les quadrilittères (4 consonnes)</h3>
<p>Ils se conjuguent comme une forme II : <b>terjem</b> (traduire), <b>kherbe9</b> (bâcler, embrouiller), <b>dewwez</b> (passer — forme II de daz), <b>Tel9</b>… non, <b>tferTeT</b>? Exemples courants : <b>berber</b> (bavarder), <b>Ter9e3</b> (exploser), <b>ghemmez</b> (cligner), <b>sherwel</b> (perdre le contrôle), <b>tkherbe9</b> (s'embrouiller), <b>ma3ellesh</b> (non — ce n'est pas un verbe).</p>
<div class="ok">Réflexe à prendre : devant un verbe inconnu, cherche la racine et la forme. <i>tkheddem</i> → t- + kheddem → « se faire embaucher, être employé ». <i>ttensa</i> → tt- + nsa → « être oublié ». Neuf fois sur dix, tu tomberas juste.</div>`
},
{
  id: "participe-passif", icon: "layers", title: "Le participe passif & les participes dérivés", sub: "mektub, meftu7, mesdud, m3ellem, mst3mel", cat: "Conjugaison",
  body: `
<p>Tu connais le participe actif (<i>gales</i>, <i>fa8em</i>). Son frère, le <b>participe passif</b>, décrit un résultat : « écrit », « ouvert », « fermé », « connu ». Il se forme sur le moule <b>meCCuC</b> pour les verbes simples, et avec <b>m-</b> devant les formes dérivées.</p>
<h3>1. Verbes simples : meCCuC</h3>
<table class="gtable"><tr><th>Verbe</th><th>Participe passif</th><th>Fém. / Plur.</th><th>Sens</th></tr>
<tr><td>kteb</td><td><b>mektub</b></td><td>mektuba / mektubin</td><td>écrit (et : le destin !)</td></tr>
<tr><td>fte7</td><td><b>meftu7</b></td><td>meftu7a / meftu7in</td><td>ouvert</td></tr>
<tr><td>sedd</td><td><b>mesdud</b></td><td>mesduda / mesdudin</td><td>fermé</td></tr>
<tr><td>3ref</td><td><b>me3ruf</b></td><td>me3rufa</td><td>connu</td></tr>
<tr><td>khdem</td><td><b>mekhdum</b></td><td></td><td>fait, travaillé</td></tr>
<tr><td>Tbekh</td><td><b>meTbukh</b></td><td></td><td>cuit, cuisiné</td></tr>
<tr><td>ghsel</td><td><b>meghsul</b></td><td></td><td>lavé</td></tr>
<tr><td>sre9</td><td><b>mesru9</b></td><td></td><td>volé</td></tr>
<tr><td>ksser</td><td><b>meksur</b></td><td></td><td>cassé (forme II → mkesser)</td></tr>
<tr><td>7re9</td><td><b>me7ru9</b></td><td></td><td>brûlé</td></tr>
<tr><td>9tel</td><td><b>me9tul</b></td><td></td><td>tué</td></tr>
<tr><td>Dreb</td><td><b>meDrub</b></td><td></td><td>frappé, « fou » (fam.)</td></tr>
<tr><td>bna</td><td><b>mebni</b></td><td>mebniya</td><td>construit</td></tr>
<tr><td>kra</td><td><b>mekri</b></td><td></td><td>loué</td></tr>
<tr><td>shra</td><td><b>meshri</b></td><td></td><td>acheté</td></tr>
<tr><td>3Ta</td><td><b>me3Ti</b></td><td></td><td>donné</td></tr>
<tr><td>dar</td><td><b>medyur</b></td><td></td><td>fait, mis</td></tr>
<tr><td>ba3</td><td><b>mebyu3</b></td><td></td><td>vendu</td></tr>
<tr><td>gal</td><td><b>mgul</b></td><td></td><td>dit</td></tr></table>
<h3>2. Formes dérivées : m- + inaccompli sans préfixe</h3>
<table class="gtable"><tr><th>Verbe</th><th>Participe</th><th>Sens</th></tr>
<tr><td>3ellem (enseigner)</td><td><b>m3ellem</b></td><td>enseigné ; expert, maître (m3ellem f l-ma3mel)</td></tr>
<tr><td>khelleS (payer)</td><td><b>mkhelleS</b></td><td>payé</td></tr>
<tr><td>Sewwer</td><td><b>mSewwer</b></td><td>photographié, illustré</td></tr>
<tr><td>bddel</td><td><b>mbeddel</b></td><td>changé</td></tr>
<tr><td>st3mel</td><td><b>mst3mel</b></td><td>utilisé, d'occasion (tomobil mst3mla)</td></tr>
<tr><td>t3ellem</td><td><b>mt3ellem</b></td><td>instruit, éduqué</td></tr>
<tr><td>tzewwej</td><td><b>mzewwej</b></td><td>marié (mzewwja = mariée)</td></tr>
<tr><td>tkherbe9</td><td><b>mkherbe9</b></td><td>embrouillé, en désordre</td></tr>
<tr><td>terjem</td><td><b>mterjem</b></td><td>traduit</td></tr>
<tr><td>3awen</td><td><b>m3awen</b></td><td>aidé</td></tr>
<tr><td>9elle9</td><td><b>m9elle9</b></td><td>énervé, contrarié</td></tr>
<tr><td>3iyye</td><td><b>m3iyyi</b>/3iyyan</td><td>fatigué</td></tr>
<tr><td>—</td><td><b>mriD</b></td><td>malade</td></tr>
<tr><td>—</td><td><b>mferre7</b> / <b>mferrej</b></td><td>ravi / diverti</td></tr></table>
<h3>3. Emplois</h3>
<p><b>Comme adjectif</b> : <i>l-bab meftu7</i> (la porte est ouverte), <i>d-dukkan mesdud</i> (le magasin est fermé), <i>l-ktab mektub b l-3erbiya</i>.</p>
<p><b>Comme résultat d'une action</b>, souvent sans dire qui a agi : <i>l-ma7all mesdud l-yum</i> (le local est fermé aujourd'hui), <i>l-flus mkhelleSa</i> (l'argent est payé).</p>
<p><b>Avec un pronom</b> : le participe passif prend les mêmes suffixes qu'un nom : <i>me3ruf-a 3endi</i> (je la connais, litt. connue chez moi).</p>
<div class="ex"><div class="txt"><div class="da-line">8adshi mektub. · L-bab mesduda b s-sarut. · Had t-tomobil mst3mla wella jdida ? · Ana mzewwej w 3endi juj d d-drari.</div><div class="fr-line">C'est écrit (c'est le destin). · La porte est fermée à clé. · Cette voiture est d'occasion ou neuve ? · Je suis marié et j'ai deux enfants.</div></div></div>
<div class="tip"><b>mektub</b> est aussi le mot-clé de la philosophie marocaine : « c'était écrit ». Quand quelque chose échoue, on dit <i>mektub</i> ou <i>8adshi lli kteb Llah</i>.</div>`
},
{
  id: "kan-temps-composes", icon: "clock", title: "Kan + tout : les temps composés", sub: "Plus-que-parfait, conditionnel passé, futur du passé, rani / rak", cat: "Conjugaison",
  body: `
<p>Le darija n'a que deux temps de base (accompli / inaccompli), mais il en fabrique beaucoup d'autres en plaçant <b>kan</b> (être) devant. Le chapitre sur l'imparfait t'a montré <i>kan + ka-</i>. Voici toutes les autres combinaisons — c'est ce qui sépare un débutant d'un locuteur courant.</p>
<h3>Le tableau des combinaisons</h3>
<table class="gtable"><tr><th>Structure</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><b>kan + ka-</b>inaccompli</td><td>imparfait (habitude, durée passée)</td><td><i>kent kan-skun f Casa</i> — j'habitais à Casa</td></tr>
<tr><td><b>kan + accompli</b></td><td>plus-que-parfait (avait fait)</td><td><i>melli wSelt, kan kla</i> — quand je suis arrivé, il avait mangé</td></tr>
<tr><td><b>kan + gha-</b>inaccompli</td><td>futur du passé, « allait »</td><td><i>kent gha n-mshi walakin…</i> — j'allais partir mais…</td></tr>
<tr><td><b>kan + participe</b></td><td>état passé</td><td><i>kan gales 8na</i> — il était assis ici ; <i>kanet na3sa</i> — elle dormait</td></tr>
<tr><td><b>kan + khass</b></td><td>aurait dû</td><td><i>kan khassek tji</i> — tu aurais dû venir</td></tr>
<tr><td><b>kan + 3end</b></td><td>avait</td><td><i>kan 3endi tomobil</i> — j'avais une voiture</td></tr>
<tr><td><b>kan + ymken</b></td><td>aurait pu</td><td><i>kan ymken lik t-9ul liya</i> — tu aurais pu me le dire</td></tr>
<tr><td><b>gha y-kun + participe / ka-</b></td><td>futur d'état, futur continu</td><td><i>gha n-kun 8na m3a l-3ashra</i> — je serai là à dix heures</td></tr>
<tr><td><b>y-kun + accompli</b></td><td>futur antérieur, supposition</td><td><i>ykun mSha</i> — il a dû partir / il sera parti</td></tr>
<tr><td><b>ma zal / ba9i + ka-</b></td><td>encore, toujours</td><td><i>mazal kan-9ra</i> — j'étudie encore ; <i>ba9i Sghir</i> — il est encore petit</td></tr>
<tr><td><b>3ad + accompli</b></td><td>venir de</td><td><i>3ad wSelt</i> — je viens d'arriver</td></tr>
<tr><td><b>3ad + inaccompli</b></td><td>seulement alors, ensuite</td><td><i>kmel l-khedma w 3ad t-mshi</i> — finis le travail et alors seulement tu partiras</td></tr>
<tr><td><b>sbe9 + accompli</b></td><td>déjà, auparavant</td><td><i>sbe9 lik jiti 8na ?</i> — tu es déjà venu ici ?</td></tr>
<tr><td><b>3emmer + pron + ma…</b></td><td>jamais (de la vie)</td><td><i>3emmerni ma sheft 8adshi</i> — je n'ai jamais vu ça</td></tr>
<tr><td><b>bda + ka-</b></td><td>commencer à</td><td><i>bdit kan-fhem</i> — je commence à comprendre</td></tr>
<tr><td><b>b9a + ka-</b></td><td>continuer à, rester à</td><td><i>b9a kay-8der</i> — il a continué à parler</td></tr></table>
<h3>Kan s'accorde toujours avec le sujet</h3>
<div class="ex"><div class="txt"><div class="da-line">kent · kenti · kan · kanet · kenna · kentu · kanu</div><div class="fr-line">j'étais · tu étais · il était · elle était · nous étions · vous étiez · ils étaient</div></div></div>
<div class="ex"><div class="txt"><div class="da-line">Kanet kat-khdem f l-bank. · Kanu gha y-safru l-yum. · Melli jiti, kenna klina.</div><div class="fr-line">Elle travaillait à la banque. · Ils allaient voyager aujourd'hui. · Quand tu es venu, nous avions (déjà) mangé.</div></div></div>
<h3>ra- : le présentatif (« voilà que… »)</h3>
<p><b>ra-</b> + pronom suffixé présente une situation actuelle ou attire l'attention. Très fréquent, il remplace souvent « être » au présent avec une nuance de constat :</p>
<table class="gtable"><tr><th>Forme</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><b>rani</b></td><td>me voici, je suis (en ce moment)</td><td><i>rani jay</i> — j'arrive ; <i>rani 3iyyan</i> — (je te dis que) je suis fatigué</td></tr>
<tr><td><b>rak</b> / <b>raki</b></td><td>te voilà, tu es</td><td><i>rak ghalet</i> — tu te trompes ; <i>raki zwina</i></td></tr>
<tr><td><b>ra8</b> / <b>ra8a</b></td><td>il / elle est (voilà qu'il)</td><td><i>ra8 f d-dar</i> — il est à la maison ; <i>ra8a jat</i> — elle est venue (voilà)</td></tr>
<tr><td><b>rana</b> / <b>rakum</b> / <b>ra8um</b></td><td>nous / vous / ils</td><td><i>rana m3ak</i> — on est avec toi</td></tr></table>
<p><b>ra</b> seul introduit une explication : <i>ra ana ma 3refts</i> (c'est que je ne savais pas). <b>rak 3ref</b> = tu sais bien. <b>ra8 mSha</b> = (sache qu')il est parti.</p>
<div class="tip">Enchaîne les briques comme des Lego : <i>kent</i> + <i>mazal</i> + <i>kan-</i> : <i>kent mazal kan-9ra</i> = j'étais encore en train d'étudier. Une fois le mécanisme compris, tu peux tout dire.</div>`
},
{
  id: "modaux-auxiliaires", icon: "zap", title: "Les auxiliaires modaux", sub: "bgha, 9der, khaSS, lazem, ymken, bda, b9a, 3awed…", cat: "Conjugaison",
  body: `
<p>Vouloir, pouvoir, devoir, commencer, continuer, refaire : en darija tous ces verbes s'associent à un second verbe <b>à l'inaccompli sans ka-</b> (la forme « nue », équivalent de notre infinitif). Règle unique, mais il faut connaître chaque auxiliaire et ses particularités.</p>
<h3>La règle : auxiliaire + verbe nu</h3>
<div class="ex"><div class="txt"><div class="da-line">Bghit <b>n-mshi</b>. · Kat-9der <b>t-ji</b> ? · KhaSSni <b>n-khdem</b>. · Bda <b>y-9ra</b>.</div><div class="fr-line">Je veux partir. · Tu peux venir ? · Je dois travailler. · Il a commencé à étudier.</div></div></div>
<div class="warn">Jamais « bghit kan-mshi ». Le second verbe perd toujours son ka-, mais garde le préfixe de personne (n-, t-, y-) accordé avec le sujet.</div>
<h3>Vouloir : bgha</h3>
<p>Conjugué à l'accompli avec sens présent : <b>bghit</b> (je veux), bghiti, bgha, bghat, bghina, bghitu, bghaw. Négation : <i>ma bghitsh</i>. Avec un nom : <i>bghit atay</i>. Avec un pronom : <i>bghitek</i> (je te veux / je t'aime), <i>bghitu</i> (je le veux). « Vouloir que » : <i>bghitek t-ji</i> (je veux que tu viennes) — pas de « que » ! Au passé : <i>kent bghit</i>.</p>
<h3>Pouvoir : 9der / ymken</h3>
<p><b>9der</b> (capacité) : <i>kan-9der n-8der</i> (je peux parler), <i>ma 9dertsh n-ji</i> (je n'ai pas pu venir). <b>ymken</b> (possibilité, permission) est invariable + <b>l</b> + pronom : <i>ymken li n-dkhel ?</i> (je peux entrer ?), <i>ymken lik t-mshi</i> (tu peux y aller), <i>ymken</i> seul = peut-être : <i>ymken y-ji ghedda</i>. <b>wa9ila</b> = probablement.</p>
<h3>Devoir : khaSS / lazem / 3la</h3>
<ul>
<li><b>khaSS + pronom</b> (le plus courant) : <i>khaSSni n-mshi</i> (il faut que je parte), <i>khaSSek t-9ra</i>, <i>khaSSu y-khdem</i>, <i>khaSSna n-mshiw</i>. Avec un nom = avoir besoin : <i>khaSSni flus</i>. Passé : <i>kan khaSSni</i>. Négation : <i>ma khaSSekch t-mshi</i> (tu ne dois pas partir).</li>
<li><b>lazem</b> (invariable, plus fort, plutôt « obligatoire ») : <i>lazem t-ji</i>, <i>lazem 3lik t-ji</i>.</li>
<li><b>3la + pronom</b> (devoir moral, conseil) : <i>3lik t-9ul li8</i> (tu devrais lui dire). Nord : <i>3lik ma t-ji</i>.</li>
<li><b>Daruri</b> = nécessairement, <i>mashi Daruri</i> = ce n'est pas obligatoire.</li></ul>
<h3>Commencer, continuer, finir, refaire</h3>
<table class="gtable"><tr><th>Auxiliaire</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><b>bda</b> + ka- ou verbe nu</td><td>commencer à</td><td><i>bdit kan-fhem</i> / <i>bda y-khdem</i></td></tr>
<tr><td><b>b9a</b> + ka-</td><td>continuer à, rester</td><td><i>b9at kat-bki</i> — elle a continué à pleurer</td></tr>
<tr><td><b>ba9i / mazal</b> + ka-</td><td>encore</td><td><i>ba9i kay-n3es</i></td></tr>
<tr><td><b>sala / kemmel</b> + verbe nu ou nom</td><td>finir de</td><td><i>salit n-akul</i> — j'ai fini de manger ; <i>kemmel l-khedma</i></td></tr>
<tr><td><b>3awed</b> + verbe nu</td><td>refaire, encore une fois</td><td><i>3awed 9ul</i> — redis ; <i>3awedt shrit</i> — j'ai racheté</td></tr>
<tr><td><b>rje3</b> + verbe nu</td><td>se remettre à</td><td><i>rje3 y-dekhkhen</i> — il s'est remis à fumer</td></tr>
<tr><td><b>zad</b> + verbe nu</td><td>continuer, en plus</td><td><i>zid 9ul</i> — continue ; <i>zad khda</i> — il a pris en plus</td></tr>
<tr><td><b>7awel / jerreb</b> + verbe nu</td><td>essayer de</td><td><i>7awel t-fhem</i> ; <i>jerreb t-akul</i> — goûte (essaie de manger)</td></tr>
<tr><td><b>nsa</b> + verbe nu</td><td>oublier de</td><td><i>nsit n-sedd l-bab</i></td></tr>
<tr><td><b>3ref</b> + verbe nu</td><td>savoir (faire)</td><td><i>kat-3ref t-sug ?</i> — tu sais conduire ?</td></tr>
<tr><td><b>7ebb</b> / <b>bgha</b> + verbe nu</td><td>aimer faire</td><td><i>kan-bghi n-akul</i> — j'aime manger</td></tr>
<tr><td><b>fDDel</b> + verbe nu</td><td>préférer</td><td><i>kan-fDDel n-b9a f d-dar</i></td></tr>
<tr><td><b>khaf</b> + verbe nu</td><td>craindre de</td><td><i>khaft n-mshi bu7di</i></td></tr>
<tr><td><b>walef / wellef</b> + verbe nu</td><td>avoir l'habitude de</td><td><i>walft n-fi9 bekri</i></td></tr>
<tr><td><b>Tale3 li</b> / <b>ja li</b> + verbe nu</td><td>avoir envie de</td><td><i>Tale3 li n-akul shokola</i>, <i>jat li n-n3es</i></td></tr></table>
<h3>Ordre et pronoms</h3>
<p>Un pronom objet se colle au verbe qu'il complète : <i>bghit n-shuf<b>u</b></i> (je veux le voir), <i>khaSSni n-3Ti<b>8a</b> li8</i> (je dois la lui donner). Un adverbe se glisse après l'auxiliaire : <i>bghit daba n-mshi</i>.</p>
<div class="ok">Retiens la mécanique : <b>auxiliaire (conjugué ou + pronom) + verbe nu accordé</b>. Puis apprends 5 auxiliaires par jour avec les flashcards. En une semaine, tu exprimeras vouloir, pouvoir, devoir, commencer et finir dans tous les contextes.</div>`
},
{
  id: "verbes-mouvement", icon: "compass", title: "Verbes de mouvement & directions", sub: "msha l, ja men, Tle3, 8beT, dkhel, khrej, daz, rje3", cat: "Conjugaison",
  body: `
<p>Les verbes de mouvement sont quotidiens et régissent des prépositions précises. Voici les douze essentiels avec leur construction, leur impératif irrégulier et les expressions qui en découlent.</p>
<table class="gtable"><tr><th>Verbe</th><th>Sens</th><th>Préposition</th><th>Impératif</th><th>Participe</th></tr>
<tr><td><b>msha</b> / y-mshi</td><td>aller, partir</td><td><b>l</b> (vers) : msha l s-su9</td><td><b>sir !</b> siri, siru</td><td>mashi</td></tr>
<tr><td><b>ja</b> / y-ji</td><td>venir</td><td><b>men</b> (de), <b>l</b> (vers), <b>3end</b> (chez)</td><td><b>aji !</b> aji, ajiw</td><td>jay</td></tr>
<tr><td><b>rje3</b> / y-rje3</td><td>revenir, retourner</td><td><b>l</b> : rje3 l d-dar</td><td>rje3 !</td><td>raje3</td></tr>
<tr><td><b>dkhel</b> / y-dkhul</td><td>entrer</td><td><b>l</b> : dkhel l l-bit</td><td>dkhul !</td><td>dakhel</td></tr>
<tr><td><b>khrej</b> / y-khrej</td><td>sortir</td><td><b>men</b> : khrej men d-dar</td><td>khrej !</td><td>kharej</td></tr>
<tr><td><b>Tle3</b> / y-Tle3</td><td>monter</td><td><b>l</b> / <b>f</b> : Tle3 l T-Tabe9 · Tle3 f l-kar</td><td>Tle3 !</td><td>Tale3</td></tr>
<tr><td><b>8beT</b> / y-8beT</td><td>descendre</td><td><b>men</b> / <b>l</b></td><td>8beT !</td><td>8abeT</td></tr>
<tr><td><b>wSel</b> / y-wSel</td><td>arriver</td><td><b>l</b> : wSel l Rbat</td><td>—</td><td>waSel</td></tr>
<tr><td><b>daz</b> / y-duz</td><td>passer</td><td><b>men</b> (par), <b>3la</b> (chez, voir)</td><td>duz !</td><td>dayez</td></tr>
<tr><td><b>b9a</b> / y-b9a</td><td>rester</td><td><b>f</b> : b9a f d-dar</td><td>b9a !</td><td>ba9i</td></tr>
<tr><td><b>jra</b> / y-jri</td><td>courir</td><td>—</td><td>jri !</td><td>jari</td></tr>
<tr><td><b>w9ef</b> / y-w9ef</td><td>s'arrêter, se lever</td><td>—</td><td>w9ef !</td><td>wa9ef</td></tr>
<tr><td><b>gles</b> / y-gles</td><td>s'asseoir</td><td>—</td><td>gles !</td><td>gales</td></tr>
<tr><td><b>naD</b> / y-nuD</td><td>se lever</td><td>—</td><td>nuD !</td><td>naD (rare)</td></tr>
<tr><td><b>hrab</b> / y-hreb</td><td>fuir</td><td>men</td><td>hreb !</td><td>hareb</td></tr>
<tr><td><b>Ta7</b> / y-Ti7</td><td>tomber</td><td>men / f</td><td>—</td><td>Taye7</td></tr>
<tr><td><b>safer</b> / y-safer</td><td>voyager</td><td>l</td><td>safer !</td><td>msafer</td></tr>
<tr><td><b>rkeb</b> / y-rkeb</td><td>monter (dans, sur)</td><td>f : rkeb f T-Taksi</td><td>rkeb !</td><td>rakeb</td></tr>
<tr><td><b>nzel</b> / y-nzel</td><td>descendre (Nord, Oriental)</td><td>men</td><td>nzel !</td><td>nazel</td></tr></table>
<h3>Le participe : le vrai présent du mouvement</h3>
<p>Comme en anglais « I'm going », le participe actif exprime le mouvement <b>en cours</b> : <b>ana mashi</b> (je pars / j'y vais), <b>ana jay</b> (j'arrive), <b>8iya jaya</b>, <b>7na mashyin l s-su9</b>. Le présent en ka- exprime l'habitude : <i>kan-mshi l l-khedma kul nhar</i>.</p>
<h3>« Aller + verbe » : pas de « pour »</h3>
<p>Deux verbes de suite, le second nu : <b>msha y-shri</b> (il est allé acheter), <b>aji t-akul</b> (viens manger), <b>sir shuf</b> (va voir), <b>ja y-zurna</b> (il est venu nous voir), <b>Tle3 y-n3es</b> (il est monté dormir). On peut ajouter <b>bash</b> pour insister sur le but : <i>msha bash y-shri</i>.</p>
<h3>Les impératifs à connaître par cœur</h3>
<div class="ex"><div class="txt"><div class="da-line">Sir ! · Aji ! · Ara ! · Yallah ! · Sir f 7alek ! · Aji 8na ! · Duz ! · Dkhul, mer7ba bik ! · Gles ! · Nud ! · B9a ! · Zid ! · W9ef !</div><div class="fr-line">Va ! · Viens ! · Donne (ici) ! · Allons-y ! · Va-t'en ! · Viens ici ! · Passe ! · Entre, bienvenue ! · Assieds-toi ! · Lève-toi ! · Reste ! · Continue / avance ! · Arrête-toi !</div></div></div>
<div class="reg"><b>sir</b> est l'impératif de msha partout au Maroc. Au Nord on entend aussi <b>rwa7</b> (viens, de l'arabe rā7) et <b>zid</b> pour « avance ». À Oujda : <b>ru7 !</b> (va) est fréquent, comme en Algérie.</div>
<h3>Expressions avec les verbes de mouvement</h3>
<ul>
<li><b>msha f 7alu</b> — il est parti (s'en est allé) · <b>sir f 7alek</b> — laisse-moi tranquille</li>
<li><b>mshat li8 / mshat 3li8</b> — il l'a ratée (l'occasion) · <b>msha lik l-kar</b> — tu as raté le bus</li>
<li><b>ja m3ak</b> — ça te va (vêtement) · <b>ja f blaStu</b> — c'est tombé juste</li>
<li><b>daz 3liya</b> — il est passé me voir · <b>daz l-we9t</b> — le temps a passé · <b>dwwez l-we9t</b> — passer le temps</li>
<li><b>Tle3 li8</b> — il s'est énervé (ça lui est monté) · <b>Tle3 f rasu</b> — il a pris la grosse tête</li>
<li><b>8beT men t-taman</b> — baisse le prix · <b>8beT lya</b> — descends (au téléphone : viens en bas)</li>
<li><b>khrej men 3e9li</b> — je suis devenu fou · <b>dkhel f l-mawdu3</b> — entre dans le vif du sujet</li>
<li><b>rje3 l 3e9lek</b> — reviens à la raison · <b>ma rje3sh</b> — il n'est pas revenu</li>
<li><b>wSel l l-kalima</b>… non — <b>wSel</b> aussi = « atteindre » : <i>wSelt l 3eshrin</i> (j'ai atteint vingt).</li></ul>`
}
);
