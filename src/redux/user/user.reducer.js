import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQC7JlAej3qUZib8y0XEqUDRe-nsoYhwPv_k2YYSXlVu9yO8pEkasPT66iBbkH5WRB4hgv9DjrTxeuqAkQPkELgzp38V5HSWxJ-GHAv6fkHaKs1LZBqhaWlJZ_pz-OOT3K4tcNC3alK2jkAbusxgYOD5oipbuWXAdkApLfcZIz5NhFtIKjdrdyIAhQn5JC7NT1Dgk1_Kcs0VkTV4X52QJ2Df6f05p0-aKU6cM4ffisuOa0krtLuhwVMYbWVe9UavBud1r72sQAY3ZTzflG3w-Gjii1XUMV0uWvsX',
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
