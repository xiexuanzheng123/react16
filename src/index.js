import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LoginControl from './containers/demo/LoginControl';

ReactDOM.render(
    <LoginControl />, 
    document.getElementById('root')
);

registerServiceWorker();
