import { motion } from "framer-motion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ActivityRings } from "@/components/visuals/ActivityRings";
import { Counter } from "@/components/motion/Counter";
import { activityStats, sportCategories } from "@/data/sports";
import { pulzPalette } from "@/lib/theme";

export function Sports() {
  return (
    <section id="sports" className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Sports & Fitness"
          title={
            <>
              Train smarter across{" "}
              <span className="text-gradient-brand">120+ sport modes</span>
            </>
          }
          description="From your morning run to recovery yoga, PulzFit auto-detects activity and captures every metric that matters."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          {/* Activity dashboard */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-8">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
                <div className="relative shrink-0">
                  <ActivityRings
                    size={200}
                    rings={[
                      { progress: 1.04, color: pulzPalette.dark },
                      { progress: 0.93, color: pulzPalette.deep },
                      { progress: 0.86, color: pulzPalette.accent },
                    ]}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-2xl font-bold">
                      <Counter to={104} suffix="%" />
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      goals
                    </span>
                  </div>
                </div>

                <div className="grid w-full grid-cols-2 gap-4">
                  {activityStats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-pulz-200 bg-pulz-100/50 p-4"
                    >
                      <span
                        className="block h-1.5 w-8 rounded-full"
                        style={{ background: s.color }}
                      />
                      <p className="mt-2 font-display text-xl font-bold">
                        <Counter
                          to={s.value}
                          decimals={s.label === "Distance" ? 1 : 0}
                        />
                        {s.unit && (
                          <span className="ml-1 text-xs text-muted-foreground">
                            {s.unit}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-pulz-200 bg-pulz-100/50 px-5 py-4">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Recovery tracking
                  </p>
                  <p className="text-sm font-medium">Ready for next session</p>
                </div>
                <span className="font-display text-2xl font-bold text-pulz-500">
                  <Counter to={92} suffix="%" />
                </span>
              </div>
            </div>
          </Reveal>

          {/* Sport categories */}
          <div>
            <Reveal>
              <p className="text-sm text-muted-foreground">
                Auto-detected & manual modes include
              </p>
            </Reveal>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {sportCategories.map((sport, i) => (
                <motion.div
                  key={sport.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group flex items-center gap-3 rounded-2xl border border-pulz-200 bg-pulz-100/50 px-4 py-3 transition-colors hover:border-pulz-500/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pulz-accent/10 text-pulz-accent transition-transform group-hover:scale-110">
                    <sport.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{sport.name}</span>
                </motion.div>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="mt-5 rounded-2xl border border-dashed border-pulz-300 px-5 py-4 text-center text-sm text-muted-foreground">
                + 108 more sport modes
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
