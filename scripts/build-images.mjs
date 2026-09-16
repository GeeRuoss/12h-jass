// Génère l'image de partage 1200 × 630 (public/images/og-image.jpg) avec Google Chrome sans interface.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const root = resolve(".");
const font = resolve("node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2");
const logo = readFileSync("public/logo.svg", "utf8").replace(/<title>.*?<\/title>/, "");
mkdirSync("tmp", { recursive: true });
mkdirSync("public/images", { recursive: true });

const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<style>
@font-face{font-family:"Archivo";src:url("file://${font}") format("woff2-variations");font-weight:100 900;font-stretch:62% 125%}
html,body{margin:0;width:1200px;height:630px;background:#f3eee4;color:#141210;font-family:"Archivo",sans-serif;overflow:hidden}
.wrap{display:grid;grid-template-columns:420px 1fr;align-items:center;gap:56px;padding:0 80px;height:630px}
.badge svg{width:420px;height:420px;display:block}
h1{margin:0;font-size:104px;font-weight:800;font-stretch:108%;letter-spacing:-0.045em;line-height:0.94}
p{margin:26px 0 0;font-size:30px;font-weight:600;letter-spacing:-0.01em;line-height:1.3}
p span{color:#a51324}
</style></head><body><div class="wrap"><div class="badge">${logo}</div><div><h1>Les 12 heures du Jass</h1><p><span>Samedi 6 mars 2027</span><br>Espace Saint-Marc, Le Châble</p></div></div></body></html>`;
writeFileSync("tmp/og.html", html);
const png = resolve("tmp/og.png");
execFileSync(chrome, [
  "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
  `--screenshot=${png}`, "--window-size=1200,630", `file://${resolve("tmp/og.html")}`,
], { stdio: "ignore" });
// Conversion PNG → JPG avec sips (macOS), qualité élevée.
execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "90", png, "--out", resolve("public/images/og-image.jpg")], { stdio: "ignore" });
console.log(existsSync("public/images/og-image.jpg") ? "og-image.jpg généré" : "échec");
