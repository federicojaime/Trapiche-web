// components/sections/Activities.jsx - Actividades generales sin tema de invierno
import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
    const openWhatsApp = () => {
        const message = `Hola, me interesa más información sobre las actividades en El Trapiche.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/542657218215?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const actividades = [
        'Trekking y Senderismo: Recorridos por senderos naturales con vistas panorámicas de las sierras.',
        'Pesca Deportiva: En los diques La Florida y Río Grande, con especies autóctonas.',
        'Turismo Rural: Visitas a estancias y experiencias con la vida rural puntana.',
        'Cabalgatas: Paseos a caballo por paisajes serranos y campo abierto.',
        'Turismo Aventura: Rappel, escalada y actividades de adrenalina en entorno natural.',
        'Observación de Flora y Fauna: Avistaje de especies nativas en su hábitat natural.',
        'Turismo Histórico: Recorridos por sitios con valor patrimonial y cultural.',
        'Gastronomía Regional: Degustación de platos típicos y productos locales.',
    ];

    return (
        <section id="actividades" className="py-20 bg-gradient-to-b from-blue-50 to-green-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <svg className="absolute -top-20 -right-20 w-96 h-96 text-blue-300" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
                <svg className="absolute -bottom-20 -left-20 w-96 h-96 text-green-300" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            </div>

            {/* Elementos decorativos fijos */}
            <div className="absolute top-10 left-10 text-4xl animate-pulse">🏔️</div>
            <div className="absolute bottom-10 right-10 text-4xl animate-pulse" style={{ animationDelay: '2s' }}>🌿</div>
            <div className="absolute top-1/4 right-1/4 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>💧</div>
            <div className="absolute bottom-1/4 left-1/4 text-3xl animate-pulse" style={{ animationDelay: '3s' }}>🦋</div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Experiencias</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">Actividades en El Trapiche</h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600">
                        Descubrí una amplia variedad de actividades para conectar con la naturaleza y vivir experiencias únicas en las sierras puntanas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {actividades.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:bg-white/95 transition-all duration-300 border-l-4 border-blue-500 shadow-md hover:shadow-lg"
                        >
                            <div className="flex items-start">
                                <span className="text-blue-500 mr-3 text-xl">🎯</span>
                                <div>
                                    <h4 className="text-gray-800 font-medium mb-2">{item.split(':')[0]}</h4>
                                    {item.includes(':') && (
                                        <p className="text-gray-600 text-sm">{item.split(':')[1].trim()}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                    onClick={openWhatsApp}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center mx-auto"
                    >
                        <span>Consulta disponibilidad</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Activities;