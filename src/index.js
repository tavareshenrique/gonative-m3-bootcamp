import React from 'react';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import createNavigator from './routes';

const App = () => {
  const Routes = createNavigator();
  return <Routes />;
};

export default App;
