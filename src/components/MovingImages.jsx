"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
const images = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
];

export default function MovingImages() {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1.2}
        allowTouchMove={true}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="overflow-hidden aspect-[16/10]">
              <Image
                src={src}
                fill
                alt={`Imagen ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
