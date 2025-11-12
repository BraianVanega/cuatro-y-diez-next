import { Wrapper } from ".";
import products from "@/mock/products.JSON";
import ProductCard from "./ProductCard";

export default function Productos() {
  return (
    <section id="productos" className="py-16 bg-blue-50 mt-8">
      <Wrapper>
        <h2 className="text-3xl sm:text-4xl text-blue-900 font-bold text-center mb-12">
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {products.map((p, key) => {
            return (
              <ProductCard
                key={key}
                img={p.imagen}
                price={p.precio}
                name={p.nombre}
                description={p.descripcion}
              />
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
