import React from "react";
import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import DividerLogo from "@/components/ui/DividerLogo";
import HexagonCard from "@/components/hexagon/HexagonCard";

export const metadata = getMetadata({
  title: "Facciones — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/facciones",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/facciones",
});

async function fetchAllFactions() {
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiSecretKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener las facciones");
  }
  return res.json();
}

export default async function FactionsPage() {
  let factions = [];

  try {
    factions = await fetchAllFactions();
  } catch (error) {
    console.error(error);
  }

  // Filtrar facciones por tipo
  const factionsVampires = factions.filter(
    (faction) => faction.type === "vampiro"
  );
  const factionsNephilim = factions.filter(
    (faction) => faction.type === "nephilim"
  );
  const factionsOthers = factions.filter((faction) => faction.type === "otro");

  return (
    <div>
      <h1>Facciones</h1>

      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12">
          <div className="mb-32">
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Vampiros
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {factionsVampires.map((faction, index) => (
                <Link key={index} href={`/facciones/${faction.slug}`}>
                  <HexagonCard
                    source={faction.avatar}
                    alternative={faction.name}
                  />
                  <h4 className="text-center my-4">{faction.name}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-32">
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Nephilim
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {factionsNephilim.map((faction, index) => (
                <Link key={index} href={`/facciones/${faction.slug}`}>
                  <HexagonCard
                    source={faction.avatar}
                    alternative={faction.name}
                  />
                  <h4 className="text-center my-4">{faction.name}</h4>
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
              {factionsOthers.map((faction, index) => (
                <Link key={index} href={`/facciones/${faction.slug}`}>
                  <HexagonCard
                    source={faction.avatar}
                    alternative={faction.name}
                  />
                  <h4 className="text-center my-4">{faction.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
