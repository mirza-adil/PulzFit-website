# Schema / Structured Data

Score: **85/100** local build · 40/100 live · weight 10%

## What works
- Homepage: Organization (contactPoint), WebPage, WebSite, Product (+9 additionalProperty specs, PreOrder Offer), FAQPage
- Inner pages: WebPage + BreadcrumbList; ECG adds FAQPage matching visible text
- All absolute URLs, resolved @id references, JSON-LD in initial HTML

## Findings
### [High] Live site has Product only, apex URLs
Fixed in local build.

**Fix:** Deploy.

### [Medium] Product lacks shippingDetails / hasMerchantReturnPolicy / GTIN
Recommended for merchant listings.

**Fix:** Fill from real policy; template in docs/seo/generated-schema.json.

### [Low] No Organization sameAs
No social profiles exist yet.

**Fix:** Add once profiles exist.
