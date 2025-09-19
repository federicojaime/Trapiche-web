// components/layout/Footer.jsx - Mejorado con redes sociales oficiales
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
// IMPORT DE IMAGEN COMO VARIABLE
import codeoIcon from '../../assets/images/icon.png';

const Footer = () => {
  const { scrollToSection } = useNavigation();
  const currentYear = new Date().getFullYear();

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const message = `¡Hola! Me interesa información sobre El Trapiche. ¿Podrían ayudarme?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5492664891372?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4 flex items-center">
                <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 mr-3">
                  El Trapiche
                </span>
                Turismo
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Descubrí la magia de las sierras puntanas en El Trapiche, San Luis.
                Naturaleza, historia y aventura te esperan en este rincón único de Argentina.
              </p>

              {/* Información de contacto y oficinas */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Oficinas de Turismo</p>
                    <p className="text-sm text-gray-400">2 ubicaciones disponibles</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:secretariadeturismoeltrapiche@gmail.com" className="hover:text-orange-300 transition-colors">
                    secretariadeturismoeltrapiche@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>2664 89-1372</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                  </svg>
                  <button onClick={openWhatsApp} className="hover:text-orange-300 transition-colors">
                    +54 9 2664 89-1372
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6">Enlaces rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('inicio')}
                    className="text-gray-300 hover:text-orange-300 transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Inicio</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('sobre-trapiche')}
                    className="text-gray-300 hover:text-orange-300 transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Sobre El Trapiche</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('destinos')}
                    className="text-gray-300 hover:text-orange-300 transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Destinos</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('actividades')}
                    className="text-gray-300 hover:text-orange-300 transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Actividades</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('galeria')}
                    className="text-gray-300 hover:text-orange-300 transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Galería</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="text-gray-300 hover:text-orange-300 transition-colors flex items-center group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">Contacto</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Redes sociales oficiales */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6">Síguenos en redes</h3>

              {/* Instagram Turismo */}
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/turismo.eltrapiche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-orange-300 transition-colors">@turismo.eltrapiche</p>
                    <p className="text-gray-400 text-sm">Turismo oficial</p>
                  </div>
                </a>

                {/* Instagram Secretaría */}
                <a
                  href="https://www.instagram.com/secretariadeturismoeltrapiche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-orange-300 transition-colors">@secretariadeturismoeltrapiche</p>
                    <p className="text-gray-400 text-sm">Secretaría de Turismo</p>
                  </div>
                </a>

                {/* Facebook Municipalidad */}
                <a
                  href="https://www.facebook.com/munieltrapiche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-orange-300 transition-colors">@munieltrapiche</p>
                    <p className="text-gray-400 text-sm">Municipalidad</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group w-full text-left"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-orange-300 transition-colors">+54 9 2664 89-1372</p>
                    <p className="text-gray-400 text-sm">WhatsApp oficial</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} El Trapiche Turismo - San Luis, Argentina. Todos los derechos reservados.
          </p>

          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Desarrollado por</span>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;