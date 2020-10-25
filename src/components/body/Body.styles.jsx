import styled from 'styled-components'

export const BodyContainer = styled.div`
  height: 87.5vh;
  width: 100vw;
  overflow: auto;
  background-color: ${({ homeLocation }) => homeLocation ? '#151515' : ''};
  /* overflow-x: hidden; */
`
