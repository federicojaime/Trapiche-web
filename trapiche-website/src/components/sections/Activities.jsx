// Modificación de components/sections/Activities.jsx (actividades de invierno)
import React from 'react';
import { motion } from 'framer-motion';
import WinterButton from '../ui/WinterButton';

const WinterActivities = () => {
    const openWhatsApp = () => {
        const message = `Hola, me interesa más información sobre la experiencia invernal en El Trapiche.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/542657218215?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const actividadesInvierno = [
        'Trekking de Invierno: Senderos especiales para disfrutar del paisaje serrano en su época más tranquila.',
        'Observación Nocturna: Cielos despejados ideales para contemplar las estrellas en noches frías y cristalinas.',
        'Fotografía Invernal: Captura la belleza única de los paisajes con escarcha y nieblas matutinas.',
        'Fogones y Asados: Experiencias gastronómicas al aire libre con el calor de la leña.',
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-winter-700 to-ice-800 text-white relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <svg className="absolute -top-20 -right-20 w-96 h-96 text-ice-300" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
                <svg className="absolute -bottom-20 -left-20 w-96 h-96 text-ice-300" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            </div>

            {/* Copos de nieve decorativos fijos */}
            <div className="absolute top-10 left-10 text-4xl animate-shimmer">❄️</div>
            <div className="absolute bottom-10 right-10 text-4xl animate-shimmer" style={{ animationDelay: '2s' }}>❄️</div>
            <div className="absolute top-1/4 right-1/4 text-3xl animate-shimmer" style={{ animationDelay: '1s' }}>🌨️</div>
            <div className="absolute bottom-1/4 left-1/4 text-3xl animate-shimmer" style={{ animationDelay: '3s' }}>❄️</div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="text-ice-200 text-sm font-semibold uppercase tracking-wider">Temporada Especial</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Experiencias de Invierno</h2>
                    <div className="h-1 w-20 bg-ice-200 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg opacity-90">
                        Actividades únicas para disfrutar de la estación más serena y contemplativa del año en El Trapiche.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {actividadesInvierno.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border-l-4 border-ice-300"
                        >
                            <div className="flex items-start">
                                <span className="text-ice-200 mr-3">❄️</span>
                                <div>
                                    <h4 className="text-white font-medium mb-2">{item.split(':')[0]}</h4>
                                    {item.includes(':') && (
                                        <p className="text-white/80 text-sm">{item.split(':')[1].trim()}</p>
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
                    <WinterButton primary>
                        <span>Reserva tu experiencia invernal</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </WinterButton>
                </motion.div>
            </div>
        </section>
    );
};

export default WinterActivities;