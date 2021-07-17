import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/Home';
import {Status} from '../pages/Status';
const {Navigator, Screen} = createStackNavigator();

export const StackRoutes: React.FC = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#1D1B7E',
      },
    }}>
    <Screen name="Home" component={Home} />
    <Screen name="Status" component={Status} />
  </Navigator>
);
