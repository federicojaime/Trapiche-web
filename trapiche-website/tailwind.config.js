// tailwind.config.js - Configuración con paleta otoñal
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

                // Nueva paleta otoñal
                'autumn': {
                    '50': '#faf6f2',
                    '100': '#f2e8dc',
                    '200': '#e5ceb3',
                    '300': '#d7ae86',
                    '400': '#c89064',
                    '500': '#bd784a',
                    '600': '#b16641',
                    '700': '#934f38',
                    '800': '#774033',
                    '900': '#63372e',
                    '950': '#351c18',
                },
                'maple': {
                    '50': '#fff2ed',
                    '100': '#ffe2d4',
                    '200': '#ffc2a9',
                    '300': '#ff9c74',
                    '400': '#fe6d3c',
                    '500': '#fc4f19',
                    '600': '#ed3a0a',
                    '700': '#c42b0a',
                    '800': '#9c2410',
                    '900': '#7f2211',
                    '950': '#450e07',
                },
                'forest': {
                    '50': '#f2f7f3',
                    '100': '#e0ebe2',
                    '200': '#c2d7c7',
                    '300': '#9abaA2',
                    '400': '#719880',
                    '500': '#547e65',
                    '600': '#416550',
                    '700': '#365343',
                    '800': '#2e4338',
                    '900': '#273831',
                    '950': '#141f1a',
                },
            },
            backgroundImage: {
                'autumn-texture': "url('/src/assets/images/autumn-texture.png')",
                'leaves-pattern': "url('/src/assets/images/leaves-pattern.svg')",
                'hero-autumn': "url('/src/assets/images/hero-autumn.jpg')",
            },
            boxShadow: {
                'autumn': '0 4px 20px -2px rgba(111, 63, 21, 0.25)',
            },
            animation: {
                'fall': 'fall 15s linear infinite',
                'sway': 'sway 6s ease-in-out infinite',
            },
            keyframes: {
                fall: {
                    '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: 0 },
                    '10%': { opacity: 1 },
                    '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 },
                },
                sway: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: [],
}