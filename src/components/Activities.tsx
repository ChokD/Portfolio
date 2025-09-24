import { useState } from 'react';
import ImageModal from './ImageModal';
import Reveal from './Reveal';

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
          <Reveal>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Activities
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 mx-auto"></div>
          </Reveal>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <Reveal key={index} delay={index * 120}>
              <div 
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
            </Reveal>
          ))}
        </div>
      </div>
      {/* Auto-sliding gallery with hover caption */}
      <ActivitiesShowcase isDarkMode={isDarkMode} openImage={openImage} />
      <ImageModal isOpen={isModalOpen} src={modalSrc} alt={modalAlt} onClose={closeImage} />
    </section>
  );
}

interface ActivitiesShowcaseProps {
  isDarkMode: boolean;
  openImage: (src: string, alt: string) => void;
}

function ActivitiesShowcase({ isDarkMode, openImage }: ActivitiesShowcaseProps) {
  const slides = [
    { src: '/images/Won_Best_Project-kait.png', caption: 'Best Project – International Program KAIT x BU 2025' },
    { src: '/images/Me1.jpg'},
    { src: '/images/Kait.jpg'},
    // Add more slides as needed
  ];

  if (slides.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className={`max-w-5xl mx-auto rounded-3xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl p-4 sm:p-6`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {slides.map((s, i) => (
            <button key={i} onClick={() => openImage(s.src, s.caption || `Image ${i+1}`)} className="block text-left group">
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden rounded-2xl">
                <img
                  src={s.src}
                  alt={s.caption || `Image ${i+1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          ))}
        </div>
        {slides[0] && slides[0].caption && (
          <div className="mt-5 text-center">
            <span className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-black/60 text-white' : 'bg-slate-900/80 text-white'} backdrop-blur text-sm sm:text-base font-medium shadow`}>
              {slides[0].caption}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
