import { Activity, Heart, HeartPulse, Sparkles } from "lucide-react";
import { pulzPalette } from "@/lib/theme";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ECGTrace } from "@/components/visuals/ECGTrace";
import { LineChart } from "@/components/visuals/LineChart";
import { Counter } from "@/components/motion/Counter";

const vitals = [
  {
    icon: HeartPulse,
    label: "Resting Heart Rate",
    value: 58,
    unit: "BPM",
    color: pulzPalette.deep,
    note: "Lower than 78% of users",
  },
  {
    icon: Heart,
    label: "Heart Rate Variability",
    value: 68,
    unit: "ms",
    color: pulzPalette.dark,
    note: "Optimal recovery range",
  },
  {
    icon: Activity,
    label: "Cardiac Stability",
    value: 96,
    unit: "%",
    color: pulzPalette.accent,
    note: "Normal sinus rhythm",
  },
];

const recommendations = [
  "Your HRV is trending up — keep your current sleep schedule.",
  "Add 10 minutes of zone-2 cardio to strengthen recovery.",
  "Hydration looks low on training days. Aim for 2.5L.",
];

export function HeartHealth() {
  return (
    <section id="heart" className="section">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-pulz-deep/10 blur-[120px]" />

      <div className="container">
        <SectionHeading
          eyebrow="Heart Health"
          title={
            <>
              A medical-grade view of{" "}
              <span className="text-gradient-brand">your heart</span>
            </>
          }
          description="On-demand ECG, continuous heart rate and HRV analysis combine into a clear picture of cardiovascular wellness — with guidance you can act on."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* ECG card spanning two columns */}
          <Reveal className="lg:col-span-2">
            <div className="glass relative h-full overflow-hidden rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pulz-deep/15 text-pulz-deep">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ECG · Lead I</p>
                    <p className="text-xs text-muted-foreground">
                      Recording · 30s
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-pulz-500/30 bg-pulz-500/10 px-3 py-1 text-xs font-medium text-pulz-500">
                  Normal Sinus Rhythm
                </span>
              </div>

              <ECGTrace className="mt-6" height={140} />

              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-pulz-200 pt-4">
                <Metric label="Avg HR" value="62" unit="BPM" />
                <Metric label="QT Interval" value="398" unit="ms" />
                <Metric label="Signal" value="Clean" unit="" />
              </div>
            </div>
          </Reveal>

          {/* Recommendations card */}
          <Reveal direction="left">
            <div className="glass h-full rounded-3xl p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pulz-accent" />
                <p className="text-sm font-medium">Wellness Recommendations</p>
              </div>
              <ul className="mt-5 space-y-4">
                {recommendations.map((rec, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pulz-accent" />
                    {rec}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-pulz-200 bg-pulz-100/50 p-4">
                <p className="text-xs text-muted-foreground">7-day HRV trend</p>
                <LineChart
                  data={[52, 58, 55, 62, 60, 65, 68]}
                  color={pulzPalette.deep}
                  height={70}
                  fill={false}
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Vitals */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {vitals.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.08}>
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${v.color}1a`, color: v.color }}
                  >
                    <v.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs text-muted-foreground">{v.note}</span>
                </div>
                <p className="mt-4 font-display text-4xl font-bold">
                  <Counter to={v.value} />
                  <span className="ml-1 text-lg text-muted-foreground">
                    {v.unit}
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{v.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-display text-lg font-bold">
        {value}
        {unit && <span className="ml-1 text-xs text-muted-foreground">{unit}</span>}
      </p>
    </div>
  );
}
