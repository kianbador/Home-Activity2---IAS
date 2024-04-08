document.getElementById("unauthorized").addEventListener("click", function() {
  let fileContent = new Blob([`<meta http-equiv="refresh" content="0; URL='https://www.pup.edu.ph/'" />`], {type: "text/plain"});
  let a = document.createElement("a");
  let url = URL.createObjectURL(fileContent);
  a.href = url;
  a.download = "pup.html";
  document.body.appendChild(a);
  a.click();
});

