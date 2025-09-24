import React from 'react';
import Reveal from './Reveal';
import { Code, Palette, BookOpen, Users } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building robust web applications with modern technologies and best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that delight users"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and improve my skills through practice and study"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams to deliver high-quality products on time"
    }
  ];

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-sky-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>About Me</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mb-8"></div>
          </Reveal>
          <Reveal delay={200}>
            <p className={`text-base sm:text-lg font-semibold mb-6`}>
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                Thanarut Rungruangwisetchai
              </span>
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-slate-600'
            }`}>
              I'm currently learning and building up my skills in web development, artificial intelligence, and UI/UX design. I enjoy creating projects that combine creativity with technology, and I’m always curious to explore new tools and ideas. I also value teamwork and collaboration, as I believe working with others helps me learn faster, share different perspectives, and build better solutions. My goal is to become a developer who can design solutions that are both functional and user-friendly. Outside of coding, I love learning about different cultures and finding inspiration from design and everyday life.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <div 
                className={`text-center p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-xl' 
                    : 'bg-slate-50 hover:bg-white hover:shadow-xl'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>{feature.title}</h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-600'
                }`}>{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}