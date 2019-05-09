export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const signInSuccess = signIn => dispatch => {
  dispatch({
    type: SIGN_IN_SUCCESS,
    payload: signIn,
  });
};

export const LOG_OUT = 'LOG_OUT';
export const logOut = signIn => dispatch => {
  dispatch({
    type: LOG_OUT,
    payload: signIn,
  });
};
