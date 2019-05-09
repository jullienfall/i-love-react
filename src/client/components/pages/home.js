import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { logOut } from '../actions/signInActions';

class Home extends Component {
  state = {
    signIn: false
  }

  componentDidMount() {
    this.setState({ signIn : JSON.parse(localStorage.getItem('signIn')) });
  }

  logOutHandler = () => {
    this.props.logOut();
    localStorage.setItem('signIn', false);
    this.setState({ signIn : false });
  }

  render() {
    const { signIn } = this.state;
    return (
      <div className="home" style={{backgroundImage:`url(${require('../../../assets/images/home.jpg')})`}}>
        <div className="container">
          <div className="home__content">
            <h1>Welcome to Home page</h1>
            {signIn ?
              <button className="btn btn--green" onClick={this.logOutHandler}>Log out</button>
                :
              <Link className="btn btn--green" to="/sign-in">Sign in</Link>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});

export default connect(null, mapDispatchToProps)(Home);
