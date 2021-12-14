//YOUR FIREBASE LINKS
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
     room_name = localStorage.getItem("room_name");
     user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      Name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_tag = "<h4>" + Name + "<img src='tick.png' class='user_tick'></h4>";
      message_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
      span_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:" + like + "</span></button><hr>";
      row = name_tag + message_tag + like_button + span_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function update_like(message_id){
    console.log("clicked on like button-" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes)+1;
    console.log(update_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like:update_likes
    });
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like : 0,
            message : msg,
            name : user_name
      });
      document.getElementById("msg").value = "";
   
   }

   function logout(){
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location.replace("index.html");
   }