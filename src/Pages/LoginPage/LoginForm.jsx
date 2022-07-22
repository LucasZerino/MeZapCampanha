import React, { useState, useContext} from 'react'
import { AuthContext } from '../../Context/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const LoginPage = () => {

  const { authenticated, loginUser } = useContext(AuthContext);

  const [cliente, setCliente] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const HandleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit", {cliente, login, password});
    loginUser(cliente, login, password);
  };

  return (
    <form onSubmit={HandleSubmit} className="form">
      <h2 className="title">Fazer Login</h2>
      <div className="input-field">
      <i><BusinessIcon/></i>
      <input type='cliente' 
        name='cliente' 
        id='cliente'
        className='input' 
        placeholder='cliente'
        value={cliente}
        onChange={(e)=> setCliente(e.target.value)}
      />
      </div>
      <div className="input-field">
      <i><AccountCircleIcon/></i>
      <input 
        type='login' 
        name='login' 
        id='login' 
        className='input'
        placeholder='login'
        value={login}
        onChange={(e)=> setLogin(e.target.value)} 
      />
      </div>
      <div className="input-field">
      <i><VpnKeyIcon/></i>
      <input 
        type='password' 
        name='password' 
        id='password'
        className='input' 
        placeholder='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      </div>
        <button className="botao solid" type='submit'>ENTRAR</button>
  </form>
  )
}

export default LoginPage