/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0072ff',
          600: '#005bcc',
          700: '#004499',
          800: '#002e66',
          900: '#001733',
        },
        secondary: {
          50: '#e6f8ff',
          100: '#ccf1ff',
          200: '#99e3ff',
          300: '#66d5ff',
          400: '#33c7ff',
          500: '#00b9ff',
          600: '#0094cc',
          700: '#006f99',
          800: '#004a66',
          900: '#002533',
        },
      },
    },
  },
  plugins: [],
};