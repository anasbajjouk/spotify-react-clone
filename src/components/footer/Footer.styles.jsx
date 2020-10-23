import styled from 'styled-components'

export const FooterContainer = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  height: 13vh;
  width: 100%;
  background-color: ${({ theme }) => theme.darkTheme.footer};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: ${({ theme }) => theme.darkTheme.grey};

  & svg:hover {
    color: ${({ theme }) => theme.white};
  }

  & .footer__green {
    display: inline-flex;
    position: relative;
    color: ${({ theme }) => theme.green};

    & :hover {
      color: ${({ theme }) => theme.green};
    }

    &.footer__green-active:after {
      content: ' ';
      position: absolute;
      left: 40%;
      top: 100%;
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: currentColor;
    }

    &[badge]:before {
      content: attr(badge);
      position: absolute;
      left: 80%;
      top: -20%;
      height: 10px;
      width: 10px;
      font-size: 8px;
      font-weight: 800;
      color: ${({ theme }) => theme.darkTheme.footer};
      border-radius: 100%;
      background-color: ${({ theme }) => theme.green};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &[badge^='-']:before,
    &[badge='0']:before,
    &[badge='']:before {
      display: none;
    }
  }

  & .footer__icon:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2);
  }

  & .MuiSlider-thumb.Mui-focusVisible,
  & .MuiSlider-thumb:hover {
    box-shadow: 0px 0px 0px 8px rgba(30, 215, 96, 0.16);
  }
`
