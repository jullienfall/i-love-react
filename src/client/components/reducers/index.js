import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import books from './booksReducer';
import signIn from './signInReducer';

const rootReducer = combineReducers({
    books,
    signIn,
    form: formReducer,
  });

  export default rootReducer;
