
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Academic from './components/Academic';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1, // Se activa cuando el 10% de la sección es visible
      rootMargin: '0px 0px -50px 0px' // Margen inferior para que la animación ocurra un poco antes de llegar
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Si queremos que la animación solo ocurra una vez:
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <section id="inicio" className="reveal">
          <Hero />
        </section>
        <section id="skills" className="reveal">
          <Skills />
        </section>
        <section id="formacion" className="reveal">
          <Academic />
        </section>
        <section id="portfolio" className="reveal">
          <Portfolio />
        </section>
        <section id="about" className="reveal">
          <About />
        </section>
        <section id="contact" className="reveal">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
