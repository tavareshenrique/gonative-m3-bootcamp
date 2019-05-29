import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Todos from '~/pages/Todos';

const Routes = () => createAppContainer(
  createSwitchNavigator({
    Todos,
  }),
);

export default Routes;
