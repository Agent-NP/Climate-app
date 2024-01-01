/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        custom_primary: '#00BCD5',
        custom_secondary: '#CDDC39',
        custom_tertiary: '#FF7143',
        custom_light: '#FFC108',
        custom_loud:  '#EA1E63'
      },   
    },
  },
  plugins: [],
}

