import BoxCard from "@/components/ui/BoxCard";
import DividerLogo from "@/components/ui/DividerLogo";
import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import Image from "next/image";

export const metadata = getMetadata({
  title: "Universo literario — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/inicio",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/universo",
});

const novels = [
  {
    id: "1",
    title: "Claudette, reencarnación",
    url: "/libro/claudette-reencarnacion",
  },
  {
    id: "2",
    title: "Claudette, descenso",
    url: "/libro/claudette-descenso",
  },
  {
    id: "3",
    title: "Claudette, reina y princesa",
    url: "/libro/claudette-reina-princesa",
  },
];

const tales = [
  {
    id: "1",
    title: "La Gran Purga Oscura",
    url: "/libro/gran-purga-oscura",
  },
  {
    id: "2",
    title: "Carmilla, sueños oscuros",
    url: "/libro/carmilla",
  },
];

export default function Universe() {
  return (
    <div>
      <h1>Universo literario</h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
            Universo literario
          </h2>

          <p className="mb-8 font-medium text-xl">
            Claudette Vamp es un universo literario de fantasía oscura y romance
            ambientado en el mundo real y contemporáneo (aunque oculto de este)
            escrito por{" "}
            <Link
              href="https://alemartir.com"
              target="_blank"
              rel="noopener"
              className="text-scarlet hover:underline"
            >
              Alejandro Mártir.
            </Link>
          </p>

          <p className="mb-8">
            En este universo Maral Schwan, fue uno de los vampiros más poderosos
            del mundo y quien lideró la revuelta más grande en el mundo
            sobrenatural. Tras perder la guerra se vio forzado a servir al poder
            que juró derrocar dando fin al conflicto. En este oscuro destino
            conoció a Claudia Bellerose, una enigmática y joven Nephilim por la
            que su corazón por primera vez sintió algo en más de un siglo. Sin
            embargo, su amor está destinado a la tragedia cuando una serie de
            eventos desgarradores los lleva a la muerte. Maral, ahora
            reencarnado y conocido con el nombre de Claudette, emprendió un
            viaje a través de las edades persiguiendo su venganza. En su
            búsqueda por liberarse de las cadenas de su pasado, se desataron una
            serie de acontecimientos que cambiarán el curso de la historia y lo
            enfrentarán a la posibilidad de redimirse y encontrar la paz que
            tanto anhela.
          </p>

          <p className="mb-8">
            En este universo además de existir seres humanos (conocidos como{" "}
            <span className="italic">mortales</span>), también existen otro tipo
            de criaturas oscuras o seres sobrenaturales como: vampiros,
            licántropos, brujos y Nephilim. Estas criaturas están basadas en una
            combinación de creencias mitológicas originadas en el
            judeocristianismo así como diversos mitos folklóricos principalmente
            del este europeo.
          </p>

          <p>
            Claudette Vamp actualmente está conformado por una{" "}
            <span className="font-medium">novela principal</span> (compuesta por
            tres novelas cortas) llamada{" "}
            <span className="font-medium">Caída y Ascenso.</span> Las dos
            primeras partes se encuentran ya{" "}
            <Link
              href="https://www.amazon.com/dp/B0BNZMWXYT"
              target="_blank"
              rel="noopener"
              className="text-scarlet hover:underline"
            >
              disponibles en Amazon
            </Link>
            , mientras que la tercera parte está programada para publicarse a
            finales de octubre 2024. Así mismo, Claudette Vamp está también
            conformado por una{" "}
            <Link
              href="https://www.amazon.com/dp/B0CLKVY5FW"
              target="_blank"
              rel="noopener"
              className="text-scarlet hover:underline"
            >
              serie de relatos
            </Link>{" "}
            que expanden el universo.
          </p>
        </div>

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-4">
          <BoxCard className="mt-16 md:mt-5">
            <Image
              src="/books/claudette-caida-ascenso.png"
              width="688"
              height="600"
              quality={100}
              className="w-full h-auto"
              alt="Claudette, caída y ascenso"
            />

            <DividerLogo className="py-4" />

            <h3 className="font-LeMurmure text-scarlet text-xl mb-3">
              Caída y ascenso
            </h3>
            <ul>
              {novels.map((novel) => (
                <li key={novel.id}>
                  <Link
                    href={novel.url}
                    className="hover:text-scarlet hover:underline"
                  >
                    {novel.title}
                  </Link>
                </li>
              ))}
            </ul>

            <DividerLogo className="py-4" />

            <h3 className="font-LeMurmure text-scarlet text-xl mb-3">
              Claudette Vamp: Relatos
            </h3>
            <ul>
              {tales.map((tale) => (
                <li key={tale.id}>
                  <Link
                    href={tale.url}
                    className="hover:text-scarlet hover:underline"
                  >
                    {tale.title}
                  </Link>
                </li>
              ))}
            </ul>
          </BoxCard>
        </div>
      </section>
    </div>
  );
}
