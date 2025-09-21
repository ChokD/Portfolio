import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const projects = [
    {
      title: "MealVault",
      description: "A comprehensive food discovery platform that helps users find recipes based on available ingredients. Features include AI-powered food recommendations, ingredient-based search, and a community-driven approach to meal planning.",
      image: "public/images/Mealvault.png",
      technologies: ["HTML","CSS","JavaScript","React", "Node.js", "AI", "Food API"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "SuperVisionX",
      description: "A deep learning–based waste classification system built with TensorFlow and MobileNetV2. Features include image preprocessing, class label correction, and training enhancements using callbacks such as EarlyStopping and ModelCheckpoint. The system helps identify waste categories more accurately, supporting efficient recycling and waste management.",
      image: "public/images/SuperVision.png",
      technologies: ["Python","TensorFlow","Keras","MobileNetV2","Matplotlib"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "Kanji Game with AI",
      description: "A Kanji and Japanese script learning game built using Python and Tkinter. Features include multiple levels for Kanji, Hiragana, and Katakana, AI-generated hints using Gemini 1.5-flash, timed quizzes, score tracking, and interactive feedback. The game incorporates video and image elements, full-screen support, and user-friendly navigation to enhance learning and engagement.",
      image: "public/images/KanjiGame.png",
      technologies: ["Python","Google Gemini API","Tkinter"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "BU Open House website",
      description: "A simulated university open house website built with HTML, CSS, and JavaScript. Features include schedule display, speaker info, workshop overview, gallery, and a mock registration page, designed to demonstrate website structure and interactive elements.",
      image: "public/images/BU.png",
      technologies: ["HTML","CSS","JavaScript"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "Project BU",
      description: "A university simulation game built in Roblox.",
      image: "public/images/roblox.png",
      technologies: ["Roblox Studio", "Lua"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "UX/UI Design",
      description: "A project planning and UI/UX design process carried out using Figma.",
      image: "public/images/UXUI.png",
      technologies: ["Figma"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>{project.title}</h3>
                <p className={`mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-600'
                }`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        isDarkMode 
                          ? 'bg-teal-900 text-teal-300' 
                          : 'bg-teal-100 text-teal-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-slate-50'
                }`}
              >
                <div className="relative group overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>{project.title}</h4>
                  <p className={`mb-4 leading-relaxed text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-slate-600'
                  }`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded font-medium ${
                          isDarkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-white text-slate-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
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