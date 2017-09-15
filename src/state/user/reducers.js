import * as types from './types';

const initState = {
  profile: {},
  isFetching: false,
}

export default function user(state = initState, action) {
  switch(action.type) {
    case types.FETCH_GET_PROFILE: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case types.FETCH_GET_PROFILE_SUCCESS: {
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