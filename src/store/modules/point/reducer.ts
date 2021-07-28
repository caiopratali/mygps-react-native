import {Reducer} from 'redux';

import {IPointState} from './types';

const INITIAL_STATE: IPointState = {
  keys: [],
};

export const point: Reducer<IPointState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_POINT':
      const {item} = action.payload;

      console.log(item);

      return {
        ...state,
        keys: [
          ...state.keys,
          {
            item,
          },
        ],
      };

    default:
      return state;
  }
};
