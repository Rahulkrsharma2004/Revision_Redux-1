// src/reducers/todoReducer.js
import * as actionTypes from './actionTypes';

const initialState = 
  [
    {
      id: Math.random(),
      title: 'Learn Redux',
      status: false
    },
    {
      id: Math.random(),
      title: 'Build an app',
      status: false
    },
    {
      id: Math.random(),
      title: 'Learn React',
      status: false
    }
  ]


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      // Implement logic for adding a new todo
      const newTodo = {
        id: Math.random(), // You may use a better approach to generate unique IDs
        title: action.payload.title,
        status: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case actionTypes.TOGGLE_TODO:
      // Implement logic for toggling a todo's status
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };
    // Implement cases for editing and deleting todos
    default:
      return state;
  }
};

export default todoReducer;
