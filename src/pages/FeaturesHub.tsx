import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { healthFeatures } from "@/data/features";
import { textColorFor } from "@/lib/theme";

/** Feature ids that have their own in-depth page. Add an entry as each guide is published. */
const guides: Record<string, string> = {
  ecg: "/features/ecg/",
};

/** Hub groups. Each intro is written for this page (not reused from the homepage). */
const groups: { id: string; title: string; intro: string; features: string[] }[] = [
  {
    id: "heart",
    title: "Heart health",
    intro:
      "PulzFit combines an on-demand single-lead ECG with round-the-clock heart rate and HRV. The ECG gives you a 30-second snapshot of your rhythm, and the continuous readings show how your heart responds to sleep, training and stress over weeks. Blood-pressure readings are cuffless estimates for spotting trends, not a replacement for a cuff.",
    features: ["ecg", "hr", "hrv", "bp"],
  },
  {
    id: "vitals",
    title: "Blood oxygen and temperature",
    intro:
      "Blood oxygen and skin temperature are quiet signals that are easy to miss during the day. PulzFit tracks SpO₂ overnight to show breathing and recovery quality, and senses skin temperature continuously, so subtle shifts are easier to spot.",
    features: ["spo2", "temp"],
  },
  {
    id: "sleep-stress",
    title: "Sleep, stress and recovery",
    intro:
      "Sleep stages come from heart rate, HRV, movement and temperature, and the stress index from HRV and skin response. Together they help explain why some days feel harder than others, and the AI Health Coach on PulzFit Plus turns them into daily recovery advice.",
    features: ["sleep", "stress"],
  },
  {
    id: "everyday",
    title: "Everyday health and family safety",
    intro:
      "Beyond measurements, PulzFit helps with routines and the people you care about: cycle tracking, medication reminders, alerts when a reading looks unusual, and the Family plan for keeping an eye on up to six people.",
    features: ["womens", "meds", "alerts", "family"],
  },
];

export function FeaturesHub() {
  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-28 md:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-pulz-300/30 blur-[140px]" />
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Features" }]} />
          <h1 className="mt-8 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            PulzFit features: everything the bracelet tracks
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            PulzFit is a screenless health bracelet. Here is everything it measures, from on-demand
            ECG to sleep stages, with in-depth guides that explain how each feature works and what
            it can and can't tell you.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28" aria-label="All features">
        <div className="container">
          <div className="space-y-16">
            {groups.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28">
                <h2 id={`${g.id}-title`} className="font-display text-2xl font-bold tracking-tight text-pulz-900 sm:text-3xl">
                  {g.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{g.intro}</p>
                <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {g.features
                    .map((id) => healthFeatures.find((f) => f.id === id))
                    .filter((f): f is (typeof healthFeatures)[number] => Boolean(f))
                    .map((f) => {
                      const guide = guides[f.id];
                      return (
                        <li
                          key={f.id}
                          className="relative flex flex-col rounded-2xl border border-pulz-200 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated"
                        >
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-pulz-200"
                            style={{ background: `${f.accent}1a`, color: textColorFor(f.accent) }}
                          >
                            <f.icon className="h-6 w-6" aria-hidden />
                          </div>
                          <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                            {guide ? (
                              <a href={guide} className="after:absolute after:inset-0 hover:text-pulz-ink">
                                {f.title}
                              </a>
                            ) : (
                              f.title
                            )}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                          {guide && (
                            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pulz-ink">
                              Read the guide <ArrowRight className="h-4 w-4" aria-hidden />
                            </span>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Pre-release specifications. PulzFit is a wellness device, not a medical device.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
