import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before{
    margin: 0;
    padding: 0;
    box-sizing:inherit;
}
    
html{
    box-sizing: border-box;
    font-family: 62.5%;
    font-family: 'Nunito Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

body{
    line-height: 1.7;
    font-size:1.4rem;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  
    transition: background-color .35s ease-in-out,
    color .35s ease-in;

    a{
        text-decoration: none;
    }
}
`
