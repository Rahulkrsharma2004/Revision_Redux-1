
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
      const newTodo = {
        id: Math.random(), 
        title: action.payload.title,
        status: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case actionTypes.TOGGLE_TODO:
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };
    default:
      return state;
  }
};

export default todoReducer;
