# Génère les composants de marque et le favicon depuis le logo original (brand/logo-original.svg).
import re, pathlib
src = pathlib.Path("brand/logo-original.svg").read_text()
paths = re.findall(r'<path\b[^>]*?\bd="([^"]+)"', src)
assert len(paths) >= 4, len(paths)
outer, heart, foot, ring = paths[0], paths[1], paths[2], paths[3]
letters = paths[4:]
ink, red = "#141210", "#A51324"

def mark(fill_ink, fill_red):
    return (f'<path d="{outer}" fill="{fill_ink}"/>\n'
            f'<path d="{heart}" fill="{fill_red}"/>\n'
            f'<path d="{foot}" fill="{fill_ink}"/>')

def badge(fill_ink, fill_red):
    body = mark(fill_ink, fill_red) + f'\n<path d="{ring}" fill="{fill_red}"/>\n'
    body += "\n".join(f'<path d="{d}" fill="{fill_ink}"/>' for d in letters)
    return body

comp = pathlib.Path("src/components")
comp.joinpath("Badge.astro").write_text(
"""---
// Logo complet (badge rond) en SVG inline : couleur d'encre héritée, cœur rouge.
const { class: className = "" } = Astro.props as { class?: string };
---
<svg class={className} viewBox="0 0 565.11 565.12" role="img" aria-label="Les 12 heures du Jass" focusable="false">
""" + badge("currentColor", "var(--red)") + "\n</svg>\n")

comp.joinpath("Mark.astro").write_text(
"""---
// Emblème seul (pique et cœur), pour la navigation et le pied de page.
const { class: className = "" } = Astro.props as { class?: string };
---
<svg class={className} viewBox="100 80 365 365" aria-hidden="true" focusable="false">
""" + mark("currentColor", "var(--red)") + "\n</svg>\n")

pub = pathlib.Path("public")
pub.joinpath("logo.svg").write_text(
f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565.11 565.12">\n<title>Les 12 heures du Jass</title>\n'
+ badge(ink, red) + "\n</svg>\n")

# Favicon : emblème sur une pastille crème (lisible en onglet clair et sombre).
s = 74 / 351
tx, ty = 50 - 282.56 * s, 50 - 261.4 * s
pub.joinpath("favicon.svg").write_text(
f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n<circle cx="50" cy="50" r="50" fill="#F3EEE4"/>\n'
f'<g transform="translate({tx:.3f} {ty:.3f}) scale({s:.5f})">\n' + mark(ink, red) + "\n</g>\n</svg>\n")
print("lettres:", len(letters), "| fichiers écrits")
