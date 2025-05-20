import { notFound } from "next/navigation";
import Image from "next/image";
import servicios from "@/data/servicios";

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const servicio = servicios.find((s) => s.slug === params.slug);

  if (!servicio) {
    return notFound();
  }

  return (
    <div className="pt-16 min-h-screen">
      <section className="text-center p-12 bg-[var(--foreground)] text-[var(--text-primary)]">
        <h1 className="text-5xl font-bold">{servicio.title}</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">{servicio.description}</p>
      </section>

      <section className="p-16 bg-[var(--background)] text-center">
        <h2 className="text-4xl font-semibold text-white mb-8">Actividades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicio.actividades.map((actividad, index) => (
            <div key={index} className="group w-full max-w-lg mx-auto perspective">
              <div className="flip-card relative w-full h-72 rounded-lg shadow-lg">
                <div className="flip-front absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={actividad.image} 
                    alt={actividad.name} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover brightness-50"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h3 className="text-4xl font-extrabold">{actividad.name}</h3>
                  </div>
                </div>
                <div className="flip-back bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-center p-6 rounded-lg">
                  <Image 
                    src={actividad.image} 
                    alt={actividad.name} 
                    width={400} 
                    height={300} 
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <h6 className="relative text-lg font-semibold text-white">
                    {actividad.desc || "Descripción no disponible"}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Genera las rutas estáticas para build
export async function generateStaticParams() {
  return servicios.map((servicio) => ({
    slug: servicio.slug,
  }));
}
