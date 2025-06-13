"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Principio() {
  return (
    <section className="bg-[#ffb733] w-full flex flex-col md:flex-row items-center justify-between py-16 px-8 scroll-smooth">
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Enseñamos <span className="text-green-600">Habilidades Humanas</span>{" "}
          (mal llamadas soft skills) de forma
          <span className="text-green-600"> memorable y efectiva.</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Lo hacemos con un enfoque lúdico e innovador que ayuda a las personas a crecer mientras lo pasan bien.
        </motion.p>

        <motion.p
          className="mt-2 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          18 años de experiencia formando equipos en empresas de todos los tamaños.
        </motion.p>

        <motion.a
          href="#Problema"
          className="mt-6 inline-block bg-green-900 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          ¿Listo para transformar el talento de tu organización?
        </motion.a>
      </motion.div>
    </section>
  );
}
