"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import Principio from "@/components/Principio";
import Problema from "@/components/Problema";
import Estadisticas from "@/components/Estadisticas";
import Diferencia from "@/components/Diferencia";
import Resultados from "@/components/Resultados";
import QueOfrecemos from "@/components/QueOfrecemos";
import Empresas from "@/components/Empresas";
import CTA from "@/components/CTA";



export default function Home() {
 return (
    <div className="overflow-x-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <Hero />
      <Principio />
      <Problema />
      <Estadisticas />
      <Diferencia />
      <Resultados />
      <QueOfrecemos />
      <Empresas />
      <CTA />
    </div>
  );
}
