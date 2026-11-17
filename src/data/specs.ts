/**
 * PulzFit key specifications. Single source for the "What is PulzFit?" section
 * and the Product schema (additionalProperty), so the visible table and the
 * structured data always match. Pre-release manufacturer specifications.
 */
import { bands } from "@/data/bands";
import { pricingPlans, productPrice } from "@/data/pricing";

const plus = pricingPlans.find((p) => p.id === "plus")!;
const family = pricingPlans.find((p) => p.id === "family")!;

export interface Spec {
  label: string;
  value: string;
  /** Include as a Product additionalProperty in JSON-LD. */
  schema?: boolean;
}

export const specs: Spec[] = [
  { label: "Display", value: "None (screenless)", schema: true },
  {
    label: "Health tracking",
    value:
      "Single-lead ECG, heart rate, HRV, SpO₂, skin temperature, blood-pressure estimates, stress, sleep stages",
    schema: true,
  },
  { label: "Battery life", value: "12–15 days per charge", schema: true },
  { label: "Charging", value: "Magnetic charger, 0–100% in about 60 minutes", schema: true },
  { label: "Water resistance", value: "100 m (10 ATM)", schema: true },
  { label: "Size", value: "42 × 27 × 8 mm, 260 mm strap", schema: true },
  { label: "Sport modes", value: "120+", schema: true },
  { label: "Compatibility", value: "iOS 15+ and Android 9+, Bluetooth 5.2", schema: true },
  { label: "Bands", value: bands.map((b) => b.name).join(", "), schema: true },
  {
    label: "Price",
    value: `€${productPrice} bracelet · Essential plan free · Plus €${plus.price}/month · Family €${family.price}/month`,
  },
  { label: "Availability", value: "Coming soon (pre-order)" },
];

/** Self-contained answer block: every fact here also appears elsewhere on the page. */
export const whatIsPulzFit = `PulzFit is a screenless health bracelet that tracks your heart, sleep and recovery around the clock and turns the data into guidance in the PulzFit app. It records single-lead ECG on demand and measures heart rate, heart-rate variability (HRV), blood oxygen (SpO₂), skin temperature and cuffless blood-pressure estimates, and it sorts each night into light, deep and REM sleep. The battery lasts 12–15 days, it is water resistant to 100 m (10 ATM), and it works with iOS 15+ and Android 9+. The bracelet costs €${productPrice} and includes a free Essential plan; PulzFit Plus (€${plus.price}/month) adds the AI Health Coach. PulzFit is a wellness device, not a medical device.`;
