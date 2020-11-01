import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  spotify: null,
  currentUser: null,
  token:
    'BQDh5BMHQJuKOlG1uq7FWhmBnrUttW9RH9XokQUvXJwc2Cv_7tsogPU0As7IYBe8Q9nmseAr0lC6qBYPx-3LX5xOAWzKK6etwTXnRlBghrN0TW9xLrB7xX_Rja01OmRb0sv0F6dLZYTE1kDd-8UHU0iLuBlZJxfn48tpP4wld6o63T-bwdlH4QzWjp_PqCiWb9L31TjR4fatIc5vTM8rZYnhqL7CcVRXYEXY7h_HfOxC0kolxAi6qTSTjT0vJFjwChf7IScUsGY6ZCbeHgHG2bZdmpgkSzgFDjht',
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
