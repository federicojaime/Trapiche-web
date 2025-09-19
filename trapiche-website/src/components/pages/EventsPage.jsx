// src/components/pages/EventsPage.jsx - Página de Eventos Hermosa
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NavigationProvider } from '../../context/NavigationContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import WhatsAppWidget from '../ui/WhatsAppWidget';

// Datos de eventos
const eventsData = [
  // Septiembre 2025
  {
    id: 1,
    title: "4º Encuentro Regional de Turismo San Luis 2025",
    date: "5 al 7 de Septiembre",
    month: "septiembre",
    year: 2025,
    category: "turismo",
    description: "Encuentro regional que reúne a profesionales del turismo de San Luis para intercambiar experiencias y conocimientos.",
    icon: "🏨",
    color: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    id: 2,
    title: "Rally Argentino – Rally de San Luis",
    date: "5 al 7 de Septiembre",
    month: "septiembre", 
    year: 2025,
    category: "deportes",
    description: "Séptima fecha del Campeonato Argentino Pirelli y Provincial. Emoción y adrenalina en las sierras puntanas.",
    icon: "🏁",
    color: "from-red-500 to-orange-500",
    featured: true
  },
  {
    id: 3,
    title: "La Negra Libre Trail",
    date: "13 y 14 de Septiembre",
    month: "septiembre",
    year: 2025,
    category: "deportes",
    description: "Trail running en Valle de Pancanta y El Trapiche. Distancias: 5K, 10K, 21K + Kids.",
    icon: "🏃‍♀️",
    color: "from-green-500 to-emerald-500",
    featured: false
  },
  {
    id: 4,
    title: "Semana del Estudiante en El Trapiche",
    date: "21 de Septiembre",
    month: "septiembre",
    year: 2025,
    category: "cultural",
    description: "Celebración especial para estudiantes con actividades recreativas y culturales.",
    icon: "🎓",
    color: "from-purple-500 to-pink-500",
    featured: false
  },
  {
    id: 5,
    title: "Feria Internacional de Turismo",
    date: "27 al 30 de Septiembre",
    month: "septiembre",
    year: 2025,
    category: "turismo",
    description: "Participación en la Feria Internacional de Turismo en Buenos Aires.",
    icon: "🌎",
    color: "from-indigo-500 to-blue-500",
    featured: false
  },
  // Octubre 2025
  {
    id: 6,
    title: "Turismo Comunitario: La voz de nuestro paraje",
    date: "2 de Octubre",
    month: "octubre",
    year: 2025,
    category: "educativo",
    description: "Jornada educativa con escuelas generativas rurales promoviendo el turismo comunitario.",
    icon: "🏫",
    color: "from-amber-500 to-yellow-500",
    featured: false
  },
  {
    id: 7,
    title: "Media Maratón El Trapiche",
    date: "5 de Octubre",
    month: "octubre",
    year: 2025,
    category: "deportes",
    description: "Competencia de running con distancias: 21K, 10K, 5K, Adaptado y Kids.",
    icon: "🏃‍♂️",
    color: "from-orange-500 to-red-500",
    featured: true
  },
  // Noviembre 2025
  {
    id: 8,
    title: "Gran Fondo La Florida",
    date: "9 de Noviembre",
    month: "noviembre",
    year: 2025,
    category: "deportes",
    description: "Competencia de Mountainbike, gravel y e-bike con recorridos de 45K y 85K.",
    icon: "🚴‍♀️",
    color: "from-teal-500 to-green-500",
    featured: true
  },
  {
    id: 9,
    title: "Vuelta al Trapiche – 1ra edición",
    date: "15 y 16 de Noviembre",
    month: "noviembre",
    year: 2025,
    category: "deportes",
    description: "Primera edición de este evento deportivo con premios en efectivo.",
    icon: "🏆",
    color: "from-yellow-500 to-orange-500",
    featured: true
  },
  {
    id: 10,
    title: "Desafío Uniendo Diques 2025",
    date: "30 de Noviembre",
    month: "noviembre",
    year: 2025,
    category: "deportes",
    description: "Carrera en equipo de 52K en diferentes modalidades conectando los diques.",
    icon: "🤝",
    color: "from-blue-500 to-purple-500",
    featured: false
  },
  // Diciembre 2025
  {
    id: 11,
    title: "Curso Técnico Nacional en Señalización de Senderos",
    date: "3 al 14 de Diciembre",
    month: "diciembre",
    year: 2025,
    category: "educativo",
    description: "Capacitación profesional con bloques teóricos y prácticas en San Luis y Mendoza.",
    icon: "📚",
    color: "from-emerald-500 to-teal-500",
    featured: false
  },
  // Verano 2026
  {
    id: 12,
    title: "Festival de los Ríos",
    date: "Verano 2026",
    month: "verano",
    year: 2026,
    category: "festival",
    description: "Celebración de la naturaleza acuática de El Trapiche con música y gastronomía.",
    icon: "🎵",
    color: "from-cyan-500 to-blue-500",
    featured: true
  },
  {
    id: 13,
    title: "Festival del Pescador",
    date: "Verano 2026",
    month: "verano",
    year: 2026,
    category: "festival",
    description: "Evento dedicado a la pesca deportiva en La Florida con competencias y talleres.",
    icon: "🎣",
    color: "from-blue-500 to-indigo-500",
    featured: false
  },
  {
    id: 14,
    title: "Festival Música y Río",
    date: "Verano 2026",
    month: "verano",
    year: 2026,
    category: "festival",
    description: "Combinación perfecta de música en vivo y naturaleza a orillas del río.",
    icon: "🎸",
    color: "from-pink-500 to-rose-500",
    featured: true
  },
  // Semana Santa 2026
  {
    id: 15,
    title: "Eventos de Semana Santa",
    date: "Semana Santa 2026",
    month: "semana-santa",
    year: 2026,
    category: "cultural",
    description: "Agenda especial de actividades culturales y religiosas para Semana Santa.",
    icon: "✝️",
    color: "from-purple-500 to-indigo-500",
    featured: false
  },
  // Junio 2026
  {
    id: 16,
    title: "5º Encuentro Nacional de Senderismo",
    date: "Junio 2026",
    month: "junio",
    year: 2026,
    category: "deportes",
    description: "Trekking, caminatas, talleres y capacitaciones. Organizado por Club Andino San Luis y Federación de Andinistas Argentinos.",
    icon: "🥾",
    color: "from-green-500 to-emerald-500",
    featured: true
  }
];

