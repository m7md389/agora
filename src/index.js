import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import inventory from './store/Inventory';
import { Provider } from "mobx-react"

const stores = { inventory }

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}> <App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
