export const truncate = (string, number = 20) => {
  return string.length > number
    ? string.substring(0, number - 1) + ` ...`
    : string
}

export const CallMyCurrentPlaybackState = (
  spotifyApi,
  setCurrentPlaybackState,
  thirdone
) => {
  // Get Information About The User's Current Playback State
  spotifyApi
    .getMyCurrentPlaybackState()
    .then((track) => {
      setCurrentPlaybackState(track)
      thirdone(track)
    })
    .catch((err) => console.error('error', err))
}

export const millisToMinutesAndSeconds = (ms) => {
  let minutes = Math.floor(ms / 60000)
  let seconds = Math.floor(ms % 1000).toFixed(0)

  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
