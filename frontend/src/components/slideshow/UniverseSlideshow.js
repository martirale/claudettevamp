"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./universe.module.css";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/sample-v.png",
    url: "#",
    title: "Libros",
  },
  {
    image: "/sample-v.png",
    url: "#",
    title: "Protagonistas",
  },
  {
    image: "/sample-v.png",
    url: "#",
    title: "Antagonistas",
  },
  {
    image: "/sample-v.png",
    url: "#",
    title: "Facciones",
  },
  {
    image: "/sample-v.png",
    url: "#",
    title: "Mitología",
  },
  {
    image: "/sample-v.png",
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
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ clickable: true }}
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
            <Link href={slide.url}>
              <div className={styles.hexagon}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={300}
                  height={421}
                  className={styles.slideImage}
                />
              </div>
              <h3 className={`${styles.slideTitle} font-LeMurmure text-3xl`}>
                {slide.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
