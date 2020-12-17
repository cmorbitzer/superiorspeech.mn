module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        denim: {
          50: '#f2f7fb',
          100: '#e6eef7',
          200: '#bfd6ec',
          300: '#99bde1',
          400: '#4d8bca',
          500: '#0059b3',
          600: '#0050a1',
          700: '#004386',
          800: '#00356b',
          900: '#002c58',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
