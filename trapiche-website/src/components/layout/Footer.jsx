// components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../context/NavigationContext';
// IMPORT DE IMAGEN COMO VARIABLE
import codeoIcon from '../../assets/images/icon.png';

const Footer = () => {
  const { scrollToSection } = useNavigation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <svg className="absolute -top-20 -right-20 w-96 h-96 text-white" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg className="absolute -bottom-20 -left-20 w-96 h-96 text-white" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center cursor-pointer" onClick={handleLogoClick}>
                <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 mr-2">
                 El Trapiche
                </span>
                Turismo
              </h3>
              <p className="text-gray-400">
                San Luis, Argentina<br />
                Naturaleza, historia y aventura
              </p>

              <div className="mt-6 flex space-x-4">
                <a href="https://www.instagram.com/secretariadeturismoeltrapiche" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
               
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('inicio')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Inicio</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('sobre-trapiche')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Sobre El Trapiche</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('destinos')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Destinos</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('actividades')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Actividades</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('galeria')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Galería</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Contacto</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="transform transition-transform group-hover:translate-x-1">Mapa turístico</span>
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="transform transition-transform group-hover:translate-x-1">Alojamientos</span>
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="transform transition-transform group-hover:translate-x-1">Restaurantes</span>
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="transform transition-transform group-hover:translate-x-1">Actividades</span>
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="transform transition-transform group-hover:translate-x-1">Eventos</span>
                </a></li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Suscríbete para recibir novedades y promociones de El Trapiche.</p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                  aria-label="Email para suscripción"
                />
                <button className="px-4 py-2 bg-trapiche-blue text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                Al suscribirte, aceptas recibir emails con novedades y ofertas. Puedes darte de baja en cualquier momento.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} El Trapiche Turismo - San Luis, Argentina.</p>

          <div className="flex items-center justify-center mt-2">
            <span className="mr-2">Desarrollado por</span>
            <a
              href="https://codeo.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={codeoIcon}
                alt="Codeo"
                className="h-6 w-auto"
              />
            </a>
          </div>
          
          <div className="mt-4">
            <motion.button
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Volver al portal principal
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;