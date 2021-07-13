module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bg-new': '#494949',
       'bg-1':'#383838',
    }),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'border-new':'#6E6E6E',
  }),
  borderWidth: {
    DEFAULT: '1px',
    '0':'0px',
    '1':'1px',
    '2':'2px',
    '4':'4px',
    '6':'6px',
    '8':'8px',
    '10':'10px',
    '14':'14px',
},
extend: {
  backgroundImage: theme => ({
   'texture': "url('https://4.imimg.com/data4/RF/UV/MY-4856179/sadarahalli-butchhing-stone-wall-cladding-500x500.jpg')",
})
}
  }
}