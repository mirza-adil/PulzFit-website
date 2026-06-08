import { Check, Sparkles, X } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import {
  pricingPlans,
  productPrice,
  comparisonRows,
} from "@/data/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-pulz-300/30 blur-[140px]" />

      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Own the bracelet.{" "}
              <span className="text-gradient-brand">Choose your intelligence.</span>
            </>
          }
          description={
            <>
              Get the PulzFit 1 bracelet for a one-time{" "}
              <span className="font-semibold text-pulz-900">
                ${productPrice}
              </span>
              , then pick the plan that fits your goals. Cancel anytime.
            </>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 transition-shadow duration-300 md:p-8",
                  plan.highlight
                    ? "border-pulz-400 bg-gradient-to-b from-pulz-100 to-white shadow-elevated"
                    : "border-pulz-200 bg-white shadow-card hover:shadow-elevated"
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-pulz-deep to-pulz-accent px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-pulz-900">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {plan.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-pulz-900">
                    {plan.price === 0 ? "Free" : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-sm text-muted-foreground">
                      /{plan.period.replace("per ", "")}
                    </span>
                  )}
                </div>
                {plan.price === 0 && (
                  <span className="text-xs text-muted-foreground">
                    {plan.period}
                  </span>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-pulz-600" />
                      <span className="leading-relaxed text-foreground/90">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {plan.highlight ? (
                    <Magnetic>
                      <Button variant="gradient" className="w-full" asChild>
                        <a href="#contact">
                          <Sparkles className="h-4 w-4" />
                          {plan.cta}
                        </a>
                      </Button>
                    </Magnetic>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                      disabled={plan.cta === "Included"}
                    >
                      <a href="#contact">{plan.cta}</a>
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-pulz-200 bg-white shadow-card">
            <div className="grid grid-cols-3 border-b border-pulz-200 bg-pulz-100/60 px-6 py-4 text-sm font-semibold text-pulz-900">
              <span>Capability</span>
              <span className="text-center text-pulz-700">PulzFit 1</span>
              <span className="text-center text-muted-foreground">Others</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.capability}
                className={cn(
                  "grid grid-cols-3 px-6 py-4 text-sm",
                  i % 2 === 1 && "bg-pulz-100/40"
                )}
              >
                <span className="text-foreground/90">{row.capability}</span>
                <span className="flex items-center justify-center gap-1.5 font-medium text-pulz-700">
                  <Check className="h-4 w-4 text-pulz-600" />
                  {row.pulzfit}
                </span>
                <span className="flex items-center justify-center gap-1.5 text-muted-foreground">
                  {row.others === "No" ? (
                    <X className="h-4 w-4 text-muted-foreground" />
                  ) : null}
                  {row.others}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
