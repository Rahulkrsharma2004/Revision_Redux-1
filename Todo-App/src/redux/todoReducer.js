import * as actionTypes from './actionTypes';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      // Implement logic for adding a new todo
      return state;
    case actionTypes.TOGGLE_TODO:
      // Implement logic for toggling a todo's status
      return state;
    // Implement cases for editing and deleting todos
    default:
      return state;
  }
};

export default todoReducer;
