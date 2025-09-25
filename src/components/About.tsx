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
        <div className="text-center mb-12">
          <Reveal>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>About Me</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mb-8"></div>
          </Reveal>
        </div>

        {/* Two-column content area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          <Reveal>
            <aside className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl p-6 shadow-sm ring-1 ${isDarkMode ? 'ring-gray-700' : 'ring-slate-200'} h-full`}>
              <div className="flex flex-col items-center justify-center text-center h-full gap-4">
                <div className="w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-2 ring-sky-400/40 shadow-lg">
                  <img src="/images/me0.png" alt="Thanarut" className="w-full h-full object-cover" />
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 text-sm font-medium">Thanarut Rungruangwisetchai</span>
              </div>
            </aside>
          </Reveal>

          <div className="md:col-span-2">
            <Reveal delay={120}>
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 lg:p-8 shadow-sm ring-1 ${isDarkMode ? 'ring-gray-700' : 'ring-slate-200'} h-full`}>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  I'm currently learning and building up my skills in web development, artificial intelligence, and UI/UX design. I enjoy exploring new tools and ideas, and I’m always curious to learn about things that spark my interest. I like exploring different areas of technology and discovering new concepts that expand my perspective.
                </p>
                <p className={`text-lg leading-relaxed mt-5 ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  I value teamwork and collaboration, as I believe working with others helps me learn faster, share different perspectives, and build better solutions. I like building projects that encourage collaboration and enjoy connecting with people, exchanging ideas, and learning from others’ experiences.
                </p>
                <p className={`text-lg leading-relaxed mt-5 ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  My goal is to become a developer who can design solutions that are both functional and user-friendly.
                </p>
              </div>
            </Reveal>
          </div>
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