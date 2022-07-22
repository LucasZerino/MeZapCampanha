import React, { useState, useContext, useEffect } from 'react'
import dashboard1 from '../Pages/assets/images/dashboard/1.png'


const UserArea = () => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            SetUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    },[]);

    console.log("area do usuario", user);
    
  return (
    <div className="sidebar-user text-center"><a className="setting-primary"><i data-feather="settings"></i></a><img className="img-90 rounded-circle" src={dashboard1} alt=""/>
        <div className="badge-bottom"><span className="badge badge-primary">{user?.nome}</span></div><a href="user-profile.html">
        <h6 className="mt-3 f-14 f-w-600">{user?.Empresa}</h6></a>
        <p className="mb-0 font-roboto">Admin</p>
    </div>
  )
}

export default UserArea