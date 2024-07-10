Kasa - Location d'Appartements Entre Particuliers
Kasa est un leader de la location d'appartements entre particuliers en France, avec plus de 500 annonces postées chaque jour. Ce projet vise à refondre entièrement le site en utilisant React pour le front-end.

Objectifs :
Démarrer le projet React et développer l'application.
Implémenter les composants et les routes en suivant les maquettes Figma.
Assurer un code de qualité et conforme aux guidelines de Kasa.


Structure du Projet :

my-app
├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── Banner
│   │   ├── Cards
│   │   ├── Carousel
│   │   ├── Collapse
│   │   ├── Error
│   │   ├── Footer
│   │   ├── Gallery
│   │   ├── Header
│   ├── datas
│   │   └── logements.json
│   ├── pages
│   │   ├── Apropos
│   │   ├── Home
│   │   ├── Logement
│   │   ├── NotFound
│   ├── router
│   │   └── router.js
│   ├── App.js
│   ├── App.scss
├── .gitignore
├── package.json
└── README.md

Détails

assets : Fichiers multimédias (images, icônes).
components : Composants réutilisables (Banner, Cards, Carousel, etc.).
datas : Données statiques (logements.json).
pages : Pages de l'application (Apropos, Home, Logement, NotFound).
router : Configuration des routes (router.js).
Fonctionnalités Clés
Gallery : Défilement circulaire des images avec boutons de navigation masqués si une seule image.
Collapse : Comportement d'ouverture/fermeture au clic, initialement fermé.

Installation et Lancement

Clonez le dépôt :
git clone https://github.com/cerinetbls/projet-5.git

Installez les dépendances :
cd projet-5
npm install

Lancez l'application :
npm start
