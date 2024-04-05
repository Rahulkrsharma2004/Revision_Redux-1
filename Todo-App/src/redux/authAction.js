// src/actions/authActions.js
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', credentials);
      const token = response.data.token;
      dispatch(loginSuccess(token));
    } catch (error) {
      console.log(error)
    }
  };
};

export const loginSuccess = (token) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: { token }
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  };
};
