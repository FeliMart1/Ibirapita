"use client";
import React from "react";
import Image from "next/image";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaMicrophoneAlt,
  FaHandsHelping,
  FaUserTie,
} from "react-icons/fa";

const servicios = [
  {
    name: "Team Building",
    icon: <FaUsers />,
    img: "/images/Equipo1.jpg",
  },
  {
    name: "Talleres de Habilidades Humanas",
    icon: <FaChalkboardTeacher />,
    img: "/images/talleres.jpg",
  },
  {
    name: "Intervenciones en Eventos Corporativos",
    icon: <FaMicrophoneAlt />,
    img: "/images/EventosCorporativos.webp",
  },
  {
    name: "Procesos de Acompañamiento a Equipos",
    icon: <FaHandsHelping />,
    img: "/images/acompanamiento.jpg",
  },
  {
    name: "Formación de Líderes",
    icon: <FaUserTie />,
    img: "/images/rueda con cuerdas.jpg",
  },
];

export default function QueOfrecemos() {
  return (
    <section className="bg-[#ffb733] py-24 text-white text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--primary)] mb-14">
        ¿Qué ofrecemos?
      </h1>

      {/* Primer bloque: los primeros 3 ítems */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-12">
        {servicios.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="relative w-full h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover brightness-60 group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white text-center">
              <div className="text-5xl mb-3">{item.icon}</div>
              <h6 className="text-xl md:text-2xl font-semibold leading-snug">
                {item.name}
              </h6>
            </div>
          </div>
        ))}
      </div>

      {/* Segundo bloque: los últimos 2 ítems centrados */}
      <div className="flex justify-center gap-10 flex-wrap max-w-5xl mx-auto px-6">
        {servicios.slice(3).map((item, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[300px] h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover brightness-60 group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white text-center">
              <div className="text-5xl mb-3">{item.icon}</div>
              <h6 className="text-xl md:text-2xl font-semibold leading-snug">
                {item.name}
              </h6>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
