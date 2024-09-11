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

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-16">
            Alejandro Mártir
          </h2>
        </div>
      </section>
    </div>
  );
}
