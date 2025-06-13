"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Empresas() {
  return (
    <section className="bg-[var(--primary)] text-white py-24 px-6">
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

        <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 mb-16 justify-items-center">
          {[
            "Brou",
            "Conaprole",
            "Creditel",
            "Genexus",
            "Mercadolibre",
            "Mp",
            "Portoseguro",
            "Tata",
            "Santander",
            "Ose",
            "Ucu",
            "Mcdonalds",
            "Directv",
            "Sheraton",
            "John",
            "Bic",
          ].map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-full w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-md transition-transform hover:scale-105"
            >
              <Image
                src={`/images/logo${logo}.webp`}
                alt={logo}
                width={70}
                height={40}
                className="object-contain max-w-[80%] max-h-[70%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
