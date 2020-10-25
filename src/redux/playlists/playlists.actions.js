import { PlaylistsActionTypes } from './playlists.types'

export const setPlaylists = (playlists) => ({
  type: PlaylistsActionTypes.SET_PLAYLISTS,
  payload: playlists,
})

export const setPlaylist = (playlist) => ({
  type: PlaylistsActionTypes.SET_PLAYLIST,
  payload: playlist,
})
