import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token: null
    // 'BQAOeCBQnwzK6OCv3q35RyJ24bE5SNgLdVK5tCUAOM0usnEuCzn1iQTLParx8V2IQY7quZsmGz8rTBHrxIBj-0qgS3WTtNQHa4ZUqQ3ztrzBEg-BuhyUkj8ncM42vdUZPxd8e2_6nbeXgQjb2rHveKzCLuoK5p4fWCcGam8EnIvXmtS8gkH6264frn-KxbMX_m0s3QDepgpPbi8viGrn4O8WVwayOQG6hx2GHain6DlEK_kfhBUCPQDxm0SY1uX6g-Wfy0ZI81NrGBaiKVvcNm7UKYojOF9N_YE0',
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
