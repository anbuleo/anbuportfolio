/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // Orange 500
          light: '#FB923C',   // Orange 400
        },
        secondary: {
          DEFAULT: '#F59E0B', // Amber 500
          light: '#FBBF24',   // Amber 400
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber 500
        },
        background: {
          DEFAULT: '#0A0A0A', // Almost black
          light: '#111827',   // Gray 900
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          muted: '#94A3B8',   // Slate 400
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'aurora': 'aurora 60s linear infinite',
        'border-spin': 'border-spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' }
        },
        'border-spin': {
          '100%': { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
