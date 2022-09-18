
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


var username = localStorage.getItem("username");
console.log(username);
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class= 'room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div>" + "<hr>"
      document.getElementById("output").innerHTML += row;

      //End code
    });
  });
}
getData();
function addroom() {
  roomname = document.getElementById("room_name").value
  firebase.database().ref('/').child(roomname).update({
    purpose: "adding user"
  });
  window.location = "kwitter_page.html"
  localStorage.setItem("roomname", roomname)
}
function redirecttoroomname(name) {
  localStorage.setItem("roomname", name)
  window.location = "kwitter_page.html"
}
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}


