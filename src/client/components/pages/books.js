import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Books extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="book__wrapper">
        <div className="container">
          <h1 className="book__title">List of the books</h1>
          {books.map(book => (
            <div className="book__item" key={book.title}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
          <button className="btn"><Link to="/add-book" className="link">Add book</Link></button>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(Books);
