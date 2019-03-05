import { LOAD_BOOKS_SUCCESS } from './../actions/booksAction';
import initialState from './initialState';

const booksReducer = (state = initialState.books, action) => {
  switch(action.type) {
    case LOAD_BOOKS_SUCCESS:
      return action.books;

    default:
      return state;
  }
};

export default booksReducer;
