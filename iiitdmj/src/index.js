import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from "./styles/Theme/ThemeProvider";
ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider>
      <App />
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
