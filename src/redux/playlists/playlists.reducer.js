import { PlaylistsActionTypes } from './playlists.types'

const INITIAL_STATE = {
  myPlaylists: [],
  myPlaylist: {},
  myGenres: [],
  mySearchList: [],
}

const playlistsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaylistsActionTypes.SET_PLAYLISTS:
      return {
        ...state,
        myPlaylists: action.payload,
      }

    case PlaylistsActionTypes.SET_PLAYLIST:
      return {
        ...state,
        myPlaylist: action.payload,
      }

    case PlaylistsActionTypes.SET_GENRES:
      return {
        ...state,
        myGenres: action.payload,
      }

    case PlaylistsActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        mySearchList: action.payload,
      }

    default:
      return state
  }
}

export default playlistsReducer
