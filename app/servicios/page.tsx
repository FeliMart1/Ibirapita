import Image from "next/image";
import Link from "next/link";

const servicios = [
  {
    id: 1,
    title: "Team Building",
    image: "/images/trabajo en equipo.jpg",
    link: "/servicios/team-building",
  },
  {
    id: 2,
    title: "Acciones de marca y BTL",
    image: "/images/Campo minado 2.jpg",
    link: "/servicios/btl",
  },
  {
    id: 3,
    title: "Programas y consultoría",
    image: "/images/canales agua 3.jpg",
    link: "/servicios/consultoria",
  },
  {
    id: 4,
    title: "Eventos corporativos",
    image: "/images/puente mono 3.jpg",
    link: "/servicios/eventos",
  },
  {
    id: 5,
    title: "Instalaciones lúdicas",
    image: "/images/tirolesa.jpg",
    link: "/servicios/ludicas",
  },
  {
    id: 6,
    title: "Aprendizaje y desarrollo",
    image: "/images/rueda con cuerdas.jpg",
    link: "/servicios/aprendizaje",
  },
];

export default function Servicios() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center text-white">
        <img src="/images/equipo 1.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0.5" />
        <div className="bg-black/50 absolute inset-0"></div>
        <h2 className="relative text-4xl font-bold z-10">Nuestros Servicios</h2>
      </section>

      {/* Lista de Servicios */}
      <section className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Descubre lo que ofrecemos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <Link key={servicio.id} href={servicio.link} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image src={servicio.image} alt={servicio.title} width={400} height={250} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-semibold text-white">{servicio.title}</h3>
                <button className="mt-2 px-4 py-2 bg-white text-black rounded-md">Ver más</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
