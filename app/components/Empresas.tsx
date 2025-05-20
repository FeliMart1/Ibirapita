"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


  const testimonials = [
    { quote: 'Una experiencia transformadora para nuestro equipo. Logramos una mejor comunicación y mayor integración.', name: 'Juan Pérez, CEO de Innovatech' },
    { quote: 'El taller nos permitió conocer más sobre nuestras fortalezas y debilidades como equipo. ¡Totalmente recomendable!', name: 'María Gómez, Gerente de Recursos Humanos, TechNow' },
    { quote: 'La metodología aplicada mejoró significativamente la dinámica de trabajo en remoto. Fue un cambio de enfoque que nos benefició mucho.', name: 'Carlos Rodríguez, Director de Marketing, Creativa' },
  ];

export default function Empresas() {
  return (
    <section className="bg-[var(--primary)] text-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-12"
    >
      EMPRESAS QUE YA DIJERON "WOW"
    </motion.h2>

    <div className="flex flex-wrap justify-center gap-8 mt-8 mb-16">
      {["mapfre", "santander", "indra", "cepsa", "amadeus", "telefonica"].map((logo, i) => (
        <div key={i} className="flex justify-center">
          <Image
            src={`/logos/${logo}.png`}
            alt={logo}
            width={100}
            height={50}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>

    {/* Testimonios */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {testimonials.map((t, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.3 }}
          className="bg-white text-[var(--text-primary)] rounded-xl shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <p className="italic text-lg text-gray-700 mb-4">“{t.quote}”</p>
          <p className="font-bold text-sm text-gray-900">{t.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    );
    }   

