import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from '../src/containers/coup/app';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

registerServiceWorker();
