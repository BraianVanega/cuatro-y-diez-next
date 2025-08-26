"use client";
import React, { useState, useEffect } from "react";
import {Swiper, SwiperSlide} from "swiper/react";

const images = [
  "/images/brindando.jpeg",
  "/images/servido.jpeg"
];

export default function MovingImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >

        <Swiper>
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`Imagen ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

