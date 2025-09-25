import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'activities', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-sky-50'}`}
      onMouseMove={handleMouseMove}
    >
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <div
          className={`h-full ${isDarkMode ? 'bg-sky-500' : 'bg-sky-600'}`}
          style={{ width: `${scrollProgress}%`, transition: 'width 150ms linear' }}
        />
      </div>
      <Navigation activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* Global mouse-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[10]"
        style={{
          background: mousePos
            ? `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, ${
                isDarkMode ? 'rgba(56, 189, 248, 0.10)' : 'rgba(14, 165, 233, 0.14)'
              }, transparent 60%)`
            : undefined,
          transition: 'background 120ms ease-out'
        }}
      />
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Activities isDarkMode={isDarkMode} />
        <Certificates isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`fixed bottom-6 right-6 z-[60] px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 ${
            isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-slate-800 hover:bg-slate-100'
          }`}
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default App;