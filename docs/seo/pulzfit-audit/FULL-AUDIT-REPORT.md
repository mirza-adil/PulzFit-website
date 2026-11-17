# SEO audit: www.pulzfit.com

2026-11-15 · Live site (5 Nov 2026 build) and local production build (3 pages, ready to deploy)

## Executive summary

**SEO health score: 74/100** for the local build, which is ready to deploy. The live site scores **50/100**. With the deploy and the drafted server changes, it should reach about **80/100**.

Business type: Pre-launch direct-to-consumer hardware (wearable health bracelet), pre-order e-commerce, EU/EUR.

| Category | Weight | Live | Local build |
|---|---|---|---|
| Technical SEO | 22% | 55 | 70 ███████░░░ |
| Content Quality | 23% | 45 | 62 ██████░░░░ |
| On-Page SEO | 20% | 60 | 90 █████████░ |
| Schema / Structured Data | 10% | 40 | 85 ████████░░ |
| Performance (CWV) | 10% | 40 | 70 ███████░░░ |
| AI Search Readiness | 10% | 45 | 62 ██████░░░░ |
| Images | 5% | 70 | 92 █████████░ |

### Top 5 issues
1. Live site is still the 5 Nov build: non-www canonical/sitemap, duplicate https://pulzfit.com (200), FAQ answers missing from HTML, Product-only schema
2. Server: no JS/CSS compression, no asset caching, HTTP/1.1, no security headers (Nginx changes drafted, awaiting SSH access)
3. Weak trust signals for a health product: no About/team, no Privacy Policy or Terms (GA4 runs for EU visitors), no source for accuracy claims
4. No third-party brand presence found (no reviews, press, social profiles, video)
5. Mobile LCP 3.5-3.8 s in lab on the local build (8.2 s on live); target 2.5 s

### Top 5 quick wins
1. Deploy the local build (fixes canonical, schema, FAQ visibility, images, fonts, LCP animation)
2. Apply the Nginx draft: apex 301 to www, gzip, cache headers, HTTP/2, security headers
3. Resubmit sitemap in Search Console and request indexing for the 3 URLs
4. Import the site into Bing Webmaster Tools from Search Console
5. Publish Privacy Policy and Terms pages (text needed from you)

