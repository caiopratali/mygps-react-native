import {combineReducers} from 'redux';

const FETCH_POINTS_COMMIT = 'FETCH_POINTS_COMMIT';
const FETCH_POINTS_REQUEST = 'FETCH_POINTS_REQUEST';
const FETCH_POINTS_ROLLBACK = 'FETCH_POINTS_ROLLBACK';

const ADD_POINTS_COMMIT = 'ADD_POINTS_COMMIT';
const ADD_POINTS_REQUEST = 'ADD_POINTS_REQUEST';
const ADD_POINTS_ROLLBACK = 'ADD_POINTS_ROLLBACK';

const INITIAL_STATE = {
  packages: [
    {
      id: '1',
      latitude: 123,
      longitude: 456,
      speed: 50,
      time: '2020-01-01',
    },
  ],
};

export const fetchPoints = () => ({
  type: FETCH_POINTS_REQUEST,
  payload: {},
  meta: {
    offline: {
      commit: {type: FETCH_POINTS_COMMIT, meta: {}},
      rollback: {type: FETCH_POINTS_ROLLBACK, meta: {}},
      effect: {url: 'http://localhost:8081/points/', method: 'GET'},
    },
  },
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
        url: `http://localhost:8081/points/${payload.id}`,
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
    case FETCH_POINTS_COMMIT:
      console.log(action);
      return {...state, ...action.payload};
    case ADD_POINTS_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({rootReducer});
