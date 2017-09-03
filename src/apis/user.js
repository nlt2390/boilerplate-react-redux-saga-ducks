import api from './api';
//import { profileMapper } from '../apis/mappers';

export function fetchUserProfile(userId) {
    const userProfileUrl = `users/${userId}`;

    return api.get(
      userProfileUrl, 
      null, 
      //{ modelPath: 'profile' , mapper: profileMapper }
    );
}