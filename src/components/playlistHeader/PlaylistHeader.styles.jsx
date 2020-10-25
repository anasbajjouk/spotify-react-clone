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
    box-shadow: 0 1.1px 39.8px -19px rgba(0, 0, 0, 0.02),
      0 4.7px 59.9px -19px rgba(0, 0, 0, 0.03),
      0 12.7px 66.2px -19px rgba(0, 0, 0, 0.038),
      0 30.7px 66.5px -19px rgba(0, 0, 0, 0.048),
      0 87px 94px -19px rgba(0, 0, 0, 0.07);
    background-color: #282828;
  }

  & > div {
    & h1 {
      font-weight: 700;
    }
    & small {
      position: absolute;
    }
    & strong {
      letter-spacing: 0rem;
      color: #c1c1c1;
    }
  }
`
