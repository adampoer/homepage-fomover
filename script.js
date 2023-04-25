var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<p>Thank You for hoping in!! </p><h1>' +username.value+ '</h1>';
}

const getScore= document.getElementById("getscore");

async function getnsfwscore() {
  try {
    let response =await fetch("http://localhost:5000/nsfw");
    console.log(await response.json());
  } catch (error) {
    throw error;
  }
}