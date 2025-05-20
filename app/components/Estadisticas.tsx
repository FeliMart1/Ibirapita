"use client";
import React from "react";

export default function Estadisticas() {
  return (
    <section className="bg-gray-100 py-24 px-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 uppercase tracking-wide">
        Los profesionales de RRHH lo tienen clarísimo
      </h1>

      <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 mb-16 leading-relaxed">
        No es una corazonada. Es una tendencia global: <br />
        las <strong>Habilidades Humanas Esenciales</strong> están en el centro del futuro del trabajo.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
        {/* Estadística 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center text-5xl font-extrabold text-yellow-500 mb-4">
            🧠 86%
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '86%' }} />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>86 %</strong> de las oportunidades de liderazgo en 2023 exigen al menos una habilidad “blanda” como requisito clave para avanzar en el proceso de selección.
            <br />
            <span className="text-sm text-gray-500 mt-2 block">(Fuente: [incluir si querés la fuente exacta])</span>
          </p>
        </div>

        {/* Estadística 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center text-5xl font-extrabold text-yellow-500 mb-4">
            🎯 75%
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '75%' }} />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>75 %</strong> de los equipos con bajo rendimiento reportan fallas en la comunicación interna.
          </p>
        </div>

        {/* Estadística 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center text-5xl font-extrabold text-yellow-500 mb-4">
            💬 92%
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '92%' }} />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>92 %</strong> de los líderes consideran que la empatía y la escucha activa son más determinantes que la experiencia técnica en la gestión de equipos.
          </p>
        </div>

        {/* Estadística 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center text-5xl font-extrabold text-yellow-500 mb-4">
            🤝 70%
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '70%' }} />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>70 %</strong> de los colaboradores renuncian por conflictos no resueltos con compañeros o jefes, no por el trabajo en sí.
          </p>
        </div>
      </div>
    </section>
  );
}
