// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBWtVOp7UNxqowKQR1tG9EJUXSnATNE0ko",
      authDomain: "kwitter-c72b7.firebaseapp.com",
      projectId: "kwitter-c72b7",
      storageBucket: "kwitter-c72b7.appspot.com",
      messagingSenderId: "620712267910",
      appId: "1:620712267910:web:cea3538de0f147d1190107"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
