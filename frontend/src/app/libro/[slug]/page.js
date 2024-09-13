import { getMetadata } from "@/lib/getMetadata";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:3010/books/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Libro no encontrado",
      description: "El libro solicitado no se pudo encontrar.",
      url: "https://claudettevamp.com/libros/no-encontrado",
      image: "https://claudettevamp.com/no-cover.webp",
      canonical: "https://claudettevamp.com/libros/no-encontrado",
    };
  }

  const book = await res.json();

  return getMetadata({
    title: `${book.title} — Claudette Vamp`,
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: `https://claudettevamp.com/libros/${book.slug}`,
    image: `https://claudettevamp.com${book.cover}`,
    canonical: `https://claudettevamp.com/libros/${book.slug}`,
  });
}

export default async function BookPage({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:3010/books/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Libro no encontrado</div>;
  }

  const book = await res.json();

  return (
    <div>
      <h1>{book.title}</h1>

      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
              {book.title}
            </h2>
            <p className="mb-12">{book.synopsis}</p>

            <h3 className="font-LeMurmure text-scarlet text-xl">
              Información del libro
            </h3>
            <ul className="grid grid-cols-2 gap-2 my-4">
              <li>
                <span className="font-bold">Páginas:</span>
                <br className="block md:hidden" /> {book.pages}
              </li>
              <li>
                <span className="font-bold">Publicación:</span>
                <br className="block md:hidden" /> {formatDate(book.publish)}
              </li>
              <li>
                <span className="font-bold">Editorial:</span>
                <br className="block md:hidden" /> {book.editorial}
              </li>
              <li>
                <span className="font-bold">ISBN:</span>
                <br className="block md:hidden" /> {book.isbn}
              </li>
              <li>
                <span className="font-bold">Género:</span>
                <br className="block md:hidden" /> {book.genre}
              </li>
              <li>
                <span className="font-bold">Formato:</span>
                <br className="block md:hidden" /> {book.format}
              </li>
            </ul>
          </div>
        </div>

        {/* BOOK COVER */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-full mt-16 md:mt-5">
            <Image
              src={book.cover}
              alt={book.title}
              width={400}
              height={640}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
