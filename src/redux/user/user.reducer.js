import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  token:
    'BQAhdI0IDv_Qd0Uqjk9vTOb-VFHSCQCutWY0Z0HUk45L5JcNN505VWIHgZnIUVBoDds71Z_KUBvWuvzOmkDm0V1yf3IQh0aHv0CCLmAzdOfi-el5rElVwQf5BbRR1AWAU_cInZTjny0cbTGgmxOkTmfpHubK4QqXvv0LBBbAWJLrkYidD885aVrFnrOHXfps7JOBzBbfKaiS9C9mSJFfX41DqWT78uZHRrX723pbJz0EOfoEnQsp8O7wpF9k5_acQdoZeuIpKv1MzgZ1wG0QfbN1CmpzAGxk',
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    case UserActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
