import { pulzPalette } from "@/lib/theme";
import {
  Activity,
  HeartPulse,
  Heart,
  Gauge,
  Droplets,
  Thermometer,
  Moon,
  Brain,
  Flower2,
  Pill,
  Users,
  BellRing,
  FlaskConical,
  Droplet,
  PersonStanding,
  Scale,
  Percent,
  type LucideIcon,
} from "lucide-react";

export type VizType = "wave" | "pulse" | "bars" | "ring" | "spark" | "dots";

export interface HealthFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  viz: VizType;
  metric?: string;
}

export const healthFeatures: HealthFeature[] = [
  {
    id: "ecg",
    title: "ECG Heart Health Analysis",
    description:
      "Medical-grade single-lead ECG captures your heart's electrical rhythm and flags irregularities in seconds.",
    icon: Activity,
    accent: pulzPalette.deep,
    viz: "wave",
    metric: "Lead-I ECG",
  },
  {
    id: "hr",
    title: "Heart Rate Monitoring",
    description:
      "Continuous 24/7 heart-rate tracking with beat-by-beat accuracy, day and night.",
    icon: HeartPulse,
    accent: pulzPalette.deep,
    viz: "pulse",
    metric: "62 BPM",
  },
  {
    id: "hrv",
    title: "HRV Monitoring",
    description:
      "Heart-rate variability reveals your nervous-system balance and readiness to perform.",
    icon: Heart,
    accent: pulzPalette.dark,
    viz: "bars",
    metric: "68 ms",
  },
  {
    id: "bp",
    title: "Blood Pressure Monitoring",
    description:
      "Cuffless, on-demand blood-pressure estimates powered by optical pulse-wave analysis.",
    icon: Gauge,
    accent: pulzPalette.accent,
    viz: "ring",
    metric: "118/76",
  },
  {
    id: "spo2",
    title: "Blood Oxygen (SpO₂)",
    description:
      "Track blood-oxygen saturation overnight to understand breathing and recovery quality.",
    icon: Droplets,
    accent: pulzPalette.accent,
    viz: "ring",
    metric: "98%",
  },
  {
    id: "temp",
    title: "Body Temperature",
    description:
      "Continuous skin-temperature sensing surfaces subtle shifts before you feel them.",
    icon: Thermometer,
    accent: pulzPalette.light,
    viz: "spark",
    metric: "36.6°C",
  },
  {
    id: "sleep",
    title: "Scientific Sleep Monitoring",
    description:
      "Stage-by-stage sleep analysis across light, deep and REM with a nightly sleep score.",
    icon: Moon,
    accent: pulzPalette.dark,
    viz: "bars",
    metric: "Score 88",
  },
  {
    id: "stress",
    title: "Stress Monitoring",
    description:
      "Real-time stress index derived from HRV and skin response keeps you in balance.",
    icon: Brain,
    accent: pulzPalette.accent,
    viz: "wave",
    metric: "Calm",
  },
  {
    id: "womens",
    title: "Women's Health & Cycle",
    description:
      "Temperature-based menstrual and fertility insights with predictive cycle tracking.",
    icon: Flower2,
    accent: pulzPalette.deep,
    viz: "dots",
    metric: "Cycle 14",
  },
  {
    id: "meds",
    title: "Medication Reminders",
    description:
      "Smart, adaptive reminders ensure you never miss a dose, synced across your devices.",
    icon: Pill,
    accent: pulzPalette.light,
    viz: "dots",
    metric: "On time",
  },
  {
    id: "family",
    title: "Remote Family Care",
    description:
      "Share live health status with loved ones and get notified the moment something matters.",
    icon: Users,
    accent: pulzPalette.accent,
    viz: "pulse",
    metric: "4 linked",
  },
  {
    id: "alerts",
    title: "Smart Health Alerts",
    description:
      "AI watches your baselines around the clock and alerts you to meaningful changes.",
    icon: BellRing,
    accent: pulzPalette.deep,
    viz: "spark",
    metric: "Live",
  },
  {
    id: "blood",
    title: "Blood Component Monitoring",
    description:
      "Optical sensing estimates key blood components to give a fuller wellness picture.",
    icon: FlaskConical,
    accent: pulzPalette.dark,
    viz: "bars",
    metric: "Optical",
  },
  {
    id: "glucose",
    title: "Non-Invasive Blood Sugar",
    description:
      "Needle-free glucose trend assessment to help you understand metabolic patterns.",
    icon: Droplet,
    accent: pulzPalette.accent,
    viz: "wave",
    metric: "Trend",
  },
  {
    id: "body-comp",
    title: "Body Composition Analysis",
    description:
      "Understand muscle, water and fat distribution to guide smarter training.",
    icon: PersonStanding,
    accent: pulzPalette.accent,
    viz: "ring",
    metric: "Lean",
  },
  {
    id: "bmi",
    title: "BMI Monitoring",
    description:
      "Track body-mass index over time with clear, trend-aware visualizations.",
    icon: Scale,
    accent: pulzPalette.light,
    viz: "spark",
    metric: "22.4",
  },
  {
    id: "body-fat",
    title: "Body Fat Percentage",
    description:
      "Monitor body-fat percentage trends and celebrate progress with precision.",
    icon: Percent,
    accent: pulzPalette.dark,
    viz: "ring",
    metric: "18%",
  },
];
