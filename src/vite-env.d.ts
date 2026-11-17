/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST endpoint for the contact form (e.g. a Formspree form URL). */
  readonly VITE_CONTACT_ENDPOINT?: string;
  /** External checkout / store URL for buying the bracelet. */
  readonly VITE_CHECKOUT_URL?: string;
  /** Firebase web app config (Project settings → Your apps). */
  readonly VITE_FIREBASE_API_KEY?: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN?: string;
  readonly VITE_FIREBASE_PROJECT_ID?: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET?: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID?: string;
  readonly VITE_FIREBASE_APP_ID?: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
