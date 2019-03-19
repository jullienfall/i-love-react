import React from 'react';
import { string, object } from 'prop-types';

const FormField = props => {
  const { input, label, type, placeholder, meta: { touched, error } } = props;
  return (
    <div className="form__element">
      <label className="form__label">{label}</label>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
      />
      {touched && <div className="form__error">{error}</div>}
    </div>
  );
};

FormField.propTypes = {
  label: string,
  extraClasses: string,
  meta: object,
};


export default FormField;
