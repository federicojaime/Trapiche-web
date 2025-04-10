// components/sections/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-trapiche-blue text-sm font-semibold uppercase tracking-wider">Comunícate</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Contacto</h2>
                        <div className="h-1 w-20 bg-trapiche-blue mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            ¿Tienes alguna pregunta sobre Trapiche? No dudes en contactarnos.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-blue-50 rounded-xl p-6 transform transition-all duration-300"
                        >
                            <div className="h-12 w-12 bg-trapiche-blue text-white rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-600 mb-4">Escríbenos con tus consultas</p>
                            <a href="mailto:info@trapiche.tur.ar" className="text-trapiche-blue font-medium hover:underline group inline-flex items-center">
                                info@trapiche.tur.ar
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-blue-50 rounded-xl p-6 transform transition-all duration-300"
                        >
                            <div className="h-12 w-12 bg-trapiche-blue text-white rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                            <p className="text-gray-600 mb-4">Llámanos de lunes a viernes</p>
                            <a href="tel:+542664452000" className="text-trapiche-blue font-medium block">2664452000</a>
                            <a href="https://wa.me/+542664891372" className="text-trapiche-blue font-medium mt-1 group inline-flex items-center">
                                WhatsApp: 2664891372
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="bg-blue-50 rounded-xl p-6 transform transition-all duration-300"
                        >
                            <div className="h-12 w-12 bg-trapiche-blue text-white rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Oficina de Turismo</h3>
                            <p className="text-gray-600 mb-4">Visítanos en Trapiche</p>
                            <a href="https://g.co/kgs/ncRLhxo" target="_blank" rel="noopener noreferrer" className="text-trapiche-blue font-medium hover:underline block mb-2 group inline-flex items-center">
                                Oficina 1
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://g.co/kgs/1U2SVjX" target="_blank" rel="noopener noreferrer" className="text-trapiche-blue font-medium hover:underline group inline-flex items-center">
                                Oficina 2
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* Formulario de contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 bg-gray-50 p-8 rounded-xl shadow-sm"
                    >
                        <h3 className="text-xl font-bold mb-6 text-center">Envíanos un mensaje</h3>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    placeholder="Tu nombre"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-trapiche-blue focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="tu@email.com"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-trapiche-blue focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                                <input
                                    type="text"
                                    id="asunto"
                                    placeholder="Asunto de tu mensaje"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-trapiche-blue focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea
                                    id="mensaje"
                                    rows={4}
                                    placeholder="Escribe tu consulta aquí..."
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-trapiche-blue focus:border-transparent transition-all duration-300"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 text-center">
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="px-8 py-3 bg-trapiche-blue text-white font-medium rounded-lg shadow-md transition-all duration-300 inline-flex items-center"
                                >
                                    <span>Enviar mensaje</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    <div className="mt-16 text-center">
                        <h3 className="text-xl font-bold mb-6">Síguenos en redes sociales</h3>

                        <div className="flex justify-center space-x-6">
                            <motion.a
                                href="https://www.instagram.com/secretariadeturismoeltrapiche"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="h-12 w-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </motion.a>

                            <motion.a
                                href="https://www.facebook.com/munieltrapiche"
                                target="_blank"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="h-12 w-12 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;