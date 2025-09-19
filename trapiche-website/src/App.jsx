// App.jsx - Configuración de rutas principal
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './components/pages/LandingPage';
import TourismPage from './components/pages/TourismPage';
import VecinoPage from './components/pages/VecinoPage';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Página principal con opciones */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Página de turismo (toda la web actual) */}
          <Route path="/turismo" element={<TourismPage />} />
          
          {/* Página de vecino (en construcción) */}
          <Route path="/vecino" element={<VecinoPage />} />
          
          {/* Ruta de fallback - redirige a la página principal */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;