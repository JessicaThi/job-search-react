module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
     }
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'active'],
      textColor: ['active'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
