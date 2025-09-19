// src/components/pages/VecinoPage.jsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// IMPORTES DE IMÁGENES COMO VARIABLES
import heroImage from '../../assets/images/panoramica.jpg';
import codeoIcon from '../../assets/images/icon.png';

const VecinoPage = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  const handleBackToHome = () => {
    navigate('/');
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
      
      {/* Overlay más elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-indigo-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Elementos decorativos compactos */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      {/* Header con navegación mejorado y compacto */}
      <header className="relative z-20 p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
          <motion.button
            onClick={handleBackToHome}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-white hover:text-blue-300 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 border border-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm md:text-base">Volver al inicio</span>
          </motion.button>

          <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 border border-white/20">
            <img
              src={codeoIcon}
              alt="Codeo"
              className="h-5 w-auto md:h-6"
            />
            <span className="text-white font-medium text-xs md:text-sm">Desarrollado por Codeo</span>
          </div>
        </div>
      </header>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo municipal más compacto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl">
              <span className="text-4xl md:text-5xl">🏛️</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-3 md:mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-indigo-200">
                Portal Ciudadano
              </span>
            </h1>
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-16 md:w-20"></div>
              <span className="px-3 md:px-4 text-lg md:text-xl">🏛️</span>
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-16 md:w-20"></div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 font-light">
              Municipalidad de El Trapiche
            </p>
          </motion.div>

          {/* Mensaje principal más compacto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/15 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/30 mb-8 md:mb-12 shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="text-5xl md:text-6xl mb-4 md:mb-6"
            >
              🚧
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Sitio en Construcción
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Estamos trabajando para brindarte la mejor experiencia digital. 
              Muy pronto vas a poder acceder a todos los servicios municipales desde acá.
            </p>

            {/* Barra de progreso más compacta */}
            <div className="bg-white/10 rounded-full h-2 md:h-3 mb-4 md:mb-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ delay: 1, duration: 2 }}
                className="bg-gradient-to-r from-blue-400 to-indigo-500 h-full rounded-full"
              />
            </div>
            <p className="text-blue-200 text-sm md:text-base">75% completado</p>
          </motion.div>

          {/* Características que vendrán - más compacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">📋</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Trámites Online</h3>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed">Realizá gestiones municipales desde tu casa las 24 horas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">📰</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Noticias Locales</h3>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed">Mantente informado sobre tu comunidad y eventos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 md:col-span-1 col-span-1"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">📞</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Contacto Directo</h3>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed">Comunicación directa con el municipio</p>
            </motion.div>
          </motion.div>

          {/* Información de contacto temporal más compacta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Mientras tanto, podés contactarnos por:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-blue-100">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-white/10 rounded-lg p-4 md:p-5"
              >
                <div className="bg-blue-500/20 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">Teléfono</p>
                  <p className="text-blue-200 text-sm md:text-base">2664891372</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-white/10 rounded-lg p-4 md:p-5"
              >
                <div className="bg-green-500/20 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">Email</p>
                  <p className="text-green-200 text-sm md:text-base">secretariadeturismoeltrapiche@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VecinoPage;