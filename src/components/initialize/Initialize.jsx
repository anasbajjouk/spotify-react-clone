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
import { handleKeyPress } from '../../common/utils'

const spotifyApi = new SpotifyWebApi()

const Initialize = ({ setToken, setCurrentUser, setPlaylists, user }) => {
  const { token, currentUser } = user
  const [show, setShow] = useState(false)
  const [textInput, setTextInput] = useState('')

  const createMyPlaylist = async (e) => {
    setShow(false)

    await spotifyApi
      .createPlaylist(currentUser?.id, {
        name: textInput,
        public: true,
      })
      .catch((err) => console.error(err))

    await spotifyApi
      .getUserPlaylists()
      .then((playlists) => {
        setPlaylists(playlists?.items)
      })
      .catch((err) => console.error('error', err))
  }

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
      {show && (
        <MyModal show={show} handleClose={() => setShow(false)}>
          <input
            type="text"
            placeholder="Name of the new playlist"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, 'Enter', createMyPlaylist)}
          />
          <button type="submit" onClick={createMyPlaylist}>
            CREATE
          </button>
        </MyModal>
      )}

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
