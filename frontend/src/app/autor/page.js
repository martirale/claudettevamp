import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import HexagonCard from "@/components/hexagon/HexagonCard";
import BoxCard from "@/components/ui/BoxCard";
import DividerLogo from "@/components/ui/DividerLogo";

export const metadata = getMetadata({
  title: " Alejandro Mártir — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/autor",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/autor",
});

export default function Author() {
  return (
    <div>
      <h1>Alejandro Mártir</h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
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
            . Es alguien que ama lo que hace, por lo que suele entregarse de
            lleno en las cosas con las que se involucra. Le fascina el diseño,
            el cine, el café y cualquier prenda de color negro.
          </p>
        </div>

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-4">
          <BoxCard className="mt-16 md:mt-5">
            <HexagonCard
              source="/alejandro-martir.webp"
              alternative="alejandro-martir"
              className="mb-5"
            />

            <DividerLogo className="py-4" />

            <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
              Contacto
            </h3>
            <ul>
              <li>
                <span className="font-bold">Email:</span>{" "}
                <Link
                  href="mailto:hola@alemartir.com"
                  className="hover:text-scarlet hover:underline"
                >
                  hola@alemartir.com
                </Link>
              </li>
              <li>
                <span className="font-bold">Teléfono:</span>{" "}
                <Link
                  href="https://wa.me/message/ZW5NRUU3HCGUO1"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-scarlet hover:underline"
                >
                  +503 7840 2216
                </Link>
              </li>
              <li>
                <span className="font-bold">Website:</span>{" "}
                <Link
                  href="https://alemartir.com"
                  target="_blank"
                  className="hover:text-scarlet hover:underline"
                >
                  alemartir.com
                </Link>
              </li>
            </ul>
          </BoxCard>
        </div>
      </section>
    </div>
  );
}
