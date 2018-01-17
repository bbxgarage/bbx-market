import firebase from './firebase-client'

export function auth (email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function register (email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function logout (email, password) {
  return firebase.auth().signOut()
}
