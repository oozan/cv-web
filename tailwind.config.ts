import type { Config } from "tailwindcss";

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#ccc",
        background: withAlpha("--bg"),
        foreground: withAlpha("--ink"),
        ink: withAlpha("--ink"),
        muted: withAlpha("--muted"),
        gold: withAlpha("--gold"),
        "gold-soft": withAlpha("--gold-soft"),
        surface: withAlpha("--surface"),
        "surface-strong": withAlpha("--surface-strong"),
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0, 0, 0, 0.35)",
        glow: "0 0 80px rgba(214, 179, 106, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
