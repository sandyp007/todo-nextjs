/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'desktopDark': "url('./../assets/bg-desktop-dark.jpg')",
      'desktopLight': "url('./../assets/bg-desktop-light.jpg')",
      'mobileDark': "url('./../assets/bg-mobile-dark.jpg')",
      'mobileLight': "url('./../assets/bg-mobile-light.jpg')",

    },
    extend: {
      keyframes: {
        comeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-100%)'

          },
          '75%': {
            opacity: 1,
            transform: 'translateY(-50%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        tasksAnimate: 'comeIn 1s ease-in',
      }
    }
  },
  plugins: [],
}
