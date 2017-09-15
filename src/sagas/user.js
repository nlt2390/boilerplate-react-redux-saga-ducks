import { 
  put,
  call , 
  all, 
  takeEvery,  
} from 'redux-saga/effects';

import { 
  userTypes, 
  userActions,
} from '../state/user';

import { 
  fetchUserProfile
} from '../apis/user';

export function* getProfile(action) {
  const response = yield call(fetchUserProfile, action.payload.userID);
  yield put(userActions.fetchGetProfileSuccess(response));
}

export function* watchUserActions() {
  yield all([
    takeEvery(userTypes.FETCH_GET_PROFILE, getProfile)
  ])
}