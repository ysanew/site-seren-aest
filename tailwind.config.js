/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fefdf9',
                    100: '#fdf9f0',
                    200: '#faf2de',
                    300: '#f4e6c1',
                    400: '#ecd49b',
                    500: '#d4af37',
                    600: '#b8941f',
                    700: '#9c7a16',
                    800: '#7d6214',
                    900: '#644f15',
                },
                secondary: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                },
                yellow: {
                    50: '#fefce8',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                accent: {
                    gold: '#d4af37',
                    'gold-light': '#f4e6c1',
                    'gold-dark': '#b8941f',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-playfair)'],
            },
            backgroundImage: {
                'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                'gradient-warm': 'linear-gradient(135deg, #fefdf9 0%, #faf2de 100%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            boxShadow: {
                'warm': '0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)',
                'warm-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -2px rgba(212, 175, 55, 0.05)',
                'warm-xl': '0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 10px 10px -5px rgba(212, 175, 55, 0.04)',
            },
        },
    },
    plugins: [],
}
