import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 205px;
  height: 270px;
  padding: 15px;
  border-radius: 3px;
  overflow: hidden;
  color: white;
  background-color: ${({ theme }) => theme.darkTheme.header};
  -webkit-box-shadow: 22px 19px 25px -17px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 22px 19px 25px -17px rgba(0, 0, 0, 0.54);
  box-shadow: 22px 19px 25px -17px rgba(0, 0, 0, 0.54);
  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  & > img,
  .imgAlt {
    background-image: url('https://www.iconninja.com/files/639/91/607/play-music-note-song-audio-sound-player-icon.png');
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    height: 170px;
    width: 180px;
    margin-bottom: 20px;
    border-radius: 3px;
    border: none;
    -webkit-box-shadow: 22px 19px 77px -10px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 22px 19px 77px -10px rgba(0, 0, 0, 0.54);
    box-shadow: 22px 19px 77px -10px rgba(0, 0, 0, 0.54);
  }

  & > h3 {
    font-size: 1rem;
  }

  & > p {
    color: #b3b3b3;
    font-size: 0.9rem;
  }

  & > h3,
  p {
    width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: flex-start;
  }
`
