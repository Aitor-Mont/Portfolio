
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-24 border-t border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Retro Visual */}
        <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
          <div className="relative p-4 bg-[#1e232d] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#0f172a]">
              <img src="/archivos/bio.jpg" alt="About me" className="w-full h-full object-contain transition-all" />
            </div>
            <div className="absolute bottom-10 left-10 z-20 bg-background-dark/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">history</span>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-[#9da9b8]">Trayectoria</p>
                <p className="text-sm font-black text-white">Más de 15 años programando</p>
              </div>
            </div>
          </div>


        </div>

        {/* Right: Text Story */}
        <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
          <div>
            <div className="flex items-center gap-3 text-primary mb-4">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-xs font-black uppercase tracking-widest">Mi Historia</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
              De los 8 bits <span className="text-primary">al Full Stack.</span>
            </h2>
            <div className="text-xl lg:text-2xl font-medium text-[#9da9b8] leading-relaxed mb-8">
              La programación no es solo mi trabajo, es mi lenguaje nativo. Lo que hago hoy es la evolución natural de una obsesión que comenzó hace más de una década.
            </div>
            <div className="prose prose-invert prose-lg text-[#9da9b8] space-y-6">
              <p>
                Mi viaje en el mundo del código comenzó a los 13 años, fascinado por la pantalla brillante de un <strong>Atari ST</strong>. Mientras otros niños jugaban en la calle, yo pasaba horas descifrando manuales de BASIC.
              </p>
              <p>
                Lo que empezó como curiosidad infantil se transformó en una vocación de por vida. Esos primeros bucles me enseñaron lógica antes que sintaxis.
              </p>
              <p>
                Hoy, combino esa pasión original con tecnologías modernas para crear arquitecturas web robustas y escalables. Ya no programo en 8 bits, pero mantengo el mismo compromiso con la calidad que definió mis primeros pasos.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
