import styled from 'styled-components'

export const SearchPageContainer = styled.div`
  padding: 0 20px;
  margin: 30px 0;
`

export const SearchCard = styled.div.attrs(({ hue }) => ({
  style: {
    background: `linear-gradient(
    31deg,
    hsl(${hue}, 30%, 75%),
    hsl(${hue - 10}, 84%, 60%))`,
  },
}))`
  cursor: pointer;
  color: white;
  padding: 10px;
  height: 11rem;
  width: 15rem;
  border-radius: 10px;
`
