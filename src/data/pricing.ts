export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export const productPrice = 349;

export const pricingPlans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Core monitoring, no subscription required.",
    price: 0,
    period: "free with bracelet",
    features: [
      "All core health sensors",
      "Heart rate & SpO₂",
      "Daily sleep score",
      "Step & activity tracking",
      "30 days of history",
    ],
    cta: "Included",
  },
  {
    id: "plus",
    name: "PulzFit Plus",
    tagline: "Unlock the full AI health intelligence engine.",
    price: 6.99,
    period: "per month",
    highlight: true,
    badge: "Most popular",
    features: [
      "Everything in Essential",
      "AI Health Coach & insights",
      "ECG & HRV deep analysis",
      "Unlimited health history",
      "Advanced recovery & readiness",
      "Trends, reports & exports",
    ],
    cta: "Start free trial",
  },
  {
    id: "family",
    name: "Family",
    tagline: "Care for up to 6 people you love.",
    price: 12.99,
    period: "per month",
    features: [
      "Everything in Plus",
      "Up to 6 linked members",
      "Remote family monitoring",
      "Emergency & fall alerts",
      "Shared wellness dashboard",
      "Priority human support",
    ],
    cta: "Choose Family",
  },
];

export interface ComparisonRow {
  capability: string;
  pulzfit: string;
  others: string;
}

export const comparisonRows: ComparisonRow[] = [
  { capability: "Continuous ECG", pulzfit: "Yes", others: "Rare" },
  { capability: "Non-invasive glucose trend", pulzfit: "Yes", others: "No" },
  { capability: "Battery life", pulzfit: "7 days", others: "1–3 days" },
  { capability: "AI Health Coach", pulzfit: "Built-in", others: "Add-on" },
  { capability: "Remote family care", pulzfit: "Yes", others: "Limited" },
  { capability: "Water resistance", pulzfit: "100m", others: "50m" },
];
