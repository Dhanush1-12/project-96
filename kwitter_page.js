//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDBoF0ES0S4BbzajQA-FGBw3VdlwfLp3Uk",
      authDomain: "kwitter-cff6b.firebaseapp.com",
      databaseURL: "https://kwitter-cff6b-default-rtdb.firebaseio.com",
      projectId: "kwitter-cff6b",
      storageBucket: "kwitter-cff6b.appspot.com",
      messagingSenderId: "288039024297",
      appId: "1:288039024297:web:7e3d23e657f51ca90cdbb8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
function send(){
      message=document.getElementById ("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:message,
      likes:0
      });
      document.getElementById ("msg").value="";
}    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
