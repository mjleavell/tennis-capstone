import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './styles/index.scss';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

registerServiceWorker();
