import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQAsvPxdLFGrZe9qfGDvibPj7t7wGq248nWpBDkCHcyMnOl2JiTkGY7tLIUYH5GOWHLrIZ3j8zV_rUJiErgdCxGLMD1ebeggIIVuHQ0TbqM6Mlm79KKPflmq9OdyM0bbhjOPNh7tkc-8QRio0rjLMntRUi3-d-Y8vL5L1bQMfmCssh2vcCrijWr1CtoSx2bLXjZvW9JNtpfPPLHRU6uEOYxM_v9DoGlYBSOFKuxSB0nIehnocxJqZNWWcZeA4n_B5Q3WR8gVJTLBE0I80nPpBwpiTdj20jNlB7D8',
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      }

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    case UserActionTypes.SET_SPOTIFY:
      return {
        ...state,
        spotify: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
