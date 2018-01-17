import * as firebase from 'firebase/app'

if (firebase.apps.length === 0) {

  /*
  ** initialize firebase app
  */

  import('firebase/auth')
  import('firebase/database')
  import('firebase/storage')

  const config = {
    apiKey: "AIzaSyBM8noJwooZJYw1qjbo8ciWHvzw1fCU79o",
    authDomain: "nodejs-firebase-f07cc.firebaseapp.com",
    databaseURL: "https://nodejs-firebase-f07cc.firebaseio.com",
    projectId: "nodejs-firebase-f07cc",
    storageBucket: "nodejs-firebase-f07cc.appspot.com",
    messagingSenderId: "955195835085"
  }

  firebase.initializeApp(config)
}

export default firebase
