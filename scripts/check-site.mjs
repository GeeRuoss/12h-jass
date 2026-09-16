// Contrôles du build : fichiers attendus, liens internes, balises essentielles, typographie.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const base = (process.env.BASE_PATH || "/12h-jass").replace(/\/$/, "");
const dist = "dist";
const expected = [
  "index.html",
  "mentions-legales/index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "favicon.svg",
  "apple-touch-icon.png",
  "logo.svg",
  JSON.parse(readFileSync("src/data/og.json", "utf8")).file,
];
const errors = [];

for (const file of expected) {
  if (!existsSync(join(dist, file))) errors.push(`Fichier manquant : ${file}`);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return walk(path);
    return path.endsWith(".html") ? [path] : [];
  });

for (const file of walk(dist)) {
  const html = readFileSync(file, "utf8");
  if (/undefined|\[object Object\]|NaN/.test(html)) errors.push(`Valeur suspecte dans ${file}`);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${h1} balise(s) h1 dans ${file}`);
  if (!/property="og:image"/.test(html)) errors.push(`og:image manquant dans ${file}`);
  if (!/<meta name="description"/.test(html)) errors.push(`description manquante dans ${file}`);
  if (/[—–]/.test(html)) errors.push(`Tiret long dans ${file}`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith(`${base}/`)) continue;
    const path = url.slice(base.length + 1).split("#")[0].split("?")[0];
    if (!path) continue;
    const candidates = [join(dist, path), join(dist, path, "index.html")];
    if (!candidates.some((c) => existsSync(c))) errors.push(`Lien cassé ${url} dans ${file}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Contrôles OK");
