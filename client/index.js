import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { createRoot } from 'react-dom/client';


const container =   document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);