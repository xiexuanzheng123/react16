import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import WelcomeDialog from './containers/relation/WelcomeDialog';

ReactDOM.render(
    <WelcomeDialog />, 
    document.getElementById('root')
);

registerServiceWorker();
