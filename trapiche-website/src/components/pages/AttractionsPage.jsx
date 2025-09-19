// src/components/pages/AttractionsPage.jsx - Página de Atractivos Turísticos VISUAL
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NavigationProvider } from '../../context/NavigationContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import WhatsAppWidget from '../ui/WhatsAppWidget';

// IMPORTS DE IMÁGENES
import panoramicaImage from '../../assets/images/panoramica.jpg';
import heroAutumnImage from '../../assets/images/hero-autumn.jpg';
import floridaAutumnImage from '../../assets/images/florida-autumn.jpg';
import riograndeAutumnImage from '../../assets/images/riogrande-autumn.jpg';
import sieteCajonesAutumnImage from '../../assets/images/siete-cajones-autumn.jpg';
import riocitoAutumnImage from '../../assets/images/riocito-autumn.jpg';
import pasoDelReyAutumnImage from '../../assets/images/paso-del-rey-autumn.jpg';
import losTapialesAutumnImage from '../../assets/images/los-tapiales-autumn.jpg';

// Imágenes de galería
import gallery1 from '../../assets/images/gallery/trapiche-1.jpg';
import gallery2 from '../../assets/images/gallery/trapiche-2.jpg';
import gallery3 from '../../assets/images/gallery/trapiche-3.jpg';
import gallery4 from '../../assets/images/gallery/trapiche-4.jpg';
import gallery5 from '../../assets/images/gallery/trapiche-5.jpg';
import gallery6 from '../../assets/images/gallery/trapiche-6.jpg';
import gallery7 from '../../assets/images/gallery/trapiche-7.jpg';
import gallery8 from '../../assets/images/gallery/trapiche-8.jpg';
import gallery9 from '../../assets/images/gallery/trapiche-9.jpg';
import gallery10 from '../../assets/images/gallery/trapiche-10.jpg';

// Imágenes adicionales de la galería
import img1 from '../../assets/images/gallery/IMG_20250313_134756262_HDR.jpg';
import img2 from '../../assets/images/gallery/IMG_20250315_150820833_HDR.jpg';
import img3 from '../../assets/images/gallery/IMG_20250315_194659207_MFNR.jpg';
import img4 from '../../assets/images/gallery/IMG_20250315_195545477_MFNR.jpg';
import img5 from '../../assets/images/gallery/IMG_20250316_081448732_MFNR-EFFECTS.jpg';
import img6 from '../../assets/images/gallery/IMG_20250316_134141039_HDR.jpg';
import img7 from '../../assets/images/gallery/IMG_20250316_134907556_MFNR.jpg';
import img8 from '../../assets/images/gallery/IMG_20250316_192051605_HDR.jpg';

