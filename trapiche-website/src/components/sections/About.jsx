// components/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="sobre-trapiche" className="py-20 bg-white relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-50 rounded-full opacity-30 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-trapiche-blue text-sm font-semibold uppercase tracking-wider">Nuestro destino</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Conocé Trapiche</h2>
                        <div className="h-1 w-20 bg-trapiche-blue rounded-full mb-6"></div>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Su nombre proviene de la actividad minera que marcó el origen del pueblo: un antiguo molino ("trapiche") utilizado para pulverizar oro extraído en La Carolina.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Hoy, este rincón serrano se transformó en uno de los destinos turísticos más elegidos de San Luis por su combinación perfecta de ríos cristalinos, diques majestuosos, historia y paisajes.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-black hover:bg-trapiche-blue-dark text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center"
                            >
                                <span>Nuestra historia</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.button>

                            <span className="text-gray-500">ó</span>

                            <motion.a
                                href="https://www.youtube.com/watch?v=example"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-trapiche-blue font-medium hover:underline"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                Ver video
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-trapiche-blue rounded-xl"></div>
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/panoramica.jpg`} 
                                alt="Vista panorámica de Trapiche"
                                className="w-full h-auto rounded-xl shadow-xl relative z-10"
                            />

                            <div className="absolute -bottom-5 -right-5 p-4 bg-white rounded-lg shadow-lg z-20 flex items-center">
                                <div className="h-12 w-12 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-black text-2xl">39</span>
                                    <span className="text-black ">km</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Distancia desde</p>
                                    <p className="font-bold">San Luis Capital</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>


                <div className="mt-20 item-center">
                    {/*  Estadísticas  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
                    >
                        <span className="text-3xl md:text-4xl font-bold text-trapiche-blue">+500</span>
                        <p className="text-gray-600 mt-2">Visitantes mensuales</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
                    >
                        <span className="text-3xl md:text-4xl font-bold text-trapiche-blue">6</span>
                        <p className="text-gray-600 mt-2">Destinos principales</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
                    >
                        <span className="text-3xl md:text-4xl font-bold text-trapiche-blue">12</span>
                        <p className="text-gray-600 mt-2">Actividades disponibles</p>
                    </motion.div>
*/}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
                    >
                        <span className="text-3xl md:text-4xl font-bold text-trapiche-blue">100%</span>
                        <p className="text-gray-600 mt-2">Naturaleza pura</p>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default About;