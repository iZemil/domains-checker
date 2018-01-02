import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './components/App';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

const store = new Store();

ReactDOM.render(
  <App store={ store }/>,
  document.getElementById('root'));
registerServiceWorker();
