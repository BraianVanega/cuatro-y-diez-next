import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ img, name, description, price }) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = `Hola, quiero consultar por este producto ${name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const formattedPrice =
    "$" +
    Number(price).toLocaleString("es-AR", {
      minimumFractionDigits: 0,
    });

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col justify-between h-full cursor-pointer group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
      {/* Imagen */}
      <figure className="relative w-full h-[240px] sm:h-[280px] md:h-[300px] overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </figure>

      {/* Contenido */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow text-center gap-3 sm:gap-4">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
          {name}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
          {description}
        </p>
        <p className="text-black font-bold text-lg sm:text-xl mt-auto">
          {formattedPrice}
        </p>
      </div>

      {/* Botón WhatsApp */}
      <div className="p-5 pt-0">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:from-green-600 hover:to-emerald-700 active:scale-95 transition-transform duration-200"
        >
          <FaWhatsapp size={20} />
          <span className="text-sm sm:text-base">Pedir por WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
