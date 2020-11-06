// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [],
  todoFilter:'All'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now() + Math.random(),
            text: action.payload,
            complete: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
      
    case TOGGLE_TODO:
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload
              ? {
                  ...todo,
                  complete: !todo.complete,
                }
              : todo
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
