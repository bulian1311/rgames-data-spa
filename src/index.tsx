import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { App } from '@app';
import { store } from '@store';
import './styles/index.css';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
