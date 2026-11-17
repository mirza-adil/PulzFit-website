import { MotionGlobalConfig } from "framer-motion";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * When the visitor prefers reduced motion, make every Framer Motion animation
 * (including infinite loops) jump straight to its end state. CSS animations are
 * handled separately by the media query in index.css.
 */
export function applyReducedMotionPreference() {
  if (typeof window === "undefined" || !window.matchMedia) return;
  const mql = window.matchMedia(QUERY);
  MotionGlobalConfig.skipAnimations = mql.matches;
  mql.addEventListener("change", (e) => {
    MotionGlobalConfig.skipAnimations = e.matches;
  });
}
