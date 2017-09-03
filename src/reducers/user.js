import { types } from '../actions/user';

const initState = {
  profile: {},
  isFetching: false,
}

export function getProfileRequest(){
  
}

export default function user(state = initState, action) {
  switch(action.type) {
      case types.GET_PROFILE_REQUEST: {
        return {
          ...state,
          isFetching: true,
        }
      }

      case types.GET_PROFILE_SUCCESS: {
          return {
            ...state,
            profile: action.payload.profile,
            isFetching: false,
          }
      }
      default: 
        return state
  }
}