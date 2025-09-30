"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [tiendaOpen, setTiendaOpen] = useState(false);

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
      className={`bg-blue-500 shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo Cuatro y 10"
              className="h-12 w-auto cursor-pointer"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#productos" className="hover:text-white">
            Productos
          </a>
          <a href="#quienes-somos" className="hover:text-white">
            Quiénes Somos
          </a>
          <Link href="/contacto" className="hover:text-white">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Acceder
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <a href="#productos" className="block py-2 border-b text-gray-800">
            Productos
          </a>
          <a
            href="#quienes-somos"
            className="block py-2 border-b text-gray-800"
          >
            Quiénes Somos
          </a>
          <Link href="/contacto" className="block py-2 border-b text-gray-800">
            Contacto
          </Link>

          <div className="mt-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Acceder
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
