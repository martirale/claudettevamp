import "./globals.css";
import { getMetadata } from "@/lib/getMetadata";

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
    <html lang="es" className="dark">
      <body className="text-white gradient-background w-full max-w-xl md:max-w-3xl lg:max-w-screen-2xl mx-auto px-4">
        <main>{children}</main>
      </body>
    </html>
  );
}
