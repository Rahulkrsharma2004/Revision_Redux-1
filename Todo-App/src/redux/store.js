import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';
import themeReducer from './themeReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
  auth:authReducer
});

export const store = createStore(rootReducer);

 
