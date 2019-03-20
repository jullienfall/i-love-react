import React, {Component} from 'react';

import ContactForm from './../atoms/forms/contactForm';

class Contact extends Component {

  handleSubmit = () => {
    window.alert('Your form has been sent');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <h1>Contact</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Contact;
