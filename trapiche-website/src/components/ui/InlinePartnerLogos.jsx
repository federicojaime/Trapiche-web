// src/components/ui/InlinePartnerLogos.jsx - DOS LOGOS GRANDES RESPONSIVE CON SOMBRA
import React from 'react';
import { motion } from 'framer-motion';

// IMPORTS DE LOGOS PNG desde assets
import municipalidadLogo from '../../assets/images/logo-blanco.png';
import turismoLogo from '../../assets/images/intendente-logo.png';

const PartnerLogosReal = () => {
  return (
    <section className="py-8 sm:py-12" style={{ backgroundColor: '#224676' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          
          {/* Contenedor de logos grandes */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 w-full">
            
            {/* Logo 1 - Municipalidad GRANDE SIN CUADRADO */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <img
                src={municipalidadLogo}
                alt="Municipalidad"
                className="h-20 sm:h-32 lg:h-40 w-auto object-contain transition-all duration-300"
                style={{ 
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))' 
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden items-center justify-center h-20 sm:h-32 lg:h-40">
                <span className="text-6xl sm:text-7xl lg:text-8xl" style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))' }}>🏛️</span>
              </div>
            </motion.div>
            
            {/* Logo 2 - Turismo GRANDE SIN CUADRADO */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <img
                src={turismoLogo}
                alt="Secretaría de Turismo"
                className="h-20 sm:h-32 lg:h-40 w-auto object-contain transition-all duration-300"
                style={{ 
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))' 
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden items-center justify-center h-20 sm:h-32 lg:h-40">
                <span className="text-6xl sm:text-7xl lg:text-8xl" style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))' }}>🌄</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogosReal;