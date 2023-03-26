const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro, ts, tsx, js, jsx}'],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['Bodoni Moda', 'serif'],
        roboto: ['Roboto', 'san-serif'],
        garramond: ['EB Garamond', 'serif'],
      },
      colors: {
        'highlight': '#FFF735'
      }
    },
  },
}
