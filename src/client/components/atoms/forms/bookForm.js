import React from 'react';

const BookForm = ({ book, onChange, onSave }) => {
  return (
    <form>
      <label className="form__label" htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={book.title}
        onChange={onChange}
        placeholder="Arch of Triumph"
        className="form__input"
      />
      <label className="form__label" htmlFor="author">Author</label>
      <input
        id="author"
        name="author"
        type="text"
        value={book.author}
        onChange={onChange}
        placeholder="Erich Maria Remarque"
        className="form__input"
      />
      <input
        type="submit"
        value='Save'
        className="btn btn--blue"
        onClick={onSave}
      />
    </form>
  )
};

export default BookForm;
