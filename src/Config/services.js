import axios from 'axios';
import { LoginAPI, sendToken, consultarToken } from './Api';

export const createSession = async(cliente, login, password)=>{
    return await axios.get(LoginAPI(cliente, login, password));
}

export const createToken = async(idEmpresa, token, descricao) => {
    return await axios.get(sendToken(idEmpresa, token, descricao));
}

