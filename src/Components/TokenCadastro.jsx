import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { sendToken } from '../Config/Api'

const TokenCadastro = () => {

    const [descricao, setDescricao] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    const [idToken, setIdToken] = useState('');
    const [resposta, setResposta] = useState([]);
    const idEmpresa = idToken?.idEmpresa;

    function uuid() {

        function randomDigit() {
    
            if (crypto && crypto.getRandomValues) {
    
                var rands = new Uint8Array(1);
    
                crypto.getRandomValues(rands);
    
                return (rands[0] % 16).toString(16);
            } else {
                return ((Math.random() * 16) | 0).toString(16);
            }
        }
        var crypto = window.crypto || window.msCrypto;
    
        var ret = 'MeZaprxxxxxxxxx4xxx8xxxxxxx'.replace(/x/g, randomDigit);
        setToken(ret);
    }

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setIdToken(JSON.parse(recoveredUser));
        }
        setLoading(false);
        uuid();
        
    },[]);

    console.log("dados token cadastro: ",token, descricao, idToken, idEmpresa);

    
    const enviarToken = async () => {
        if(descricao!= ''){
            const { data } = await axios.get(sendToken(idEmpresa, token, descricao, ));
            setResposta(data);
            setDescricao("");
            document.location.reload(true);
        }else{
            return <h1></h1>
        }

    }

    console.log("resposta token", resposta);

  return (
    <div>
        <h1 className='token-tit'>Cadastrar Token</h1>
        <label class="form-label">Token</label>
        <input type='text' 
        name='token' 
        id='token'
        className="form-control"
        placeholder={token}
        value={token}
        disabled
        />
        <br/>
        <label class="form-label">Descrição do Plano</label>
        <input type='text' 
        name='descricao' 
        id='descricao'
        className="form-control"
        placeholder='Digite a descricao do Token'
        value={descricao}
        onChange={(e)=> setDescricao(e.target.value)}
        />
        <br/>
        <div className='enviarbotao'>
            <a class="btn btn-primary" onClickCapture={enviarToken}>Cadastrar Token</a>
        </div>
    </div>
  )
}

export default TokenCadastro