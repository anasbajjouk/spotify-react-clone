import { PlaylistsActionTypes } from './playlists.types'

export const setPlaylists = (playlists) => ({
  type: PlaylistsActionTypes.SET_PLAYLISTS,
  payload: playlists,
})

export const setPlaylist = (playlist) => ({
  type: PlaylistsActionTypes.SET_PLAYLIST,
  payload: playlist,
})

export const setGenres = (genres) => ({
  type: PlaylistsActionTypes.SET_GENRES,
  payload: genres,
})

export const setSearchResults = (searchResults) => ({
  type: PlaylistsActionTypes.SET_SEARCH_RESULTS,
  payload: searchResults,
})
