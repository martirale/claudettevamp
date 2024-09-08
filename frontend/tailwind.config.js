/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      scarlet: "#c1272d",
      blood: "#1c0000",
      darkBlack: "#020202",
      black: "#1a1a1a",
      white: "#f5f5f5",
      darkGrey: "#424242",
      grey: "#616161",
    },
    extend: {
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
