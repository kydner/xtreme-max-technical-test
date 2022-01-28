module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'w-menu': '125px',
        'submenu': '470px'
      },
      height: {
        'h-menu': '125px',
        'top-menu': '130px'
      }
    },
    colors: {
      'primary': '#282c37',
      'secondary': '#72cdd2',
      'tersiery': '#313541',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'grey': '#64748b'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
