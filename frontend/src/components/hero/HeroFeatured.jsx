import React from "react";
import StoresButtons from "../StoresButtons";
import LogoCaidaAscenso from "../LogoCaidaAscenso";
import Image from "next/image";

export default function HeroFeatured() {
  return (
    <section className="grid grid-cols-1">
      <div className="flex justify-center text-center px-0 md:px-8 xl:px-16">
        <h2 className="font-LeMurmure text-4xl md:text-5xl xl:text-6xl">"Una historia épica de amor, inmortalidad y venganza frente a un mal ancestral"</h2>
      </div>
    </section>
  );
}
