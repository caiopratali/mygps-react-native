import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {Routes} from './routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={'#000061'} />
    <Routes />
  </>
);

export {App};
