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
        'brown' : '#4B5563',
        'black_text' : '#1F2937',
        'bg_brown' : '#F7F8F9',
        'pre_brown' : '#374151',
        'accessory_text' : '#425466',
        'accessory_price' : '#27272E',
        'gray_background' : '#F5F6F8',
        'line' : '#EBEBEB',
        'blue' : '#1071FF',
      },
      backgroundImage:{
        'bikeBg': "url('./images/home/bike.png')",
        'bikees': "url('./images/home/bikees.png')",
        'Radial': "url('./images/restaurants/Radial.png')",
        'RadialMb': "url('./images/restaurants/Radial-mb.png')",
        'restBg': "url('./images/restaurants/restBg.png')",
        'rider' : "url('./images/preorder/rider.png')",
        'orderBg' : "url('./images/preorder/orderBg.png')",
        'landBg' : "url('./images/landing/Bikeee.png')",
        'mobileLandBg' : "url('./images/landing/mobileBike.png')",
        'mobileRider' : "url('./images/preorder/bg-mobile-rider.png')",
      }
    },
    fontFamily:{
      'poppings': ['Poppins', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
    }
  },
  plugins: [],
}
