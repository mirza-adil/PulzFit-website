import { motion } from "framer-motion";
import { pulzPalette } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface ECGTraceProps {
  color?: string;
  className?: string;
  height?: number;
  duration?: number;
}

// One ECG heartbeat segment, repeated horizontally.
const beat =
  "0,30 18,30 24,30 28,12 32,48 36,22 40,30 60,30 66,30 70,28 74,32 78,30 96,30";

function buildPath(repeat: number): string {
  const segWidth = 96;
  let points: string[] = [];
  for (let i = 0; i < repeat; i++) {
    const offset = i * segWidth;
    beat.split(" ").forEach((pt) => {
      const [x, y] = pt.split(",").map(Number);
      points.push(`${x + offset},${y}`);
    });
  }
  return "M " + points.map((p) => p.replace(",", " ")).join(" L ");
}

export function ECGTrace({
  color = pulzPalette.deep,
  className,
  height = 120,
  duration = 3,
}: ECGTraceProps) {
  const repeat = 8;
  const width = repeat * 96;
  const path = buildPath(repeat);

  return (
    <div className={cn("relative w-full overflow-hidden", className)} style={{ height }}>
      <svg
        viewBox={`0 0 ${width} 60`}
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="ecg-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="20%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke="url(#ecg-fade)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: `drop-shadow(0 0 6px ${color}99)` }}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className="pointer-events-none absolute inset-y-0 w-24"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}33, transparent)`,
        }}
        animate={{ x: ["-10%", "100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
