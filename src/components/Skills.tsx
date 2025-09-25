// no-op
import Reveal from './Reveal';

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "MySQL", "DB Browser"]
    },
    {
      title: "Tools & Others",
      skills: ["Git/Github", "VS Code", "Figma", "Draw.io", "RapidMiner", "Power BI"]
    }
  ];

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Skills & Technologies</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="w-28 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 mx-auto mb-8 rounded"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={categoryIndex} delay={categoryIndex * 120}>
              <div className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ${
                isDarkMode ? 'bg-gray-800 ring-gray-700' : 'bg-white ring-slate-200'
              }`}>
                <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  <span className="inline-block w-2 h-2 rounded-full bg-sky-500"></span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3.5 py-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}