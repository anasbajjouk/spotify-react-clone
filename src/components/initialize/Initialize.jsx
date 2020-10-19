import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from '../../pages/login/Login'
import {
  setCurrentUser,
  setSpotify,
  setToken,
} from '../../redux/user/user.actions'
import { getTokenFromUrl } from '../../spotify'
import Player from '../../pages/player/Player'
import { setPlaylists } from '../../redux/playlists/playlists.actions'
import {
  setCurrentPlaybackState,
  setPlayingTrack,
} from '../../redux/playback/playback.actions'

const Initialize = ({
  setToken,
  setCurrentUser,
  setPlaylists,
  setPlayingTrack,
  setCurrentPlaybackState,
  setSpotify,
  user,
}) => {
  const { token } = user
  const spotifyApi = new SpotifyWebApi()

  useEffect(() => {
    const hash = getTokenFromUrl()
    let _token = hash.access_token

    if (_token) {
      window.location.hash = ''
      setToken(_token)
    }

    if (token) {
      spotifyApi.setAccessToken(token)

      const getUserInfoAndPlaylists = () => {
        spotifyApi
          .getMe()
          .then((user) => {
            setCurrentUser(user)
          })
          .catch((err) => console.error(err))

        spotifyApi
          .getUserPlaylists()
          .then((playlists) => {
            setPlaylists(playlists?.items)
          })
          .catch((err) => console.error('error', err))
      }

      getUserInfoAndPlaylists()

      // const time = setInterval(() => {
      //   getUserInfoAndPlaylists()
      // }, 2000)

      // return () => clearInterval(time)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCurrentUser, setPlaylists, setToken, token])

  return <>{token ? <Player spotifyApi={spotifyApi} /> : <Login />}</>
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setPlaylists: (playlists) => dispatch(setPlaylists(playlists)),
  setPlayingTrack: (track) => dispatch(setPlayingTrack(track)),
  setCurrentPlaybackState: (track) => dispatch(setCurrentPlaybackState(track)),
  setSpotify: (spotifyConstr) => dispatch(setSpotify(spotifyConstr)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Initialize)
