/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.875rem', { lineHeight: '1.25rem' }],
                sm: ['1rem', { lineHeight: '1.5rem' }],
                base: ['1.125rem', { lineHeight: '1.75rem' }],
                lg: ['1.25rem', { lineHeight: '1.75rem' }],
                xl: ['1.5rem', { lineHeight: '2rem' }],
                '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
                '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '4xl': ['2.75rem', { lineHeight: '3rem' }],
                '5xl': ['3.5rem', { lineHeight: '1' }],
                '6xl': ['4.5rem', { lineHeight: '1' }],
                '7xl': ['5.5rem', { lineHeight: '1' }],
                '8xl': ['7rem', { lineHeight: '1' }],
                '9xl': ['9rem', { lineHeight: '1' }],
            },
            colors: {
                brand: {
                    primary: '#1955A6',
                    secondary: '#5C7625',
                    accent: '#FFFFFF',
                    content: '#000000',
                    orange: '#A3611C',
                    red: '#800303',
                    darkGreen: '#005E38',
                    grayLight: '#9F9F9F',
                    grayDark: '#565658',
                    background: '#FFFFFF',
                    surface: '#F8FAFC',
                    border: 'rgba(25, 85, 166, 0.1)',
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Montserrat', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to))',
            }
        },
    },
    plugins: [],
}
