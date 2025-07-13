// App.jsx - Incorporando elementos invernales al componente principal
import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero'; // Versión invernal
import About from './components/sections/About';
import Destinations from './components/sections/Destinations';
import WinterActivities from './components/sections/Activities'; // Versión invernal
import HowToArrive from './components/sections/HowToArrive';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SeasonalBanner from './components/ui/SeasonalBanner'; // Banner invernal
import FallingSnow from './components/ui/FallingSnow'; // Animación de nieve cayendo
import { BrowserRouter } from 'react-router-dom';

// Componente MainContent
const MainContent = () => {
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    // Ajustamos el margen superior para el banner estacional
    document.body.style.paddingTop = '46px';

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
        <WinterActivities />
        <HowToArrive />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FallingSnow /> {/* Añadimos efecto global de nieve cayendo */}
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