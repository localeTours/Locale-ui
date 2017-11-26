import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginButton from '../login';
import SignOutButton from './Signout';

class Login extends Component {
  render() {
    let button = this.props.account.isSignedIn ? <SignOutButton /> : <LoginButton />

    return (
      <div id="login">
        <p>This is where the Login Page will go</p>
        { button }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    account: state.account
  })
}

const connectedLogin = connect(mapStateToProps)(Login);

export default connectedLogin
