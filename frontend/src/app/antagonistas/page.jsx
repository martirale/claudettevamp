import React from "react";
import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import DividerLogo from "@/components/ui/DividerLogo";
import HexagonCard from "@/components/hexagon/HexagonCard";

export const metadata = getMetadata({
  title: "Personajes: antagonistas — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/antagonistas",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/antagonistas",
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

export default async function AntagonistPage() {
  let characters = [];

  try {
    characters = await fetchAllCharacters();
  } catch (error) {
    console.error(error);
  }

  // Filtrar personajes por tipo
  const charactersAntago = characters.filter(
    (character) => character.type === "Antagonista"
  );

  return (
    <div>
      <h1>Personajes</h1>

      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12">
          <div>
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Antagonistas
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {charactersAntago.map((character, index) => (
                <Link key={index} href={`/personaje/${character.slug}`}>
                  <HexagonCard
                    source={character.avatar}
                    alternative={character.name}
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
