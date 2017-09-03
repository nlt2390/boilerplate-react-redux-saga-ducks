import React from 'react';
import { connect } from 'react-redux'

import { actions } from '../../actions/user';

function renderProfileDetails(profile, isFetching){
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


const Home = (props) => {
  const {
    profile,
    isFetching,
    getProfileRequest,
  } = props;

  return (
    <div>
      <h2>Home</h2>
      <div>
        <button onClick={()=>getProfileRequest(1, isFetching)}>
          User 1
        </button>
      </div>

      <div>
        <button onClick={()=>getProfileRequest(2, isFetching)}>
          User 2
        </button>
      </div>

      {renderProfileDetails(profile, isFetching)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
      profile: state.user.profile,
      isFetching: state.user.isFetching,
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    getProfileRequest: (userId, isFetching) => {
      if(!isFetching){
        dispatch(actions.getProfileRequest(userId));
      }
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);
