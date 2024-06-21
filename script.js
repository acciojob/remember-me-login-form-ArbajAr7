function clicked(event){
    event.preventDefault();
    let checkboxvalue = document.getElementById("checkbox").checked;
    if(checkboxvalue == true) {
        let name = document.getElementById("username").value;
        localStorage.setItem("name", name);
        let password = document.getElementById("password").value;
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("name");
        localStorage.removeItem("password");
    }
    Alert();
}

function Alert() {
    let name = localStorage.getItem("name");
    if(name != null) {
        alert("Logged in as "+name);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    let name = localStorage.getItem("name");
    let password = localStorage.getItem("password");
    if(name != null && password != null) {
        document.getElementById("existing").style.display = "block";
        document.getElementById("username").value = name;
        document.getElementById("password").value = password;
    } else {
        document.getElementById("existing").style.display = "none";
    }
});