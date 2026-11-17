import type { ComponentType } from "react";
import { Home } from "@/pages/Home";
import { FeaturesHub } from "@/pages/FeaturesHub";
import { FeatureEcg } from "@/pages/FeatureEcg";
import { pageJsonLd, siteDescription, siteJsonLd, siteTitle } from "@/seo";
import { ecgFaq, ecgUpdated } from "@/data/ecgPage";
import { normalizePath } from "@/lib/route";

export interface SiteRoute {
  /** URL path with leading and trailing slash. Prerendered to dist<path>index.html. */
  path: string;
  title: string;
  description: string;
  ogType: "website" | "article";
  /** Date the page's content last changed (YYYY-MM-DD). Used as sitemap <lastmod>. */
  updated: string;
  /** Keep out of search: adds a noindex robots meta and leaves the page out of the sitemap. */
  noindex?: boolean;
  jsonLd: (siteUrl: string) => object;
  Component: ComponentType;
}

const featuresHub = {
  path: "/features/",
  title: "PulzFit Features: ECG, Sleep, HRV, SpO₂ & More",
  description:
    "Everything the PulzFit screenless health bracelet tracks: ECG, heart rate, HRV, SpO₂, skin temperature, sleep, stress and family care, with in-depth guides.",
  updated: "2026-11-15",
};

const ecg = {
  path: "/features/ecg/",
  title: "PulzFit ECG: Single-Lead Heart Rhythm Checks",
  description:
    "How PulzFit's single-lead ECG works, how to take a 30-second reading, what it can and can't detect, and what to do if a reading is flagged as irregular.",
  updated: ecgUpdated,
};

export const routes: SiteRoute[] = [
  {
    path: "/",
    title: siteTitle,
    description: siteDescription,
    ogType: "website",
    updated: "2026-11-15",
    jsonLd: siteJsonLd,
    Component: Home,
  },
  {
    ...featuresHub,
    ogType: "website",
    jsonLd: pageJsonLd({
      ...featuresHub,
      breadcrumbs: [{ name: "Home", path: "/" }, { name: "Features" }],
    }),
    Component: FeaturesHub,
  },
  {
    ...ecg,
    ogType: "article",
    jsonLd: pageJsonLd({
      ...ecg,
      breadcrumbs: [{ name: "Home", path: "/" }, { name: "Features", path: "/features/" }, { name: "ECG" }],
      faq: ecgFaq,
    }),
    Component: FeatureEcg,
  },
];

/** The route for a pathname; unknown paths fall back to the homepage. */
export function findRoute(pathname: string): SiteRoute {
  const path = normalizePath(pathname);
  return routes.find((r) => r.path === path) ?? routes[0];
}
