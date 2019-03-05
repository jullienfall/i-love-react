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

// console.log(generateId('The Picture of Dorian Gray'));

class BooksApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveAuthor(book) {
    books = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (book.title.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (book.author.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (books.id) {
          const existingAuthorIndex = books.findIndex(a => a.id == book.id);
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

  // static deleteAuthor(bookId) {
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
