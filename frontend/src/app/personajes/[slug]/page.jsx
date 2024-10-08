import React from "react";
import { getMetadata } from "@/lib/getMetadata";
import { formatText } from "@/lib/formatText";
import BoxCard from "@/components/ui/BoxCard";
import HexagonCard from "@/components/hexagon/HexagonCard";
import DividerLogo from "@/components/ui/DividerLogo";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/characters/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiSecretKey,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {
      title: "Personaje no encontrado",
      description: "El personaje solicitado no se pudo encontrar.",
      url: "https://claudettevamp.com/personaje/no-encontrado",
      image: "https://claudettevamp.com/no-cover.webp",
      canonical: "https://claudettevamp.com/personaje/no-encontrado",
    };
  }

  const character = await res.json();

  return getMetadata({
    title: `${character.name} — Claudette Vamp`,
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: `https://claudettevamp.com/personaje/${character.slug}`,
    image: `https://claudettevamp.com${character.avatar}`,
    canonical: `https://claudettevamp.com/personaje/${character.slug}`,
  });
}

export default async function CharacterPage({ params }) {
  const { slug } = params;
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/characters/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiSecretKey,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return <div>Personaje no encontrado</div>;
  }

  const character = await res.json();

  return (
    <div>
      <h1>{character.name}</h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
            {character.name}
          </h2>

          {character.description &&
            character.description !== "NULL" &&
            character.description !== "" && (
              <div className="mb-12">{formatText(character.description)}</div>
            )}

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl md:text-4xl mb-4">
            Otros datos y curiosidades
          </h3>

          {character.curiosity &&
            character.curiosity !== "NULL" &&
            character.curiosity !== "" && (
              <div>{formatText(character.curiosity)}</div>
            )}
        </div>

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-4">
          <div className="relative w-full mt-16 md:mt-5">
            <BoxCard className="mt-16 md:mt-5">
              <HexagonCard
                source={character.avatar}
                alternative="alejandro-martir"
                className="mb-5"
              />

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
                {character.name_original}
              </h3>
              <ul>
                {character.name_others &&
                  character.name_others !== "NULL" &&
                  character.name_others !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Otros nombres:</span>{" "}
                      {character.name_others}
                    </li>
                  )}
                {character.birth &&
                  character.birth !== "NULL" &&
                  character.birth !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Nacimiento:</span>{" "}
                      {character.birth}
                    </li>
                  )}
                {character.death &&
                  character.death !== "NULL" &&
                  character.death !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Muerte:</span>{" "}
                      {character.death}
                    </li>
                  )}
                {character.family &&
                  character.family !== "NULL" &&
                  character.family !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Familiares:</span>{" "}
                      {character.family}
                    </li>
                  )}
                {character.clan &&
                  character.clan !== "NULL" &&
                  character.clan !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Linaje:</span>{" "}
                      {character.clan}
                    </li>
                  )}
                {character.affiliations &&
                  character.affiliations !== "NULL" &&
                  character.affiliations !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Afiliaciones:</span>{" "}
                      {character.affiliations}
                    </li>
                  )}
                {character.relationship &&
                  character.relationship !== "NULL" &&
                  character.relationship !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Estado civil:</span>{" "}
                      {character.relationship}
                    </li>
                  )}
                {character.couple &&
                  character.couple !== "NULL" &&
                  character.couple !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Pareja:</span>{" "}
                      {character.couple}
                    </li>
                  )}
              </ul>

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
                Información descriptiva
              </h3>
              <ul>
                {character.species &&
                  character.species !== "NULL" &&
                  character.species !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Especie:</span>{" "}
                      {character.species}
                    </li>
                  )}
                {character.gender &&
                  character.gender !== "NULL" &&
                  character.gender !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Género:</span>{" "}
                      {character.gender}
                    </li>
                  )}
                {character.stature &&
                  character.stature !== "NULL" &&
                  character.stature !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Estatura:</span>{" "}
                      {character.stature}
                    </li>
                  )}
                {character.weight &&
                  character.weight !== "NULL" &&
                  character.weight !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Peso:</span>{" "}
                      {character.weight}
                    </li>
                  )}
                {character.eyes &&
                  character.eyes !== "NULL" &&
                  character.eyes !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Ojos:</span> {character.eyes}
                    </li>
                  )}
                {character.hair &&
                  character.hair !== "NULL" &&
                  character.hair !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Cabello:</span>{" "}
                      {character.hair}
                    </li>
                  )}
                {character.skin &&
                  character.skin !== "NULL" &&
                  character.skin !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Tez:</span> {character.skin}
                    </li>
                  )}
              </ul>

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
                Otros datos
              </h3>
              <ul>
                {character.occupation &&
                  character.occupation !== "NULL" &&
                  character.occupation !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Ocupación:</span>{" "}
                      {character.occupation}
                    </li>
                  )}
                {character.weapon &&
                  character.weapon !== "NULL" &&
                  character.weapon !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Armamento:</span>{" "}
                      {character.weapon}
                    </li>
                  )}
                {character.appearance &&
                  character.appearance !== "NULL" &&
                  character.appearance !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Primera aparición:</span>{" "}
                      {character.appearance}
                    </li>
                  )}
              </ul>
            </BoxCard>
          </div>
        </div>
      </section>
    </div>
  );
}
