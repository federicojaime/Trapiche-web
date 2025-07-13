// src/components/ui/WinterButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const WinterButton = ({ children, primary = false, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 ${
        primary 
          ? 'bg-ice-600 hover:bg-ice-700 text-white' 
          : 'bg-snow-100 hover:bg-snow-200 text-winter-800'
      } font-medium rounded-lg shadow-winter transition-all duration-300 flex items-center group ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default WinterButton;