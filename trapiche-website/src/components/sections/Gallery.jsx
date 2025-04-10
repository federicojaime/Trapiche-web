// components/sections/Gallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedImage from '../ui/AnimatedImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // En un escenario real, estas serían imágenes reales de Trapiche
  const images = [

    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-4.jpg`, alt: 'Riocito' },
    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-5.jpg`, alt: 'Paso del Rey' },
    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-3.jpg`, alt: 'Siete Cajones' },
    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-6.jpg`, alt: 'Los Tapiales' },
    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-7.jpg`, alt: 'Paisaje Serrano' },
    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-8.jpg`, alt: 'Atardecer en Trapiche' },
    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-9.jpg`, alt: 'Salto de agua La Negra Libre' },
    { src: `${import.meta.env.BASE_URL}src/assets/images/gallery/trapiche-10.jpg`, alt: 'Paseo Artesanal' },
  ];

  // Para desarrollo, usamos imágenes de placeholder
  const tempImages = Array(8).fill(null).map((_, i) => ({
    src: `${images[i].src}`,
    alt: `${images[i].alt}`
  }));

  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-trapiche-blue text-sm font-semibold uppercase tracking-wider">Imágenes</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Galería de Trapiche</h2>
          <div className="h-1 w-20 bg-trapiche-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700">
            Explorá la belleza de Trapiche a través de nuestra colección de imágenes.
          </p>
        </motion.div>

        {/* Carrusel para móvil */}
        <div className="md:hidden mb-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="rounded-xl overflow-hidden"
          >
            {tempImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  onClick={() => openLightbox(index)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                  <p className="text-center font-medium">{image.alt}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid para escritorio */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tempImages.map((image, index) => (
            <div key={index} onClick={() => openLightbox(index)}>
              <AnimatedImage
                src={image.src}
                alt={image.alt}
                delay={index * 0.05}
              />
            </div>
          ))}
        </div>
        {/* 
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-trapiche-blue hover:bg-trapiche-blue-dark text-white font-medium rounded-lg shadow-lg transition-all duration-300 inline-flex items-center"
          >
            <span>Ver todas las fotos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>*/}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setLightboxOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={tempImages[selectedImage].src}
            alt={tempImages[selectedImage].alt}
            className="max-w-full max-h-[80vh] object-contain"
          />

          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">{tempImages[selectedImage].alt}</p>
          </div>

          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === 0 ? tempImages.length - 1 : selectedImage - 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === tempImages.length - 1 ? 0 : selectedImage + 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;