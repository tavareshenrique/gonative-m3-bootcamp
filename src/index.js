import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import store from './store';

import createNavigator from './routes';
import { setNavigator } from './services/navigation';

const App = () => {
  const Routes = createNavigator();
  return (
    <Provider store={store}>
      <Routes ref={setNavigator} />
    </Provider>
  );
};

export default App;
