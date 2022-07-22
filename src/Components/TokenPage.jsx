import React from 'react'
import Tokens from './Tokens'
import ListaCampanhas from './ListaCampanhas'

class TokenPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        tab: "Tokens"
    }
}

  render(){
    return (
      <div className="page-body">
      <div className="container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-6">
              <h3><br/>Minhas Campanhas</h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Campanhas</li>
              </ol>
            </div>
            <div className="col-sm-6">
           
            </div>
          </div>
        </div>
      </div>
  
     <div className="abas"></div>
     <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="stepwizard">
                <div className="stepwizard-row setup-panel">
                  <div className="stepwizard-step">
                    <a 
                     onClick={()=> this.setState({tab: "Tokens"})} href='#'
                    className={this.state.tab === "Tokens" ? "btn btn-primary" : "btn btn-light"}>
                      Tokens
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form action="#" method="POST">
                  <div className="setup-content"
                  style={{display: this.state.tab === 'Tokens' ? "block" : "none"}}
                  >
                    <Tokens/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default TokenPage