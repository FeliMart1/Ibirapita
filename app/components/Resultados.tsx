"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaBullhorn, FaUsers, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";


  const processSteps = [
    { icon: <FaBuilding />, title: 'Construcción del Equipo' },
    { icon: <FaBullhorn />, title: 'Comunicación Efectiva' },
    { icon: <FaUsers />, title: 'Trabajo en Grupo' },
    { icon: <FaChalkboardTeacher />, title: 'Formación y Capacitación' },
    { icon: <FaHandsHelping />, title: 'Apoyo Continuo' },
  ];


export default function Resultados() {
    return (
        <section className="bg-gray-200 text-gray-900 py-24 ">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-8"
    >
      ¿CÓMO LOGRAMOS RESULTADOS SOSTENIBLES?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg leading-relaxed"
    >
      En Ibirapitá, cada evento se crea a partir de tus necesidades específicas, asegurando que el impacto sea real, personal y sostenible.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
      {processSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.2 }}
          className="bg-white rounded-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
        >
          <div className="text-4xl mb-4 text-[var(--primary)]">
            {step.icon}
          </div>
          <h4 className="font-semibold text-xl text-gray-800">{step.title}</h4>
        </motion.div>
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.6 }}
      className="mt-16 text-xl font-medium italic text-[var(--primary)]"
    >
      “Nada queda al azar. Cada actividad tiene un propósito y está diseñada para dejar aprendizajes duraderos.”
    </motion.p>
  </div>
</section>
    );
}   
