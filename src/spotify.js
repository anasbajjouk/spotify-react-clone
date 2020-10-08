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
  'playlist-read-private',
  'streaming',
]

export const loginUrl = `${authEndpoint}?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=${scopes.join(
  '%20'
)}&state=34fFs29kd09`
