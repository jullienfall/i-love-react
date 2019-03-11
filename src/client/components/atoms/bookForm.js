import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import FormField from './formField';

const BookForm = ({book, onSave, onChange}) => {
  return (
    <form action="">
      <div className="row">
        <Field
          name="title"
          component={FormField}
          type="text"
          value={book.title}
          label="Title"
          onChange={onChange}
          placeholder="Arch of Triumph"
        />
      </div>
      <div className="row">
        <Field
          name="author"
          component={FormField}
          type="text"
          value={book.author}
          onChange={onChange}
          label="Author"
          placeholder="Erich Maria Remarque"
        />
      </div>
      <div className="row">
        <input
          type="submit"
          value='Save'
          className="btn"
          onClick={onSave}
        />
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'add-book',
  // validate,
})(BookForm);
