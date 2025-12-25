
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Foundation from './components/Foundation';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const line = entry.target.querySelector('.line-accent');
          if (line) line.classList.add('active');
        }
      });
    }, observerOptions);

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-fern selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="about" className="reveal transform translate-y-10">
          <About />
        </section>

        <section id="philosophy" className="reveal transform translate-y-10">
          <Philosophy />
        </section>

        <section id="foundation" className="reveal transform translate-y-10">
          <Foundation />
        </section>
      </main>

      <footer id="contact">
        <Contact />
      </footer>
    </div>
  );
};

export default App;
