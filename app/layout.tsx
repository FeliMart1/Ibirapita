import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

// Importamos Cal Sans local
const calSans = localFont({
  src: "../public/fuente/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibirapitá",
  description: "Somos una empresa dedicada a la creación de experiencias únicas y memorables. Trabajamos en equipo para ofrecerte lo mejor en eventos corporativos, actividades y programas de desarrollo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={calSans.variable}>
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
