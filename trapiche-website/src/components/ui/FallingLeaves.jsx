// src/components/ui/FallingLeaves.jsx
import React from 'react';

const FallingLeaves = () => {
  // Generamos hojas aleatorias con posiciones distintas
  const leaves = Array.from({ length: 20 }).map((_, index) => {
    const size = Math.floor(Math.random() * 20) + 10; // Tamaño entre 10px y 30px
    const left = Math.floor(Math.random() * 100); // Posición horizontal aleatoria
    const delay = Math.random() * 15; // Retardo aleatorio de la animación
    const duration = Math.floor(Math.random() * 10) + 15; // Duración entre 15s y 25s
    const rotation = Math.floor(Math.random() * 360); // Rotación inicial aleatoria
    
    // Seleccionar un tipo de hoja aleatoriamente (emoji)
    const leafTypes = ['🍂', '🍁', '🍃', '🌿'];
    const leafEmoji = leafTypes[Math.floor(Math.random() * leafTypes.length)];
    
    return {
      id: index,
      size,
      left,
      delay,
      duration,
      rotation,
      leafEmoji,
    };
  });

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-2xl animate-fall"
          style={{
            left: `${leaf.left}%`,
            top: '-20px',
            fontSize: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          {leaf.leafEmoji}
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;