import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer
});

export const store = createStore(rootReducer);

 
