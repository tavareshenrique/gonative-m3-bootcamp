import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import store from './store';

import createNavigator from './routes';

const App = () => {
  const Routes = createNavigator();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
