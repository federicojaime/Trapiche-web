// components/layout/NavMenu.jsx - Actualizado con navegación de alojamientos
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigation } from '../../context/NavigationContext';

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-trapiche', label: 'Sobre El Trapiche' },
  { id: 'destinos', label: 'Destinos' },
  { id: 'alojamientos', label: 'Alojamientos', isPage: true }, // Nueva opción
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' }
];

const NavMenu = () => {
  const { activeSection, mobileMenuOpen, toggleMobileMenu, scrollToSection, scrollY } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  const textColorClass = scrollY > 50 ? 'text-gray-700' : 'text-white';
  const activeColorClass = scrollY > 50 ? 'text-orange-500' : 'text-white font-bold';

  const handleMenuClick = (item) => {
    const { id, isPage } = item;
    
    // Si es una página separada, navegar directamente
    if (isPage) {
      if (id === 'alojamientos') {
        navigate('/alojamientos');
        toggleMobileMenu();
        return;
      }
    }
    
    // Si estamos en la página de contacto, navegar a home y luego hacer scroll
    if (location.pathname === '/contacto' || location.pathname === '/alojamientos') {
      if (id === 'contacto' && location.pathname === '/contacto') {
        // Si ya estamos en contacto y clickeamos contacto, solo cerramos el menú
        toggleMobileMenu();
        return;
      }
      // Navegar a home con el hash de la sección
      navigate(`/#${id}`);
      // Pequeño delay para que cargue la página y luego scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si estamos en home, usar la función normal de scroll
      scrollToSection(id);
    }
  };

  return (
    <>
      {/* Menú escritorio */}
      <nav className="hidden md:flex space-x-6 lg:space-x-8">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`font-medium transition-colors text-sm lg:text-base ${
              (activeSection === item.id && location.pathname === '/') || 
              (item.id === 'contacto' && location.pathname === '/contacto') ||
              (item.id === 'alojamientos' && location.pathname === '/alojamientos')
                ? activeColorClass 
                : textColorClass
            } hover:${scrollY > 50 ? 'text-orange-500' : 'text-white'}`}
            onClick={() => handleMenuClick(item)}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>
      
      {/* Botón menú móvil */}
      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className={`transition-colors p-2 ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}
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
            className={`fixed left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 overflow-hidden md:hidden ${
              scrollY > 50 ? 'top-16' : 'top-20'
            }`}
          >
            <div className="py-4 px-6 flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`font-medium text-left py-2 text-base ${
                    (activeSection === item.id && location.pathname === '/') || 
                    (item.id === 'contacto' && location.pathname === '/contacto') ||
                    (item.id === 'alojamientos' && location.pathname === '/alojamientos')
                      ? 'text-orange-500 font-semibold' 
                      : 'text-gray-700'
                  } hover:text-orange-500 transition-colors`}
                  onClick={() => handleMenuClick(item)}
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