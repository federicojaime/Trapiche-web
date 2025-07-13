// components/layout/NavMenu.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-trapiche', label: 'Sobre El Trapiche' },
  { id: 'destinos', label: 'Destinos' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' }
];

const NavMenu = () => {
  const { activeSection, mobileMenuOpen, toggleMobileMenu, scrollToSection, scrollY } = useNavigation();

  const textColorClass = scrollY > 50 ? 'text-gray-700' : 'text-white';
  const activeColorClass = scrollY > 50 ? 'text-trapiche-blue' : 'text-white font-bold';

  return (
    <>
      {/* Menú escritorio */}
      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`font-medium transition-colors ${activeSection === item.id ? activeColorClass : textColorClass}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>
      
      {/* Botón menú móvil */}
      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className={`transition-colors ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}
          aria-label="Menú"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Menú móvil expandido */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 overflow-hidden md:hidden"
          >
            <div className="py-4 px-6 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: menuItems.indexOf(item) * 0.05 }}
                  className={`font-medium text-left py-2 ${activeSection === item.id ? 'text-trapiche-blue' : 'text-gray-700'}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMenu;