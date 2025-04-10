// components/layout/Header.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import NavMenu from './NavMenu';

const Header = () => {
  const { scrollY, setScrollY } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollY]);

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
          className="flex items-center space-x-2"
        >
          <span className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 ${
            scrollY > 50 ? 'bg-gradient-to-r from-trapiche-blue to-trapiche-green-light' : 'bg-gradient-to-r from-white to-gray-300'
          }`}>
            Trapiche
          </span>
          <span className={`text-sm font-medium transition-colors duration-300 ${
            scrollY > 50 ? 'text-gray-600' : 'text-white'
          }`}>
            San Luis, Argentina
          </span>
        </motion.div>
        
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;