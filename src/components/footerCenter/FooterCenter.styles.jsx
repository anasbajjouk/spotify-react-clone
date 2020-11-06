import styled from 'styled-components'

export const FooterCenterContainer = styled.div`
  flex: 0.6;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > .footerCenter__upper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 80px 0px 80px;
  }

  & > .footerCenter__lower {
    display: inline;
    width: 100%;
    opacity: 0.3;
    pointer-events: none;
  }
`
