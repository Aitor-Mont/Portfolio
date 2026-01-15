
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-slate-800 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-white">Aitor Montalbán</h2>
            <p className="text-[#9da9b8] text-sm max-w-sm">Full Stack Web Developer creando experiencias digitales excepcionales. Abierto a nuevas oportunidades.</p>
          </div>

          <a
            href="https://github.com/Aitor-Mont"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-12 rounded-full bg-surface-dark border border-slate-800 text-[#9da9b8] hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </a>

          <p className="text-[#637588] text-xs font-medium mt-4">© 2026 Aitor Montalbán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
