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
    fontFamily: {
      BarlowCond: ["var(--font-barlowcond)"],
      LeMurmure: ["var(--font-lemurmure)"],
    },
    extend: {
      fontSize: {
        xs: ["13px", { lineHeight: "18px" }],
        sm: ["17px", { lineHeight: "22px" }],
        base: ["21px", { lineHeight: "28px" }],
        lg: ["25px", { lineHeight: "32px" }],
        xl: ["30px", { lineHeight: "36px" }],
        "2xl": ["36px", { lineHeight: "1.1" }],
        "3xl": ["48px", { lineHeight: "1.1" }],
        "4xl": ["60px", { lineHeight: "1.1" }],
        "5xl": ["72px", { lineHeight: "1.1" }],
        "6xl": ["96px", { lineHeight: "1.1" }],
        "7xl": ["128px", { lineHeight: "1.1" }],
        "8xl": ["160px", { lineHeight: "1.1" }],
        "9xl": ["192px", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};
