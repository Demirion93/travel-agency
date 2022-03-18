import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector('#app')
);
