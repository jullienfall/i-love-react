import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';

import FormField from './formField';
import {validate} from './validate';

const BookForm = ({ book, handleSubmit, submitting, invalid }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <Field
          name="title"
          component={FormField}
          type="text"
          value={book.title}
          label="Title"
          placeholder="Arch of Triumph"
          value= ''
        />
      </div>
      <div className="row">
        <Field
          name="author"
          component={FormField}
          type="text"
          value={book.author}
          label="Author"
          placeholder="Erich Maria Remarque"
        />
      </div>
      <div className="row">
        <input
          type="submit"
          value='Save'
          className="btn"
          disabled={invalid || submitting}
        />
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'add-book',
  validate,
})(BookForm);
