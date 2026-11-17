# PulzFit: AI search (GEO) analysis

Checked 15 Nov 2026 against the live site (https://www.pulzfit.com/, 5 Nov build) and the local production build (ready to deploy). No AI-visibility tool (DataForSEO, SE Ranking) is connected, so platform citation rates were **not measured**. Readiness below is assessed from the page and crawler access only.

Google's position (AI optimization guide): optimizing for AI search is still SEO. Everything below is SEO fundamentals applied to AI answer surfaces.

## 1. GEO readiness score

| Criterion (weight) | Live | Local build | Why |
|---|---|---|---|
| Citability (25%) | 35 | 45 | Marketing copy. The longest prose paragraph is 25 words and there's no "What is PulzFit?" answer. Specs are scattered across stat labels. FAQ answers are the only quotable blocks, and on live they aren't even in the HTML. |
| Structural readability (20%) | 70 | 78 | Clean H1 → H2 → H3 order, short paragraphs, a FAQ in question format. No spec table, few question-style headings. |
| Multi-modal (15%) | 55 | 55 | Product photo, app screenshot, band images and inline SVG charts. No video. |
| Authority & brand (20%) | 10 | 15 | No author or team, no dates, no sources for accuracy claims, no social profiles, and **no third-party mentions found** in a web search for "PulzFit". |
| Technical accessibility (20%) | 65 | 92 | Prerendered HTML, and every AI crawler gets a 200. On live, the FAQ answers are missing from the HTML (closed accordion), the schema is Product-only and llms.txt returns 404. All three are fixed locally. |
| **Total** | **≈ 45 / 100** | **≈ 56 / 100** | |

## 2. Platform readiness (qualitative; not measured)

| Platform | Readiness | Main blocker |
|---|---|---|
| Google AI Overviews | Low | Cites pages that already rank. PulzFit isn't indexed for any query yet beyond what Search Console shows. Deploy first. |
| Google AI Mode | Low | Weights entity authority and freshness, and PulzFit has no entity presence yet. |
| ChatGPT Search | Low | Leans on Wikipedia and well-known sources. Crawler access is fine (`OAI-SearchBot` allowed). |
| Perplexity | Low | Leans heavily on Reddit and community discussion, where PulzFit has none. `PerplexityBot` is allowed. |
| Bing Copilot | Low–medium | Bing index. Import the site into Bing Webmaster Tools and add IndexNow. |

## 3. AI crawler access (live)

robots.txt is `User-agent: * / Allow: /` with no per-bot rules. The server returned **200** with the full page to every user-agent tested; nothing is blocked at the server.

**Search and citation crawlers** (these decide whether you can be cited):
- `Googlebot`: allowed. Google Search, AI Overviews and AI Mode.
- `OAI-SearchBot`: allowed. ChatGPT Search citations.
- `Claude-SearchBot`: allowed. Citations in Claude's search features.
- `PerplexityBot`: allowed. Perplexity search index.
- `Applebot`: allowed. Siri, Spotlight and Safari.
- `bingbot`: allowed. Bing and Copilot.

**User-triggered fetchers:**
- `ChatGPT-User`, `Claude-User`, `Perplexity-User`: allowed (200).

**Training crawlers** (no effect on search citations; a licensing choice):
- `GPTBot` (OpenAI training): allowed.
- `ClaudeBot` (Anthropic training): allowed.
- `Google-Extended` (Gemini/Vertex training and grounding): allowed.
- `Applebot-Extended` (Apple Intelligence training opt-out): allowed.
- `CCBot` (Common Crawl): allowed.
- `Bytespider` (ByteDance): allowed.

Recommendation: keep it this way for now. A pre-launch brand benefits from appearing in AI answers. Blocking training crawlers wouldn't change citations, so only do it if you object to training use.

## 4. llms.txt

- Live: **404**. Local build: generated at build time with key facts and pages.
- Google says llms.txt does not help or hurt Search or AI features, so it carries **no weight** in this score. It's kept because it's cheap and some non-Google tools read it.
- RSL licensing: none. Optional; only relevant if you want machine-readable AI licensing terms.

## 5. Brand mentions

Searched for "PulzFit" with "health bracelet OR wearable": **no third-party mentions found.** Sources studied by Ahrefs (Dec 2025) found brand mentions correlate with AI visibility more strongly than backlinks, so this is the largest gap.

| Platform | Presence | Next step |
|---|---|---|
| Wikipedia / Wikidata | None | Not realistic before launch (notability). Revisit after independent press coverage. |
| YouTube | None | A 60–90 s product walkthrough (sensors, ECG demo, app). Embed it on the site with VideoObject schema. |
| Reddit | None | Genuine participation only (r/wearables, r/QuantifiedSelf), disclosed as the maker. No astroturfing. |
| LinkedIn | None | Company page with founders listed. Add it to Organization `sameAs`. |
| Instagram / X | None | Footer social links are switched off (`SHOW_SOCIALS = false`). Create profiles, then enable them and add `sameAs`. |
| Press / reviews | None | Launch press kit and reviewer units. Independent reviews are what AI answers quote. |

## 6. Passage-level citability

Section positions are measured as a share of the page's ~1,220 words. AI answers disproportionately cite the first 30% of a page.

| Section | Starts at | Longest prose passage | Citable? |
|---|---|---|---|
| Hero | 0% | 23 words, tagline | No: no definition, no numbers in prose |
| Features | 6% | 22 words | Partly: one line per sensor, but "17+ dimensions" isn't explained |
| Sleep | 24% | 19 words | Partly |
| Heart | 29% | 23 words | Partly |
| AI Coach | 38% | 25 words | No: "like having a coach, sleep scientist and cardiologist" is an unsupported comparison |
| Pricing | 70% | 20 words | Yes: "a one-time €349", plus a plan table |
| FAQ | 81% | 30–45-word answers | **Best on the page.** Specific and factual, but late, and missing from live HTML |

The facts AI answers need (what it is, sensors, battery, water rating, price, compatibility, status) are all on the page, but no single passage states them together.

## 7. Server-side rendering

- Prerendered static HTML: 1,072 words visible on live without JavaScript, 1,222 in the local build including the FAQ answers.
- Title, canonical, meta and JSON-LD are all in the raw HTML.
- AI crawlers that don't run JavaScript (GPTBot, PerplexityBot in public tests) see the full content. ✓

## 8. Top 5 highest-impact changes

1. **Deploy the local build.** It puts the FAQ answers into the raw HTML (currently invisible to non-JS crawlers), adds the full schema graph and llms.txt, and fixes the www canonical. Impact: high. Effort: deploy.
2. **Add a "What is PulzFit?" passage in the first screen or right after the hero** (draft in §10). It's one self-contained, fact-dense answer, and it's the passage most likely to be quoted. Impact: high. Effort: 30 min.
3. **Add a visible specifications table** (sensors, battery, water rating, size, compatibility, price), and mirror it as Product `additionalProperty` in the schema. Tables and specs are what AI answers lift for product questions. Impact: high. Effort: 1–2 h.
4. **Build entity presence:** LinkedIn company page, YouTube walkthrough, social profiles, all linked through `sameAs`, plus a launch press kit. Impact: high, slow. Effort: ongoing.
5. **Add trust signals:** an About page with named founders, a "Last updated" date, and a source for the accuracy claims (±2 BPM, ±2% SpO₂: test method, reference device, sample). Impact: medium-high. Effort: half a day plus your data.

## 9. Schema recommendations (for AI discoverability)

- **Product `additionalProperty`** (PropertyValue) for battery life, water resistance, dimensions, sensors and compatibility. These are facts already on the page.
- **Organization `sameAs`:** once the profiles exist.
- **Person** (founders) on an About page, linked from Organization `founder`.
- **VideoObject:** once a product video exists.
- Keep **FAQPage**. There are no Google rich results (retired May 2026), but it's a clean question-and-answer source for other AI systems.

## 10. Content reformatting suggestions

**a) New "What is PulzFit?" passage (about 115 words; every fact is from the current site):**

