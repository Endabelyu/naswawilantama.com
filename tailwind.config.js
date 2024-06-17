/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
      roboto: ['"Roboto"', 'sans-serif'],
      raleway: ['"Raleway"', 'sans-serif'],
    },
  },
  plugins: [],
};
