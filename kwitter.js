function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.srtItem("user_name", user_name);

     window.location = "kiwitter_room.html";
}