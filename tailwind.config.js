module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      body: '#F2F2F2',
      header: '#292F36',
      footer: '#292F36',
      menu: '#292F36',
      block: '#292F36',
      info: '#FFC52F',
      btn: '#FFC52F',
    }),

    extend: {
      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      textColor: (theme) => ({
        ...theme('colors'),
        header: '#292F36',
        title: '#292F36',
        text: '#686868',
        'text-dark': '#292F36',
        'mobile-menu': '#FFC52F',
        'footer-category': '#FFC52F',
        btn: '#292F36',
      }),
      height: {
        160: '40rem',
        136: '34rem',
        120: '30rem',
      },
      fontSize: {
        '10px': '10px',
        '8px': '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
