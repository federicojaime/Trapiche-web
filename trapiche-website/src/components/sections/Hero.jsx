// Modificación de components/sections/Hero.jsx con tema invernal y rutas corregidas
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import WinterButton from '../ui/WinterButton';
import FallingSnow from '../ui/FallingSnow';
// Importa las imágenes directamente
import heroAutumnImg from '../../assets/images/hero-autumn.jpg';

const Hero = () => {
  const { scrollToSection } = useNavigation();
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section 
      id="inicio"
      className="relative h-screen overflow-hidden"
    >
      {/* Imagen de fondo con parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroAutumnImg})`,
          height: '120%',
          top: '-10%'
        }}
      />
      
      {/* Overlay con gradiente invernal */}
      <div className="absolute inset-0 bg-gradient-to-b from-winter-900/60 via-ice-800/50 to-winter-900/70"></div>
      
      {/* Nieve cayendo */}
      <FallingSnow />
      
      {/* Contenido principal */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="px-4 py-1 bg-ice-500 text-white rounded-full text-sm font-medium inline-flex items-center mb-4">
              <span className="mr-1">❄️</span>
              Invierno en San Luis
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-display">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="block"
            >
              El Trapiche,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-ice-300 to-snow-200"
            >
              San Luis
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl text-ice-100 mb-8 font-light max-w-xl"
          >
            Descubrí la magia del invierno en nuestras sierras. Paisajes serenos, aire puro y la tranquilidad única de la estación más contemplativa del año.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <WinterButton
              primary
              onClick={() => scrollToSection('destinos')}
            >
              <span>Explorar destinos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </WinterButton>
            
            <WinterButton
              onClick={() => scrollToSection('galeria')}
            >
              <span>Ver galería</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </WinterButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-10 h-10 text-ice-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
      
      {/* Decoración invernal esquina */}
      <div className="absolute top-0 right-0 w-50 h-50 opacity-60 pointer-events-none">
        <div className="text-6xl text-ice-200 animate-shimmer">❄️</div>
      </div>
    </section>
  );
};

export default Hero;