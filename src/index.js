import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CustomTextInput from '../src/containers/refs/CallbackRef';

ReactDOM.render(
    <CustomTextInput />, 
    document.getElementById('root')
);

registerServiceWorker();
