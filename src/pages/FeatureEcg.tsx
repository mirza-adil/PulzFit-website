import { type ReactNode } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ECGTrace } from "@/components/visuals/ECGTrace";
import { ecgFaq, ecgUpdated } from "@/data/ecgPage";

const updatedLabel = new Date(`${ecgUpdated}T00:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const inlineLink =
  "font-medium text-pulz-ink underline decoration-pulz-300 underline-offset-4 hover:decoration-pulz-ink";

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-14">
      <h2 className="font-display text-3xl font-bold tracking-tight text-pulz-900 text-balance sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg [&_strong]:font-semibold [&_strong]:text-pulz-900">
        {children}
      </div>
    </section>
  );
}

const can = [
  "Record your heart's electrical rhythm on demand, in about 30 seconds",
  "Flag a rhythm that looks irregular, so you know to talk to a doctor",
  "Give you a saved recording you can review in the app and show a clinician",
  "Add context to your heart rate and HRV trends over time",
];

const cannot = [
  "Detect a heart attack: one lead only sees part of the heart's activity",
  "Monitor your rhythm continuously; it records only when you take a reading",
  "Diagnose a heart condition; only a clinician can do that",
  "Replace a 12-lead ECG or any test your doctor asks you to take",
];

export function FeatureEcg() {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-pulz-300/30 blur-[140px]" />
        <div className="container max-w-3xl">
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Features", path: "/features/" }, { name: "ECG" }]}
          />
          <span className="eyebrow mt-8">
            <span>
              Feature guide · Updated <time dateTime={ecgUpdated}>{updatedLabel}</time>
            </span>
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            ECG on PulzFit: single-lead heart rhythm checks on your wrist
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            PulzFit can record a single-lead (Lead I) electrocardiogram, or ECG, whenever you choose
            to take one. A reading takes about 30 seconds. PulzFit analyses the rhythm of your
            heartbeat and flags readings that look irregular, so you know when it might be worth
            talking to a doctor. It's a wellness feature for rhythm awareness. It isn't a medical
            device and can't diagnose a heart condition.
          </p>

          <div className="glass mt-10 rounded-3xl p-6" aria-hidden>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">ECG · Lead I</span>
              <span className="text-xs text-muted-foreground">Illustration</span>
            </div>
            <ECGTrace className="mt-4" height={120} />
          </div>
        </div>
      </section>

      <div className="container max-w-3xl pb-20 md:pb-28">

        <Block id="what-is" title="What is a single-lead ECG?">
          <p>
            An electrocardiogram records the small electrical signals that make your heart beat. In a
            clinic, a 12-lead ECG uses electrodes on your chest, arms and legs to view the heart from
            12 angles.
          </p>
          <p>
            A <strong>single-lead ECG</strong> records one of those views. <strong>Lead I</strong>,
            the view PulzFit uses, measures the electrical difference between your left and right
            arms. One lead is enough to see the rhythm of your heartbeat: how regular it is and how
            fast it is. It isn't enough to see everything a 12-lead ECG can.
          </p>
        </Block>

        <Block id="how-to" title="How to take an ECG reading with PulzFit">
          <ol className="list-decimal space-y-2 pl-6">
            <li>Sit down and rest your arm on a table or your lap.</li>
            <li>Start an ECG reading in the PulzFit app and follow the on-screen steps.</li>
            <li>Stay still and relaxed for about 30 seconds while the bracelet records.</li>
            <li>Review the result in the app, where the recording is saved to your history.</li>
          </ol>
          <p>
            Movement, a loose fit or dry skin can make a recording hard to read. If that happens, wait
            a moment and try again.
          </p>
        </Block>

        <Block id="can-cannot" title="What PulzFit's ECG can and can't tell you">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-pulz-200 bg-white p-5 shadow-card">
              <h3 className="font-display text-lg font-semibold text-pulz-900">It can</h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                {can.map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pulz-ink" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-pulz-200 bg-white p-5 shadow-card">
              <h3 className="font-display text-lg font-semibold text-pulz-900">It can't</h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                {cannot.map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Block>

        <Block id="irregular" title="What to do if a reading is flagged as irregular">
          <p>
            A flag means the rhythm in that recording didn't look regular. It isn't a diagnosis. An
            irregular reading can come from movement or a poor recording as well as from your heart.
          </p>
          <p>
            Take another reading when you're sitting still. If readings keep being flagged, or you
            notice palpitations, dizziness or breathlessness, book an appointment with your doctor
            and show them the saved recordings. If you feel unwell, seek medical help straight away.
          </p>
        </Block>

        <Block id="context" title="ECG, heart rate and HRV together">
          <p>
            An ECG is a snapshot you take on demand. Between readings, PulzFit tracks your{" "}
            <strong>heart rate</strong> around the clock and your{" "}
            <strong>heart-rate variability (HRV)</strong>, a marker of how recovered and balanced
            your nervous system is. Together they give you both a moment-in-time view of your
            rhythm and long-term trends.{" "}
            <a href="/#heart" className={inlineLink}>
              See PulzFit's heart features
            </a>
            .
          </p>
        </Block>

        <Block id="faq" title="PulzFit ECG FAQ">
          <div className="space-y-6">
            {ecgFaq.map((f) => (
              <div key={f.question}>
                <h3 className="font-display text-lg font-semibold text-pulz-900">{f.question}</h3>
                <p className="mt-2">{f.answer}</p>
              </div>
            ))}
          </div>
        </Block>

        <section className="pt-14" aria-labelledby="related">
          <h2 id="related" className="font-display text-2xl font-bold tracking-tight text-pulz-900">
            Explore more
          </h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" asChild>
              <a href="/features/">All PulzFit features</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/#pricing">Plans and pricing</a>
            </Button>
            <Button variant="gradient" asChild>
              <a href="#contact" className="font-bold">
                Get launch updates <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            PulzFit is a wellness device. It is not a medical device and is not intended to diagnose,
            treat, cure or prevent any disease. Pre-release specifications.
          </p>
        </section>
      </div>

      <ContactCTA />
    </>
  );
}
