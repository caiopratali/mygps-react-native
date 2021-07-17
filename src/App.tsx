import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {Routes} from './routes';
import theme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.statusbar}
    />
    <Routes />
  </ThemeProvider>
);

export {App};
