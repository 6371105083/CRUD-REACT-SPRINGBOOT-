// src/redux/actions.js
export const LOGIN_USER = 'LOGIN_USER';

export const loginUserAction = (username) => {
  return {
    type: LOGIN_USER,
    payload: username,
  };
};
