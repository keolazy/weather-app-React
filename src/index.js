import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Import bootstrap file.
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render takes two arguments. (appName, document.getTarget(''))
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
