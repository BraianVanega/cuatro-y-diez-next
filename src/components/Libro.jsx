"use client";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { useEffect, useRef } from "react";

export default function Libro() {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate1 = scrolled * -0.5;
      const rate2 = scrolled * -0.3;

      if (image1Ref.current) {
        image1Ref.current.style.transform = `translateY(${rate1}px)`;
      }
      if (image2Ref.current) {
        image2Ref.current.style.transform = `translateY(${rate2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="libro" className="relative mt-56">
      <Wrapper className="flex flex-row items-center justify-between pt-32">
        <div
          ref={image1Ref}
          className="parallax-image"
          style={{ transition: "transform 0.1s ease-out" }}
        >
          <Image
            src="/images/libro-1.png"
            alt="Libro"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <div
          ref={image2Ref}
          className="parallax-image"
          style={{ transition: "transform 0.1s ease-out" }}
        >
          <Image
            src="/images/libro-2.png"
            alt="Libro 2"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </Wrapper>
    </section>
  );
}
