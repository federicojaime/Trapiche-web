// src/components/ui/AutumnButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AutumnButton = ({ children, primary = false, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(189, 120, 74, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 ${
        primary 
          ? 'bg-autumn-600 hover:bg-autumn-700 text-white' 
          : 'bg-autumn-100 hover:bg-autumn-200 text-autumn-800'
      } font-medium rounded-lg shadow-autumn transition-all duration-300 flex items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AutumnButton;