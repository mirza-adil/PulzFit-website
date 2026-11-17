import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { AppProviders } from "./providers/AppProviders";

export { routes } from "./routes";
export { productPrice, pricingPlans } from "./data/pricing";

/** Build-time render of one route, used by scripts/prerender.mjs. */
export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <AppProviders>
        <App path={path} />
      </AppProviders>
    </StrictMode>
  );
}
