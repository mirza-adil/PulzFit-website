import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // PulzFit palette
        pulz: {
          deep: "#013220",
          dark: "#004225",
          accent: "#40B794",
          light: "#93D9C4",
          surface: "#EDF8F4",
          white: "#FFFFFF",
          // numeric scale (derived from core four)
          900: "#013220",
          800: "#004225",
          700: "#004225",
          600: "#004225",
          500: "#40B794",
          400: "#40B794",
          300: "#93D9C4",
          200: "#93D9C4",
          100: "#EDF8F4",
          50: "#FFFFFF",
          forest: "#013220",
          moss: "#004225",
          mint: "#40B794",
          cyan: "#40B794",
          blue: "#40B794",
          success: "#40B794",
          gold: "#004225",
          amber: "#93D9C4",
          sage: "#004225",
          violet: "#004225",
          indigo: "#013220",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Roboto", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Roboto", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 48px -12px rgba(64, 183, 148, 0.35)",
        "glow-soft": "0 0 40px -10px rgba(104, 202, 173, 0.3)",
        card: "0 4px 24px -4px rgba(1, 50, 32, 0.08), 0 1px 3px rgba(1, 50, 32, 0.04)",
        elevated:
          "0 12px 40px -8px rgba(1, 50, 32, 0.12), 0 4px 12px rgba(1, 50, 32, 0.06)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(1,50,32,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,50,32,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
