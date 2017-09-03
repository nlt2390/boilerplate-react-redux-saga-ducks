import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './configureStore';

render(
  <App store={store} />,
  document.getElementById('root')
)
registerServiceWorker();