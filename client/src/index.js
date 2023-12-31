import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// unregister() to register() below. Note this comes with some pitfalls
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
