"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


export default function CTA() {
  return (
      <section className="bg-green-900 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-8"
          >
            ¿LISTO PARA TRANSFORMAR TU PRÓXIMO EVENTO EN UNA EXPERIENCIA QUE MARQUE A TU EQUIPO?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-10"
          >
            Te lo contamos en menos de 10 minutos. Sin compromiso.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[var(--primary)] font-bold text-lg px-8 py-4 rounded-xl shadow-md transition"
          >
            🎉 Diseñemos juntos tu próximo encuentro
          </motion.a>
        </div>
      </section>
    );  
}

