import api from './api';

export function fetchUserProfile(userId) {
  const userProfileUrl = `users/${userId}`;

  return api.get(
    userProfileUrl, 
    null, 
  );
}