module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ptsans: ["PT Sans"],
        sourcepro: ["Source Sans Pro"],
        sourcecode: ["Source Code Pro"],
    },
    colors: {
      podgreen: {
        DEFAULT: '#357E47',
        light: '#3BA956',
        dark: '#3C6C48',
      },
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
