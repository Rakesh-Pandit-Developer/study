/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252',
        secondary: '#27ae60',
      },
      backgroundColor:{
        primary: '#ff5252',
        secondary: '#f3f4f6',
      }
    },
  },
  plugins: [],
};
