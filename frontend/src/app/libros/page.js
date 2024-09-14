import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import Image from "next/image";
import DividerLogo from "@/components/ui/DividerLogo";

export const metadata = getMetadata({
  title: "Libros — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/libros",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/libros",
});

async function fetchAllBooks() {
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiSecretKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener los libros");
  }
  return res.json();
}

export default async function Universe() {
  let books = [];

  try {
    books = await fetchAllBooks();
  } catch (error) {
    console.error(error);
  }

  // Filtrar libros por serie
  const booksCaida = books.filter((book) => book.series === "Caída y Ascenso");
  const booksRelatos = books.filter(
    (book) => book.series === "Claudette Vamp: Relatos"
  );

  return (
    <div>
      <h1>Libros</h1>

      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12">
          <div className="mb-32">
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Caída y Ascenso
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {booksCaida.map((book, index) => (
                <Link key={index} href={`/libro/${book.slug}`}>
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={400}
                    height={640}
                  />
                  <h4 className="text-center my-4">{book.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Relatos
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {booksRelatos.map((book, index) => (
                <Link key={index} href={`/libro/${book.slug}`}>
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={400}
                    height={640}
                  />
                  <h4 className="text-center my-4">{book.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
