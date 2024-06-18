//your JS code here. If required.
function clicked(){
    let checkboxvalue = document.getElementById("checkbox").checked;
    if(checkboxvalue == true)
        {
            let name = document.getElementById("username").value;
            localStorage.setItem("name", name);
            let password = document.getElementById("password").value;
            localStorage.setItem("password", password);
			Alert(name);

        }else {
        localStorage.removeItem("name");
        localStorage.removeItem("password");
    }
}

function Alert(name) {
    alert("Logged in as "+name);
}

document.addEventListener("DOMContentLoaded", (event) => {
    let name = localStorage.getItem("name");
    let password = localStorage.getItem("password");
    if(name != null && password != null)
        {
            document.getElementById("form").style.display = "none";
            document.getElementById("existing").style.display = "block";
            document.getElementById("existing").innerHTML =`Login as existing user`;
			document.getElementById("username").value = name;
	        document.getElementById("password").value = password;

        }else {
            document.getElementById("form").style.display = "block";
            document.getElementById("existing").style.display = "none";

        }
  });