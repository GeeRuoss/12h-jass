# Les 12 heures du Jass

Site du tournoi de jass du samedi 6 mars 2027 à l'Espace Saint-Marc, Le Châble (Val de Bagnes).
Astro génère des pages HTML/CSS/JS statiques, publiées sur GitHub Pages.

## À compléter par le comité

Tout se règle dans un seul fichier : `src/data/event.ts`.

- `registration.form` : lien du formulaire d'inscription (Google Forms).
- `registration.email` et `registration.phone` : e-mail et téléphone d'inscription.
- `registration.price` : prix d'inscription, par exemple `"CHF 80 par équipe"`.
- `sponsors.main` et `sponsors.partners` : nom, lien et logo (fichier dans `public/images/sponsors/`).
- `organizer.email` : contact du comité (mentions légales, bouton « Devenir sponsor »).
- `prizes.items` : liste définitive des lots.

Tant qu'un champ est vide, le site affiche « à venir » à sa place.

## Développement

Node.js 22.12 ou supérieur.

```sh
npm ci
npm run dev
npm run build
npm run check
npm run images
```

`npm run images` régénère l'image de partage avec Google Chrome, sous un nom horodaté par empreinte (`public/images/og-image-xxxxxxxx.jpg`, référencé dans `src/data/og.json`) pour que WhatsApp et les réseaux rechargent la nouvelle miniature.
`scripts/build-brand.py` régénère les composants de logo et le favicon depuis `brand/logo-original.svg`.

## Structure

- `src/pages/index.astro` : page unique (programme, lots, inscription, accès, sponsors).
- `src/pages/mentions-legales.astro` et `src/pages/404.astro`.
- `src/layouts/Layout.astro` : navigation, pied de page, métadonnées, données structurées Event.
- `src/data/event.ts` : toutes les données du tournoi.
- `src/styles/style.css` : style partagé, mobile d'abord.
- `src/components/` : logo (Badge, Mark), enseignes de cartes (Suit), verre (Glass), flèche (Arrow).

## Publication

Chaque push sur `main` compile, contrôle et publie la prévisualisation sur
https://geeruoss.github.io/12h-jass/ (noindex tant que `PUBLIC_PREVIEW` vaut `true`).

Pour un futur domaine : `SITE_URL=https://exemple.ch BASE_PATH=/ PUBLIC_PREVIEW=false npm run build`,
puis servir le contenu de `dist/`.
