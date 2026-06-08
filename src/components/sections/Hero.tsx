import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { BiometricBackground } from "@/components/visuals/BiometricBackground";
import { ProductShowcase } from "@/components/visuals/ProductShowcase";

const stats = [
  { value: "7-day", label: "battery" },
  { value: "100m", label: "water resistant" },
  { value: "120+", label: "sport modes" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32"
    >
      <BiometricBackground />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">
                <ShieldCheck className="h-3.5 w-3.5 text-pulz-500" />
                Know Your Body. Improve Your Life.
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Meet <span className="text-gradient">PulzFit</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              The most advanced AI health bracelet for complete wellness
              monitoring — continuous insights, recovery tracking and
              medical-grade sensing on a single charge.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <Magnetic>
                <Button variant="gradient" size="lg" asChild>
                  <a href="#pricing">
                    Buy Now <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
              <Button variant="gradient" size="lg" asChild>
                <a href="#features">Explore Features</a>
              </Button>
            </motion.div>

            <motion.dl
              className="mt-12 flex gap-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Product showcase */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-pulz-500/15 via-transparent to-pulz-400/10 blur-3xl" />
            <div className="relative flex items-center justify-center p-2 sm:p-4">
              <ProductShowcase />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#features"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
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
