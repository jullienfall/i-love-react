import React, {Component} from 'react';
import classNames from 'classnames';
import { string, object } from 'prop-types';

class FormField extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.input.onChange(e);
  }

  render() {
  const { extraClasses, label, input, value } = this.props;
  return (
    <div className={extraClasses}>
      <div>
        <label className="form__label">{label}</label>
        <input {...input} value={value} className="col-xs-12" onChange={this.onChange} />
      </div>
    </div>
  );
}
};

FormField.propTypes = {
  label: string,
  extraClasses: string,
  meta: object,
};


export default FormField;
