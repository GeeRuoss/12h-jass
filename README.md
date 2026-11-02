# Les 12 heures du Jass

Site du tournoi de jass du samedi 6 mars 2027 à l'Espace Saint-Marc, Le Châble (Val de Bagnes).
Astro génère des pages HTML/CSS/JS statiques, publiées sur GitHub Pages.

## À compléter par le comité

Tout se règle dans un seul fichier : `src/data/event.ts`.

- `registration.payment.twintQr` : chemin d'un éventuel QR TWINT dans `public/` (le lien de paiement est déjà actif).
- `sponsors.main` et `sponsors.partners` : nom, lien et logo (fichier dans `public/images/sponsors/`).
- `organizer.email` : contact du comité (mentions légales, bouton « Devenir sponsor »).
- `prizes.items` : liste définitive des lots.

Les inscriptions sont ouvertes par WhatsApp, e-mail ou téléphone, seul ou en équipe, avec le choix de sauce pour chaque joueur. Prix confirmés : 75 CHF par personne, 150 CHF par équipe. Le paiement est disponible par TWINT et par bulletin de versement PDF (`public/bulletin-versement.pdf`, fourni par le comité le 02/11/2026 et conservé à l'identique). Les deux moyens figurent dans la section inscription et dans le rappel de paiement. Pour un paiement par bulletin, le site demande aussi un message WhatsApp ou un e-mail avec les noms des joueurs, le nom d'équipe et les repas choisis.

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

Chaque push sur `main` compile, contrôle et publie le site sur
https://12hdujass.ch/ (GitHub Pages). `www.12hdujass.ch` et l'ancienne adresse
https://geeruoss.github.io/12h-jass/ redirigent vers ce domaine principal.

`npm run build:pages` produit la version du domaine avec l'indexation autorisée.
`npm run build:preview` conserve le build de prévisualisation sous `/12h-jass/`
avec `noindex` ; vérifier ce build avec `BASE_PATH=/12h-jass npm run check`.

Le domaine est géré chez Hostpoint. Le domaine racine utilise les quatre adresses
IPv4 et IPv6 de GitHub Pages ; `www` est un CNAME vers `geeruoss.github.io`.
Conserver les enregistrements de messagerie Hostpoint lors des changements DNS.
