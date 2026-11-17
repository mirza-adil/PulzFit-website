import { productPrice } from "@/data/pricing";
import { faqItems } from "@/data/faq";
import { CONTACT_EMAIL } from "@/lib/config";
import { specs } from "@/data/specs";

/** Keep in sync with <title> / meta description in index.html. */
export const siteTitle = "PulzFit — Screenless AI Health Bracelet with ECG & HRV";

export const siteDescription =
  "Track ECG, HRV, sleep and SpO₂ on one screenless band with a 12–15 day battery and 100 m water resistance, plus family care. Join the PulzFit waitlist.";

/**
 * schema.org graph: Organization, WebSite, Product and FAQPage.
 * Add aggregateRating only once real, on-page reviews exist.
 */
export function siteJsonLd(siteUrl: string) {
  const orgId = `${siteUrl}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "PulzFit",
        url: `${siteUrl}/`,
        logo: `${siteUrl}/logo-512.png`,
        email: CONTACT_EMAIL,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: CONTACT_EMAIL,
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: siteTitle,
        description: siteDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#product` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}/og-image.png`, width: 1200, height: 630 },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "PulzFit",
        url: `${siteUrl}/`,
        publisher: { "@id": orgId },
        inLanguage: "en",
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}/#product`,
        name: "PulzFit",
        description:
          "Screenless AI health bracelet with single-lead ECG, heart rate, HRV, SpO₂, skin temperature and sleep tracking, 12-15 day battery and 100 m water resistance.",
        image: [`${siteUrl}/og-image.png`, `${siteUrl}/pulzfit-product.png`],
        brand: { "@type": "Brand", name: "PulzFit" },
        category: "Wearable health tracker",
        additionalProperty: specs
          .filter((s) => s.schema)
          .map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
        manufacturer: { "@id": orgId },
        offers: {
          "@type": "Offer",
          price: String(productPrice),
          priceCurrency: "EUR",
          availability: "https://schema.org/PreOrder",
          url: `${siteUrl}/`,
          seller: { "@id": orgId },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}


interface PageJsonLdInput {
  path: string;
  title: string;
  description: string;
  updated: string;
  breadcrumbs: { name: string; path?: string }[];
  faq?: { question: string; answer: string }[];
}

/** Inner pages: WebPage + BreadcrumbList (+ FAQPage when the page shows a FAQ). */
export function pageJsonLd(input: PageJsonLdInput) {
  return (siteUrl: string) => {
    const url = `${siteUrl}${input.path}`;
    const graph: object[] = [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: input.title,
        description: input.description,
        inLanguage: "en",
        dateModified: input.updated,
        isPartOf: { "@id": `${siteUrl}/#website` },
        publisher: { "@id": `${siteUrl}/#organization` },
        about: { "@id": `${siteUrl}/#product` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: input.breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          ...(b.path ? { item: `${siteUrl}${b.path}` } : {}),
        })),
      },
    ];
    if (input.faq?.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: input.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      });
    }
    return { "@context": "https://schema.org", "@graph": graph };
  };
}
