import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Link,
  Route,
} from 'react-router-dom';

import Home from './containers/Home';
import About from './components/About';

import './App.css';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div> 
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
