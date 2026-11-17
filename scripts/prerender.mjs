// Build-time prerender: renders every route in src/routes.ts to static HTML.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// "/" → dist/index.html, "/compare/x/" → dist/compare/x/index.html.
// Output is still a plain static site; no server is needed at runtime.
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const siteUrl = (process.env.SITE_URL || "https://www.pulzfit.com").replace(/\/+$/, "");

const { render, routes, productPrice, pricingPlans } = await import(pathToFileURL(ssrEntry).href);

const template = await readFile(path.join(distDir, "index.html"), "utf8");

const escapeAttr = (v) =>
  v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const route of routes) {
  const pageUrl = `${siteUrl}${route.path}`;
  const jsonLd = `<script type="application/ld+json">${JSON.stringify(route.jsonLd(siteUrl)).replace(
    /</g,
    "\\u003c"
  )}</script>`;

  const html = template
    .replace("<!--app-html-->", render(route.path))
    .replaceAll("__SITE_TITLE__", escapeAttr(route.title))
    .replaceAll("__SITE_DESCRIPTION__", escapeAttr(route.description))
    .replaceAll("__OG_TYPE__", route.ogType)
    .replaceAll("__PAGE_URL__", pageUrl)
    .replace("<!--seo-jsonld-->", jsonLd)
    .replace("<!--robots-->", route.noindex ? '<meta name="robots" content="noindex, follow" />' : "")
    .replaceAll("__SITE_URL__", siteUrl);

  const outDir = path.join(distDir, route.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
  console.log(`✓ prerendered ${route.path} (${(html.length / 1024).toFixed(1)} kB)`);
}

await writeFile(
  path.join(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);

await writeFile(
  path.join(distDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((r) => !r.noindex)
  .map((r) => `  <url><loc>${siteUrl}${r.path}</loc><lastmod>${r.updated}</lastmod></url>`)
  .join("\n")}
</urlset>
`
);

const home = routes.find((r) => r.path === "/");

// Plain-text summary for AI assistants (https://llmstxt.org). Optional; ignored by Google.
await writeFile(
  path.join(distDir, "llms.txt"),
  `# PulzFit

> ${home.description}

PulzFit is a screenless AI health bracelet. It is a wellness device, not a medical device.

## Key facts
- Sensors: single-lead ECG, heart rate, HRV, SpO₂, skin temperature, cuffless blood-pressure estimates
- Sleep stages (light, deep, REM) with a nightly Sleep Score
- Battery: 12-15 days; water resistant to 100 m (10 ATM); 120+ sport modes
- Works with iOS 15+ and Android 9+ over Bluetooth 5.2
- Bracelet price: €${productPrice}
${pricingPlans.map((p) => `- ${p.name} plan: ${p.price ? `€${p.price} ${p.period}` : p.period}. ${p.tagline}`).join("\n")}
- Status: coming soon (pre-order)

## Pages
${routes
  .filter((r) => !r.noindex)
  .map((r) => `- [${r.title}](${siteUrl}${r.path}): ${r.description}`)
  .join("\n")}
`
);

await rm(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`✓ ${routes.length} pages, sitemap, robots.txt and llms.txt for ${siteUrl}`);
