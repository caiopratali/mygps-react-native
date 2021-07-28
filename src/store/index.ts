import {createStore} from 'redux';
import {IPointState} from './modules/point/types';

import rootReducer from './modules/rootReducer';

export interface IState {
  point: IPointState;
}

const store = createStore(rootReducer);

export {store};
