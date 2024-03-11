/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      md: '5rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        md: "5rem",
        lg: "7rem"
      }
    },
    extend: {
    //   screens: {
    //   'xxs': '320px',
    //   'xs': '481px',               
    // },
    borderRadius: {
      '4xl': '2rem',
    },
    // backgroundColor: ['first', 'last'],
  },

  },
  plugins: [],
}

