import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
// Self-hosted fonts (bundled by Vite). Latin subsets only, plus Roboto's
// math subset for the "₂" in SpO₂, to keep the render-blocking CSS small.
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-700.css";
import "@fontsource/roboto/math-400.css";
import "@fontsource/roboto/math-500.css";
import "@fontsource/roboto/math-700.css";
import "@fontsource/sora/latin-500.css";
import "@fontsource/sora/latin-600.css";
import "@fontsource/sora/latin-700.css";
import "@fontsource/sora/latin-800.css";
import "./index.css";
import App from "./App";
import { AppProviders } from "./providers/AppProviders";
import { applyReducedMotionPreference } from "./lib/motion";
import { initAnalytics } from "./lib/analytics";

applyReducedMotionPreference();

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <AppProviders>
      <App path={window.location.pathname} />
    </AppProviders>
  </StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs) → hydrate it.
// The dev server serves an empty root → render from scratch.
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}

initAnalytics();
