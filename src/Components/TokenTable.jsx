import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { consultarToken } from '../Config/Api'
import { AuthContext } from '../Context/auth';
import Tabela from './Tabela';


const TokenTable = () => {
    const [posts, setPosts] = useState({ blogs: []})
    const { user } = useContext(AuthContext);


      useEffect(()=> {
        const buscarTabela = async () => {
          const { data } = await axios.get(consultarToken(user?.idEmpresa));
          setPosts({blogs: data});
          console.log(data);
        };
        buscarTabela();
      },[setPosts])
     
 

  return (
    <div className="table-responsive">
       <table className="table table-xl">
          <thead>
            <tr>
              <th>Token</th>
              <th>Descrição</th>
              <th>Situação</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.blogs && posts.blogs.map((item) => (
                <tr key={item.token}>
                  <td>{item.token}</td>
                  <td>{item.descricao}</td>
                  <td>{item.status}</td>
                  <td>
                      <div className="d-flex">  
                        <a href="#" className="btn btn-primary shadow btn-xs sharp"><i className="fa fa-whatsapp"><div className="fechado"><span className="tooltiptext">Escanear Token</span></div></i></a>
                        <a className="btn btn-danger shadow btn-xs sharp mr-1"><i className="fa fa-trash"><div className="fechado"><span className="tooltiptext">Excluir Token</span></div></i></a>
                      </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
       </table>
    </div>
  )
}

export default TokenTable