// tailwind.config.js - Configuración con paleta invernal
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'trapiche-blue': '#E7AD5C',

                // Nueva paleta invernal
                'winter': {
                    '50': '#f8fafc',
                    '100': '#f1f5f9',
                    '200': '#e2e8f0',
                    '300': '#cbd5e1',
                    '400': '#94a3b8',
                    '500': '#64748b',
                    '600': '#475569',
                    '700': '#334155',
                    '800': '#1e293b',
                    '900': '#0f172a',
                    '950': '#020617',
                },
                'ice': {
                    '50': '#f0f9ff',
                    '100': '#e0f2fe',
                    '200': '#bae6fd',
                    '300': '#7dd3fc',
                    '400': '#38bdf8',
                    '500': '#0ea5e9',
                    '600': '#0284c7',
                    '700': '#0369a1',
                    '800': '#075985',
                    '900': '#0c4a6e',
                    '950': '#082f49',
                },
                'snow': {
                    '50': '#ffffff',
                    '100': '#fefefe',
                    '200': '#fafafa',
                    '300': '#f5f5f5',
                    '400': '#efefef',
                    '500': '#e5e5e5',
                    '600': '#d4d4d4',
                    '700': '#a3a3a3',
                    '800': '#737373',
                    '900': '#525252',
                    '950': '#404040',
                },
            },
            backgroundImage: {
                'winter-texture': "url('/src/assets/images/winter-texture.png')",
                'snow-pattern': "url('/src/assets/images/snow-pattern.svg')",
                'hero-winter': "url('/src/assets/images/hero-winter.jpg')",
            },
            boxShadow: {
                'winter': '0 4px 20px -2px rgba(59, 130, 246, 0.25)',
                'frost': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            animation: {
                'snow-fall': 'snowfall 8s linear infinite',
                'frost': 'frost 4s ease-in-out infinite',
                'shimmer': 'shimmer 2s ease-in-out infinite alternate',
            },
            keyframes: {
                snowfall: {
                    '0%': { transform: 'translateY(-10vh) translateX(0px)', opacity: 0 },
                    '10%': { opacity: 1 },
                    '100%': { transform: 'translateY(100vh) translateX(100px)', opacity: 0 },
                },
                frost: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                shimmer: {
                    '0%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
}