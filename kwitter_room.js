
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA2XeorLOi6FJpq7xmwji4guUQcUeJ90Oc",
      authDomain: "kwitter-d2ea0.firebaseapp.com",
      databaseURL: "https://kwitter-d2ea0-default-rtdb.firebaseio.com",
      projectId: "kwitter-d2ea0",
      storageBucket: "kwitter-d2ea0.appspot.com",
      messagingSenderId: "738491635151",
      appId: "1:738491635151:web:3ee888f79ab3ecfa1baeba"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name;

      function addroom(){
           room_name = document.getElementById("add_room").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names );
     row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function  redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}