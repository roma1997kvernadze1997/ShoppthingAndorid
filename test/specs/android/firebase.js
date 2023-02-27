// // // import firebase from firebase;
// // // import "firebase/firestore";
// // import { initializeApp } from "firebase/app";
// // // import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// // // import { getFirestore } from 'firebase/firestore'

// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //     apiKey: "AIzaSyD7HgJDFdNS2KdK6b7s0jc5TYJ2JZUNayU",
// //     authDomain: "lstcommerce-staging.firebaseapp.com",
// //     databaseURL: "https://lstcommerce-staging.firebaseio.com",
// //     projectId: "lstcommerce-staging",
// //     storageBucket: "lstcommerce-staging.appspot.com",
// //     messagingSenderId: "112236660743",
// //     appId: "1:112236660743:web:6e858c942272c9e8b342a2",
// //     measurementId: "G-Q7JK90DHBZ"
// //   };
// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // // Firebase Authentication object
// // const auth = getAuth(app);
// // const provider = new GoogleAuthProvider();

// // //firebase db Object
// // const db = getFirestore();

// // console.log(db);


// // //export { auth,provider,db }



// // // firebase.initializeApp(firebaseConfig);
// // // const db = firebase.firestore();
// // // export { db, firebase };
// // // console.log(db);


// // describe('Firebase client-side testing', () => {
// //   it('should correctly display data from Firebase', () => {

// //     const firebaseConfig = {
// //     apiKey: "AIzaSyD7HgJDFdNS2KdK6b7s0jc5TYJ2JZUNayU",
// //     authDomain: "lstcommerce-staging.firebaseapp.com",
// //     databaseURL: "https://lstcommerce-staging.firebaseio.com",
// //     projectId: "lstcommerce-staging",
// //     storageBucket: "lstcommerce-staging.appspot.com",
// //     messagingSenderId: "112236660743",
// //     appId: "1:112236660743:web:6e858c942272c9e8b342a2",
// //     measurementId: "G-Q7JK90DHBZ"
// //   };
 
// //   const app = initializeApp(firebaseConfig);
// //   const admin = require('firebase-admin');

// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://lstcommerce-staging.firebaseio.com"
// // });

// // const db = admin.database();
// // const ref = db.ref("data");
// // ref.on("value", function(snapshot) {
// //   console.log(snapshot.val());
// // }, 
// // function (errorObject) {
// //   console.log("The read failed: " + errorObject.code);
// // });



// //   });
// // });




// const profilePage = require("../../screenObjects/android/ProfilePage.screen");
// //const firebase = require("../../screenObjects/android/FirebaseConnection");
// //const webdriverio = require('webdriverio');

// describe("Open Profile Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click()

//   });

//   it("Enter Username/Password", async() => {
    
//     const webdriverio = require('webdriverio');
//     const firebase = require('firebase');

//     var config = {
//       apiKey: "AIzaSyD7HgJDFdNS2KdK6b7s0jc5TYJ2JZUNayU",
//       authDomain: "lstcommerce-staging.firebaseapp.com",
//       databaseURL: "https://lstcommerce-staging.firebaseio.com"
//     };
//     firebase.initializeApp(config);
//     var rootRef = firebase.database().ref();

//     rootRef.ref('setting/main').once('value')
//     .then(function(snapshot) {
//     const data = snapshot.val();
//     console.log(data);
//     client.end();
//   });
    


// // const db = firebase.database();

// // // Define a WebdriverIO client
// // const client = webdriverio.remote({
// //   capabilities: {
// //     browserName: 'chrome'
// //   }
// // });

// // // Get the data from a specific location in the database
// // rootRef.ref('setting/main').once('value')
// //   .then(function(snapshot) {
// //     const data = snapshot.val();
// //     console.log(data);
// //     client.end();
// //   });


//     // await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     // await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     // await homePage.home.click();
    
//   });

// });

