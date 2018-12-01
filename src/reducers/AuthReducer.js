import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          user: action.payload
        };
      case EMAIL_CHANGED:
        return {
          ...state,
          email: action.payload
        };
      case PASSWORD_CHANGED:
        return {
          ...state,
          password: action.payload
        };
      default:
        return state;
    }
};
