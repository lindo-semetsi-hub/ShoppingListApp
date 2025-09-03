import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import BrowserRouter from 'react-router-dom';
import store from './store';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App /></BrowserRouter>
    </Provider>
    <App />
  </React.StrictMode>,
);
