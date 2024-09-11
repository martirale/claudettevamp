// src/app/libros/[slug]/page.js

import { getMetadata } from "@/lib/getMetadata";

// Esta función se ejecuta durante la generación de la página y permite la configuración dinámica de los metadatos
export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:3010/books/${slug}`, {
    cache: "no-store", // Utiliza esta opción si quieres desactivar el cache
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

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-16">
            {book.title}
          </h2>

          <p>{book.synopsis}</p>
        </div>
      </section>
    </div>
  );
}
