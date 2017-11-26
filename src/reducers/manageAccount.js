export const manageAccount = (state = { isSignedIn: false, user: { uid: null, email: null } }, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return Object.assign({}, state, { isSignedIn: true, user: action.payload });
    case 'SIGN_OUT':
      return Object.assign({}, state, {isSignedIn: false, user: { uid: null, email: null }})
    default:
      return state;
  }
}
