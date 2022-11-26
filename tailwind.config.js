/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red':'#FF0000',
        'dark_text' : '#2A3342',
        'light_blue' : '#556987',
        'btn_text' : '#F0FDF4',
        'gray' : '#BBC3CF',
        'light_gray' : '#D5DAE1',
        'milk' : '#EEEEEE',
        'btn' : '#333F51',
        'secondary_text' : '#8896AB',
        'dark_gray' : '#FAFAFA',
        'dark_blue' : '#1C232D',
        'input' : '#667085',
        'black' : '#220202',
        'sub_menu_text' : '#54595E',
        'nav_text' : '#333F51',
      },
      backgroundImage:{
        'bikeBg': "url('./images/home/bike.png')",
        'bikees': "url('./images/home/bikees.png')",
        'Radial': "url('./images/restaurants/Radial.png')",
        'RadialMb': "url('./images/restaurants/Radial-mb.png')",
        'rider' : "url('./images/preorder/rider.png')",
      }
    },
    fontFamily:{
      'poppings': ['Poppins', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
    }
  },
  plugins: [],
}
