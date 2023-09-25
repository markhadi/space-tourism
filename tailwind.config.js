/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      "blue-dark": "#0B0D17",
      "blue-light": "#D0D6F9",
      white: "#FFFFFF",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
