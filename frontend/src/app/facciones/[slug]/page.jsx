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
    `${process.env.NEXT_PUBLIC_API_URL}/factions/${slug}`,
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
      title: "Facción no encontrada",
      description: "La facción solicitada no se pudo encontrar.",
      url: "https://claudettevamp.com/facciones/no-encontrado",
      image: "https://claudettevamp.com/no-cover.webp",
      canonical: "https://claudettevamp.com/facciones/no-encontrado",
    };
  }

  const faction = await res.json();

  return getMetadata({
    title: `${faction.name} — Claudette Vamp`,
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: `https://claudettevamp.com/facciones/${faction.slug}`,
    image: `https://claudettevamp.com${faction.avatar}`,
    canonical: `https://claudettevamp.com/facciones/${faction.slug}`,
  });
}

export default async function FactionPage({ params }) {
  const { slug } = params;
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/factions/${slug}`,
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
    return <div>Facción no encontrada</div>;
  }

  const faction = await res.json();

  return (
    <div>
      <h1>{faction.name}</h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
            {faction.name}
          </h2>

          {faction.description &&
            faction.description !== "NULL" &&
            faction.description !== "" && (
              <div className="mb-12">{formatText(faction.description)}</div>
            )}

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl md:text-4xl mb-4">
            Otros datos y curiosidades
          </h3>

          {faction.curiosity &&
            faction.curiosity !== "NULL" &&
            faction.curiosity !== "" && (
              <div>{formatText(faction.curiosity)}</div>
            )}
        </div>

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-4">
          <div className="relative w-full mt-16 md:mt-5">
            <BoxCard className="mt-16 md:mt-5">
              <HexagonCard
                source={faction.avatar}
                alternative="alejandro-martir"
                className="mb-5"
              />

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
                {faction.name}
              </h3>
              <ul>
                {faction.leader &&
                  faction.leader !== "NULL" &&
                  faction.leader !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Líder:</span> {faction.leader}
                    </li>
                  )}
                {faction.alpha &&
                  faction.alpha !== "NULL" &&
                  faction.alpha !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Alfa:</span> {faction.alpha}
                    </li>
                  )}
                {faction.great &&
                  faction.great !== "NULL" &&
                  faction.great !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Gran Brujo:</span>{" "}
                      {faction.great}
                    </li>
                  )}
                {faction.predecessor &&
                  faction.predecessor !== "NULL" &&
                  faction.predecessor !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Líder anterior:</span>{" "}
                      {faction.predecessor}
                    </li>
                  )}
                {faction.foundation &&
                  faction.foundation !== "NULL" &&
                  faction.foundation !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Fundación:</span>{" "}
                      {faction.foundation}
                    </li>
                  )}
                {faction.founder &&
                  faction.founder !== "NULL" &&
                  faction.founder !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Fundador:</span>{" "}
                      {faction.founder}
                    </li>
                  )}
                {faction.status &&
                  faction.status !== "NULL" &&
                  faction.status !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Estado:</span>{" "}
                      {faction.status}
                    </li>
                  )}
                {faction.location &&
                  faction.location !== "NULL" &&
                  faction.location !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Localización:</span>{" "}
                      {faction.location}
                    </li>
                  )}
                {faction.specie &&
                  faction.specie !== "NULL" &&
                  faction.specie !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Especie:</span>{" "}
                      {faction.specie}
                    </li>
                  )}
                {faction.class &&
                  faction.class !== "NULL" &&
                  faction.class !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Clase:</span> {faction.class}
                    </li>
                  )}
                {faction.purpose &&
                  faction.purpose !== "NULL" &&
                  faction.purpose !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Propósito:</span>{" "}
                      {faction.purpose}
                    </li>
                  )}
              </ul>

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-2xl mb-3">
                Membresía y relaciones
              </h3>
              <ul>
                {faction.populate &&
                  faction.populate !== "NULL" &&
                  faction.populate !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Población:</span>{" "}
                      {faction.populate}
                    </li>
                  )}
                {faction.members &&
                  faction.members !== "NULL" &&
                  faction.members !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Miembros:</span>{" "}
                      {faction.members}
                    </li>
                  )}
                {faction.members_featured &&
                  faction.members_featured !== "NULL" &&
                  faction.members_featured !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Miembros destacados:</span>{" "}
                      {faction.members_featured}
                    </li>
                  )}
                {faction.members_others &&
                  faction.members_others !== "NULL" &&
                  faction.members_others !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Otros miembros:</span>{" "}
                      {faction.members_others}
                    </li>
                  )}
                {faction.members_papa &&
                  faction.members_papa !== "NULL" &&
                  faction.members_papa !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Papas destacados:</span>{" "}
                      {faction.members_papa}
                    </li>
                  )}
                {faction.members_paladin &&
                  faction.members_paladin !== "NULL" &&
                  faction.members_paladin !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Paladines destacados:</span>{" "}
                      {faction.members_paladin}
                    </li>
                  )}
                {faction.affiliations &&
                  faction.affiliations !== "NULL" &&
                  faction.affiliations !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Afiliaciones:</span>{" "}
                      {faction.affiliations}
                    </li>
                  )}
                {faction.enemies &&
                  faction.enemies !== "NULL" &&
                  faction.enemies !== "" && (
                    <li className="mb-2">
                      <span className="font-bold">Enemigos:</span>{" "}
                      {faction.enemies}
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
