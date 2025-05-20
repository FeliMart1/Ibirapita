"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaBuilding, FaBullhorn, FaUsers, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";
import Link from "next/link";


export default function QueOfrecemos() {
  return (

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
);
}   

