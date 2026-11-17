import { motion } from "framer-motion";

/**
 * Live-reading chips placed around the product (right half of the hero) so they
 * never sit on top of the headline, copy or buttons in the left column.
 * Only shown at lg+, where the two-column layout makes these positions safe.
 */
const metrics = [
  { label: "72 BPM", left: "60%", top: "16%" },
  { label: "98% SpO₂", left: "83%", top: "20%" },
  { label: "68 ms HRV", left: "90%", top: "50%" },
  { label: "Sleep 88", left: "83%", top: "80%" },
  { label: "36.6°C", left: "58%", top: "84%" },
];

export function BiometricBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-10 h-[42rem] w-[42rem] rounded-full opacity-70 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(147,217,196,0.55), transparent 60%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 h-[40rem] w-[40rem] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(64,183,148,0.28), transparent 60%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,66,37,0.12), transparent 60%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] opacity-[0.5] mask-fade-y" />

      <svg
        className="absolute inset-x-0 top-1/2 h-40 w-full -translate-y-1/2 opacity-25"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 80 Q 150 10 300 80 T 600 80 T 900 80 T 1200 80"
          fill="none"
          stroke="url(#hero-wave)"
          strokeWidth={2}
          animate={{ x: [0, -300] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="hero-wave" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#013220" />
            <stop offset="50%" stopColor="#40B794" />
            <stop offset="100%" stopColor="#93D9C4" />
          </linearGradient>
        </defs>
      </svg>

      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className="absolute hidden rounded-full border border-border bg-white/90 px-3 py-1.5 text-xs font-medium text-pulz-dark shadow-sm backdrop-blur-md lg:block"
          style={{ left: m.left, top: m.top }}
          // Gentle float; opacity stays high so the reading never drops below legible contrast
          animate={{ y: [0, -10, 0], opacity: [0.85, 1, 0.85] }}
          transition={{
            duration: 6 + (i % 3),
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        >
          {m.label}
        </motion.div>
      ))}
    </div>
  );
}
