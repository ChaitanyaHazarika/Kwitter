function adduser() {
    var name= document.getElementById("name").value;
    localStorage.setItem("username", name);
    window.location="kwitter_room.html"
}