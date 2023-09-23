/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
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
  plugins: [],
};
