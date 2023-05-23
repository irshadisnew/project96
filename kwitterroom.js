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
  
//add fb links//

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome : " + user_name + "!";

//  //

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    window.location ="kwitter_page.html"; 
    //   //
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
//  //
    window.location = "index.html";
}
