/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3366FF',
          50: '#EEF2FF',
          100: '#DBE4FF',
          200: '#B8CBFF',
          300: '#94ADFF',
          400: '#708AFF',
          500: '#3366FF',
          600: '#2952CC',
          700: '#1F3D99',
          800: '#142966',
          900: '#0A1433',
        },
        accent: {
          DEFAULT: '#FF6B35',
          50: '#FFF2ED',
          100: '#FFE4D6',
          200: '#FFC9AD',
          300: '#FFAD84',
          400: '#FF8C5A',
          500: '#FF6B35',
          600: '#CC5B2A',
          700: '#994A20',
          800: '#663815',
          900: '#33270B',
        },
      },
    },
  },
  plugins: [],
};