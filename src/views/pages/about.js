import React from 'react';

import PageTitle from '../components/PageTitle';
import PageDescription from '../components/PageDescription';

function AboutPage(props){
  return(
    <div>
      <PageTitle 
        title={'About Page'}
      />
      <PageDescription
        description={'About Page Description'}
      />
    </div>
  )
}

export default AboutPage;