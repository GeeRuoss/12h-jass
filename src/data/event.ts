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
      title: "Début des matchs",
      text: "Première donne. Les douze heures commencent.",
    },
    {
      time: "13h",
      until: "14h30",
      title: "Repas de midi",
      text: "Pâtes sur place, sauce au choix, le temps de refaire les parties du matin.",
    },
    {
      time: "14h30",
      until: "21h",
      title: "Reprise des matchs",
      text: "Les cartes reprennent jusqu'au soir.",
    },
    {
      time: "21h",
      until: "minuit",
      title: "Soirée avec les Magic Men",
      text: "Raclette, apéro et baloche. Ouverte à tous, joueurs ou non, entrée libre.",
    },
  ],
  // Soirée mise en avant sur la page : ouverte à tout le monde, même sans avoir joué.
  evening: {
    time: "Dès 21h",
    band: "Les Magic Men",
    title: "Le soir, tout le monde est invité.",
    text: "Dès 21h, les Magic Men animent la soirée : raclette, apéro et baloche jusqu'à minuit. Pas besoin d'avoir joué, l'entrée est gratuite.",
    facts: ["Dès 21h", "Ouvert à tous", "Entrée gratuite"],
  },
  prizes: {
    intro:
      "Et si vous gagniez une paire de skis ? Ou un cochon détaillé, emballé et sous vide ? Repartirez-vous avec une nuit d'hôtel tout confort ou 150 kg de patates ? Restez attentifs, l'annonce des lots définitifs arrive bientôt !",
    items: [
      { name: "Une paire de skis ?", suit: "spade" },
      { name: "Un cochon ?", suit: "heart" },
      { name: "Une nuit d'hôtel ?", suit: "club" },
      { name: "150 kg de patates ?", suit: "diamond", featured: true },
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
    // Paiement : TWINT et bulletin de versement. Quand la banque aura tout préparé, poser le QR TWINT
    // dans public/images/ (par exemple "images/twint.png") et le bulletin en PDF dans public/ (par exemple "bulletin-versement.pdf").
    payment: {
      text: "Paiement par TWINT ou par bulletin de versement, à réception de la confirmation.",
      twintQr: "",
      slip: "",
    },
  },
  sponsors: {
    // { name: "Nom", url: "https://…", logo: "images/sponsors/nom.svg" } : le logo est facultatif.
    main: [
      {
        name: "Ruoss Communication",
        url: "https://www.ruosscommunication.com",
        logo: "images/sponsors/ruoss-communication.svg",
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

export type Sponsor = { name: string; url?: string; logo?: string };

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
