/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './**/*.{html,js}',
    './js/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    
    extend: {
      flexDirection: ['responsive'], // Ensures responsive breakpoints are applied
      backgroundImage:{
          'link-light':"url('./img/link.png')",
          'link-dark':"url('./img/linkW.png')",
          'git-light':"url('./img/git.png')",
          'git-dark':"url('./img/gitW.png')",
          'email-light':"url('./img/email.png')",
          'email-dark':"url('./img/emailW.png')",
          'spell-static':"url('./img/spell-static.png')",
          'spell-gif':"url('https://i.gyazo.com/b3f950299fc2ab09311973f5ae12d9af.gif')",
          'eureka-static':"url('./img/eureka-static.png')",
          'eureka-gif':"url('https://i.gyazo.com/18ea089c4be31fe83254942525d729e1.gif')",
          'figure-static':"url('./img/figure-static.png')",
          'figure-gif':"url('https://i.gyazo.com/414a7b29a13fa9f32fae8e417da30356.gif')",
          'gamescape-static':"url('./img/gamescape-static.png')",
          'gamescape-gif':"url('https://i.gyazo.com/05c39064fd08755a6f7d6d5f938c6fa3.gif')",
          'gamescape-app-static':"url('./img/gamescape-app-static.png')",
          'gamescape-app-gif':"url('https://i.gyazo.com/3d0dac5b9a9059036b015b536973c312.gif')",
      },
      fontFamily: {
        lexend: ['"Lexend"']
      },
    }
  },
  variants:{
    extend:{
      backgroundImage:['dark']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}