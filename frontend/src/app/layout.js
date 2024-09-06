import "./globals.css";

export const metadata = {
  title: "Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  openGraph: {
    title: "Claudette Vamp",
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: "https://claudettevamp.com",
    type: "website",
    images: [
      {
        url: "https://claudettevamp.com/claudette-cover.webp",
        width: 1200,
        height: 630,
        alt: "Claudette Vamp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudette Vamp",
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    images: ["https://claudettevamp.com/claudette-cover.webp"],
  },
  canonical: "https://claudettevamp.com",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="gradient-background">
        <main className="text-white">{children}</main>
      </body>
    </html>
  );
}
