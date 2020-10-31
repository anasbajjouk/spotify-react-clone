import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQCU2ifOHe2qUKNi25BpulFRi4cFhMMX-6OuXLgqefuLhJ6U1vzLcnzCGMXpYbi5w8Zh7ELMMxdj54ZDvwBQx2Xq8StVlOY9qAwEpRFrV4yRhGO_DoLMfLULVGdXI2YltO5CXUZb345kDTTVTsh05FJzgju5oACJJ_KrYacHD6ltrimIpQdNkyqXundEcjjxwkyk_n7DtYaNcIUG0Xs7VCxLVVFlzbSl-90G-tQ9iPsoYwY3bv25LO4VSM4tcsIstxb69bqIAwTjeO0O67lJe3MMMqRfr5jYxhqr',
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
