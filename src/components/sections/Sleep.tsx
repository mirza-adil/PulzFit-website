import { Moon, TrendingUp, BatteryCharging } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ScoreRing } from "@/components/visuals/ScoreRing";
import { SleepStages } from "@/components/visuals/SleepStages";
import { LineChart } from "@/components/visuals/LineChart";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";
import { Counter } from "@/components/motion/Counter";

const highlights = [
  { label: "Deep Sleep", value: "1h 48m", color: "#013220" },
  { label: "REM Sleep", value: "1h 32m", color: "#40B794" },
  { label: "Light Sleep", value: "4h 06m", color: "#004225" },
  { label: "Restfulness", value: "92%", color: "#40B794" },
];

export function Sleep() {
  return (
    <section id="sleep" className="section">
      <div className="container">
        <SectionHeading
          align="left"
          eyebrow="Sleep Intelligence"
          title={
            <>
              Wake up knowing{" "}
              <span className="text-gradient-brand">exactly how you slept</span>
            </>
          }
          description="Stage-by-stage analysis of deep, REM and light sleep — distilled into a nightly Sleep Score and personalized recovery insights."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            {/* Sleep stages dashboard card */}
            <Reveal>
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pulz-deep/15 text-pulz-deep">
                      <Moon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Last night</p>
                      <p className="text-xs text-muted-foreground">
                        7h 26m asleep
                      </p>
                    </div>
                  </div>
                  <ScoreRing
                    value={88}
                    size={92}
                    stroke={8}
                    color="#004225"
                    label="88"
                    sublabel="score"
                  />
                </div>
                <div className="mt-6">
                  <SleepStages />
                </div>
              </div>
            </Reveal>

            {/* Highlights + trend */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal direction="up">
                <div className="glass h-full rounded-3xl p-6">
                  <div className="grid grid-cols-2 gap-5">
                    {highlights.map((h) => (
                      <div key={h.label}>
                        <span
                          className="block h-1.5 w-8 rounded-full"
                          style={{ background: h.color }}
                        />
                        <p className="mt-2 font-display text-xl font-bold">
                          {h.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {h.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <div className="glass h-full rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">7-day trend</p>
                    <span className="flex items-center gap-1 text-xs text-pulz-500">
                      <TrendingUp className="h-3.5 w-3.5" />
                      +12%
                    </span>
                  </div>
                  <LineChart
                    data={[72, 78, 70, 83, 80, 86, 88]}
                    color="#004225"
                    height={90}
                  />
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <BatteryCharging className="h-3.5 w-3.5 text-pulz-500" />
                    Recovery improving steadily
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Phone mockup */}
          <Reveal direction="left" className="hidden justify-center lg:flex">
            <PhoneMockup className="animate-float">
              <SleepApp />
            </PhoneMockup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SleepApp() {
  return (
    <div className="flex h-full flex-col p-5 pt-10">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        Sleep
      </p>
      <h3 className="mt-1 font-display text-xl font-bold">Good morning, Alex</h3>

      <div className="mt-6 flex justify-center">
        <ScoreRing
          value={88}
          size={150}
          stroke={12}
          color="#004225"
          label="88"
          sublabel="sleep score"
        />
      </div>

      <div className="mt-6 space-y-3">
        {[
          { label: "Deep", value: "1h 48m", w: "26%", c: "#013220" },
          { label: "REM", value: "1h 32m", w: "22%", c: "#40B794" },
          { label: "Light", value: "4h 06m", w: "52%", c: "#004225" },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-medium">{s.value}</span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full"
                style={{ width: s.w, background: s.c }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-2xl border border-pulz-200 bg-pulz-100/50 p-4">
        <p className="text-xs text-muted-foreground">Readiness</p>
        <p className="font-display text-2xl font-bold text-pulz-500">
          <Counter to={92} suffix="%" />
        </p>
      </div>
    </div>
  );
}