> **What is PulzFit?** PulzFit is a screenless health bracelet that tracks your heart, sleep and recovery around the clock and turns the data into guidance in a companion app. It records single-lead ECG on demand and measures heart rate, heart-rate variability (HRV), blood oxygen (SpO₂), skin temperature and cuffless blood-pressure estimates. It also sorts each night into light, deep and REM sleep. The battery lasts 12–15 days, it's water resistant to 100 m (10 ATM), and it works with iOS 15+ and Android 9+. The bracelet costs €349 and includes a free Essential plan; PulzFit Plus (€4.99/month) adds the AI Health Coach. PulzFit is a wellness device, not a medical device.

**b) Features intro:** "tracking 17+ dimensions of your health" → name them, or say "tracking ECG, heart rate, HRV, SpO₂, skin temperature, stress, sleep and activity".

**c) AI Coach intro:** "like having a coach, sleep scientist and cardiologist" → state what the coach actually does, for example "turns your sleep, HRV and activity data into daily recovery, sleep and stress recommendations". Implying a cardiologist is also a risk for a wellness device.

**d) FAQ additions** (question headings match how people ask AI assistants):
- How much does PulzFit cost, and do I need a subscription?
- When will PulzFit ship?
- What's in the box?
- What sizes and bands are available?

**e) Accuracy FAQ:** add where the ±2 BPM and ±2% SpO₂ figures come from, such as the test method and reference device, with a date.
