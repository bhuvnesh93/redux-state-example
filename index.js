import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import React from 'react';
import { name as appName } from './app.json';
import App from './app/App';
// import configureStore from './lib/store';

// const store = configureStore();

// const RNRedux = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

AppRegistry.registerComponent(appName, () => App);