// Datos de atractivos con imágenes asociadas
const attractionsData = [
  // Ríos y Embalses
  {
    id: 'rio-trapiche',
    nombre: 'Río El Trapiche',
    categoria: 'rios-embalses',
    descripcion: 'El alma cristalina de la villa. Nace en lo alto del Cerro Agua Hedionda y atraviesa todo el pueblo en una curva pronunciada.',
    descripcionCompleta: 'Enclavado entre cerros y rodeado de una vegetación exuberante, el Río Trapiche es el corazón que da vida a esta encantadora villa serrana. Sus aguas nacen en lo alto del Cerro Agua Hedionda, a más de 2.100 metros sobre el nivel del mar, alimentadas por los ríos Virorco y Águilas, que bajan desde el Cerro Suyuque, al sur del imponente Retana. A lo largo de 20 kilómetros, este río serpentea por un cauce angosto y encajonado, dibujando paisajes únicos. Durante el verano, sus aguas frescas y cristalinas convierten al Trapiche en un punto de encuentro para familias, amigos y aventureros.',
    icono: '🏞️',
    imagen: gallery1,
    imagenes: [],
    actividades: ['Natación', 'Camping', 'Picnic', 'Pesca'],
    destacado: true,
    ubicacion: 'El Trapiche'
  },
  {
    id: 'embalse-florida',
    nombre: 'Embalse La Florida',
    categoria: 'rios-embalses',
    descripcion: 'El espejo de agua más visitado. Proveedor de agua cruda para San Luis con múltiples actividades acuáticas.',
    descripcionCompleta: 'Ubicado en la localidad de El Trapiche, a solo 45 km de la capital provincial, el Dique La Florida es uno de los mayores atractivos turísticos y recreativos de San Luis. Su construcción comenzó en 1945 y desde entonces cambió la historia de la zona: nació el pueblo de La Florida y se desarrollaron complejos turísticos, clubes, campings y espacios náuticos. Con una presa de 66 metros de altura y una cuenca de aporte de 450 km², el embalse tiene una capacidad de 100 hm³ y una superficie de 651 hectáreas de aguas limpias rodeadas de vegetación. En sus orillas se puede disfrutar de deportes náuticos: vela, kayak, buceo, pesca deportiva principalmente de pejerrey, camping, playas de arena y picnics.',
    icono: '🌊',
    imagen: floridaAutumnImage,
    imagenes: [],
    actividades: ['Vela', 'Kayak', 'Buceo', 'Pesca deportiva', 'Camping'],
    destacado: true,
    ubicacion: 'La Florida'
  },
  {
    id: 'rio-quinto',
    nombre: 'Río Quinto y Leyenda de Popopis',
    categoria: 'rios-embalses',
    descripcion: 'Nace en las sierras del Macizo Central, cargado de valor simbólico y ancestral con el relato mítico de Popopis.',
    descripcionCompleta: 'Entre las sierras de San Luis, donde el viento susurra entre los árboles y el agua corre entre las piedras, vive una leyenda que da nombre y alma a uno de los ríos más emblemáticos de la región. Popopis era el nombre de una joven aborigen, hija de un gran cacique de los pueblos originarios que habitaron estas tierras. Su belleza y dulzura eran tan reconocidas como su espíritu libre. Un día, Popopis se enamoró de un joven de su comunidad, pero no pertenecía al linaje real, y su amor fue prohibido por su padre. El muchacho fue obligado a alejarse, y la joven, con el corazón desgarrado, buscó refugio en la naturaleza. Sentada junto a una roca, lloró durante días y noches enteras. Sus lágrimas fueron tantas y tan profundas que se mezclaron con la tierra, las piedras y el alma del monte, dando origen a un río caudaloso y cristalino.',
    icono: '💧',
    imagen: gallery3,
    imagenes: [],
    actividades: ['Contemplación', 'Fotografía', 'Turismo cultural'],
    destacado: true,
    ubicacion: 'Macizo Central'
  },
  {
    id: 'dique-aguero',
    nombre: 'Dique Antonio Esteban Agüero',
    categoria: 'rios-embalses',
    descripcion: 'Ubicado en Paso del Rey, escenario poético que rinde homenaje al escritor puntano.',
    descripcionCompleta: 'Ubicado a solo 7 km de la localidad de El Trapiche, en pleno corazón de la serranía puntana, este dique forma parte de la cuenca del río Quinto. Recibe las aguas de los ríos Los Manantiales y el río Grande, que atraviesa la ladera oriental de las Sierras Centrales de San Luis. El dique cuenta con una superficie de 107 hectáreas y una capacidad de 19,3 hectómetros cúbicos. Su construcción comenzó en 1995 y fue inaugurado en 1997. Las costas del embalse son irregulares y escarpadas, rodeadas por una vegetación autóctona que incluye chañares, molles, talas, piquillines y algarrobos blancos y negros.',
    icono: '🏔️',
    imagen: pasoDelReyAutumnImage,
    imagenes: [],
    actividades: ['Contemplación', 'Fotografía', 'Senderismo'],
    destacado: false,
    ubicacion: 'Paso del Rey'
  },

  // Arroyos y Paraísos Naturales
  {
    id: 'arroyo-aguilas',
    nombre: 'Arroyo de las Águilas',
    categoria: 'arroyos-naturales',
    descripcion: 'Cascadas escondidas y agua viva. Destaca por sus cascadas y pozones naturales, ideal para pesca de truchas.',
    descripcionCompleta: 'Ubicado en una región de acceso variable, al Arroyo de las Águilas podés llegar desde El Volcán, El Durazno, o desde El Trapiche tomando la Ruta Provincial N.º 18 hasta Virorco, y luego unos 2 km hacia la costa del río. Este arroyo de montaña, alimentado por lluvias estivales, se distingue por sus aguas cristalinas, su vegetación serrana y su cauce cambiante, que crece con intensidad en verano. Es hogar de truchas y forma parte de un paisaje donde el silencio es protagonista. Entre sus afluentes destacan el Río Sortija, Corralitos y El Salto, que da lugar a dos cascadas escalonadas en una falda abrupta.',
    icono: '🦅',
    imagen: gallery4,
    imagenes: [],
    actividades: ['Pesca de truchas', 'Senderismo', 'Fotografía'],
    destacado: true,
    ubicacion: 'El Durazno/El Trapiche'
  },
  {
    id: 'arroyo-riocito',
    nombre: 'Arroyo Riocito',
    categoria: 'arroyos-naturales',
    descripcion: 'El clásico de las Sierras Centrales. Atraviesa uno de los circuitos más tradicionales de la provincia.',
    descripcionCompleta: 'El Arroyo Riocito atraviesa uno de los circuitos más tradicionales de la provincia, en las estribaciones de la falda oriental de las Sierras de San Luis. Forma parte del itinerario que une localidades como Juana Koslay, Potrero de los Funes, El Volcán, El Trapiche, La Florida, Estancia Grande, Valle de Pancanta, La Carolina, Paso del Rey y la ciudad de San Luis. Este arroyo y sus aguas frescas acompañan a miles de visitantes año tras año, convirtiéndose en símbolo de las escapadas familiares, las tardes de mate al sol y el reencuentro con la naturaleza.',
    icono: '🏞️',
    imagen: riocitoAutumnImage,
    imagenes: [],
    actividades: ['Picnic', 'Baño natural', 'Relajación'],
    destacado: false,
    ubicacion: 'Sierras Centrales'
  },
  {
    id: 'siete-cajones',
    nombre: 'Siete Cajones',
    categoria: 'arroyos-naturales',
    descripcion: 'Naturaleza profunda a pasos de El Trapiche. Siete profundas piletas naturales talladas en roca.',
    descripcionCompleta: 'A solo 3 km de la localidad de El Trapiche, siguiendo un camino de tierra accesible para cualquier vehículo, se encuentra el paraje Siete Cajones, un lugar que sorprende por su geografía única y la energía del agua. Al ingresar al área, serás recibido por el imponente Caldén Centenario, guardián natural del camino. Más adelante, el río —tallando con paciencia durante siglos la roca— ha formado siete profundas piletas naturales, o "cajones", que le dan nombre al lugar. Estos pozos de agua clara y fresca, sin playa pero rodeados de vegetación serrana, son ideales para nadar, relajarse o simplemente contemplar el paisaje. Ubicado a 1.043 msnm, con 20 metros de ancho promedio y un entorno que mezcla naturaleza y servicios, Siete Cajones ofrece comercios, paradores, cabañas, comedores, kioscos y venta de productos regionales.',
    icono: '♒',
    imagen: sieteCajonesAutumnImage,
    imagenes: [],
    actividades: ['Natación', 'Contemplación', 'Compras regionales'],
    destacado: true,
    ubicacion: 'El Trapiche'
  },
  {
    id: 'salto-negra-libre',
    nombre: 'Salto de la Negra Libre',
    categoria: 'arroyos-naturales',
    descripcion: 'Cascada de 65 metros con leyenda. Simboliza libertad y resistencia en el Valle del Pancanta.',
    descripcionCompleta: 'A solo 20 km de la ciudad del El Trapiche, escondido entre los paredones del Valle del Pancanta, se encuentra uno de los lugares más mágicos y conmovedores de la región: el Salto de la Negra Libre. Naturaleza y mito se funden en este rincón donde una cascada de 65 metros de altura cae en tres tramos sobre un pozón de aguas profundas, rodeado de paredes rocosas y silencio serrano. Según la leyenda, una esclava negra escapó de su amo en tiempos coloniales, buscando libertad. En su desesperación, se arrojó al vacío, y desde entonces, se dice que sus lágrimas y su espíritu alimentan esa caída de agua que hoy emociona a quien la contempla. El acceso se realiza a caballo o con excursiones guiadas desde Las Verbenas, a 9 km de distancia.',
    icono: '🌊',
    imagen: gallery7,
    imagenes: [],
    actividades: ['Cabalgatas', 'Caminatas', 'Turismo histórico'],
    destacado: true,
    ubicacion: 'Valle del Pancanta'
  },

  // Puente Colgante
  {
    id: 'puente-colgante',
    nombre: 'Puente Colgante de Balde de la Isla',
    categoria: 'infraestructura',
    descripcion: 'Una experiencia suspendida sobre el Río Quinto. Pasarela de 80 metros de largo a 40 metros de altura.',
    descripcionCompleta: 'En Balde de la Isla, el paisaje serrano se enriquece con una obra única: el Puente Colgante, una pasarela de 80 metros de largo y 1 metro de ancho que se eleva a 40 metros sobre el Río Quinto. Este puente permite la circulación de hasta cinco personas al mismo tiempo y al cruzarlo, se accede a vistas imponentes del río y sus alrededores, haciendo de esta travesía un punto imperdible para los amantes de la naturaleza y la fotografía.',
    icono: '🌉',
    imagen: gallery8,
    imagenes: [],
    actividades: ['Fotografía', 'Contemplación', 'Aventura'],
    destacado: true,
    ubicacion: 'Balde de la Isla'
  },

  // Lugares Históricos y Culturales
  {
    id: 'paso-del-rey',
    nombre: 'Paso del Rey',
    categoria: 'historico-cultural',
    descripcion: 'Pequeña localidad con valor histórico y natural, rodeada de bosques nativos y miradores panorámicos.',
    descripcionCompleta: 'Pequeña localidad con valor histórico y natural, rodeada de bosques nativos y con miradores panorámicos. Escenario de encuentros culturales y eventos tradicionales que mantienen viva la historia y las tradiciones de la región.',
    icono: '🏛️',
    imagen: pasoDelReyAutumnImage,
    imagenes: [pasoDelReyAutumnImage],
    actividades: ['Turismo cultural', 'Senderismo', 'Fotografía'],
    destacado: false,
    ubicacion: 'Paso del Rey'
  },
  {
    id: 'los-tapiales',
    nombre: 'Los Tapiales',
    categoria: 'historico-cultural',
    descripcion: 'Lugar de nacimiento del coronel Juan Pascual Pringles, héroe puntano. Cuenta con un monolito en su memoria.',
    descripcionCompleta: 'Lugar de nacimiento del coronel Juan Pascual Pringles, máximo héroe puntano que participó en la gesta libertadora. Cuenta con un monolito en su memoria, punto de visita histórica. Espacio de homenaje y reflexión sobre la historia local y provincial.',
    icono: '🗿',
    imagen: losTapialesAutumnImage,
    imagenes: [losTapialesAutumnImage],
    actividades: ['Turismo histórico', 'Educación', 'Reflexión'],
    destacado: false,
    ubicacion: 'Los Tapiales'
  },

  // Ruta del Macizo Central
  {
    id: 'macizo-central',
    nombre: 'Ruta del Macizo Central',
    categoria: 'rutas-senderos',
    descripcion: 'Corredor natural que une paisajes serranos y biodiversidad única. Ideal para turismo activo.',
    descripcionCompleta: 'En el corazón de San Luis, existe un territorio que vibra con fuerza propia: el Macizo Central. Más que un destino, es una experiencia que transforma. Una invitación a desconectarte del ruido y reconectar con la naturaleza en su estado más puro. Desde las aguas tranquilas del Dique La Florida hasta las alturas majestuosas del Paso del Rey, este corredor natural ofrece un paisaje cambiante que asombra en cada curva. Montañas, ríos, reservas y miradores se combinan con la flora y la fauna autóctona, creando una sinfonía de colores, aromas y sonidos. La Ruta del Macizo Central une todos estos escenarios. Ideal para aventureros, senderistas, ciclistas o amantes del turismo contemplativo, cada parada es una oportunidad para descubrir la conexión entre tierra, agua y cielo.',
    icono: '🏔️',
    imagen: panoramicaImage,
    imagenes: [panoramicaImage, gallery9],
    actividades: ['Senderismo', 'Observación fauna', 'Turismo activo'],
    destacado: true,
    ubicacion: 'Macizo Central'
  },
  {
    id: 'reserva-florofaunistica',
    nombre: 'Reserva Florofaunística',
    categoria: 'reservas',
    descripcion: 'Espacio protegido de flora y fauna autóctona del monte puntano con senderos interpretativos.',
    descripcionCompleta: 'Espacio protegido de flora y fauna autóctona del monte puntano. Cuenta con senderos interpretativos para avistaje de animales y plantas. En este refugio natural, el monte nativo resguarda especies únicas como el puma, el gato montés y una infinidad de aves. Un recorrido por sus senderos es un viaje hacia el interior del ecosistema puntano, donde el ser humano vuelve a sentirse parte del todo. Horario de visita: viernes a domingos y feriados, de 9 a 18 hs. Visitas guiadas programadas para educación ambiental y turismo consciente.',
    icono: '🦎',
    imagen: gallery10,
    imagenes: [gallery10],
    actividades: ['Avistaje fauna', 'Educación ambiental', 'Senderismo'],
    destacado: false,
    ubicacion: 'El Trapiche'
  }
];

