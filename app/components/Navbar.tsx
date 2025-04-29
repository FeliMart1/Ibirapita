// Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <nav className="bg-[var(--primary)] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[var(--secondary)]">
          <img src="/images/logo.webp" alt="Logo Ibirapitá" className="h-12" />
        </Link>
        <div className="flex items-center space-x-6">
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
              className="hover:text-[var(--secondary)] focus:outline-none"
            >
              Servicios ▼
            </Link>
            {isOpen && (
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
          {/* <Link href="/blog" className="hover:text-[var(--secondary)] transition-all">Blog</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
