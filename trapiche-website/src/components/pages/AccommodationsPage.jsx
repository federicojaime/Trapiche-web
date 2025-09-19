// src/components/pages/AccommodationsPage.jsx - Página de Alojamientos
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NavigationProvider } from '../../context/NavigationContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import WhatsAppWidget from '../ui/WhatsAppWidget';

// Datos de alojamientos basados en el documento
const accommodationsData = [
  { name: 'El Santy', capacity: '4 cabañas: 2 p/6, 2 p/4 + 2 dormis', phone: '2664311212', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Don Anselmo', capacity: '2 cabañas para 4', phone: '2647784419', type: 'cabaña', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Cerro Colonial I', capacity: '8 cabañas: 3 p/2, 1 p/5, 4 p/4', phone: '1160254869', type: 'cabaña', maxGuests: 5, pool: false, location: 'sierra' },
  { name: 'Ayres del Trapiche', capacity: '3 cabañas: 1 p/4, 2 p/5 o 6', phone: '2664213990', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Alto Horizonte', capacity: '2 cabañas con pileta', phone: null, type: 'cabaña', maxGuests: 4, pool: true, location: 'sierra' },
  { name: 'Cabañas de las Sierras', capacity: '4 cabañas', phone: '2664586301', type: 'cabaña', maxGuests: 4, pool: false, location: 'sierra' },
  { name: 'Cabañas Cuñas del Trapiche', capacity: '3 cabañas', phone: '2664586301', type: 'cabaña', maxGuests: 4, pool: false, location: 'sierra' },
  { name: 'Complejo Los Almendros SRL', capacity: 'Dormis', phone: '2664757205', type: 'complejo', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Los Tilos', capacity: '4 cabañas para 6', phone: '2613048006', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas Ayampitin', capacity: '2 cabañas para 6', phone: '2614856535', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas del Sol', capacity: '6 cabañas: 4 p/4 y 2 p/2', phone: '2664580308', type: 'cabaña', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Villa Kupa', capacity: '4 cabañas p/5, sin pileta', phone: '1150158308', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'La Lucila', capacity: '6 cabañas: 1 p/3, 3 p/5, 2 p/8', phone: '2664200068', type: 'cabaña', maxGuests: 8, pool: false, location: 'centro' },
  { name: 'Balcones del Vertedero', capacity: '4 cabañas', phone: '1159314602', type: 'cabaña', maxGuests: 4, pool: false, location: 'río' },
  { name: 'Nina Kuru', capacity: '2 cabañas para 7', phone: '1167197771', type: 'cabaña', maxGuests: 7, pool: false, location: 'sierra' },
  { name: 'Los Pájaros', capacity: '3 habitaciones p/4', phone: '26644270998', type: 'hostería', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Portal del Dique', capacity: '3 cabañas p/5', phone: '266436199', type: 'cabaña', maxGuests: 5, pool: false, location: 'río' },
  { name: 'La Gabita', capacity: '2 cabañas p/4', phone: '1154153415', type: 'cabaña', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Hostería El Ciervo', capacity: '4 cabañas: 1 p/2, 3 p/4 + 17 dormis', phone: '2664504363', type: 'hostería', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'El Sueño de Mi Viejo', capacity: '8 cabañas: 3 p/4, 3 p/2, 2 p/5 + 3 dormis', phone: '2615020090', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'La Cascada', capacity: '4 cabañas: 1 p/3, 1 p/4, 1 p/5, 1 p/6', phone: '2664667600', type: 'cabaña', maxGuests: 6, pool: false, location: 'sierra' },
  { name: 'Complejo Siyabona', capacity: '9 habitaciones', phone: '2664642667', type: 'complejo', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Virgen de Lourdes', capacity: '1 cabaña p/5', phone: '2664819802', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Solanas del Mirador', capacity: '4 cabañas c/pileta p/5', phone: '2664309566', type: 'cabaña', maxGuests: 5, pool: true, location: 'sierra' },
  { name: 'Onda Verde', capacity: '2 cabañas p/5', phone: '2664483298', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Susurro del Río', capacity: '4 cabañas: 1 p/8, 1 p/6, 1 p/4, 1 p/5', phone: '2664701450', type: 'cabaña', maxGuests: 8, pool: false, location: 'río' },
  { name: 'Altos del Amanecer', capacity: '3 cabañas', phone: '2664486000', type: 'cabaña', maxGuests: 4, pool: false, location: 'sierra' },
  { name: 'Cabañas Las Grutas', capacity: '4 cabañas p/4', phone: '2657646113', type: 'cabaña', maxGuests: 4, pool: false, location: 'sierra' },
  { name: 'Alquiler El Trapiche', capacity: '2 cabañas: 1 p/4 y 1 p/8', phone: '2615958027', type: 'cabaña', maxGuests: 8, pool: false, location: 'centro' },
  { name: 'Dayma', capacity: '3 cabañas: 2 p/4 y 1 p/6', phone: '2664332521', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas Pinky', capacity: '4 cabañas: 2 p/5, 1 p/4, 1 p/6', phone: '1154089872', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Ruka Malbec', capacity: '8 cabañas c/pileta: 4 p/5 y 4 p/3', phone: '2614188339', type: 'cabaña', maxGuests: 5, pool: true, location: 'sierra' },
  { name: 'Cabañas La Florida', capacity: '1 cabaña p/5', phone: '2664502757', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Cabañas del Río Grande', capacity: '6 cabañas: 4 p/3 y 2 p/2', phone: null, type: 'cabaña', maxGuests: 3, pool: false, location: 'río' },
  { name: 'Cabañas Argentinas', capacity: '6 cabañas p/6', phone: '2634200170', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas Araceli', capacity: '2 cabañas p/5', phone: '1153108701', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'SantyFran', capacity: 'Para 6 personas', phone: '2664318810', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas Don Antonio', capacity: '2 cabañas p/6', phone: '2616590019', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Elunay', capacity: '1 cabaña p/6', phone: '2657625656', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas del Río', capacity: '2 cabañas p/2', phone: null, type: 'cabaña', maxGuests: 2, pool: false, location: 'río' },
  { name: 'Las González', capacity: '2 cabañas p/4', phone: '266726192', type: 'cabaña', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Cabañas Lalo', capacity: '4 cabañas: 2 p/2 y 2 p/6', phone: '1163084136', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Casa de Alquiler Soledad', capacity: '2 departamentos p/4', phone: '2664834012', type: 'departamento', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Las Zarinas', capacity: '4 cabañas: 1 p/12, 1 p/8, 2 p/6', phone: '1150019261', type: 'cabaña', maxGuests: 12, pool: false, location: 'centro' },
  { name: 'Cabañas Toronjil', capacity: '2 cabañas: 1 p/2 y 1 p/4', phone: '1157478766', type: 'cabaña', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Cabañas Mis Amores', capacity: '2 cabañas: 1 p/6 y 1 p/4', phone: '2664732264', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas Virgen de la Cobreda', capacity: '2 cabañas p/6', phone: '2664314166', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas San Expedito', capacity: '2 cabañas: 1 p/6 y 1 p/8', phone: '2657299879', type: 'cabaña', maxGuests: 8, pool: false, location: 'centro' },
  { name: 'Cabañas Jocolí', capacity: '4 cabañas: 1 p/6, 1 p/5 y 2 p/3', phone: '111564572661', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas Los Robles', capacity: '3 cabañas: 1 p/6 y 2 p/4', phone: '1140868238', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'La Pluma Verde', capacity: '1 cabaña para 6', phone: '2613016572', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'La Bonita', capacity: '5 cabañas: 2 p/2 o 3, 2 p/5/6, 1 p/6', phone: '5491166728271', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Aires de mi Tierra', capacity: '2 cabañas p/5', phone: '2664722056', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'B y C Cabañas', capacity: '1 cabaña', phone: null, type: 'cabaña', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Cabañas Sol y Luna', capacity: '8 cabañas: 5 p/4, 3 p/6', phone: '2664186312', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'García Eventos El Trapiche', capacity: '8 cabañas c/pileta: 6 p/+5, 2 p/5', phone: '2664920712', type: 'complejo', maxGuests: 6, pool: true, location: 'centro' },
  { name: 'San Diego', capacity: '3 cabañas: 1 p/4, 2 p/5', phone: '2665131366', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Monte Tabor', capacity: '8 cabañas c/pileta hasta 4 pers', phone: '2664892620', type: 'cabaña', maxGuests: 4, pool: true, location: 'sierra' },
  { name: 'Cabañas Esperanza', capacity: '4 cabañas: 2 p/8 y 2 p/6', phone: '1132789336', type: 'cabaña', maxGuests: 8, pool: false, location: 'centro' },
  { name: 'Cerro Colonial II', capacity: '4 cabañas: 3 p/2 y 1 p/3 o 4', phone: '2664782721', type: 'cabaña', maxGuests: 4, pool: false, location: 'sierra' },
  { name: 'Cabaña Mariza', capacity: 'Casa para 6 personas', phone: '2665028777', type: 'casa', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Lugar Soñado', capacity: '6 cabañas: 2 p/2, 2 p/4, 2 p/6', phone: '2664209314', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Puesta del Sol', capacity: '2 cabañas: 1 p/5 y 1 p/4', phone: '1558452251', type: 'cabaña', maxGuests: 5, pool: false, location: 'sierra' },
  { name: 'El Sueño de Mi Viejo', capacity: '2 cabañas para +5', phone: '2615619669', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Las Tranquéritas', capacity: '3 cabañas: 1 p/8, 1 p/3', phone: '1161801499', type: 'cabaña', maxGuests: 8, pool: false, location: 'centro' },
  { name: 'Cabañas Mecongue', capacity: '4 cabañas para 5', phone: '2664483037', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Cabañas del Trapiche', capacity: '2 cabañas: 1 p/6 y 1 p/4', phone: '2664730568', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Complejo Nimaja', capacity: '4 cabañas c/pileta: 2 p/3, 1 p/4, 1 p/5', phone: '1159487061', type: 'complejo', maxGuests: 5, pool: true, location: 'centro' },
  { name: 'Mi Ángel', capacity: '6 cabañas para +5 personas', phone: '2664734218', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Hostería Rosales', capacity: '6 habitaciones, capacidad 35 personas', phone: '2664564802', type: 'hostería', maxGuests: 35, pool: false, location: 'centro' },
  { name: 'El Socorro Cabañas', capacity: '4 cabañas: 2 p/2, 2 p/4', phone: '2664376948', type: 'cabaña', maxGuests: 4, pool: false, location: 'centro' },
  { name: 'Cabañas El Encuentro', capacity: '2 cabañas para 6 personas', phone: '2664752504', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas UNSL', capacity: '3 cabañas para 6', phone: null, type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'Cabañas Sprinter', capacity: '3 cabañas para 2, 4 y 6 personas', phone: '2615586935', type: 'cabaña', maxGuests: 6, pool: false, location: 'centro' },
  { name: 'El Sueño de Mi Viejo (Riocito)', capacity: '2 cabañas para 5', phone: '2615619669', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' },
  { name: 'Cabañas Las Pampeanas', capacity: '2 cabañas para 5', phone: '2302507463', type: 'cabaña', maxGuests: 5, pool: false, location: 'centro' }
];


const AccommodationsContent = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('todos');
    const [filterGuests, setFilterGuests] = useState('todos');
    const [filterPool, setFilterPool] = useState('todos');
    const [filterLocation, setFilterLocation] = useState('todos');
    const [filteredAccommodations, setFilteredAccommodations] = useState(accommodationsData);
    const [viewMode, setViewMode] = useState('grid'); // grid or list

    // Scroll al tope al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filtrar alojamientos
    useEffect(() => {
        let filtered = accommodationsData.filter(acc => {
            const matchesSearch = acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                acc.capacity.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesType = filterType === 'todos' || acc.type === filterType;

            const matchesGuests = filterGuests === 'todos' ||
                (filterGuests === '1-4' && acc.maxGuests <= 4) ||
                (filterGuests === '5-8' && acc.maxGuests >= 5 && acc.maxGuests <= 8) ||
                (filterGuests === '9+' && acc.maxGuests >= 9);

            const matchesPool = filterPool === 'todos' ||
                (filterPool === 'con' && acc.pool) ||
                (filterPool === 'sin' && !acc.pool);

            const matchesLocation = filterLocation === 'todos' || acc.location === filterLocation;

            return matchesSearch && matchesType && matchesGuests && matchesPool && matchesLocation;
        });

        setFilteredAccommodations(filtered);
    }, [searchTerm, filterType, filterGuests, filterPool, filterLocation]);

    const openWhatsApp = (accommodation) => {
        const message = `Hola, me interesa información sobre ${accommodation.name}. ${accommodation.capacity}. ¿Está disponible?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/54${accommodation.phone}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const callPhone = (phone) => {
        if (phone !== '—') {
            window.open(`tel:+54${phone}`, '_self');
        }
    };

    const clearFilters = () => {
        setSearchTerm('');
        setFilterType('todos');
        setFilterGuests('todos');
        setFilterPool('todos');
        setFilterLocation('todos');
    };

    const getLocationIcon = (location) => {
        const icons = {
            'centro': '🏘️',
            'sierra': '🏔️',
            'río': '🏞️'
        };
        return icons[location] || '📍';
    };

    const getTypeIcon = (type) => {
        const icons = {
            'cabaña': '🏠',
            'hostería': '🏨',
            'complejo': '🏢'
        };
        return icons[type] || '🏠';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <button
                        onClick={() => navigate('/')}
                        className="mb-6 text-white/80 hover:text-white flex items-center transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver al inicio
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Alojamientos</h1>
                        <p className="text-xl mb-6 max-w-2xl">Encontrá el lugar perfecto para tu estadía en El Trapiche</p>
                        <div className="flex items-center space-x-4 text-blue-200">
                            <span className="flex items-center">
                                <span className="mr-2">🏠</span>
                                {accommodationsData.length} alojamientos disponibles
                            </span>
                            <span className="flex items-center">
                                <span className="mr-2">📍</span>
                                El Trapiche, San Luis
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filtros y Búsqueda */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        {/* Buscador */}
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Buscar alojamientos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Filtros */}
                        <div className="flex flex-wrap gap-3">
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                            >
                                <option value="todos">Todos los tipos</option>
                                <option value="cabaña">Cabañas</option>
                                <option value="hostería">Hosterías</option>
                                <option value="complejo">Complejos</option>
                            </select>

                            <select
                                value={filterGuests}
                                onChange={(e) => setFilterGuests(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                            >
                                <option value="todos">Cualquier capacidad</option>
                                <option value="1-4">1-4 personas</option>
                                <option value="5-8">5-8 personas</option>
                                <option value="9+">9+ personas</option>
                            </select>

                            <select
                                value={filterPool}
                                onChange={(e) => setFilterPool(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                            >
                                <option value="todos">Con o sin pileta</option>
                                <option value="con">Con pileta</option>
                                <option value="sin">Sin pileta</option>
                            </select>

                            <select
                                value={filterLocation}
                                onChange={(e) => setFilterLocation(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                            >
                                <option value="todos">Todas las ubicaciones</option>
                                <option value="centro">Centro</option>
                                <option value="sierra">Sierra</option>
                                <option value="río">Río</option>
                            </select>

                            {(searchTerm || filterType !== 'todos' || filterGuests !== 'todos' || filterPool !== 'todos' || filterLocation !== 'todos') && (
                                <button
                                    onClick={clearFilters}
                                    className="px-3 py-2 text-gray-600 hover:text-gray-800 text-sm flex items-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Limpiar
                                </button>
                            )}
                        </div>

                        {/* Toggle Vista */}
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : 'text-gray-600'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : 'text-gray-600'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Resultados */}
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                        <span>{filteredAccommodations.length} alojamientos encontrados</span>
                        {(searchTerm || filterType !== 'todos' || filterGuests !== 'todos' || filterPool !== 'todos' || filterLocation !== 'todos') && (
                            <span className="text-blue-600">Filtros aplicados</span>
                        )}
                    </div>
                </div>
            </section>

            {/* Lista de Alojamientos */}
            <section className="py-8">
                <div className="container mx-auto px-6">
                    <AnimatePresence>
                        {filteredAccommodations.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-16"
                            >
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold mb-2">No se encontraron alojamientos</h3>
                                <p className="text-gray-600 mb-4">Prueba ajustando tus filtros de búsqueda</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Ver todos los alojamientos
                                </button>
                            </motion.div>
                        ) : (
                            <div className={viewMode === 'grid'
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                                : 'space-y-4'
                            }>
                                {filteredAccommodations.map((accommodation, index) => (
                                    <motion.div
                                        key={accommodation.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex items-center' : ''
                                            }`}
                                    >
                                        {viewMode === 'grid' ? (
                                            <>
                                                {/* Vista Grid */}
                                                <div className="p-6">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div>
                                                            <div className="flex items-center mb-2">
                                                                <span className="text-2xl mr-2">{getTypeIcon(accommodation.type)}</span>
                                                                <h3 className="text-xl font-semibold text-gray-800">{accommodation.name}</h3>
                                                            </div>
                                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                                <span className="mr-3">{getLocationIcon(accommodation.location)}</span>
                                                                <span className="capitalize">{accommodation.location}</span>
                                                            </div>
                                                        </div>
                                                        {accommodation.pool && (
                                                            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                                                🏊‍♀️ Pileta
                                                            </div>
                                                        )}
                                                    </div>

                                                    <p className="text-gray-600 mb-4 text-sm">{accommodation.capacity}</p>

                                                    <div className="flex items-center justify-between mb-6">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.196-2.121L17 20zM9 20v-2a3 3 0 013-3h5a3 3 0 013 3v2M9 20H4v-2a3 3 0 015.196-2.121L9 20zM21 12a4 4 0 11-8 0 4 4 0 018 0zM7 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                            Máx. {accommodation.maxGuests} huéspedes
                                                        </div>
                                                        <span className="text-lg font-bold text-blue-600 capitalize">{accommodation.type}</span>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        {accommodation.phone !== '—' && (
                                                            <>
                                                                <motion.button
                                                                    whileHover={{ scale: 1.02 }}
                                                                    whileTap={{ scale: 0.98 }}
                                                                    onClick={() => openWhatsApp(accommodation)}
                                                                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center text-sm font-medium transition-colors"
                                                                >
                                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                                                                    </svg>
                                                                    WhatsApp
                                                                </motion.button>
                                                                <motion.button
                                                                    whileHover={{ scale: 1.02 }}
                                                                    whileTap={{ scale: 0.98 }}
                                                                    onClick={() => callPhone(accommodation.phone)}
                                                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center text-sm font-medium transition-colors"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                    </svg>
                                                                    Llamar
                                                                </motion.button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {/* Vista Lista */}
                                                <div className="flex-1 p-6">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center mb-2">
                                                                <span className="text-xl mr-3">{getTypeIcon(accommodation.type)}</span>
                                                                <h3 className="text-lg font-semibold text-gray-800">{accommodation.name}</h3>
                                                                {accommodation.pool && (
                                                                    <span className="ml-3 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                                                        🏊‍♀️ Pileta
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                                <span className="mr-2">{getLocationIcon(accommodation.location)}</span>
                                                                <span className="capitalize mr-6">{accommodation.location}</span>
                                                                <span className="mr-2">👥</span>
                                                                <span className="mr-6">Máx. {accommodation.maxGuests} huéspedes</span>
                                                                <span className="capitalize font-medium text-blue-600">{accommodation.type}</span>
                                                            </div>
                                                            <p className="text-gray-600 text-sm">{accommodation.capacity}</p>
                                                        </div>
                                                        <div className="ml-6 flex gap-2">
                                                            {accommodation.phone !== '—' && (
                                                                <>
                                                                    <motion.button
                                                                        whileHover={{ scale: 1.02 }}
                                                                        whileTap={{ scale: 0.98 }}
                                                                        onClick={() => openWhatsApp(accommodation)}
                                                                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center text-sm font-medium transition-colors"
                                                                    >
                                                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                                                                        </svg>
                                                                        WhatsApp
                                                                    </motion.button>
                                                                    <motion.button
                                                                        whileHover={{ scale: 1.02 }}
                                                                        whileTap={{ scale: 0.98 }}
                                                                        onClick={() => callPhone(accommodation.phone)}
                                                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center text-sm font-medium transition-colors"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                        </svg>
                                                                        Llamar
                                                                    </motion.button>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Información adicional */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">¿Necesitas ayuda para elegir?</h2>
                            <p className="text-gray-600 mb-6">
                                Nuestro equipo está aquí para ayudarte a encontrar el alojamiento perfecto para tu estadía en El Trapiche
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <div className="text-3xl mb-4">🎯</div>
                                <h3 className="text-lg font-semibold mb-2">Asesoramiento personalizado</h3>
                                <p className="text-gray-600 text-sm">Te ayudamos a elegir según tus necesidades y presupuesto</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <div className="text-3xl mb-4">📅</div>
                                <h3 className="text-lg font-semibold mb-2">Reservas directas</h3>
                                <p className="text-gray-600 text-sm">Contacta directamente con cada alojamiento para disponibilidad</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <div className="text-3xl mb-4">🏔️</div>
                                <h3 className="text-lg font-semibold mb-2">Información local</h3>
                                <p className="text-gray-600 text-sm">Conocemos cada rincón de El Trapiche para recomendarte mejor</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4">Contacto general para consultas</h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <motion.a
                                    href="https://wa.me/5492664891372?text=Hola, necesito ayuda para elegir alojamiento en El Trapiche"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg flex items-center font-medium transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                                    </svg>
                                    Consultar por WhatsApp
                                </motion.a>
                                <motion.a
                                    href="tel:+542664452000"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center font-medium transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    2664452000
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

const AccommodationsPage = () => {
    return (
        <NavigationProvider>
            <AccommodationsContent />
        </NavigationProvider>
    );
};

export default AccommodationsPage;