import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NameForm from './containers/form/NameForm';

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

ReactDOM.render(
    <NameForm posts={posts}/>, 
    document.getElementById('root')
);

registerServiceWorker();
