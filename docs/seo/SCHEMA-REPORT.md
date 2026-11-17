# PulzFit schema report

Checked 15 Nov 2026 against the local production build (`dist/index.html`, same as http://127.0.0.1:4173/) and the live site (https://www.pulzfit.com/, still the 5 Nov 2026 build).

## Detection

| | Live (5 Nov build) | Local build (ready to deploy) |
|---|---|---|
| JSON-LD blocks | 1 | 1 (single `@graph`) |
| Microdata / RDFa | none | none |
| Types | Product | Organization, WebPage, WebSite, Product, FAQPage |
| Rendering | In the prerendered HTML (good for Product/Offer) | Same |

## Validation (local build)

| Schema | Type | Status | Notes |
|---|---|---|---|
| `#organization` | Organization | ✅ | name, url, logo (512×512 PNG), email, contactPoint. No `sameAs` until social profiles exist. |
| `#webpage` | WebPage | ✅ | New. Links website → product, primary image 1200×630. |
| `#website` | WebSite | ✅ | No SearchAction (the site has no search, which is correct). |
| `#product` | Product | ⚠️ | Valid for product snippets: name, image, description, brand, category and an Offer. Missing merchant-listing details: `shippingDetails`, `hasMerchantReturnPolicy`, and `sku`/`gtin`. These need real values (see `generated-schema.json`). No ratings, which is correct: there are no reviews yet. |
| Offer | Offer | ✅ | €349, EUR, `PreOrder`, absolute URL, seller. Optional: `priceValidUntil`, `availabilityStarts` once a launch date exists. |
| `#faq` | FAQPage | ℹ️ | Google retired FAQ rich results on 7 May 2026, so there's no search-result benefit. Kept for AI assistants and other engines. Answers now match the visible page text. |

All URLs are absolute, `@context` is present, there's no placeholder text, and every `@id` reference resolves.

## Fixed in this pass

1. **FAQ answers were missing from the HTML.** The Radix accordion only added an answer to the page when it was opened, so the FAQPage schema contained text that wasn't on the page and crawlers never saw it. `src/components/sections/FAQ.tsx` now uses `forceMount`: all answers are in the HTML, and closed ones are marked `hidden`. Side effect: closing a question snaps shut instead of animating; opening still animates.
2. Added a **WebPage** node for the homepage.
3. Added an Organization **contactPoint** (support email).
4. Added Product **category** ("Wearable health tracker").

## Still open (needs real data from you)

| What | Why | Where |
|---|---|---|
| Return policy (country, days, fees) | Google merchant listings recommend it; EU consumers have a 14-day withdrawal right | `hasMerchantReturnPolicy` in `generated-schema.json` |
| Shipping (destinations, cost, delivery time) | Merchant listings | `shippingDetails` |
| SKU / GTIN (EAN barcode) | Product matching in Shopping | `sku`, `gtin13` |
| Social profile URLs | Brand knowledge panel | Organization `sameAs` |
| Launch date | Shows when pre-order ships | Offer `availabilityStarts` |
| Real reviews (after launch) | Star ratings | `aggregateRating` / `review`, from on-page reviews only |

Don't use: HowTo (deprecated) or SpecialAnnouncement (deprecated). Avoid self-written or incentivised reviews unless they're clearly disclosed.

## Not deployed
The live site still has only the old Product block, with the non-www URL. It updates when the local build is deployed.
