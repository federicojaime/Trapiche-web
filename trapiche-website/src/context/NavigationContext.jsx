// context/NavigationContext.jsx
import { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
        scrollY,
        setScrollY,
        mobileMenuOpen,
        setMobileMenuOpen,
        toggleMobileMenu,
        scrollToSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};