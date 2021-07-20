import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {Routes} from './routes';
import theme from './styles/theme';
import {ServiceStatusContext} from './contexts/ServiceStatusContext';

const App: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(10);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.statusbar}
      />
      <ServiceStatusContext.Provider
        value={{isEnabled, setIsEnabled, selectedTime, setSelectedTime}}>
        <Routes />
      </ServiceStatusContext.Provider>
    </ThemeProvider>
  );
};

export {App};
