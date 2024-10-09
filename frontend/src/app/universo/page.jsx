import React from "react";
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

const buttons = [
  {
    id: "1",
    title: "Libros",
    url: "/libros",
  },
  {
    id: "2",
    title: "Personajes",
    url: "/personajes",
  },
  {
    id: "3",
    title: "Protagonistas",
    url: "/protagonistas",
  },
  {
    id: "4",
    title: "Antagonistas",
    url: "/antagonistas",
  },
  {
    id: "5",
    title: "Facciones",
    url: "/facciones",
  },
  {
    id: "6",
    title: "Especies",
    url: "/especies",
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
            <Link href="/autor" className="text-scarlet hover:underline">
              Alejandro Mártir.
            </Link>
          </p>

          <p>
            Claudette Vamp está conformado por{" "}
            <span className="font-medium">una novela principal</span> (compuesta
            por tres novelas cortas) llamada{" "}
            <span className="font-medium">Claudette, caída y ascenso.</span>{" "}
            Actualmente las tres partes se encuentran ya disponibles en{" "}
            <Link
              href="https://www.amazon.com/dp/B0DJH23M5P"
              target="_blank"
              rel="noopener"
              className="text-scarlet hover:underline"
            >
              Amazon
            </Link>{" "}
            y{" "}
            <Link
              href="https://books.apple.com/us/book-series/id1701697487"
              target="_blank"
              rel="noopener"
              className="text-scarlet hover:underline"
            >
              Apple Books
            </Link>
            . Así mismo, también está conformado por una{" "}
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

          {/* UNIVERSE SECTIONS */}
          <div className="grid text-center gap-4 md:grid-cols-3 mt-12">
            {buttons.map((button) =>
              button.url ? (
                <Link
                  key={button.id}
                  href={button.url}
                  className="px-2 py-4 border border-darkGrey transition-colors hover:border-scarlet flex items-center justify-center"
                >
                  <span className="font-LeMurmure text-2xl uppercase">
                    {button.title}
                  </span>
                </Link>
              ) : null
            )}
          </div>

          <DividerLogo className="py-12" />

          {/* GENERAL */}
          <h2 className="font-LeMurmure text-scarlet text-3xl md:text-4xl mb-4">
            Datos generales
          </h2>

          <p className="mb-8">
            En este universo, Maral Schwan fue uno de los vampiros más poderosos
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

          <DividerLogo className="py-12" />

          {/* TEMPORALITY */}
          <h2 className="font-LeMurmure text-scarlet text-3xl md:text-4xl mb-4">
            Cronología
          </h2>

          <p className="mb-8">
            En la cronología de Claudette Vamp se toma como referencia y punto
            de inicio la reencarnación de Maral Schwan (protagonista de la
            historia). Por lo tanto{" "}
            <span className="font-medium italic">a. r.</span> se refiere a antes
            de la reencarnación y{" "}
            <span className="font-medium italic">d. r.</span> se refiere a
            después de la reencarnación. De esta forma, todos los
            acontecimientos principales y secundarios ocurridos previo a la
            reencarnación serán denominados y contados como{" "}
            <span className="font-medium italic">X a. r.</span> De igual forma,
            los eventos posteriores a la reencarnación serán denominados y
            contados como <span className="font-medium italic">X d. r.</span>
          </p>

          <p className="font-medium">
            Los eventos que suceden en el año de la reencarnación se denominan
            Año Cero. La historia principal (Claudette, caída y ascenso) así
            como las historias derivadas (Claudette Vamp: Relatos) se ubican en
            el siglo <span className="small-caps">xxi</span> d. C.
          </p>
        </div>

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-4">
          <BoxCard className="mt-16 md:mt-5">
            <Image
              src="/books/claudette-caida-ascenso.webp"
              width="688"
              height="600"
              quality={100}
              className="w-full h-auto"
              alt="Claudette, caída y ascenso"
            />

            <DividerLogo className="py-4" />

            <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
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

            <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
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
