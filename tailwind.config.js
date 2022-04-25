module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      company: "Square Peg"
    },
    extend: {
      height: {
        '128': '42rem',
        'card': '32rem'
      }
    },
  },
  plugins: [],
}
