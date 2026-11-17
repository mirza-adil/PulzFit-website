/**
 * PulzFit brand palette — four core greens + derived surfaces.
 */
export const pulzPalette = {
  /** Deepest green — primary, headings */
  deep: "#013220",
  /** Dark green — secondary, labels */
  dark: "#004225",
  /** Mid green — accent, CTAs, charts */
  accent: "#40B794",
  /** Accent darkened for text & icons — meets WCAG AA (≥4.5:1) on white and surface */
  ink: "#1E7259",
  /** Light green — borders, soft fills */
  light: "#93D9C4",
  /** Page background (derived from light) */
  surface: "#EDF8F4",
  /** Card / white */
  white: "#FFFFFF",
} as const;

/**
 * Accent and light green are too pale to use as text or icon colours on light
 * surfaces. Map them to the accessible ink shade; darker greens pass through.
 */
export function textColorFor(color: string): string {
  const c = color.toLowerCase();
  if (c === pulzPalette.accent.toLowerCase() || c === pulzPalette.light.toLowerCase()) {
    return pulzPalette.ink;
  }
  return color;
}
