import React, { useEffect, useState } from 'react'
import { FooterContainer } from './Footer.styles'
import { connect } from 'react-redux'
import {
  setCurrentPlaybackState,
  setPlayingTrack,
  setPlay,
  setShuffle,
  setRepeat,
} from '../../redux/playback/playback.actions'
import FooterLeft from '../footerLeft/FooterLeft'
import FooterCenter from '../footerCenter/FooterCenter'
import FooterRight from '../footerRight/FooterRight'

const Footer = ({
  playback,
  spotifyApi,
  setPlay,
  setShuffle,
  setRepeat,
  setCurrentPlaybackState,
  setPlayingTrack,
  user,
}) => {
  let [value, setValue] = useState(0)
  let [volume, setVolume] = useState(80)
  
  const { token } = user
  let { playing, shuffleState, repeatState } = playback

  let { is_playing, repeat_state, shuffle_state, item } =
    playback?.currentPlaybackState || {}

  let { name, duration_ms, album, artists } = item || {}
  let { images } = album || {}

  const marks = [
    {
      value: 0,
    },

    {
      value: parseInt(duration_ms),
    },
  ]

  useEffect(() => {
    spotifyApi.setAccessToken(token)

    setPlay(is_playing)
    setShuffle(shuffle_state)
    setRepeat(repeat_state)

    spotifyApi
      .getMyCurrentPlayingTrack()
      .then((track) => {
        setPlayingTrack(track)
      })
      .catch((err) => console.error('error', err))

    // Get Information About The User's Current Playback State
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((track) => {
        setCurrentPlaybackState(track)
      })
      .catch((err) => console.error('error', err))
  }, [
    is_playing,
    repeat_state,
    setCurrentPlaybackState,
    setPlay,
    setPlayingTrack,
    setRepeat,
    setShuffle,
    shuffle_state,
    spotifyApi,
    token,
  ])

  const skipNext = () => {
    spotifyApi.skipToNext()
    spotifyApi.getMyCurrentPlaybackState().then((track) => {
      setCurrentPlaybackState(track)
      setPlay(true)
    })
  }

  const skipPrevious = () => {
    spotifyApi.skipToPrevious()
    spotifyApi.getMyCurrentPlaybackState().then((track) => {
      setCurrentPlaybackState(track)
      setPlay(true)
    })
  }

  const handlePlayPause = () => {
    if (playing) {
      spotifyApi.pause()
      setPlay(false)
    } else {
      spotifyApi.play()
      setPlay(true)
    }
  }

  const handleShuffle = () => {
    if (shuffleState) {
      spotifyApi.setShuffle(false)
      setShuffle(false)
    } else {
      spotifyApi.setShuffle(true)
      setShuffle(true)
    }
  }

  const handleRepeat = () => {
    if (repeatState === 'off') {
      spotifyApi.setRepeat('context')
      setRepeat('context')
    } else if (repeatState === 'context') {
      spotifyApi.setRepeat('track')
      setRepeat('track')
    } else if (repeatState === 'track') {
      spotifyApi.setRepeat('off')
      setRepeat('off')
    }
  }

  const handleSlide = (event, newValue) => {
    setValue(newValue)
    spotifyApi.seek(value)
  }

  const handleVolume = (event, newValue) => {
    setVolume(newValue)
    spotifyApi.setVolume(volume)
  }

  return (
    <FooterContainer>
      <FooterLeft
        playback={playback}
        images={images}
        name={name}
        artists={artists}
      />
      <FooterCenter
        shuffleState={shuffleState}
        playing={playing}
        repeatState={repeatState}
        duration_ms={duration_ms}
        value={value}
        marks={marks}
        handleShuffle={handleShuffle}
        skipNext={skipNext}
        handlePlayPause={handlePlayPause}
        skipPrevious={skipPrevious}
        handleRepeat={handleRepeat}
        handleSlide={handleSlide}
      />
      <FooterRight volume={volume} handleVolume={handleVolume} />
    </FooterContainer>
  )
}

const mapStateToProps = (state) => ({
  playback: state.playback,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentPlaybackState: (track) => dispatch(setCurrentPlaybackState(track)),
  setPlayingTrack: (track) => dispatch(setPlayingTrack(track)),
  setPlay: (playingOrNot) => dispatch(setPlay(playingOrNot)),
  setRepeat: (repeatingOrNot) => dispatch(setRepeat(repeatingOrNot)),
  setShuffle: (shufflingType) => dispatch(setShuffle(shufflingType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
