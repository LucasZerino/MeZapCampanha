import React from 'react'

const teste2 = () => {

    function enviar (){
        var url = "http://51.222.48.12/mezapBack/auth/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = {
    cliente : document.getElementById("cliente").value,
    login : document.getElementById("login").value,
    password : document.getElementById("password").value,
        };

        xhr.send(data);
    }
  return (
    <div>teste2</div>
  )
}

export default teste2