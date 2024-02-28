// src/redux/reducers.js
import { LOGIN_USER } from './actions.jsx';

export const initialState = {
  user: {
    name: 'Guest',
    isLoggedIn: false,
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
          isLoggedIn: true,
        },
      };
    default:
      return state;
  }
};
