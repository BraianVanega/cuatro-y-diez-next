import Image from "next/image";

export default function ProductCard({ img, name, description, price }) {
  return (
    <a
      href="#"
      className="bg-white shadow-md cursor-pointer rounded-lg overflow-hidden h-full group"
    >
      <div className="relative w-full flex flex-col items-center h-full">
        <figure className="overflow-hidden relative w-full h-[300px]">
          <Image
            src={img}
            objectFit="cover"
            alt="Botella"
            fill
            className="transition-all duration-300 group-hover:scale-110"
          />
        </figure>
        <div className="p-8 text-center flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-blue-500">{name}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-black text-bold">${price}</p>
        </div>
      </div>
    </a>
  );
}
