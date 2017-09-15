import React from 'react';

function UserProfile(props){
  const {
    profile,
    isFetching,
  } = props;

  if(isFetching){
    return(
      <div>Loading</div>
    )
  } else {
    if(profile.id){
      return(
        <div>
          <div>
            ID: {profile.id}
          </div>
          <div>
            Name: {profile.name}
          </div>
        </div>
      )
    }
  }
  return null;
}

export default UserProfile;