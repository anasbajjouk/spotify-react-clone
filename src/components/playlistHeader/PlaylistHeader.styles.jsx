import styled from 'styled-components'

export const PlaylistHeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  color: white;
  font-weight: 500;
  letter-spacing: 0.09rem;
  padding: 20px;

  & > img {
    margin-right: 20px;
    height: 230px;
    width: 230px;
    object-fit: cover;
    box-shadow: 0 0.8px -0.1px rgba(0, 0, 0, 0.001),
      0 2.1px 1.8px rgba(0, 0, 0, 0.003), 0 4.3px 8.5px rgba(0, 0, 0, 0.006),
      0 8.8px 32px rgba(0, 0, 0, 0.013), 0 24px 45px rgba(0, 0, 0, 0.05);
    background-color: #282828;
  }

  & > div {
    & h1 {
      font-weight: 700;
    }

    & strong {
      letter-spacing: 0rem;
      color: #c1c1c1;
    }
  }
`
