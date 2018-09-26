import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SayHello from '../src/containers/optimize/SayHello';

ReactDOM.render(
    <SayHello />, 
    document.getElementById('root')
);

registerServiceWorker();
