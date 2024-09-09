import "./globals.css";
import { BarlowCond, LeMurmure } from "@/components/ui/CustomFonts";
import { getMetadata } from "@/lib/getMetadata";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata = getMetadata({
  title: "Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/inicio",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/inicio",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${BarlowCond.variable} ${LeMurmure.variable} dark`}
    >
      <body className="bg-darkBlack grain-texture">
        <div className="font-BarlowCond text-base text-white w-full max-w-xl md:max-w-3xl lg:max-w-screen-2xl mx-auto px-4">
          <Header />
          <main className="mt-24 md:mt-32 lg:px-16 2xl:px-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
