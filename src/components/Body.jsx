import { Images } from "lucide-react";
import Image from "next/image";
import { Wrapper } from ".";
import products from "@/mock/products.JSON";
import ProductCard from "./ProductCard";

export default function Body() {
  return (
    <section id="productos" className="px-6 py-16">
      <Wrapper> 
      <h2 className="text-3xl text-blue-900 font-bold text-center mb-12">
        Nuestros Productos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Primer producto*/}
        {products.map((p, key) => {
          return (<ProductCard 
            key={key}
            img={p.imagen}
            price={p.precio}
            name={p.nombre}
            description={p.descripcion}
          />)
        })}
        
      </div>
      </Wrapper>
    </section>
  );
}
