import { Github, Linkedin, ArrowDown } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-[80vh] md:min-h-screen flex items-center relative transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
        : 'bg-gradient-to-r from-sky-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Section - Text and Buttons */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8 max-w-xl">
            <div>
              <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">Chokdee</span>
              </h1>
              <p className={`text-lg leading-relaxed max-w-lg ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm currently learning and building up my skills in web development, artificial intelligence, and UI/UX design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg font-medium hover:from-sky-600 hover:to-sky-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View My Work
              </button>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/ChokD" target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-all duration-200 ${
                isDarkMode ? 'text-gray-400 hover:text-sky-400' : 'text-gray-400 hover:text-sky-600'
              }`}>
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/thanarut-rungruangwisetchai-285465328/" target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-all duration-200 ${
                isDarkMode ? 'text-gray-400 hover:text-sky-400' : 'text-gray-400 hover:text-sky-600'
              }`}>
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-56 sm:w-64 md:w-72 lg:w-[24rem] aspect-[3/4] rounded-2xl ring-1 ring-sky-200/60 shadow-lg overflow-hidden bg-white">
              <img 
                src="/images/thanarut.JPG" 
                alt="Thanarut Rungruangwisetchai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('#about')}
            className={`animate-bounce ${
              isDarkMode ? 'text-gray-400 hover:text-sky-400' : 'text-gray-400 hover:text-sky-600'
            }`}
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}