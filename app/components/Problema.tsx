"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";




export default function Problema() {
  return (
<section id="Problema" className="bg-green-900 py-28 px-6 text-center text-white">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-5xl font-extrabold mb-12 tracking-tight leading-tight"
  >
    ¿Y SI EL PROBLEMA NO ES LO QUE PENSÁS? 🤔
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
  >
    ¿<span className="font-bold">BAJA PRODUCTIVIDAD</span>? ¿<span className="font-bold">FALTA DE MOTIVACIÓN</span>? ¿<span className="font-bold">EQUIPOS DESGASTADOS</span>? 
    Capacitaciones, beneficios, nuevos líderes… capaz ya lo intentaste todo.
    Pero <span className="text-yellow-300 font-semibold">algo no termina de cuadrar</span>.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
  >
    En <strong className="text-yellow-300">Ibirapitá</strong> creemos que el verdadero problema no siempre se ve. 
    No está solo en lo que la gente hace, sino en <span className="text-yellow-300 font-semibold uppercase">CÓMO SE SIENTE</span> trabajando junta. 
    En lo que no se dice. En las tensiones que se acumulan.
    En los <span className="italic">“yo ya hice mi parte”</span>.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
  >
    Hoy el desafío no está en los números. Está en la <span className="text-yellow-300 font-semibold uppercase">DESCONEXIÓN HUMANA</span>. 
    En la falta de escucha, de liderazgo real, de ganas.
    En esas habilidades que muchos siguen llamando <span className="italic">“soft skills”</span>, pero que para nosotros son <strong className="text-white">Habilidades Humanas Esenciales.</strong>.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="text-xl max-w-4xl mx-auto leading-relaxed"
  >
    Porque <span className="font-bold">sin eso</span>, ningún equipo funciona.
    Y ningún cambio será <span className="font-bold uppercase text-yellow-300">SOSTENIBLE</span>.
  </motion.p>
</section>
    );
    }   