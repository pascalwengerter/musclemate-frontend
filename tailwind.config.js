module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#6DEAA7',
      secondary: '#43CDEC',
      dark: '#183A4B',
      white: '#ffffff',
      whiteish: '#E5E5E5',
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#6DEAA7',
      'secondary': '#43CDEC',
      'danger': '#e3342f',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
