import React from 'react'
import SongRow from './SongRow'
import AlbumIcon from '@material-ui/icons/Album'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'
import { EmptyHere, SongTableContainer } from './SongsTable.styles'
import { handlePlayPause } from '../../common/utils'
import { setPlay } from '../../redux/playback/playback.actions'
import { connect } from 'react-redux'

const SongsTable = ({ spotifyApi, songs, playback, setPlay }) => {
  const { playing } = playback
  let songsLength = songs?.length

  return (
    <SongTableContainer>
      {songsLength > 0 ? (
        playing ? (
          <PauseCircleFilledIcon
            onClick={() => handlePlayPause(playing, spotifyApi, setPlay)}
            className="playlist_icon"
          />
        ) : (
          <PlayCircleFilledIcon
            onClick={() => handlePlayPause(playing, spotifyApi, setPlay)}
            className="playlist_icon"
          />
        )
      ) : null}

      {songs && songsLength > 0 ? (
        songs.map((song, i) => <SongRow key={i + 539} song={song} order={i} />)
      ) : (
        <EmptyHere>
          <AlbumIcon className="icon" />
          <h2>It's a bit empty here...</h2>
          <p>Go find some songs then come back here :D</p>
        </EmptyHere>
      )}
    </SongTableContainer>
  )
}

const mapStateToProps = (state) => ({
  playback: state.playback,
})

const mapDispatchToProps = (dispatch) => ({
  setPlay: (playingOrNot) => dispatch(setPlay(playingOrNot)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsTable)
