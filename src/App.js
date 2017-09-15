import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router, 
} from 'react-router-dom';

import MainLayout from './views/layouts/main';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
