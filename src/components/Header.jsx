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
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 grid grid-cols-3 items-center">
          <div className="flex items-center flex-1 md:flex-none mr-2">
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

          <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center select-none pointer-events-none">
            <p className="text-[9px]tracking-[0.35em] text-white uppercase">
              LONDON DRY GIN
            </p>

            <h1 className="text-lg font-noto text-white tracking-[0.25em] uppercase leading-tight  ">
              Cuatro y 10
            </h1>

            <p className="text-[9px] tracking-[0.3em] text-white uppercase ">
              Artesanal
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-center text-center select-none gap-1 mx-auto">
            <p className="text-xs tracking-[0.4em] text-white uppercase">
              LONDON DRY GIN
            </p>

            <h1 className="text-2xl font-noto text-white tracking-[0.25em] uppercase leading-tight">
              Cuatro y 10
            </h1>

            <p className="text-xs tracking-[0.35em] text-white uppercase">
              Artesanal
            </p>
          </div>
          
          <nav className="hidden lg:flex space-x-8 items-center text-white font-roboto flex-1 justify-end">
            <a
              href="#productos"
              className="hover:text-gray-300 transition-all duration-300 relative group"
            >
              <span className="text-sm uppercase z-20 duration-300 transition-all after:transition-all after:duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gray-300">
                Productos
              </span>
            </a>
            <a
              href="#quienes-somos"
              className="hover:text-gray-300 transition-all duration-300 relative group"
            >
              <span className="text-sm uppercase z-20 duration-300 transition-all after:transition-all after:duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gray-300">
                Quiénes Somos
              </span>
            </a>
            <a
              href="#contacto"
              className="hover:text-gray-300 transition-all duration-300 relative group"
            >
              <span className="text-sm uppercase z-20 duration-300 transition-all after:transition-all after:duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gray-300">
                Contacto
              </span>
            </a>
          </nav>

          <div className="lg:hidden flex justify-end col-start-3 z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Wrapper>

      {menuOpen && (
  <div className="lg:hidden bg-blue-500 text-white shadow-md px-6 pb-4 pt-3 animate-mobile-open-soft">

    {/* Links */}
    <a
      href="#productos"
      onClick={() => setMenuOpen(false)}
      className="block py-3 border-b border-blue-300/30 hover:text-gray-200 text-sm tracking-wide uppercase"
    >
      Productos
    </a>

    <a
      href="#quienes-somos"
      onClick={() => setMenuOpen(false)}
      className="block py-3 border-b border-blue-300/30 hover:text-gray-200 text-sm tracking-wide uppercase"
    >
      Quiénes Somos
    </a>

    <a
      href="#contacto"
      onClick={() => setMenuOpen(false)}
      className="block py-3 hover:text-gray-200 text-sm tracking-wide uppercase"
    >
      Contacto
    </a>
  </div>
)}


    </header>
  );
}

export default Header;
