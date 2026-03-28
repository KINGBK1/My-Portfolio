/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:    "#0a0a0a",
        cream:  "#f5f5f0",
        lime:   "#d4f000",
        muted:  "#555550",
      },
      // Wire next/font CSS variables into Tailwind's font-* utilities
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "Impact", "sans-serif"],
        mono:    ["var(--font-mono)",    "Courier New",  "monospace"],
        sans:    ["var(--font-sans)",    "system-ui",    "sans-serif"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        fadeUp:  "fadeUp 0.7s ease both",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};