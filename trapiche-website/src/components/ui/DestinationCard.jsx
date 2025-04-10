// Modificación de components/ui/DestinationCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ lugar, index }) => {
  // Mapa de colores otoñales para cada tipo de lugar
  const autumnColorMap = {
    'diques': 'bg-forest-600',
    'naturaleza': 'bg-autumn-600',
    'historico': 'bg-maple-600',
  };

  const autumnColor = autumnColorMap[lugar.categoria] || 'bg-autumn-600';

  // Función para abrir WhatsApp con el lugar específico como mensaje
  const openWhatsApp = () => {
    // Construir el mensaje con el nombre del lugar
    const message = `Hola, me interesa más información sobre ${lugar.nombre} en Trapiche.`;
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    // Construir la URL para WhatsApp
    const whatsappUrl = `https://wa.me/542657218215?text=${encodedMessage}`;
    // Abrir en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(189, 120, 74, 0.25)" }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 border border-autumn-100"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}src/assets/images/${lugar.id}-autumn.jpg)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-autumn-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 flex items-center">
          <span className="text-3xl mr-3">{lugar.icono}</span>
          <h3 className="text-xl font-bold text-white">{lugar.nombre}</h3>
        </div>
        <div className={`absolute top-0 right-0 w-20 h-6 ${autumnColor} rounded-bl-lg flex items-center justify-center`}>
          <span className="text-white text-xs font-medium">Destacado</span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{lugar.descripcion}</p>

        <motion.button
          onClick={openWhatsApp}
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-autumn-600 font-medium group"
        >
          Saber más
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DestinationCard;