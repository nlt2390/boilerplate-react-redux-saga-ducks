import { createSelector } from 'reselect';
import { getFormattedName } from './utils';

function profileSelector(state){
  return state.user.profile;
}

export const profileNameSelector = createSelector(
  profileSelector,
  (profile = {}) => {
    return{
      id: profile.id,
      name: getFormattedName(profile.name),
    }
  }
)