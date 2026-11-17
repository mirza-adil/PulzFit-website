import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { bands } from "@/data/bands";
import { cn } from "@/lib/utils";

export function Bands() {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const band = bands[index];

  const select = (i: number, focus = false) => {
    const next = (i + bands.length) % bands.length;
    setIndex(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: bands.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(keys[e.key], true);
    }
  };

  return (
    <section id="bands" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Fitness Bands"
          title={
            <>
              Interchangeable bands. <span className="text-gradient-brand">Your style.</span>
            </>
          }
          description="Pick the band that suits your day, from sweat-friendly silicone to a soft woven loop for all-day and overnight comfort."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Product stage */}
          <Reveal>
            <div
              id="band-panel"
              role="tabpanel"
              aria-labelledby={`band-tab-${band.id}`}
              className="relative overflow-hidden rounded-3xl border border-pulz-200 bg-white shadow-card"
            >
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-700"
                style={{ backgroundColor: band.tint }}
              />
              <div className="relative mx-auto w-full max-w-[460px] p-6 sm:p-10">
                <div className="relative aspect-[836/1000] w-full">
                {/* All images stay mounted so switching is instant; only the active one is visible */}
                {bands.map((b, i) => (
                  <img
                    key={b.id}
                    src={b.image}
                    alt={i === index ? `PulzFit with ${b.name} band` : ""}
                    aria-hidden={i !== index}
                    width={836}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className={cn(
                      "absolute inset-0 h-full w-full select-none object-contain drop-shadow-[0_18px_24px_rgba(1,50,32,0.16)] transition-[opacity,transform] duration-500 ease-out",
                      i === index ? "scale-100 opacity-100" : "scale-[0.97] opacity-0"
                    )}
                  />
                ))}
                </div>
              </div>

            </div>
          </Reveal>

          {/* Details + picker */}
          <div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={band.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                aria-live="polite"
              >
                <h3 className="font-display text-3xl font-bold tracking-tight text-pulz-900">
                  {band.name}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  {band.description}
                </p>
                <dl className="mt-6 grid max-w-sm grid-cols-2 gap-4 border-y border-pulz-200 py-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Material</dt>
                    <dd className="mt-0.5 font-semibold text-pulz-900">{band.material}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Fastening</dt>
                    <dd className="mt-0.5 font-semibold text-pulz-900">{band.fastening}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>

            <p id="band-picker-label" className="mt-8 text-sm font-medium text-pulz-900">
              Choose a band
            </p>
            <div
              role="tablist"
              aria-labelledby="band-picker-label"
              className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2"
            >
              {bands.map((b, i) => {
                const active = i === index;
                return (
                  <button
                    key={b.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    id={`band-tab-${b.id}`}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    aria-controls="band-panel"
                    tabIndex={active ? 0 : -1}
                    onClick={() => select(i)}
                    onKeyDown={onKeyDown}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border bg-white px-3.5 py-3 text-left text-sm font-medium transition-[border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      active
                        ? "border-pulz-900 text-pulz-900 shadow-card"
                        : "border-pulz-200 text-foreground/80 hover:border-pulz-400"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "h-6 w-6 shrink-0 rounded-full ring-offset-2 ring-offset-white",
                        active ? "ring-2 ring-pulz-900" : "ring-1 ring-black/10"
                      )}
                      style={{ background: b.swatch }}
                    />
                    <span className="leading-tight">{b.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
