import React from 'react';
import { Provider } from 'react-redux';
import config from './config';
import AddPlace from './screens';

const App = () => {
  return (
    <Provider store={config.store}>
      <AddPlace />
    </Provider>
  );
};
export default App;
