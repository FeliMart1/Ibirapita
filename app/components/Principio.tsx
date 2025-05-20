"use client";
import Image from "next/image";
import React from "react";


export default function Principio() {
    return (
<section className="bg-[#ffb733] w-full flex flex-col md:flex-row items-center justify-between py-16 px-8">
  <div className="flex-1 max-w-xl">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-blue-900">
      Enseñamos <span className="text-green-600">Habilidades Humanas</span> (mal llamadas soft skills) de forma 
      <span className="text-green-600"> memorable y efectiva.</span>
    </h1>
    <p className="mt-4 text-lg">
      Lo hacemos con un enfoque lúdico e innovador que ayuda a las personas a crecer mientras lo pasan bien.    </p>
    <p className="mt-2 text-lg">
      18 años de experiencia formando equipos en empresas de todos los tamaños.</p>
    <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition duration-300">
      ¿Listo para transformar el talento de tu organización?
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
    );
}