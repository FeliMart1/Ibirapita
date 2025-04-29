// Footer.tsx
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-10 bg-[var(--primary)] text-white text-center mt-10 shadow-lg">
      <h2>&copy; 2025 Ibirapitá. Todos los derechos reservados.</h2>
      <h2 className="text-sm mt-2">info@ibirapita.com.uy</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-all"><Facebook size={24} /></a>
        <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-all"><Instagram size={24} /></a>
        <a href="#" aria-label="LinkedIn" className="hover:opacity-75 transition-all"><Linkedin size={24} /></a>
      </div>
    </footer>
  );
};
export default Footer;
