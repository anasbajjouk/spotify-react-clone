import styled from 'styled-components'

export const SongTableContainer = styled.div`
  padding: 20px 20px;
  background: linear-gradient(180deg, #272727 0%, #121212 100%);
  color: ${({ theme }) => theme.darkTheme.elements};

  & .playlist_icon {
    cursor: pointer;
    font-size: 4rem;
    color: ${({ theme }) => theme.green};

    &:hover {
      transform: scale(1.07);
    }
  }
`

export const EmptyHere = styled.div`
  height: 50vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  padding: 30px;

  & > .icon {
    font-size: 6rem;
  }

  & > h2 {
    font-size: 3rem;
    font-weight: 700;
  }
`

export const SectionSongRow = styled.div`
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #3a3a3a;
    color: white;
  }
`

export const SubSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: ${({ theme, underline }) =>
    underline && `1px solid ${theme.darkTheme.elements}`};
  margin-bottom: 10px;
  width: 100%;
  padding: 12px;
  flex: 0.3;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0px;
  white-space: nowrap;

  &:first-child {
    justify-content: flex-start;
    flex: 0.7;
  }

  & > img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin: 0 10px 0 15px;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & h4 {
      color: white;
    }

    & p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      & .explicit {
        font-size: 10px;
        border-radius: 2px;
        background-color: #a9a9a9;
        padding: 2.5px 5px;
        margin-right: 6px;
        color: #121212;
      }
    }
  }
`
