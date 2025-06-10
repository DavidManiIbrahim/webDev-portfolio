import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Alex Johnson</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>Designed and developed with modern web technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;