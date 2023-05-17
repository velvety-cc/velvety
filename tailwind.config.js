/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Newsreader', 'serif'],
        },
        extend: {
            keyframes: {
                'open-menu': {
                    '0%': { transform: 'scaleY(0)' },
                    '80%': { transform: 'scaleY(1.2)' },
                    '100%': { transform: 'scaleY(1)' },
                },
            },
            animation: {
                'open-menu': 'open-menu 0.5s ease-in-out forwards',
            },
        },
    },
    plugins: [],
};
