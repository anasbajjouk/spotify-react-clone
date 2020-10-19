const PROS_ENV = process.env

export const scopes = [
  'user-read-private user-read-email',
  'user-read-recently-played',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'user-read-playback-position',
  'user-library-modify',
  'user-library-read',
  'playlist-read-private',
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-collaborative',
  'ugc-image-upload',
  'app-remote-control',
  'streaming',
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = parts[1]

      return initial
    }, {})
}

export const loginUrl = `${PROS_ENV.REACT_APP_AUTH_ENDPOINT}
?client_id=${PROS_ENV.REACT_APP_CLIENT_ID}
&response_type=token&redirect_uri=${PROS_ENV.REACT_APP_REDIRECT_URI}
&scope=${scopes.join('%20')}
&state=34fFs29kd09&show_dialog=false`

