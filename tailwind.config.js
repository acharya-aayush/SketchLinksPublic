/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'marker': ['"Permanent Marker"', 'cursive'],
        'handwritten': ['"Patrick Hand"', 'cursive'],
      },
      // Enhanced breakpoints for better device coverage
      screens: {
        'xs': '375px',      // iPhone SE, small mobiles
        'sm': '640px',      // Standard mobile breakpoint
        'md': '768px',      // Tablets portrait
        'lg': '1024px',     // Tablets landscape, small laptops
        'xl': '1280px',     // Desktop
        '2xl': '1536px',    // Large desktop
        // Height-based breakpoints for unusual aspect ratios
        'short': { 'raw': '(max-height: 700px)' },
        'tall': { 'raw': '(min-height: 900px)' },
      },
      animation: {
        'bounce-in': 'bounceIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
