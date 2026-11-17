/**
 * Runtime site configuration, read from Vite env vars (see .env.example).
 */
const env = import.meta.env;

export const CONTACT_EMAIL = "mirza@hobotech.fi";

/** POST endpoint for the contact form. When unset, the form falls back to mailto. */
export const CONTACT_ENDPOINT = env.VITE_CONTACT_ENDPOINT?.trim() || "";

/** External checkout URL. When unset, plan CTAs scroll to #contact. */
export const CHECKOUT_URL = env.VITE_CHECKOUT_URL?.trim() || "";

/** Checkout link for a specific subscription plan, or the contact section as a fallback. */
export function planHref(planId: string): string {
  if (!CHECKOUT_URL) return "#contact";
  const url = new URL(CHECKOUT_URL);
  url.searchParams.set("plan", planId);
  return url.toString();
}

/** Props for links that may point off-site. */
export function linkProps(href: string) {
  return href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
}
