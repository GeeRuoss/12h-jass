// === Photographies du site : registre des sources, droits et adaptations ===
// Les fichiers dérivés (réduction, WebP) sont dans public/images/. Crédits affichés sur la page Mentions légales.

export type PhotoId = "saintmarc" | "chable";

export const photos: Record<
  PhotoId,
  {
    widths: number[];
    ratio: number; // largeur / hauteur des fichiers générés
    alt: string;
    title: string;
    author: string;
    source: string;
    license: string;
    licenseUrl?: string;
    changes: string;
  }
> = {
  saintmarc: {
    widths: [1200, 800, 500],
    ratio: 3 / 2,
    alt: "L'Espace Saint-Marc au Châble, façade en miroir devant les montagnes",
    title: "Le bâtiment de l'Espace Saint-Marc",
    author: "Espace Saint-Marc",
    source: "https://espacesaintmarc.ch/le-batiment/",
    license: "© Espace Saint-Marc, tous droits réservés",
    changes: "réduction, WebP",
  },
  chable: {
    widths: [1400, 900, 600],
    ratio: 4 / 3,
    alt: "Le Châble et son clocher en hiver, au fond du val de Bagnes",
    title: "Le Châble",
    author: "Patrick Nouhailler (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Le_Ch%C3%A2ble_(33017816055).jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    changes: "réduction, WebP",
  },
};
