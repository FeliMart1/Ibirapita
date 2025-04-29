"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBuilding, FaBullhorn, FaUsers, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  // Definir los datos para las secciones
  const skills = [
    { label: 'Liderazgo', top: '35%', left: '2%' },
    { label: 'Comunicación', top: '10%', left: '10%' },
    { label: 'Creatividad', top: '30%', left: '25%' },
    { label: 'Trabajo en Equipo', top: '10%', left: '40%' },
    { label: 'Adaptabilidad', top: '65%', left: '60%' },
    { label: 'Resolución de Conflictos', top: '90%', left: '70%' },
    { label: 'Gestión del Cambio', top: '65%', left: '85%' },
    { label: 'Empatía', top: '70%', left: '35%' },
    { label: 'Pensamiento Crítico', top: '15%', left: '70%' },
    { label: 'Negociación', top: '40%', left: '70%' },
    { label: 'Escucha Activa', top: '60%', left: '10%' },
    { label: 'Colaboración', top: '90%', left: '20%' },
  ];
  
  const processSteps = [
    { icon: <FaBuilding />, title: 'Construcción del Equipo' },
    { icon: <FaBullhorn />, title: 'Comunicación Efectiva' },
    { icon: <FaUsers />, title: 'Trabajo en Grupo' },
    { icon: <FaChalkboardTeacher />, title: 'Formación y Capacitación' },
    { icon: <FaHandsHelping />, title: 'Apoyo Continuo' },
  ];

  const testimonials = [
    { quote: 'Una experiencia transformadora para nuestro equipo. Logramos una mejor comunicación y mayor integración.', name: 'Juan Pérez, CEO de Innovatech' },
    { quote: 'El taller nos permitió conocer más sobre nuestras fortalezas y debilidades como equipo. ¡Totalmente recomendable!', name: 'María Gómez, Gerente de Recursos Humanos, TechNow' },
    { quote: 'La metodología aplicada mejoró significativamente la dinámica de trabajo en remoto. Fue un cambio de enfoque que nos benefició mucho.', name: 'Carlos Rodríguez, Director de Marketing, Creativa' },
  ];

 return (
    <div className="overflow-x-hidden bg-[var(--background)] text-[var(--text-primary)]">
      {/* Hero Section */}
      <Hero />

{/* Sección Problema - Introducción */}
    
<section className="bg-[#ffb733] w-full flex flex-col md:flex-row items-center justify-between py-16 px-8">
  <div className="flex-1 max-w-xl">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-blue-900">
      Enseñamos <span className="text-green-600">Soft Skills</span> a la gente de las empresas de forma
      <span className="text-green-600"> literalmente espectacular</span>
    </h1>
    <p className="mt-4 text-lg">
      Eleva el talento de tu equipo mientras la pasan pipa con un método premiado por su innovación.
    </p>
    <p className="mt-2 text-lg">
      Con un equipo de formadores con más de 20 años de experiencia en el sector.
    </p>
    <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition duration-300">
      ¡Quiero saber más!
    </button>
  </div>

  <div className="flex-1 flex justify-center mt-10 md:mt-0">
    <div className="relative w-96 h-96">
      <Image
        src="/images/logo png ibirapita.png"
        alt="Logo"
        fill
        className="object-contain"
      />
    </div>
  </div>
</section>



<section className="bg-green-900 py-28 px-6 text-center text-white">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-5xl font-extrabold mb-12 tracking-tight leading-tight"
  >
    ¿Y SI EL PROBLEMA NO ES LO QUE PENSABAS?
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
  >
    ¿<span className="font-bold">BAJA PRODUCTIVIDAD</span>? ¿<span className="font-bold">FALTA DE MOTIVACIÓN</span>? ¿<span className="font-bold">DESGASTE EN LOS EQUIPOS</span>? 
    Quizás ya probaste con capacitaciones, beneficios o incluso cambios de liderazgo. 
    Pero <span className="text-yellow-300 font-semibold">algo sigue sin funcionar</span>.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
  >
    En <strong className="text-yellow-300">Ibirapitá</strong> creemos que no se trata solo de lo que hace la gente, sino de <span className="font-bold">CÓMO SE SIENTE</span> trabajando en equipo. 
    De lo que no se dice en las reuniones. De las pequeñas tensiones que se acumulan. 
    De los <span className="italic">“no es mi problema”</span>.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
  >
    El verdadero desafío hoy no está en las métricas. Está en la <span className="text-yellow-300 font-semibold uppercase">DESCONEXIÓN HUMANA</span>. 
    En la dificultad para escucharse, liderar, ceder, entusiasmarse. 
    Está en lo que muchos llaman <span className="italic">“soft skills”</span> y nosotros preferimos llamar <strong className="text-white">Power Skills</strong>.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="text-xl max-w-4xl mx-auto leading-relaxed"
  >
    Porque <span className="font-bold">sin eso</span>, ningún equipo puede brillar. 
    Y ningún cambio será <span className="font-bold uppercase text-yellow-300">SOSTENIBLE</span>.
  </motion.p>
</section>



{/* ESTADÍSTICAS */}
<section className="bg-gray-100 py-24 px-8 text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-16 uppercase tracking-wide">
    Los profesionales de RRHH lo tienen clarísimo
  </h1>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
    {/* Estadística 1 */}
    <div className="bg-white rounded-2xl p-8 shadow-md">
      <div className="text-5xl font-extrabold text-yellow-500 mb-4">89%</div>
      <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-yellow-400" style={{ width: '89%' }} />
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>89%</strong> de los profesionales de RRHH dice que cuando una nueva contratación no funciona, es porque no tiene las <strong>PowerSkills</strong> necesarias.
      </p>
    </div>

    {/* Estadística 2 */}
    <div className="bg-white rounded-2xl p-8 shadow-md">
      <div className="text-5xl font-extrabold text-yellow-500 mb-4">92%</div>
      <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-yellow-400" style={{ width: '92%' }} />
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>92%</strong> cree que las <strong>PowerSkills</strong> son igual o incluso más importantes que las habilidades técnicas.
      </p>
    </div>
  </div>
</section>



{/* ENTORNO PROFESIONAL */}
<section className="bg-[#ffb733] px-8 py-24 text-gray-900 text-center md:text-left md:flex md:justify-between md:items-stretch">
  <div className="max-w-xl mx-auto md:mx-0 flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
      ¿Y en un entorno profesional<br className="hidden md:block" />
      automatizado... qué marca la diferencia?
    </h1>
  </div>

  <div className="relative w-full max-w-xs md:max-w-md mt-12 md:mt-0 flex items-end justify-center">
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <Image
        src="/images/robot.webp"
        alt="Robot"
        fill
        className="object-contain"
      />
    </div>
  </div>
</section>




      {/* Sección Solución - La Metodología Ibirapitá */}
      <section className="bg-green-900 text-white py-24 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-8"
  >
    TRIUNFARÁN LAS EMPRESAS MÁS HUMANAS
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-lg max-w-3xl mx-auto mb-16 text-white"
  >
    Aquellas cuyos profesionales sean cracks en habilidades insustituibles
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="relative w-full max-w-5xl mx-auto h-[500px] flex items-center justify-center"
  >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold bg-white text-green-900 px-6 py-3 rounded-full shadow-xl z-10">
      Power Skills
    </div>

    {/* Habilidades alrededor */}
    {skills.map((skill, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + idx * 0.1 }}
        className="absolute bg-[#ffb733] text-green-900 px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-default"
        style={{ top: skill.top, left: skill.left }}
      >
        {skill.label}
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* Sección Proceso - Cómo lo hacemos */}
{/* Sección Proceso - Cómo lo hacemos */}
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

{/* Sección de Que ofrecemos? */}
<section className="p-16 bg-[#ffb733] text-white text-center">
  <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-[var(--primary)]">
    ¿Qué ofrecemos?
  </h1>
  <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[ 
      { name: "Team Building", icon: <FaUsers />, link: "/servicios/team-building", img: "/images/trabajo en equipo.jpg" },
      { name: "Acciones de Marca", icon: <FaBullhorn />, link: "/servicios/btl", img: "/images/acciones de marca.webp" },
      { name: "Eventos Corporativos", icon: <FaBuilding />, link: "/servicios/eventos", img: "/images/evantos corporativos.webp" }
    ].map((item, index) => (
      <Link href={item.link} key={index} className="relative group block w-full max-w-lg mx-auto">
        <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-105">
          <img 
            src={item.img} 
            alt={item.name} 
            className="absolute inset-0 w-full h-full object-cover brightness-60 group-hover:brightness-75 transition-all duration-300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 py-4">
            <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
            <h6 className="text-xl md:text-2xl font-bold">{item.name}</h6>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

{/* Testimonios */}
<section className="bg-green-900 text-white py-24 px-6">
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

      {/* CTA final */}
      <section className="bg-[var(--primary)] text-white py-24 text-center">
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
    </div>
  );
}
