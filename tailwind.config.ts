/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      green: '#65A426',
      white: '#FFFFFF',
      black: '#000000',
      'dark-white': '#FBFBF8',
      'dark-gray': '#3F3F3F',
      'light-gray': '#75797F',
      'light-gray-2': '#B6B6B6',
      'light-gray-3': '#E7E7E7',
      sepia: 'rgba(0, 0, 0, .2)'
    },
    extend: {
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(200px, 403px))'
      }
    }
  },
  plugins: []
}
