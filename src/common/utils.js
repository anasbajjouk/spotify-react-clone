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

export const handleKeyPress = (event, key, func) => {
  if (event.key === key) {
    func()
  }
}

export const hexToRgbA = (inputHex, opacity = 0.1) => {
  if (inputHex) {
    const hex = inputHex.replace('#', '')
    if (inputHex.indexOf('#') > -1 && (hex.length === 3 || hex.length === 6)) {
      const multiplier = hex.length === 3 ? 1 : 2

      const red = parseInt(hex.substring(0, multiplier), 16)
      const green = parseInt(hex.substring(multiplier, 2 * multiplier), 16)
      const blue = parseInt(hex.substring(2 * multiplier, 3 * multiplier), 16)

      const result = `rgba(${red},${green},${blue},${opacity})`

      return result
    }
    return inputHex
  }
  return ''
}

export default hexToRgbA
