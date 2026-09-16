import { defineConfig } from "astro/config";

// Même sortie statique pour la prévisualisation GitHub Pages et un futur domaine.
// SITE_URL et BASE_PATH règlent l'adresse de déploiement ; PUBLIC_PREVIEW=false active l'indexation.
export default defineConfig({
  site: process.env.SITE_URL || "https://geeruoss.github.io",
  base: process.env.BASE_PATH || "/12h-jass",
  trailingSlash: "always",
  output: "static",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
