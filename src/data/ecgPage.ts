/**
 * Content for /features/ecg/. FAQ entries are rendered on the page and emitted
 * as FAQPage schema, so keep them in this one place.
 *
 * PulzFit-specific facts come from the rest of the site (features, FAQ, heart
 * section, pricing). Everything else is general, conservative information about
 * single-lead ECG. Review medical wording with a qualified person before launch.
 */
import { pricingPlans } from "@/data/pricing";

const plus = pricingPlans.find((p) => p.id === "plus")!;

export const ecgUpdated = "2026-11-15";

export interface FaqEntry {
  question: string;
  answer: string;
}

export const ecgFaq: FaqEntry[] = [
  {
    question: "Is PulzFit's ECG medically certified?",
    answer:
      "No. PulzFit's single-lead ECG provides rhythm analysis and irregularity flags for wellness awareness. It is not a medical device and is not a substitute for professional diagnosis, so always consult a clinician for medical decisions.",
  },
  {
    question: "Can PulzFit detect a heart attack?",
    answer:
      "No. A single-lead ECG cannot detect a heart attack. If you have chest pain, pressure, shortness of breath or other warning signs, call your local emergency number straight away. Do not wait for a reading.",
  },
  {
    question: "How long does an ECG reading take?",
    answer:
      "A reading takes about 30 seconds. Sit still with your arm relaxed and supported, and follow the steps in the PulzFit app. Movement and loose contact can make a recording unreadable.",
  },
  {
    question: "Which plan do I need for ECG?",
    answer: `The bracelet's sensors work on the free Essential plan. PulzFit Plus (€${plus.price}/month) adds deep ECG and HRV analysis, the AI Health Coach and unlimited history.`,
  },
  {
    question: "Does PulzFit's ECG work with iPhone and Android?",
    answer:
      "Yes. The PulzFit app works with iOS 15 and later and Android 9 and later, and syncs with the bracelet over Bluetooth 5.2.",
  },
];
