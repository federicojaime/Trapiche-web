// components/ui/AnimatedImage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AnimatedImage = ({ src, alt, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className={`overflow-hidden rounded-lg shadow-md aspect-square relative cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-medium">{alt}</span>
      </div>
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
    </motion.div>
  );
};

export default AnimatedImage;