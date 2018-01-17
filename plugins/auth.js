import firebase from '../api/firebase-client'

export default function ({store, router}) {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(1, user);
    store.commit('SET_USER', user)
  })
}
