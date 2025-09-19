// components/sections/Gallery.jsx - VERSIÓN MEJORADA Y ESTABILIZADA
import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [filter, setFilter] = useState('all');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // USANDO LAS VARIABLES IMPORTADAS con categorías SIMPLIFICADAS
  const images = [
    { src: gallery1, alt: 'Riocito', category: 'naturaleza' },
    { src: gallery2, alt: 'Paso del Rey', category: 'lugares' },
    { src: gallery3, alt: 'Siete Cajones', category: 'naturaleza' },
    { src: gallery4, alt: 'Los Tapiales', category: 'lugares' },
    { src: gallery5, alt: 'Paisaje Serrano', category: 'paisajes' },
    { src: gallery6, alt: 'Atardecer en El Trapiche', category: 'paisajes' },
    { src: gallery7, alt: 'Salto de agua La Negra Libre', category: 'naturaleza' },
    { src: gallery8, alt: 'Paseo Artesanal', category: 'lugares' },
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: '🌟' },
    { id: 'naturaleza', name: 'Naturaleza', icon: '🌿' },
    { id: 'lugares', name: 'Lugares', icon: '🏔️' },
    { id: 'paisajes', name: 'Paisajes', icon: '🌅' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const openLightbox = useCallback((index) => {
    const actualIndex = images.findIndex(img => img === filteredImages[index]);
    setSelectedImage(actualIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, [filteredImages, images]);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const navigateLightbox = useCallback((direction) => {
    if (direction === 'next') {
      setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1);
    } else {
      setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1);
    }
  }, [images.length]);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return (
    <section id="galeria" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER SIMPLIFICADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Galería de El Trapiche
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorá la belleza de El Trapiche a través de nuestra colección de imágenes
          </p>
        </motion.div>

        {/* FILTROS ESTABLES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${filter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300'
                }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* CARRUSEL MÓVIL SIMPLIFICADO */}
        <div className="lg:hidden mb-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={20}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            className="gallery-swiper"
          >
            {filteredImages.map((image, index) => (
              <SwiperSlide key={`${image.src}-${filter}`}>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold">{image.alt}</h3>
                    <p className="text-sm opacity-80">Click para ampliar</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* GRID ESCRITORIO ESTABLE */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${filter}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05
                  }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 xl:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-lg font-bold mb-1">{image.alt}</h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Ver imagen completa</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MEJORADO */}
      <AnimatePresence>
        {lightboxOpen && selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Botón cerrar */}
            <button
              className="absolute top-4 right-4 z-60 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={closeLightbox}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Imagen principal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Información */}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                  <h3 className="text-white font-semibold text-lg">{images[selectedImage].alt}</h3>
                  <span className="text-white/80 text-sm">
                    {selectedImage + 1} / {images.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navegación */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={`h-2 rounded-full transition-all ${index === selectedImage
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/70 w-2'
                    }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ESTILOS OPTIMIZADOS */}
      <style jsx>{`
        .gallery-swiper {
          padding: 20px 0 50px 0;
        }
        
        .gallery-swiper .swiper-pagination-bullet {
          background: rgba(249, 115, 22, 0.4);
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #f97316;
          transform: scale(1.3);
        }
        
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: #f97316;
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-top: -20px;
        }
        
        .gallery-swiper .swiper-button-next:after,
        .gallery-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default Gallery;