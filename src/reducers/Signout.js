import React, { Component } from 'react';
import firebase from '../fire';

//Redux Dependencies
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

//Actions
import { signOut } from '../actions/index';


window.windowFire = firebase;

class Signout extends Component{

  signout(){


    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert('yoo')
        debugger
        this.props.signOut();
    }).catch(function(error) {
      // An error happened.
        alert('This sucks')
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.signout.bind(this)}>Signout</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return({
        signOut: state.account.signOut
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signOut: signOut
    }, dispatch)
}


const connectedSignout = withRouter(connect(mapStateToProps, mapDispatchToProps)(Signout));

export default connectedSignout;


