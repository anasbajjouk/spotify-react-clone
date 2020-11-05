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
  transition: all 0.1s cubic-bezier(0.1, 0.79, 0.57, 0.44);

  & .header__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex: 0.07; */
    flex: 0.5;
    min-width: 600px;
    max-width: 600px;

    & > .buttons {
      display: flex;
      justify-content: space-between;
      flex: 0.16;
      min-width: 90px;
      max-width: 90px;
    }

    & > .searchField {
      min-width: 450px;
      max-width: 450px;
      flex: 0.84;
      align-items: center;
      display: flex;
      background-color: #fff;
      border-radius: 30px;
      padding: 10px;
      color: gray;

      & input {
        font-size: 15px;
        background-color: inherit;
        padding: 0 10px;
        border-radius: 30px;
        outline: none;
        border: none;
        width: 100%;
      }
    }
  }

  & .header__right {
    position: relative;
    display: inline-block;
    cursor: pointer;
    min-width: 100px;

    & h4 {
      margin-left: 10px;
    }
  }
`
