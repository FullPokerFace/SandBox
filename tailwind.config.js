/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        menuShow: {
          '0%': { transform: 'translateY(0.5rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        heroTextShow: {
          '0%': { transform: 'translateY(-1rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeOut : {
          '0%': { opacity: 0 },
          '100%': { opacity: .6 },
        },
        fadeOutFull : {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideFromLeft : {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomOut : {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
      },
      animation: {
        menuShow: 'menuShow .5s ease-in-out',
        heroTextShow: 'heroTextShow .5s ease-out ',
        fadeOut: 'fadeOut 250ms ease-in-out',
        fadeOutFull: 'fadeOutFull 250ms ease-in-out',
        slideFromLeft: 'slideFromLeft 250ms ease-in-out',
        zoomOut: 'zoomOut 250ms ease-in-out',
      }
    },
    fontFamily: {
      urbanist: ['Urbanist'],
      fira: ['"Fira Sans"'],
    }
  },
  plugins: [],
}