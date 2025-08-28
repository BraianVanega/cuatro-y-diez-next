import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

const images = ["/images/brindando.jpeg", "/images/servido.jpeg"];

export default function MovingImages() {
  console.log(images);
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col transition-transform duration-1000 ease-in-out">
        {/* <Swiper> */}
        {images.map((src, i) => (
          <img
            src={src}
            alt={`Imagen ${i + 1}`}
            className="w-full h-full object-cover relative"
          />
        ))}
        {/* </Swiper> */}
      </div>
    </div>
  );
}
