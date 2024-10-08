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
    `${process.env.NEXT_PUBLIC_API_URL}/species/${slug}`,
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
      title: "Especie no encontrada",
      description: "La especie solicitada no se pudo encontrar.",
      url: "https://claudettevamp.com/especies/no-encontrado",
      image: "https://claudettevamp.com/no-cover.webp",
      canonical: "https://claudettevamp.com/especies/no-encontrado",
    };
  }

  const specie = await res.json();

  return getMetadata({
    title: `${specie.name} — Claudette Vamp`,
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: `https://claudettevamp.com/especies/${specie.slug}`,
    image: `https://claudettevamp.com${specie.avatar}`,
    canonical: `https://claudettevamp.com/especies/${specie.slug}`,
  });
}

export default async function SpeciePage({ params }) {
  const { slug } = params;
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/species/${slug}`,
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
    return <div>Especie no encontrada</div>;
  }

  const specie = await res.json();

  return (
    <div>
      <h1>{specie.name}</h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
            {specie.name}
          </h2>

          {specie.description &&
            specie.description !== "NULL" &&
            specie.description !== "" && (
              <div className="mb-12">{formatText(specie.description)}</div>
            )}

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl mb-4">
            Descripción física
          </h3>

          {specie.aspect &&
            specie.aspect !== "NULL" &&
            specie.aspect !== "" && (
              <div className="mb-12">{formatText(specie.aspect)}</div>
            )}

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl mb-4">
            Información de origen
          </h3>

          {specie.origen &&
            specie.origen !== "NULL" &&
            specie.origen !== "" && (
              <div className="mb-12">{formatText(specie.origen)}</div>
            )}

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl mb-4">
            Estructura social
          </h3>

          {specie.society &&
            specie.society !== "NULL" &&
            specie.society !== "" && (
              <div className="mb-12">{formatText(specie.society)}</div>
            )}

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl mb-4">
            Otros datos y curiosidades
          </h3>

          {specie.curiosity &&
            specie.curiosity !== "NULL" &&
            specie.curiosity !== "" && (
              <div>{formatText(specie.curiosity)}</div>
            )}
        </div>

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-4">
          <div className="relative w-full mt-16 md:mt-5">
            <BoxCard className="mt-16 md:mt-5">
              <HexagonCard
                source={specie.avatar}
                alternative="alejandro-martir"
                className="mb-5"
              />

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
                Datos generales
              </h3>
              <ul>
                {specie.lifetime &&
                  specie.lifetime !== "NULL" &&
                  specie.lifetime !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Esperanza de vida:</span>{" "}
                      {specie.lifetime}
                    </li>
                  )}
                {specie.specs &&
                  specie.specs !== "NULL" &&
                  specie.specs !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Características:</span>{" "}
                      {specie.specs}
                    </li>
                  )}
                {specie.skills &&
                  specie.skills !== "NULL" &&
                  specie.skills !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Habilidades:</span>{" "}
                      {specie.skills}
                    </li>
                  )}
                {specie.debility &&
                  specie.debility !== "NULL" &&
                  specie.debility !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Debilidades:</span>{" "}
                      {specie.debility}
                    </li>
                  )}
              </ul>

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
                Datos físicos
              </h3>
              <ul>
                {specie.gender &&
                  specie.gender !== "NULL" &&
                  specie.gender !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Géneros:</span>{" "}
                      {specie.gender}
                    </li>
                  )}
                {specie.stature &&
                  specie.stature !== "NULL" &&
                  specie.stature !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Altura:</span>{" "}
                      {specie.stature}
                    </li>
                  )}
                {specie.eyes &&
                  specie.eyes !== "NULL" &&
                  specie.eyes !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Color de ojos:</span>{" "}
                      {specie.eyes}
                    </li>
                  )}
                {specie.hair &&
                  specie.hair !== "NULL" &&
                  specie.hair !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Cabello:</span> {specie.hair}
                    </li>
                  )}
                {specie.skin &&
                  specie.skin !== "NULL" &&
                  specie.skin !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Tez:</span> {specie.skin}
                    </li>
                  )}
                {specie.complexion &&
                  specie.complexion !== "NULL" &&
                  specie.complexion !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Complexión:</span>{" "}
                      {specie.complexion}
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
