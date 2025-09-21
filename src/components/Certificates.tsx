import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface CertificatesProps {
  isDarkMode: boolean;
}

export default function Certificates({ isDarkMode }: CertificatesProps) {
  const certificates = [
    {
      title: "Introduction to Programming with Python",
      issuer: "Samsung",
      date: "Jul, 2025",
      image: "src/public/images/THANARUT RUNGRUANGWISETCHAI - 2025-07-08_page-0001.jpg",
    },
    {
      title: "Customer Service with Python: Build a Chatbot using ChatGPT",
      issuer: "Coursera",
      date: "Apr, 2025",
      image: "src/public/images/Coursera UENCHXP85LLL_page-0001.jpg",
    },
    {
      title: "Basic Cybersecurity",
      issuer: "NCSA Mooc Cyber-Learning",
      date: "Oct, 2024",
      image: "src/public/images/certificate-1650707266_page-0001.jpg",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className={`py-28 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Certificates
          </h2>
          <div className="w-28 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-lg md:text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {certificate.title}
                </h3>
                <p className={`text-sm md:text-base font-medium mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {certificate.issuer}
                </p>
                <div className="flex items-center text-sm md:text-base text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{certificate.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
