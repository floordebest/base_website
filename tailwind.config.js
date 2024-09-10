/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/**/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", 'sans-serif']
      },
      colors: {
        'accent-1': '#1E4DFC',
        'accent-2': '#FF0000',
        'accent-3': '#800000',
        'core-darkest': '#0D0D0D',
        'core-darker': '#1E1E1E',
        'core-dark': '#4F4F4F',
        menu: '#1F212D',
        core: '#707179',
        'core-light': '#B8B8B8',
        'core-lighter': '#E3E9F0',
        'core-lightest': '#FFFFFF',
        ok: '#3DD493',
        warning: '#FFA244',
        danger: '#FF4444',
        'orange-border': '#F46F2D',
        'class-grey': '#B8B8B8',
        'class-blue': '#5070EA',
        'class-purple': '#8055E3',
        'class-green': '#32C28E'
      }
    }
  },
  plugins: []
}
