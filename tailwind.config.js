module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pale-yellow': 'var(--clr-pale-yellow)',
      },
      saturate: {
        25: '.25',
        10: '.1',
      },
    },
  },
  plugins: [],
};
