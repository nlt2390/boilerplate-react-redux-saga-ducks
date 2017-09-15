import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(props){
  const {
    title,
  } = props;
  
  return(
    <h2>{title}</h2>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string,
}

PageTitle.defaultProps = {
  title: '',
}

export default PageTitle;