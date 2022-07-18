import React from 'react'
import './login.css'
import LogImg from '../../Assets/Images/log.png'
import RegImg from '../../Assets/Images/register.png'
import Logo from '../../Assets/Images/mezap.png'
import LoginForm from '../../Components/LoginForm'
import RegisterForm from '../../Components/RegisterForm'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        tab: "container-page"
    }
}

  
render(){

  return (
    <div className={this.state.tab === "container-page" ? "container-page" : "container-page sign-up-mode"}>
    <div className="forms-container">
      <div className="signin-signup">
          <LoginForm  />
          <RegisterForm />
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Novo Aqui ?</h3>
          <p>
            Registre-se agora e conheça a nossa inovadora ferramente, seja bem vindo ao MeZap chamadas!
          </p>
          <button id="sign-up-botao" className={this.state.tab === "botao transparent" ? "botao transparent" : "botao transparent"} onClick={() => this.setState({tab: "containe"})}>
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
          <button id="sign-up-botao" className={this.state.tab === "botao transparent" ? "botao transparent" : "botao transparent"} onClick={() => this.setState({tab: "container-page"})}>
            Login
          </button>
        </div>
        <img src={RegImg} className="image" alt="" />
      </div>
    </div>
  </div>
  )
}
}

export default Login