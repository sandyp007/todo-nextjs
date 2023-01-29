/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        tasksAnimate: 'comeIn .75s ease-in',
      },
      colors: {
        'bodyDark': "#171723",
        'bodyLight': '#F8F8FA',
        'containerDark': '#25273C',
        'containerLight': '#FFFFFF',
        'textDark': "#CACDE8",
        'textLight': '#5D5E6F',
        'active': '#3a7bfd',
        'text-opacity': 'rgb(75,85,99)',
      }
    }
  },
  plugins: [],
}
