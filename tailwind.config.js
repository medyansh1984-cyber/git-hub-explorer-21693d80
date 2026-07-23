/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#0d7a5f',
          secondary: '#0f8a6a',
          deep: '#064e3b',
          abyss: '#03291f',
          light: '#5db296',
          mist: '#e6f0eb',
          muted: '#eef5f1',
        },
        gold: {
          DEFAULT: '#c9a84c',
          dark: '#8c7024',
          light: '#e6cc7a',
          soft: '#f0d78c',
          muted: '#f5efdc',
        },
        dark: {
          DEFAULT: '#0f1f18',
          soft: '#334740',
          muted: '#5b6f66',
        },
        cream: '#f5f0e0',
        parchment: '#efe9d6',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        inter: ['"Fira Sans"', 'Inter', 'sans-serif'],
        display: ['"DM Serif Display"', 'Amiri', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.05' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
        42: '10.5rem',
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(160deg, #0d7a5f 0%, #064e3b 60%, #03291f 100%)',
        'gold-sheen': 'linear-gradient(120deg, #c9a84c 0%, #f0d78c 45%, #c9a84c 100%)',
        'radial-fade': 'radial-gradient(ellipse 70% 55% at 50% 45%, transparent 0%, rgba(3, 41, 31, 0.6) 100%)',
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
