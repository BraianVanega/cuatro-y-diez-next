"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tiendaOpen, setTiendaOpen] = useState(false);

  return (
    <header className="bg-blue-500 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="Logo Cuatro y 10"
            className="h-12 w-auto"
          />
        </div>

        {/* Menú de escritorio */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#productos" className="hover:text-white">
            Productos
          </a>
          <a href="#nosotros" className="hover:text-white">
            Nosotros
          </a>
          <a href="#contacto" className="hover:text-white">
            Contacto
          </a>
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
          <a href="#productos" className="block py-2 border-b">
            Productos
          </a>
          <a href="#nosotros" className="block py-2 border-b">
            Nosotros
          </a>
          <a href="#contacto" className="block py-2 border-b">
            Contacto
          </a>

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
