import React from "react";
import { getMetadata } from "@/lib/getMetadata";
import Link from "next/link";
import DividerLogo from "@/components/ui/DividerLogo";
import HexagonCard from "@/components/hexagon/HexagonCard";

export const metadata = getMetadata({
  title: "Especies — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/especies",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/especies",
});

async function fetchAllSpecies() {
  const apiSecretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/species`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiSecretKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener las especies");
  }
  return res.json();
}

export default async function SpeciesPage() {
  let species = [];

  try {
    species = await fetchAllSpecies();
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <h1>Especies</h1>

      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12">
          <div>
            <h2 className="font-LeMurmure text-scarlet text-center text-6xl md:text-7xl">
              Especies
            </h2>

            <DividerLogo className="my-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {species.map((specie, index) => (
                <Link key={index} href={`/especies/${specie.slug}`}>
                  <HexagonCard
                    source={specie.avatar}
                    alternative={specie.name}
                  />
                  <h4 className="text-center my-4">{specie.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
