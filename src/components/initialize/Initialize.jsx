import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from '../../pages/login/Login'
import { setCurrentUser, setToken } from '../../redux/user/user.actions'
import { getTokenFromUrl } from '../../spotify'
import Player from '../../pages/player/Player'
import { setPlaylists } from '../../redux/playlists/playlists.actions'
import {
  setCurrentPlaybackState,
  setPlayingTrack,
} from '../../redux/playback/playback.actions'
import MyModal from '../modal/Modal'
import { handleKeyPress } from '../../common/utils'
import errorHandler from '../../api/errorHandler'
import { toast } from 'react-toastify'

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
      .catch((err) => errorHandler(err.response))

    await spotifyApi
      .getUserPlaylists()
      .then((playlists) => {
        setPlaylists(playlists?.items)
      })
      .catch((err) => errorHandler(err.response))
    toast.success('Your Playlist has been added successfully!')
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
        .catch((err) => errorHandler(err.response))

      spotifyApi
        .getUserPlaylists()
        .then((playlists) => {
          setPlaylists(playlists?.items)
        })
        .catch((err) => errorHandler(err.response))
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Initialize)
