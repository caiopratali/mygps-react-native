import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import {Routes} from './routes';
import theme from './styles/theme';
import {ServiceStatusContext} from './contexts/ServiceStatusContext';
import {store} from './store';

const App: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(10);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.statusbar}
      />
      <Provider store={store}>
        <ServiceStatusContext.Provider
          value={{isEnabled, setIsEnabled, selectedTime, setSelectedTime}}>
          <Routes />
        </ServiceStatusContext.Provider>
      </Provider>
    </ThemeProvider>
  );
};

export {App};
