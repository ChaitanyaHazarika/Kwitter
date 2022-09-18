q//YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDDdBzkGpJ_qNJ1WHU6uweY2tfL_Z7mdv4",
      authDomain: "chat-website-2-b58cf.firebaseapp.com",
      databaseURL: "https://chat-website-2-b58cf-default-rtdb.firebaseio.com",
      projectId: "chat-website-2-b58cf",
      storageBucket: "chat-website-2-b58cf.appspot.com",
      messagingSenderId: "711647097384",
      appId: "1:711647097384:web:aaaf1ae875c44063bcfb1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username")
var room_name = localStorage.getItem("roomname")
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        var name= message_data["name"];
                        var msg = message_data["message"]; 
                        var likes= message_data["like"];
                        console.log(firebase_message_id);
                        console.log(message_data);
                        
                        name_tag= "<h4>"+name+"<img src= 'tick.png' class= 'user_tick'></h4>"
                        message_tag= "<h4 class='message_h4'>"+msg+"</h4>"
                        like_button="<button id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)' class='btn btn-warning'>";
                        span_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+likes+"</span></button><hr>"
                        row=name_tag+message_tag+like_button+span_tag;
                        document.getElementById("output").innerHTML+=row;
                        
                        //End code  
                        //cool
                  }
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
function sendmsg() {
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function updateLike(msg_id) {
      buttonid= msg_id;
      likes= document.getElementById(buttonid).value;
      updatedlikes=Number(likes)+1;
      firebase.database().ref("/"+room_name).child(buttonid).update({
            like:updatedlikes
      });
}