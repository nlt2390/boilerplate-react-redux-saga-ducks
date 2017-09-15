import * as types from './types';

export function fetchGetProfileRequest(userID){
  return { 
    type: types.FETCH_GET_PROFILE, 
    payload: { userID }
  }
}  

export function fetchGetProfileSuccess(profile){
  return {
    type: types.FETCH_GET_PROFILE_SUCCESS, 
    payload: { profile },
  }
}