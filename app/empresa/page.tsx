'use client';

import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  { name: "Ignacio García", role: "Coordinador General", image: "/images/avatar.avif" }, 
  { name: "María Jose Capurro", role: "Coordinadora de Operaciones", image: "/images/avatar.avif" },
  { name: "Manuela Duran", role: "Encargada de Cuentas", image: "/images/avatar.avif" },
  { name: "Felipe Martínez", role: "Innovación y TI", image: "/images/foto cv.png" },
];

const values = [
  {
    title: "💡 Responsabilidad",
    description:
      "Nos tomamos en serio cada desafío porque sabemos que detrás de cada proyecto hay personas que confían en nosotros. Siempre buscamos la mejor solución dentro del tiempo y los recursos disponibles, comprometiéndonos a dar lo mejor en cada paso.",
  },
  {
    title: "🎨 Creatividad",
    description:
      "Aquí las ideas vuelan y toman forma en equipo. Nos encanta pensar fuera de la caja, reformular, probar y mejorar hasta dar con soluciones que sorprendan y superen expectativas. La creatividad no es solo parte del proceso, es nuestra esencia.",
  },
  {
    title: "🤝 Compañerismo",
    description:
      "Sabemos que los mejores resultados nacen del trabajo en equipo. Valoramos el respeto, la confianza y el apoyo mutuo, tanto dentro del equipo como con nuestros clientes. Juntos logramos más, y nos encanta construir relaciones que sumen.",
  },
  {
    title: "🧠 Reflexión",
    description:
      "No hacemos las cosas por hacer. Nos preguntamos siempre el “por qué” y el “para qué” de cada acción. ¿Aporta valor? ¿Genera impacto? Creemos en un trabajo con propósito, que inspire, transforme y deje huella.",
  },
  {
    title: "😃 Alegría",
    description:
      "Creemos en trabajar con ganas, con pasión y disfrutando el camino. Nos motiva saber que cada proyecto puede generar un cambio real, y eso nos llena de energía. Porque cuando se trabaja con alegría, se trabaja mejor.",
  },
];

export default function Empresa() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleValue = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same is clicked
    } else {
      setOpenIndex(index); // Open the clicked one
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-[var(--primary)] text-[var(--text-primary)]">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white p-8">
        <img
          src="/images/tirolesa.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="bg-black/50 absolute inset-0"></div>
        <h2 className="relative text-4xl font-bold z-10 text-[var(--secondary)] animate__fadeIn">
          Construyendo Experiencias Únicas
        </h2>
      </section>

      {/* Sobre Nosotros */}
      <section className="p-10 text-center max-w-4xl mx-auto bg-[var(--verde)] text-white">
        <h2 className="text-3xl font-semibold mb-4 text-[var(--primary)]">Sobre Nosotros</h2>
        <p className="text-lg">
          En Ibirapitá, nos especializamos en la creación de eventos inolvidables. Nuestra misión es transformar ideas en experiencias impactantes que fortalezcan marcas y equipos.
        </p>
      </section>

      {/* Nuestro Equipo */}
      <section className="p-10 bg-[var(--background)]">
        <h1 className="text-3xl font-semibold text-center mb-8 text-[var(--primary)]">Nuestro Equipo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center animate__fadeIn">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto shadow-lg"
              />
              <h3 className="mt-4 text-xl font-medium text-[var(--primary)]">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="p-10 bg-[#ffb733] text-white">
        <h1 className="text-3xl font-semibold text-center mb-8 text-[var(--primary)]">Nuestros Valores</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              onClick={() => toggleValue(index)}
              className="cursor-pointer rounded-lg p-6 bg-[var(--primary)] hover:bg-[var(--background-light)] transition-all duration-300 shadow-md"
            >
              <h2 className="text-xl font-semibold text-[var(--verdemedio)] text-center">{value.title}</h2>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-white text-justify">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
