import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/actionTypes';

const getVisibilityFilter = (store) => store.filterReducer.filter;
const getTodos = (store) => store.todoReducer.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter((todo) => todo.complete);
      case SHOW_ACTIVE:
        return todos.filter((todo) => !todo.complete);
      default:
        return todos;
    }
  }
);
