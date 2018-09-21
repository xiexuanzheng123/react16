import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Calculator from './containers/hoist/Calculator';

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

ReactDOM.render(
    <Calculator />, 
    document.getElementById('root')
);

registerServiceWorker();