// Datos de turismo religioso
const religiousData = [
  {
    id: 'iglesia-rosario',
    nombre: 'Iglesia Nuestra Señora del Rosario',
    descripcion: 'Construida en 1937, centro espiritual del pueblo. Alberga imágenes de gran valor religioso y cultural.',
    fiesta: '7 de octubre',
    ubicacion: 'El Trapiche',
    icono: '⛪'
  },
  {
    id: 'cristo-blanco',
    nombre: 'Cristo Blanco',
    descripcion: 'Réplica del Cristo Redentor instalada en los años 40. Ubicado en la costanera, símbolo de paz y protección.',
    ubicacion: 'El Trapiche - Costanera',
    icono: '✝️'
  },
  {
    id: 'iglesia-lourdes',
    nombre: 'Iglesia Nuestra Señora de Lourdes',
    descripcion: 'Inaugurada en 1998. Convoca fieles y visitantes cada 11 de febrero en su festividad.',
    fiesta: '11 de febrero',
    ubicacion: 'Río Grande',
    icono: '⛪'
  },
  {
    id: 'iglesia-lujan',
    nombre: 'Iglesia Nuestra Señora de Luján',
    descripcion: 'Fundada en 1995. Posee obra religiosa del artista Ricardo Carpani.',
    ubicacion: 'La Florida',
    icono: '⛪'
  },
  {
    id: 'capilla-campamento',
    nombre: 'Capilla Campamento Viejo',
    descripcion: 'Antigua capilla de los primeros pobladores. Se realizan misas en fechas especiales.',
    ubicacion: 'La Florida',
    icono: '⛪'
  },
  {
    id: 'iglesia-nicho',
    nombre: 'Iglesia Nuestra Señora del Rosario del Nicho',
    descripcion: 'Construida a fines del siglo XVIII. Declarada monumento histórico, rodeada de bosque nativo.',
    ubicacion: 'Paso del Rey',
    icono: '⛪'
  },
  {
    id: 'virgen-cobrera',
    nombre: 'Santísima Virgen de la Cobrera',
    descripcion: 'Santuario natural inaugurado en 2019. Lugar de aparición mariana con gran devoción popular.',
    ubicacion: 'Pampa del Tamboreo',
    icono: '🙏'
  },
  {
    id: 'santo-cristo-mirador',
    nombre: 'Santo Cristo del Mirador',
    descripcion: 'Escultura con vista panorámica al dique. Punto de encuentro para peregrinos y turistas.',
    ubicacion: 'Dique Antonio Esteban Agüero',
    icono: '✝️'
  }
];

