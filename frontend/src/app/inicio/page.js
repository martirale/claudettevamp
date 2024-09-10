import { getMetadata } from "@/lib/getMetadata";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = getMetadata({
  title: "Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/inicio",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/inicio",
});

export default function Home() {
  return (
    <div>
      <h1>Claudette Vamp</h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <Image
            src="/books/claudette-caida-ascenso.png"
            width="688"
            height="600"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
