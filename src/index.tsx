import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from '../src/redux/store';
import {DeviceThemeProvider} from '@sberdevices/plasma-ui';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DeviceThemeProvider>
        <App />
      </DeviceThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
