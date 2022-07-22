import React from 'react'
import UserSection from './UserSection';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HomeDash from './HomeDash';
import Campanhas from './Campanhas';
import ConfigDash from './ConfigDash';

class PageBody extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tab: "Home"
        }
    }

    render(){
        return (
            <div className="page-body-wrapper sidebar-icon">
                <header className="main-nav">
                    <UserSection />
                    <nav>
                        <div className="main-navbar">
                            <div className='mainnav'>
                                <ul className="nav-menu custom-scrollbar">
                                
                                        <li className="dropdown">
                                            <a  className={this.state.tab === "Home" ? "active" : "notactive"} 
                                            onClick={() => this.setState({tab: "Home"})}
                                            >
                                                <i><HomeIcon/></i>
                                                <span>Home</span>
                                            </a>
                                        </li>
                                
                                
                                        <li className="dropdown">
                                            <a  className={this.state.tab === "Campanhas" ? "active" : "notactive"}  
                                            onClick={() => this.setState({tab: "Campanhas"})}
                                            >
                                                <i><BusinessCenterIcon/></i>
                                                <span>Campanhas</span>
                                            </a>
                                        </li>
                        
                                        <li className="dropdown">
                                            <a  className={this.state.tab === "Configurações" ? "active" : "notactive"} 
                                            onClick={() => this.setState({tab: "Configurações"})}
                                            >
                                                <i><SettingsSuggestIcon/></i>
                                                <span>Configurações</span>
                                            </a>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="page-body"
                style={{display: this.state.tab === 'Home' ? "block" : "none"}}
                >
                    <div className="container-fluid">
                        <HomeDash/>
                    </div>
                </div>
                <div className="page-body"
                style={{display: this.state.tab === 'Campanhas' ? "block" : "none"}}
                >
                    <div className="container-fluid">
                        <Campanhas/>
                    </div>
                </div>
                <div className="page-body"
                style={{display: this.state.tab === 'Configurações' ? "block" : "none"}}
                >
                    <div className="container-fluid">
                        <ConfigDash/>
                    </div>
                </div>
            </div>
          )
    }
}

export default PageBody