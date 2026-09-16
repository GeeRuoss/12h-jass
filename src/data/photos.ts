// === Photographies du site : registre des sources, licences et adaptations ===
// Toutes proviennent de Wikimedia Commons, sous licence Creative Commons BY-SA.
// Adaptations : recadrage, réduction et conversion en WebP ; les fichiers dérivés restent sous la même licence.

export type PhotoId = "bruson" | "nuit" | "chable";

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
    licenseUrl: string;
    changes: string;
  }
> = {
  bruson: {
    widths: [2400, 1600, 900],
    ratio: 2400 / 1028,
    alt: "Le village de Bruson sous la neige, dans le val de Bagnes",
    title: "Bruson",
    author: "Ludovic Péron",
    source: "https://commons.wikimedia.org/wiki/File:Bruson.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    changes: "recadrage en bandeau, réduction, WebP",
  },
  nuit: {
    widths: [1200, 800, 500],
    ratio: 4 / 3,
    alt: "Les lumières des villages du val de Bagnes à la tombée de la nuit",
    title: "Bagnes by night",
    author: "Olivier Bruchez",
    source: "https://commons.wikimedia.org/wiki/File:Bagnes_by_night.jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    changes: "réduction, WebP",
  },
  chable: {
    widths: [1400, 900, 600],
    ratio: 4 / 3,
    alt: "Le Châble et son clocher en hiver, au fond du val de Bagnes",
    title: "Le Châble",
    author: "Patrick Nouhailler",
    source: "https://commons.wikimedia.org/wiki/File:Le_Ch%C3%A2ble_(33017816055).jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    changes: "réduction, WebP",
  },
};
