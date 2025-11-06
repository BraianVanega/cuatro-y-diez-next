import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ img, name, description, price }) {

  const phoneNumber = "5402234210160";

  const message = `Hola, quiero consultar por este producto ${name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const formattedPrice = "$" + Number(price).toLocaleString("es-AR", {
    minimumFractionDigits: 0,
  });
  
  return (
    
      <div className="bg-white shadow-md rounded-2xl overflow-hidden h-full cursor-pointer group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
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
          <p className="text-black text-bold">{formattedPrice}</p>
        </div>

        {/* Boton de WhatsApp */}
        <div className="pb-6">
        <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-green-600 hover:to-emerald-700 transition-all">
          <FaWhatsapp size={20} />
          <span>Pedir por WhatsApp</span>
          </a>
          </div>
          </div>
          </div>
      
  );
}
