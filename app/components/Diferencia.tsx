"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { label: 'Liderazgo', top: '35%', left: '0%' },
  { label: 'Comunicación', top: '10%', left: '0%' },
  { label: 'Creatividad', top: '25%', left: '35%' },
  { label: 'Trabajo en Equipo', top: '0%', left: '40%' },
  { label: 'Adaptabilidad', top: '65%', left: '70%' },
  { label: 'Lúdica', top: '90%', left: '85%' },
  { label: 'Recreación', top: '78%', left: '-5%' },
  { label: 'Empatía', top: '75%', left: '45%' },
  { label: 'Pensamiento Crítico', top: '15%', left: '70%' },
  { label: 'Negociación', top: '40%', left: '75%' },
  { label: 'Escucha Activa', top: '63%', left: '13%' },
  { label: 'Colaboración', top: '100%', left: '20%' },
];

export default function Diferencia() {
  return (
        <>
        <section className="bg-green-950 text-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
    >
      Triunfarán las empresas más humanas
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-200"
    >
      Aquellas cuyos profesionales dominen las habilidades que las máquinas no pueden reemplazar.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-full max-w-[500px] aspect-square mx-auto"
    >
      <div className="absolute inset-0 rounded-full border border-yellow-400 opacity-20" />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-2xl md:text-3xl font-bold bg-white text-green-900 px-6 py-3 rounded-full shadow-xl">
          Power Skills
        </div>
      </div>

      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + idx * 0.1 }}
          className="absolute bg-yellow-400 text-green-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-md transition-transform duration-300 hover:scale-105 cursor-default"
          style={{ top: skill.top, left: skill.left }}
        >
          {skill.label}
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

        </>
  );
}
