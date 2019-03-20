const delay = 100;

const books = [
  {
    id: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    id: 'Michael Cunningham',
    title: 'Hours',
    author: 'Michael Cunningham'
  },
  {
    id: 'Oscar Wilde',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde'
  }
];

const generateId = (book) => {
  return book.author;
};

class BooksApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation

        if (book.id) {
          const existingAuthorIndex = books.findIndex(a => a.id === book.id);
          books.splice(existingAuthorIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.id = generateId(book);
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  // static deleteBook(bookId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfAuthorToDelete = books.findIndex(book => {
  //         book.id == bookId;
  //       });
  //       books.splice(indexOfAuthorToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default BooksApi;
