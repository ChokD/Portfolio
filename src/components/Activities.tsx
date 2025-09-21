import React from 'react';

interface ActivitiesProps {
  isDarkMode: boolean;
}

export default function Activities({ isDarkMode }: ActivitiesProps) {
  const activities = [
    {
      title: "International Program KAIT x BU 2025",
      image: "src/public/images/KAITxBU.JPG",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "BU Loy Krathong 2024",
      image: "src/public/images/LoyKrathong.png",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Orientation BUITI 2023",
      image: "src/public/images/Orientation.jpg",
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <section id="activities" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Activities
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Image with Gradient Overlay */}
              <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {activity.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
