/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      colors: {
        "brand-cta": "#1D4ED8",
      },
    },
  },
  plugins: [],
};
