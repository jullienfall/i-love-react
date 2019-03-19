import React, {Component} from 'react';

import ContactForm from './../atoms/forms/contactForm';

class Contact extends Component {

  handleSubmit = () => {
    console.log('sent');
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
