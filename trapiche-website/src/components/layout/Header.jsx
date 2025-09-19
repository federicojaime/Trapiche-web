// components/layout/Header.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../context/NavigationContext';
import NavMenu from './NavMenu';

const Header = () => {
  const { scrollY, setScrollY } = useNavigation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollY]);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 ${
            scrollY > 50 ? 'bg-gradient-to-r from-trapiche-blue to-trapiche-green-light' : 'bg-gradient-to-r from-white to-gray-300'
          }`}>
            El Trapiche
          </span>
          <span className={`text-sm font-medium transition-colors duration-300 ${
            scrollY > 50 ? 'text-gray-600' : 'text-white'
          }`}>
            San Luis, Argentina
          </span>
        </motion.div>
        
        <div className="flex items-center space-x-4">
          <NavMenu />
          
          {/* Botón de regreso al inicio */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogoClick}
            className={`hidden md:flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              scrollY > 50 
                ? 'bg-trapiche-blue text-white hover:bg-trapiche-blue-dark' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Inicio
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;