### How this was measured
- Crawl of local build (http://127.0.0.1:4173, 3 pages, 17 assets)
- curl/OpenSSL checks of the live site
- Lighthouse 12.6.1 mobile and desktop lab runs (Google Analytics blocked during testing)
- Web search for brand mentions

**Not measured:**
- Real-user Core Web Vitals (CrUX): no Google API credentials configured
- Search Console indexation and queries: no credentials configured
- GA4 organic traffic: no credentials configured
- Backlink metrics: no Moz/Bing/DataForSEO credentials
- Lighthouse Agentic Browsing category: not available in Lighthouse 12.6.1

### Lighthouse lab results (15 Nov 2026, GA blocked during tests)

| Page | Device | Perf | A11y | Best practices* | SEO | FCP | LCP | CLS |
|---|---|---|---|---|---|---|---|---|
| / (local) | mobile | 84 | 100 | 96 | 100 | 3.3 s | 3.5 s | 0.001 |
| / (local) | desktop | 100 | 100 | 96 | 100 | 0.6 s | 0.7 s | 0.001 |
| /features/ (local) | mobile | 85 | 100 | 96 | 100 | 2.9 s | 3.6 s | 0 |
| /features/ecg/ (local) | mobile | 82 | 100 | 96 | 100 | 3.2 s | 3.8 s | 0.018 |
| / (live, 5 Nov build) | mobile | 74 | 100 | 96 | 100 | 1.9 s | 8.2 s | 0 |

*The 96 for best practices comes only from the test itself: blocking Google Analytics makes Firebase log "Failed to fetch". Unblocked runs score 100. The local preview server doesn't compress files, so production with gzip should be faster.

## Technical SEO: 70/100 (live 55)

**What works:** Prerendered static HTML: all content, title, canonical and JSON-LD present without JavaScript; robots.txt allows all crawlers; sitemap lists 3 pages with per-page lastmod (local build); Self-referencing www canonicals on all pages (local build); HTTPS with valid Let's Encrypt cert for apex + www until 3 Feb 2027; TLS 1.2/1.3; http to https://www redirect is a single 301; real 404s for unknown URLs; No back-button hijacking (no history.pushState/replaceState); no mixed content; Multi-page prerender with noindex support and per-route metadata

- **[Critical] https://pulzfit.com serves a duplicate of the site (200).** Live: apex HTTPS returns 200 with identical content; live canonical and sitemap point to the apex, opposite to the www plan. *Fix:* Deploy the local build (www canonical) and add the apex-to-www 301 in Nginx.
- **[High] JS/CSS served uncompressed; no cache headers on hashed assets.** Only HTML is gzipped. Lighthouse estimates 475 KiB compression savings and 888 KiB cache savings on live. *Fix:* gzip_types for JS/CSS/SVG/JSON; Cache-Control immutable for /assets/.
- **[High] HTTP/1.1 only.** All requests negotiate HTTP/1.1. *Fix:* listen 443 ssl http2 on the PulzFit server block.
- **[High] No security headers; Nginx version exposed.** No HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy; Server: nginx/1.18.0 (Ubuntu) in headers and error pages. *Fix:* Add headers (no CSP yet, so GA4/Firebase are unaffected) and server_tokens off.
- **[Medium] /index.html duplicates /.** Returns 200; canonical mitigates. *Fix:* Redirect via $request_uri match (draft avoids a redirect loop).
- **[Medium] Ubuntu 20.04 / Nginx 1.18 past standard support.** Affects the whole VPS including FioraHouse. *Fix:* Confirm ESM security updates or plan an OS upgrade.
- **[Low] IndexNow not implemented.** Bing/Yandex/Naver discovery is slower. *Fix:* Add a key file and ping on deploy.

## Content Quality: 62/100 (live 45)

**What works:** Homepage 1,444 words; ECG guide 784 words; features hub 454 words; all >= 67% unique vs each other; 109-word 'What is PulzFit?' answer block at 5% of the homepage plus an 11-row specs table; ECG guide states limits clearly (cannot detect heart attack, not continuous, not a diagnosis); Readability around Flesch 51 / US grade 8 on the homepage; Overclaiming removed ('medical-grade', '17+ dimensions', 'cardiologist' comparison)

- **[High] No About/team page or named experts.** Health (YMYL) product with anonymous authorship. *Fix:* About page with founders and any clinical/engineering advisors; Person schema.
- **[High] No Privacy Policy or Terms.** GA4 via Firebase runs for EU visitors; legal and trust requirement. *Fix:* Publish both pages (text needed), add footer links, consider cookie consent.
- **[Medium] Accuracy claims unsourced.** FAQ claims +/-2 BPM and +/-2% SpO2 without method or reference device. *Fix:* Add a validation summary (method, reference device, sample, date).
- **[Medium] ECG guide medical wording needs expert review.** General ECG statements are conservative but should be checked; app-flow details need confirming. *Fix:* Review by a qualified person before deploy.

## On-Page SEO: 90/100 (live 60)

**What works:** Unique titles 44-54 chars and descriptions 151-156 chars on all 3 pages; Exactly one H1 per page; no skipped heading levels; Keyword-bearing H2s (Sleep tracking, ECG and HRV, PulzFit FAQ, What is PulzFit?); Each page linked from both other pages; breadcrumbs on inner pages; No dead or misleading footer links

- **[Low] Two titles under 50 characters.** /features/ (46) and /features/ecg/ (44). *Fix:* Optional: extend, e.g. 'PulzFit ECG: Single-Lead Heart Rhythm Checks on Your Wrist'.
- **[Low] No outbound links to authoritative sources.** Health guide cites no external references. *Fix:* Link to a reputable explainer on ECG/arrhythmia once reviewed.

## Schema / Structured Data: 85/100 (live 40)

**What works:** Homepage: Organization (contactPoint), WebPage, WebSite, Product (+9 additionalProperty specs, PreOrder Offer), FAQPage; Inner pages: WebPage + BreadcrumbList; ECG adds FAQPage matching visible text; All absolute URLs, resolved @id references, JSON-LD in initial HTML

- **[High] Live site has Product only, apex URLs.** Fixed in local build. *Fix:* Deploy.
- **[Medium] Product lacks shippingDetails / hasMerchantReturnPolicy / GTIN.** Recommended for merchant listings. *Fix:* Fill from real policy; template in docs/seo/generated-schema.json.
- **[Low] No Organization sameAs.** No social profiles exist yet. *Fix:* Add once profiles exist.

## Performance (CWV): 70/100 (live 40)

**What works:** Desktop lab: performance 100, LCP 0.7 s, CLS 0.001; CLS <= 0.02 and TBT <= 10 ms on all pages; Hero entrance is CSS (visible on first paint); fonts self-hosted; WebP images

- **[High] Mobile lab LCP 3.5-3.8 s (local), 8.2 s (live).** Local preview has no compression; live lacks compression/HTTP2/caching. Real-user data not measured. *Fix:* Deploy + Nginx changes, then re-measure; consider responsive srcset for the hero.
- **[Medium] ~120 KiB unused JavaScript.** Mostly Framer Motion on below-the-fold sections. *Fix:* Lazy-load below-the-fold animation code.

## AI Search Readiness: 62/100 (live 45)

**What works:** All AI search crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, Applebot, bingbot) allowed and served 200; Self-contained answer block and specs table high on the page; llms.txt generated (no ranking weight)

- **[High] No third-party brand mentions found.** No press, reviews, Reddit, YouTube or social presence. *Fix:* LinkedIn page, YouTube walkthrough, launch press kit, reviewer units.

## Images: 92/100 (live 70)

**What works:** All content images WebP, 29-104 KB, with width/height; Hero preloaded with fetchpriority=high; others lazy-loaded; 1200x630 social image, favicon.ico, apple-touch-icon

- **[Low] 3 inactive carousel images have empty alt.** Intentional for hidden slides. *Fix:* Optional: descriptive alt plus aria-hidden on inactive slides.

## Specialist checks run

- **Technical, schema, sitemap, performance, visual and AI readiness:** run this session, with results summarised above. Earlier reports: `docs/seo/SCHEMA-REPORT.md`, `docs/seo/GEO-ANALYSIS.md`.
- **Local SEO and maps:** not applicable. This is an online pre-order business with no storefront.
- **E-commerce:** Product + Offer (PreOrder) in place; merchant listing fields still open.
- **Backlinks:** not measured (no API). The web search found no third-party mentions, so the profile is effectively empty.
- **Search experience (SXO):** the homepage fits commercial and brand searches; the ECG guide fits informational "how does wrist ECG work" searches. No mismatch between page type and search intent.
- **Drift:** no baseline exists. This audit can serve as one.

Screenshots: `screenshots/`. Per-category details: `findings/`.