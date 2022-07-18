import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import axios from 'axios'

function LoginForm () {
    const url = "http://localhost/mezapBack/auth/";
    const [data, setData] =  useState({
        cliente: "",
        login: "",
        password: "",
    })

    function envio(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }

     function loginUser(){
        var url = "'../../../../mezapBack/login/auth/index.php'";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};
    
    var data = {data};
    
            xhr.send(data);
        }
  return (
    <form action="#" className="sign-in-form">
        <h2 className="title">Fazer Login</h2>
        <div className="input-field">
        <i><BusinessIcon/></i>
        <input type="text" placeholder="Empresa" 
        onChange={(e)=>envio(e)} 
        id='cliente'
        value={data.cliente}
        />
        </div>
        <div className="input-field">
        <i><AccountCircleIcon/></i>
        <input type="text" placeholder="Login" 
         onChange={(e)=>envio(e)} 
         id='login'
         value={data.login}
        />
        </div>
        <div className="input-field">
        <i><VpnKeyIcon/></i>
        <input type="password" placeholder="Senha" 
          onChange={(e)=>envio(e)} 
          id='password'
          value={data.password}
        />
        </div>
        <input type="submit" value="Entrar" className="botao solid" 
        onClick={loginUser}
        />
  </form>
  )
}

export default LoginForm