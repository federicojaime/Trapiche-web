// src/components/pages/LandingPage.jsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// IMPORTES DE IMÁGENES COMO VARIABLES
import heroImage from '../../assets/images/panoramica.jpg';

const LandingPage = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  const handleTuristaClick = () => {
    navigate('/turismo');
  };

  const handleVecinoClick = () => {
    navigate('/vecino');
  };

  useEffect(() => {
    const handleParallax = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Imagen de fondo con parallax - USANDO VARIABLE IMPORTADA */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Overlay más sofisticado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Elementos decorativos compactos */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Partículas flotantes más discretas */}
      <div className="absolute top-20 left-20 text-2xl animate-pulse opacity-60">🏔️</div>
      <div className="absolute bottom-32 right-32 text-3xl animate-bounce opacity-50" style={{ animationDelay: '1s' }}>🌲</div>
      <div className="absolute top-1/4 right-20 text-xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}>💧</div>
      <div className="absolute bottom-1/4 left-16 text-2xl animate-bounce opacity-60" style={{ animationDelay: '3s' }}>⛰️</div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo y título principal más compacto */}
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            <div className="mb-4 inline-block">
              <span className="px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                Portal Oficial
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-3 md:mb-4 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-green-200 drop-shadow-2xl">
                El Trapiche
              </span>
            </h1>
            
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-16 md:w-24"></div>
              <span className="px-3 text-lg md:text-xl">📍</span>
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-16 md:w-24"></div>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 font-light tracking-wide">
              San Luis, Argentina
            </p>
          </motion.div>

          {/* Descripción más compacta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 md:mb-12"
          >
            <p className="text-lg md:text-xl text-white/90 mb-3 md:mb-4 max-w-2xl mx-auto leading-relaxed font-light">
              Bienvenido al portal oficial de El Trapiche
            </p>
            <p className="text-base md:text-lg text-blue-200 max-w-xl mx-auto leading-relaxed">
              Elegí tu perfil para acceder a la información que necesitás
            </p>
          </motion.div>

          {/* Opciones principales más compactas */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
            {/* Opción Turista */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 2,
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTuristaClick}
              className="bg-white/15 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/30 cursor-pointer group hover:bg-white/25 transition-all duration-500 transform-gpu"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <div className="text-5xl md:text-6xl mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                🏔️
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 tracking-tight">
                Soy Turista
              </h2>
              <p className="text-blue-100 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Descubrí todos los destinos, actividades y servicios que El Trapiche tiene para ofrecerte. Planificá tu visita perfecta y viví una experiencia única en las sierras puntanas.
              </p>
              
              <div className="bg-white/10 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between text-white/80 text-xs md:text-sm gap-2 md:gap-0">
                  <span>🗺️ Destinos únicos</span>
                  <span>🏃‍♂️ Actividades</span>
                  <span>📸 Galería</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-blue-200 group-hover:text-white transition-colors font-semibold text-sm md:text-base">
                <span className="mr-3">Explorá destinos</span>
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-all group-hover:translate-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Opción Vecino */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: -2,
                boxShadow: "0 20px 40px -12px rgba(34, 197, 94, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVecinoClick}
              className="bg-white/15 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/30 cursor-pointer group hover:bg-white/25 transition-all duration-500 transform-gpu"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <div className="text-5xl md:text-6xl mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                🏛️
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 tracking-tight">
                Soy Vecino
              </h2>
              <p className="text-green-100 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Accedé a servicios municipales, trámites online, noticias locales y toda la información para la comunidad. Tu portal ciudadano digital.
              </p>

              <div className="bg-white/10 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between text-white/80 text-xs md:text-sm gap-2 md:gap-0">
                  <span>📋 Trámites</span>
                  <span>📰 Noticias</span>
                  <span>📞 Contacto</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-green-200 group-hover:text-white transition-colors font-semibold text-sm md:text-base">
                <span className="mr-3">Portal ciudadano</span>
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-all group-hover:translate-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Información adicional más compacta */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
              <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6 font-medium">
                Portal Oficial de El Trapiche - San Luis, Argentina
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-white/80">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center bg-white/10 rounded-lg p-3 md:p-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium">2000</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center bg-white/10 rounded-lg p-3 md:p-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium">secretariadeturismoeltrapiche@gmail.com</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center bg-white/10 rounded-lg p-3 md:p-4 md:col-span-1 col-span-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium">A 39km de San Luis Capital</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;