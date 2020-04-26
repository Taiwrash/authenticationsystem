//Initializing firestore
firebase.initializeApp({
  apiKey: "AIzaSyD3jrCBjEOZVZwDmv083siU811iyDL3bF0",
  authDomain: "auth-system-97e98.firebaseapp.com",
  projectId: "auth-system-97e98",
});

var db = firebase.firestore();

//create user manually.

//   db.collection("users").add({
//     email: 'taiwrash.tech@gmail.com',
//     password: '1234rash'
// })
// .then((docRef)=> {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error)=> {
//     console.error("Error adding document: ", error);
// });

// // Add a second document with a generated ID.
// db.collection("users").add({
//     email: 'qmudasiru@gmail.com',
//     password: 'test1234'
// })
// .then((docRef)=> {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error)=> {
//     console.error("Error adding document: ", error);
// });

//Getting Users from database...

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

// Allow read/write access on all documents to any user signed in to the application
// service cloud.firestore {
//     match /databases/{database}/documents {
//       match /{document=**} {
//         allow read, write: if request.auth.uid != null;
//       }
//     }
//   }
