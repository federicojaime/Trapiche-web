// App.jsx - Incorporando elementos otoñales al componente principal
import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero'; // Versión otoñal
import About from './components/sections/About';
import Destinations from './components/sections/Destinations';
import AutumnActivities from './components/sections/Activities'; // Versión otoñal
import HowToArrive from './components/sections/HowToArrive';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SeasonalBanner from './components/ui/SeasonalBanner'; // Nuevo banner otoñal
import FallingLeaves from './components/ui/FallingLeaves'; // Animación de hojas cayendo
import { BrowserRouter } from 'react-router-dom';

// Componente MainContent
const MainContent = () => {
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    // Ajustamos el margen superior para el banner estacional
    document.body.style.paddingTop = '46px';

    // El resto del código de detección de secciones...
    const handleScroll = () => {
      // [Código existente]
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <>
      <SeasonalBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <Destinations />
        <AutumnActivities />
        <HowToArrive />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FallingLeaves /> {/* Añadimos efecto global de hojas cayendo */}
    </>
  );
};

// Componente App
function App() {
  return (
    <BrowserRouter basename="/trapiche-web">
      <NavigationProvider>
        <MainContent />
      </NavigationProvider>
    </BrowserRouter>

  );
}

export default App;