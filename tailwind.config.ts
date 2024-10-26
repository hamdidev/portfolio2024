import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": { transform: "scale(3)", opacity: "0" },
        },
        moveDisappear: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "50%": { transform: "translate(100%, -100%)", opacity: "0" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "move-disappear": "moveDisappear 1s ease-in-out infinite",
        "ping-large": "ping-large 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
