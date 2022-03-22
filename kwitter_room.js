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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
} 
function logout()
{
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}

