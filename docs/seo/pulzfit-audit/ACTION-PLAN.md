# Action plan: www.pulzfit.com

Health score 50 (live) → 74 (local build) → about 80 after Phase 1.

## Phase 1: Critical Fixes (Week 1)
- [ ] Authorise SSH key, then deploy dist/ with backup
- [ ] Apply Nginx draft after nginx -t: apex 301, gzip, caching, HTTP/2, security headers, /index.html redirect
- [ ] Verify live: canonical, sitemap, 3 pages, headers, FioraHouse unaffected, GA4 page views
- [ ] Search Console: resubmit sitemap, request indexing for /, /features/, /features/ecg/

## Phase 2: High-Impact Improvements (Weeks 2-3)
- [ ] Privacy Policy and Terms pages (your text)
- [ ] About page with founders and Person schema
- [ ] Expert review of ECG guide wording
- [ ] Validation source for accuracy claims
- [ ] Shipping/returns/GTIN in Product schema

## Phase 3: Content & Authority (Month 2)
- [ ] Next feature guides: sleep tracking, HRV, SpO2, family care
- [ ] LinkedIn company page, YouTube walkthrough, sameAs links
- [ ] Launch press kit and reviewer outreach
- [ ] Bing Webmaster Tools + IndexNow

## Phase 4: Monitoring & Iteration (Ongoing)
- [ ] Configure Google API credentials for CrUX/GSC/GA4 data
- [ ] Monthly: indexed pages vs sitemap, CWV, GSC queries
- [ ] Quarterly: re-verify specs, prices and claims; update page dates

## All findings by priority

### Critical
- **https://pulzfit.com serves a duplicate of the site (200)** (Technical SEO): Deploy the local build (www canonical) and add the apex-to-www 301 in Nginx.

### High
- **JS/CSS served uncompressed; no cache headers on hashed assets** (Technical SEO): gzip_types for JS/CSS/SVG/JSON; Cache-Control immutable for /assets/.
- **HTTP/1.1 only** (Technical SEO): listen 443 ssl http2 on the PulzFit server block.
- **No security headers; Nginx version exposed** (Technical SEO): Add headers (no CSP yet, so GA4/Firebase are unaffected) and server_tokens off.
- **No About/team page or named experts** (Content Quality): About page with founders and any clinical/engineering advisors; Person schema.
- **No Privacy Policy or Terms** (Content Quality): Publish both pages (text needed), add footer links, consider cookie consent.
- **Live site has Product only, apex URLs** (Schema / Structured Data): Deploy.
- **Mobile lab LCP 3.5-3.8 s (local), 8.2 s (live)** (Performance (CWV)): Deploy + Nginx changes, then re-measure; consider responsive srcset for the hero.
- **No third-party brand mentions found** (AI Search Readiness): LinkedIn page, YouTube walkthrough, launch press kit, reviewer units.

### Medium
- **/index.html duplicates /** (Technical SEO): Redirect via $request_uri match (draft avoids a redirect loop).
- **Ubuntu 20.04 / Nginx 1.18 past standard support** (Technical SEO): Confirm ESM security updates or plan an OS upgrade.
- **Accuracy claims unsourced** (Content Quality): Add a validation summary (method, reference device, sample, date).
- **ECG guide medical wording needs expert review** (Content Quality): Review by a qualified person before deploy.
- **Product lacks shippingDetails / hasMerchantReturnPolicy / GTIN** (Schema / Structured Data): Fill from real policy; template in docs/seo/generated-schema.json.
- **~120 KiB unused JavaScript** (Performance (CWV)): Lazy-load below-the-fold animation code.

### Low
- **IndexNow not implemented** (Technical SEO): Add a key file and ping on deploy.
- **Two titles under 50 characters** (On-Page SEO): Optional: extend, e.g. 'PulzFit ECG: Single-Lead Heart Rhythm Checks on Your Wrist'.
- **No outbound links to authoritative sources** (On-Page SEO): Link to a reputable explainer on ECG/arrhythmia once reviewed.
- **No Organization sameAs** (Schema / Structured Data): Add once profiles exist.
- **3 inactive carousel images have empty alt** (Images): Optional: descriptive alt plus aria-hidden on inactive slides.
