import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQAiyFMM39Kr7_JLi8ymtIIdkKiVQNETpJkCoRqNyJ3mu_j4C10PmKpaL3v8E-_0LkPYoh3M5XjrY90r_FIh-gdpndapmhjKCV64sAGapMc5sUqn84Wro1g93KL94V8B19VcUh9z-czKtN_6iMvxPgKexMmwpO4TJgWDIijPHUdBqt2yzYy1H4uaWdtJfRTjqU6JvfpttRQ_YjLNFl3W1Dh7Lw0k_53UG_WZFWEAQhpgvLM7T-QZFsAie9x-tdPqUtU3VcYn-vr5Ce-ilNPD2kAeV44EV92juu-N',
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