const AttractionsContent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAttractions, setFilteredAttractions] = useState(attractionsData);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showReligious, setShowReligious] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = attractionsData.filter(attraction => {
      const matchesSearch = attraction.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           attraction.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'todos' || attraction.categoria === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    setFilteredAttractions(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = [
    { id: 'todos', name: 'Todos los atractivos', icon: '🎯' },
    { id: 'rios-embalses', name: 'Ríos y Embalses', icon: '🌊' },
    { id: 'arroyos-naturales', name: 'Arroyos y Paraísos', icon: '🏞️' },
    { id: 'historico-cultural', name: 'Históricos', icon: '🏛️' },
    { id: 'rutas-senderos', name: 'Rutas y Senderos', icon: '🥾' },
    { id: 'reservas', name: 'Reservas Naturales', icon: '🦎' },
    { id: 'infraestructura', name: 'Infraestructura', icon: '🌉' }
  ];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('todos');
  };

  const openWhatsApp = (attraction = null) => {
    const message = attraction 
      ? `Hola, me interesa información sobre ${attraction.nombre} en El Trapiche. ¿Pueden brindarme más detalles?`
      : `Hola, me interesa información sobre los atractivos turísticos de El Trapiche. ¿Pueden ayudarme?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5492664891372?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const featuredAttractions = filteredAttractions.filter(attraction => attraction.destacado);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-green-600 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-3xl"></div>
      </div>

      <Header />
      
      {/* Hero Section con imagen de fondo */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroAutumnImage} 
            alt="El Trapiche" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="mb-8 text-white/80 hover:text-white flex items-center transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block text-6xl md:text-8xl mb-4">🏞️</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              Atractivos Turísticos
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto drop-shadow-lg">
              Descubrí todos los tesoros naturales, históricos y culturales que hacen de El Trapiche un destino único
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm md:text-base">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
              >
                <span className="mr-2">🌊</span>
                Ríos y diques
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
              >
                <span className="mr-2">🏛️</span>
                Patrimonio histórico
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
              >
                <span className="mr-2">🦎</span>
                Reservas naturales
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Hero Visual con imágenes destacadas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Un vistazo a El Trapiche</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Imágenes que capturan la belleza natural de nuestros paisajes</p>
          </motion.div>

          {/* Grid de imágenes hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[gallery1, gallery5, gallery3, gallery4].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(img)}
              >
                <img 
                  src={img} 
                  alt={`El Trapiche ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atractivos Destacados con imágenes grandes */}
      {featuredAttractions.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full mb-4">
                ⭐ Destacados
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Imperdibles de El Trapiche</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Los atractivos más emblemáticos y visitados de nuestra región</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredAttractions.slice(0, 6).map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden group"
                >
                  {/* Imagen principal grande */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img 
                      src={attraction.imagen} 
                      alt={attraction.nombre}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Overlay con info básica */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-4xl">{attraction.icono}</span>
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                          DESTACADO
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{attraction.nombre}</h3>
                      <p className="text-sm text-blue-200">{attraction.ubicacion}</p>
                    </div>

                    {/* Botón para ver galería si tiene múltiples imágenes */}
                    {attraction.imagenes && attraction.imagenes.length > 1 && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                          📷 +{attraction.imagenes.length - 1}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{attraction.descripcion}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {attraction.actividades?.slice(0, 4).map((actividad, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {actividad}
                        </span>
                      ))}
                    </div>

                    {/* Galería pequeña de imágenes adicionales */}
                    {attraction.imagenes && attraction.imagenes.length > 1 && (
                      <div className="flex gap-2 mb-6 overflow-x-auto">
                        {attraction.imagenes.slice(1, 4).map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`${attraction.nombre} ${idx + 2}`}
                            className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:scale-110 transition-transform"
                            onClick={() => openLightbox(img)}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setExpandedCard(expandedCard === attraction.id ? null : attraction.id)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-colors"
                      >
                        {expandedCard === attraction.id ? 'Ver menos' : 'Leer más'}
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openWhatsApp(attraction)}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                        </svg>
                        Consultar
                      </motion.button>
                    </div>

                    {/* Descripción expandida */}
                    <AnimatePresence>
                      {expandedCard === attraction.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 text-gray-600 leading-relaxed">
                            {attraction.descripcionCompleta}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtros y Búsqueda */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-6">
          {/* Buscador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar atractivos turísticos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all text-lg bg-white shadow-lg"
              />
            </div>
          </motion.div>

          {/* Categorías */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Categorías</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center shadow-lg ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Controles */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {/* Botón turismo religioso */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowReligious(!showReligious)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center shadow-lg ${
                showReligious
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-white text-purple-700 hover:bg-purple-50 border border-purple-200'
              }`}
            >
              <span className="mr-2">⛪</span>
              {showReligious ? 'Ocultar Turismo de Fe' : 'Ver Turismo de Fe'}
            </motion.button>

            {(searchTerm || selectedCategory !== 'todos') && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearFilters}
                className="px-4 py-3 text-red-600 hover:text-red-800 flex items-center bg-white rounded-2xl shadow-lg border border-red-200 hover:bg-red-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limpiar filtros
              </motion.button>
            )}
          </div>

          {/* Contador de resultados */}
          <div className="mt-6 text-center">
            <span className="text-gray-600 font-medium bg-white px-4 py-2 rounded-full shadow-md">
              {filteredAttractions.length} atractivos encontrados
              {showReligious && ` + ${religiousData.length} sitios religiosos`}
            </span>
          </div>
        </div>
      </section>

      {/* Turismo de Fe */}
      <AnimatePresence>
        {showReligious && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="py-16 bg-gradient-to-br from-purple-50 to-pink-50"
          >
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                  <span className="mr-3">⛪</span>
                  Circuito Religioso
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Recorrido por los sitios de fe y devoción que enriquecen el alma de El Trapiche
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {religiousData.map((site, index) => (
                  <motion.div
                    key={site.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">{site.icono}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800 text-center">{site.nombre}</h3>
                    <p className="text-sm text-purple-600 mb-3 text-center font-medium">{site.ubicacion}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{site.descripcion}</p>
                    {site.fiesta && (
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg text-center">
                        <span className="text-purple-800 font-semibold text-sm flex items-center justify-center">
                          🎉 {site.fiesta}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Lista completa de atractivos con imágenes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Todos los Atractivos</h2>
            <p className="text-gray-600">Explora la colección completa de lugares increíbles</p>
          </div>

          <AnimatePresence>
            {filteredAttractions.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No se encontraron atractivos</h3>
                <p className="text-gray-600 mb-4">Prueba ajustando tus filtros de búsqueda</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 font-medium"
                >
                  Ver todos los atractivos
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAttractions.map((attraction, index) => (
                  <motion.div
                    key={attraction.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Imagen principal */}
                    <div className="relative h-48 overflow-hidden group">
                      <img 
                        src={attraction.imagen} 
                        alt={attraction.nombre}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 cursor-pointer"
                        onClick={() => openLightbox(attraction.imagen)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Overlay con icono y destacado */}
                      <div className="absolute top-4 left-4">
                        <span className="text-2xl bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                          {attraction.icono}
                        </span>
                      </div>
                      
                      {attraction.destacado && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 bg-yellow-400 text-yellow-800 text-xs font-bold rounded-full">
                            DESTACADO
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">{attraction.ubicacion}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{attraction.nombre}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {expandedCard === attraction.id 
                          ? attraction.descripcionCompleta || attraction.descripcion
                          : attraction.descripcion
                        }
                      </p>
                      
                      {attraction.actividades && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {attraction.actividades.map((actividad, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {actividad}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Galería pequeña si tiene múltiples imágenes */}
                      {attraction.imagenes && attraction.imagenes.length > 1 && (
                        <div className="flex gap-1 mb-4">
                          {attraction.imagenes.slice(1, 4).map((img, idx) => (
                            <img 
                              key={idx}
                              src={img} 
                              alt={`${attraction.nombre} ${idx + 2}`}
                              className="w-12 h-12 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                              onClick={() => openLightbox(img)}
                            />
                          ))}
                        </div>
                      )}

                      <div className="flex gap-2">
                        {attraction.descripcionCompleta && (
                          <button
                            onClick={() => setExpandedCard(expandedCard === attraction.id ? null : attraction.id)}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                          >
                            {expandedCard === attraction.id ? 'Ver menos' : 'Ver más'}
                          </button>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => openWhatsApp(attraction)}
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                          </svg>
                          Info
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox para imágenes */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white text-2xl hover:scale-110 transition-transform"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>
            
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sección CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Planeando tu visita?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contáctanos para recibir información personalizada sobre horarios, accesos y recomendaciones para cada atractivo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openWhatsApp()}
              className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg transition-colors inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
              Planificar mi visita
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

const AttractionsPage = () => {
  return (
    <NavigationProvider>
      <AttractionsContent />
    </NavigationProvider>
  );
};

export default AttractionsPage;