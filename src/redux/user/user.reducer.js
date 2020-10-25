import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQCPTFB-OWjy2qdZazIeuosr3--XrYHxMONlLoOmJUNgy9cgYQh06APe8h5OceUrwlfxpGXP66TzsRL-PxJUsbbtWsq96MN72ueKIrv0Sw9hs5bF8R87GaNbzPHw6TLRXJsOeAdtgK4fY9tiE2qB6fbSKa5HZEHmOTD0iyio5j9TGTET0P4U6xTMbCnpCMb-Sgyx1qXiHlKU9Go2quJxhi1M9kd2lAa5fvS7LoLB5P75582YDguGdZ_qk1TGSHZ4rWVS22SUHRUMm9wc6MZrb-N8vdMPcc8DKcHU',
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
