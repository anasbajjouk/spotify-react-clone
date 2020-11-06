import { UserActionTypes } from './user.types'

export const setToken = (token) => ({
  type: UserActionTypes.SET_TOKEN,
  payload: token,
})

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
})
