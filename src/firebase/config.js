import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcAWm7m01FZwVRU-YlSgQrYrY8Z_Hu9PM",
  authDomain: "portfolio-bd703.firebaseapp.com",
  projectId: "portfolio-bd703",
  storageBucket: "portfolio-bd703.appspot.com",
  messagingSenderId: "403734269197",
  appId: "1:403734269197:web:73c2d0d228d61bcca43444"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export{ projectFirestore }