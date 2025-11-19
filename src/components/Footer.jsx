import Image from "next/image";
import { SiFacebook, SiInstagram } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-6 py-8 md:py-10  mt-20">


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left ">


        {/* Nombre */}
        <div>
          <h2 className="text-2xl font-noto tracking-[0.15em] uppercase text-white">Cuatro y 10</h2>
          <p className="text-sm mt-2 text-neutral-400">
            Hecho por amigos, pensado para vos.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" 
              className="hover:text-gray-300 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#quienes-somos"
                className="hover:text-gray-300 transition-colors"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-gray-300 transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        {/* Redes sociales */}
        <div className="flex flex-col items-center ">
          <Image
            src="/images/logo.png"  
            alt="Cuatro y 10 Logo"
            width={85}
            height={85}
            className="mb-3 w-20 sm:w-[85px] h-auto"
          />

          <h3 className="text-white font-semibold mb-3">Seguinos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Cuatro-y-10-Gin/61560809742664/?rdid=ZZ6IiIcQKvtKlBQP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F179AyJujQs%2F"
              aria-label="Facebook"
              className="hover:text-gray-300 transition-colors"
            >
              <SiFacebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/cuatroy10gin/?igsh=dGo4aW10dHZtaDNw#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors"
            >
              <SiInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Cuatro y 10. Todos los derechos reservados.
      </div>
    </footer>
  );
}
