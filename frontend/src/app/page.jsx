import React from "react";
import HeroBooks from "@/components/hero/HeroBooks";
import UniverseSlideshow from "@/components/slideshow/UniverseSlideshow";
import DividerLogo from "@/components/ui/DividerLogo";
import { getMetadata } from "@/lib/getMetadata";
import "swiper/css";
import "swiper/css/navigation";

export const metadata = getMetadata({
  title: "Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
  url: "https://claudettevamp.com/inicio",
  image: "https://claudettevamp.com/claudette-cover.webp",
  canonical: "https://claudettevamp.com/inicio",
});

export default function Home() {
  return (
    <div>
      <h1>Claudette Vamp</h1>

      {/* HERO BOOKS */}
      <HeroBooks />
      <DividerLogo className="py-16" />

      {/* UNIVERSE SLIDESHOW */}
      <UniverseSlideshow />
      <DividerLogo className="py-16" />
    </div>
  );
}
