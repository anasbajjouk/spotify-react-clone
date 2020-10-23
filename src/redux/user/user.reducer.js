import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQBCTPEWND_Re6tYd77bzMmisdu8k-YNGREu_cpyozP2RlxhlJF5uRX-g6g78o1U0_AGZmdpUUcK0SCaFTMHg4TJNPCPKDjkgJWmkUOVX9VxuJiXFpfIM017GDEzrYHf4YMl8ROT-u1gNZGWLt8HV60Ns4KVRVtpJsdb5v2IskM_sX8RZe2LvnMTX_-Ll9YW7TNS6v0pp7s7oBGiu3h_4usMu5GzqmJnDsWpolk7E889NBOzoFQt8jFaEG1-z_TO1wxvsoN9dbo-W5HD0vkQ3Rad6R2wvUrrE-_E',
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
