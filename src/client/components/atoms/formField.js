import React, {Component} from 'react';
import classNames from 'classnames';
import { string, object } from 'prop-types';

const FormField = props => {
  const { input, label, type, placeholder, meta: { touched, error } } = props;
  console.log(error)
  return (
    <div>
      <label className="form__label">{label}</label>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
      />
      {touched && <span>{error}</span>}
    </div>
  );
};

FormField.propTypes = {
  label: string,
  extraClasses: string,
  meta: object,
};


export default FormField;
