// src/components/pages/TourismPage.jsx
import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from '../../context/NavigationContext';
import Header from '../layout/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Destinations from '../sections/Destinations';
import WinterActivities from '../sections/Activities';
import HowToArrive from '../sections/HowToArrive';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';
import Footer from '../layout/Footer';
import SeasonalBanner from '../ui/SeasonalBanner';
import FallingSnow from '../ui/FallingSnow';

// Componente TourismContent
const TourismContent = () => {
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    // Ajustamos el margen superior para el banner estacional
    document.body.style.paddingTop = '46px';

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
      <FallingSnow />
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