import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createSession, createToken } from '../Config/services';

export const AuthContext = createContext();

export const AuthProvider =  ({children}) => {
    const navigate = useNavigate();
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            SetUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    },[]);
    
    const enviarToken = async (token, descricao, idEmpresa) => {
        const resposta = await createToken(token, descricao, idEmpresa);
        console.log("token criado", resposta.data);
    }

    const buscarToken = async (idEmpresa) => {
        const tabela = await buscarToken(idEmpresa);
        console.log("tabela gerada: ", tabela)
    }

    const loginUser = async (cliente, login, password) => {
        const response = await createSession(cliente, login, password);
        console.log("login", response.data);

    
        

        const loggedUser = response.data
        console.log("valor do loggedUser", loggedUser);

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(response.data.codigo==="1"){
            SetUser({loggedUser});	
            navigate(`/`);
            console.log(loggedUser);
        }
        
    };
    console.log("user logado: ",user);

    const logoutUser = () => {
        console.log("logout");
        SetUser(null);
        localStorage.removeItem("user");
        navigate("/login")
    };

    

    return(
        <AuthContext.Provider value={{authenticated:!!user, user, loading, loginUser, logoutUser, enviarToken, buscarToken}}>
            {children}
        </AuthContext.Provider>
    )
}