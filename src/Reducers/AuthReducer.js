import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  SET_CURRENT_USER,
} from '../Actions/types';

import isEmpty from '../validation/isEmpty';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  loading: false,
  isAuthenticated: false,
  user: {},
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload, error: null};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload, error: null};
    case LOGIN_USER:
      return {...state, loading: true};
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
