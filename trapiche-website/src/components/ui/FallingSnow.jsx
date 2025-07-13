// src/components/ui/FallingSnow.jsx
import React from 'react';

const FallingSnow = () => {
  // Generamos copos de nieve aleatorios con posiciones distintas
  const snowflakes = Array.from({ length: 25 }).map((_, index) => {
    const size = Math.floor(Math.random() * 15) + 8; // Tamaño entre 8px y 23px
    const left = Math.floor(Math.random() * 100); // Posición horizontal aleatoria
    const delay = Math.random() * 8; // Retardo aleatorio de la animación
    const duration = Math.floor(Math.random() * 6) + 8; // Duración entre 8s y 14s
    
    // Seleccionar un tipo de copo de nieve aleatoriamente
    const snowTypes = ['❄️', '🌨️', '⭐', '✨'];
    const snowEmoji = snowTypes[Math.floor(Math.random() * snowTypes.length)];
    
    return {
      id: index,
      size,
      left,
      delay,
      duration,
      snowEmoji,
    };
  });

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snow-fall"
          style={{
            left: `${flake.left}%`,
            top: '-20px',
            fontSize: `${flake.size}px`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        >
          {flake.snowEmoji}
        </div>
      ))}
    </div>
  );
};

export default FallingSnow;