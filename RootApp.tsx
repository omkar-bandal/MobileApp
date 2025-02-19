import React from 'react';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import App from './App';

const RootApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default RootApp;
