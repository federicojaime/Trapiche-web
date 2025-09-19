// components/sections/Gallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedImage from '../ui/AnimatedImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// IMPORTS DE IMÁGENES COMO VARIABLES
import gallery1 from '../../assets/images/gallery/trapiche-4.jpg';
import gallery2 from '../../assets/images/gallery/trapiche-5.jpg';
import gallery3 from '../../assets/images/gallery/trapiche-3.jpg';
import gallery4 from '../../assets/images/gallery/trapiche-6.jpg';
import gallery5 from '../../assets/images/gallery/trapiche-7.jpg';
import gallery6 from '../../assets/images/gallery/trapiche-8.jpg';
import gallery7 from '../../assets/images/gallery/trapiche-9.jpg';
import gallery8 from '../../assets/images/gallery/trapiche-10.jpg';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // USANDO LAS VARIABLES IMPORTADAS
  const images = [
    { src: gallery1, alt: 'Riocito' },
    { src: gallery2, alt: 'Paso del Rey' },
    { src: gallery3, alt: 'Siete Cajones' },
    { src: gallery4, alt: 'Los Tapiales' },
    { src: gallery5, alt: 'Paisaje Serrano' },
    { src: gallery6, alt: 'Atardecer en El Trapiche' },
    { src: gallery7, alt: 'Salto de agua La Negra Libre' },
    { src: gallery8, alt: 'Paseo Artesanal' },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Galería de El Trapiche</h2>
          <div className="h-1 w-20 bg-trapiche-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700">
            Explorá la belleza de El Trapiche a través de nuestra colección de imágenes.
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
            {images.map((image, index) => (
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
          {images.map((image, index) => (
            <div key={index} onClick={() => openLightbox(index)}>
              <AnimatedImage
                src={image.src}
                alt={image.alt}
                delay={index * 0.05}
              />
            </div>
          ))}
        </div>
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
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[80vh] object-contain"
          />

          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">{images[selectedImage].alt}</p>
          </div>

          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
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
              setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
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