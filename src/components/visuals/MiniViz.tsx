import { motion } from "framer-motion";
import type { VizType } from "@/data/features";

interface MiniVizProps {
  type: VizType;
  color: string;
}

export function MiniViz({ type, color }: MiniVizProps) {
  switch (type) {
    case "wave":
      return <WaveViz color={color} />;
    case "pulse":
      return <PulseViz color={color} />;
    case "bars":
      return <BarsViz color={color} />;
    case "ring":
      return <RingViz color={color} />;
    case "spark":
      return <SparkViz color={color} />;
    case "dots":
      return <DotsViz color={color} />;
    default:
      return null;
  }
}

function WaveViz({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full">
      <motion.path
        d="M0 20 Q 15 4 30 20 T 60 20 T 90 20 T 120 20"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </svg>
  );
}

function PulseViz({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full">
      <motion.path
        d="M0 20 H30 L36 20 L40 8 L46 32 L52 20 L58 20 H120"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </svg>
  );
}

function BarsViz({ color }: { color: string }) {
  const bars = [0.4, 0.7, 0.45, 0.9, 0.6, 0.8, 0.5];
  return (
    <div className="flex h-10 items-end gap-1.5">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}88` }}
          initial={{ height: "20%" }}
          animate={{ height: [`${h * 50}%`, `${h * 100}%`, `${h * 50}%`] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function RingViz({ color }: { color: string }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10">
      <circle cx="20" cy="20" r={r} fill="none" stroke={`${color}22`} strokeWidth={4} />
      <motion.circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={c}
        transform="rotate(-90 20 20)"
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: [c, c * 0.25, c] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </svg>
  );
}

function SparkViz({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full">
      <motion.path
        d="M0 30 L20 26 L35 32 L50 14 L65 22 L80 10 L95 18 L120 6"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, repeat: Infinity, repeatType: "reverse" }}
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </svg>
  );
}

function DotsViz({ color }: { color: string }) {
  return (
    <div className="flex h-10 items-center gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.span
          key={i}
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: i * 0.18,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
