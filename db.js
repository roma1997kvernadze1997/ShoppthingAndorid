// const {
//     createPool
// } = require('mysql');

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test",
//     connectionLimit: 10
// })

// pool.query(`SELECT * FROM registration`, (err, result, fields) => {
//     if(err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })


// //---------------------------------------------------------------------------------------


// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// const citiesRef = db.collection('cities');
// const snapshot = await citiesRef.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDpmxmBhvlQOiRb5EPKX1XZ72o43OHzvN4",
//   authDomain: "https://lstcommerce-staging.firebaseio.com",
//   projectId: "lstcommerce-staging",
//   storageBucket: "lstcommerce-staging.appspot.com",
//   messagingSenderId: "112236660743",
//   appId: "1:112236660743:android:f23d295571a3bc4ab342a2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Firebase Authentication object
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// //firebase db Object
// const db = getFirestore();

// export { auth,provider,db }