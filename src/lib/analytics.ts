/**
 * Firebase Analytics (GA4).
 *
 * - Config comes from VITE_FIREBASE_* env vars (see .env.example). With no
 *   config, every call here is a silent no-op, so dev and previews stay clean.
 * - The Firebase SDK is loaded with a dynamic import once the page is idle,
 *   so it never sits on the critical path or in the prerendered HTML.
 * - Events fired before the SDK is ready are queued and flushed on load.
 */
import type { Analytics } from "firebase/analytics";

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY?.trim(),
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN?.trim(),
  projectId: env.VITE_FIREBASE_PROJECT_ID?.trim(),
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET?.trim(),
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID?.trim(),
  appId: env.VITE_FIREBASE_APP_ID?.trim(),
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID?.trim(),
};

export const ANALYTICS_ENABLED = Boolean(
  firebaseConfig.apiKey && firebaseConfig.appId && firebaseConfig.measurementId
);

type Params = Record<string, string | number | boolean | undefined>;

let analytics: Analytics | null = null;
let log: ((a: Analytics, name: string, params?: Params) => void) | null = null;
let started = false;
const queue: [string, Params | undefined][] = [];

async function load() {
  const [{ initializeApp }, mod] = await Promise.all([
    import("firebase/app"),
    import("firebase/analytics"),
  ]);
  // Bail out in browsers where Analytics can't run (blocked cookies/IndexedDB).
  if (!(await mod.isSupported())) return;

  analytics = mod.getAnalytics(initializeApp(firebaseConfig));
  log = (a, name, params) => mod.logEvent(a, name, params);
  for (const [name, params] of queue.splice(0)) log(analytics, name, params);
}

/** Start Analytics. Safe to call more than once; only runs in the browser. */
export function initAnalytics() {
  if (started || !ANALYTICS_ENABLED || typeof window === "undefined") return;
  started = true;

  const run = () =>
    load().catch((err) => {
      if (import.meta.env.DEV) console.warn("[analytics] failed to load", err);
    });
  if ("requestIdleCallback" in window) window.requestIdleCallback(run, { timeout: 4000 });
  else setTimeout(run, 1500);

  trackCtaClicks();
}

/** Log a GA4 event. Queued until the SDK is ready; no-op when disabled. */
export function trackEvent(name: string, params?: Params) {
  if (!ANALYTICS_ENABLED || typeof window === "undefined") return;
  if (analytics && log) log(analytics, name, params);
  else if (queue.length < 50) queue.push([name, params]);
}

/**
 * One delegated listener for the site's calls to action, so components don't
 * need tracking code: any link to #contact (Coming Soon, Join the waitlist,
 * Contact) and any pricing plan link.
 */
function trackCtaClicks() {
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href") ?? "";
      const label = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 60) || "";
      const location =
        link.closest("header") ? "navbar"
        : link.closest("footer") ? "footer"
        : link.closest("section[id]")?.id ?? "page";

      if (href === "#contact") {
        trackEvent("cta_click", { cta_label: label, cta_location: location });
      } else if (location === "pricing") {
        trackEvent("select_plan", { cta_label: label, link_url: href });
      }
    },
    { capture: true, passive: true }
  );
}
