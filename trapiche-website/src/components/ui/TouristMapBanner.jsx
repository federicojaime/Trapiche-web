// src/components/pages/TourismPage.jsx - Con banner de mapa turístico
import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from '../../context/NavigationContext';
import Header from '../layout/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TouristMapBanner from '../ui/TouristMapBanner';
import Destinations from '../sections/Destinations';
import Activities from '../sections/Activities';
import HowToArrive from '../sections/HowToArrive';
import Gallery from '../sections/Gallery';
import InstagramSection from '../sections/InstagramSection';
import Contact from '../sections/Contact';
import Footer from '../layout/Footer';
import BackgroundMusic from '../ui/BackgroundMusic';
import WhatsAppWidget from '../ui/WhatsAppWidget';

// Componente TourismContent
const TourismContent = () => {
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    // Scroll al tope al cargar la página
    window.scrollTo(0, 0);
    
    // Resetear el padding superior del body
    document.body.style.paddingTop = '0px';

    const handleScroll = () => {
      const sections = ['inicio', 'sobre-trapiche', 'destinos', 'actividades', 'galeria', 'contacto'];
      const scrollPos = window.scrollY + 100;

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.paddingTop = '0px';
    };
  }, [setActiveSection]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TouristMapBanner />
        <Destinations />
        <Activities />
        <HowToArrive />
        <Gallery />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <BackgroundMusic />
      <WhatsAppWidget />
    </>
  );
};

// Componente TourismPage principal
const TourismPage = () => {
  return (
    <NavigationProvider>
      <TourismContent />
    </NavigationProvider>
  );
};

export default TourismPage;