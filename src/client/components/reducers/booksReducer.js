import { LOAD_BOOKS_SUCCESS, CREATE_BOOK_SUCCESS, UPDATE_BOOK_SUCCESS } from './../actions/booksAction';
import initialState from './initialState';

const booksReducer = (state = initialState.books, action) => {
  switch(action.type) {
    case LOAD_BOOKS_SUCCESS:
      return action.books;

    case CREATE_BOOK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.book)
      ];

    case UPDATE_BOOK_SUCCESS:
      return [
        ...state.filter(book => book.id !== action.book.id),
        Object.assign({}, action.book)
      ];

    default:
      return state;
  }
};

export default booksReducer;
