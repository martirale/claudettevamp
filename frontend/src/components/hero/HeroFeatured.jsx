import React from "react";
import StoresButtons from "../StoresButtons";
import LogoCaidaAscenso from "../LogoCaidaAscenso";
import Image from "next/image";

export default function HeroFeatured() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
      <div className="col-span-12 md:col-span-6 flex justify-center">
        <Image
          src="/sample-h.png"
          width="688"
          height="600"
          quality={100}
          className="w-full h-auto"
          alt="Lorem ipsum"
        />
      </div>

      <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
      </div>
    </section>
  );
}
