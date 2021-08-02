import {API_URL} from '@env';
import {combineReducers} from 'redux';

const FETCH_POINTS_REQUEST = 'FETCH_POINTS_REQUEST';

const ADD_POINTS_COMMIT = 'ADD_POINTS_COMMIT';
const ADD_POINTS_REQUEST = 'ADD_POINTS_REQUEST';
const ADD_POINTS_ROLLBACK = 'ADD_POINTS_ROLLBACK';

const INITIAL_STATE = {
  packages: [],
};

export const fetchPoints = () => ({
  type: FETCH_POINTS_REQUEST,
  payload: {},
  meta: {},
});

export const addPoint = (payload: any) => ({
  type: ADD_POINTS_REQUEST,
  payload: payload,
  meta: {
    offline: {
      commit: {
        type: ADD_POINTS_COMMIT,
        meta: {payload},
      },
      rollback: {
        type: ADD_POINTS_ROLLBACK,
        meta: {payload},
      },
      effect: {
        url: `${API_URL}${payload.id}`,
        method: 'POST',
        json: payload.points,
      },
    },
  },
});

export const rootReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_POINTS_REQUEST:
      return state;
    case ADD_POINTS_REQUEST:
      console.log(state);
      return {
        ...state,
        packages: [...state.packages, action.payload],
      };
    case ADD_POINTS_COMMIT:
      const pointIndex = state.packages.findIndex(
        item => item.id === action.meta.payload.id,
      );
      state.packages[pointIndex].points.status = action.payload.status;
      return state;
    default:
      return state;
  }
};

export default combineReducers({rootReducer});
