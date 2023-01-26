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
    // extend: {

    //   colors: {
    //     'bodyDark': "#171723",
    //     'bodyLight': '#F8F8FA',
    //     'containerDark': '#25273C',
    //     'containerLight': '#FFFFFF',
    //     'textDark': "#CACDE8",
    //     'textLight': '#5D5E6F',
    //     'completed': '#4d66de',
    //     'blueGradient': '#57ddff',
    //     'pinkGradient': '#c058f3'
    //   }
    // },
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
      },
      colors: {
        'bodyDark': "#171723",
        'bodyLight': '#F8F8FA',
        'containerDark': '#25273C',
        'containerLight': '#FFFFFF',
        'textDark': "#CACDE8",
        'textLight': '#5D5E6F',
        'completed': '#4d66de',
        'blueGradient': 'rgb(87, 221, 255)',
        'pinkGradient': 'rgb(192, 88, 243)'
      }
    }
  },
  plugins: [],
}
