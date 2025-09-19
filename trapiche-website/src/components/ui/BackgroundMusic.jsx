// components/ui/BackgroundMusic.jsx - Control de música de fondo
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Importa el archivo de música
import backgroundMusic from '../../assets/audio/background-music.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControl, setShowControl] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Configurar audio
      audio.volume = 0.15; // Volumen bajo (15%)
      audio.loop = true;
      
      // Mostrar control después de 2 segundos
      const showTimer = setTimeout(() => {
        setShowControl(true);
      }, 2000);

      // Intentar reproducir inmediatamente cuando el componente se monta
      const startAudio = () => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              // Remover listener después del primer éxito
              document.removeEventListener('click', startAudio);
              document.removeEventListener('touchstart', startAudio);
            })
            .catch(error => {
              console.log("Autoplay prevented, esperando interacción:", error);
            });
        }
      };

      // Intentar autoplay inmediato
      startAudio();

      // Si no funciona, esperar primera interacción del usuario
      document.addEventListener('click', startAudio, { once: true });
      document.addEventListener('touchstart', startAudio, { once: true });

      return () => {
        clearTimeout(showTimer);
        document.removeEventListener('click', startAudio);
        document.removeEventListener('touchstart', startAudio);
      };
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.log("Play error:", error));
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        playsInline
      >
        <source src={backgroundMusic} type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      {/* Control flotante - Optimizado para móvil */}
      <AnimatePresence>
        {showControl && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2"
          >
            {/* Botón play/pause - Más grande para móvil */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-black/40 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 shadow-lg touch-manipulation"
              title={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </motion.button>

            {/* Botón mute/unmute - Más grande para móvil */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-black/40 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 shadow-lg touch-manipulation"
              title={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.82L4.29 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.29l4.093-3.82a1 1 0 011.617.82zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.82L4.29 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.29l4.093-3.82a1 1 0 011.617.82zM12 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm4-1a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              )}
            </motion.button>

            {/* Indicador de volumen - Oculto en móvil para ahorrar espacio */}
            {isPlaying && !isMuted && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="hidden sm:flex flex-col items-center"
              >
                <div className="flex space-x-0.5 mb-1">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      animate={{
                        height: [4, 8, 4],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: bar * 0.1
                      }}
                      className="w-1 bg-white rounded-full"
                    />
                  ))}
                </div>
                <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                  🎵
                </span>
              </motion.div>
            )}

            {/* Indicador simple para móvil */}
            {isPlaying && !isMuted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="sm:hidden absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full shadow-lg"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundMusic;