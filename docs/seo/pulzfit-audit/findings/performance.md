# Performance (CWV)

Score: **70/100** local build · 40/100 live · weight 10%

## What works
- Desktop lab: performance 100, LCP 0.7 s, CLS 0.001
- CLS <= 0.02 and TBT <= 10 ms on all pages
- Hero entrance is CSS (visible on first paint); fonts self-hosted; WebP images

## Findings
### [High] Mobile lab LCP 3.5-3.8 s (local), 8.2 s (live)
Local preview has no compression; live lacks compression/HTTP2/caching. Real-user data not measured.

**Fix:** Deploy + Nginx changes, then re-measure; consider responsive srcset for the hero.

### [Medium] ~120 KiB unused JavaScript
Mostly Framer Motion on below-the-fold sections.

**Fix:** Lazy-load below-the-fold animation code.
