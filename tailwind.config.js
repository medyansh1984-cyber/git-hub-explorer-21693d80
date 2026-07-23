/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#145A32',
          secondary: '#1E7A44',
          deep: '#0B3D2E',
          light: '#5D8F52',
          mist: '#E9F1E7',
          muted: '#F0F5EE',
        },
        gold: {
          DEFAULT: '#C8A24A',
          dark: '#8C6D2A',
          light: '#E4C87F',
          muted: '#F7F1E1',
        },
        dark: {
          DEFAULT: '#12241B',
          soft: '#3A4C41',
          muted: '#5E7266',
        },
        cream: '#F8F5EF',
        parchment: '#F2EEE5',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.15' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(160deg, #145A32 0%, #0B3D2E 100%)',
        'gold-sheen':
          'linear-gradient(120deg, #C8A24A 0%, #E4C87F 45%, #C8A24A 100%)',
        'radial-fade':
          'radial-gradient(ellipse 70% 55% at 50% 45%, transparent 0%, rgba(6, 24, 17, 0.55) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        float: 'float 7s ease-in-out infinite',
        'drift-slow': 'drift 14s ease-in-out infinite',
        'drift-slower': 'drift 20s ease-in-out infinite reverse',
        'zoom-slow': 'zoomSlow 28s ease-in-out infinite alternate',
        pulseSoft: 'pulseSoft 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(14px, -22px)' },
          '66%': { transform: 'translate(-10px, -8px)' },
        },
        zoomSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.09)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 61, 46, 0.18)',
        lift: '0 24px 60px -18px rgba(11, 61, 46, 0.32)',
        'gold-glow': '0 8px 32px -8px rgba(200, 162, 74, 0.45)',
      },
    },
  },
  plugins: [],
};
