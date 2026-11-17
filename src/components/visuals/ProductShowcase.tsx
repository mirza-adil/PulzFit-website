import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { pulzPalette } from "@/lib/theme";

const ink = pulzPalette.deep;

const clamp = (v: number) => Math.max(-1, Math.min(1, v));

/**
 * Cursor-follow tilt. Returns spring-smoothed transform values that lean the
 * product toward the mouse. Only active for a real mouse (fine pointer + hover),
 * while the element is on screen, and never under prefers-reduced-motion.
 * Driven by motion values, so pointer moves don't re-render React.
 */
function useCursorTilt(ref: React.RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion();
  const px = useMotionValue(0); // -1 … 1, cursor position relative to the product
  const py = useMotionValue(0);
  const spring = { stiffness: 110, damping: 18, mass: 0.7 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  useEffect(() => {
    if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return; // off screen: skip work
      px.set(clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)));
      py.set(clamp((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)));
    };
    const recenter = () => {
      px.set(0);
      py.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", recenter);
    window.addEventListener("blur", recenter);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", recenter);
      window.removeEventListener("blur", recenter);
    };
  }, [reduced, ref, px, py]);

  return {
    rotateY: useTransform(sx, [-1, 1], [-14, 14]),
    rotateX: useTransform(sy, [-1, 1], [10, -10]),
    x: useTransform(sx, [-1, 1], [-18, 18]),
    y: useTransform(sy, [-1, 1], [-12, 12]),
  };
}

/**
 * Product drawing with dimension callouts. The image is a clean copy of
 * pulzfit-product.png with its faint baked-in labels removed, so these crisp
 * SVG callouts (same 957×696 coordinate space, aligned to the real edges) are
 * the only ones shown.
 */
export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const tilt = useCursorTilt(ref);

  return (
    // Outer layer: gentle idle float + the 3D perspective for the tilt layer inside
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-md"
      style={{ perspective: 1100 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Inner layer: leans toward the mouse cursor */}
      <motion.div className="relative will-change-transform" style={tilt}>
      <img
        src="/pulzfit-product-clean.webp"
        alt="PulzFit bracelet, front and side views: 42 mm tall, 27 mm wide, 8 mm thin, with a 260 mm woven strap"
        className="h-auto w-full object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.18)]"
        width={957}
        height={696}
        fetchPriority="high"
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 957 696"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        <g stroke={ink} strokeWidth="2" strokeLinecap="round" opacity="0.85">
          {/* 42 mm: casing height, front view */}
          <path d="M 112 125 H 98 V 465 H 112" />
          {/* 27 mm: casing width, front view */}
          <path d="M 131 604 V 618 H 357 V 604" />
          {/* 8 mm: thickness, side view */}
          <path d="M 400 604 V 618 H 462 V 604" />
          {/* 260 mm: strap length, inside the loop */}
          <ellipse cx="692" cy="303" rx="112" ry="182" strokeDasharray="7 7" />
        </g>

        <g
          fill={ink}
          className="font-display"
          fontSize="30"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <text x="62" y="295" transform="rotate(-90 62 295)">
            42mm
          </text>
          <text x="244" y="656">
            27mm
          </text>
          <text x="431" y="656">
            8mm
          </text>
          <text x="692" y="303">
            260mm
          </text>
        </g>
      </svg>
      </motion.div>
    </motion.div>
  );
}
