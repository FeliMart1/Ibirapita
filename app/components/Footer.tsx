import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white pt-12 pb-6 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Sobre Ibirapitá */}
        <div>
          <h3 className="text-[var(--secondary)] text-lg font-semibold mb-3">Ibirapitá</h3>
          <p className="text-gray-300 leading-relaxed">
            Desarrollamos habilidades humanas para un mundo más empático, creativo y colaborativo.
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-[var(--secondary)] text-lg font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2">
            <li><Link href="/empresa" className="hover:text-[var(--secondary)] transition">Empresa</Link></li>
            <li><Link href="/servicios" className="hover:text-[var(--secondary)] transition">Servicios</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--secondary)] transition">Contacto</Link></li>
            {/* <li><Link href="/blog" className="hover:text-[var(--secondary)] transition">Blog</Link></li> */}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-[var(--secondary)] text-lg font-semibold mb-3">Contacto</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><Mail size={18} /> info@ibirapita.com.uy</li>
            {/* <li className="flex items-center gap-2"><Phone size={18} /> +598 123 456 789</li> */}
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-[var(--secondary)] text-lg font-semibold mb-3">Seguinos</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[var(--secondary)] transition"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--secondary)] transition"><Instagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--secondary)] transition"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-12 border-t border-white/20 pt-6 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Ibirapitá. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
