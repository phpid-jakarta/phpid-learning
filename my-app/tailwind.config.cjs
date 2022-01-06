const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // add this section
  content: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
