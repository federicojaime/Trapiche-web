import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente principal
const TrapicheWebsite = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para controlar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lugares de Trapiche
  const lugares = [
    {
      id: 'florida',
      nombre: 'Dique La Florida',
      descripcion: 'Majestuoso espejo de agua rodeado por cerros, miradores y un increíble sistema de puentes y murallas.',
      icono: '🌊',
      color: 'bg-blue-600'
    },
    {
      id: 'riogrande',
      nombre: 'Dique Río Grande',
      descripcion: 'Inaugurado en 1997, contiene las aguas del Rio Grande con miradores que brindan incomparables vistas.',
      icono: '🏞️',
      color: 'bg-emerald-600'
    },
    {
      id: 'siete-cajones',
      nombre: 'Siete Cajones',
      descripcion: 'Profundos pozos entre rocas, formados por la erosión del río a través del tiempo.',
      icono: '🪨',
      color: 'bg-amber-600'
    },
    {
      id: 'riocito',
      nombre: 'Riocito',
      descripcion: 'Arroyo de cálidas y cristalinas aguas que le da nombre al paraje. Zona de canteras de lajas.',
      icono: '💧',
      color: 'bg-cyan-600'
    },
    {
      id: 'paso-del-rey',
      nombre: 'Paso del Rey',
      descripcion: 'Conserva las ruinas de la capilla más antigua de San Luis, declarada Monumento Histórico Nacional.',
      icono: '⛪',
      color: 'bg-yellow-600'
    },
    {
      id: 'los-tapiales',
      nombre: 'Los Tapiales',
      descripcion: 'Monumento a Juan Pascual Pringles, héroe puntano que participó en la gesta libertadora.',
      icono: '🏛️',
      color: 'bg-red-600'
    }
  ];

  // Lista de actividades imperdibles
  const imperdibles = [
    'Recorrer el Circuito de Turismo Religioso',
    'Excursión a los Saltos de Agua como la Negra Libre y la Escalerilla',
    'Practicar actividades Náuticas en el Dique La Florida',
    'Asistir a los Festivales de Verano',
    'Visitar el Paseo Artesanal Martín Grillo',
    'Ecoturismo: Estación de Piscicultura y Reserva Florofaunística',
    'Sacarte fotos en los Miradores panorámicos',
    'Descubrir rincones tranquilos en las Sierras de San Luis'
  ];

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Barra de navegación */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
              Trapiche
            </span>
            <span className="text-sm font-medium text-gray-600">San Luis, Argentina</span>
          </motion.div>
          
          {/* Menú para escritorio */}
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Destinos', 'Actividades', 'Galería', 'Contacto'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-medium ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </motion.button>
            ))}
          </div>
          
          {/* Menú móvil */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Menú móvil expandido */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 overflow-hidden md:hidden"
          >
            <div className="py-4 px-6 flex flex-col space-y-4">
              {['Inicio', 'Destinos', 'Actividades', 'Galería', 'Contacto'].map((item) => (
                <button
                  key={item}
                  className={`font-medium text-left py-2 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/api/placeholder/1920/1080')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Trapiche, San Luis
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Naturaleza, historia y aventura en un solo lugar
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center"
              >
                <span>Explorar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center"
              >
                Ver video
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Acerca de Trapiche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Conocé Trapiche</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Su nombre proviene de la actividad minera que marcó el origen del pueblo: un antiguo molino ("trapiche") utilizado para pulverizar oro extraído en La Carolina.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hoy, este rincón serrano se transformó en uno de los destinos turísticos más elegidos de San Luis por su combinación perfecta de ríos cristalinos, diques majestuosos, historia y paisajes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lugares para visitar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lugares para Visitar</h2>
            <p className="text-lg text-gray-700">
              Descubre los tesoros naturales e históricos que hacen de Trapiche un lugar único.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lugares.map((lugar, index) => (
              <motion.div
                key={lugar.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`h-3 ${lugar.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{lugar.icono}</span>
                    <h3 className="text-xl font-bold">{lugar.nombre}</h3>
                  </div>
                  <p className="text-gray-600">{lugar.descripcion}</p>
                  
                  <button className="mt-6 inline-flex items-center text-blue-600 font-medium">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Imperdibles */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Imperdibles del Trapiche</h2>
            <p className="text-lg opacity-90">
              Experiencias que no te puedes perder durante tu visita.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {imperdibles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start">
                  <span className="text-green-300 mr-3">✅</span>
                  <p className="text-white/90">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo llegar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cómo Llegar</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>A solo 39 km de la Ciudad de San Luis</span>
                </li>
                <li className="flex items-center">
                  <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.5l4-7a1 1 0 00-.94-1.5H2V4a1 1 0 00-1-1h2zm13.66 7H12v-5h4.66l-3 5z" />
                    </svg>
                  </span>
                  <span>Acceso por RP 9 o RP 20</span>
                </li>
                <li className="flex items-center">
                  <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.5l4-7a1 1 0 00-.94-1.5H2V4a1 1 0 00-1-1h2zm13.66 7H12v-5h4.66l-3 5z" />
                    </svg>
                  </span>
                  <span>Servicio de colectivos interurbanos</span>
                </li>
                <li className="flex items-center">
                  <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </span>
                  <span>Estacionamiento, camping y alojamientos disponibles</span>
                </li>
              </ul>
              
              <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center">
                <span>Ver alojamientos</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Mapa de ubicación</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Galería de imágenes</h2>
            <p className="text-lg text-gray-700">
              Explora la belleza de Trapiche a través de nuestras imágenes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="overflow-hidden rounded-lg shadow-md aspect-square relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Trapiche {item}</span>
                </div>
                <img 
                  src={`/api/placeholder/600/600`} 
                  alt={`Trapiche imagen ${item}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 inline-flex items-center"
            >
              <span>Ver todas las fotos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                ¿Tienes alguna pregunta? No dudes en contactarnos.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-blue-50 rounded-xl p-6"
              >
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Escríbenos con tus consultas</p>
                <a href="mailto:info@trapiche.tur.ar" className="text-blue-600 font-medium hover:underline">info@trapiche.tur.ar</a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blue-50 rounded-xl p-6"
              >
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                <p className="text-gray-600 mb-4">Llámanos de lunes a viernes</p>
                <p className="text-blue-600 font-medium">2664452000</p>
                <p className="text-blue-600 font-medium mt-1">WhatsApp: 2664891372</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-50 rounded-xl p-6"
              >
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Oficina de Turismo</h3>
                <p className="text-gray-600 mb-4">Visítanos en Trapiche</p>
                <a href="https://g.co/kgs/ncRLhxo" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline block mb-2">Oficina 1</a>
                <a href="https://g.co/kgs/1U2SVjX" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">Oficina 2</a>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold mb-6">Síguenos en redes sociales</h3>
              
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://www.instagram.com/secretariadeturismoeltrapiche"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-12 w-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-12 w-12 bg-blue-600 text-white rounded-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-12 w-12 bg-sky-500 text-white rounded-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-12 w-12 bg-red-600 text-white rounded-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Trapiche Turismo</h3>
              <p className="text-gray-400">
                San Luis, Argentina<br />
                Naturaleza, historia y aventura
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Destinos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Actividades</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Galería</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mapa turístico</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Alojamientos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Restaurantes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Actividades</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eventos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Suscríbete para recibir novedades y promociones.</p>
              
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Trapiche Turismo - San Luis, Argentina. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrapicheWebsite;