/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./desktop.html', './index.html'],
  theme: {
    extend: {
      fontFamily : {
        sans: ['Poppins', 'sans-serif'],
      },
      colors : {
        greyNavbar : '#D9D9D9',
        bgLuffy : '#FFF4DC',
        buttonLuffy : '#E29A00',
        bgZoro : '#E1FFDC',
        buttonZoro : '#7EB782',
        bgNami : '#FFCED7',
        buttonNami : '#FF5573',
        bgSanji : '#E2F2FF',
        buttonSanji : '#3279AF',
        bgGodUsop : '#E9E8E2',
        buttonGodUsop : '#CAC8B3',
        bgBrook : '#FFDBC5',
        buttonBrook : '#E36415',
        bgJinbe : '#8FC5ED',
        buttonJinbe : '#275E87',
        bgDesktop : '#F4F4F4',
        colorBorder : '#D8D6C1',
        bgGrup2 : '#F2F2F2',
        bgBTNDesk : '#D8D6C1'
      },
      fontWeight : {
        normal : '400',
        medium : '500'
      }
    },
  },
  plugins: [],
}