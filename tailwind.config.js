module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#1d4ed8',
          dark: '#1e40af',
        },
        cyan: '#2CA2B0',
        gry: '#333333',
        lightgreen: '#F0F9FF',
        blue: '#0A3D62',
        darkgreen: '#228899',
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/images/herobg.JPG')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}