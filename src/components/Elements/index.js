import styled from 'styled-components'

export const BlackCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyMyContent }) =>
    justifyMyContent ? justifyMyContent : 'center'};
  background-color: ${({ theme }) => theme.darkTheme.header};
  padding: 3px;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.darkTheme.footer};
  }
`
