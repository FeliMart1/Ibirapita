"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  // Para el submenú Servicios en desktop
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsServicesOpen(false), 300);
  };

  // Toggle menú hamburguesa móvil
  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <nav className="bg-[var(--primary)] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[var(--secondary)] flex items-center">
          <img src="/images/logo.webp" alt="Logo Ibirapitá" className="h-12" />
        </Link>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/empresa" className="hover:text-[var(--secondary)] transition-all">
            Empresa
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/servicios"
              className="hover:text-[var(--secondary)] focus:outline-none flex items-center gap-1 cursor-pointer"
              onClick={(e) => e.preventDefault()} // Para evitar navegación en desktop al hacer clic
            >
              Servicios <span>▼</span>
            </Link>

            {isServicesOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-[var(--primary)] border rounded shadow-lg text-white"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/servicios/team-building" className="block px-4 py-2 hover:bg-[var(--secondary)] hover:text-black">Team Building</Link>
                <Link href="/servicios/btl" className="block px-4 py-2 hover:bg-[var(--secondary)] hover:text-black">Acciones de marca y BTL</Link>
                <Link href="/servicios/consultoria" className="block px-4 py-2 hover:bg-[var(--secondary)] hover:text-black">Programas y Consultoría</Link>
                <Link href="/servicios/eventos" className="block px-4 py-2 hover:bg-[var(--secondary)] hover:text-black">Eventos Corporativos</Link>
                <Link href="/servicios/ludicas" className="block px-4 py-2 hover:bg-[var(--secondary)] hover:text-black">Instalaciones Lúdicas</Link>
                <Link href="/servicios/aprendizaje" className="block px-4 py-2 hover:bg-[var(--secondary)] hover:text-black">Aprendizaje y Desarrollo</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-[var(--secondary)] transition-all">
            Contacto
          </Link>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-60"
        >
          {/* Animación para hamburguesa a X */}
          <span
            className={`block h-0.5 w-8 bg-[var(--secondary)] rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-[var(--secondary)] rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-[var(--secondary)] rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo semitransparente */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />

            {/* Contenedor menú */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[64px] left-0 right-0 bg-[var(--primary)] overflow-hidden z-50 md:hidden shadow-lg"
            >
              <nav className="flex flex-col p-4 gap-2 text-[var(--secondary)]">
                <Link
                  href="/empresa"
                  className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition"
                  onClick={() => setIsOpen(false)}
                >
                  Empresa
                </Link>

                {/* Submenú desplegable simple */}
                <details className="group">
                  <summary
                    className="cursor-pointer px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition flex justify-between items-center"
                  >
                    Servicios
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="flex flex-col mt-2 ml-4 gap-2">
                    <Link href="/servicios/team-building" className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition" onClick={() => setIsOpen(false)}>Team Building</Link>
                    <Link href="/servicios/btl" className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition" onClick={() => setIsOpen(false)}>Acciones de marca y BTL</Link>
                    <Link href="/servicios/consultoria" className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition" onClick={() => setIsOpen(false)}>Programas y Consultoría</Link>
                    <Link href="/servicios/eventos" className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition" onClick={() => setIsOpen(false)}>Eventos Corporativos</Link>
                    <Link href="/servicios/ludicas" className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition" onClick={() => setIsOpen(false)}>Instalaciones Lúdicas</Link>
                    <Link href="/servicios/aprendizaje" className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition" onClick={() => setIsOpen(false)}>Aprendizaje y Desarrollo</Link>
                  </div>
                </details>

                <Link
                  href="/contact"
                  className="block px-4 py-2 rounded hover:bg-[var(--secondary)] hover:text-black transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
