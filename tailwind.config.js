module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins']
      },
      textColor: {
        'heading-black': '#3C3C3C',
        'body-black': '#666666',
        'primary-purple': '#6C63FF',
        'secondary-purple': '#6058DC',
        'input-placeholder': '#939393'
      },
      borderColor: {
        'color-input-border': '#DFDFDF',
        'primary-purple': '#6C63FF',
        'secondary-purple': '#6058DC'
      },
      backgroundColor: {
        'facebook': '#2A77EA',
        'google': '#FF6363',
        'primary-purple': '#6C63FF',
        'secondary-purple': '#6058DC'
      },
      fontSize: {
        'size-h1': '59px',
        'size-h2': '45px',
        'size-h3': '35px',
        'size-h4': '27px',
        'size-h5': '21px',
        'size-h6': '16px'
      },
      height: {
        '100vh': '100vh'
      },
      maxWidth: {
        '650px': '650px',
        '500px': '500px',
        '170px': '170px'
      },
      margin: {
        '70px': '70px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
