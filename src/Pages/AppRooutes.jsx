import React, { useContext } from 'react';
import{BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { AuthProvider, AuthContext } from '../Context/auth';
import Campanhas from './Campanhas';
import Teste from './Teste'
import Token from './TokenPage'

const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className='loading'>CARREGANDO...</div>
        }
        if(!authenticated){
            return <Navigate to="/login"/>
        }
        return children;
    };

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage/>}/>
                    <Route path='/' element={<Private><HomePage/></Private>}/>
                    <Route path='/campanha' element={<Private><Campanhas/></Private>}/>
                    <Route path='*' element={<LoginPage/>}/>
                    <Route path='/teste' element={<Private><Teste/></Private>}/>
                    <Route path='/token' element={<Private><Token/></Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;