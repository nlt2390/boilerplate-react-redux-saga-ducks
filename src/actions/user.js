export const types = {
  GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
}

export const actions = {
  getProfileRequest: (userID) => ({ type: types.GET_PROFILE_REQUEST, payload: {userID} }),  
  getProfileSuccess: (profile) => ({ type: types.GET_PROFILE_SUCCESS, payload: { profile }}),
}