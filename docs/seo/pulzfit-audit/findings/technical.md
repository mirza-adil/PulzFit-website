# Technical SEO

Score: **70/100** local build · 55/100 live · weight 22%

## What works
- Prerendered static HTML: all content, title, canonical and JSON-LD present without JavaScript
- robots.txt allows all crawlers; sitemap lists 3 pages with per-page lastmod (local build)
- Self-referencing www canonicals on all pages (local build)
- HTTPS with valid Let's Encrypt cert for apex + www until 3 Feb 2027; TLS 1.2/1.3
- http to https://www redirect is a single 301; real 404s for unknown URLs
- No back-button hijacking (no history.pushState/replaceState); no mixed content
- Multi-page prerender with noindex support and per-route metadata

## Findings
### [Critical] https://pulzfit.com serves a duplicate of the site (200)
Live: apex HTTPS returns 200 with identical content; live canonical and sitemap point to the apex, opposite to the www plan.

**Fix:** Deploy the local build (www canonical) and add the apex-to-www 301 in Nginx.

### [High] JS/CSS served uncompressed; no cache headers on hashed assets
Only HTML is gzipped. Lighthouse estimates 475 KiB compression savings and 888 KiB cache savings on live.

**Fix:** gzip_types for JS/CSS/SVG/JSON; Cache-Control immutable for /assets/.

### [High] HTTP/1.1 only
All requests negotiate HTTP/1.1.

**Fix:** listen 443 ssl http2 on the PulzFit server block.

### [High] No security headers; Nginx version exposed
No HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy; Server: nginx/1.18.0 (Ubuntu) in headers and error pages.

**Fix:** Add headers (no CSP yet, so GA4/Firebase are unaffected) and server_tokens off.

### [Medium] /index.html duplicates /
Returns 200; canonical mitigates.

**Fix:** Redirect via $request_uri match (draft avoids a redirect loop).

### [Medium] Ubuntu 20.04 / Nginx 1.18 past standard support
Affects the whole VPS including FioraHouse.

**Fix:** Confirm ESM security updates or plan an OS upgrade.

### [Low] IndexNow not implemented
Bing/Yandex/Naver discovery is slower.

**Fix:** Add a key file and ping on deploy.
