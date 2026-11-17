# Images

Score: **92/100** local build · 70/100 live · weight 5%

## What works
- All content images WebP, 29-104 KB, with width/height
- Hero preloaded with fetchpriority=high; others lazy-loaded
- 1200x630 social image, favicon.ico, apple-touch-icon

## Findings
### [Low] 3 inactive carousel images have empty alt
Intentional for hidden slides.

**Fix:** Optional: descriptive alt plus aria-hidden on inactive slides.
