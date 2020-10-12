export const authEndpoint = 'https://accounts.spotify.com/authorize'
export const clientID = '27097e0e3b7a4686ba05f605f134c863'
export const clientSecret = '809d25d217a2452a9aff943547ed9ea7'
export const redirectURI = 'http://localhost:3000/'

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

export const loginUrl = `${authEndpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join(
  '%20'
)}&state=34fFs29kd09&show_dialog=false`
