"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from ".";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-blue-500 shadow-md fixed top-0 w-full z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Wrapper>
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo Cuatro y 10"
                className="h-16 w-auto sm:h-20 md:h-24 cursor-pointer"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center text-white font-medium">
            <a href="#productos" className="hover:text-gray-200 transition">
              Productos
            </a>
            <a href="#quienes-somos" className="hover:text-gray-200 transition">
              Quiénes Somos
            </a>
            <a href="#contacto" className="hover:text-gray-200 transition">
              Contacto
            </a>
          </nav>



          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Wrapper>


      {menuOpen && (
        <div className="md:hidden bg-blue-100 text-blue-900 shadow-md px-6 pb-4 transition-all duration-300">
          <a href="#productos" className="block py-2 border-b border-blue-300 hover:text-blue-600">
            Productos
          </a>
          <a
            href="#quienes-somos"
            className="block py-2 border-b border-blue-300 hover:text-blue-600"
          >
            Quiénes Somos
          </a>
          <Link href="#contacto" className="block py-2 border-b border-blue-300 hover:text-blue-300">
            Contacto
          </Link>

          <div className="mt-4">
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
