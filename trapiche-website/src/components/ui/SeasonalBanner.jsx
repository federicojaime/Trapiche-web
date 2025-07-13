// src/components/ui/SeasonalBanner.jsx - Banner promocional de invierno
import React from 'react';
import { motion } from 'framer-motion';

const SeasonalBanner = () => {
  const openWhatsApp = () => {
    const message = `Hola, me interesa más información sobre el invierno en El Trapiche.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/542657218215?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-gradient-to-r from-ice-500 to-winter-600 text-white py-3 px-4 fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-2">❄️</span>
          <p className="text-sm md:text-base">
            <span className="font-bold">Temporada de Invierno 2025</span> - Ofertas especiales en alojamientos y actividades
          </p>
        </div>

        <motion.button
          onClick={openWhatsApp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xs md:text-sm bg-white text-ice-600 px-3 py-1 rounded-full font-medium hover:bg-snow-50 transition-colors"
        >
          Ver ofertas
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SeasonalBanner;