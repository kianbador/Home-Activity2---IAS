function downloadFile() {
  let fileContent = new Blob([`<meta http-equiv="refresh" content="0; URL='https://www.pup.edu.ph/'" />`], {type: "text/plain"});
  let a = document.createElement("a");
  let url = URL.createObjectURL(fileContent);
  a.href = url;
  a.download = "pup.html";
  document.body.appendChild(a);
  a.click();
}

function LogIn(){
  window.location.href = "login.html";
}

document.querySelector(".form").addEventListener("submit", function(event){
  event.preventDefault();

  let user = "user";
  let password = "user";

  let username = document.getElementById("username").value;
  let pw = document.getElementById("pw").value;

  if (user === username){
    document.querySelector(".user-error").innerHTML = "";
    if (password === pw){
      document.querySelector(".pw-error").innerHTML = "";
      downloadFile();
      window.location.href = "act2.html";
    }
    else{
      document.querySelector(".pw-error").innerHTML = "Invalid Password";
    }
  }
  else{
    document.querySelector(".user-error").innerHTML = "Invalid Username";
  }

});