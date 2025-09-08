"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [tiendaOpen, setTiendaOpen] = useState(false);

  return (
    <header className="bg-blue-500 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Menú de escritorio */}
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

        {/* Botón acceder */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Acceder
          </button>
        </div>

        {/* Botón menú hamburguesa (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <a href="#productos" className="block py-2 border-b text-gray-800">
            Productos
          </a>
          <a href="#quienes-somos" className="block py-2 border-b text-gray-800">
            Quiénes Somos
          </a>
          <Link href="/contacto" className="block py-2 border-b text-gray-800">
            Contacto
          </Link>

          {/* Acceder (mobile) */}
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
