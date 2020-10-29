export const truncate = (string, number = 20) => {
  return string.length > number
    ? string.substring(0, number - 1) + ` ...`
    : string
}

export const millisToMinutesAndSeconds = (ms) => {
  let minutes = Math.floor(ms / 60000)
  let seconds = Math.floor((ms % 60000) / 1000).toFixed(0)

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export const convertToLocalDate = (date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const utcDate = new Date(date)

  const year = utcDate.getUTCFullYear()
  const month = monthNames[utcDate.getUTCMonth()].substring(0, 3)
  const day = utcDate.getUTCDate()

  return `${month} ${day}, ${year}`
}

export const handlePlayPause = (playing, spotifyApi, setPlay) => {
  if (playing) {
    spotifyApi.pause()
    setPlay(false)
  } else {
    spotifyApi.play()
    setPlay(true)
  }
}
