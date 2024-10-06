"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./universe.module.css";
import Link from "next/link";
import {
  BooksCard,
  ProtagonistCard,
  AntagonistCard,
  FactionsCard,
  MythCard,
  AuthorCard,
} from "@/utils/UniverseSlideshowPaths";

const pathMap = {
  books: BooksCard,
  protagonist: ProtagonistCard,
  antagonist: AntagonistCard,
  factions: FactionsCard,
  myth: MythCard,
  author: AuthorCard,
};

const slides = [
  {
    url: "/libros",
    title: "Libros",
    path: "books",
  },
  {
    url: "/protagonistas",
    title: "Protagonistas",
    path: "protagonist",
  },
  {
    url: "/antagonistas",
    title: "Antagonistas",
    path: "antagonist",
  },
  {
    url: "/facciones",
    title: "Facciones",
    path: "factions",
  },
  {
    url: "/especies",
    title: "Especies",
    path: "myth",
  },
  {
    url: "/autor",
    title: "Autor",
    path: "author",
  },
];

export default function UniverseSlideshow() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-3 flex flex-col justify-center">
      <h2 className="font-LeMurmure text-scarlet text-center text-2xl md:text-left md:text-4xl 2xl:text-5xl">
        Descubre más del universo de Claudette Vamp
      </h2>
      </div>

      <div className="col-span-12 md:col-span-9 flex justify-center"><Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.hexagonWrapper}>
              {" "}
              <div className={`${styles.hexagonBorder} group`}>
                <div className={styles.hexagon}>
                  <Link href={slide.url}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1080 1517.94"
                    >
                      <rect
                        className="fill-[#111111]"
                        y="-.03"
                        width="1080"
                        height="1518"
                      />
                      <path
                        className="fill-darkGrey group-hover:fill-scarlet"
                        d={pathMap[slide.path]}
                      />
                    </svg>
                    <h3
                      className={`${styles.slideTitle} font-LeMurmure text-4xl`}
                    >
                      {slide.title}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper></div>
    </section>
  );
}
