"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen mt-0 flex items-center justify-center text-center shadow-2xl mx-0 overflow-hidden">
      {/* Imagen de fondo con Next.js Image */}
      <Image 
        src="/images/acciones de marca.webp" 
        alt="Hero Background" 
        fill
        objectFit="cover"
        className="brightness-50"
        priority
      />
      {/* Filtro de color */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Texto grande y blanco */}
      <motion.h6 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white text-5xl md:text-8xl font-extrabold tracking-wide opacity-90"
      >
        Elevá el talento de tu equipo
      </motion.h6>
    </section>
  );
};

export default Hero;
