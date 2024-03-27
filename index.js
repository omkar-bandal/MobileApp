/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { name as mobileApp } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const RootApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(mobileApp, () => RootApp);
