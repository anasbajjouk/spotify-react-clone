import styled from 'styled-components'

export const HeaderContainer = styled.div`
  z-index: 3;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 20px;
  background-color: ${({ theme, active }) =>
    active ? theme.darkTheme.header : 'transparent'};
  color: white;

  & .header__right h4 {
    margin-left: 10px;
  }

  & .header__left {
    display: flex;
    justify-content: space-between;
    flex: 0.07;
  }

  & .header__right {
    position: relative;
    display: inline-block;
    cursor: pointer;
    min-width: 100px;
  }
`
