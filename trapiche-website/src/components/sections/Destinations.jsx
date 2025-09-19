// components/sections/Destinations.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from '../ui/DestinationCard';

const Destinations = () => {
    const [activeTab, setActiveTab] = useState('todos');

    const lugares = [
        {
            id: 'florida',
            nombre: 'Dique La Florida',
            descripcion: 'Majestuoso espejo de agua rodeado por cerros, miradores y un increíble sistema de puentes y murallas.',
            icono: '🌊',
            color: 'bg-blue-600',
            categoria: 'diques'
        },
        {
            id: 'riogrande',
            nombre: 'Dique Río Grande',
            descripcion: 'Inaugurado en 1997, contiene las aguas del Rio Grande con miradores que brindan incomparables vistas.',
            icono: '🏞️',
            color: 'bg-emerald-600',
            categoria: 'diques'
        },
        {
            id: 'siete-cajones',
            nombre: 'Siete Cajones',
            descripcion: 'Profundos pozos entre rocas, formados por la erosión del río a través del tiempo.',
            icono: '♒',
            color: 'bg-amber-600',
            categoria: 'naturaleza'
        },
        {
            id: 'riocito',
            nombre: 'Riocito',
            descripcion: 'Arroyo de cálidas y cristalinas aguas que le da nombre al paraje. Zona de canteras de lajas.',
            icono: '💧',
            color: 'bg-cyan-600',
            categoria: 'naturaleza'
        },
        {
            id: 'paso-del-rey',
            nombre: 'Paso del Rey',
            descripcion: 'Conserva las ruinas de la capilla más antigua de San Luis, declarada Monumento Histórico Nacional.',
            icono: '⛪',
            color: 'bg-yellow-600',
            categoria: 'historico'
        },
        {
            id: 'los-tapiales',
            nombre: 'Los Tapiales',
            descripcion: 'Monumento a Juan Pascual Pringles, héroe puntano que participó en la gesta libertadora.',
            icono: '🏛️',
            color: 'bg-red-600',
            categoria: 'historico'
        }
    ];

    const filteredLugares = activeTab === 'todos'
        ? lugares
        : lugares.filter(lugar => lugar.categoria === activeTab);

    const categorias = [
        { id: 'todos', nombre: 'Todos' },
        { id: 'diques', nombre: 'Diques' },
        { id: 'naturaleza', nombre: 'Naturaleza' },
        { id: 'historico', nombre: 'Históricos' }
    ];

    return (
        <section id="destinos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <span className="text-trapiche-blue text-sm font-semibold uppercase tracking-wider">Explorá</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Lugares para Visitar</h2>
                    <div className="h-1 w-20 bg-trapiche-blue mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-700">
                        Descubrí los tesoros naturales e históricos que hacen de El Trapiche un lugar único en San Luis.
                    </p>
                </motion.div>

                {/* Filtros de categorías */}
                <div className="flex flex-wrap justify-center mb-12 gap-2">
                    {categorias.map(categoria => (
                        <motion.button
                            key={categoria.id}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${activeTab === categoria.id
                                    ? 'bg-trapiche-blue text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            onClick={() => setActiveTab(categoria.id)}
                        >
                            {categoria.nombre}
                        </motion.button>
                    ))}
                </div>

                {/* Grid de lugares */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {filteredLugares.map((lugar, index) => (
                        <DestinationCard key={lugar.id} lugar={lugar} index={index} />
                    ))}
                </motion.div>

                {/* Ver más - NAVEGACIÓN A ATRACTIVOS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/atractivos'}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
                    >
                        <span>Explorá más destinos</span>
                        <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Destinations;