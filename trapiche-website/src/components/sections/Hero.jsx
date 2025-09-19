// components/sections/Hero.jsx - Sin elementos de invierno
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
// Importa el video desde assets
import heroVideo from '../../assets/videos/hero-trapiche.mp4';

const Hero = () => {
  const { scrollToSection } = useNavigation();
  const videoRef = useRef(null);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showPhrases, setShowPhrases] = useState(false);

  // Frases a mostrar
  const phrases = [
    "Donde la tranquilidad encontró su Oasis",
    "Descubrí la magia de las Sierras",
    "Agua, naturaleza y emociones te esperan"
  ];

  useEffect(() => {
    // Configurar el video para que sea silencioso y en loop
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
    }
  }, []);

  useEffect(() => {
    let phrasesTimer, phraseInterval;

    // Delay inicial de 4 segundos antes de empezar las frases
    const initialDelay = setTimeout(() => {
      setShowPhrases(true);
      
      // Mostrar frases por 18 segundos (3 frases x 6 segundos), luego ocultarlas
      phrasesTimer = setTimeout(() => {
        setShowPhrases(false);
      }, 18000);

      // Cambiar entre frases cada 6 segundos
      phraseInterval = setInterval(() => {
        setCurrentPhrase(prev => (prev + 1) % phrases.length);
      }, 6000);
    }, 4000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(phrasesTimer);
      clearInterval(phraseInterval);
    };
  }, [phrases.length]);

  return (
    <section 
      id="inicio"
      className="relative h-screen overflow-hidden"
    >
      {/* Video de fondo */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={heroVideo} type="video/mp4" />
        {/* Fallback para navegadores que no soportan video */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-green-800"></div>
      </video>
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      
      {/* Overlay para frases - se oculta después de las frases */}
      <AnimatePresence>
        {showPhrases && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center z-30"
          >
            <div className="text-center px-4 sm:px-6 max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentPhrase}
                  initial={{ 
                    opacity: 0, 
                    y: 50, 
                    scale: 0.8,
                    rotateX: -15,
                    filter: "blur(10px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateX: 0,
                    filter: "blur(0px)"
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -50, 
                    scale: 1.2,
                    rotateX: 15,
                    filter: "blur(10px)"
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeOut",
                    opacity: { duration: 1.2 },
                    filter: { duration: 1.0 }
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-100 leading-tight px-4 drop-shadow-2xl"
                  style={{
                    textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(59,130,246,0.3)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <motion.span
                    animate={{ 
                      textShadow: [
                        '0 0 30px rgba(255,255,255,0.5)',
                        '0 0 60px rgba(255,255,255,0.8)', 
                        '0 0 30px rgba(255,255,255,0.5)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {phrases[currentPhrase]}
                  </motion.span>
                </motion.h2>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Contenido principal - aparece después de las frases */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showPhrases ? 0 : 1 }}
        transition={{ duration: 1, delay: showPhrases ? 0 : 1 }}
        className="container mx-auto px-4 sm:px-6 h-full flex items-center relative z-20"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showPhrases ? 0 : 1, y: showPhrases ? 30 : 0 }}
            transition={{ duration: 0.8, delay: showPhrases ? 0 : 1.5 }}
            className="mb-4 sm:mb-6"
          >
            <span className="px-3 py-1 sm:px-4 sm:py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs sm:text-sm font-medium inline-flex items-center mb-3 sm:mb-4">
              <span className="mr-1">🏔️</span>
              San Luis, Argentina
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showPhrases ? 0 : 1, y: showPhrases ? 30 : 0 }}
            transition={{ duration: 0.8, delay: showPhrases ? 0 : 1.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 font-display leading-tight"
          >
            <span className="block">El Trapiche</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-green-200">
              Turismo
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showPhrases ? 0 : 1, y: showPhrases ? 30 : 0 }}
            transition={{ duration: 0.8, delay: showPhrases ? 0 : 1.9 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 font-light max-w-xl leading-relaxed"
          >
            Naturaleza, historia y aventura en las sierras puntanas. Un destino que conecta tu alma con la tranquilidad.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showPhrases ? 0 : 1, y: showPhrases ? 30 : 0 }}
            transition={{ duration: 0.8, delay: showPhrases ? 0 : 2.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center group w-full sm:w-auto justify-center sm:justify-start"
              onClick={() => scrollToSection('destinos')}
            >
              <span>Explorar Experiencias</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center group w-full sm:w-auto justify-center sm:justify-start backdrop-blur-sm"
              onClick={() => scrollToSection('galeria')}
            >
              <span>Ver galería</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator - solo aparece cuando no se muestran las frases */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showPhrases ? 0 : 1 }}
        transition={{ duration: 1, delay: showPhrases ? 0 : 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;