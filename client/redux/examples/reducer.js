import * as Immutable from 'immutable';
import { combineReducers } from 'redux';
import {
  GET_EXAMPLES,
  GET_EXAMPLES_REQUEST,
  GET_EXAMPLES_FAILURE,
  GET_EXAMPLE,
  GET_EXAMPLE_REQUEST,
  GET_EXAMPLE_FAILURE,
} from './types';

const all = (state = new Immutable.OrderedMap(), action) => {
  switch (action.type) {
    case GET_EXAMPLES:
      return new Immutable.OrderedMap(action.payload.map(g => [g.id, g]))
        .sortBy(g => g.id);
    case GET_EXAMPLE:
      return state.update(action.payload.id, () => action.payload)
        .sortBy(g => g.id);
    default:
      return state;
  }
};

const status = (state = { loaded: false, loading: false }, action) => {
  switch (action.type) {
    case GET_EXAMPLES:
      return {
        ...state,
        loaded: true,
        loading: false,
      };
    case GET_EXAMPLE:
      return {
        ...state,
        loading: false,
      };
    case GET_EXAMPLES_REQUEST:
    case GET_EXAMPLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EXAMPLES_FAILURE:
    case GET_EXAMPLE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default combineReducers({ all, status });
