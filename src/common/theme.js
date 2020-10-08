const customaryStyles = {
  font: {
    regular: 300,
    medium: 600,
    bold: 800,
  },
  typography: {
    h1: '4.8rem',
    h2: '4rem',
    homePage: '1.4rem',
    detailPage: '1.6rem',
  },
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
}

const defaultColors = {
  black: 'rgb(25, 20, 20)',
  green: 'rgb(30,215,96)',
  lightTheme: {
    input: 'hsl(0, 0%, 52%)',
    text: 'hsl(200, 15%, 8%)',
    background: 'hsl(0, 0%, 98%)',
    elements: 'hsl(0, 0%, 100%)',
    shadow: '#969B9F',
    black: 'rgb(25, 20, 20)',
  },
  darkTheme: {
    text: 'hsl(0, 0%, 100%)',
    background: 'hsl(207, 26%, 17%)',
    elements: 'hsl(209, 23%, 22%)',
    shadow: '#000612',
    black: 'rgb(25, 20, 20)',
  },
}

const theme = { ...defaultColors, ...customaryStyles }

export default theme
