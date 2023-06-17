import { LOGIN_SUCCESS, LOGIN_ERROR, GET_USER } from '../constants';
// Action creators
export const loginSuccess = (data: any) => ({
    type: LOGIN_SUCCESS,
    payload: data
  });
  
  export const loginError = (error: any) => ({
    type: LOGIN_ERROR,
    payload: error
  });

  export const getUser = () => ({
    type: GET_USER,
    payload: ""
  })