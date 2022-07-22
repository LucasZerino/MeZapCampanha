import React from 'react'
import TokenCadastro from './TokenCadastro'
import CloseIcon from '@mui/icons-material/Close';
import TokenTable from './TokenTable';


class Tokens extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "Token"
        }
    }
render(){
    return (
        <div className="col-lg-12">
            <div className='tokeni'
            style={{display: this.state.tab === 'Gerar' ? "block" : "none"}}
            >
                <TokenCadastro/>
                <CloseIcon 
                className='fechar'
                onClick={() => this.setState({tab: "Token"})}/>
            </div>
            <div className='cadastrar'>
            <a className='btn btn-primary' onClick={() => this.setState({tab: "Gerar"})}>Gerar Novo Token</a>
            </div>
            <br/>
            <div className="card">
                <div className="card-body">
                        <TokenTable/>                
                </div>
            </div>
        </div>
      )
}
}

export default Tokens