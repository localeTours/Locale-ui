import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { signOut } from '../actions';

window.windowFire = firebase;

class Signout extends Component{

  signout(){
    this.props.signOut(firebase);
  }

  render(){
    return(
      <div>
        <button onClick={this.signout.bind(this)}>Signout</button>
        <Link to="/map">Go to map</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    account: state.account
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signOut: signOut
  }, dispatch)
}

const connectedSignout = connect(mapStateToProps, mapDispatchToProps)(Signout)

export default connectedSignout;
