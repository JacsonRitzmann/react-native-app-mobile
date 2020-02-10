import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Routers = createAppContainer(
  createStackNavigator({
    Home,
    Detail,
  }),
);

export default Routers;
