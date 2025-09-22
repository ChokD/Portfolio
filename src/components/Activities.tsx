import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface ActivitiesProps {
  isDarkMode: boolean;
}

export default function Activities({ isDarkMode }: ActivitiesProps) {
  const activities = [
    {
      title: "International Program KAIT x BU 2025",
      image: "/images/KAITxBU.JPG",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "BU Loy Krathong 2024",
      image: "/images/LoyKrathong.png",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Orientation BUITI 2023",
      image: "/images/Orientation.jpg",
      color: "from-green-500 to-green-700"
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const openImage = (src: string, alt: string) => {
    setModalSrc(src);
    setModalAlt(alt);
    setIsModalOpen(true);
  };

  const closeImage = () => setIsModalOpen(false);

  return (
    <section id="activities" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-sky-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Activities
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 mx-auto"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Image with Gradient Overlay */}
              <button onClick={() => openImage(activity.image, activity.title)} className="block w-full text-left">
                <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </button>

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
      <ImageModal isOpen={isModalOpen} src={modalSrc} alt={modalAlt} onClose={closeImage} />
    </section>
  );
}
