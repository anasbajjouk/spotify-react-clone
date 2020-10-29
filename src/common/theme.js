const customaryStyles = {
  font: {
    regular: 300,
    medium: 600,
    bold: 800,
  },
  typography: {
    h1: '4.8rem',
    h2: '4rem',
    small: '.9rem',
    regular: '1.2rem',
    medium: '1.4rem',
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
  black: '#040404',
  green: 'rgb(30,215,96)',
  white: '#fff',
  // green: '#1ed15e',
  lightTheme: {
    footer: '#282828',
    input: 'hsl(0, 0%, 52%)',
    text: 'hsl(200, 15%, 8%)',
    background: 'hsl(0, 0%, 98%)',
    elements: '#b3b3b3',
    shadow: '#969B9F',
    black: '#040404',
  },
  darkTheme: {
    footer: '#282828',
    text: '#FFFFFF',
    background: 'hsl(207, 26%, 17%)',
    elements: '#b3b3b3',
    shadow: '#000612',
    black: '#040404',
    grey: '#9a9a9a',
    header: '#121212',
  },
}

const theme = { ...defaultColors, ...customaryStyles }

export default theme
