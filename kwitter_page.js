//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA23omhxWFXchYhr10YRiVkeRhcEjdjuK4",
      authDomain: "kwitter-b6f3d.firebaseapp.com",
      databaseURL: "https://kwitter-b6f3d-default-rtdb.firebaseio.com",
      projectId: "kwitter-b6f3d",
      storageBucket: "kwitter-b6f3d.appspot.com",
      messagingSenderId: "371104674339",
      appId: "1:371104674339:web:f426b1927b68d93bdab796"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

   function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name :user_name , 
            message : msg , 
            like : 0 
            
      });
      document.getElementById("msg").value = "";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message =  message_data['message'];
like =  message_data['like'];
name_with_tag ="<h4>"+ name + "<img src = 'tick.png' class ='user_tick'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-danger' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
spanwithtag ="<span class= 'glyphicon glyphicon-thumbs-up'> like:" + like+"</span></button><hr>";
row = name_with_tag+ message_with_tag+like_button+spanwithtag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
button_id = message_id ;
likes = document.getElementById(button_id).value;
updatedlikes = Number (likes) + 1 ;
console.log(updatedlikes);
firebase.database().ref(room_name).child(message_id).update({
      like : updatedlikes 
});
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
    //  //
        window.location = "index.html";
    }
    