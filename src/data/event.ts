// === Données du tournoi ===
// Source unique pour toutes les pages : dates, lieu, programme, lots, inscription, sponsors.
// Les champs vides sont affichés comme « à venir » sur le site : les remplir ici suffit.

export const event = {
  name: "Les 12 heures du Jass",
  shortName: "12 heures du Jass",
  description:
    "Tournoi de jass par équipes de deux, ouvert à tous, le samedi 6 mars 2027 à l'Espace Saint-Marc du Châble. Café-croissant, repas, raclette et soirée avec les Magic Men.",
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
      title: "Début des matchs",
      text: "Première donne. Les douze heures commencent.",
    },
    {
      time: "13h",
      until: "15h",
      title: "Repas de midi",
      text: "Pause repas sur place, le temps de refaire les parties du matin.",
    },
    {
      time: "15h",
      until: "21h",
      title: "Reprise des matchs",
      text: "Les cartes reprennent jusqu'au soir.",
    },
    {
      time: "21h",
      until: "minuit",
      title: "Raclette, apéro et baloche",
      text: "Soirée animée par les Magic Men. Détente jusqu'à minuit.",
    },
  ],
  prizes: {
    intro:
      "Un e-bike, une paire de skis, un abonnement TV et d'autres surprises, en préparation avec nos sponsors.",
    items: [
      { name: "E-bike", suit: "heart" },
      { name: "Skis", suit: "spade" },
      { name: "Abonnement TV", suit: "diamond" },
      { name: "Et bien d'autres lots", suit: "club", featured: true },
    ],
    glass: "Un verre à vin gravé est compris dans chaque inscription.",
  },
  registration: {
    // Numéro WhatsApp du comité au format international sans « + » ni espaces, par exemple "41791234567".
    // Tant qu'il est vide, WhatsApp s'ouvre avec le message prêt et laisse choisir le destinataire.
    whatsapp: "41793788938",
    whatsappIntro: "Bonjour ! Je souhaite inscrire une équipe aux 12 heures du Jass du samedi 6 mars 2027.",
    // Moyens complémentaires, affichés seulement s'ils sont renseignés : formulaire (Google Forms), e-mail, téléphone. Prix par équipe ou par personne.
    form: "",
    email: "",
    phone: "+41 79 378 89 38",
    price: "",
  },
  sponsors: {
    // { name: "Nom", url: "https://…", logo: "images/sponsors/nom.svg" } : le logo est facultatif.
    main: [] as Sponsor[],
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

export type Sponsor = { name: string; url?: string; logo?: string };

export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const asset = (file: string) => `${base}/${file}`;
export const href = (path = "") => `${base}/${path}`;

export const nav = [
  { label: "Programme", anchor: "programme" },
  { label: "Lots", anchor: "lots" },
  { label: "Inscription", anchor: "inscription" },
  { label: "Accès", anchor: "acces" },
  { label: "Sponsors", anchor: "sponsors" },
];

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

// Lien WhatsApp avec message prérempli ; sans numéro, WhatsApp propose de choisir le contact.
export const waLink = (number: string, text: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
