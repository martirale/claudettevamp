"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./universe.module.css";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/cards/Books.svg",
    url: "/libros",
    title: "Libros",
  },
  {
    image: "/cards/Protagonist.svg",
    url: "#",
    title: "Protagonistas",
  },
  {
    image: "/cards/Antagonist.svg",
    url: "#",
    title: "Antagonistas",
  },
  {
    image: "/cards/Factions.svg",
    url: "#",
    title: "Facciones",
  },
  {
    image: "/cards/Mytho.svg",
    url: "#",
    title: "Mitología",
  },
  {
    image: "/cards/Author.svg",
    url: "/autor",
    title: "Autor",
  },
];

export default function UniverseSlideshow() {
  return (
    <div>
      <h2 className="font-LeMurmure text-scarlet text-center text-3xl md:text-4xl mb-8">
        Descubre el universo de Claudette
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
        }}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.hexagonWrapper}>
              <div className={styles.hexagonBorder}>
                <div className={styles.hexagon}>
                  <Link href={slide.url} className="hover:text-scarlet">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={350}
                      height={491}
                      className={styles.slideImage}
                    />
                    <h3
                      className={`${styles.slideTitle} font-LeMurmure text-3xl`}
                    >
                      {slide.title}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
