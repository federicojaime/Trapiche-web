// components/ui/WhatsAppWidget.jsx - Widget flotante de WhatsApp mejorado
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Número de WhatsApp (formato internacional sin espacios ni guiones)
  const whatsappNumber = '5492664891372';
  
  const openWhatsApp = (message = '') => {
    const defaultMessage = message || `¡Hola! Me interesa información sobre El Trapiche. ¿Podrían ayudarme?`;
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickMessages = [
    { emoji: '🏞️', text: 'Información general', message: '¡Hola! Me gustaría información general sobre El Trapiche.' },
    { emoji: '🏨', text: 'Alojamientos', message: '¡Hola! Busco información sobre alojamientos en El Trapiche.' },
    { emoji: '🎯', text: 'Actividades', message: '¡Hola! Me interesan las actividades disponibles en El Trapiche.' },
    { emoji: '📅', text: 'Reservas', message: '¡Hola! Quiero hacer una reserva para visitar El Trapiche.' }
  ];

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
      {/* Tooltip informativo - Mejorado */}
      <AnimatePresence>
        {showTooltip && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="absolute bottom-20 left-0 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap pointer-events-none border border-gray-700"
          >
            💬 ¿Necesitas ayuda? ¡Contáctanos!
            <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel expandido - Rediseñado */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute bottom-20 left-0 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden min-w-[300px] sm:min-w-[340px]"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
          >
            {/* Header elegante */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>
              
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">El Trapiche Turismo</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-sm text-green-100">Disponible ahora</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-2">
              <div className="px-4 py-3 mb-2">
                <p className="text-gray-600 text-sm font-medium">¿En qué podemos ayudarte?</p>
              </div>
              
              {quickMessages.map((msg, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                  onClick={() => openWhatsApp(msg.message)}
                  className="w-full text-left p-4 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 rounded-2xl transition-all duration-200 flex items-center space-x-4 group mb-1"
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors">
                    <span className="text-lg">{msg.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">{msg.text}</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              ))}
              
              {/* Botón mensaje personalizado */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                onClick={() => openWhatsApp()}
                className="w-full text-left p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-2xl transition-all duration-200 flex items-center space-x-4 group border-t border-gray-100 mt-2"
              >
                <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center transition-colors">
                  <span className="text-lg">✏️</span>
                </div>
                <div className="flex-1">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700">Escribir mensaje personalizado</span>
                </div>
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Footer con número */}
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500">
                📱 +54 9 2664 89-1372
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal mejorado */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => !isExpanded && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 touch-manipulation border-2 border-white/20"
        style={{ 
          boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        {/* Efecto de pulso mejorado */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-400 rounded-2xl"
        />
        
        {/* Contenido del botón */}
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {isExpanded ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
            </svg>
          )}
        </motion.div>

        {/* Indicador de disponibilidad */}
        {!isExpanded && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold shadow-lg"
          >
            !
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;