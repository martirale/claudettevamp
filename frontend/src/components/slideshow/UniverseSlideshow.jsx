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
    url: "#",
    title: "Facciones",
    path: "factions",
  },
  {
    url: "#",
    title: "Mitología",
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
    <div>
      <h2 className="font-LeMurmure text-scarlet text-center text-3xl mb-8">
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
      </Swiper>
    </div>
  );
}
