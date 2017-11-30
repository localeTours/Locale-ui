
import firebase from './fire';


export const userLoggedIn = (dispatch) => {
    var mapProps = dispatch;

    firebase.auth().onAuthStateChanged((user)=>{
        if (user) {
            console.log('This call is being made', user);
            return user
        } else {
            return null
        }
    }).bind(this);
}

