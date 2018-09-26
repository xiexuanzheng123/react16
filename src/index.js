import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Table from '../src/containers/fragments/Table';

ReactDOM.render(
    <Table />, 
    document.getElementById('root')
);

registerServiceWorker();
