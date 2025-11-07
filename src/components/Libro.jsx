"use client"; 

import Image from "next/image"; 
import Wrapper from "./Wrapper"; 
import SimpleParallax from "simple-parallax-js"; 

export default function Libro() { 
  return ( 
  <section id="libro" className="relative py-32"> 
  <Wrapper className="flex flex-row items-center justify-around"> 
    <SimpleParallax delay={0} orientation={"up"} scale={1} overflow maxTransition={60} > 

    <Image src="/images/libro-1.png" alt="Libro" width={1000} height={1000} className="w-full" /> 
    </SimpleParallax> 


    <SimpleParallax delay={0} orientation={"down"} scale={1.3} overflow maxTransition={60} > 
      <Image src="/images/libro-2.png" alt="Libro 2" width={1000} height={1000} className="w-full" /> 
      </SimpleParallax> 
      </Wrapper> 
      </section> 
      ); 
    }