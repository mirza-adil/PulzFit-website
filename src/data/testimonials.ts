export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  rating: number;
  quote: string;
  improvement: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sofia Marchetti",
    role: "Marathon Runner",
    initials: "SM",
    rating: 5,
    quote:
      "PulzFit 1 completely changed how I train. The recovery insights told me when to push and when to rest — I shaved 9 minutes off my PB.",
    improvement: "+18% recovery score",
    gradient: "from-pulz-deep to-pulz-accent",
  },
  {
    name: "James Okafor",
    role: "Software Engineer",
    initials: "JO",
    rating: 5,
    quote:
      "The sleep tracking is uncanny. I finally fixed my bedtime routine and my deep sleep nearly doubled in six weeks.",
    improvement: "+92% deep sleep",
    gradient: "from-pulz-accent to-pulz-dark",
  },
  {
    name: "Dr. Aisha Rahman",
    role: "Cardiologist",
    initials: "AR",
    rating: 5,
    quote:
      "I recommend PulzFit to patients who want continuous awareness. The ECG and HRV data are genuinely useful conversation starters.",
    improvement: "Clinically insightful",
    gradient: "from-pulz-accent to-pulz-deep",
  },
  {
    name: "Liam Chen",
    role: "Startup Founder",
    initials: "LC",
    rating: 5,
    quote:
      "Stress monitoring is the feature I didn't know I needed. The AI coach nudges me to breathe before big meetings.",
    improvement: "-31% stress index",
    gradient: "from-pulz-600 to-pulz-400",
  },
  {
    name: "Emma Larsson",
    role: "Yoga Instructor",
    initials: "EL",
    rating: 5,
    quote:
      "It's elegant enough to wear all day and the battery just keeps going. The cycle tracking has been remarkably accurate.",
    improvement: "7-day battery",
    gradient: "from-pulz-dark to-pulz-accent",
  },
  {
    name: "Marcus Bonett",
    role: "Triathlete",
    initials: "MB",
    rating: 5,
    quote:
      "120+ sport modes and the body-composition trends keep me accountable. This is the most complete health wearable I've owned.",
    improvement: "+24% VO₂ trend",
    gradient: "from-pulz-700 to-pulz-500",
  },
];
