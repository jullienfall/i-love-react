import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bookActions from './../actions/booksAction';
import BookForm from './../atoms/forms/bookForm';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: Object.assign({}, this.props.book),
      errors: {},
    };

    this.updateBookState = this.updateBookState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book.id !== nextProps.book.id) {
      this.setState({book: Object.assign({}, nextProps.book)});
    }
  }

  updateBookState(event) {
    const field= event.target.name;
    let book = this.state.book;
    book[field] = event.target.value;
    return this.setState({ book: book });
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        throw(error);
      });
  }

  redirect() {
    this.props.history.push('/books');
  }

  render() {
    return (
      <div className="container">
        <h2>Add a Book</h2>
          <BookForm
            onSave={this.saveCourse}
            book={this.state.book}
            errors={this.state.errors}
            onChange={this.updateBookState}
          />
      </div>
    )
  }
};

const getBookById = (books, id) => {
  const book = books.filter(book => book.id === id);
  if(book) return book[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.hasOwnProperty.id;
  let book = {id: '', title: '', author: ''};

  if(bookId && state.books.length > 0) {
    book = getBookById(state.books, bookId);
  }

  return {
    book: book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
