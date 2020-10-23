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

export const H2 = styled.h2`
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.typography.detailPage};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const H3 = styled(H2)`
  color: ${({ theme }) => theme.darkTheme.shadow};
  font-size: ${({ theme }) => theme.typography.regular};
  color: #b3b3b3;

  &:hover {
    color: ${({ theme }) => theme.darkTheme.shadow};
  }
`

export const CardsHolder = styled.div`
  /* z-index: -1; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  justify-items: center;
  grid-gap: 20px;
  margin: 10px 0 30px 0
`
