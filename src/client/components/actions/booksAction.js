import BooksApi from './../utils/api';

export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const loadBooksSuccess = books => {
  return { type: LOAD_BOOKS_SUCCESS, books };
};

export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const createBookSuccess = book => {
  return {type: CREATE_BOOK_SUCCESS, book};
};

export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const updateBookSuccess = book => {
  return {type: UPDATE_BOOK_SUCCESS, book};
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

export const saveBook = book => {
  return dispatch => {
    return BooksApi.saveBook(book).then(savedBook => {
      book.id ? dispatch(updateBookSuccess(savedBook)) :
        dispatch(createBookSuccess(savedBook));
    }).catch(error => {
      throw(error);
    });
  };
};
