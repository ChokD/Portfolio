import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`py-12 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-sky-100 text-slate-800'
    }`}>
      <div>
          <p className={`flex items-center justify-center space-x-1 ${
            isDarkMode ? 'text-gray-300' : 'text-slate-600'
          }`}>
            <span>© {new Date().getFullYear()} By Thanarut Rungruangwisetchai</span>
          </p>
        </div>
    </footer>
  );
}