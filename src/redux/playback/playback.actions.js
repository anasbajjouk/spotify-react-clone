import { PlaybackActionTypes } from './playback.types'

export const setPlayingTrack = (track) => ({
  type: PlaybackActionTypes.SET_CURRENT_PLAYING_TRACK,
  payload: track,
})

export const setCurrentPlaybackState = (track) => ({
  type: PlaybackActionTypes.SET_CURRENT_PLAYBACK_STATE,
  payload: track,
})

export const setPlay = (playingOrNot) => ({
  type: PlaybackActionTypes.SET_PLAYING,
  payload: playingOrNot,
})

export const setRepeat = (repeatingOrNot) => ({
  type: PlaybackActionTypes.SET_REPEAT_STATE,
  payload: repeatingOrNot,
})

export const setShuffle = (shufflingType) => ({
  type: PlaybackActionTypes.SET_SHUFFLE_STATE,
  payload: shufflingType,
})

export const setMyVolume = (volume) => ({
  type: PlaybackActionTypes.SET_VOLUME_STATE,
  payload: volume,
})

export const setRecentlyPlayed = (recentlyPlayed, limit) => ({
  type: PlaybackActionTypes.SET_RECENTLY_PLAYED,
  payload: { recentlyPlayed, limit },
})

export const setLimit = (limit) => ({
  type: PlaybackActionTypes.SET_LIMIT,
  payload: limit,
})
