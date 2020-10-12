import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import playlistsReducer from './playlists/playlists.reducer'

import userReducer from './user/user.reducer'

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['user'],
}

const rootReducer = combineReducers({
  user: userReducer,
  playlists: playlistsReducer
})

export default persistReducer(persistConfig, rootReducer)
