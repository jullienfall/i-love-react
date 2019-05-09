import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from './../formField';
import { validate } from './../validate';

const SignInForm = props => {
  const { submitData, handleSubmit, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="row">
        <Field
          name="username"
          type="text"
          component={FormField}
          label="Username"
          placeholder="John"
        />
      </div>
      <div className="row">
        <Field
          name="password"
          type="text"
          component={FormField}
          label="Password"
          placeholder="White"
        />
      </div>
      <div className="row">
        <button type="submit" className="btn btn--blue" disabled={submitting || invalid}>
          Submit
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'sign-in-form',
  validate,
})(SignInForm);
