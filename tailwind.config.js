/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // SEMANTIC PALETTE
        
        // Neutral Scale (Backgrounds & Text)
        neutral: {
          50: '#f5f5f5', // Off White (Text)
          100: '#e5e5e5', 
          200: '#d4d4d4', 
          300: '#a3a3a3',
          400: '#737373', 
          500: '#525252',
          600: '#404040',
          700: '#262626', // Dark Grey
          800: '#171717', 
          900: '#0a0a0a', // Matte Black (Background)
        },
        
        // Primary Accent
        crimson: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#dc143c', // Primary Brand Color
          600: '#be123c',
          700: '#9f1239',
          800: '#881337',
          900: '#4c0519',
        },
        
        // Secondary Accent (Darker Red)
        blood: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#dc143c', 
          600: '#be123c',
          700: '#9f1239', 
          800: '#881337',
          900: '#4c0519',
        },

        // Slate/Grey
        slate: {
           500: '#262626',
           600: '#171717',
        },
      },
      fontFamily: {
        serif: ['Marcellus', 'serif'],
        display: ['Marcellus', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'draw-line': 'drawLine 2s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
