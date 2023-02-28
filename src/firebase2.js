import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyAZESJmHEmXiZXbbJUzPDgwrvWhsxoQohI",
  authDomain: "treinazap2023.firebaseapp.com",
  projectId: "treinazap2023",
  storageBucket: "treinazap2023.appspot.com",
  messagingSenderId: "725874243810",
  appId: "1:725874243810:web:ec7fbf6413e5f3b51406bb"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
