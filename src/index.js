import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Blog from './containers/demo/Blog';

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

ReactDOM.render(
    <Blog posts={posts}/>, 
    document.getElementById('root')
);

registerServiceWorker();
