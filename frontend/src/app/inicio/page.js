export const metadata = {
  title: "Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  openGraph: {
    title: "Claudette Vamp",
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: "https://claudettevamp.com/inicio",
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
  canonical: "https://claudettevamp.com/inicio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function InnerHome() {
  return (
    <div>
      <h1>Claudette Vamp</h1>
    </div>
  );
}
