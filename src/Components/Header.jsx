import React, {useContext} from 'react'
import Logo from '../Assets/Images/logomezap.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { AuthContext } from '../Context/auth'
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {

    const { logoutUser } = useContext(AuthContext);
    const handleLogout = () => {
      logoutUser();
    }

  return (
    <div className="page-main-header">
        <div className="main-header-right">
            <div className="main-header-left">
                <img className="logo-header" src={Logo} alt="logo mezap"   />
                <i><DehazeIcon fontSize="large"/></i>
            </div>
        </div>
        <div className="left-menu-header">
            <div className="left-menu-gap">
              <a onClick={handleLogout} className="nav-btn">
                    <span className='logout-icon'><LogoutIcon/> Logout</span>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Header