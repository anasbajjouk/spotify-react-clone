import styled from 'styled-components'

export const FooterLeftContainer = styled.div`
  height: inherit;
  background-color: none;
  display: flex;
  align-items: center;
  flex: 0.2;
  white-space: nowrap;
  color: ${({ theme }) => theme.white};

  & .footer__songInfo {
    & > p {
      white-space: nowrap;
      font-size: 0.8rem;
    }
  }

  & > img {
    height: 64px;
    width: 64px;
    margin-right: 20px;
    object-fit: contain;
    -webkit-box-shadow: 33px 0px 110px -69px rgba(3, 3, 3, 1);
    -moz-box-shadow: 33px 0px 110px -69px rgba(3, 3, 3, 1);
    box-shadow: 33px 0px 110px -69px rgba(3, 3, 3, 1);
  }
`
