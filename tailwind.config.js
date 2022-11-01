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
        slideFromLeft : {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomOut : {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        menuShow: 'menuShow .5s ease-in-out',
        heroTextShow: 'heroTextShow .5s ease-out ',
        fadeOut: 'fadeOut .5s ease-in-out',
        slideFromLeft: 'slideFromLeft .5s ease-in-out',
        zoomOut: 'zoomOut .2s ease-in-out',
      }
    },
    fontFamily: {
      urbanist: ['Urbanist'],
      fira: ['"Fira Sans"'],
    }
  },
  plugins: [],
}