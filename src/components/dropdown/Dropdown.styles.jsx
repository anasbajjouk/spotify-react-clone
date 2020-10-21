import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7px;
  color: ${({ theme }) => theme.darkTheme.grey};
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
  font-weight: 600;

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.darkTheme.footer};
  }

  & a {
    display: flex;
    padding: 8px 12px;
    margin: 5px;
    border-radius: 2px;
    color: inherit;

    &:hover {
      background-color: ${({ theme }) => theme.darkTheme.grey};
      color: ${({ theme }) => theme.white};
      cursor: pointer;
    }

    &:last-child {
      border-top: 1px rgba(170, 170, 170, 0.4) solid;
    }
  }
`
