import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.black};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > a {
    margin-top: 50px;
    background-color: ${({ theme }) => theme.green};
    padding: 15px 50px 15px 50px;
    border-radius: 50px;
    color: ${({ theme }) => theme.black};
  }

  & > a:hover {
    color: ${({ theme }) => theme.black};
    transform: scale(1.02);
  }
`

export const LogoImg = styled.img`
  @media screen and (max-width: 768px) {
    width: 40%;
  }
`
