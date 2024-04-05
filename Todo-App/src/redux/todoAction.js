import * as actionTypes from './actionTypes';

export const addTodo = (title) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: { title }
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: { id }
  };
};

