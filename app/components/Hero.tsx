"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen mt-0 flex items-center justify-center text-center shadow-2xl mx-0 overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      >
        <source src="/images/herovideo.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>

      {/* Filtro de color (opcional si ya usás brightness en el video) */}
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
