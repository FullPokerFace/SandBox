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
        }
      },
      animation: {
        menuShow: 'menuShow .5s ease-in-out',
        heroTextShow: 'heroTextShow .5s ease-out ',
      }
    },
    fontFamily: {
      urbanist: ['Urbanist'],
      fira: ['"Fira Sans"'],
    }
  },
  plugins: [],
}