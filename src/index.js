import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import inventory from './store/Inventory';

ReactDOM.render(
  <React.StrictMode>
    <App store={inventory} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
