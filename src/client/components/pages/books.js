import React, {Component} from 'react';
import {connect} from 'react-redux';

class Books extends Component {
  render() {
    const { books } = this.props;
    return (
      <h1>{books[0].title}</h1>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(Books);
