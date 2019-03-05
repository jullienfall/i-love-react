import BooksApi from './../utils/api';

export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const loadBooksSuccess = books => {
  return { type: LOAD_BOOKS_SUCCESS, books };
};

export const loadBooks = () => {
  return dispatch => {
    return BooksApi.getAllBooks().then(books => {
      dispatch(loadBooksSuccess(books));
    }).catch(error => {
      throw(error);
    });
  }
};
