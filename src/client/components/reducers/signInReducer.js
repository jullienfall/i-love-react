import { SIGN_IN_SUCCESS, LOG_OUT } from './../actions/signInActions';
import initialState from './initialState';

const signInReducer = (state = initialState.signIn, action) => {
  switch(action.type) {
    case SIGN_IN_SUCCESS:
      return true;

    case LOG_OUT:
      return false;

    default:
      return state;
  }
};

export default signInReducer;
