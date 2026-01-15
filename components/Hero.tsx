
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-10 py-20 lg:py-32 flex flex-col items-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center w-full">
        {/* Text Content */}
        <div className="flex flex-col gap-8 flex-1 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-border/50 border border-slate-700 w-fit mx-auto lg:mx-0">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[#9da9b8] text-xs font-bold uppercase tracking-widest">Disponible para trabajar</span>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tighter">
              Aitor <br className="hidden lg:block" /> Montalbán
            </h1>
            <h2 className="text-[#9da9b8] text-xl sm:text-2xl font-medium leading-relaxed max-w-[650px] mx-auto lg:mx-0">
              <span className="text-primary font-bold">Full Stack Web Developer</span> especializado en la creación de aplicaciones robustas con React, Angular, Java y Spring Boot.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#portfolio" className="flex min-w-[160px] items-center justify-center rounded-xl h-14 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all shadow-xl shadow-primary/25 hover:-translate-y-1">
              Ver Proyectos
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
            <a href="#contact" className="flex min-w-[160px] items-center justify-center rounded-xl h-14 px-8 bg-surface-dark border border-surface-border hover:bg-slate-800 text-white text-base font-bold transition-all hover:-translate-y-1">
              Contactar
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-4 pt-10 border-t border-surface-border/50">
            <a href="https://github.com/Aitor-Mont" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <div className="p-3.5 rounded-xl bg-surface-dark group-hover:bg-primary transition-all border border-surface-border">
                <i className="fa-brands fa-github text-white text-xl"></i>
              </div>
            </a>
          </div>
        </div>

        {/* Image Display */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-primary via-purple-500 to-primary shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all duration-500 hover:scale-[1.2] cursor-pointer group">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0f172a] bg-surface-dark relative">
              <img
                src="/archivos/foto profesional.JPG"
                alt="Aitor Montalbán Portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
