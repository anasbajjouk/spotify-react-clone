import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.black};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > a {
    margin-top: 200px;
    background-color: ${({ theme }) => theme.green};
    padding: 15px 50px 15px 50px;
    border-radius: 50px;
    color: ${({ theme }) => theme.black};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopL}) {
      margin-top: 100px;
      padding: 10px 70px;
      border-radius: 50px;
    }
  }

  & > a:hover {
    color: ${({ theme }) => theme.black};
    transform: scale(1.02);
  }
`

export const LogoImg = styled.img`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    width: 80%;
  }
`
