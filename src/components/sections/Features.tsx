import { motion } from "framer-motion";
import { healthFeatures } from "@/data/features";
import { MiniViz } from "@/components/visuals/MiniViz";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/motion/Reveal";

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Complete Health Monitoring"
          title={
            <>
              Every vital signal,{" "}
              <span className="text-gradient-brand">one bracelet</span>
            </>
          }
          description="PulzFit 1 packs a full lab of medical-grade sensors into a featherweight band — tracking 17+ dimensions of your health, continuously and effortlessly."
        />

        <StaggerGroup
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
          amount={0.05}
        >
          {healthFeatures.map((feature) => (
            <motion.article
              key={feature.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="border-gradient group relative overflow-hidden rounded-2xl border border-pulz-200 bg-white p-6 shadow-card transition-all duration-300 hover:border-pulz-300 hover:shadow-elevated"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: feature.accent }}
              />
              <div className="relative flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-pulz-200 bg-pulz-100/50"
                  style={{
                    background: `${feature.accent}1a`,
                    color: feature.accent,
                  }}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                {feature.metric && (
                  <span
                    className="rounded-full border border-pulz-200 bg-pulz-100 px-3 py-1 text-xs font-medium text-pulz-700"
                    style={{ color: feature.accent }}
                  >
                    {feature.metric}
                  </span>
                )}
              </div>

              <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              <div className="relative mt-5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                <MiniViz type={feature.viz} color={feature.accent} />
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
