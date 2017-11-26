export const setLatLng = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((resp) => {
      let latLng = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
      dispatch({
        type: 'ADD_LATLNG',
        payload: latLng
      })
    })
  }
}

export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    payload: user
  }
}

export const signOut = (firebase) => {
  return (dispatch) => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      // alert('yoo')
      dispatch({
        type: 'SIGN_OUT'
      })
    }).catch(function(error) {
      // An error happened.
        alert('This sucks')
    });
  }
}
