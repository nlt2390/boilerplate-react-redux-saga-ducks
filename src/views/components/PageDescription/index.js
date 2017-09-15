import React from 'react';
import PropTypes from 'prop-types';

function PageDescription(props){
  const {
    description,
  } = props;

  return(
    <p>{description}</p>
  )
}

PageDescription.propTypes = {
  description: PropTypes.string,
}

PageDescription.defaultProps = {
  description: '',
}


export default PageDescription;