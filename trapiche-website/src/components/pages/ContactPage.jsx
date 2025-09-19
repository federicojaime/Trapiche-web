// src/components/pages/ContactPage.jsx - Versión simple
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationProvider } from '../../context/NavigationContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const ContactContent = () => {
    const navigate = useNavigate();

    // Scroll al tope al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openWhatsApp = () => {
        window.open('https://wa.me/5492664891372?text=¡Hola! Me interesa información sobre El Trapiche', '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                <div className="container mx-auto px-6">
                    <button
                        onClick={() => navigate('/')}
                        className="mb-6 text-white/80 hover:text-white flex items-center"
                    >
                        ← Volver al inicio
                    </button>
                    <h1 className="text-5xl font-bold mb-4">Contacto</h1>
                    <p className="text-xl">Estamos aquí para ayudarte</p>
                </div>
            </section>

            {/* Contenido */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    
                    {/* Contacto rápido */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div onClick={openWhatsApp} className="bg-white p-8 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-2xl">📱</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                            <p className="text-green-600 font-semibold">+54 9 2664 89-1372</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-2xl">📞</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                            <p className="text-blue-600 font-semibold">2664891372</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-2xl">✉️</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-orange-600 font-semibold">secretariadeturismoeltrapiche@gmail.com</p>
                        </div>
                    </div>

                    {/* Oficinas */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Oficinas de Turismo</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-4 text-blue-600">Oficina Costanera</h3>
                                <p className="mb-4"><strong>Dirección:</strong> Av. Libertador Gral. San Martin, D5701 Trapiche, San Luis</p>
                                <p className="mb-4"><strong>Horarios:</strong> Lunes a Domingo: 8:00 - 20:00hs</p>
                                <a 
                                    href="https://share.google/0B2o1vLLWD8rP8K0T" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 inline-block"
                                >
                                    Ver en Google Maps
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-4 text-green-600">Oficina Ruta 9</h3>
                                <p className="mb-4"><strong>Dirección:</strong> Ruta Provincial 9, Provincia de San Luis</p>
                                <p className="mb-4"><strong>Horarios:</strong> Lunes a Domingo: 9:00 - 18:00hs</p>
                                <a 
                                    href="https://maps.app.goo.gl/X3i9T782E5E6VFSn7?g_st=aw" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 inline-block"
                                >
                                    Ver en Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-center mb-8">Redes Sociales</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            
                            <a href="https://www.instagram.com/turismo.eltrapiche/" target="_blank" rel="noopener noreferrer" className="text-center p-6 hover:bg-gray-50 rounded-lg">
                                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="text-white text-2xl">📷</span>
                                </div>
                                <h3 className="font-bold">@turismo.eltrapiche</h3>
                                <p className="text-gray-600">Instagram Oficial</p>
                            </a>

                            <a href="https://www.instagram.com/secretariadeturismoeltrapiche/" target="_blank" rel="noopener noreferrer" className="text-center p-6 hover:bg-gray-50 rounded-lg">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="text-white text-2xl">🏛️</span>
                                </div>
                                <h3 className="font-bold">@secretariadeturismoeltrapiche</h3>
                                <p className="text-gray-600">Secretaría de Turismo</p>
                            </a>

                            <a href="https://www.facebook.com/munieltrapiche" target="_blank" rel="noopener noreferrer" className="text-center p-6 hover:bg-gray-50 rounded-lg">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="text-white text-2xl">👥</span>
                                </div>
                                <h3 className="font-bold">@munieltrapiche</h3>
                                <p className="text-gray-600">Facebook Oficial</p>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

const ContactPage = () => {
    return (
        <NavigationProvider>
            <ContactContent />
        </NavigationProvider>
    );
};

export default ContactPage;