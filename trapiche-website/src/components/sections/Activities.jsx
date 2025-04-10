// Modificación de components/sections/Activities.jsx (fondo temático)
import React from 'react';
import { motion } from 'framer-motion';
import ActivityCard from '../ui/ActivityCard';
import AutumnButton from '../ui/AutumnButton';

const AutumnActivities = () => {

    // Función para abrir WhatsApp con el lugar específico como mensaje
    const openWhatsApp = () => {
        // Construir el mensaje con el nombre del lugar
        const message = `Hola, me interesa más información sobre la experiencia otoñal en Trapiche.`;
        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(message);
        // Construir la URL para WhatsApp
        const whatsappUrl = `https://wa.me/542657218215?text=${encodedMessage}`;
        // Abrir en una nueva pestaña
        window.open(whatsappUrl, '_blank');
    };
    // Actividades especiales de otoño
    const actividadesOtono = [
        'Circuito Fotográfico de Otoño: Captura los impresionantes colores de los bosques y senderos.',
        'Trekking por Senderos Dorados: Recorre rutas especiales para disfrutar del paisaje otoñal.',
        'Gastronomía de Estación: Prueba platos y bebidas típicas con frutos de temporada.',
        'Festivales de Cosecha: Participa en eventos especiales de recolección y celebración otoñal.',
        'Paseos en Bicicleta: Rutas entre los bosques para apreciar los colores cambiantes del paisaje.',
        'Ecoturismo: Observación de aves y fauna local en su momento de preparación para el invierno.',
        'Talleres de Fotografía: Aprende a capturar la esencia del paisaje otoñal con expertos.',
        'Experiencias al Atardecer: Disfruta de los atardeceres otoñales con colores únicos desde miradores especiales.'
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-autumn-600 to-autumn-800 text-white relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <svg className="absolute -top-20 -right-20 w-96 h-96 text-autumn-300" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
                <svg className="absolute -bottom-20 -left-20 w-96 h-96 text-autumn-300" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            </div>

            {/* Hojas decorativas fijas */}
            <div className="absolute top-10 left-10 text-4xl animate-sway">🍂</div>
            <div className="absolute bottom-10 right-10 text-4xl animate-sway" style={{ animationDelay: '2s' }}>🍁</div>
            <div className="absolute top-1/4 right-1/4 text-3xl animate-sway" style={{ animationDelay: '1s' }}>🍃</div>
            <div className="absolute bottom-1/4 left-1/4 text-3xl animate-sway" style={{ animationDelay: '3s' }}>🍂</div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="text-autumn-200 text-sm font-semibold uppercase tracking-wider">Temporada Especial</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Experiencias de Otoño</h2>
                    <div className="h-1 w-20 bg-autumn-200 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg opacity-90">
                        Actividades únicas para disfrutar de la estación más colorida del año en Trapiche.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {actividadesOtono.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border-l-4 border-autumn-300"
                        >
                            <div className="flex items-start">
                                <span className="text-autumn-200 mr-3">✅</span>
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
                    <AutumnButton>
                        <span>Reserva tu experiencia otoñal</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </AutumnButton>
                </motion.div>
            </div>
        </section>
    );
};

export default AutumnActivities;