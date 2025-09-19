// components/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import panoramicaImage from '../../assets/images/panoramica.jpg';

const About = () => {
    return (
        <section id="sobre-trapiche" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
            {/* Elementos decorativos mejorados */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-gradient-to-tr from-emerald-200 to-teal-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10 blur-2xl"></div>

            {/* Grid pattern sutil */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header section mejorado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-trapiche-blue/10 backdrop-blur-sm rounded-full border border-trapiche-blue/20 mb-4">
                        <span className="text-trapiche-blue text-sm font-semibold uppercase tracking-wider">Nuestro destino</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-trapiche-blue bg-clip-text text-transparent mb-4">
                        El Trapiche
                    </h2>
                    <div className="flex justify-center">
                        <div className="h-1 w-32 bg-gradient-to-r from-trapiche-blue to-indigo-500 rounded-full"></div>
                    </div>
                </motion.div>

                <div className="flex flex-col xl:flex-row items-center gap-16">
                    {/* Contenido de texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full xl:w-1/2 space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-xl text-gray-700 leading-relaxed font-light">
                                Su nombre proviene de la actividad minera que marcó el origen del pueblo: un antiguo molino 
                                <span className="font-semibold text-trapiche-blue"> ("trapiche") </span>
                                utilizado para pulverizar oro extraído en La Carolina.
                            </p>

                            <p className="text-xl text-gray-700 leading-relaxed font-light">
                                Hoy, este rincón serrano se transformó en uno de los destinos turísticos más elegidos de San Luis por su 
                                <span className="font-semibold text-trapiche-blue"> combinación perfecta </span>
                                de ríos cristalinos, diques majestuosos, historia y paisajes.
                            </p>
                        </div>

                        {/* Stats cards */}
                        <div className="grid grid-cols-2 gap-4 my-8">
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
                            >
                                <div className="text-3xl font-bold text-trapiche-blue mb-2">39km</div>
                                <div className="text-sm text-gray-600">desde San Luis Capital</div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
                            >
                                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                                <div className="text-sm text-gray-600">Naturaleza pura</div>
                            </motion.div>
                        </div>

                        {/* Botones mejorados 
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group px-8 py-4 bg-gradient-to-r from-black to-gray-800 hover:from-trapiche-blue hover:to-blue-600 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 flex items-center"
                            >
                                <span>Nuestra historia</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.button>

                            <motion.a
                                href="https://www.youtube.com/watch?v=example"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center px-6 py-4 bg-white/80 backdrop-blur-sm border border-trapiche-blue/20 text-trapiche-blue font-semibold rounded-2xl hover:bg-trapiche-blue hover:text-white transition-all duration-300 shadow-lg"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-trapiche-blue/20 rounded-full animate-ping"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Ver video</span>
                            </motion.a>
                        </div>*/}
                    </motion.div>

                    {/* Imagen mejorada */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full xl:w-1/2"
                    >
                        <div className="relative group">
                            {/* Marco decorativo animado */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-trapiche-blue via-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                            
                            {/* Contenedor de imagen principal */}
                            <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                                <img
                                    src={panoramicaImage}
                                    alt="Vista panorámica de El Trapiche"
                                    className="w-full h-auto rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                
                                {/* Overlay con efecto glassmorphism */}
                                <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Tarjeta flotante mejorada */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute -bottom-8 -right-8 p-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-br from-trapiche-blue to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                            <span>39</span>
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Distancia desde</p>
                                        <p className="font-bold text-gray-900 text-lg">San Luis Capital</p>
                                        <p className="text-xs text-gray-400">Solo 39 kilómetros</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Elementos decorativos flotantes */}
                            <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute top-8 right-12 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-16 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                        </div>
                    </motion.div>
                </div>

                {/* Features section 
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { icon: "🏔️", title: "Paisajes únicos", desc: "Montañas y valles espectaculares" },
                        { icon: "💎", title: "Historia minera", desc: "Legado del oro de La Carolina" },
                        { icon: "🌊", title: "Aguas cristalinas", desc: "Ríos y diques de agua pura" }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/30 text-center group hover:bg-white/80 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>*/}
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}</style>
        </section>
    );
};

export default About;