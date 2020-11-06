import React, { useEffect, useState } from 'react'
import { FooterContainer } from './Footer.styles'
import { connect } from 'react-redux'
import {
  setCurrentPlaybackState,
  setPlayingTrack,
  setPlay,
  setShuffle,
  setRepeat,
  setMyVolume,
} from '../../redux/playback/playback.actions'
import FooterLeft from '../footerLeft/FooterLeft'
import FooterCenter from '../footerCenter/FooterCenter'
import FooterRight from '../footerRight/FooterRight'
import errorHandler from '../../api/errorHandler'

const Footer = ({
  playback,
  user,
  spotifyApi,
  setPlay,
  setShuffle,
  setRepeat,
  setMyVolume,
  setCurrentPlaybackState,
  setPlayingTrack,
}) => {
  const { token } = user
  let { playing, shuffleState, repeatState, volumeState } = playback

  let {
    is_playing,
    repeat_state,
    shuffle_state,
    item,
    device: { volume_percent } = 95,
  } = playback?.currentPlaybackState || {}

  let { name, duration_ms, album, artists } = item || {}
  let { images } = album || {}

  let [value, setValue] = useState(0)

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

    setMyVolume(volume_percent)
    setPlay(is_playing)
    setShuffle(shuffle_state)
    setRepeat(repeat_state)

    spotifyApi
      .getMyCurrentPlayingTrack()
      .then((track) => {
        setPlayingTrack(track)
      })
      .catch((err) => errorHandler(err.response))

    // Get Information About The User's Current Playback State
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((track) => {
        setCurrentPlaybackState(track)
      })
      .catch((err) => errorHandler(err.response))
  }, [
    volume_percent,
    is_playing,
    repeat_state,
    shuffle_state,
    spotifyApi,
    token,
    setMyVolume,
    setPlay,
    setShuffle,
    setRepeat,
    setPlayingTrack,
    setCurrentPlaybackState,
  ])

  const skipNext = () => {
    spotifyApi.skipToNext().catch((err) => errorHandler(err.response))
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((track) => {
        setCurrentPlaybackState(track)
        setPlay(true)
      })
      .catch((err) => errorHandler(err.response))
  }

  const skipPrevious = () => {
    spotifyApi.skipToPrevious().catch((err) => errorHandler(err.response))
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((track) => {
        setCurrentPlaybackState(track)
        setPlay(true)
      })
      .catch((err) => errorHandler(err.response))
  }

  const handlePlayPause = () => {
    if (playing) {
      spotifyApi.pause().catch((err) => errorHandler(err.response))
      setPlay(false)
    } else {
      spotifyApi.play().catch((err) => errorHandler(err.response))
      setPlay(true)
    }
  }

  const handleShuffle = () => {
    if (shuffleState) {
      spotifyApi.setShuffle(false).catch((err) => errorHandler(err.response))
      setShuffle(false)
    } else {
      spotifyApi.setShuffle(true).catch((err) => errorHandler(err.response))
      setShuffle(true)
    }
  }

  const handleRepeat = () => {
    if (repeatState === 'off') {
      spotifyApi.setRepeat('context').catch((err) => errorHandler(err.response))
      setRepeat('context')
    } else if (repeatState === 'context') {
      spotifyApi.setRepeat('track').catch((err) => errorHandler(err.response))
      setRepeat('track')
    } else if (repeatState === 'track') {
      spotifyApi.setRepeat('off').catch((err) => errorHandler(err.response))
      setRepeat('off')
    }
  }

  const handleSlide = (event, newValue) => {
    setValue(newValue)
    spotifyApi.seek(value).catch((err) => errorHandler(err.response))
  }

  const handleVolume = (event, newValue) => {
    setMyVolume(newValue)
    spotifyApi.setVolume(newValue).catch((err) => errorHandler(err.response))
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
      <FooterRight volume={volumeState} handleVolume={handleVolume} />
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
  setMyVolume: (volume) => dispatch(setMyVolume(volume)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
