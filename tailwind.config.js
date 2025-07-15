module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // A professional blue
        secondary: '#F59E0B', // A warm gold for accents
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#6B7280',
          dark: '#1F2937',
        },
        accent: '#10B981', // A vibrant teal for calls-to-action
        cyan: '#2CA2B0', // Re-add cyan for the header
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
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out'
      }
    },
  },
  variants: {
    extend: {
      // Enable hover, focus, active variants by default
      backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      boxShadow: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      transform: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    },
  },
  plugins: [],
}
