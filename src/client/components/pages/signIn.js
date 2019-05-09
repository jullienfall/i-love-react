import React, { Component } from 'react';
import {connect} from 'react-redux';

import SignInForm from './../atoms/forms/signInForm';
import { signInSuccess } from '../actions/signInActions';

class SignIn extends Component {
  handleSubmit = () => {
    this.props.history.push('/');
    this.props.signInSucess();
    localStorage.setItem('signIn', true);
  }

  render() {
    return (
      <div className="container">
        <h1>Sign In</h1>
        <SignInForm submitData={this.handleSubmit} />
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  signInSucess: () => dispatch(signInSuccess()),
});

export default connect(null, mapDispatchToProps)(SignIn);
