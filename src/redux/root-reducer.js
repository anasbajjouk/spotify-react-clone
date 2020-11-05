import { combineReducers } from 'redux'
import playbackReducer from './playback/playback.reducer'
import playlistsReducer from './playlists/playlists.reducer'
import userReducer from './user/user.reducer'

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['user'],
// }

const rootReducer = combineReducers({
  user: userReducer,
  playlists: playlistsReducer,
  playback: playbackReducer,
})

export default rootReducer
