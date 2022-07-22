import React from 'react'
import Avatar from '../Assets/Images/padrao/avatarpadrao.png'

const UserSection = () => {
  return (
    <div className="sidebar-user text-center">
        <div className='img-circle'>
            <div className='img-bg'>
                <img className="img-90 rounded-circle" src={Avatar} alt=""/>
            </div>
            <div className="badge-bottom">
                <span className="badge badge-primary">Érico César</span>
            </div>
        </div>
        <h6 className="user-integracao">Integração</h6>
        <p className="integracao-name">Associação Pensar Clube de Beneficios</p>
    </div>
  )
}

export default UserSection