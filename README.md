# PulzFit — Premium AI Health Bracelet Website

A production-ready, conversion-focused marketing site for **PulzFit**, the next-generation AI health bracelet.
_"Know Your Body. Improve Your Life."_

Light, luxury-wearable aesthetic with smooth scroll animations, glassmorphism, product imagery and interactive health-data visualizations. It is a **fully static site**: no backend is required. The page is prerendered to HTML at build time for SEO and fast first paint.

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **Framer Motion** — hover/entrance/layout animations
- **Lenis** — smooth scrolling and in-page anchor navigation
- **TanStack React Query** + **React Hook Form** + **Zod** — contact form
- **Lucide React** — icons

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + build + prerender to /dist (static files)
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Configuration (optional)

Copy `.env.example` to `.env.local` (or set these in your host's build settings):

| Variable | Purpose | If unset |
| --- | --- | --- |
| `VITE_CONTACT_ENDPOINT` | JSON POST endpoint for the contact form (e.g. Formspree) | Form opens the visitor's email app addressed to mirza@hobotech.fi |
| `VITE_CHECKOUT_URL` | Store / checkout link for "Buy Now" (`?plan=` is appended for plans) | "Buy Now" scrolls to Pricing |
| `SITE_URL` | Public origin for canonical URL, Open Graph, sitemap, llms.txt | `https://www.pulzfit.com` |

## Deployment

`npm run build` outputs plain static files to `dist/` (including `robots.txt` and `sitemap.xml`). Deploy that folder to any static host (Netlify, Vercel, Cloudflare Pages, S3, etc.).

## Project structure

```text
src/
  components/
    layout/      Navbar, Footer, Logo, SmoothScroll (Lenis), SectionHeading
    motion/      Reveal, Magnetic, Counter (reusable animation wrappers)
    sections/    Hero, Features, Sleep, HeartHealth, AICoach, Sports,
                 FamilyCare, Pricing, FAQ, ContactCTA
    ui/          shadcn/ui primitives
    visuals/     ECGTrace, SleepStages, ActivityRings, LineChart,
                 ScoreRing, MiniViz, BiometricBackground, PhoneMockup, ProductShowcase
  data/          features, sports, pricing, faq (typed content)
  hooks/         usePrefersReducedMotion
  lib/           config (env), theme (palette), motion (reduced-motion), utils (cn)
  seo.ts         site title/description + Product JSON-LD
  entry-server.tsx  build-time render used by scripts/prerender.mjs
  providers/     AppProviders (React Query)
public/
  pulzfit-product.png   # product hero image
scripts/
  prerender.mjs         # injects rendered HTML, JSON-LD, robots.txt, sitemap.xml
design/reference/       # source design images (not served)
```

## Sections

Hero (product image) · Health Monitoring Features (17+) · Sleep Intelligence ·
Heart Health · AI Health Coach · Sports & Fitness · Family Care ·
Pricing · FAQ · Contact / CTA.

## Notes

- Product image lives at `public/pulzfit-product.png` and is shown in the hero with dimension annotations (42×27 mm, 8 mm, 260 mm strap).
- `prefers-reduced-motion` is respected for both CSS and Framer Motion animations (see `src/lib/motion.ts`).
- Accent text uses the `pulz-ink` colour (`#1E7259`) to meet WCAG AA contrast; `#40B794` / `#93D9C4` are for fills and decoration only.
- SEO meta, Open Graph tags and Product JSON-LD are static in the built HTML. Don't add review ratings to the JSON-LD until real reviews are shown on the page.
- Health claims (blood pressure, blood sugar, "medical-grade") need legal/regulatory review before launch; a wellness disclaimer is in the footer.
