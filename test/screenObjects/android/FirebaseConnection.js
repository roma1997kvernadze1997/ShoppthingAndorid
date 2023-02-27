// Import the Firebase and WebdriverIO modules
// const firebase = require('firebase');
// const { remote } = require('webdriverio');
// const firebase = require('firebase');
// const webdriverio = require('webdriverio');

class FirebaseConnection {

    async connectFirebase() {

        const firebaseConfig = {
            apiKey: "AIzaSyD7HgJDFdNS2KdK6b7s0jc5TYJ2JZUNayU",
            authDomain: "lstcommerce-staging.firebaseapp.com",
            databaseURL: "https://lstcommerce-staging.firebaseio.com",
            projectId: "lstcommerce-staging",
            storageBucket: "lstcommerce-staging.appspot.com",
            messagingSenderId: "112236660743",
            appId: "1:112236660743:web:6e858c942272c9e8b342a2"
        };

        firebase.initializeApp(firebaseConfig);

        // Connect to the Firebase database
        const database = firebase.database();

    }
    
}

module.exports = new FirebaseConnection();
