import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:null
  // token:
  //   'BQDm8MKvD9WCXIax-gv68TG-EmmzbZm_QGdY0py8zEgDkFvv9_lE0RkK7dVyAd5pDOFQ-Atl-1DwANfjsph_lwtAewOdmBydxXyJe0R6tjyCeOJE3yVRpJ7E5U08QjqtOxMLt8upXxugqqAIhDX6SmbalNe_xUqHpQxo94wk53UQVcoJ8d5PQm-4mu5Wlqp8mk2Lt23_kzqzJUMMKkf-NgUft-RZjFA1bvmXceXgeHRuXspvfhT1KeJ94jS6_RuApIxOGregvQBWu-QxeDAuZ_gn3MxeQjvyLAEr',
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
