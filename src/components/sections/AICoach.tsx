import { motion } from "framer-motion";
import {
  Sparkles,
  Moon,
  HeartPulse,
  Brain,
  TrendingUp,
  Bot,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ScoreRing } from "@/components/visuals/ScoreRing";

const capabilities = [
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    desc: "Daily actions tuned to your unique baselines.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Health Trends",
    desc: "Spot patterns across weeks and months.",
  },
  {
    icon: HeartPulse,
    title: "Recovery Guidance",
    desc: "Know when to push and when to rest.",
  },
  {
    icon: Moon,
    title: "Sleep Optimization",
    desc: "A smarter wind-down routine, every night.",
  },
  {
    icon: Brain,
    title: "Stress Reduction",
    desc: "Breathing nudges before stress peaks.",
  },
  {
    icon: Sparkles,
    title: "Wellness Insights",
    desc: "Plain-language explanations of your data.",
  },
];

const chat = [
  {
    role: "ai" as const,
    text: "Good morning, Alex. Your recovery is 92% today — a great window for a harder session.",
  },
  {
    role: "user" as const,
    text: "Should I do my long run today?",
  },
  {
    role: "ai" as const,
    text: "Yes. HRV is up 12% and sleep was strong. Aim for zone 2 and hydrate well — I'll monitor your strain.",
  },
];

export function AICoach() {
  return (
    <section id="ai-coach" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="AI Health Coach"
          title={
            <>
              Your personal{" "}
              <span className="text-gradient-brand">wellness intelligence</span>
            </>
          }
          description="PulzFit's AI continuously interprets your data and turns it into clear, personalized guidance — like having a coach, sleep scientist and cardiologist on your wrist."
        />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-2">
          {/* AI assistant dashboard */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pulz-deep to-pulz-accent text-white">
                    <Bot className="h-5 w-5" />
                    <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-card bg-pulz-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">PulzFit Coach</p>
                    <p className="text-xs text-pulz-500">Online · analyzing</p>
                  </div>
                </div>
                <ScoreRing
                  value={92}
                  size={72}
                  stroke={7}
                  color="#93D9C4"
                  label="92"
                  sublabel="ready"
                />
              </div>

              <div className="mt-6 space-y-3">
                {chat.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.25, duration: 0.5 }}
                    className={
                      m.role === "ai"
                        ? "max-w-[85%] rounded-2xl rounded-tl-sm border border-pulz-200 bg-pulz-100/60 p-3.5 text-sm"
                        : "ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-pulz-deep to-pulz-dark p-3.5 text-sm text-white"
                    }
                  >
                    {m.text}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Recovery", value: "92%", c: "#93D9C4" },
                  { label: "Sleep", value: "88", c: "#004225" },
                  { label: "Stress", value: "Low", c: "#40B794" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-pulz-200 bg-pulz-100/50 p-3 text-center"
                  >
                    <p
                      className="font-display text-lg font-bold"
                      style={{ color: s.c }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Capabilities grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="group glass h-full rounded-2xl p-5 transition-colors hover:border-pulz-accent/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pulz-accent/15 text-pulz-accent transition-transform group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
