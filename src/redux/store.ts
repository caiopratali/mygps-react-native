import {createStore, compose, applyMiddleware} from 'redux';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import {rootReducer} from './reducer';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(), offline(offlineConfig)),
);
