import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        bg: {
          deep: "#0a0d14",
          mid: "#0f1320",
          card: "rgba(255,255,255,0.04)",
          hover: "rgba(255,255,255,0.07)",
        },
        indigo: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          subtle: "rgba(99,102,241,0.12)",
          glow: "rgba(99,102,241,0.25)",
        },
        teal: {
          DEFAULT: "#2dd4bf",
          subtle: "rgba(45,212,191,0.12)",
        },
        amber: {
          DEFAULT: "#fbbf24",
          subtle: "rgba(251,191,36,0.10)",
        },
        pink: {
          DEFAULT: "#f472b6",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          light: "rgba(255,255,255,0.12)",
        },
        text: {
          primary: "#f0f2f8",
          secondary: "#8b92a8",
          muted: "#525a70",
        },
      },
      borderRadius: {
        "2xl": "16px",
        xl: "12px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.2)",
        glow: "0 0 40px rgba(99,102,241,0.15)",
        "indigo-glow": "0 8px 32px rgba(99,102,241,0.4)",
        "indigo-sm": "0 4px 16px rgba(99,102,241,0.3)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) both",
        "fade-up-slow": "fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) both",
        pulse2: "pulse2 2s infinite",
        typing: "typing 1.4s infinite",
        spin: "spin 0.9s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        typing: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(-4px)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-display":
          "linear-gradient(135deg, #f0f2f8 30%, #818cf8 70%, #6366f1 100%)",
        "gradient-user":
          "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
        "gradient-logo":
          "linear-gradient(135deg, #f0f2f8 0%, #818cf8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
