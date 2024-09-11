import { getMetadata } from "@/lib/getMetadata";

export const metadata = getMetadata({
  title: " Alejandro Mártir — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/inicio",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/inicio",
});

export default function Author() {
  return (
    <div>
      <h1>Alejandro Mártir</h1>
    </div>
  );
}
