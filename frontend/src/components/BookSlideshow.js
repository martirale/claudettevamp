"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";

export default function BookSlideshow() {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      loop: true,
      navigation: true,
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  const bookCovers = [
    { src: "/books/claudette-1.png" },
    { src: "/books/claudette-2.png" },
    { src: "/books/claudette-3.png" },
  ];

  return (
    <div className="w-full max-w-9xl mx-auto">
      <swiper-container ref={swiperRef} init="false" className="py-12">
        {bookCovers.map((cover, index) => (
          <swiper-slide
            key={index}
            className="flex items-center justify-center"
          >
            <div className="relative w-[320px] h-[512px]">
              <Image
                src={cover.src}
                alt={cover.alt}
                layout="fill"
                objectFit="contain"
                className="transition-all duration-300 ease-in-out"
              />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
