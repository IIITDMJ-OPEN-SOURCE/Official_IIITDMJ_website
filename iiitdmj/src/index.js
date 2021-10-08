import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from "./styles/Theme/ThemeProvider";
ReactDOM.render(
    <ThemeProvider>
      <App />
     </ThemeProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
