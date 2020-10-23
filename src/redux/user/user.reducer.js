import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQBiPd-76doqIyTBI3rjrBUZ_mgTAKJBEMDdTFwiODbONGXNwXFROhNcu91EmLQdpskTK7txy6tRb5rBjPU-fh4mKMbGFLwb6gPqKDkIKNj6roYg5xJc4ulHeR20sSCCKakEiLMTZe5hzMlZ-efzTVWqAe2lEbLIUdvZKo6jW07iwPcpb4WA8htSuipxneKxoYyh5T7BG_V91u-aAImsrpAQj4igOdt4mfFzebRR-MePFjrNCPEAFrp9JDpzJhy44nj2J9zJ1ClLe-jInRofQsIrYbFBWhmkaa2M',
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
