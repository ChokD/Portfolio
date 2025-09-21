import React from 'react';

interface EducationProps {
  isDarkMode: boolean;
}

export default function Education({ isDarkMode }: EducationProps) {
  const educationData = [
    {
      title: "Bangkok University",
      institution: "Bachelor of Computer Science",
      period: "2022 - present",
      side: "left"
    },
    {
      title: "Saipanya Rangsit school",
      institution: "Highschool",
      period: "2020 - 2022",
      side: "right"
    },
    {
      title: "Saipanya Rangsit school",
      institution: "Middle school",
      period: "2016 - 2019",
      side: "left"
    },
    {
      title: "Pattana Wittaya School",
      institution: "Primary school",
      period: "2007 - 2016",
      side: "right"
    }
  ];

  return (
    <section id="education" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Education</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full z-10"></div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${item.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                  <div className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                  }`}>
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>{item.title}</h3>
                    <p className={`font-medium mb-2 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>{item.institution}</p>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
