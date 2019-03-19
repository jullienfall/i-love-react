import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from './../formField';
import { validate } from './../validate';

const ContactForm = props => {
  const { handleSubmit, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <Field
          name="first_name"
          type="text"
          component={FormField}
          label="First Name"
          placeholder="John"
        />
      </div>
      <div className="row">
        <Field
          name="last_name"
          type="text"
          component={FormField}
          label="Last Name"
          placeholder="White"
        />
      </div>
      <div className="row">
        <button type="submit" disabled={submitting || invalid}>
          Submit
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'contact-form',
  validate,
})(ContactForm);
