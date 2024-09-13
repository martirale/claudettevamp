import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import HexagonCard from "@/components/hexagon/HexagonCard";

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

      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 flex flex-col">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
            Alejandro Mártir
          </h2>

          <p className="mb-8">
            Alejandro es alguien muy curioso, creativo y autodidacta. Desde muy
            joven ha tenido una gran fascinación por la fantasía, la mitología y
            el <span className="italic">sci-fi.</span> Al tener una mente muy
            imaginativa, suele perderse en sus pensamientos y películas mentales
            que va creando en su cabeza a lo largo del día. De estas "películas"
            mentales surgió la idea que ahora es{" "}
            <Link
              href="https://www.amazon.com/dp/B0BNZMWXYT"
              target="_blank"
              rel="noopener"
              className="text-scarlet hover:underline"
            >
              Claudette, caída y ascenso
            </Link>
            .
          </p>

          <p>
            Es alguien que ama lo que hace, por lo que suele entregarse de lleno
            en las cosas con las que se involucra. Le fascina el diseño, el
            cine, el café y cualquier prenda de color negro.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <HexagonCard
            source="/alejandro-martir.webp"
            alternative="alejandro-martir"
            className="mt-5"
          />
        </div>
      </section>
    </div>
  );
}
