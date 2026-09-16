import type { APIRoute } from "astro";

// Prévisualisation : indexation refusée. Domaine final (PUBLIC_PREVIEW=false) : tout autorisé + sitemap.
export const GET: APIRoute = ({ site }) => {
  const preview = import.meta.env.PUBLIC_PREVIEW !== "false";
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const body = preview
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${base}/sitemap.xml`, site)}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
