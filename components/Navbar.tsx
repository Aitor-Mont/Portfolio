
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Formación académica', href: '#formacion' },
    { name: 'Proyectos Destacados', href: '#portfolio' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-surface-border glass-nav px-4 md:px-10 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">terminal</span>
          </div>
          <h2 className="text-white text-lg font-extrabold leading-tight tracking-tight">Aitor Montalbán</h2>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-6 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="relative text-[#9da9b8] hover:text-primary transition-colors text-sm font-medium group py-1"
                href={link.href}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          <a
            href="/archivos/Curriculum_Full_Stack.pdf"
            download="Curriculum_Full_Stack.pdf"
            className="flex items-center justify-center rounded-full h-11 px-7 bg-primary hover:bg-blue-600 transition-all duration-300 text-white text-sm font-black shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 active:scale-95"
          >
            Descargar CV
            <span className="material-symbols-outlined ml-2 text-[20px]">download</span>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-surface-border p-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-[#9da9b8] hover:text-white text-lg font-medium p-2"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/archivos/Curriculum_Full_Stack.pdf"
            download="Curriculum_Full_Stack.pdf"
            className="w-full mt-4 flex items-center justify-center rounded-xl h-14 bg-primary text-white font-black shadow-xl shadow-primary/30 active:scale-95 transition-all"
          >
            Descargar CV
            <span className="material-symbols-outlined ml-2">download</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
