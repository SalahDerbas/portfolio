/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  darkMode: 'class', // 'media' أو 'class' حسب اختيارك
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFA500',
          DEFAULT: '#FF7F00',
          dark: '#CC6600',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};