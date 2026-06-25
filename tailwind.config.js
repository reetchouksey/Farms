/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b5e20',
          dark: '#0d3811',
          light: '#2e7d32',
        },
        accent: {
          DEFAULT: '#f9a825',
          dark: '#f57f17',
        },
        leaf: '#66bb6a',
        mint: '#e8f5e9',
        cream: '#fffbf0',
        soil: '#6d4c41',
        ink: {
          DEFAULT: '#1a2e1d',
          light: '#4a5d4f',
          muted: '#7a8b7f',
        },
        line: '#d7e8d8',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        hi: ['"Noto Sans Devanagari"', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(27, 94, 32, 0.06)',
        medium: '0 6px 24px rgba(27, 94, 32, 0.10)',
        large: '0 14px 40px rgba(27, 94, 32, 0.14)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 8px 32px rgba(37, 211, 102, 0.7)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
