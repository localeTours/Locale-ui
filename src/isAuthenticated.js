import React, { Component } from 'react';
import firebase from './fire.js';
// import firebase from 'firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Main from './reducers/Main';
import { bindActionCreators } from 'redux';
import { signIn } from './actions';
// import Login from './login';
// import { userLoggedIn } from "./userLoggedIn";


class Authenticated extends Component{


  constructor(props){
    super(props);
    this.state = {userReady:false}
  }
  componentDidMount(){


    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({userReady:true , user:user})
      } else {
        this.setState({userReady:false})
      }
    });
  }

  componentDidUpdate(){
    this.props.signIn(this.state);
  }


  render(){
        return (
            <Main />
        )
  }
}

const mapStateToProps = (state) => {
  return({
    signedIn: state.account.signedIn
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn: signIn
    }, dispatch)
}

const connectedAuthenticated = withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticated));

export default connectedAuthenticated
