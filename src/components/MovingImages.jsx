"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
const images = [
  "/images/Foto1.jpg",
  "/images/Foto2.jpg",
  "/images/Foto3.jpg",
  "/images/Foto4.jpg",
];

export default function MovingImages() {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        allowTouchMove={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full min-h-[45vh] sm:min-h-[60vh] md:min-h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={src}
                alt={`Imagen ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover object-center rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
