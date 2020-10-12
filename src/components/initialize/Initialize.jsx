import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from '../../pages/login/Login'
import { setCurrentUser, setToken } from '../../redux/user/user.actions'
import { getTokenFromUrl } from '../../spotify'
import Player from '../../pages/player/Player'
import { setPlaylists } from '../../redux/playlists/playlists.actions'

const Initialize = ({ setToken, setCurrentUser, setPlaylists, user }) => {
  const spotifyApi = new SpotifyWebApi()
  const { token } = user
  console.log(window.location)
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
  }, [])

  return <>{token ? <Player /> : <Login />}</>
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setPlaylists: (playlists) => dispatch(setPlaylists(playlists)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Initialize)
