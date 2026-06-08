# PulzFit — Premium AI Health Bracelet Website

A production-ready, conversion-focused marketing site for **PulzFit 1**, the next-generation AI health bracelet.
_"Know Your Body. Improve Your Life."_

Dark-mode-first, luxury wearable aesthetic inspired by Oura, with smooth scroll animations, glassmorphism, your product imagery, and interactive health-data visualizations.

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **Framer Motion** — hover/entrance/layout animations
- **GSAP + ScrollTrigger** + **Lenis** — smooth scroll & scroll-driven animation
- **TanStack React Query** + **React Hook Form** + **Zod** — contact form
- **Lucide React** — icons

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Project structure

```text
src/
  components/
    layout/      Navbar, Footer, Logo, SmoothScroll, SectionHeading
    motion/      Reveal, Magnetic, Counter (reusable animation wrappers)
    sections/    Hero, Features, Sleep, HeartHealth, AICoach, Sports,
                 FamilyCare, Testimonials, Pricing, FAQ, ContactCTA
    ui/          shadcn/ui primitives
    visuals/     ECGTrace, SleepStages, ActivityRings, LineChart,
                 ScoreRing, MiniViz, BiometricBackground, PhoneMockup
  data/          features, sports, testimonials, pricing, faq (typed content)
  hooks/         useSeo, usePrefersReducedMotion
  lib/           gsap (plugin registration), utils (cn)
  providers/     AppProviders (React Query)
public/
  pulzfit-product.png   # product hero image
```

## Sections

Hero (product image) · Health Monitoring Features (17+) · Sleep Intelligence ·
Heart Health · AI Health Coach · Sports & Fitness · Family Care ·
Testimonials · Pricing · FAQ · Contact / CTA.

## Notes

- Product image lives at `public/pulzfit-product.png` and is shown in the hero with dimension badges (42×27 mm, 8 mm, 260 mm strap).
- All animations respect `prefers-reduced-motion`.
- Product data, pricing and testimonials are presentational (local typed modules).
- SEO meta, Open Graph tags and Product JSON-LD are injected via the dependency-free `useSeo` hook.
