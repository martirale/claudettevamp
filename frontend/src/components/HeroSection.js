import React from "react";
import Link from "next/link";
import LogoCaidaAscenso from "./LogoCaidaAscenso";

const cards = [
  {
    id: "1",
    title: "Reencarnación",
    description: "Parte I",
    url: "https://www.amazon.com/dp/B0BNZLP26R",
    target: "_blank",
  },
  {
    id: "2",
    title: "Descenso",
    description: "Parte II",
    url: "https://www.amazon.com/dp/B0CJ4M7R6G",
    target: "_blank",
  },
  {
    id: "3",
    title: "Reina y Princesa",
    description: "Parte III",
    url: "https://www.amazon.com/dp/B0CNBD75R1",
    target: "_blank",
  },
];

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between px-8 py-24 md:p-24">
      <LogoCaidaAscenso className="relative fill-scarlet w-[350px] h-[172px] md:w-[500px] md:h-[246px] md:mt-8 lg:w-[700px] lg:h-[344px] 2xl:w-[850px] 2xl:h-[418px] 2xl:mt-16" />

      <div className="mb-4 mt-24 grid text-center gap-4 lg:max-w-7xl lg:w-full lg:mb-0 lg:mt-0 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={card.url}
            target={card.target}
            rel="noopener"
            className="rounded-2xl border border-black px-12 py-5 transition-colors hover:border-scarlet md:px-8"
          >
            <h3 className="text-scarlet mb-3 text-2xl font-semibold">
              {card.title}
            </h3>
            <p className="text-grey text-sm uppercase font-bold">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
