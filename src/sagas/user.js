import { 
  put,
  call , 
  all, 
  takeEvery,  
} from 'redux-saga/effects';

import { 
  types, 
  actions,
} from '../actions/user';

import { 
  fetchUserProfile
} from '../apis/user'

export function* getProfile(action) {
  const response = yield call(fetchUserProfile, action.payload.userID);
  yield put(actions.getProfileSuccess(response));
}

export function* watchUserActions() {
  yield all([
      takeEvery(types.GET_PROFILE_REQUEST, getProfile)
  ])
}