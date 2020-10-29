import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQC5BeaFVwEfj99KBWr9e2Rea1DpsVEhiIGN7kQ1JmIcAlTrX4XNclx6QlYh8Rx-vdQ1VD1IGMCQVsdMznGIogE8MPS1AhspAKsP0vwtGSSs5u8MvTGNYLW7_DVDIp7OuuruQplyKzk9P1qezqQc7MZS4j9VFF5wEbGfurAVXJkPAI04h5O0f1W6kcoY3ItiHq6p3ZdQ76l6eazFDQv1aBSjsZzb_tmWVcB5ZGShNmhNFG5iuVo3xIhivikrtyu6qPucMFOvHOTUWBIiXY68UUKzMekvi3mG7Rgw',
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
