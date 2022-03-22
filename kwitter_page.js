const firebaseConfig = {
      apiKey: "AIzaSyCCRdbAj9_-TlWM4RkKVYU8VNk1bLuDb_I",
      authDomain: "kkkkkkkk-69002.firebaseapp.com",
      databaseURL: "https://kkkkkkkk-69002-default-rtdb.firebaseio.com",
      projectId: "kkkkkkkk-69002",
      storageBucket: "kkkkkkkk-69002.appspot.com",
      messagingSenderId: "595769037037",
      appId: "1:595769037037:web:9e135e9863511ed099bce4" 
};
      firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:username,
message:msg,
like:0
})
document.getElementById("msg").value = "";
}




function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

