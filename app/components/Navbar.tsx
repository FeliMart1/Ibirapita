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
