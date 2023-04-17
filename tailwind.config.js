module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(181, 63%, 42%)',
        cyanLight: 'hsl(188, 69%, 62%)',
        darkViolet: 'hsl(259, 24%, 23%)',
        red: 'hsl(3, 89%, 60%)',
        grayishViolet: 'hsl(253, 14%, 60%)',
        veryDarkBlue: 'hsl(250, 14%, 27%)',
        veryDarkViolet: 'hsl(265, 10%, 18%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
}
