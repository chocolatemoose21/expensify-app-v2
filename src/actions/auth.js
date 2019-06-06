import { firebase, googleAuthProvider } from '../firebase/firebase';

//What do you want the action to do?
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}