const EventsContent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedMonth, setSelectedMonth] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = eventsData.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'todos' || event.category === selectedCategory;
      const matchesMonth = selectedMonth === 'todos' || event.month === selectedMonth;
      
      return matchesSearch && matchesCategory && matchesMonth;
    });

    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, selectedMonth]);

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🎯', color: 'bg-gray-500' },
    { id: 'deportes', name: 'Deportes', icon: '🏃‍♀️', color: 'bg-red-500' },
    { id: 'festival', name: 'Festivales', icon: '🎵', color: 'bg-pink-500' },
    { id: 'turismo', name: 'Turismo', icon: '🏨', color: 'bg-blue-500' },
    { id: 'cultural', name: 'Cultural', icon: '🎭', color: 'bg-purple-500' },
    { id: 'educativo', name: 'Educativo', icon: '📚', color: 'bg-green-500' }
  ];

  const months = [
    { id: 'todos', name: 'Todos los meses' },
    { id: 'septiembre', name: 'Septiembre 2025' },
    { id: 'octubre', name: 'Octubre 2025' },
    { id: 'noviembre', name: 'Noviembre 2025' },
    { id: 'diciembre', name: 'Diciembre 2025' },
    { id: 'verano', name: 'Verano 2026' },
    { id: 'semana-santa', name: 'Semana Santa 2026' },
    { id: 'junio', name: 'Junio 2026' }
  ];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('todos');
    setSelectedMonth('todos');
  };

  const openWhatsApp = (event) => {
    const message = `Hola, me interesa información sobre el evento "${event.title}" en El Trapiche. ¿Pueden brindarme más detalles?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5492664891372?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const featuredEvents = filteredEvents.filter(event => event.featured);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400 to-red-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-3xl"></div>
      </div>

      <Header />
      
      {/* Hero Section Espectacular */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Fondo con gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 100,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: -100,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="mb-8 text-white/80 hover:text-white flex items-center transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block text-6xl md:text-8xl mb-4">🎉</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-pink-100 mb-6 leading-tight">
              Eventos 2025-2026
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto">
              Descubrí la agenda completa de eventos deportivos, culturales y festivales que hacen vibrar El Trapiche
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm md:text-base">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <span className="mr-2">🏃‍♀️</span>
                Eventos deportivos
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <span className="mr-2">🎵</span>
                Festivales
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <span className="mr-2">🎭</span>
                Cultura y educación
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eventos Destacados */}
      {featuredEvents.length > 0 && (
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full mb-4">
                ⭐ Destacados
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">No te los puedes perder</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Los eventos más esperados de la temporada</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.slice(0, 6).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">{event.icon}</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                        DESTACADO
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 leading-tight">{event.title}</h3>
                    <p className="text-blue-600 font-medium mb-3">{event.date}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openWhatsApp(event)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                      </svg>
                      Más información
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtros y Búsqueda */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-6">
          {/* Buscador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all text-lg bg-white/80 backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Categorías */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Categorías</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg transform scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Meses y controles */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            >
              {months.map((month) => (
                <option key={month.id} value={month.id}>{month.name}</option>
              ))}
            </select>

            {/* Toggle vista y limpiar */}
            <div className="flex items-center gap-3">
              <div className="flex bg-white rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white shadow' : 'text-gray-600'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white shadow' : 'text-gray-600'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {(searchTerm || selectedCategory !== 'todos' || selectedMonth !== 'todos') && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearFilters}
                  className="px-4 py-2 text-red-600 hover:text-red-800 text-sm flex items-center bg-white rounded-lg shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Limpiar filtros
                </motion.button>
              )}
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mt-4 text-center"></div>