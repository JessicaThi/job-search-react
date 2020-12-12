module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
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
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
