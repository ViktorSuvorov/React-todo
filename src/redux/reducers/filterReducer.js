import { SHOW_ALL, SET_FILTER } from '../actions/actionTypes';

const initialState = {
  filter: SHOW_ALL,
};

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
