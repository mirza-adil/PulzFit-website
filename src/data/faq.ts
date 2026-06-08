export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How accurate is PulzFit 1?",
    answer:
      "PulzFit 1 uses medical-grade optical and electrical sensors validated against clinical reference devices. Heart-rate accuracy is within ±2 BPM at rest, and SpO₂ tracks within ±2% of pulse oximetry in most conditions.",
  },
  {
    question: "What is the battery life?",
    answer:
      "A single charge lasts up to 7 days with continuous monitoring enabled. The included magnetic charger brings the bracelet from 0 to 100% in around 60 minutes.",
  },
  {
    question: "Which phones is it compatible with?",
    answer:
      "PulzFit 1 works with iOS 15+ and Android 9+. The companion app is available on the App Store and Google Play, and syncs over Bluetooth 5.2.",
  },
  {
    question: "Is the ECG monitoring medically certified?",
    answer:
      "The single-lead ECG provides insightful rhythm analysis and irregularity flags. It is designed for wellness awareness and is not a substitute for professional diagnosis — always consult a clinician for medical decisions.",
  },
  {
    question: "How does sleep tracking work?",
    answer:
      "Using heart rate, HRV, movement and temperature, PulzFit 1 classifies your night into light, deep and REM stages, then generates a nightly Sleep Score and personalized recovery guidance.",
  },
  {
    question: "Can it really assess blood sugar without needles?",
    answer:
      "PulzFit 1 offers a non-invasive blood-sugar trend assessment based on optical sensing and AI modeling. It surfaces metabolic patterns over time and is intended for wellness insight, not clinical diagnosis.",
  },
  {
    question: "Is it water resistant?",
    answer:
      "Yes. PulzFit 1 is rated to 100 meters (10 ATM), so you can wear it while showering, swimming and during water sports without worry.",
  },
];
