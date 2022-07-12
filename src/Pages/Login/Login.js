import React from 'react'
import './login.css'
import LogImg from '../../Assets/Images/log.png'
import RegImg from '../../Assets/Images/register.png'

const Login = () => {

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    
    const modoRegistro = () => {
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
          });
    };
    
    const modoLogin = () => {
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
          });
    }


  return (
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Fzer Login</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Nome de usuario" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Empresa" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Senha" />
          </div>
          <input type="submit" value="Entrar" className="btn solid" />
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Registrar-se</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Nome de usuario" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Empresa" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Senha" />
          </div>
          <input type="submit" className="btn" value="Registrar"/>
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Novo Aqui ?</h3>
          <p>
            Registre-se agora e conheça a nossa inovadora ferramente, seja bem vindo ao MeZap chamadas!
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={modoRegistro}>
            Registrar
          </button>
        </div>
        <img src={LogImg} className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Já é cadastrado?</h3>
          <p>
            Faça login na plataforma e não perca os benefícios do Mezap chamadas!
          </p>
          <button className="btn transparent" id="sign-in-btn" onClick={modoLogin}>
            Login
          </button>
        </div>
        <img src={RegImg} className="image" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Login