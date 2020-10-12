import { PlaylistsActionTypes } from './playlists.types'

export const setPlaylists = (playlists) => ({
  type: PlaylistsActionTypes.SET_PLAYLISTS,
  payload: playlists,
})
