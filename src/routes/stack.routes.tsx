import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/Home';
import theme from '../styles/theme';
import {Status} from '../pages/Status';
import {HeaderButton} from '../components/HeaderButton';

const {Navigator, Screen} = createStackNavigator();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: `${theme.colors.white}`,
        headerStyle: {
          backgroundColor: `${theme.colors.blue}`,
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerTitle: 'Olá, bem-vindo',
          headerTitleStyle: {
            color: theme.colors.white,
            opacity: 0.7,
            fontFamily: theme.fonts.bold,
            fontSize: 16,
          },
          headerRight: () => (
            <HeaderButton
              text="Status"
              onPress={() => navigation.navigate('Status')}
            />
          ),
        })}
      />
      <Screen
        name="Status"
        component={Status}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme.colors.white,
            opacity: 0.7,
            fontFamily: theme.fonts.bold,
            fontSize: 16,
          },
          headerLeft: () => (
            <HeaderButton text="Voltar" onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Navigator>
  );
};
