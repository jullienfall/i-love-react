import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import books from './booksReducer';

const rootReducer = combineReducers({
    books,
    form: formReducer,
  });

  export default rootReducer;
