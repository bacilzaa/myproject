$(document).ready(function(){
var SesUser=localStorage.getItem('username');
var role = localStorage.getItem('role');
if(!SesUser){
    document.getElementById("button1").innerHTML = "login";
    document.getElementById("link1").setAttribute('title', 'Go to Login');
    document.getElementById("link1").setAttribute('href', 'login.html');
    document.getElementById("button2").innerHTML = "register";
    document.getElementById("link2").setAttribute('title', 'Go to Register');
    document.getElementById("link2").setAttribute('href', 'register.html');
  }else{
    document.getElementById("button1").innerHTML = SesUser;
    document.getElementById("link1").setAttribute('title', `Your Accout is ${SesUser}`);
    document.getElementById("button2").innerHTML = "logout";
    document.getElementById("link2").setAttribute('href', 'logout.php');
    document.getElementById("link2").setAttribute('title', 'LOGOUT');
  }
if(role == "admin"){
  document.getElementById("link1").setAttribute('href', `admin.php`);
}

});