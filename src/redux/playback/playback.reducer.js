import { PlaybackActionTypes } from './playback.types'

const INITIAL_STATE = {
  currentPlayingTrack: {},
  currentPlaybackState: {},
  playing: false,
  repeatState: false,
  shuffleState: 'off',
  volume: '50'
}

const playbackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaybackActionTypes.SET_CURRENT_PLAYING_TRACK:
      return {
        ...state,
        currentPlayingTrack: action.payload,
      }

    case PlaybackActionTypes.SET_CURRENT_PLAYBACK_STATE:
      return {
        ...state,
        currentPlaybackState: action.payload,
      }
    case PlaybackActionTypes.SET_PLAYING:
      return {
        ...state,
        playing: action.payload,
      }

    case PlaybackActionTypes.SET_REPEAT_STATE:
      return {
        ...state,
        repeatState: action.payload,
      }

    case PlaybackActionTypes.SET_SHUFFLE_STATE:
      return {
        ...state,
        shuffleState: action.payload,
      }
    case PlaybackActionTypes.SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      }
    default:
      return state
  }
}

export default playbackReducer
