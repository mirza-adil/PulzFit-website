import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { BiometricBackground } from "@/components/visuals/BiometricBackground";
import { ProductShowcase } from "@/components/visuals/ProductShowcase";

const stats = [
  { value: "12-15 days", label: "battery" },
  { value: "100m", label: "water resistant" },
  { value: "120+", label: "sport modes" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 md:pt-32"
    >
      <BiometricBackground />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="animate-hero-fade-up">
              <span className="eyebrow">
                <ShieldCheck className="h-3.5 w-3.5 text-pulz-ink" />
                Know Your Body. Improve Your Life.
              </span>
            </div>

            <h1
              className="mt-6 animate-hero-rise font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-balance [animation-delay:80ms] sm:text-6xl lg:text-7xl"
            >
              Meet <span className="text-gradient">PulzFit</span>
              <span className="sr-only">, the screenless AI health bracelet with ECG</span>
            </h1>

            <p className="mt-6 max-w-xl animate-hero-rise text-lg leading-relaxed text-muted-foreground [animation-delay:160ms] sm:text-xl">
              The screenless AI health bracelet for complete wellness
              monitoring — ECG, sleep, HRV and recovery tracking with
              precision sensing on a single charge.
            </p>

            <div className="mt-9 flex animate-hero-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
              <Magnetic className="w-full sm:w-auto">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#contact" className="font-bold">
                    Coming Soon <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
              <Button variant="outline" size="lg" asChild>
                <a href="#features">Explore Features</a>
              </Button>
            </div>

            <dl className="mt-12 flex animate-hero-fade-up gap-6 [animation-delay:320ms] sm:gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="whitespace-nowrap font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Product showcase */}
          <div className="relative mx-auto w-full max-w-lg animate-hero-pop [animation-delay:200ms] lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-pulz-500/15 via-transparent to-pulz-400/10 blur-3xl" />
            <div className="relative flex items-center justify-center p-2 sm:p-4">
              <ProductShowcase />
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#features"
        aria-label="Scroll to features"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
