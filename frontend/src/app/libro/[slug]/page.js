import { getMetadata } from "@/lib/getMetadata";
import { formatText } from "@/lib/formatText";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiSecretKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Libro no encontrado",
      description: "El libro solicitado no se pudo encontrar.",
      url: "https://claudettevamp.com/libro/no-encontrado",
      image: "https://claudettevamp.com/no-cover.webp",
      canonical: "https://claudettevamp.com/libro/no-encontrado",
    };
  }

  const book = await res.json();

  return getMetadata({
    title: `${book.title} — Claudette Vamp`,
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: `https://claudettevamp.com/libro/${book.slug}`,
    image: `https://claudettevamp.com${book.cover}`,
    canonical: `https://claudettevamp.com/libro/${book.slug}`,
  });
}

export default async function BookPage({ params }) {
  const { slug } = params;
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiSecretKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Libro no encontrado</div>;
  }

  const book = await res.json();

  const stores = [
    {
      id: "1",
      image: "/stores/amazon-com.svg",
      width: "150",
      height: "44",
      url: book.amazon,
      target: "_blank",
    },
    {
      id: "2",
      image: "/stores/apple-books.svg",
      width: "150",
      height: "44",
      url: book.apple,
      target: "_blank",
    },
    {
      id: "3",
      image: "/stores/goodreads.svg",
      width: "150",
      height: "44",
      url: book.goodreads,
      target: "_blank",
    },
  ];

  return (
    <div>
      <h1>{book.title}</h1>

      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 flex flex-col">
          <div>
            <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
              {book.title}
            </h2>
            <div className="mb-12">{formatText(book.synopsis)}</div>

            <h3 className="font-LeMurmure text-scarlet text-2xl">
              Información del libro
            </h3>
            <ul className="grid grid-cols-2 gap-2 my-4">
              {book.pages && (
                <li>
                  <span className="font-bold">Páginas:</span>
                  <br className="block md:hidden" /> {book.pages}
                </li>
              )}
              {book.publish && (
                <li>
                  <span className="font-bold">Publicación:</span>
                  <br className="block md:hidden" /> {formatDate(book.publish)}
                </li>
              )}
              {book.editorial && (
                <li>
                  <span className="font-bold">Editorial:</span>
                  <br className="block md:hidden" /> {book.editorial}
                </li>
              )}
              {book.isbn && (
                <li>
                  <span className="font-bold">ISBN:</span>
                  <br className="block md:hidden" /> {book.isbn}
                </li>
              )}
              {book.genre && (
                <li>
                  <span className="font-bold">Género:</span>
                  <br className="block md:hidden" /> {book.genre}
                </li>
              )}
              {book.format && (
                <li>
                  <span className="font-bold">Formato:</span>
                  <br className="block md:hidden" /> {book.format}
                </li>
              )}
            </ul>
          </div>

          <div className="grid text-center gap-4 md:grid-cols-3 mt-12">
            {stores.map((store) =>
              store.url ? (
                <Link
                  key={store.id}
                  href={store.url}
                  target={store.target}
                  rel="noopener"
                  className="px-2 py-4 border border-darkGrey transition-colors hover:border-scarlet flex items-center justify-center"
                >
                  <Image
                    src={store.image}
                    width={store.width}
                    height={store.height}
                  />
                </Link>
              ) : null
            )}
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
