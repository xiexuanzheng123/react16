import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HelloMessage from '../src/containers/webComponent/HelloMessage';

ReactDOM.render(
    <HelloMessage name={123}/>, 
    document.getElementById('root')
);

registerServiceWorker();
