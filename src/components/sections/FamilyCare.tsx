import { motion } from "framer-motion";
import {
  Users,
  Share2,
  Siren,
  BellRing,
  LineChart as LineChartIcon,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { pulzPalette } from "@/lib/theme";
import { Reveal } from "@/components/motion/Reveal";

const features = [
  {
    icon: Users,
    title: "Family Health Monitoring",
    desc: "See live wellness status for everyone you care for.",
  },
  {
    icon: Share2,
    title: "Wellness Sharing",
    desc: "Share trends and milestones with chosen members.",
  },
  {
    icon: Siren,
    title: "Emergency Alerts",
    desc: "Instant notifications for falls and critical events.",
  },
  {
    icon: BellRing,
    title: "Remote Care Notifications",
    desc: "Gentle reminders for medication and check-ins.",
  },
  {
    icon: LineChartIcon,
    title: "Health Trend Tracking",
    desc: "Follow long-term progress for each loved one.",
  },
];

const members = [
  { initials: "MR", name: "Mom", status: "Resting · 64 BPM", color: "#004225" },
  { initials: "DD", name: "Dad", status: "Walking · 8.2k steps", color: "#40B794" },
  { initials: "GR", name: "Grandma", status: "Sleeping · Stable", color: "#93D9C4" },
  { initials: "SS", name: "Sister", status: "Workout · 142 BPM", color: pulzPalette.deep },
];

export function FamilyCare() {
  return (
    <section id="family" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Family Care"
          title="Stay Connected to the People Who Matter Most"
          description="Keep an eye on the wellbeing of your loved ones — wherever they are — with shared insights, gentle reminders and instant emergency alerts."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Connected ecosystem illustration */}
          <Reveal>
            <div className="glass-strong relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-3xl p-8">
              {/* central hub */}
              <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-pulz-deep to-pulz-accent text-white shadow-glow">
                <ShieldCheck className="h-7 w-7" />
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider">
                  You
                </span>
              </div>

              {/* pulse rings */}
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="absolute h-24 w-24 rounded-full border border-pulz-deep/30 animate-pulse-ring"
                  style={{ animationDelay: `${i * 0.8}s` }}
                />
              ))}

              {/* member nodes */}
              {members.map((m, i) => {
                const angle = (i / members.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 38;
                const x = 50 + Math.cos(angle) * radius;
                const y = 50 + Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={m.name}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12 }}
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-semibold backdrop-blur-md"
                      style={{
                        borderColor: `${m.color}66`,
                        background: `${m.color}1a`,
                        color: m.color,
                      }}
                    >
                      {m.initials}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          {/* Features + live status */}
          <div>
            <div className="space-y-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06} direction="left">
                  <div className="group flex items-start gap-4 rounded-2xl border border-pulz-200 bg-pulz-100/50 p-4 transition-colors hover:border-pulz-500/40">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pulz-accent/10 text-pulz-accent">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{f.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-5 rounded-2xl border border-pulz-accent/20 bg-pulz-accent/[0.06] p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-pulz-accent">
                  <Siren className="h-4 w-4" />
                  Emergency alert example
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  "Grandma's heart rate dropped below normal — tap to call or
                  view live vitals."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
