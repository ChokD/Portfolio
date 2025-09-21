import React from 'react';

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "MySQL", "DB Browser"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "RapidMiner", "Power BI"]
    }
  ];

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Skills & Technologies</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}