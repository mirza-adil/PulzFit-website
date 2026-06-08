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
  /** Light green — borders, soft fills */
  light: "#93D9C4",
  /** Page background (derived from light) */
  surface: "#EDF8F4",
  /** Card / white */
  white: "#FFFFFF",
} as const;

/** Chart & data-viz accents */
export const pulzChart = {
  primary: pulzPalette.deep,
  secondary: pulzPalette.dark,
  accent: pulzPalette.accent,
  soft: pulzPalette.light,
} as const;
