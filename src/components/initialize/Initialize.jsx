import React, { useEffect, useState } from 'react'
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
import MyModal from '../modal/Modal'

const spotifyApi = new SpotifyWebApi()

const Initialize = ({ setToken, setCurrentUser, setPlaylists, user }) => {
  const { token } = user
  const [show, setShow] = useState(true)
  useEffect(() => {
    const hash = getTokenFromUrl()
    let _token = hash.access_token

    if (_token) {
      window.location.hash = ''
      setToken(_token)
    }

    if (token) {
      spotifyApi.setAccessToken(token)

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCurrentUser, setPlaylists, setToken, token])

  return (
    <>
      <MyModal show={show} handleClose={() => setShow(false)}>
        <p>Modal</p>
        <p>Data</p>
      </MyModal>
      {token ? (
        <Player
          spotifyApi={spotifyApi}
          token={token}
          showModal={() => setShow(true)}
        />
      ) : (
        <Login />
      )}
    </>
  )
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
