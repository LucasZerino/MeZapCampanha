import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const RegisterForm = () => {
  return (
    <form action="#" className="sign-up-form">
          <h2 className="title">Registrar-se</h2>
          <div className="input-field">
            <i><AccountCircleIcon/></i>
            <input type="text" placeholder="Nome de usuario" />
          </div>
          <div className="input-field">
            <i><BusinessIcon/></i>
            <input type="text" placeholder="Empresa" />
          </div>
          <div className="input-field">
            <i><VpnKeyIcon/></i>
            <input type="password" placeholder="Senha" />
          </div>
          <input type="submit" className="botao" value="Registrar"/>
        </form>
  )
}

export default RegisterForm