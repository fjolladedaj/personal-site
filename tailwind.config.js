import colors from 'tailwindcss/colors'
import tailwindTypeWriter from 'tailwind-typewriter'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#6868bb',
      secondary: '#cc8f2f',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      green: colors.green,
      red: colors.red
    }
  },
  plugins: [
    tailwindTypeWriter({
      wordsets: {
        name: {
          words: [`I'm Fjolla Dedaj.`],
          writeSpeed: 0.1,
          delay: 0,
          repeat: 0,
          caretWidth: '0px',
          eraseSpeed: 0
        }
      }
    })
  ]
}
