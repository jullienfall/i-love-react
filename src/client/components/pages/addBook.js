import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './../atoms/formField';

const AddBook = () => (
  <div className="container">
    <h2>Add a Book</h2>
    <form action="">
      <div className="row">
        <Field
          name="title"
          component={FormField}
          type="text"
          label="Title"
          placeholder="Arch of Triumph"
          extraClasses="col-xs-12 col-sm-12"
        />
      </div>
      <div className="row">
        <Field
          name="author"
          component={FormField}
          type="text"
          label="Author"
          placeholder="Erich Maria Remarque"
          extraClasses="col-xs-12 col-sm-12"
        />
      </div>
    </form>
  </div>
);

export default reduxForm({
  form: 'add-book',
  // validate,
})(AddBook);
