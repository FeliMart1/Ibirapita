"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBullhorn,
  FaUsers,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";

const processSteps = [
  { icon: <FaBuilding />, title: "Construcción del Equipo" },
  { icon: <FaBullhorn />, title: "Comunicación Efectiva" },
  { icon: <FaUsers />, title: "Trabajo en Grupo" },
  { icon: <FaChalkboardTeacher />, title: "Formación y Capacitación" },
  { icon: <FaHandsHelping />, title: "Apoyo Continuo" },
];

export default function Resultados() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-24 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          ¿CÓMO LOGRAMOS RESULTADOS SOSTENIBLES?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-700"
        >
          En Ibirapitá, cada evento se diseña a medida. Nos enfocamos en generar
          impacto real, transformador y duradero para tu equipo.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-3xl">
                {step.icon}
              </div>
              <h4 className="font-semibold text-lg text-gray-800">
                {step.title}
              </h4>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xl md:text-2xl font-medium italic text-[var(--primary)] max-w-2xl mx-auto"
        >
          “Nada queda al azar. Cada actividad tiene un propósito y está diseñada
          para dejar aprendizajes duraderos.”
        </motion.p>
      </div>
    </section>
  );
}
