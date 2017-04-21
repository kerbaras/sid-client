import firebase from 'firebase'

try {
    var config = {
    apiKey: "AIzaSyCG-hTNEfgm7d-EL1tlvhRvVnV2IHsqTUc",
    authDomain: "sid-lidi.firebaseapp.com",
    databaseURL: "https://sid-lidi.firebaseio.com",
    projectId: "sid-lidi",
    storageBucket: "sid-lidi.appspot.com",
    messagingSenderId: "274887961433"
  };
  firebase.initializeApp(config);
} catch (err) {
    
}

export default firebase.database().ref()