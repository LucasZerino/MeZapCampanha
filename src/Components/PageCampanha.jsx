import React from 'react'
import PageFooter from './PageFooter'
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Campanhas from './Campanhas.jsx';
import UserArea from './UserArea';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

class PageBodyHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "Campanhas"
        }
    }
  render(){
    return (
        <div className="page-body-wrapper sidebar-icon">
            <header className="main-nav">
                <UserArea/>
              <nav>
                <div className="main-navbar">
                  <div className="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
                  <div id="mainnav">           
                    <ul className="nav-menu custom-scrollbar">
                      <li className="back-btn">
                        <div className="mobile-back text-end"><span>Back</span><i className="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                      </li>
                      <li className="sidebar-main-title">
                        <div>
                          <h6>Dashboard</h6>
                        </div>
                      </li>
                      <li className="dropdown">
                      <a className="nav-link menu-title" href='/'>
                            <i><HomeIcon/></i>
                            <span>Home</span>
                        </a>
                      </li>
                      <li className="dropdown">
                        <a 
                        className={this.state.tab === "Campanhas" ? "nav-link menu-title active" : "nav-link menu-title"} 
                        onClick={() => this.setState({tab: "Campanhas"})} href='#'>
                            <i><BusinessCenterIcon/></i>
                            <span>Campanhas</span>
                        </a>
                      </li>
                      <li className="dropdown">
                      <a className="nav-link menu-title" href='/token'>
                            <i><DeviceHubIcon/></i>
                            <span>Token</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
                </div>
              </nav>
            </header>
            <div className='seletor'>
                <div
                style={{display: this.state.tab === 'Home' ? "block" : "none"}}
                >

                </div>
                <div
                style={{display: this.state.tab === 'Campanhas' ? "block" : "none"}}
                >
                    <Campanhas/>
                </div>
            </div>
            <PageFooter/>
          </div>
      )
  }
}

export default PageBodyHome