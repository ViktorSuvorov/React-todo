import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import { filterReducer } from '../reducers/filterReducer';

const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
});

export default rootReducer;
