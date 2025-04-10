// components/sections/HowToArrive.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HowToArrive = () => {
  // Función para abrir WhatsApp con el lugar específico como mensaje
  const openWhatsApp = () => {
    // Construir el mensaje con el nombre del lugar
    const message = `Hola, me interesa más información sobre los alojamientos en Trapiche.`;
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    // Construir la URL para WhatsApp
    const whatsappUrl = `https://wa.me/542657218215?text=${encodedMessage}`;
    // Abrir en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="como-llegar" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-trapiche-blue text-sm font-semibold uppercase tracking-wider">Planifica tu viaje</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Cómo Llegar</h2>
            <div className="h-1 w-20 bg-trapiche-blue rounded-full mb-6"></div>

            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="h-8 w-8 rounded-full bg-blue-100 text-trapiche-blue flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                  <p className="text-gray-600">A solo 39 km de la Ciudad de San Luis, en el corazón de las sierras puntanas.</p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="h-8 w-8 rounded-full bg-blue-100 text-trapiche-blue flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.5l4-7a1 1 0 00-.94-1.5H2V4a1 1 0 00-1-1h2zm13.66 7H12v-5h4.66l-3 5z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Acceso en auto</h3>
                  <p className="text-gray-600">Puedes llegar a través de la Ruta Provincial 9 o la Ruta Provincial 20, ambas con excelente estado y señalización.</p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="h-8 w-8 rounded-full bg-blue-100 text-trapiche-blue flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.5l4-7a1 1 0 00-.94-1.5H2V4a1 1 0 00-1-1h2zm13.66 7H12v-5h4.66l-3 5z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Transporte público</h3>
                  <p className="text-gray-600">Servicio regular de colectivos interurbanos desde la Terminal de Ómnibus de San Luis. Consulta los horarios antes de tu visita.</p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="h-8 w-8 rounded-full bg-blue-100 text-trapiche-blue flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Servicios disponibles</h3>
                  <p className="text-gray-600">Estacionamiento gratuito, áreas de camping y diversos alojamientos para todos los gustos y presupuestos.</p>
                </div>
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-trapiche-blue hover:bg-trapiche-blue-dark text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center"
              onClick={openWhatsApp}
            >
              <span>Ver alojamientos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
              <iframe
                title="Mapa de Trapiche"
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53493.36437224799!2d-66.23742465820312!3d-33.12073483400905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43baccfdb5de1%3A0x45d7ac536eed568a!2sEl%20Trapiche%2C%20San%20Luis!5e0!3m2!1ses!2sar!4v1680712339682!5m2!1ses!2sar"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
                <h4 className="font-bold text-trapiche-blue mb-1">Clima actual</h4>
                <div className="flex items-center">
                  <span className="text-3xl mr-2">🌤️</span>
                  <div>
                    <p className="font-bold">23°C</p>
                    <p className="text-sm text-gray-600">Parcialmente nublado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToArrive;