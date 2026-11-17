export interface Band {
  id: string;
  name: string;
  material: string;
  fastening: string;
  description: string;
  image: string;
  /** Swatch fill (CSS background) */
  swatch: string;
  /** Soft tint behind the product */
  tint: string;
}

export const bands: Band[] = [
  {
    id: "black-silicone",
    name: "Black Silicone",
    material: "Silicone",
    fastening: "Pin buckle",
    description:
      "Smooth, sweat-friendly silicone with a polished pin buckle. The everyday all-rounder, from the office to the gym.",
    image: "/bands/black-silicone.webp",
    swatch: "#1d1e20",
    tint: "#E3EBE8",
  },
  {
    id: "black-nylon",
    name: "Black Nylon Loop",
    material: "Woven nylon",
    fastening: "Hook-and-loop",
    description:
      "Soft woven nylon that adjusts to any wrist in one pull. Light and breathable for all-day and overnight wear.",
    image: "/bands/black-nylon.webp",
    swatch: "repeating-linear-gradient(0deg, #2b2c2e 0 2px, #17181a 2px 4px)",
    tint: "#E6EAE9",
  },
  {
    id: "blush-silicone",
    name: "Blush Silicone",
    material: "Silicone",
    fastening: "Pin buckle",
    description:
      "The same comfortable silicone in a warm blush tone, finished with a polished pin buckle.",
    image: "/bands/blush-silicone.webp",
    swatch: "#D7A999",
    tint: "#F6E8E3",
  },
  {
    id: "navy-silicone",
    name: "Navy Silicone",
    material: "Silicone",
    fastening: "Pin buckle",
    description:
      "Deep navy silicone that pairs easily with workwear and weekend kit alike, with a polished pin buckle.",
    image: "/bands/navy-silicone.webp",
    swatch: "#2E4257",
    tint: "#E2E9F0",
  },
];
