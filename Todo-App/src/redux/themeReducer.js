// src/reducers/themeReducer.js
import * as actionTypes from './actionTypes';

const initialState = {
  darkMode: false
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default themeReducer;
