const customaryStyles = {
  font: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  typography: {
    h1: '4.8rem',
    h2: '4rem',
    headline: '2.4rem',
    default: '1.8rem',
    paragraph: '1.6rem',
    medium: '1.4rem',
    small: '1.2rem',
  },
  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
  },
}

const defaultColors = {
  colors: {
    default: '#061A40',
    nav: '#97999B',
    white: '#fff',
    blue: '#338AF3',
    headline: '#000000',
    border: '#F1F1F2',
    placeholder: '#76787B',
    bg: '#F9F9FA',
    delete: '#FBEBE9',
    favourite: '#FEFBED'
  },
}

const theme = { ...defaultColors, ...customaryStyles }

export default theme

