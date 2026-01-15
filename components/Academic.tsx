
import React, { useState } from 'react';
import { createPortal } from 'react-dom';


const Academic: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; img: string; org?: string } | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const education = [
    {
      type: 'Bootcamp Intensivo',
      year: '2024',
      title: 'Full Stack Web Developer',
      desc: 'Especialización en tecnologías MERN (MongoDB, Express, React, Node.js), arquitectura de software y metodologías ágiles en The Bridge Digital Talent.',
      tags: ['React', 'Node.js', 'MongoDB'],
      img: '/archivos/Aitor Montalbán full stack1.jpg'
    },
    {
      type: 'Especialización',
      year: '2025 - 2026',
      title: 'Master en Java, Spring boot y angular',
      desc: 'Formación avanzada en el ecosistema Java empresarial, arquitectura de microservicios con Spring Boot y desarrollo de frontend moderno con Angular.',
      tags: ['Java', 'Spring Boot', 'Angular', 'Microservicios'],
      img: '/archivos/certificado Ipartek.jpeg'
    }
  ];

  return (
    <div id="formacion" className="max-w-7xl mx-auto px-4 md:px-10 py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Mi Trayectoria Académica</h2>
        <p className="text-[#9da9b8] text-lg max-w-2xl leading-relaxed">
          Un recorrido por mi formación continua y especialización técnica en el desarrollo de software.
        </p>
        <div className="h-1.5 w-24 bg-primary rounded-full mt-6"></div>
      </div>

      <div className="flex flex-col gap-10">
        {education.map((edu, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCert({ title: edu.title, img: edu.img })}
            className={`group overflow-hidden rounded-2xl bg-surface-dark border border-slate-800 transition-all ${idx >= 2 ? 'hover:border-primary/30 hover:shadow-2xl cursor-pointer' : ''}`}
          >

            <div className="flex flex-col md:flex-row items-stretch">
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">{edu.type}</span>
                    <span className="text-[#9da9b8] text-sm font-medium">{edu.year}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight mb-4">{edu.title}</h3>
                  <p className="text-[#9da9b8] text-lg leading-relaxed">{edu.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-background-dark rounded-lg text-xs font-bold text-slate-300">{tag}</span>
                  ))}
                </div>
              </div>
              <div
                className={`w-full md:w-[450px] min-h-[300px] bg-cover bg-center transition-all duration-700 ${idx >= 2 ? 'grayscale group-hover:grayscale-0' : ''}`}
                style={{ backgroundImage: `url("${edu.img}")` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-background-dark/60 md:bg-gradient-to-l to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carrusel de Certificados */}
      <div className="mt-24">
        <div className="flex flex-col items-center text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Certificaciones y Titulaciones</h3>
            <p className="text-[#9da9b8] text-lg max-w-2xl leading-relaxed">
              Formación continua y certificaciones que respaldan mi experiencia técnica.
            </p>
            <div className="h-1.5 w-24 bg-primary rounded-full mt-6 mx-auto"></div>
          </div>
          <div className="flex gap-3 mt-10">
            <button
              onClick={() => scroll('left')}
              className="size-12 rounded-full border border-slate-700 bg-surface-dark flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg"
              aria-label="Anterior"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="size-12 rounded-full border border-slate-700 bg-surface-dark flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg"
              aria-label="Siguiente"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative group/carousel">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 pb-4 scroll-smooth"
        >

          {[
            { title: 'Programación .NET', img: '/archivos/Programación NET.png', org: 'Campus to Business' },
            { title: 'Crash Course on Python', img: '/archivos/certificado michigan.png', org: 'University of Michigan' },
            { title: 'Lenguajes de Programación', img: '/archivos/Lenguajes de programación.jpg', org: 'Certificación Profesional' },
            { title: 'Master en Redes', img: '/archivos/Master en redes.jpg', org: 'Especialización Avanzada' },
            { title: 'Servicios de Presentación en Entorno Gráfico', img: '/archivos/servicios de presentacion en entorno gráfico.jpg', org: 'Formación Técnica' }
          ].map((cert, idx) => (
            <div key={idx} className="snap-start shrink-0 w-[350px] md:w-[400px] group/cert">
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative overflow-hidden rounded-2xl bg-surface-dark border border-slate-800 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
              >

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover/cert:grayscale-0 transition-all duration-700 group-hover/cert:scale-110"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-background-dark to-surface-dark">
                  <h4 className="text-lg font-black text-white mb-2 group-hover/cert:text-primary transition-colors">{cert.title}</h4>
                  <p className="text-sm text-[#9da9b8] font-medium">{cert.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Certificado */}
      {selectedCert && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-background-dark/95 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          ></div>

          <div className="relative max-w-2xl w-full bg-surface-dark border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-scale-up z-10">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-20 size-10 flex items-center justify-center rounded-full bg-background-dark/50 border border-slate-700 text-white hover:bg-primary transition-all"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex flex-col">
              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 border-t border-slate-800">
                <h4 className="text-xl font-black text-white mb-1">{selectedCert.title}</h4>
                {selectedCert.org && <p className="text-primary font-bold text-sm tracking-wider uppercase">{selectedCert.org}</p>}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};


export default Academic;
