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
   background: rgb(74,74,74);
   background: linear-gradient(180deg, rgba(74,74,74,1) 0%, rgba(18,18,18,1) 100%);
    max-height: 100vh;
    line-height: 1.7;
    font-size: ${({ theme }) => theme.typography.small};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  
    transition: background-color .35s ease-in-out,
    color .35s ease-in;
    

    a{
        text-decoration: none;
    }
}

body::-webkit-scrollbar {
  display: none;
}

`
