// App.jsx - Configuración de rutas con atractivos
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './components/pages/LandingPage';
import TourismPage from './components/pages/TourismPage';
import VecinoPage from './components/pages/VecinoPage';
import ContactPage from './components/pages/ContactPage';
import AccommodationsPage from './components/pages/AccommodationsPage';
import EventsPage from './components/pages/EventsPage';
import AttractionsPage from './components/pages/AttractionsPage';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Página principal ahora es directamente turismo */}
          <Route path="/" element={<TourismPage />} />
          
          {/* Página de alojamientos */}
          <Route path="/alojamientos" element={<AccommodationsPage />} />
          
          {/* Página de eventos */}
          <Route path="/eventos" element={<EventsPage />} />
          
          {/* Página de atractivos turísticos */}
          <Route path="/atractivos" element={<AttractionsPage />} />
          
          {/* Página de contacto completa */}
          <Route path="/contacto" element={<ContactPage />} />
          
          {/* Página de portal (anterior landing page) */}
          <Route path="/portal" element={<LandingPage />} />
          
          {/* Página de turismo (mantener para compatibilidad) */}
          <Route path="/turismo" element={<TourismPage />} />
          
          {/* Página de vecino (en construcción) */}
          <Route path="/vecino" element={<VecinoPage />} />
          
          {/* Ruta de fallback - redirige a la página de turismo */}
          <Route path="*" element={<TourismPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;