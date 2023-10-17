const JeuxDeRoles = [
  {
    titre: "Donjons & Dragons",
    description: "Plongez dans un univers infini et forgez votre destinée héroïque aux côtés d'ami·e·s, affrontant des monstres épiques, résolvant des énigmes et vivant des aventures inoubliables&nbsp;!",
    sousTitre: "Le premier jeu de rôles",
    tags: ["Fantasy", "Médiéval"],
    image: "d&d.avif",
    auteur: "Tyler Jacobson"
  },
  {
    titre: "L'Appel de Cthulhu",
    description: "Découvrez un univers angoissant et mystérieux, où vous devrez enquêter sur des horreurs indicibles et affronter la folie elle-même pour préserver votre santé mentale et survivre.",
    sousTitre: "Inspiré des écrits de Lovecraft",
    tags: ["Contemporain", "Horreur", "Fantastique"],
    image: "call-of-cthulhu.avif",
    auteur: "Sam Lamont"
  },
  {
    titre: "Vampire La Mascarade",
    description: "Explorez les sombres intrigues d'un monde nocturne empli de pouvoir et de trahison en tant que vampire cherchant à assouvir sa soif et à préserver sa fragile humanité dans un univers gothique moderne.",
    sousTitre: "Révélez votre véritable nature",
    tags: ["Contemporain", "Fantastique"],
    image: "vampire.avif",
    auteur: "Tomas Arfert"
  },
  {
    titre: "Alice is Missing",
    description: "Résolvez le mystère de la disparition d'Alice en utilisant uniquement des messages texte et des indices dans ce jeu de rôle immersif.",
    sousTitre: "ENnie Award 2021 du meilleur jeu",
    tags: ["Enquête", "Non&nbsp;verbale"],
    image: "alice.avif",
    auteur: "Julianne Griepp"
  },
  {
    titre: "Kult Divinité Perdue",
    description: "Explorez un monde sombre et dérangeant où la réalité se tord, les dieux déchus rôdent et votre propre nature est le plus grand mystère à résoudre.",
    sousTitre: "Destiné à un public averti",
    tags: ["Fantastique", "Contemporain", "Horreur"],
    image: "kult.avif",
    auteur: "Bastien Lecouffe-Deharme"
  },
  {
    titre: "Masques Nouvelle&nbsp;Génération",
    description: "Incarnez un·e adolescent·e doté·e de super-pouvoirs et explorez l'identité en constante évolution de votre héros dans un monde de super-héros en plein bouleversement.",
    sousTitre: "Super-pouvoirs, super-problèmes",
    tags: ["Superhéros"],
    image: "masks.avif",
    auteur: "Michael Lee Lunsford"
  },
  {
    titre: "Milky Monsters",
    description: "Explorez un monde fantastique plein de créatures magiques avec Milky Monsters, le jeu de rôle idéal pour les jeunes aventurier·ère·s en herbe&nbsp;!",
    sousTitre: "Le JdR des petit·e·s rôlistes",
    tags: ["Aventure", "Enfant"],
    image: "milky-monsters.avif",
    auteur: "Valentin Jentey"
  },
  {
    titre: "Vaesen",
    description: "Explorez les sombres mystères des contes nordiques dans Vaesen et devenez un enquêteur surnaturel dans une Scandinavie du 19e siècle hantée par des créatures mythiques.",
    sousTitre: "L'horreur scandinave",
    tags: ["Fantastique", "Horreur"],
    image: "vaesen.avif",
    auteur: "Johan Egerkrans"
  },
  {
    titre: "Dungeon World",
    description: "Imaginez un monde fantastique rempli de mystères, de monstres et de magie, où chaque choix que vous faites façonne votre destinée.",
    sousTitre: "Similaire à D&D",
    tags: ["Médiéval", "Fantastique"],
    image: "dungeon-world.avif",
    auteur: "Nate Marcel"
  },
  {
    titre: "Apocalypse World",
    description: "Explorez un monde brutal et chaotique où vous devrez forger des alliances, prendre des décisions moralement ambiguës et lutter pour votre survie.",
    sousTitre: "Survie, pouvoir, apocalypse&nbsp;!",
    tags: ["Post-apocalypse"],
    image: "apocalypse-world.avif",
    auteur: "Alesmunt"
  },
  {
    titre: "Monster of the Week",
    description: "Affrontez des créatures surnaturelles et des mystères sombres en incarnant des chasseurs de monstres dans un univers moderne rempli d'action et de suspense.",
    sousTitre: "Vivez votre propre série surnaturelle",
    tags: ["Contemporain", "Horreur", "Fantastique"],
    image: "monster-of-the-week.avif",
    auteur: "Eric Quigley"
  },
  {
    titre: "Cyberpunk Red",
    description: "Explorez un futur dystopique où la technologie et le chaos se mêlent dans une quête effrénée pour le pouvoir et la survie.",
    sousTitre: "Néons chatoyants et futur incertain",
    tags: ["Cyberpunk"],
    image: "cyberpunk-red.avif",
    auteur: "Anselm Zielonka"
  },
  {
    titre: "Gotham City Chronicles",
    description: "Explorez les rues sombres et dangereuses de Gotham City en incarnant vos héros et vilains préférés dans ce jeu de rôle palpitant.",
    sousTitre: "Incarnez le Chevalier Noir",
    tags: ["Superhéros", "Aventure"],
    image: "batman.avif",
    auteur: "Jorge Jimenez"
  },
  {
    titre: "Ten Candles",
    description: "Survivez à l'apocalypse dans un monde plongé dans l'obscurité totale, avec seulement dix bougies pour vous guider.",
    sousTitre: "La lumière vacille, la survie aussi",
    tags: ["Horreur", "Tragédie"],
    image: "ten-candles.avif",
    auteur: "J.C. Park"
  },
  {
    titre: "Fabula Ultima",
    description: "Créez des mondes fantastiques, incarnez des héros uniques, et affrontez d'incroyables monstres dans ce jeu de rôle inspiré des JRPGs, offrant une expérience immersive et épique.",
    sousTitre: "Votre monde, votre histoire",
    tags: ["JRPG", "Fantastique"],
    image: "fabula-ultima.avif",
    auteur: "Moryo"
  },
  {
    titre: "Fléaux!",
    description: "Incarnez des gibiers de potence en quête de fortune et de gloire, dans un monde impitoyable et fantastique.",
    sousTitre: "Du chaos naîtra l'espoir, ou pas",
    tags: ["Médiéval", "Renaissance", "Fantastique"],
    image: "fléaux.avif",
    auteur: "Carlos Castilho"
  },
  {
    titre: "Fallout",
    description: "Chaque choix compte dans votre quête pour survivre et façonner votre destin dans un monde dévasté par la guerre nucléaire.",
    sousTitre: "Survie. Liberté. Vault-Tec.",
    tags: ["Post-apocalypse"],
    image: "fallout.avif",
    auteur: "Michal E Cross"
  },
  {
    titre: "Noc",
    description: "Incarnez des dissidents luttant pour percer les mystères de l'Objet-dieu et offrir une nouvelle aube à l'humanité.",
    sousTitre: "Graal d'Or 2023 Création&nbsp;Francophone",
    tags: ["Dystopie", "Science Fiction"],
    image: "noc.avif",
    auteur: "Cédric Chaillol"
  },
  {
    titre: "Tales from the Loop",
    description: "Découvrez un monde rétro-futuriste mystérieux où des enfants et d'énigmatiques machines se croisent, mêlant aventure, émotion et science-fiction.",
    sousTitre: "5 ENnie Awards en 2017",
    tags: ["Uchronie", "Anticipation", "Années&nbsp;80"],
    image: "tales-from-the-loop.avif",
    auteur: "Simon Stålenhag"
  },
  {
    titre: "Shiver",
    description: "Donnez vie à vos films d'horreur préférés, à ces émissions de télévision terrifiantes ou à vos propres histoires d'épouvante.",
    sousTitre: "Contes de l'étrange et de l'inconnu",
    tags: ["Horreur"],
    image: "shiver.avif",
    auteur: "Ben Alexander"
  },
  /* {
    titre: "xxx",
    description: "xxx",
    sousTitre: "xxx",
    tags: ["xxx", "xxx", "xxx"],
    image: "xxx",
    auteur: "xxx"
  }, */
];
  
const cardsContainer = document.getElementById('cards-container');
JeuxDeRoles.forEach((jeu) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <div class="card__poster"><img src="../images/jdr/${jeu.image}" alt="${jeu.titre}"></div>
    <div class="card__details">
      <h1 class="card__title">${jeu.titre}</h1>
      <h2 class="card__subtitle">${jeu.sousTitre}</h2>
      <div class="card__tags">${jeu.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <p class="card__desc">${jeu.description}</p>
      <small class="card__author"><i class="fa-solid fa-palette"></i>&ensp;${jeu.auteur}</small>
    </div>
  `;
  cardsContainer.appendChild(card);
});
