import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import Image from "next/image";
import DividerLogo from "@/components/ui/DividerLogo";

export const metadata = getMetadata({
  title: "Personajes — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/personajes",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/personajes",
});

async function fetchAllCharacters() {
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/characters`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiSecretKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener los personajes");
  }
  return res.json();
}

export default async function CharactersPage() {
  let characters = [];

  try {
    characters = await fetchAllCharacters();
  } catch (error) {
    console.error(error);
  }

  // Filtrar personajes por tipo
  const charactersProtas = characters.filter(
    (character) => character.type === "Protagonista"
  );
  const charactersAntago = characters.filter(
    (character) => character.type === "Antagonista"
  );
  const charactersOthers = characters.filter(
    (character) => character.type === "Secundario"
  );

  return (
    <div>
      <h1>Personajes</h1>

      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12">
          <div className="mb-32">
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Protagonistas
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {charactersProtas.map((character, index) => (
                <Link key={index} href={`/personaje/${character.slug}`}>
                  <Image
                    src={character.avatar}
                    alt={character.name}
                    width={400}
                    height={640}
                  />
                  <h4 className="text-center my-4">{character.name}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-32">
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Antagonistas
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {charactersAntago.map((character, index) => (
                <Link key={index} href={`/personaje/${character.slug}`}>
                  <Image
                    src={character.avatar}
                    alt={character.name}
                    width={400}
                    height={640}
                  />
                  <h4 className="text-center my-4">{character.name}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Otros
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {charactersOthers.map((character, index) => (
                <Link key={index} href={`/personaje/${character.slug}`}>
                  <Image
                    src={character.avatar}
                    alt={character.name}
                    width={400}
                    height={640}
                  />
                  <h4 className="text-center my-4">{character.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
