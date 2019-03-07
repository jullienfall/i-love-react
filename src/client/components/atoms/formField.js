import React from 'react';
import classNames from 'classnames';
import { string, object } from 'prop-types';

const FormField = props => {
  const { extraClasses, label, meta } = props;

  const cn = classNames('form__element', {
    'form__element--valid': meta.valid,
    'form__element--invalid': meta.invalid,
  });

  return (
    <div className={extraClasses}>
      <div className={cn}>
        <label className="form__label">{label}</label>
        <input {...props} className="col-xs-12" />
      </div>
    </div>
  );
};

FormField.propTypes = {
  label: string,
  extraClasses: string,
  meta: object,
};


export default FormField;
