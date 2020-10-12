import { PlaylistsActionTypes } from './playlists.types'

const INITIAL_STATE = {
  myPlaylists: [],
}

const playlistsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaylistsActionTypes.SET_PLAYLISTS:
      return {
        ...state,
        myPlaylists: action.payload,
      }

    default:
      return state
  }
}

export default playlistsReducer
