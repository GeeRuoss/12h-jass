// === Données du tournoi ===
// Source unique pour toutes les pages : dates, lieu, programme, lots, inscription, sponsors.
// Les champs vides sont affichés comme « à venir » sur le site : les remplir ici suffit.

export const event = {
  name: "Les 12 heures du Jass",
  shortName: "12 heures du Jass",
  description:
    "Tournoi de jass par équipes de deux, ouvert à tous les âges et tous les niveaux, le samedi 6 mars 2027 à l'Espace Saint-Marc du Châble. Café-croissant, repas, raclette et soirée animée par les Magic Men, ouverte à tous et gratuite.",
  date: {
    iso: "2027-03-06",
    start: "2027-03-06T07:15:00+01:00",
    end: "2027-03-07T00:00:00+01:00",
    label: "Samedi 6 mars 2027",
    short: "6 mars 2027",
  },
  venue: {
    name: "Espace Saint-Marc",
    street: "Route de Mauvoisin 45",
    zip: "1934",
    city: "Le Châble",
    region: "Val de Bagnes",
    maps: "https://www.google.com/maps/search/?api=1&query=Espace+Saint-Marc+Route+de+Mauvoisin+45+1934+Le+Ch%C3%A2ble",
  },
  program: [
    {
      time: "7h15",
      title: "Café et croissants",
      text: "Accueil des équipes autour d'un café-croissant.",
    },
    {
      time: "8h",
      until: "13h15",
      title: "Début des matchs",
      text: "Première donne. Les douze heures commencent. Pause de 15 minutes dans la matinée.",
    },
    {
      time: "13h15",
      until: "14h45",
      title: "Repas de midi",
      text: "Pâtes sur place, sauce au choix. On ne saurait jouer le ventre vide et le gosier sec.",
    },
    {
      time: "14h45",
      until: "20h",
      title: "Reprise des matchs",
      text: "Les cartes reprennent jusqu'au soir. Pause de 15 minutes dans l'après-midi.",
    },
    {
      time: "20h30",
      until: "minuit",
      title: "Remise des prix, puis soirée avec les Magic Men",
      text: "Raclette, apéro et baloche. Ouverte à tous, joueurs ou non, entrée libre.",
    },
  ],
  // Soirée mise en avant sur la page : ouverte à tout le monde, même sans avoir joué.
  evening: {
    time: "Dès 21h",
    band: "Les Magic Men",
    // Logo officiel repris de magic-men.ch (300 px, le plus grand disponible).
    logo: "images/magic-men.webp",
    url: "https://magic-men.ch/",
    title: "Le soir, tout le monde est invité.",
    text: "Dès 21h, les Magic Men animent la soirée : raclette, apéro et baloche jusqu'à minuit. Pas besoin d'avoir joué, l'entrée est gratuite.",
    facts: ["Dès 21h", "Ouvert à tous", "Entrée gratuite"],
  },
  // Lots annoncés par Louis le 12/11/2026. Chaque lot porte une carte d'atout cœur, de la plus forte à la plus faible
  // selon l'ordre du jass : valet (bour), neuf (nell), as, roi, dame, dix, huit, sept, six.
  // Pour changer l'ordre d'importance, il suffit de déplacer les lignes : la carte suit la position.
  prizes: {
    intro: "Atout cœur. Neuf cartes en main, un lot derrière chacune.",
    ranks: [
      { rank: "V", card: "Le bour, valet de cœur" },
      { rank: "9", card: "Le nell, neuf de cœur" },
      { rank: "A", card: "As de cœur" },
      { rank: "R", card: "Roi de cœur" },
      { rank: "D", card: "Dame de cœur" },
      { rank: "10", card: "Dix de cœur" },
      { rank: "8", card: "Huit de cœur" },
      { rank: "7", card: "Sept de cœur" },
      { rank: "6", card: "Six de cœur" },
    ],
    items: [
      { name: "Paires de skis", text: "Une paire de skis chacun, 2 skis par personne, 4 skis en tout\u202f! Rendez-vous compte\u202f!" },
      { name: "Un bon voyage", text: "Allez voir ailleurs si nous y sommes." },
      { name: "Caissette de légumes hebdomadaire", text: "Et ça, on le raie de la liste des courses." },
      { name: "Demi-cochon bio", text: "Préparez-vous à faire de la place dans votre congèle\u202f!" },
      { name: "Un four à raclette", text: "Pas de four\u202f? Pas de four, pas de raclette. Pas de raclette, pas de raclette." },
      { name: "Produits du terroir", text: "Fromage, saucisse, vin, viandes sèches… Qu'il est bon notre terroir\u202f!" },
      { name: "Une nuit d'hôtel", text: "Ça vous ferait une belle jambe si vous habitez dans le coin. Vous n'aurez au moins pas besoin de refaire les draps, c'est toujours ça." },
      { name: "120\u00a0kg de patates", text: "1\u00a0kg par heure, rentable non\u202f? Aurez-vous la (mal)chance de «\u00a0tomber\u00a0» sur ce lot\u202f?" },
      { name: "Et plus encore", text: "Goodies, bon restaurant, bon d'achat…" },
    ],
  },
  registration: {
    // Numéro WhatsApp des inscriptions au format international sans « + » ni espaces (079 572 97 03, reçu le 06/10/2026).
    whatsapp: "41795729703",
    whatsappIntro: "Bonjour ! Je souhaite inscrire une équipe aux 12 heures du Jass du samedi 6 mars 2027.",
    // Les mêmes inscriptions par e-mail ou par téléphone. Le formulaire en ligne reste possible plus tard (lien vide = masqué).
    form: "",
    email: "loicvaudan@gmail.com",
    phone: "079 572 97 03",
    // Sauce des pâtes de midi, à choisir pour chaque joueur.
    sauces: ["Bolo", "Carbo", "Pesto"],
    price: { person: "75.-", team: "150.-" },
    included: "Le prix d'inscription comprend un verre à vin gravé par personne, une bouteille par équipe, le café-croissant, le repas de midi et une raclette le soir.",
    onSite: "Pas d'inscription ni de paiement sur place.",
    // Le lien TWINT ouvre le paiement du comité. Pour ajouter un QR, poser le fichier
    // dans public/images/ (par exemple "images/twint.png") et le bulletin en PDF dans public/ (par exemple "bulletin-versement.pdf").
    payment: {
      text: "Paiement par TWINT ou par bulletin de versement, à réception de la confirmation.",
      twintUrl: "https://go.twint.ch/1/e/tw?tw=acq.Ggxlwj1XQnmRnlpqhW0OenYxQR_7CttUOcu3qmkqmyxN61Q77bPiGkqx4zYDuVS5.",
      twintQr: "",
      slip: "bulletin-versement.pdf",
      slipInstructions: "Si tu paies par bulletin, envoie aussi au comité un message WhatsApp ou un e-mail avec les prénoms et noms des joueurs, le nom d'équipe et les repas choisis (sauce des pâtes pour chacun).",
    },
  },
  sponsors: {
    // { name: "Nom", url: "https://…", logo: "images/sponsors/nom.svg", scale: 1 } : logo et lien facultatifs, scale ajuste la taille optique.
    main: [
      {
        name: "Ruoss Communication",
        url: "https://www.ruosscommunication.com",
        logo: "images/sponsors/ruoss-communication.svg",
        scale: 0.8,
      },
      {
        name: "Fellay & Bruchez Carrelage, pierres naturelles",
        url: "https://fellay-bruchez-carrelage.ch/",
        logo: "images/sponsors/fellay-bruchez-carrelage.webp",
        scale: 1.12,
      },
      {
        name: "AXA, agence principale Valentin Baillifard, Verbier/Entremont",
        url: "https://www.axa.ch/fr/aproposdaxa/endroits/agenturen/verbier_50002354.html",
        logo: "images/sponsors/axa-verbier-entremont.svg",
        scale: 1.08,
      },
      {
        name: "Montagne Show",
        url: "https://montagneshow.ch/",
        logo: "images/sponsors/montagne-show.svg",
      },
      {
        name: "Happy Sport, Le Châble",
        url: "https://happysports.ch/",
        logo: "images/sponsors/happy-sport.webp",
      },
      {
        name: "Heinz Immobilier, Verbier",
        url: "https://heinz-immobilier.ch/",
        logo: "images/sponsors/heinz-immobilier.png",
      },
      {
        name: "Domaine Jean-René Germanier",
        url: "https://jrgermanier.ch/",
        logo: "images/sponsors/domaine-jean-rene-germanier.webp",
      },
    ] as Sponsor[],
    partners: [] as Sponsor[],
  },
  hotels: [
    {
      name: "Hôtel A Lârze",
      url: "https://alarze.ch/",
      note: "Route de Corberaye 32, Le Châble",
    },
    {
      name: "Hôtel du Giétroz",
      url: "https://hotel-gietroz.ch/",
      note: "À 200 m de la gare du Châble",
    },
  ],
  organizer: {
    name: "Comité d'organisation des 12 heures du Jass",
    email: "",
  },
};

export type Sponsor = { name: string; url?: string; logo?: string; scale?: number };

export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const asset = (file: string) => `${base}/${file}`;
export const href = (path = "") => `${base}/${path}`;

export const nav = [
  { label: "Programme", anchor: "programme" },
  { label: "Soirée", anchor: "soiree" },
  { label: "Lots", anchor: "lots" },
  { label: "Inscription", anchor: "inscription" },
  { label: "Accès", anchor: "acces" },
  { label: "Sponsors", anchor: "sponsors" },
];

// Numéro suisse au format 079 … converti en lien tel:+4179…
export const telHref = (phone: string) => {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits.startsWith("0") ? "+41" + digits.slice(1) : digits}`;
};

// Lien e-mail avec sujet et message préremplis.
export const mailLink = (email: string, subject: string, body: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Lien WhatsApp avec message prérempli ; sans numéro, WhatsApp propose de choisir le contact.
export const waLink = (number: string, text: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
