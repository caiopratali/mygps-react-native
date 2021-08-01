import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import {Routes} from './routes';
import theme from './styles/theme';
import {store} from './redux/store';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.statusbar}
      />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export {App};
