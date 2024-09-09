import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";

const BarlowCond = Barlow_Condensed({
  weight: ["300", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlowcond",
});

const LeMurmure = localFont({
  src: [
    {
      path: "../../../public/fonts/le-murmure.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lemurmure",
});

export { BarlowCond, LeMurmure };
