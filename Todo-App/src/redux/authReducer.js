
import * as actionTypes from './actionTypes';

const initialState = {
  isAuthenticated: true,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null
      };
    default:
      return state;
  }
};

export default authReducer;
