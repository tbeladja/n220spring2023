function checkCredentials() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username == "Username" && password == "Password") {
      document.getElementById("result").innerHTML = "Success";
    } else {
      document.getElementById("result").innerHTML = "Wrong information";
    }
  }
  