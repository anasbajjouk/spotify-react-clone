import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  token:
    'BQDmPD88HM79igxc_1D2mp73vXSqpk-EnFUCgbfDVdnEC2mPN6fetP4Re20yhjhnSa5nmqkOldwbNLNC01EhHLmV4uuLVtknO52b7VImAxfgHV40A8zdNX1LLGGIO-I9wqyh6X6qUhI182n3fwpeYEqiAiujwKAP8HLiWe0HmKxXx_F6r7t4jcZzSDntLF2ObiQPAS3oyKXEIimnA29En0kxhLZ1xwrnZXmqo--QQy8p6Uwyo7ue9Qwr3kCgJLgMYU-o4fwPh7M8e_8JPXg0mzu-VS2JWZdz',
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
    default:
      return state
  }
}

export default userReducer
