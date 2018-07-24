window.onload = function(){
  main();
}

main = function(){

};

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var userdata = {
            "id": profile.getId(),
            "fullname": profile.getName(),
            "givenname": profile.getGivenName(),
            "imageurl": profile.getImageUrl(),
            "email": profile.getEmail(),
  };
  console.log("ID: " + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  document.getElementById('user').innerText = "Welcome to InCANVAScent " + profile.getGivenName();
  sendData(userdata);
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

function sendData(data){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/data', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  var actualObject = {'data': data}
  xhr.send(JSON.stringify(actualObject));
}
