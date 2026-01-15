import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Project {
  category: string;
  title: string;
  desc: string;
  longDesc: string;
  stack: string[];
  img: string;
  images: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>([0, 0, 0]); // Track current image for each project

  const projects: Project[] = [
    {
      category: 'Fintech',
      title: 'Dashboard Analítico Financiero "Prisma"',
      desc: 'Plataforma para visualización de datos financieros en tiempo real con gráficos interactivos y reportes automatizados.',
      longDesc: 'Este proyecto fue desarrollado para una firma de inversión líder. Permite a los analistas realizar seguimientos exhaustivos de carteras, con integración de APIs de mercado en tiempo real. Implementamos WebSockets para actualizaciones vivas y una arquitectura de microservicios en el backend para manejar grandes volúmenes de transacciones con latencia mínima. La interfaz utiliza D3.js para visualizaciones complejas y Angular para una gestión de estado eficiente.',
      stack: ['Angular', 'D3.js', 'Java', 'Spring Boot', 'PostgreSQL', 'WebSockets'],
      img: '/archivos/Prisma.png',
      images: ['/archivos/Prisma.png', '/archivos/prisma2.png'],
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      category: 'Productividad',
      title: 'Gestor de Tareas Corporativo "Kinetic"',
      desc: 'Sistema de gestión de proyectos y tareas con metodología Kanban, asignación de recursos y seguimiento en tiempo real.',
      longDesc: 'Kinetic es una solución empresarial completa para la gestión de proyectos y equipos. Incluye tableros Kanban personalizables, gestión de sprints, asignación automática de recursos basada en disponibilidad y carga de trabajo, y un sistema de notificaciones en tiempo real. La plataforma integra análisis predictivo para estimar tiempos de finalización y detectar cuellos de botella antes de que impacten en los plazos. Desarrollado con Angular para el frontend y Spring Boot con arquitectura de microservicios en el backend.',
      stack: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL', 'Redis', 'Docker'],
      img: '/archivos/Kinetic.png',
      images: ['/archivos/Kinetic.png', '/archivos/kinetic2.png'],
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      category: 'E-Commerce',
      title: 'E-Commerce Full Stack "Gameflow"',
      desc: 'Tienda de videojuegos digitales con pasarela de pagos segura, gestión de inventario y panel de administración.',
      longDesc: 'Una solución integral de comercio electrónico diseñada específicamente para el mercado de gaming. Incluye un motor de búsqueda avanzado con filtros dinámicos, un sistema de perfiles de usuario con historial de compras, y una integración completa con Stripe para pagos seguros. El panel de administración permite la gestión total del inventario, carga de claves digitales y analíticas de ventas detalladas por región. Utiliza una arquitectura MERN escalable con autenticación JWT.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT'],
      img: '/archivos/gameflow.png',
      images: ['/archivos/gameflow.png', '/archivos/gameflow2.png'],
      demoUrl: '#',
      repoUrl: '#'
    }
  ];

  // Navigate to previous image
  const handlePrevImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => {
      const newIndices = [...prev];
      if (newIndices[projectIndex] > 0) {
        newIndices[projectIndex]--;
      }
      return newIndices;
    });
  };

  // Navigate to next image
  const handleNextImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => {
      const newIndices = [...prev];
      if (newIndices[projectIndex] < projects[projectIndex].images.length - 1) {
        newIndices[projectIndex]++;
      }
      return newIndices;
    });
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="bg-[#111821] py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-b border-slate-800 pb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Proyectos Destacados</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-[#9da9b8] text-lg">Una selección curada de soluciones web complejas y aplicaciones Full Stack, enfocadas en rendimiento y escalabilidad.</p>
              <a
                href="https://github.com/Aitor-Mont"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-700 bg-surface-dark text-white hover:border-primary hover:text-primary transition-all duration-300"
              >
                <i className="fa-brands fa-github text-xl"></i>
                <span className="text-sm font-bold">Ver GitHub completo</span>
              </a>
            </div>
            <div className="w-full lg:w-[400px] h-[250px] rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
              <img
                src="/archivos/imagen_landing.png"
                alt="Landing showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group/item`}>
              <div className="flex-1 space-y-8 transition-transform duration-500 group-hover/item:-translate-y-1">
                <div className="flex items-center gap-3 text-primary">
                  <span className="h-px w-8 bg-primary transition-all duration-500 group-hover/item:w-12"></span>
                  <span className="text-xs font-black uppercase tracking-widest">{project.category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight group-hover/item:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-[#9da9b8] text-lg leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map(tech => (
                    <span key={tech} className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-xs font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setModalImageIndex(0);
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-surface-dark hover:bg-primary transition-all rounded-xl font-bold text-sm text-white shadow-lg hover:shadow-primary/30"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full h-[450px] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative group transition-all duration-700 hover:scale-[1.03] hover:shadow-primary/20 hover:border-primary/40">
                <div className="relative w-full h-full overflow-hidden">
                  {/* Imagen actual */}
                  <div
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => {
                      setSelectedProject(project);
                      setModalImageIndex(currentImageIndex[idx]);
                    }}
                  >
                    <img
                      src={project.images[currentImageIndex[idx]]}
                      alt={`${project.title} screenshot ${currentImageIndex[idx] + 1}`}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                  </div>

                  {/* Botón Flecha Izquierda */}
                  {currentImageIndex[idx] > 0 && (
                    <button
                      onClick={(e) => handlePrevImage(idx, e)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-background-dark/70 backdrop-blur-sm border border-slate-700 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-110 z-20 flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                  )}

                  {/* Botón Flecha Derecha */}
                  {currentImageIndex[idx] < project.images.length - 1 && (
                    <button
                      onClick={(e) => handleNextImage(idx, e)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-background-dark/70 backdrop-blur-sm border border-slate-700 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-110 z-20 flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  )}

                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-background-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Indicadores de carrusel en la tarjeta */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {project.images.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className={`h-1 rounded-full transition-all duration-300 ${dotIdx === currentImageIndex[idx]
                          ? 'w-8 bg-primary'
                          : 'w-2.5 bg-white/30 group-hover:bg-white/50'
                          }`}
                      ></div>
                    ))}
                  </div>

                  {/* Icono de expansión en hover */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                    <div className="size-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white shadow-xl">
                      <span className="material-symbols-outlined">zoom_in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-fade-in overflow-hidden">
          <div
            className="absolute inset-0 bg-background-dark/95 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative w-full max-w-5xl bg-surface-dark border border-slate-800 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-scale-up max-h-[65vh] flex flex-col z-10 transition-all">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 size-10 flex items-center justify-center rounded-full bg-background-dark/50 border border-slate-700 text-white hover:bg-primary transition-all"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
              {/* Image Section - Carousel with Arrows */}
              <div className="lg:w-1/2 h-[250px] lg:h-full relative shrink-0 group/modal-img">
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black">
                  <img
                    src={selectedProject.images[modalImageIndex]}
                    alt={`${selectedProject.title} screenshot ${modalImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Modal Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setModalImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1))}
                        className="absolute left-4 size-10 rounded-full bg-background-dark/50 backdrop-blur-md border border-slate-700 text-white flex items-center justify-center hover:bg-primary transition-all z-20"
                      >
                        <span className="material-symbols-outlined">chevron_left</span>
                      </button>
                      <button
                        onClick={() => setModalImageIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0))}
                        className="absolute right-4 size-10 rounded-full bg-background-dark/50 backdrop-blur-md border border-slate-700 text-white flex items-center justify-center hover:bg-primary transition-all z-20"
                      >
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark lg:hidden pointer-events-none"></div>
                  {/* Indicadores de carrusel */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {selectedProject.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === modalImageIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/40'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col gap-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-xs font-black uppercase tracking-widest">{selectedProject.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-[#9da9b8] mb-4">Descripción del Proyecto</h4>
                    <p className="text-[#9da9b8] text-lg leading-relaxed">
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-[#9da9b8] mb-4">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-bold text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-auto">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      className="flex-1 flex items-center justify-center gap-2 h-14 bg-primary hover:bg-blue-600 transition-all rounded-xl font-black text-white shadow-xl shadow-primary/20"
                    >
                      <span className="material-symbols-outlined">open_in_new</span>
                      Ver Demo en Vivo
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      className="flex-1 flex items-center justify-center gap-2 h-14 bg-background-dark border border-slate-700 hover:bg-slate-800 transition-all rounded-xl font-black text-white"
                    >
                      <span className="material-symbols-outlined">code</span>
                      Ver Repositorio
                    </a>
                  )}
                </div>
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

export default Portfolio;
